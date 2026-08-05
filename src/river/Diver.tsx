import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Otter from './Otter'
import { sampleWater } from './waves'
import { sceneTime } from './quality'

/**
 * The otter that takes you down.
 *
 * Until the descent starts it floats on its back with the others. Once the
 * camera begins to sink it rolls nose-down, leads the way through the
 * surface and keeps station just below and ahead of the lens, so the dive
 * always has a subject instead of being an empty camera move.
 *
 * The bubble trail is a ring buffer: each emitted bubble remembers where it
 * was born and rises from there, which is far cheaper than a physics step
 * and reads the same at this scale.
 */

const TRAIL = 90

export default function Diver({
  progress,
  spread,
}: {
  progress: React.MutableRefObject<number>
  spread: number
}) {
  const body = useRef<THREE.Group>(null)
  const bubbles = useRef<THREE.Points>(null)

  // Ring buffer of bubble origins, plus the time each was released.
  const trail = useMemo(() => {
    const positions = new Float32Array(TRAIL * 3)
    const born = new Float32Array(TRAIL)
    const seed = new Float32Array(TRAIL)
    for (let i = 0; i < TRAIL; i++) {
      born[i] = -999
      seed[i] = Math.random()
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('aBorn', new THREE.BufferAttribute(born, 1))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    return { g, positions, born, seed, head: 0, lastEmit: 0 }
  }, [])

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useFrame(({ clock }) => {
    const t = sceneTime(clock.elapsedTime)
    const s = progress.current
    // Same curve the camera uses, or the two drift apart mid-descent.
    const dive = THREE.MathUtils.smoothstep(s, 0.34, 0.86)

    if (!body.current) return

    // Where it would be floating if it never dived.
    const driftZ = ((-14 + t * 0.5 + 60) % 120) - 60
    const surf = sampleWater(1.8 * spread, driftZ, t)

    // Descending path: stays below the camera's own descent so it is always
    // in shot, and swings out slightly so it is not dead centre.
    const y = THREE.MathUtils.lerp(surf.y - 0.2, -40, dive)
    const x = THREE.MathUtils.lerp(surf.x, 2.2 * spread + Math.sin(t * 0.3) * 1.6, dive)
    const z = THREE.MathUtils.lerp(surf.z, -8 + Math.cos(t * 0.24) * 1.4, dive)
    body.current.position.set(x, y, z)

    // Rolls from belly-up to nose-down over the first third of the dive,
    // then keeps turning slowly as it falls.
    const roll = THREE.MathUtils.smoothstep(dive, 0, 0.34)
    body.current.rotation.set(
      THREE.MathUtils.lerp(surf.tiltZ * 0.4, -1.15, roll),
      THREE.MathUtils.lerp(Math.PI * 0.12, Math.PI * 0.5, roll) + dive * 0.6,
      THREE.MathUtils.lerp(-surf.tiltX * 0.4, 0.25, roll),
    )

    // Bubbles only exist while it is actually under water.
    const emitting = dive > 0.05 && y < 0.4 && y > -34
    if (emitting && t - trail.lastEmit > 0.055) {
      trail.lastEmit = t
      const i = trail.head
      trail.positions[i * 3] = x + (Math.random() - 0.5) * 0.5
      trail.positions[i * 3 + 1] = y + 0.3
      trail.positions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.5
      trail.born[i] = t
      trail.head = (trail.head + 1) % TRAIL
      trail.g.attributes.position.needsUpdate = true
      trail.g.attributes.aBorn.needsUpdate = true
    }

    uniforms.uTime.value = t
    if (bubbles.current) bubbles.current.visible = dive > 0.02
  })

  return (
    <>
      <group ref={body} scale={1.5}>
        <Otter phase={0.9} />
      </group>

      <points ref={bubbles} geometry={trail.g} frustumCulled={false}>
        <shaderMaterial
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
          vertexShader={/* glsl */ `
            attribute float aBorn;
            attribute float aSeed;
            uniform float uTime;
            varying float vLife;
            void main() {
              float age = uTime - aBorn;
              vLife = clamp(1.0 - age / 3.2, 0.0, 1.0);
              vec3 p = position;
              // Rise, wobbling a little as they go.
              p.y += age * 1.5;
              p.x += sin(age * 2.4 + aSeed * 10.0) * 0.18;
              p.z += cos(age * 2.1 + aSeed * 8.0) * 0.18;
              vec4 mv = modelViewMatrix * vec4(p, 1.0);
              float dist = max(-mv.z, 0.001);

              // The camera descends straight through its own bubble trail, so
              // dist goes to near zero every run. Unclamped, perspective
              // scaling turned a 5px sprite into a 2000px additive disc and
              // the whole frame went pale grey.
              gl_PointSize = clamp((1.6 + aSeed * 3.4) * vLife * (70.0 / dist), 1.0, 26.0);

              // Fade out anything that gets intimate with the lens rather
              // than letting it bloom across the shot.
              vLife *= smoothstep(1.2, 4.5, dist);
              gl_Position = projectionMatrix * mv;
            }
          `}
          fragmentShader={/* glsl */ `
            varying float vLife;
            void main() {
              vec2 d = gl_PointCoord - 0.5;
              float r = length(d);
              if (r > 0.5) discard;
              // Ring rather than blob — a bubble is mostly its rim.
              float rim = smoothstep(0.5, 0.34, r) * smoothstep(0.18, 0.32, r);
              float core = smoothstep(0.5, 0.0, r) * 0.25;
              gl_FragColor = vec4(vec3(0.82, 0.93, 1.0), (rim + core) * vLife * 0.42);
            }
          `}
        />
      </points>
    </>
  )
}
