import { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import About from './components/About'
import Products from './components/Products'
import GreenPropulsion from './components/GreenPropulsion'
import Technology from './components/Technology'
import LabTesting from './components/LabTesting'
import Research from './components/Research'
import DeepSpace from './components/DeepSpace'
import Capabilities from './components/Capabilities'
import Tractions from './components/Tractions'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { sectionIds } from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    const root = document.documentElement
    root.classList.remove('theme-midnight')
    root.classList.add('theme-light')
    try {
      localStorage.removeItem('brahmion_theme')
    } catch {
      // ignore
    }
  }, [])

  const active = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen bg-[#f7fafe] text-[#0f172a]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 shadow-md"
      >
        Skip to content
      </a>
      <Cursor />
      <ScrollProgress />
      <Navbar active={active} />
      <main id="main">
        <Hero ready={ready} />
        <Mission />
        <About />
        <Products />
        <GreenPropulsion />
        <Technology />
        <LabTesting />
        <Research />
        <DeepSpace />
        <Capabilities />
        <Tractions />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
