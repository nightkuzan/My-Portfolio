import type { ReactNode } from 'react'
import { profile, projects, roles, stack, stats } from '../data'
import { useReveal, useTilt } from '../hooks'
import type { Project } from '../data'
import { useI18n } from '../i18n'
import type { Dict } from '../i18n/en'

function Section({
  id,
  num,
  title,
  children,
  className = '',
}: {
  id: string
  num: string
  title: string
  children: ReactNode
  className?: string
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className={`section ${className}`} id={id}>
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head">
          <span className="sec-num">{num}</span>
          <h2 className="sec-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

export function About() {
  const { t } = useI18n()
  return (
    <Section id="about" num="01" title={t.sections.about}>
      <div className="about-grid">
        <div>
          <p className="about-lead">{t.hero.intro}</p>
          <p className="about-body">{t.about.body}</p>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.id}>
              <div className="stat-v">{s.value}</div>
              <div className="stat-l">{t.stats[s.id as keyof Dict['stats']]}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Work() {
  const { t } = useI18n()
  return (
    <Section id="work" num="02" title={t.sections.work}>
      {roles.map((r) => {
        const copy = t.roles[r.id as keyof Dict['roles']]
        return (
          <article className="role" key={r.id}>
            <div className="role-period">
              {copy.period}
              {r.current && (
                <span className="role-now">
                  <b /> {t.current}
                </span>
              )}
            </div>
            <div>
              <h3 className="role-title">
                {copy.title} <span className="role-co">@ {r.company}</span>
              </h3>
              <p className="role-kind">{copy.kind}</p>
              <ul className="role-points">
                {copy.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="chips">
                {r.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        )
      })}
    </Section>
  )
}

function Card({ p }: { p: Project }) {
  const ref = useTilt<HTMLElement>()
  const { t } = useI18n()
  const copy = t.projects[p.id as keyof Dict['projects']]
  // Only some projects carry a metric block or an outbound link, so the
  // shapes in the dictionary differ; narrow rather than widening them all.
  const metricLabels = 'metrics' in copy ? copy.metrics : undefined
  const linkLabel = 'link' in copy ? copy.link : undefined

  return (
    <article className="card" ref={ref}>
      <p className="card-ctx">{copy.context}</p>
      <h3 className="card-title">{copy.title}</h3>
      <p className="card-blurb">{copy.blurb}</p>

      {p.metrics && (
        <div className="metrics">
          {p.metrics.map((m) => (
            <div key={m.id}>
              <div className="metric-v">{m.value}</div>
              <div className="metric-l">
                {metricLabels?.[m.id as keyof typeof metricLabels]}
              </div>
            </div>
          ))}
        </div>
      )}

      {p.href && linkLabel && (
        <a className="card-link" href={p.href} target="_blank" rel="noreferrer">
          {linkLabel} <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  )
}

export function Projects() {
  const { t } = useI18n()
  return (
    <Section id="projects" num="03" title={t.sections.projects}>
      <div className="proj-grid">
        {projects.map((p) => (
          <Card p={p} key={p.id} />
        ))}
      </div>
    </Section>
  )
}

export function Stack() {
  const { t } = useI18n()
  return (
    <Section id="stack" num="04" title={t.sections.stack}>
      <div className="stack-grid">
        {stack.map((g) => (
          <div className="stack-cell" key={g.id}>
            <div className="stack-group">
              {t.stackGroups[g.id as keyof Dict['stackGroups']]}
            </div>
            <div className="chips">
              {g.items.map((i) => (
                <span className="chip" key={i}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useI18n()
  return (
    <section className="section contact" id="contact">
      <div className="wrap reveal" ref={ref}>
        <h2 className="contact-title">
          {t.contact.titleA}
          <br />
          {t.contact.titleB}
        </h2>
        <p className="contact-sub">{t.contact.sub}</p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
