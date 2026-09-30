import { Suspense, lazy, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './ui/Section'
import ErrorBoundary, { SceneFallback } from './ui/ErrorBoundary'
import { parts } from '../data/technology'
import { useMobile } from '../hooks/useMobile'
import { useReducedMotion } from '../hooks/useReducedMotion'

const TechScene = lazy(() => import('./three/TechScene'))

export default function Technology() {
  const [sel, setSel] = useState<string | null>('catalyst')
  const mobile = useMobile()
  const reduced = useReducedMotion()
  const part = parts.find((p) => p.id === sel)

  return (
    <Section id="technology" label="Technology" className="py-24 bg-[#f4f8fc]/70">
      <div className="wrap">
        <div className="badge mb-4">
          <span>INTERACTIVE 3D CAD ARCHITECTURE</span>
        </div>

        <h2 className="h2 tracking-tight text-slate-900">
          Propulsion Engineering, <br />
          <span className="text-[#0284c7]">Reimagined for In-Orbit Reliability</span>
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center">
          {/* 3D Model Card */}
          <div className="rounded-2xl border border-[#cfe0f2] bg-white relative h-[420px] sm:h-[520px] overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
            <ErrorBoundary fallback={<SceneFallback />}>
              <Suspense fallback={<div className="grid h-full place-items-center font-sans text-xs text-slate-700 font-semibold">Loading CAD model…</div>}>
                <TechScene selected={sel} onSelect={setSel} mobile={mobile} reduced={reduced} />
              </Suspense>
            </ErrorBoundary>
            <div className="absolute left-4 top-4 font-sans text-xs tracking-wide text-[#0284c7] font-semibold bg-white/95 px-3 py-1.5 rounded-md border border-[#cfe0f2] shadow-2xs backdrop-blur-xs">
              CAD HARDWARE · 100 mN MICRO THRUSTER
            </div>
          </div>

          {/* Component Tabs & Technical Description */}
          <div>
            <div className="mb-3 font-sans text-xs uppercase tracking-wider text-slate-700 font-bold">
              Sub-Assembly Inspection:
            </div>

            <div role="tablist" aria-label="Thruster parts" className="flex flex-wrap gap-2">
              {parts.map((p) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={sel === p.id}
                  onClick={() => setSel(p.id)}
                  className={`min-h-[40px] rounded-lg border px-3.5 font-sans text-xs font-semibold tracking-wide transition-colors ${
                    sel === p.id
                      ? 'border-[#0284c7] bg-[#edf5fc] text-[#0284c7] shadow-2xs font-bold'
                      : 'border-[#cfe0f2] bg-white text-slate-900 hover:border-[#0284c7] hover:text-[#0284c7]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="mt-6 min-h-[170px] rounded-xl border border-[#cfe0f2] bg-white p-6 shadow-2xs" aria-live="polite">
              <AnimatePresence mode="wait">
                {part && (
                  <motion.div
                    key={part.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#0284c7]">{part.label}</p>
                    <p className="body-copy mt-3 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{part.summary}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="mt-4 font-sans text-xs leading-relaxed text-slate-700 font-medium">
              In-house hardware architecture developed at SIIC, Indian Institute of Technology Kanpur. Select components above to inspect mechanical specifications.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
