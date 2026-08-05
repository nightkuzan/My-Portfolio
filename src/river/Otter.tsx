import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { reducedMotion, sceneTime } from './quality'
import { applyCaustics } from './caustics'
import { addProbe, removeProbe } from './interaction'

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
  const head = useRef<THREE.Group>(null)

  const { camera } = useThree()

  // Registered for as long as this otter is mounted; Scene does the hit
  // test against every probe once per frame.
  const probe = useMemo(() => addProbe(), [])
  useEffect(() => () => removeProbe(probe.id), [probe])

  /** Eased 0..1 hover response, so it never snaps. */
  const perk = useRef(0)
  const scratch = useMemo(() => new THREE.Vector3(), [])

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
    // Trimmed after seeing a close otter mid-dive: at half strength the
    // filaments stop reading as light on wet fur and start reading as
    // white ribbons wrapped around the animal.
    applyCaustics(m.fur, 0.36)
    applyCaustics(m.furDark, 0.3)
    applyCaustics(m.cream, 0.24)
    return m
  }, [])

  // Idle life: a slow breath in the chest and a lazy paw drift. Without this
  // the otter reads as a prop instead of an animal.
  useFrame(({ clock }, dt) => {
    // Two clocks. Ambient life runs on the scene clock, which `?still`
    // pauses; a reaction to a click runs on the wall clock, because it was
    // the visitor who started it.
    const raw = clock.elapsedTime
    const t = sceneTime(clock.elapsedTime) + phase
    const g = group.current
    if (!g) return

    const paw = Math.sin(t * 0.7) * 0.06
    if (armL.current) armL.current.rotation.z = 0.9 + paw
    if (armR.current) armR.current.rotation.z = -0.9 - paw

    if (reducedMotion) {
      g.rotation.z = rotation[2]
      probe.active = false
      return
    }

    // Publish where we ended up. The parent has already positioned us this
    // frame, so the world matrix is one update away from current.
    g.updateWorldMatrix(true, false)
    g.getWorldPosition(probe.pos)
    g.getWorldScale(scratch)
    probe.radius = 1.05 * scratch.x
    probe.active = true

    const step = Math.min(dt, 0.05)
    perk.current += ((probe.hovered ? 1 : 0) - perk.current) * 7 * step

    // A poke sends it into a barrel roll along its own length. Eased in and
    // out so it winds up and settles rather than cutting to a constant spin.
    const since = raw - probe.poked
    const SPIN = 1.0
    const roll =
      since >= 0 && since < SPIN
        ? THREE.MathUtils.smoothstep(since / SPIN, 0, 1) * Math.PI * 2
        : 0
    // A little squash on top of the hover swell, peaking as the roll starts.
    const pop = since >= 0 && since < SPIN ? Math.sin((since / SPIN) * Math.PI) * 0.14 : 0

    g.rotation.x = roll
    g.rotation.z = rotation[2] + Math.sin(t * 0.5) * 0.05
    g.scale.setScalar(scale * (1 + perk.current * 0.11 + pop))

    // Turns its head toward you while you are pointing at it. Aiming the
    // whole body would fight whatever the parent is doing with the pose.
    if (head.current) {
      let yaw = 0
      if (perk.current > 0.002) {
        // Camera in the otter's own space; the head's forward axis is +X.
        g.worldToLocal(scratch.copy(camera.position))
        yaw = THREE.MathUtils.clamp(Math.atan2(-scratch.z, scratch.x), -0.75, 0.75)
      }
      head.current.rotation.y = yaw * perk.current
    }
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
      <group ref={head} position={[0.72, 0.16, 0]} rotation={[0, 0, -0.34]}>
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
