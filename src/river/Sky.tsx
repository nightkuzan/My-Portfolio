import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { sceneTime } from './quality'

/**
 * Sky dome. Without one the water plane runs edge to edge and the shot has
 * no horizon, which is what makes a wave field read as flat ground.
 *
 * Rendered on the inside of a large sphere with depth writing off, so it
 * always sits behind everything else regardless of scene scale.
 */
export default function Sky({
  spaceRef,
  underRef,
  afterRef,
}: {
  spaceRef: React.MutableRefObject<number>
  /** How far below the surface we are, 0..1 — independent of how deep. */
  underRef: React.MutableRefObject<number>
  /** Scroll through the content below the dive, 0..1. */
  afterRef: React.MutableRefObject<number>
}) {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpace: { value: 0 },
      uSunDir: { value: new THREE.Vector3(0.42, 0.28, -0.86).normalize() },
      uHorizon: { value: new THREE.Color('#e8dcc6') },
      uZenith: { value: new THREE.Color('#3f7fa8') },
      uSunCol: { value: new THREE.Color('#ffd7a0') },
      uVoidHorizon: { value: new THREE.Color('#0a1030') },
      uVoidZenith: { value: new THREE.Color('#01020a') },
      uNebulaA: { value: new THREE.Color('#5b3f92') },
      uNebulaB: { value: new THREE.Color('#1e5c86') },
      /** Second palette, crossfaded in across the length of the page. */
      uNebulaC: { value: new THREE.Color('#8a4a6d') },
      uNebulaD: { value: new THREE.Color('#2e6f70') },
      uAfter: { value: 0 },
      uSubmerged: { value: 0 },
      uMurkNear: { value: new THREE.Color('#1d4f52') },
      uMurkFar: { value: new THREE.Color('#04161c') },
    }),
    [],
  )

  useFrame(({ clock, camera }) => {
    if (!mat.current) return
    mat.current.uniforms.uTime.value = sceneTime(clock.elapsedTime)
    mat.current.uniforms.uSpace.value = spaceRef.current
    mat.current.uniforms.uSubmerged.value = underRef.current
    mat.current.uniforms.uAfter.value = afterRef.current
    // Ride with the camera. Anchored at the origin, the dome's idea of
    // "up" drifts as the camera descends and the horizon slides off.
    if (mesh.current) mesh.current.position.copy(camera.position)
  })

  // Viewed from inside, so render back faces. Flipping with a negative
  // scale also works but inverts winding in ways that are easy to get
  // wrong; BackSide is unambiguous.
  return (
    <mesh ref={mesh} renderOrder={-1} frustumCulled={false}>
      <sphereGeometry args={[300, 48, 32]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
        side={THREE.BackSide}
        toneMapped={false}
        vertexShader={/* glsl */ `
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={/* glsl */ `
          uniform float uTime;
          uniform float uSpace;
          uniform vec3 uSunDir;
          uniform vec3 uHorizon;
          uniform vec3 uZenith;
          uniform vec3 uSunCol;
          uniform vec3 uVoidHorizon;
          uniform vec3 uVoidZenith;
          uniform vec3 uNebulaA;
          uniform vec3 uNebulaB;
          uniform vec3 uNebulaC;
          uniform vec3 uNebulaD;
          uniform float uAfter;
          uniform float uSubmerged;
          uniform vec3 uMurkNear;
          uniform vec3 uMurkFar;
          varying vec3 vDir;

          float hash(vec3 p) {
            p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
            p *= 17.0;
            return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
          }
          float noise(vec3 x) {
            vec3 i = floor(x);
            vec3 f = fract(x);
            f = f * f * (3.0 - 2.0 * f);
            return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                           mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                       mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                           mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
          }
          float fbm(vec3 p) {
            float v = 0.0, a = 0.5;
            for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
            return v;
          }

          void main() {
            float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);

            // --- daylight ------------------------------------------------
            vec3 day = mix(uHorizon, uZenith, pow(h, 0.7));
            float sd = max(dot(normalize(vDir), uSunDir), 0.0);
            // Tight disc plus a wide, weak bloom. A hot core with no falloff
            // clips to flat white and loses the sun's shape entirely.
            float disc = pow(sd, 900.0);
            float inner = pow(sd, 28.0);
            float halo = pow(sd, 4.0);
            day += uSunCol * disc * 1.6;
            day += uSunCol * inner * 0.5;
            day += uSunCol * halo * 0.16;

            // --- deep space ----------------------------------------------
            vec3 night = mix(uVoidHorizon, uVoidZenith, pow(h, 0.55));
            // A slow, low-contrast nebula. Anything busier starts to look
            // like stock space art.
            float n = fbm(vDir * 2.6 + vec3(0.0, uTime * 0.008, 0.0));
            float n2 = fbm(vDir * 5.1 - vec3(uTime * 0.006, 0.0, 0.0));
            // The palette walks from violet-blue to rose-teal across the
            // page. Slow enough that nobody catches it changing, but the
            // Contact section is demonstrably not the colour the About
            // section was — which is the point.
            vec3 nebA = mix(uNebulaA, uNebulaC, uAfter);
            vec3 nebB = mix(uNebulaB, uNebulaD, uAfter);
            vec3 neb = mix(nebA, nebB, n2);
            night += neb * smoothstep(0.45, 0.95, n) * 0.5;

            // --- the moment just under the surface ------------------------
            // Light still comes from above, so the murk is graded by height
            // rather than being a flat wash. This is the beat that sells the
            // idea that you went *through* something.
            vec3 murk = mix(uMurkFar, uMurkNear, pow(h, 1.6));
            float shaft = pow(max(dot(normalize(vDir), uSunDir), 0.0), 12.0);
            murk += uSunCol * shaft * 0.22 * smoothstep(0.35, 1.0, h);

            // Order matters. Blending day->night first and then folding the
            // murk in on top left roughly a third of the daylight sky alive
            // through the middle of the descent, and the deepest water came
            // out a pale lavender grey. The journey is sequential — you go
            // under, and only then does it get dark — so the mixes are too.
            vec3 col = mix(day, murk, uSubmerged);
            col = mix(col, night, uSpace);
            gl_FragColor = vec4(col, 1.0);
            #include <colorspace_fragment>
          }
        `}
      />
    </mesh>
  )
}
