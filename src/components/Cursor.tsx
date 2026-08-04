import { useEffect, useRef } from 'react'

/**
 * Two-part cursor: a dot that tracks exactly and a ring that lags behind.
 * The ring swells over anything interactive, which doubles as an
 * affordance hint. Written with rAF + transforms so it never triggers
 * layout, and removed entirely on touch / reduced-motion.
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

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`

      const hot = (e.target as Element | null)?.closest?.(
        'a, button, .card, .chip, input, textarea',
      )
      ring.current?.classList.toggle('is-hot', !!hot)
    }

    const loop = () => {
      raf = requestAnimationFrame(loop)
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
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
