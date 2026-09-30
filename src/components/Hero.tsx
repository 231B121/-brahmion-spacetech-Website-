import { Suspense, lazy } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { scrollToId } from '../lib/utils'
import ErrorBoundary, { SceneFallback } from './ui/ErrorBoundary'
import { useMobile } from '../hooks/useMobile'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ArrowRight, Award, Zap, ShieldCheck, Building2 } from 'lucide-react'

const SpaceScene = lazy(() => import('./three/SpaceScene'))

export default function Hero({ ready }: { ready: boolean }) {
  const mobile = useMobile()
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, reduced ? 0 : 100])

  return (
    <section id="home" aria-label="Home" className="relative flex min-h-[90vh] lg:min-h-screen items-center overflow-hidden pt-24 pb-16 bg-gradient-to-b from-[#f8fbfe] via-[#edf5fc] to-[#f4f8fc]">
      {/* Soft milky blue atmospheric sky gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(186,230,253,0.35),transparent_60%),radial-gradient(ellipse_at_15%_75%,rgba(219,234,254,0.4),transparent_50%)]"
      />

      <div className="wrap relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Formal Brand Identity, Title, CTAs & Credentials (lg:col-span-7) */}
          <motion.div style={{ y }} className="lg:col-span-7 flex flex-col items-start">
            {/* Sanskrit Motto & Incubation Credential */}
            <div className="mb-6 flex flex-col items-start gap-2.5">
              <div className="badge">
                <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
                <span>INCUBATED AT SIIC · IIT KANPUR</span>
              </div>

              <div className="font-sans text-xl sm:text-2xl font-bold tracking-wide text-[#0369a1]">
                || ब्रह्माण्डस्य नवप्रयाणम् ||
              </div>
            </div>

            {/* Hero Heading */}
            <h1 className="display text-slate-900">
              A Journey Through The <span className="text-[#0284c7]">Universe</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="body-copy mt-6 max-w-xl text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              Developing next-generation green propulsion systems for safer, cleaner, and reliable space missions. Replacing toxic hydrazine with flight-grade green monopropellants.
            </p>

            {/* Formal CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('products')
                }}
                className="btn btn-solid inline-flex items-center gap-2"
              >
                <span>Explore Propulsion Catalogue</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('about')
                }}
                className="btn inline-flex items-center gap-2"
              >
                <span>About Brahmion</span>
              </a>
            </div>

            {/* Formal Engineering Credential Cards */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl border-t border-[#cfe0f2] pt-6">
              <div className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 border border-[#cfe0f2] shadow-2xs">
                <Award size={18} className="text-[#0284c7] shrink-0" />
                <div>
                  <span className="block font-bold text-sm text-slate-900">TRL 4</span>
                  <span className="text-[11px] text-slate-600 font-semibold">Validated Stand</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 border border-[#cfe0f2] shadow-2xs">
                <Zap size={18} className="text-[#0284c7] shrink-0" />
                <div>
                  <span className="block font-bold text-sm text-slate-900">366s ISP</span>
                  <span className="text-[11px] text-slate-600 font-semibold">Specific Impulse</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 border border-[#cfe0f2] shadow-2xs">
                <ShieldCheck size={18} className="text-[#0284c7] shrink-0" />
                <div>
                  <span className="block font-bold text-sm text-slate-900">Zero Toxicity</span>
                  <span className="text-[11px] text-slate-600 font-semibold">Non-Hazmat</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 border border-[#cfe0f2] shadow-2xs">
                <Building2 size={18} className="text-[#0284c7] shrink-0" />
                <div>
                  <span className="block font-bold text-sm text-slate-900">IIT Kanpur</span>
                  <span className="text-[11px] text-slate-600 font-semibold">SIIC Deep-Tech</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dedicated 3D Interactive Thruster Viewport (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full rounded-2xl border border-[#cfe0f2] bg-gradient-to-b from-white/90 via-[#edf5fc]/85 to-white/95 p-1 shadow-[0_8px_32px_rgba(2,132,199,0.06)] overflow-hidden">
              {/* Top Hardware Label */}
              <div className="absolute left-3.5 top-3.5 z-20 flex items-center gap-2 rounded-md border border-[#cfe0f2] bg-white/95 px-3 py-1.5 font-sans text-[11px] font-semibold text-[#0369a1] shadow-2xs backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7] animate-pulse" />
                <span>3D PROPULSION CAD · IN-ORBIT THRUSTER</span>
              </div>

              {/* 3D Canvas */}
              <div className="h-full w-full">
                <ErrorBoundary fallback={<SceneFallback />}>
                  <Suspense fallback={<div className="grid h-full place-items-center font-sans text-xs text-slate-700 font-semibold">Loading 3D propulsion model…</div>}>
                    <SpaceScene mobile={mobile} reduced={reduced} />
                  </Suspense>
                </ErrorBoundary>
              </div>

              {/* Bottom Interactive Hint */}
              <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between rounded-lg border border-[#d6e4f0] bg-white px-3 py-1.5 font-sans text-[11px] text-slate-800 shadow-2xs">
                <span className="font-medium">Interactive CAD Simulation</span>
                <span className="font-semibold text-[#0284c7]">Rotate with cursor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
