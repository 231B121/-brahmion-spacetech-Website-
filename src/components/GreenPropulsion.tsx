import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './ui/Section'
import WordReveal from './ui/WordReveal'
import { propulsionStages } from '../data/technology'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Flame, Gauge, Layers, Wind, Sparkles, ChevronRight } from 'lucide-react'

const stageMetrics = [
  {
    icon: Gauge,
    techTitle: 'PROPELLANT FEED & MANIFOLD',
    specs: [
      { label: 'Propellant Formula', val: 'HAN-ADN Blend / 90% BHP HTP' },
      { label: 'Feed Pressure', val: '18 – 24 bar Regulated' },
      { label: 'Handling Class', val: 'Safe / Open-Air Ambient' },
    ],
  },
  {
    icon: Layers,
    techTitle: 'CERAMIC CATALYST BED',
    specs: [
      { label: 'Substrate', val: 'Engineered Porous Ceramic' },
      { label: 'Decomp Temperature', val: '~900°C – 1,150°C' },
      { label: 'Preheat Requirement', val: '0 W (Cold Start Capable)' },
    ],
  },
  {
    icon: Flame,
    techTitle: 'EXOTHERMIC GAS EXPANSION',
    specs: [
      { label: 'Combustion Chamber', val: 'High-Temperature Inconel Alloy' },
      { label: 'Exhaust Species', val: 'H2O Vapor, O2, N2 Clean Plume' },
      { label: 'Thermal Efficiency', val: '> 96% Theoretical Yield' },
    ],
  },
  {
    icon: Wind,
    techTitle: 'SUPERSONIC NOZZLE IMPULSE',
    specs: [
      { label: 'Exhaust Velocity', val: 'Mach 3.2+ Supersonic Plume' },
      { label: 'Specific Impulse (Isp)', val: 'Up to 366s ISP' },
      { label: 'Minimum Pulse Bit', val: '< 10 ms Precision Impulse' },
    ],
  },
]

export default function GreenPropulsion() {
  const [activeStage, setActiveStage] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setActiveStage((v) => (v + 1) % propulsionStages.length), 4000)
    return () => clearInterval(id)
  }, [reduced])

  const currentStage = propulsionStages[activeStage]
  const currentMetric = stageMetrics[activeStage]
  const CurrentIcon = currentMetric.icon

  return (
    <Section id="propulsion" label="Green propulsion" className="py-24">
      <div className="wrap">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan">
          <span>GREEN PROPULSION CYCLE</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 tracking-tight leading-[0.98]">
              <WordReveal text="Cleaner than Hydrazine." />
            </h2>
            <p className="body-copy mt-4 max-w-2xl text-slate-200">
              Green monopropellants — HTP, HAN, ADN and HAN-ADN blends — engineered alongside high-temperature ceramic catalysts to deliver high Isp without toxic ground hazards.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded border border-cyan/30 bg-surface/80 px-4 py-2 font-mono text-xs text-cyan backdrop-blur-md">
            <Sparkles size={14} className="animate-pulse" />
            <span>SIIC IIT KANPUR R&amp;D ARCHITECTURE</span>
          </div>
        </div>

        {/* Formal Closed-Loop Reaction Architecture HUD */}
        <div className="rounded-lg border border-line/80 bg-surface/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between border-b border-line/70 pb-4 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan font-bold">
              THERMOCHEMICAL DECOMPOSITION CYCLE
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              STAGE 0{activeStage + 1} OF 04 ACTIVE
            </span>
          </div>

          {/* Interactive Pipeline Step Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {propulsionStages.map((s, idx) => {
              const isSelected = activeStage === idx
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(idx)}
                  className={`group relative flex flex-col p-4 rounded-sm border text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-cyan bg-cyan/10 shadow-[0_0_15px_rgba(90,209,230,0.2)]'
                      : 'border-line/70 bg-white/[0.01] hover:border-slate-500 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-widest mb-1.5">
                    <span className={isSelected ? 'text-cyan font-bold' : 'text-slate-500'}>
                      STAGE 0{idx + 1}
                    </span>
                    {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-ping" />}
                  </div>
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {s.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Stage Technical Data Sheet */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 lg:grid-cols-12 items-center rounded-sm border border-cyan/25 bg-white/[0.02] p-6"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-cyan/40 bg-cyan/15 text-cyan">
                    <CurrentIcon size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-cyan uppercase font-bold block">
                      CYCLE PHASE 0{activeStage + 1}
                    </span>
                    <h3 className="font-sans text-xl font-bold text-white">
                      {currentMetric.techTitle}
                    </h3>
                  </div>
                </div>

                <p className="body-copy text-sm leading-relaxed text-slate-300 mt-3 max-w-xl">
                  {currentStage.text}
                </p>
              </div>

              {/* Telemetry Metrics Column */}
              <div className="lg:col-span-5 grid gap-2.5 font-mono text-xs border-t lg:border-t-0 lg:border-l border-line/80 pt-4 lg:pt-0 lg:pl-6">
                {currentMetric.specs.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded bg-void/80 border border-line/60 p-2.5"
                  >
                    <span className="text-slate-400 text-[11px]">{item.label}</span>
                    <span className="text-cyan font-semibold text-[11px]">{item.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
