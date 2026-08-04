import type { ReactNode } from 'react'
import { profile, projects, roles, stack, stats } from '../data'
import { useReveal, useTilt } from '../hooks'
import type { Project } from '../data'

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
  return (
    <Section id="about" num="01" title="About">
      <div className="about-grid">
        <div>
          <p className="about-lead">{profile.intro}</p>
          <p className="about-body">{profile.intro2}</p>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-v">{s.value}</div>
              <div className="stat-l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Work() {
  return (
    <Section id="work" num="02" title="Where I've worked">
      {roles.map((r) => (
        <article className="role" key={r.company + r.period}>
          <div className="role-period">
            {r.period}
            {r.current && (
              <span className="role-now">
                <b /> current
              </span>
            )}
          </div>
          <div>
            <h3 className="role-title">
              {r.title} <span className="role-co">@ {r.company}</span>
            </h3>
            <p className="role-kind">{r.kind}</p>
            <ul className="role-points">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="chips">
              {r.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </Section>
  )
}

function Card({ p }: { p: Project }) {
  const ref = useTilt<HTMLElement>()
  return (
    <article className="card" ref={ref}>
      <p className="card-ctx">{p.context}</p>
      <h3 className="card-title">{p.title}</h3>
      <p className="card-blurb">{p.blurb}</p>

      {p.metrics && (
        <div className="metrics">
          {p.metrics.map((m) => (
            <div key={m.label}>
              <div className="metric-v">{m.value}</div>
              <div className="metric-l">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {p.link && (
        <a className="card-link" href={p.link.href} target="_blank" rel="noreferrer">
          {p.link.label} <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" num="03" title="Selected work">
      <div className="proj-grid">
        {projects.map((p) => (
          <Card p={p} key={p.title} />
        ))}
      </div>
    </Section>
  )
}

export function Stack() {
  return (
    <Section id="stack" num="04" title="Stack">
      <div className="stack-grid">
        {stack.map((g) => (
          <div className="stack-cell" key={g.group}>
            <div className="stack-group">{g.group}</div>
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
  return (
    <section className="section contact" id="contact">
      <div className="wrap reveal" ref={ref}>
        <h2 className="contact-title">
          Got something
          <br />
          worth building?
        </h2>
        <p className="contact-sub">
          Open to full-stack roles and freelance work — especially anything where the
          back end has to hold up under real traffic.
        </p>
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
