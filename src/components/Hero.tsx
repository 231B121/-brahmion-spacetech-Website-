import { Suspense, lazy, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { scrollToId } from '../lib/utils'
import MagneticButton from './ui/MagneticButton'
import ErrorBoundary, { SceneFallback } from './ui/ErrorBoundary'
import { useMobile } from '../hooks/useMobile'
import { useReducedMotion } from '../hooks/useReducedMotion'

const SpaceScene = lazy(() => import('./three/SpaceScene'))

export default function Hero({ ready }: { ready: boolean }) {
  const mobile = useMobile()
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, reduced ? 0 : 160])
  const [utcTime, setUtcTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setUtcTime(now.toISOString().slice(11, 19) + ' UTC')
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" aria-label="Home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Ambient Atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_25%,rgba(56,189,248,0.22),transparent_60%),radial-gradient(ellipse_at_20%_75%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_50%_40%,rgba(22,34,56,0.6),transparent_80%)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-[50vw] left-1/2 h-[100vw] w-[100vw] -translate-x-1/2 rounded-full border border-cyan/30 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.25),rgba(14,22,38,0.95)_48%)] shadow-[0_-30px_140px_rgba(56,189,248,0.2)]"
      />

      {/* 3D Scene */}
      <div className="absolute inset-0" data-cursor data-cursor-label="EXPLORE +">
        <ErrorBoundary fallback={<SceneFallback />}>
          <Suspense fallback={<div className="grid h-full place-items-center font-mono text-xs text-slate-500">LOADING SCENE…</div>}>
            <div className="h-full w-full opacity-90 lg:translate-x-[22%]">
              <SpaceScene mobile={mobile} reduced={reduced} />
            </div>
          </Suspense>
        </ErrorBoundary>
      </div>

      <motion.div style={{ y }} className="wrap pointer-events-none relative z-10 pt-28 pb-16">
        {/* Sanskrit Motto - Enlarged & Featured */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto mb-6 flex flex-col items-start gap-2"
        >
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan/75">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              <span>INCUBATED AT SIIC · IIT KANPUR</span>
            </div>
            {utcTime && (
              <>
                <span className="text-white/20 hidden sm:inline">|</span>
                <span className="text-slate-400 font-mono tracking-widest hidden sm:inline">
                  UTC <span className="text-cyan font-semibold">{utcTime}</span>
                </span>
                <span className="text-white/20 hidden md:inline">|</span>
                <span className="text-emerald-400 font-mono text-[10px] tracking-wider hidden md:inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  BENCH: NOMINAL
                </span>
              </>
            )}
          </div>
          <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wider text-cyan drop-shadow-[0_0_28px_rgba(90,209,230,0.45)]">
            || ब्रह्माण्डस्य नवप्रयाणम् ||
          </div>
        </motion.div>

        {/* Hero Heading: A Journey Through The Universe (Refined, slightly smaller) */}
        <h1
          className="font-semibold uppercase tracking-tight leading-[1.04]"
          style={{ fontSize: 'clamp(2rem, 5.4vw, 4.5rem)' }}
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block text-white"
              initial={{ y: '105%' }}
              animate={ready ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            >
              A Journey
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-white"
              initial={{ y: '105%' }}
              animate={ready ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
            >
              Through The
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block bg-gradient-to-r from-cyan via-cyan-alt to-[#7fe4f3] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(90,209,230,0.35)]"
              initial={{ y: '105%' }}
              animate={ready ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.34, ease: [0.2, 0.7, 0.2, 1] }}
            >
              Universe
            </motion.span>
          </span>
        </h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={ready ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="body-copy mt-8 max-w-xl text-slate-300/90 text-lg leading-relaxed"
        >
          Developing next-generation green propulsion systems for safer, cleaner, and reliable space missions.
        </motion.p>

        {/* CTA Buttons */}
        <div className="pointer-events-auto mt-10 flex flex-wrap gap-4">
          <MagneticButton solid href="#products" onClick={() => scrollToId('products')}>
            View Products
          </MagneticButton>
          <MagneticButton href="#about" onClick={() => scrollToId('about')}>
            Discover Brahmion
          </MagneticButton>
        </div>

        {/* GPS Coordinates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 0.7 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 font-mono text-[11px] tracking-widest text-slate-400"
        >
          LAT 26.5123° N — LON 80.2329° E · IIT KANPUR
        </motion.div>
      </motion.div>

      <div aria-hidden className="absolute bottom-6 right-8 font-mono text-[10px] tracking-[0.25em] text-slate-400 hidden sm:flex items-center gap-3">
        <span className="rounded border border-cyan/30 bg-void/70 px-2.5 py-1 text-cyan/90 backdrop-blur-sm shadow-[0_0_12px_rgba(90,209,230,0.15)]">
          DRAG 3D MODEL TO ROTATE
        </span>
        <span className="text-slate-500">SCROLL ↓</span>
      </div>
    </section>
  )
}
