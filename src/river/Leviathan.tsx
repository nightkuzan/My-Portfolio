import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { reducedMotion } from './quality'

/**
 * Something very large, passing.
 *
 * The middle of the descent is the one stretch with no subject in it: the
 * surface is gone, the stars have not arrived, and the shafts are scenery
 * rather than something to look at. This gives that stretch a payoff — a
 * whale crossing the frame once, far enough away to stay a silhouette.
 *
 * Timed off scroll rather than the clock. On a timer it would be pure luck
 * whether a visitor was looking at the right moment; on scroll, everyone
 * who makes the descent sees it, and it plays backwards if they scroll
 * back up, which reads as the same animal rather than a second one.
 *
 * Rim-lit rather than lit: at this depth a shaded body would just be a
 * dark shape on a dark field. The rim reads as the last of the surface
 * light catching its back, which is also the only reason you can see
 * anything down here at all.
 */

const LENGTH = 26

/**
 * Scroll window it crosses in, as dive progress. Ends before the water
 * does: seen against the star field it stops being a whale in the dark and
 * becomes a spacecraft.
 */
const IN = 0.30
const OUT = 0.70

export default function Leviathan({
  progress,
}: {
  progress: React.MutableRefObject<number>
}) {
  const group = useRef<THREE.Group>(null)
  const tail = useRef<THREE.Group>(null)

  /**
   * The body: a lathe, so the profile is authored as a curve rather than
   * assembled from primitives. A whale is one continuous tapering form and
   * capsules-and-spheres cannot do that silhouette.
   */
  const body = useMemo(() => {
    const profile: THREE.Vector2[] = []
    const SEGMENTS = 26
    for (let i = 0; i <= SEGMENTS; i++) {
      const t = i / SEGMENTS
      // Blunt head, widest a third back, long taper to the tail stock.
      const radius =
        Math.sin(Math.pow(t, 0.62) * Math.PI) * (1 - t * 0.55) * 2.6 + 0.02
      profile.push(new THREE.Vector2(radius, (t - 0.5) * LENGTH))
    }
    const g = new THREE.LatheGeometry(profile, 22)
    // Lathe builds around Y; the animal swims along X.
    g.rotateZ(Math.PI / 2)
    g.computeVertexNormals()
    return g
  }, [])

  const fluke = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.bezierCurveTo(-1.4, 1.2, -4.2, 2.0, -5.6, 3.6)
    shape.bezierCurveTo(-3.4, 2.6, -1.2, 1.4, 0, 1.1)
    shape.bezierCurveTo(1.2, 1.4, 3.4, 2.6, 5.6, 3.6)
    shape.bezierCurveTo(4.2, 2.0, 1.4, 1.2, 0, 0)
    const g = new THREE.ShapeGeometry(shape, 12)
    g.rotateX(-Math.PI / 2)
    return g
  }, [])

  const flipper = useMemo(() => {
    const g = new THREE.SphereGeometry(1, 12, 8)
    g.scale(3.4, 0.32, 1.0)
    return g
  }, [])

  const uniforms = useMemo(
    () => ({
      uRim: { value: new THREE.Color('#8fd0e8') },
      uBody: { value: new THREE.Color('#05080e') },
      uFade: { value: 0 },
    }),
    [],
  )

  // One material shared by all four meshes. Declared as JSX inside each
  // mesh it would compile four identical programs and leave the ref
  // pointing at whichever rendered last.
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        toneMapped: false,
        vertexShader: /* glsl */ `
          varying vec3 vNormal;
          varying vec3 vView;
          void main() {
            vec4 world = modelMatrix * vec4(position, 1.0);
            vNormal = normalize(mat3(modelMatrix) * normal);
            vView = normalize(cameraPosition - world.xyz);
            gl_Position = projectionMatrix * viewMatrix * world;
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 uRim;
          uniform vec3 uBody;
          uniform float uFade;
          varying vec3 vNormal;
          varying vec3 vView;
          void main() {
            if (uFade < 0.002) discard;
            float ndv = abs(dot(normalize(vNormal), normalize(vView)));
            // Narrow rim. Widened, it stops reading as an edge catching the
            // light and starts reading as a glowing animal.
            float rim = pow(1.0 - ndv, 3.4);
            vec3 col = uBody + uRim * rim * 0.6;
            // The body is barely more opaque than the water, so the shafts
            // behind it still show through the middle of the shape. Any
            // more than this and it glows, which is a different animal.
            float alpha = (0.20 + rim * 0.45) * uFade;
            gl_FragColor = vec4(col, alpha);
          }
        `,
      }),
    [uniforms],
  )

  useFrame(({ clock }) => {
    const g = group.current
    if (!g) return

    const s = progress.current
    const t = THREE.MathUtils.clamp((s - IN) / (OUT - IN), 0, 1)

    // Present only while it is actually crossing. Left mounted and merely
    // transparent it still costs a draw call and a depth test on every
    // frame of a page it has no business being on.
    const visible = t > 0.001 && t < 0.999
    g.visible = visible
    if (!visible) return

    // Crosses right to left, well below the camera's own path and angled
    // away, so it reads as passing through rather than swimming at you.
    //
    // Kept far back on purpose. At thirty units a 26-unit animal fills half
    // the frame and reads as a vehicle; the scale only lands if it is
    // clearly a long way off and still that big.
    const x = THREE.MathUtils.lerp(74, -74, t)
    const y = THREE.MathUtils.lerp(-16, -30, t) + Math.sin(t * Math.PI * 2) * 1.6
    g.position.set(x, y, -64 - Math.cos(t * Math.PI) * 12)
    g.rotation.set(-0.10, Math.PI * 0.06, -0.06 + Math.sin(t * Math.PI * 2) * 0.05)

    // In and out at the edges of the window: appearing at full strength is
    // what makes a thing look like it was switched on rather than arrived.
    uniforms.uFade.value =
      THREE.MathUtils.smoothstep(t, 0, 0.16) * (1 - THREE.MathUtils.smoothstep(t, 0.82, 1))


    // One slow beat of the tail per crossing, plus a little on the clock so
    // it is never frozen mid-stroke when the page is still.
    if (tail.current) {
      tail.current.rotation.z = reducedMotion
        ? 0
        : Math.sin(t * Math.PI * 6 + clock.elapsedTime * 0.6) * 0.34
    }
  })

  return (
    <group ref={group} visible={false} renderOrder={1}>
      <mesh geometry={body} material={material} />
      <mesh
        geometry={flipper}
        material={material}
        position={[2.0, -0.9, 2.4]}
        rotation={[0, 0.5, -0.5]}
      />
      <mesh
        geometry={flipper}
        material={material}
        position={[2.0, -0.9, -2.4]}
        rotation={[0, -0.5, -0.5]}
      />
      <group ref={tail} position={[-LENGTH / 2 + 0.4, 0, 0]}>
        <mesh geometry={fluke} material={material} rotation={[0, Math.PI / 2, 0]} />
      </group>
    </group>
  )
}
