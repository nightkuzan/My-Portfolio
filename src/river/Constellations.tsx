import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { lite } from './quality'

/**
 * Constellations that draw themselves in as you read.
 *
 * Once the descent ends the camera is parked and the star field is
 * wallpaper — the whole second half of the page scrolls past a still
 * image. One figure connects per section, so the backdrop is still
 * answering the scroll long after the dive is over.
 *
 * The lines draw progressively rather than fading in as a block: a
 * constellation is something someone traced, and watching the line travel
 * is the part that reads as drawing rather than as appearing.
 */

const FIGURES = 5

type Figure = {
  positions: Float32Array
  order: Float32Array
  stars: Float32Array
  starOrder: Float32Array
}

/**
 * One figure: a scatter of stars around a direction, joined into a chain
 * with a couple of branches. Chains alone look like paths; the branches
 * are what make the shape read as a figure.
 */
function buildFigure(index: number, count: number): Figure {
  /*
   * Placed inside the frustum rather than around the camera.
   *
   * Ringing them at a radius put most of the figures out of shot — the
   * camera holds one heading for this whole stretch, looking down and
   * along -Z, and never turns. These sit on the view axis about sixty-five
   * units out, which at this field of view leaves roughly ±45 horizontal
   * and ±23 vertical to play with.
   */
  const lateral = (index - (FIGURES - 1) / 2) * 15
  const centre = new THREE.Vector3(
    lateral,
    -66 + (index % 2 === 0 ? 7 : -7),
    -50 - index * 3,
  )

  const pts: THREE.Vector3[] = []
  for (let i = 0; i < count; i++) {
    pts.push(
      new THREE.Vector3(
        centre.x + (Math.random() - 0.5) * 17,
        centre.y + (Math.random() - 0.5) * 15,
        centre.z + (Math.random() - 0.5) * 17,
      ),
    )
  }

  const edges: [number, number][] = []
  for (let i = 1; i < count; i++) edges.push([i - 1, i])
  // Two branches back to earlier stars, skipping neighbours so the figure
  // gains a shape rather than a kink.
  if (count > 4) edges.push([count - 1, Math.floor(count / 2) - 1])
  if (count > 5) edges.push([1, count - 2])

  const positions = new Float32Array(edges.length * 6)
  const order = new Float32Array(edges.length * 2)
  edges.forEach(([a, b], i) => {
    pts[a].toArray(positions, i * 6)
    pts[b].toArray(positions, i * 6 + 3)
    // How far through the drawing this segment is. Chain segments run in
    // sequence; the branches are tacked on at the end.
    order[i * 2] = i / edges.length
    order[i * 2 + 1] = (i + 1) / edges.length
  })

  const stars = new Float32Array(count * 3)
  const starOrder = new Float32Array(count)
  pts.forEach((p, i) => {
    p.toArray(stars, i * 3)
    // A star lights just before the line reaches it.
    starOrder[i] = Math.max(0, i / count - 0.06)
  })

  return { positions, order, stars, starOrder }
}

function Figure({
  figure,
  revealRef,
}: {
  figure: Figure
  revealRef: React.MutableRefObject<number>
}) {
  const uniforms = useMemo(
    () => ({
      uReveal: { value: 0 },
      uColor: { value: new THREE.Color('#9fd6ff') },
    }),
    [],
  )

  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(figure.positions, 3))
    g.setAttribute('aOrder', new THREE.BufferAttribute(figure.order, 1))
    return g
  }, [figure])

  const starGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(figure.stars, 3))
    g.setAttribute('aOrder', new THREE.BufferAttribute(figure.starOrder, 1))
    return g
  }, [figure])

  useFrame(() => {
    uniforms.uReveal.value = revealRef.current
  })

  return (
    <group>
      <lineSegments geometry={lineGeo} frustumCulled={false}>
        <shaderMaterial
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
          vertexShader={/* glsl */ `
            attribute float aOrder;
            varying float vOrder;
            void main() {
              vOrder = aOrder;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={/* glsl */ `
            uniform float uReveal;
            uniform vec3 uColor;
            varying float vOrder;
            void main() {
              // vOrder interpolates along the segment, so the cut lands
              // partway through a line rather than snapping whole segments
              // on — that is the difference between drawing and appearing.
              if (vOrder > uReveal) discard;
              // Brightest right at the tip of the stroke.
              float head = smoothstep(0.14, 0.0, uReveal - vOrder);
              gl_FragColor = vec4(uColor, 0.16 + head * 0.5);
            }
          `}
        />
      </lineSegments>

      <points geometry={starGeo} frustumCulled={false}>
        <shaderMaterial
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
          vertexShader={/* glsl */ `
            attribute float aOrder;
            uniform float uReveal;
            varying float vOn;
            void main() {
              vOn = smoothstep(0.0, 0.09, uReveal - aOrder);
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = clamp(vOn * (420.0 / max(-mv.z, 0.001)), 0.0, 11.0);
              gl_Position = projectionMatrix * mv;
            }
          `}
          fragmentShader={/* glsl */ `
            uniform vec3 uColor;
            varying float vOn;
            void main() {
              vec2 d = gl_PointCoord - 0.5;
              float r = length(d);
              if (r > 0.5 || vOn < 0.01) discard;
              float core = smoothstep(0.5, 0.0, r);
              gl_FragColor = vec4(uColor, core * core * vOn * 0.9);
            }
          `}
        />
      </points>
    </group>
  )
}

export default function Constellations({
  afterRef,
}: {
  afterRef: React.MutableRefObject<number>
}) {
  const figures = useMemo(
    () => Array.from({ length: FIGURES }, (_, i) => buildFigure(i, lite ? 5 : 7)),
    [],
  )
  const reveals = useRef(figures.map(() => ({ current: 0 })))

  useFrame(() => {
    const a = afterRef.current
    for (let i = 0; i < FIGURES; i++) {
      // Each figure owns a slice of the scroll and draws across the first
      // two thirds of it, so it is complete and legible for a moment
      // before the next one starts.
      const start = i / FIGURES
      reveals.current[i].current = THREE.MathUtils.clamp(
        (a - start) / (0.66 / FIGURES),
        0,
        1,
      )
    }
  })

  return (
    <group>
      {figures.map((f, i) => (
        <Figure key={i} figure={f} revealRef={reveals.current[i]} />
      ))}
    </group>
  )
}
