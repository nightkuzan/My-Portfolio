import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'

const Stage = lazy(() => import('./Stage'))

/**
 * The scroll-driven 3D backdrop, plus the gate in front of it.
 *
 * The percentage is real: three.js sits in its own chunk, so the counter
 * tracks an actual download, then font readiness, then the first rendered
 * frame. A fake progress bar is the easiest tell that a site is decoration.
 */
export default function Experience({ onEntered }: { onEntered: () => void }) {
  const progress = useRef(0)
  const [pct, setPct] = useState(0)
  const [ready, setReady] = useState(false)
  const [entered, setEntered] = useState(false)

  const marks = useRef({ chunk: 0, fonts: 0, frame: 0 })
  const bump = useCallback((k: 'chunk' | 'fonts' | 'frame') => {
    marks.current[k] = 1
    const m = marks.current
    setPct(Math.round(m.chunk * 55 + m.fonts * 15 + m.frame * 30))
  }, [])

  const enter = useCallback(() => {
    setEntered(true)
    document.body.classList.remove('is-locked')
    onEntered()
  }, [onEntered])

  // Stable identity: passing a fresh arrow to Stage on every render churns
  // the whole 3D subtree for no reason.
  const onFirstFrame = useCallback(() => bump('frame'), [bump])

  useEffect(() => {
    document.body.classList.add('is-locked')
    return () => document.body.classList.remove('is-locked')
  }, [])

  useEffect(() => {
    let alive = true
    import('./Stage')
      .then(() => alive && bump('chunk'))
      // No WebGL or the chunk never arrived — let the visitor through
      // rather than trapping them behind a gate that will never open.
      .catch(() => alive && enter())
    const fonts = document.fonts?.ready
    if (fonts) fonts.then(() => alive && bump('fonts'))
    else bump('fonts')
    return () => {
      alive = false
    }
  }, [bump, enter])

  useEffect(() => {
    if (pct < 100) return
    const id = setTimeout(() => setReady(true), 240)
    return () => clearTimeout(id)
  }, [pct])

  // Someone arriving on a deep link (/#work, a shared section) asked for a
  // place on the page, not a title sequence. Let them straight in.
  useEffect(() => {
    const deepLinked =
      window.location.hash.length > 1 ||
      new URLSearchParams(window.location.search).has('skipIntro')
    if (deepLinked) enter()
  }, [enter])

  // Keyboard parity with the button.
  useEffect(() => {
    if (entered || !ready) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        enter()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [entered, ready, enter])

  // Scroll → dive progress. Passive, and no layout reads per frame.
  useEffect(() => {
    if (!entered) return
    const onScroll = () => {
      // The descent is mapped to the hero plus the dive section (100svh +
      // 190svh). It finishes exactly as the first content section arrives,
      // so the camera is already deep in space by the time copy appears.
      const span = window.innerHeight * 2.6
      progress.current = Math.min(1, Math.max(0, window.scrollY / span))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [entered])

  return (
    <>
      <div className="stage" aria-hidden="true">
        <Suspense fallback={null}>
          <Stage progress={progress} onFirstFrame={onFirstFrame} />
        </Suspense>
      </div>

      {!entered && (
        <div className={`gate${ready ? ' is-ready' : ''}`}>
          <div className="gate-inner">
            <div className="gate-name">Aekkarit Surit</div>
            <div className="gate-ring">
              <span className="gate-pct">{Math.min(pct, 100)}%</span>
              <button className="gate-enter" onClick={enter} disabled={!ready}>
                Enter
              </button>
            </div>
            <div className="gate-role">Full Stack Developer</div>
          </div>
        </div>
      )}
    </>
  )
}
