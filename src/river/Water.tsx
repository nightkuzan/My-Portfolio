import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { WAVES, WAVE_GLSL } from './waves'
import { quality, sceneTime } from './quality'

/**
 * The river surface. One Gerstner-displaced plane, shaded twice over:
 * as daylight water near the top of the journey, and as the skin of a
 * star field once the camera has dropped through it.
 *
 * uSpace (0..1) crossfades the two looks; the geometry never changes, so
 * the transition costs nothing.
 *
 * Reflection uses a proper Schlick term against a sky *gradient*. An
 * earlier version multiplied a single warm colour by raw fresnel, which
 * saturates to 1 at grazing angles — the whole river turned into a sheet
 * of amber sand. Capping the term and reflecting an actual sky keeps the
 * horizon readable.
 */
export default function Water({
  spaceRef,
}: {
  spaceRef: React.MutableRefObject<number>
}) {
  const mat = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpace: { value: 0 },
      uSun: { value: new THREE.Vector3(0.42, 0.5, -0.76).normalize() },
      uSunCol: { value: new THREE.Color('#ffcf96') },
      uDeep: { value: new THREE.Color('#05201d') },
      uShallow: { value: new THREE.Color('#12615a') },
      uHorizon: { value: new THREE.Color('#cfe0da') },
      uZenith: { value: new THREE.Color('#4d86a8') },
      uVoidLow: { value: new THREE.Color('#03040c') },
      uVoidHigh: { value: new THREE.Color('#0c1436') },
      uStarTint: { value: new THREE.Color('#9fb6ff') },
      ...WAVES.reduce((acc, w, i) => {
        acc[`uW${i}`] = {
          value: new THREE.Vector4(w.dir[0], w.dir[1], w.steepness, w.wavelength),
        }
        acc[`uS${i}`] = { value: w.speed }
        return acc
      }, {} as Record<string, { value: THREE.Vector4 | number }>),
    }),
    [],
  )

  useFrame(({ clock }) => {
    if (!mat.current) return
    mat.current.uniforms.uTime.value = sceneTime(clock.elapsedTime)
    mat.current.uniforms.uSpace.value = spaceRef.current
  })

  const vertex = /* glsl */ `
    ${WAVE_GLSL}
    uniform float uTime;
    uniform vec4 uW0; uniform float uS0;
    uniform vec4 uW1; uniform float uS1;
    uniform vec4 uW2; uniform float uS2;
    uniform vec4 uW3; uniform float uS3;

    varying vec3 vNormal;
    varying vec3 vWorld;
    varying float vCrest;

    void main() {
      vec3 p = position;
      vec3 tangent = vec3(1.0, 0.0, 0.0);
      vec3 binormal = vec3(0.0, 0.0, 1.0);
      vec3 acc = vec3(0.0);

      Wave w0 = Wave(uW0.xy, uW0.z, uW0.w, uS0);
      Wave w1 = Wave(uW1.xy, uW1.z, uW1.w, uS1);
      Wave w2 = Wave(uW2.xy, uW2.z, uW2.w, uS2);
      Wave w3 = Wave(uW3.xy, uW3.z, uW3.w, uS3);

      acc += gerstner(w0, p, uTime, tangent, binormal);
      acc += gerstner(w1, p, uTime, tangent, binormal);
      acc += gerstner(w2, p, uTime, tangent, binormal);
      acc += gerstner(w3, p, uTime, tangent, binormal);

      p += acc;
      vCrest = acc.y;

      vec3 n = normalize(cross(binormal, tangent));
      vNormal = normalize(mat3(modelMatrix) * n);

      vec4 world = modelMatrix * vec4(p, 1.0);
      vWorld = world.xyz;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `

  const fragment = /* glsl */ `
    uniform float uTime;
    uniform float uSpace;
    uniform vec3 uSun;
    uniform vec3 uSunCol;
    uniform vec3 uDeep;
    uniform vec3 uShallow;
    uniform vec3 uHorizon;
    uniform vec3 uZenith;
    uniform vec3 uVoidLow;
    uniform vec3 uVoidHigh;
    uniform vec3 uStarTint;

    varying vec3 vNormal;
    varying vec3 vWorld;
    varying float vCrest;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    // Sparse twinkling points, used only for the cosmic half.
    float starField(vec2 uv) {
      vec2 id = floor(uv);
      vec2 gv = fract(uv) - 0.5;
      float h = hash21(id);
      if (h < 0.90) return 0.0;
      vec2 off = (vec2(hash21(id + 1.7), hash21(id + 3.1)) - 0.5) * 0.66;
      float d = length(gv - off);
      float tw = 0.55 + 0.45 * sin(uTime * 1.7 + h * 60.0);
      return smoothstep(0.055, 0.0, d) * tw;
    }

    // Value noise + its gradient, used to roughen the surface normal.
    float vnoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
      vec3 N = normalize(vNormal);

      // Four Gerstner waves alone give long, glassy streaks. A little
      // high-frequency chop in the normal is what stops the river looking
      // like moulded plastic — it never changes the silhouette, only how
      // light scatters off it.
      vec2 q = vWorld.xz;
      float e = 0.35;
      vec2 drift = vec2(uTime * 0.35, uTime * -0.22);
      float n0 = vnoise(q * 1.6 + drift);
      float nx = vnoise((q + vec2(e, 0.0)) * 1.6 + drift) - n0;
      float nz = vnoise((q + vec2(0.0, e)) * 1.6 + drift) - n0;
      float n1 = vnoise(q * 4.3 - drift * 1.7);
      float mx = vnoise((q + vec2(e, 0.0)) * 4.3 - drift * 1.7) - n1;
      float mz = vnoise((q + vec2(0.0, e)) * 4.3 - drift * 1.7) - n1;
      // Kept gentle. Pushed harder, the normal swings far enough that
      // fresnel collapses in patches and the river breaks out in dark
      // freckles that read as floating debris.
      N = normalize(N + vec3(nx * 0.45 + mx * 0.22, 0.0, nz * 0.45 + mz * 0.22));

      vec3 V = normalize(cameraPosition - vWorld);
      float NdV = clamp(dot(N, V), 0.0, 1.0);

      // Schlick with water's real F0, then capped. Uncapped this reaches 1
      // along the whole horizon and erases the water underneath it.
      float fres = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
      fres = clamp(fres, 0.0, 0.52);

      // Troughs read deeper than crests.
      float depth = smoothstep(-0.55, 0.65, vCrest);

      // Reflected sky varies with view elevation, which is what gives the
      // surface a sense of facing somewhere.
      float up = clamp(V.y * 0.5 + 0.5, 0.0, 1.0);

      // --- daylight river -------------------------------------------
      vec3 body = mix(uDeep, uShallow, depth);
      vec3 sky = mix(uHorizon, uZenith, up);
      vec3 river = mix(body, sky, fres);
      float spec = pow(max(dot(reflect(-uSun, N), V), 0.0), 260.0);
      river += uSunCol * spec * 2.4;
      river += vec3(0.86, 0.94, 0.92) * smoothstep(0.5, 0.72, vCrest) * 0.35;

      // --- the same water, over deep space ---------------------------
      vec3 voidBody = mix(uVoidLow, uVoidHigh, depth);
      vec3 voidSky = mix(uVoidHigh, vec3(0.02, 0.03, 0.09), up);
      vec3 cosmic = mix(voidBody, voidSky, fres);
      cosmic += vec3(0.9, 0.93, 1.0) * starField(vWorld.xz * 1.25 + N.xz * 2.6) * 0.85;
      cosmic += uStarTint * spec * 1.4;

      vec3 col = mix(river, cosmic, uSpace);
      gl_FragColor = vec4(col, 1.0);
      #include <colorspace_fragment>
    }
  `

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry
        args={[
          quality.waterSize,
          quality.waterSize,
          quality.waterSegments,
          quality.waterSegments,
        ]}
      />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  )
}
