import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Drifting motes: pollen over the river, silt and bubbles once you are
 * under it.
 *
 * They exist for depth perception more than decoration — with nothing
 * between the camera and the water, there is no parallax cue and the whole
 * shot flattens. A few hundred specks at varying distances fix that for
 * almost nothing.
 *
 * One buffer, animated in the vertex shader: no per-frame CPU work and no
 * per-particle draw calls.
 */
export default function Motes({
  count = 700,
  submergedRef,
}: {
  count?: number
  submergedRef: React.MutableRefObject<number>
}) {
  const mat = useRef<THREE.ShaderMaterial>(null)

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const seed = new Float32Array(count)
    const size = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 70
      pos[i * 3 + 1] = 4 - Math.random() * 46
      pos[i * 3 + 2] = (Math.random() - 0.5) * 70
      seed[i] = Math.random() * 100
      size[i] = Math.random() * Math.random() * 2.6 + 0.35
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
    return g
  }, [count])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSubmerged: { value: 0 },
      uAir: { value: new THREE.Color('#ffe6c2') },
      uWater: { value: new THREE.Color('#bfeaff') },
    }),
    [],
  )

  useFrame(({ clock }) => {
    if (!mat.current) return
    mat.current.uniforms.uTime.value = clock.elapsedTime
    mat.current.uniforms.uSubmerged.value = submergedRef.current
  })

  return (
    <points geometry={geo} frustumCulled={false}>
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
        vertexShader={/* glsl */ `
          attribute float aSeed;
          attribute float aSize;
          uniform float uTime;
          varying float vFade;
          varying float vSeed;

          void main() {
            vSeed = aSeed;
            vec3 p = position;

            // Lazy figure-of-eight drift, plus a slow rise. Wrapped with
            // mod so the field never empties out.
            float t = uTime * 0.12 + aSeed;
            p.x += sin(t * 1.3) * 1.1;
            p.z += cos(t * 0.9) * 1.1;
            p.y = mod(p.y + uTime * 0.22 + aSeed, 50.0) - 46.0;

            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            // Fade out the ones nearly on top of the lens; a mote filling
            // the screen reads as a smudge on the glass.
            vFade = smoothstep(0.6, 6.0, -mv.z) * smoothstep(90.0, 30.0, -mv.z);
            gl_PointSize = aSize * (150.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `}
        fragmentShader={/* glsl */ `
          uniform float uSubmerged;
          uniform vec3 uAir;
          uniform vec3 uWater;
          uniform float uTime;
          varying float vFade;
          varying float vSeed;

          void main() {
            vec2 d = gl_PointCoord - 0.5;
            float r = length(d);
            if (r > 0.5) discard;
            float core = smoothstep(0.5, 0.0, r);
            float flick = 0.7 + 0.3 * sin(uTime * 2.2 + vSeed * 8.0);
            vec3 col = mix(uAir, uWater, uSubmerged);
            gl_FragColor = vec4(col, core * core * vFade * flick * 0.55);
          }
        `}
      />
    </points>
  )
}
