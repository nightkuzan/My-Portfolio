import Cursor from './components/Cursor'
import Hero from './components/Hero'
import { About, Contact, Projects, Stack, Work } from './components/Sections'
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

  return (
    <>
      <Cursor />

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
        <About />
        <Work />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React, Vite and a hand-written WebGL shader</span>
      </footer>
    </>
  )
}
