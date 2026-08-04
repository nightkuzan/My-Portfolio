import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

/**
 * Everything that touches three.js lives behind this module boundary, so
 * the library lands in its own lazily-loaded chunk instead of the entry
 * bundle. That is what makes the loader percentage measure real work.
 *
 * Two deliberate choices here:
 *  - resize scroll tracking is off. The canvas is position:fixed, so it
 *    never moves with the page, and R3F's scroll-aware measurement was
 *    reporting a zero-sized container on first mount and never recovering.
 *  - a resize is nudged once after mount, which forces that measurement to
 *    run again after layout has settled.
 */
export default function Stage({
  progress,
  onFirstFrame,
}: {
  progress: React.MutableRefObject<number>
  onFirstFrame: () => void
}) {
  useEffect(() => {
    const id = requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      camera={{ fov: 42, near: 0.1, far: 400, position: [0, 3.4, 9.5] }}
      resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
    >
      <Suspense fallback={null}>
        <Scene progress={progress} onReady={onFirstFrame} />
      </Suspense>
    </Canvas>
  )
}
