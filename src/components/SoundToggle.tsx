import { useSyncExternalStore } from 'react'
import { audioState } from '../audio-state'
import { useI18n } from '../i18n'

/**
 * Sound on/off.
 *
 * Off until asked. Browsers block audio before a gesture anyway, but the
 * rule here is the stricter one: a portfolio that starts making noise the
 * moment it loads is a portfolio people close.
 */
export default function SoundToggle() {
  const on = useSyncExternalStore(
    audioState.subscribe,
    () => audioState.enabled,
    () => false,
  )
  const { t } = useI18n()

  return (
    <button
      type="button"
      className={`sound${on ? ' is-on' : ''}`}
      aria-pressed={on}
      aria-label={on ? t.sound.off : t.sound.on}
      title={on ? t.sound.off : t.sound.on}
      onClick={() => audioState.set(!on)}
    >
      {/* Three bars that stand up when sound is on. Cheaper to read at
          this size than a speaker glyph, which turns to mush under 16px. */}
      <span className="sound-bars" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </button>
  )
}
