import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import { audioState } from '../audio-state'
import { profile } from '../data'
import { useI18n } from '../i18n'

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
  /**
   * Scroll through the content below the dive, 0..1.
   *
   * Kept separate from `progress` rather than extending its range: the
   * dive maps to a fixed number of viewports, while this maps to however
   * tall the page turns out to be. Folding them into one number would
   * make the descent's pacing depend on how much copy is on the page.
   */
  const after = useRef(0)
  const [pct, setPct] = useState(0)
  const [ready, setReady] = useState(false)
  const [entered, setEntered] = useState(false)
  const { t } = useI18n()

  const sound = useSyncExternalStore(
    audioState.subscribe,
    () => audioState.enabled,
    () => false,
  )
  const enableSound = useCallback(() => audioState.set(!audioState.enabled), [])

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
      // The descent is mapped to the hero plus the dive section. That
      // section is shorter on narrow screens, so the range has to match or
      // the camera arrives in space long after the captions have gone.
      const span = window.innerHeight * (window.innerWidth <= 820 ? 2.2 : 2.6)
      progress.current = Math.min(1, Math.max(0, window.scrollY / span))

      const rest = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight - span,
      )
      after.current = Math.min(1, Math.max(0, (window.scrollY - span) / rest))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [entered])

  return (
    <>
      <div className="stage" aria-hidden="true">
        <Suspense fallback={null}>
          <Stage progress={progress} after={after} onFirstFrame={onFirstFrame} />
        </Suspense>
      </div>

      {!entered && (
        <div className={`gate${ready ? ' is-ready' : ''}`}>
          <div className="gate-inner">
            <div className="gate-name">{profile.name}</div>
            <div className="gate-ring">
              <span className="gate-pct">{Math.min(pct, 100)}%</span>
              <button className="gate-enter" onClick={enter} disabled={!ready}>
                {t.gate.enter}
              </button>
            </div>
            <div className="gate-role">{t.gate.role}</div>
            {/* Sound is off by default, so the invitation has to be here —
                otherwise most visitors never learn there is any. */}
            <button className="gate-sound" type="button" onClick={enableSound}>
              <span className={`gate-sound-dot${sound ? ' is-on' : ''}`} aria-hidden="true" />
              {sound ? t.sound.off : t.gate.sound}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
