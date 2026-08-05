import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'

/**
 * The stretch of page the dive owns.
 *
 * Nothing but captions live here — the point is to give the camera room to
 * travel from the river surface down into open space without body copy
 * covering it. Each caption fades in and out across its own slice of the
 * section, so the sequence reads as narration rather than as a wall of text.
 */
const BEATS = [0.16, 0.48, 0.8]

export default function Dive() {
  const ref = useRef<HTMLElement>(null)
  const [p, setP] = useState(0)
  const { t } = useI18n()

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
        {BEATS.map((at, i) => {
          // Triangular fade centred on the beat: in, hold, out.
          const d = Math.abs(p - at)
          const o = Math.max(0, 1 - d / 0.17)
          return (
            <p
              className="dive-line"
              key={at}
              style={{
                opacity: o,
                transform: `translateY(${(1 - o) * 22}px)`,
                filter: `blur(${(1 - o) * 5}px)`,
              }}
            >
              {t.dive[i]}
            </p>
          )
        })}
      </div>
    </section>
  )
}
