import { useEffect, useRef } from 'react'
import { pointerState } from '../pointer-state'

/**
 * Two-part cursor: a dot that tracks exactly and a ring that lags behind.
 * The ring swells over anything interactive, which doubles as an
 * affordance hint. Written with rAF + transforms so it never triggers
 * layout, and removed entirely on touch / reduced-motion.
 *
 * "Interactive" includes the otters in the 3D scene, which have no DOM
 * element to hover. They also move on their own, so that half of the test
 * has to run every frame rather than only on pointermove.
 */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.matchMedia('(hover: hover)').matches
    )
      return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf = 0
    let overDom = false
    let wasHot = false

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`
      overDom = !!(e.target as Element | null)?.closest?.(
        'a, button, .card, .chip, input, textarea',
      )
    }

    const loop = () => {
      raf = requestAnimationFrame(loop)
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`

      const hot = overDom || pointerState.overOtter
      if (hot !== wasHot) {
        wasHot = hot
        ring.current?.classList.toggle('is-hot', hot)
        // Only the otters need this: real controls carry their own cursor.
        document.body.classList.toggle('over-otter', pointerState.overOtter && !overDom)
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    loop()
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={ring} aria-hidden="true" />
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  )
}
