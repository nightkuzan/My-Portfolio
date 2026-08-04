import { useEffect, useRef, useState } from 'react'

/**
 * The stretch of page the dive owns.
 *
 * Nothing but captions live here — the point is to give the camera room to
 * travel from the river surface down into open space without body copy
 * covering it. Each caption fades in and out across its own slice of the
 * section, so the sequence reads as narration rather than as a wall of text.
 */
const BEATS = [
  { at: 0.16, text: 'Most of a product is the part you never see.' },
  { at: 0.48, text: 'Queues that back up. Indexes that were never created.' },
  { at: 0.8, text: 'That is the layer I work in.' },
]

export default function Dive() {
  const ref = useRef<HTMLElement>(null)
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      if (total <= 0) return
      setP(Math.min(1, Math.max(0, -r.top / total)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="dive" ref={ref} aria-label="Descending">
      <div className="dive-stick">
        {BEATS.map((b) => {
          // Triangular fade centred on the beat: in, hold, out.
          const d = Math.abs(p - b.at)
          const o = Math.max(0, 1 - d / 0.17)
          return (
            <p
              className="dive-line"
              key={b.text}
              style={{
                opacity: o,
                transform: `translateY(${(1 - o) * 22}px)`,
                filter: `blur(${(1 - o) * 5}px)`,
              }}
            >
              {b.text}
            </p>
          )
        })}
      </div>
    </section>
  )
}
