import { LANGS, useI18n } from '../i18n'

/**
 * Language switcher.
 *
 * Buttons rather than a select: with two or three languages a dropdown
 * hides the choice behind a click, and every option is labelled in its own
 * language so it is legible to someone who cannot read the current one.
 */
export default function LangSwitch() {
  const { lang, setLang } = useI18n()

  return (
    <div className="lang" role="group" aria-label="Language">
      {Object.values(LANGS).map((d) => (
        <button
          key={d.code}
          type="button"
          className={`lang-btn${d.code === lang ? ' is-on' : ''}`}
          // The switcher is the one control that has to make sense to
          // someone who cannot read the language currently on screen, so
          // the accessible name is the language's own endonym.
          lang={d.htmlLang}
          aria-pressed={d.code === lang}
          onClick={() => setLang(d.code)}
        >
          {d.label}
        </button>
      ))}
    </div>
  )
}
