import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './ui/Section'
import { propulsionStages } from '../data/technology'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Flame, Gauge, Layers, Wind } from 'lucide-react'

const stageMetrics = [
  {
    icon: Gauge,
    techTitle: 'Propellant Feed & Manifold System',
    specs: [
      { label: 'Propellant Formula', val: 'HAN-ADN Blend / 90% BHP HTP' },
      { label: 'Feed Pressure', val: '18 – 24 bar Regulated' },
      { label: 'Handling Class', val: 'Safe / Open-Air Ambient' },
    ],
  },
  {
    icon: Layers,
    techTitle: 'Ceramic Catalyst Decomposition Bed',
    specs: [
      { label: 'Substrate', val: 'Engineered Porous Ceramic' },
      { label: 'Decomp Temperature', val: '~900°C – 1,150°C' },
      { label: 'Preheat Requirement', val: '0 W (Cold Start Capable)' },
    ],
  },
  {
    icon: Flame,
    techTitle: 'Exothermic Superheated Gas Expansion',
    specs: [
      { label: 'Combustion Chamber', val: 'High-Temperature Inconel Alloy' },
      { label: 'Exhaust Species', val: 'H2O Vapor, O2, N2 Clean Plume' },
      { label: 'Thermal Efficiency', val: '> 96% Theoretical Yield' },
    ],
  },
  {
    icon: Wind,
    techTitle: 'Supersonic Expansion Nozzle Impulse',
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
    const id = setInterval(() => setActiveStage((v) => (v + 1) % propulsionStages.length), 5000)
    return () => clearInterval(id)
  }, [reduced])

  const currentStage = propulsionStages[activeStage]
  const currentMetric = stageMetrics[activeStage]
  const CurrentIcon = currentMetric.icon

  return (
    <Section id="propulsion" label="Green propulsion" className="py-24 bg-white">
      <div className="wrap">
        <div className="badge mb-4">
          <span>GREEN PROPULSION CYCLE</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 tracking-tight text-slate-900">
              Cleaner than Hydrazine, <br />
              <span className="text-[#0284c7]">Zero Toxic Hazards</span>
            </h2>
            <p className="body-copy mt-4 max-w-2xl text-slate-700 font-medium">
              Green monopropellants — HTP, HAN, ADN and proprietary HAN-ADN blends — engineered alongside high-temperature ceramic catalysts to deliver high specific impulse without toxic hazards.
            </p>
          </div>

          <div className="font-sans text-xs text-slate-700 font-medium">
            SIIC IIT KANPUR · <span className="text-[#0284c7] font-bold">PROPULSION ARCHITECTURE</span>
          </div>
        </div>

        {/* Reaction Architecture Card */}
        <div className="rounded-xl border border-[#cfe0f2] bg-[#f8fbfe] p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
          <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4 mb-6">
            <span className="font-sans text-xs uppercase tracking-wider text-[#0284c7] font-bold">
              Thermochemical Decomposition Cycle
            </span>
            <span className="font-sans text-xs text-slate-700 font-semibold">
              Stage 0{activeStage + 1} of 04 Active
            </span>
          </div>

          {/* Step Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {propulsionStages.map((s, idx) => {
              const isSelected = activeStage === idx
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(idx)}
                  className={`group relative flex flex-col p-4 rounded-lg border text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-[#0284c7] bg-white text-[#0284c7] shadow-xs'
                      : 'border-[#e2e8f0] bg-white/70 hover:border-[#0284c7] hover:bg-white'
                  }`}
                >
                  <span className={`font-sans text-[11px] uppercase tracking-wider mb-1 font-bold ${isSelected ? 'text-[#0284c7]' : 'text-slate-700'}`}>
                    STAGE 0{idx + 1}
                  </span>
                  <span className={`font-sans text-xs font-bold ${isSelected ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                    {s.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Stage Technical Data */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid gap-6 lg:grid-cols-12 items-center rounded-xl border border-[#d6e4f0] bg-white p-6 sm:p-7 shadow-2xs"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#cfe0f2] bg-[#f0f7fe] text-[#0284c7] shrink-0">
                    <CurrentIcon size={22} />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] tracking-wider text-[#0284c7] uppercase font-bold block">
                      CYCLE PHASE 0{activeStage + 1}
                    </span>
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-slate-900">
                      {currentMetric.techTitle}
                    </h3>
                  </div>
                </div>

                <p className="body-copy text-sm leading-relaxed text-slate-700 font-medium mt-3 max-w-xl">
                  {currentStage.text}
                </p>
              </div>

              {/* Metrics Column */}
              <div className="lg:col-span-5 grid gap-2.5 font-sans text-xs border-t lg:border-t-0 lg:border-l border-[#e2e8f0] pt-4 lg:pt-0 lg:pl-6">
                {currentMetric.specs.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-md bg-[#f8fbfe] border border-[#e2e8f0] p-2.5"
                  >
                    <span className="text-slate-900 text-xs font-semibold">{item.label}</span>
                    <span className="text-[#0284c7] font-bold text-xs text-left sm:text-right">{item.val}</span>
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
