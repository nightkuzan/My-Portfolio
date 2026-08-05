import { useState } from 'react'
import Cursor from './components/Cursor'
import Dive from './components/Dive'
import Hero from './components/Hero'
import LangSwitch from './components/LangSwitch'
import { About, Contact, Projects, Stack, Work } from './components/Sections'
import Experience from './river/Experience'
import { profile } from './data'
import { useScrolled } from './hooks'
import { I18nProvider, useI18n } from './i18n'

const NAV = [
  ['about', '#about'],
  ['work', '#work'],
  ['projects', '#projects'],
  ['stack', '#stack'],
  ['contact', '#contact'],
] as const

function Page() {
  const stuck = useScrolled(60)
  const [entered, setEntered] = useState(false)
  const { t } = useI18n()

  return (
    <>
      <Cursor />
      <Experience onEntered={() => setEntered(true)} />

      <div className={`page${entered ? ' is-in' : ''}`}>
        <nav className={`nav${stuck ? ' is-stuck' : ''}`}>
          <a className="nav-mark" href="#top">
            AS<span>.</span>
          </a>
          <div className="nav-right">
            <div className="nav-links">
              {NAV.map(([key, href]) => (
                <a key={href} href={href}>
                  {t.nav[key]}
                </a>
              ))}
            </div>
            <LangSwitch />
          </div>
        </nav>

        <main>
          <Hero />
          <Dive />
          <About />
          <Work />
          <Projects />
          <Stack />
          <Contact />
        </main>

        <footer className="foot">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{t.footer.built}</span>
        </footer>
      </div>
    </>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  )
}
