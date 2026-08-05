import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Water from './Water'
import Sky from './Sky'
import Motes from './Motes'
import Post from './Post'
import Diver from './Diver'
import Shafts from './Shafts'
import Otter from './Otter'
import { sampleWater } from './waves'
import { causticTime } from './caustics'
import { quality, reducedMotion, sceneTime } from './quality'

/**
 * Ramp 0 -> 1 as `x` falls from `from` down to `to`.
 *
 * THREE.MathUtils.smoothstep assumes min < max: handed a descending range
 * it takes the `x >= max` branch and returns 1 for everything, which put
 * the hero into deep-space shading while the camera was still in daylight.
 */
function descend(x: number, from: number, to: number) {
  return THREE.MathUtils.smoothstep(from - x, 0, from - to)
}

/** Starfield that only earns its keep once we are under the surface. */
function Stars({ count = quality.stars }: { count?: number }) {
  const pts = useRef<THREE.Points>(null)

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const size = new Float32Array(count)
    const tint = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // A slab well below the water, wide enough to fill peripheral vision.
      pos[i * 3] = (Math.random() - 0.5) * 150
      pos[i * 3 + 1] = -6 - Math.random() * 90
      pos[i * 3 + 2] = (Math.random() - 0.5) * 150
      size[i] = Math.random() * 1.7 + 0.35
      // Most stars near-white, a few pushed warm or blue. Uniformly white
      // reads synthetic; real fields have colour scatter.
      const w = Math.random()
      const c = new THREE.Color(w > 0.9 ? '#ffcf9e' : w > 0.78 ? '#9fc2ff' : '#ffffff')
      tint[i * 3] = c.r
      tint[i * 3 + 1] = c.g
      tint[i * 3 + 2] = c.b
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
    g.setAttribute('aTint', new THREE.BufferAttribute(tint, 3))
    return g
  }, [count])

  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 } },
        vertexShader: /* glsl */ `
          attribute float aSize;
          attribute vec3 aTint;
          uniform float uTime;
          varying vec3 vTint;
          varying float vTwinkle;
          void main() {
            vTint = aTint;
            vTwinkle = 0.55 + 0.45 * sin(uTime * 1.3 + position.x * 0.6 + position.z * 0.4);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            // Capped: the camera flies through the middle of the field, and
            // a star that ends up a metre from the lens would otherwise
            // scale into a dinner plate and bloom over half the frame.
            gl_PointSize = clamp(aSize * (220.0 / max(-mv.z, 0.001)), 1.0, 9.0);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          varying vec3 vTint;
          varying float vTwinkle;
          void main() {
            vec2 d = gl_PointCoord - 0.5;
            float r = length(d);
            if (r > 0.5) discard;
            float core = smoothstep(0.5, 0.0, r);
            gl_FragColor = vec4(vTint, core * core * vTwinkle);
          }
        `,
      }),
    [],
  )

  useFrame(({ clock }) => {
    mat.uniforms.uTime.value = sceneTime(clock.elapsedTime)
    if (pts.current) pts.current.rotation.y = sceneTime(clock.elapsedTime) * 0.008
  })

  return <points ref={pts} geometry={geo} material={mat} />
}

/** An otter riding the actual water surface, not a guessed height. */
function SurfaceOtter({
  x,
  z,
  phase,
  scale = 1,
}: {
  x: number
  z: number
  phase: number
  scale?: number
}) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (!g.current) return
    const t = sceneTime(clock.elapsedTime)
    // Drift slowly downstream, wrapping so the river never runs out.
    const dz = ((z + t * 0.5 + 60) % 120) - 60
    const s = sampleWater(x, dz, t)
    // Sit the body into the surface rather than on top of it — an otter
    // floating on its back is mostly submerged.
    g.current.position.set(s.x, s.y - 0.12 * scale, s.z)
    // Lie back along the wave slope instead of staying rigidly level.
    g.current.rotation.set(s.tiltZ * 0.45, Math.PI * 0.12 + phase, -s.tiltX * 0.45)
  })
  return (
    <group ref={g} scale={scale}>
      <Otter phase={phase} />
    </group>
  )
}

