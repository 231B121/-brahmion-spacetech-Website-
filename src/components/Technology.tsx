import { Suspense, lazy, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './ui/Section'
import WordReveal from './ui/WordReveal'
import ErrorBoundary, { SceneFallback } from './ui/ErrorBoundary'
import { parts } from '../data/technology'
import { useMobile } from '../hooks/useMobile'
import { useReducedMotion } from '../hooks/useReducedMotion'
const TechScene = lazy(() => import('./three/TechScene'))
export default function Technology() {
  const [sel, setSel] = useState<string | null>('catalyst')
  const mobile = useMobile(), reduced = useReducedMotion()
  const part = parts.find((p) => p.id === sel)
  return (
    <Section id="technology" label="Technology" className="bg-gradient-to-b from-transparent via-navy/60 to-transparent">
      <div className="wrap">
        <p className="eyebrow mb-6">03 / TECHNOLOGY</p>
        <h2 className="h2"><WordReveal text="Propulsion," /><br /><WordReveal text="reimagined." delay={0.15} /></h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="hairline grid-bg relative h-[420px] sm:h-[560px]" data-cursor data-cursor-label="EXPLORE +">
            <ErrorBoundary fallback={<SceneFallback />}>
              <Suspense fallback={<div className="grid h-full place-items-center font-mono text-xs text-slate-500">LOADING MODEL…</div>}>
                <TechScene selected={sel} onSelect={setSel} mobile={mobile} reduced={reduced} />
              </Suspense>
            </ErrorBoundary>
            <span className="absolute left-3 top-3 font-mono text-[10px] tracking-widest text-slate-500">ILLUSTRATIVE MONOPROPELLANT THRUSTER</span>
          </div>
          <div>
            <div role="tablist" aria-label="Thruster parts" className="flex flex-wrap gap-2">
              {parts.map((p) => (
                <button key={p.id} role="tab" aria-selected={sel === p.id} onClick={() => setSel(p.id)}
                  className={`min-h-[44px] border px-4 font-mono text-[11px] tracking-widest transition ${sel === p.id ? 'border-cyan bg-cyan/10 text-white' : 'border-line text-slate-400 hover:text-white'}`}>{p.label}</button>
              ))}
            </div>
            <div className="hairline mt-6 min-h-[180px] bg-void/60 p-6 backdrop-blur" aria-live="polite">
              <AnimatePresence mode="wait">
                {part && (
                  <motion.div key={part.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="eyebrow">{part.label}</p>
                    <p className="body-copy mt-3">{part.summary}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-slate-500">Generic architecture for explanation. No Brahmion performance figures are shown. Tap “+” markers or the tabs.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
