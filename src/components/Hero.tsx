import { profile } from '../data'

/**
 * Hero copy only — the imagery behind it is the shared 3D stage, so this
 * component stays a plain, accessible block of text.
 */
export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <p className="hero-eyebrow">
          {profile.role} · {profile.company} · {profile.location}
        </p>

        <h1 className="hero-title">
          <span className="line-mask">
            <span>{profile.headline[0]}</span>
          </span>
          <span className="line-mask">
            <span>
              and the <em>systems</em> underneath.
            </span>
          </span>
        </h1>

        <p className="hero-sub">{profile.intro}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            See the work
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <i />
        Scroll to dive
      </div>
    </header>
  )
}
