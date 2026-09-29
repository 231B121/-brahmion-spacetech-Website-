import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
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
  const done = useCallback(() => setReady(true), [])
  const active = useActiveSection(sectionIds)
  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'
  }, [ready])

  return (
    <div className="grain">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-white focus:px-4 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>
      <AnimatePresence>{!ready && <Preloader onDone={done} />}</AnimatePresence>
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
