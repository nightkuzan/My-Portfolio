import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { burstQueue } from './interaction'

/**
 * Shared burst emitter — the puff of bubbles an otter lets out when you
 * poke it.
 *
 * One ring buffer for the whole scene rather than a system per otter: the
 * bursts are short-lived and never overlap by more than a couple, so a
 * single pool of 140 points covers every otter at a fraction of the draw
 * calls.
 */

const POOL = 140
const PER_BURST = 22

export default function Bubbles() {
  const points = useRef<THREE.Points>(null)

  const pool = useMemo(() => {
    const position = new Float32Array(POOL * 3)
    const velocity = new Float32Array(POOL * 3)
    const born = new Float32Array(POOL).fill(-999)
    const seed = new Float32Array(POOL)
    for (let i = 0; i < POOL; i++) seed[i] = Math.random()

    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(position, 3))
    g.setAttribute('aVel', new THREE.BufferAttribute(velocity, 3))
    g.setAttribute('aBorn', new THREE.BufferAttribute(born, 1))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    // Never culled: the bounding sphere is computed once from an empty
    // buffer, so left to itself the whole system pops out of view.
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4)
    return { g, position, velocity, born, head: 0 }
  }, [])

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useFrame(({ clock }) => {
    // Wall clock: a burst is a response to a click, so it keeps running even
    // when the ambient scene clock is held.
    const t = clock.elapsedTime
    uniforms.uTime.value = t

    if (burstQueue.length === 0) return

    while (burstQueue.length) {
      const at = burstQueue.shift()!
      for (let n = 0; n < PER_BURST; n++) {
        const i = pool.head
        pool.head = (pool.head + 1) % POOL

        // Scatter over a small sphere so the burst has a source rather than
        // being a flat disc of points.
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = 0.25 + Math.random() * 0.4
        pool.position[i * 3] = at.x + Math.sin(phi) * Math.cos(theta) * r
        pool.position[i * 3 + 1] = at.y + Math.cos(phi) * r * 0.6
        pool.position[i * 3 + 2] = at.z + Math.sin(phi) * Math.sin(theta) * r

        // Outward kick, biased upward — bubbles have somewhere to be.
        const speed = 0.5 + Math.random() * 1.1
        pool.velocity[i * 3] = Math.sin(phi) * Math.cos(theta) * speed
        pool.velocity[i * 3 + 1] = 0.8 + Math.random() * 1.3
        pool.velocity[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * speed

        pool.born[i] = t
      }
    }

    pool.g.attributes.position.needsUpdate = true
    pool.g.attributes.aVel.needsUpdate = true
    pool.g.attributes.aBorn.needsUpdate = true
    if (points.current) points.current.visible = true
  })

  return (
    <points ref={points} geometry={pool.g} frustumCulled={false}>
      <shaderMaterial
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
        vertexShader={/* glsl */ `
          attribute vec3 aVel;
          attribute float aBorn;
          attribute float aSeed;
          uniform float uTime;
          varying float vLife;

          void main() {
            float age = uTime - aBorn;
            vLife = clamp(1.0 - age / 2.4, 0.0, 1.0);

            // Ballistic, with drag: the kick dies off and buoyancy takes
            // over, which is what a bubble actually does.
            float drag = 1.0 - exp(-age * 2.2);
            vec3 p = position + aVel * (drag / 2.2);
            p.y += age * 0.9;
            p.x += sin(age * 3.1 + aSeed * 12.0) * 0.09;
            p.z += cos(age * 2.7 + aSeed * 9.0) * 0.09;

            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            float dist = max(-mv.z, 0.001);
            gl_PointSize = clamp((2.0 + aSeed * 4.0) * vLife * (70.0 / dist), 1.0, 30.0);
            vLife *= smoothstep(1.0, 3.5, dist);
            gl_Position = projectionMatrix * mv;
          }
        `}
        fragmentShader={/* glsl */ `
          varying float vLife;
          void main() {
            vec2 d = gl_PointCoord - 0.5;
            float r = length(d);
            if (r > 0.5) discard;
            float rim = smoothstep(0.5, 0.33, r) * smoothstep(0.16, 0.31, r);
            float core = smoothstep(0.5, 0.0, r) * 0.22;
            gl_FragColor = vec4(vec3(0.86, 0.95, 1.0), (rim + core) * vLife * 0.62);
          }
        `}
      />
    </points>
  )
}
