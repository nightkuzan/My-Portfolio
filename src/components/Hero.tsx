import { profile } from '../data'
import { useI18n } from '../i18n'

/**
 * Hero copy only — the imagery behind it is the shared 3D stage, so this
 * component stays a plain, accessible block of text.
 */
export default function Hero() {
  const { t } = useI18n()

  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <p className="hero-eyebrow">
          {t.hero.role} · {profile.company} · {t.hero.location}
        </p>

        <h1 className="hero-title">
          <span className="line-mask">
            <span>{t.hero.titleA}</span>
          </span>
          <span className="line-mask">
            <span>
              {t.hero.titleB.pre}
              <em>{t.hero.titleB.em}</em>
              {t.hero.titleB.post}
            </span>
          </span>
        </h1>

        <p className="hero-sub">{t.hero.intro}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            {t.hero.seeWork}
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <i />
        {t.hero.scroll}
      </div>
    </header>
  )
}
