import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { sceneTime } from './quality'
import { applyCaustics } from './caustics'

/**
 * A river otter, modelled in code rather than loaded from a file.
 *
 * Built from primitives on purpose: no licence to attribute, nothing to
 * download, and the silhouette stays readable at any distance. The pose is
 * the one otters are known for — floating on their back, paws folded on the
 * chest, looking up.
 */

const FUR = '#7d5636'
const FUR_DARK = '#5d3d25'
const CREAM = '#d8bb93'
const DARK = '#17110c'

export type OtterProps = {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  /** Slight per-otter offset so a group never moves in lockstep. */
  phase?: number
}

export default function Otter({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  phase = 0,
}: OtterProps) {
  const group = useRef<THREE.Group>(null)
  const armL = useRef<THREE.Mesh>(null)
  const armR = useRef<THREE.Mesh>(null)

  const mats = useMemo(() => {
    const m = {
      fur: new THREE.MeshStandardMaterial({ color: FUR, roughness: 0.82, metalness: 0 }),
      furDark: new THREE.MeshStandardMaterial({ color: FUR_DARK, roughness: 0.85 }),
      cream: new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.78 }),
      dark: new THREE.MeshStandardMaterial({ color: DARK, roughness: 0.25, metalness: 0.1 }),
      eye: new THREE.MeshStandardMaterial({
        color: DARK,
        roughness: 0.08,
        metalness: 0.35,
      }),
    }
    // Fur and belly catch the water light; the eyes and nose are wet and
    // dark, and lighting them the same way just makes them look dusty.
    applyCaustics(m.fur, 0.5)
    applyCaustics(m.furDark, 0.42)
    applyCaustics(m.cream, 0.34)
    return m
  }, [])

  // Idle life: a slow breath in the chest and a lazy paw drift. Without this
  // the otter reads as a prop instead of an animal.
  useFrame(({ clock }) => {
    const t = sceneTime(clock.elapsedTime) + phase
    if (group.current) {
      group.current.rotation.z = rotation[2] + Math.sin(t * 0.5) * 0.05
    }
    const paw = Math.sin(t * 0.7) * 0.06
    if (armL.current) armL.current.rotation.z = 0.9 + paw
    if (armR.current) armR.current.rotation.z = -0.9 - paw
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      {/* torso — lying along X, belly up */}
      <mesh material={mats.fur} castShadow rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.34, 0.62, 8, 20]} />
      </mesh>
      {/* pale belly, slightly proud of the torso so it catches the key light */}
      <mesh material={mats.cream} position={[0, 0.16, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.29, 0.58, 6, 18]} />
      </mesh>

      {/* head, tipped back the way a floating otter holds it */}
      <group position={[0.72, 0.16, 0]} rotation={[0, 0, -0.34]}>
        <mesh material={mats.fur} castShadow>
          <sphereGeometry args={[0.31, 22, 18]} />
        </mesh>
        {/* muzzle */}
        <mesh material={mats.cream} position={[0.2, -0.09, 0]} scale={[1, 0.78, 0.92]}>
          <sphereGeometry args={[0.19, 18, 14]} />
        </mesh>
        <mesh material={mats.dark} position={[0.36, -0.05, 0]} scale={[0.8, 0.62, 1]}>
          <sphereGeometry args={[0.062, 12, 10]} />
        </mesh>
        {/* eyes */}
        <mesh material={mats.eye} position={[0.19, 0.11, 0.16]}>
          <sphereGeometry args={[0.052, 14, 12]} />
        </mesh>
        <mesh material={mats.eye} position={[0.19, 0.11, -0.16]}>
          <sphereGeometry args={[0.052, 14, 12]} />
        </mesh>
        {/* ears */}
        <mesh material={mats.furDark} position={[-0.06, 0.2, 0.22]} scale={[1, 0.7, 0.5]}>
          <sphereGeometry args={[0.075, 12, 10]} />
        </mesh>
        <mesh material={mats.furDark} position={[-0.06, 0.2, -0.22]} scale={[1, 0.7, 0.5]}>
          <sphereGeometry args={[0.075, 12, 10]} />
        </mesh>
      </group>

      {/* forepaws folded on the chest */}
      <mesh ref={armL} material={mats.furDark} position={[0.3, 0.3, 0.2]} rotation={[0, 0, 0.9]}>
        <capsuleGeometry args={[0.075, 0.24, 6, 10]} />
      </mesh>
      <mesh ref={armR} material={mats.furDark} position={[0.3, 0.3, -0.2]} rotation={[0, 0, -0.9]}>
        <capsuleGeometry args={[0.075, 0.24, 6, 10]} />
      </mesh>

      {/* hind feet breaking the surface */}
      <mesh material={mats.furDark} position={[-0.5, 0.26, 0.19]} rotation={[0, 0, 0.5]} scale={[1, 0.6, 1]}>
        <sphereGeometry args={[0.13, 12, 10]} />
      </mesh>
      <mesh material={mats.furDark} position={[-0.5, 0.26, -0.19]} rotation={[0, 0, -0.5]} scale={[1, 0.6, 1]}>
        <sphereGeometry args={[0.13, 12, 10]} />
      </mesh>

      {/* tail, tapering away from the body */}
      <mesh material={mats.fur} position={[-0.92, -0.02, 0]} rotation={[0, 0, Math.PI / 2 + 0.18]}>
        <coneGeometry args={[0.17, 0.72, 14]} />
      </mesh>
    </group>
  )
}
