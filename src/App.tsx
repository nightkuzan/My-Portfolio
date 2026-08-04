import { useState } from 'react'
import Cursor from './components/Cursor'
import Dive from './components/Dive'
import Hero from './components/Hero'
import { About, Contact, Projects, Stack, Work } from './components/Sections'
import Experience from './river/Experience'
import { profile } from './data'
import { useScrolled } from './hooks'

const NAV = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Projects', '#projects'],
  ['Stack', '#stack'],
  ['Contact', '#contact'],
]

export default function App() {
  const stuck = useScrolled(60)
  const [entered, setEntered] = useState(false)

  return (
    <>
      <Cursor />
      <Experience onEntered={() => setEntered(true)} />

      <div className={`page${entered ? ' is-in' : ''}`}>
        <nav className={`nav${stuck ? ' is-stuck' : ''}`}>
          <a className="nav-mark" href="#top">
            AS<span>.</span>
          </a>
          <div className="nav-links">
            {NAV.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
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
          <span>React · three.js · a river of stars</span>
        </footer>
      </div>
    </>
  )
}
