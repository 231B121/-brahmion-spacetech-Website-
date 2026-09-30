import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './ui/Section'
import { researchStages } from '../data/technology'
import { CheckCircle2, ArrowRight, Activity, Microscope, Cpu, Wrench, Flame, ShieldCheck } from 'lucide-react'

const stageIcons = [Microscope, Activity, Cpu, Wrench, Flame, ShieldCheck]

const stageTrl = [
  'TRL 1-2 · FORMULATION',
  'TRL 2-3 · SIMULATION',
  'TRL 3 · CAD ARCHITECTURE',
  'TRL 3-4 · PROTOTYPING',
  'TRL 4 · HOT-FIRE TEST',
  'TRL 5-6 · SPACE QUAL',
]

export default function Research() {
  const [activeStage, setActiveStage] = useState(4) // Default to stage 5 (Hot-fire test bench - current milestone)

  const active = researchStages[activeStage]
  const ActiveIcon = stageIcons[activeStage]

  return (
    <Section id="research" label="Research and development" className="py-24 bg-[#f4f8fc]/60">
      <div className="wrap">
        <div className="badge mb-4">
          <span>R&amp;D STAGE-GATE ROADMAP</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 text-slate-900">Research &amp; Flight Qualification</h2>
            <p className="body-copy max-w-2xl mt-4 text-slate-700 font-medium">
              Our systematic stage-gate development lifecycle takes green propulsion formulations from thermochemical modeling at IIT Kanpur to vacuum hot-fire verification and in-orbit flight qualification.
            </p>
          </div>

          <div className="font-sans text-xs text-slate-700 font-medium">
            CURRENT MILESTONE: <span className="text-[#0284c7] font-bold">STAGE 05 · TRL 4 VALIDATED</span>
          </div>
        </div>

        {/* Stage-Gate Step Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {researchStages.map((stage, i) => {
            const isSelected = activeStage === i
            const isCompleted = i <= 4 // Stages 1 to 5 are validated/current
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(i)}
                className={`relative flex flex-col justify-between p-4 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-[#0284c7] bg-[#edf5fc] text-[#0284c7] shadow-xs'
                    : 'border-[#cfe0f2] bg-white text-slate-900 hover:border-[#0284c7] hover:text-[#0284c7]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-sans text-[11px] font-bold ${isSelected ? 'text-[#0284c7]' : 'text-slate-600'}`}>
                    PHASE 0{i + 1}
                  </span>
                  {isCompleted && (
                    <CheckCircle2 size={13} className={isSelected ? 'text-[#0284c7]' : 'text-slate-600'} />
                  )}
                </div>
                <span className="font-sans text-xs font-bold line-clamp-1 text-slate-900">
                  {stage.label}
                </span>
                <span className="font-sans text-[10px] text-slate-700 mt-1 font-semibold">
                  {stageTrl[i]}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Stage Detailed Breakdown Card */}
        <div className="rounded-2xl border border-[#cfe0f2] bg-white p-6 sm:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid gap-8 lg:grid-cols-12 items-center"
            >
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#cfe0f2] bg-[#f0f7fe] text-[#0284c7] shrink-0">
                    <ActiveIcon size={24} />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[#0284c7] font-bold block">
                      STAGE 0{activeStage + 1} OF 06 · {stageTrl[activeStage]}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {active.label}
                    </h3>
                  </div>
                </div>

                <p className="body-copy text-base leading-relaxed text-slate-700 font-medium">
                  {active.text}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-sans text-slate-700 font-semibold">
                  <span className="inline-flex items-center gap-1.5 text-[#0284c7]">
                    <CheckCircle2 size={15} />
                    <span>SIIC IIT KANPUR LABS</span>
                  </span>
                  <span>·</span>
                  <span>RIGOROUS VACUUM VERIFICATION</span>
                  <span>·</span>
                  <span>AEROSPACE COMPLIANT</span>
                </div>
              </div>

              {/* Progress Summary Column */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#e2e8f0] pt-6 lg:pt-0 lg:pl-8">
                <span className="font-sans text-xs uppercase tracking-wider text-slate-700 block mb-2 font-bold">
                  Stage Completion Status
                </span>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold font-sans text-[#0284c7]">
                    {Math.round(((activeStage + 1) / researchStages.length) * 100)}%
                  </span>
                  <span className="text-xs font-sans text-slate-700 font-semibold">Pipeline Complete</span>
                </div>

                <div className="h-2 w-full bg-[#f0f6fc] rounded-full overflow-hidden mb-4 border border-[#cfe0f2]">
                  <div
                    className="h-full bg-[#0284c7] transition-all duration-300"
                    style={{ width: `${((activeStage + 1) / researchStages.length) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-sans font-semibold">
                  <button
                    disabled={activeStage === 0}
                    onClick={() => setActiveStage((p) => Math.max(0, p - 1))}
                    className="text-slate-700 hover:text-slate-900 font-bold disabled:opacity-30 disabled:hover:text-slate-700"
                  >
                    ← Previous Phase
                  </button>
                  <button
                    disabled={activeStage === researchStages.length - 1}
                    onClick={() => setActiveStage((p) => Math.min(researchStages.length - 1, p + 1))}
                    className="text-[#0284c7] font-bold hover:underline disabled:opacity-30 disabled:hover:no-underline flex items-center gap-1"
                  >
                    <span>Next Phase</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
