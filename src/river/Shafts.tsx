import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { lite, sceneTime } from './quality'

/**
 * God rays coming down through the surface.
 *
 * Not volumetric — volumetrics here would mean raymarching a medium for a
 * few seconds of scroll, which is a poor trade on a portfolio. These are
 * billboarded quads with a soft falloff, which is the same trick most
 * real-time water scenes use and is indistinguishable in motion.
 *
 * They are what gives the descent a middle. Between leaving daylight and
 * reaching the stars the camera crosses a stretch of open water with no
 * geometry in it at all; the shafts put something in that space and, more
 * usefully, give the eye a sense of how fast it is falling.
 */

type Shaft = {
  x: number
  z: number
  width: number
  seed: number
  lean: number
}

function build(count: number): Shaft[] {
  const out: Shaft[] = []
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count
    // Deliberately kept off the centre line and behind the subject. Ringed
    // around the camera path they kept drifting between the lens and the
    // diving otter, and an additive quad in front of a lit subject bleaches
    // it to a pale silhouette.
    const side = i % 2 === 0 ? 1 : -1
    out.push({
      x: side * (7.5 + ((i * 5) % 4) * 5.5),
      z: -9 - t * 26,
      width: 3.4 + ((i * 7) % 5) * 1.5,
      seed: i * 1.37,
      // All lean the same way — they come from one sun, and fanning them
      // in different directions immediately reads as decoration.
      lean: -0.14 + Math.sin(i * 2.1) * 0.035,
    })
  }
  return out
}

const HEIGHT = 78
const TOP = 1.2

export default function Shafts({
  beamRef,
}: {
  /** How much of the surface light still reaches the camera, 0..1. */
  beamRef: React.MutableRefObject<number>
}) {
  const shafts = useMemo(() => build(lite ? 5 : 9), [])
  const group = useRef<THREE.Group>(null)
  const { camera } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uFade: { value: 0 },
      uCol: { value: new THREE.Color('#bfe6ff') },
    }),
    [],
  )

  const geo = useMemo(() => new THREE.PlaneGeometry(1, HEIGHT, 1, 1), [])

  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        toneMapped: false,
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          varying float vSeed;
          void main() {
            vUv = uv;
            // Instance identity smuggled in through the model matrix so all
            // shafts can share one material and one draw setup.
            vSeed = modelMatrix[3][0] * 0.31 + modelMatrix[3][2] * 0.17;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uTime;
          uniform float uFade;
          uniform vec3 uCol;
          varying vec2 vUv;
          varying float vSeed;

          void main() {
            if (uFade < 0.002) discard;

            // Widest where it enters the water, tapering as it loses energy.
            float halfW = mix(0.14, 0.5, pow(vUv.y, 0.65));
            float h = 1.0 - clamp(abs(vUv.x - 0.5) / halfW, 0.0, 1.0);
            h = pow(h, 1.7);

            // Bright at the surface, gone long before the sea floor that
            // isn't there. A hard bottom edge is the giveaway that these
            // are quads, so the falloff runs out well inside the geometry.
            float v = pow(clamp(vUv.y, 0.0, 1.0), 2.4);

            // Two slow, mismatched pulses. One alone reads as a blink.
            float sh =
              0.62 +
              0.24 * sin(uTime * 0.55 + vSeed * 9.0 + vUv.y * 2.2) +
              0.14 * sin(uTime * 1.31 + vSeed * 3.7 - vUv.y * 5.1);

            // Nine additive quads stack. At 0.42 each, four overlapping ones
            // saturated the frame and the deep water came out pale grey —
            // the murk was still being computed correctly underneath, it was
            // just buried. Budget for the overlap, not for one shaft.
            float a = h * v * sh * uFade * 0.13;
            gl_FragColor = vec4(uCol, clamp(a, 0.0, 1.0));
          }
        `,
      }),
    [uniforms],
  )

  useFrame(({ clock }) => {
    uniforms.uTime.value = sceneTime(clock.elapsedTime)
    uniforms.uFade.value = beamRef.current
    if (!group.current) return
    group.current.visible = beamRef.current > 0.002
    if (!group.current.visible) return

    // Billboard around Y only. Free-tumbling billboards make a vertical
    // shaft tip over, which nothing in nature does.
    for (const child of group.current.children) {
      child.rotation.y = Math.atan2(
        camera.position.x - child.position.x,
        camera.position.z - child.position.z,
      )
    }
  })

  return (
    <group ref={group} renderOrder={2}>
      {shafts.map((s, i) => (
        <mesh
          key={i}
          geometry={geo}
          material={mat}
          position={[s.x, TOP - HEIGHT / 2, s.z]}
          scale={[s.width, 1, 1]}
          rotation={[0, 0, s.lean]}
          frustumCulled={false}
        />
      ))}
    </group>
  )
}