/** Otters adrift where there is no surface left to float on. */
function DriftOtter({
  base,
  phase,
  scale,
}: {
  base: [number, number, number]
  phase: number
  scale: number
}) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (!g.current) return
    const t = sceneTime(clock.elapsedTime) + phase
    g.current.position.set(
      base[0] + Math.sin(t * 0.18) * 1.4,
      base[1] + Math.sin(t * 0.24) * 1.1,
      base[2] + Math.cos(t * 0.15) * 1.2,
    )
    g.current.rotation.set(Math.sin(t * 0.2) * 0.35, t * 0.09, Math.cos(t * 0.17) * 0.4)
  })
  return (
    <group ref={g} scale={scale}>
      <Otter phase={phase} />
    </group>
  )
}

export default function Scene({
  progress,
  onReady,
}: {
  progress: React.MutableRefObject<number>
  onReady?: () => void
}) {
  const { camera, size } = useThree()

  /**
   * Composition has to answer to the viewport shape, not just its width.
   * The layout puts copy on the left and otters on the right, which only
   * works while the frame is wide. On a phone the same placement pushes
   * every otter off the edge, so pull them back toward centre and give the
   * camera more distance.
   */
  const aspect = size.width / Math.max(size.height, 1)
  const narrow = THREE.MathUtils.clamp((1.5 - aspect) / 0.9, 0, 1)
  const spread = THREE.MathUtils.lerp(1, 0.4, narrow)
  const pullBack = THREE.MathUtils.lerp(0, 5.5, narrow)
  const space = useRef(0)
  /** Below the surface at all. Stays at 1 once we are under. */
  const below = useRef(0)
  /** Below the surface *and* not yet in the dark — the murky middle. */
  const submerged = useRef(0)
  const beam = useRef(0)
  const announced = useRef(false)
  const sun = useRef<THREE.DirectionalLight>(null)
  const fog = useMemo(() => new THREE.FogExp2('#bfd8d0', 0.012), [])

  const dayFog = useMemo(() => new THREE.Color('#bfd8d0'), [])
  const murkFog = useMemo(() => new THREE.Color('#123b40'), [])
  const deepFog = useMemo(() => new THREE.Color('#02030a'), [])
  const tmp = useMemo(() => new THREE.Color(), [])

  const pointer = useRef({ x: 0, y: 0 })

  // Where the cursor lands on the water, fed to the ripple term in the
  // water's vertex shader. z carries the strength so the effect can fade
  // out cleanly once the surface is no longer in front of the camera.
  const contact = useRef(new THREE.Vector3(0, 0, 0))
  const ray = useMemo(() => new THREE.Raycaster(), [])
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), [])
  const hit = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ scene, pointer: p, clock }, dt) => {
    // The only trustworthy "we are actually rendering" signal: a real frame.
    if (!announced.current) {
      announced.current = true
      onReady?.()
    }
    // Pointer parallax is motion the visitor did not ask for, so it is the
    // first thing to go when they have said they would rather not have it.
    const t = Math.min(dt, 0.05)
    const px = reducedMotion ? 0 : p.x
    const py = reducedMotion ? 0 : p.y
    pointer.current.x += (px - pointer.current.x) * 3 * t
    pointer.current.y += (py - pointer.current.y) * 3 * t

    const s = progress.current

    // One continuous dive: above the water, through it, out into the dark.
    // Held low enough at the start that the horizon stays in frame — a
    // steep top-down view of a wave field has no horizon and reads flat.
    //
    // The descent only begins once the hero has scrolled away (the hero is
    // one viewport of a 2.6-viewport range). Starting at zero put the camera
    // underwater while the headline was still on screen.
    // Ends well before the scroll range does. Stretched to the full range
    // the camera crawled, and the middle of the dive was a held frame of
    // flat water with nothing happening in it.
    const dive = THREE.MathUtils.smoothstep(s, 0.34, 0.86)
    camera.position.set(
      pointer.current.x * 1.6,
      THREE.MathUtils.lerp(2.8, -32, dive) + pointer.current.y * 0.5,
      THREE.MathUtils.lerp(12, 4, dive) + pullBack,
    )
    // The aim point rides the same curve as the camera. On its own schedule
    // it outran the descent: the lens tipped down while the camera was still
    // at hero height, pushing the horizon up and flattening the shot.
    camera.lookAt(
      pointer.current.x * 0.8,
      THREE.MathUtils.lerp(1.5, -40, dive),
      THREE.MathUtils.lerp(-20, -10, dive),
    )

    // Both looks are driven by where the camera actually is, not by scroll
    // position. Tied to scroll they drift out of sync with the geometry and
    // you get daylight sky visible from ten metres underwater.
    const camY = camera.position.y
    // Deliberately short. Spread over three metres, the crossing spent long
    // enough half-and-half that the water below the horizon was still lit
    // like sky — pale grey above the surface and pale grey below it, with
    // no moment of going through anything.
    const under = descend(camY, 0.6, -1.6)
    const deep = descend(camY, -4, -17)
    space.current = deep
    below.current = under
    submerged.current = under * (1 - deep)
    // Dies exactly with the water. Given a tail into deep space the shafts
    // survived as evenly-spaced vertical smears across the star field —
    // there is no surface out there for light to come through.
    beam.current = under * (1 - deep)
    causticTime.value = sceneTime(clock.elapsedTime)

    // Fog only touches the lit meshes; the sky and water are raw shaders
    // and opt out, which keeps the horizon crisp.
    tmp.copy(dayFog).lerp(murkFog, under).lerp(deepFog, deep)
    fog.color.copy(tmp)
    fog.density = THREE.MathUtils.lerp(0.009, 0.0025, deep)
    scene.fog = fog

    if (sun.current) sun.current.intensity = THREE.MathUtils.lerp(3.1, 0.25, Math.max(under * 0.7, deep))

    // Project the cursor onto the surface. Ripples only make sense while
    // the water is actually in view from above, so the strength follows the
    // dive and dies off as the camera drops through.
    if (!reducedMotion) {
      ray.setFromCamera(p, camera)
      const strength = (1 - THREE.MathUtils.smoothstep(dive, 0, 0.3)) * 0.85
      if (strength > 0.01 && ray.ray.intersectPlane(plane, hit)) {
        contact.current.set(hit.x, hit.z, strength)
      } else {
        contact.current.z += (0 - contact.current.z) * 0.1
      }
    }
  })

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight
        ref={sun}
        position={[6, 9, -8]}
        intensity={2.6}
        color="#ffd9a8"
      />
      {/* cool bounce so the shadowed side of an otter never goes flat black */}
      <directionalLight position={[-7, 3, 6]} intensity={0.5} color="#7fa8ff" />

      <Sky spaceRef={space} underRef={below} />
      <Water spaceRef={space} submergedRef={below} pointerRef={contact} />
      <Stars />
      <Shafts beamRef={beam} />
      <Motes submergedRef={submerged} />

      {/* Kept to the right half of the frame: the hero copy owns the left,
          and an otter drifting behind body text helps nobody. Sized so the
          nearest one reads clearly without being cropped by the viewport. */}
      <Diver progress={progress} spread={spread} />

      <SurfaceOtter x={5.6 * spread} z={-2} phase={0} scale={1.6} />
      <SurfaceOtter x={9.5 * spread} z={-11} phase={1.7} scale={1.3} />
      {quality.surfaceOtters > 2 && (
        <SurfaceOtter x={3.2 * spread} z={-20} phase={3.1} scale={1.1} />
      )}

      <DriftOtter base={[-6 * spread, -22, -6]} phase={0.4} scale={2.2} />
      <DriftOtter base={[7 * spread, -33, -12]} phase={2.2} scale={1.6} />
      {quality.driftOtters > 2 && (
        <DriftOtter base={[-2 * spread, -48, -18]} phase={4.1} scale={2.8} />
      )}

      <Post />
    </>
  )
}
