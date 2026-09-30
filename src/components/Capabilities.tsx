import { motion } from 'framer-motion'
import { Atom, FlaskConical, Cpu, Ruler, Flame, Orbit } from 'lucide-react'
import Section from './ui/Section'
import { capabilities } from '../data/technology'

const icons = [Atom, FlaskConical, Cpu, Ruler, Flame, Orbit]

const capabilityBadges = [
  'CHEMICAL SYNTHESIS',
  'MATERIAL SCIENCE',
  'PRECISION HARDWARE',
  'NUMERICAL CFD',
  'TEST BENCH VALIDATION',
  'DEEP-SPACE HORIZON',
]

export default function Capabilities() {
  return (
    <Section id="capabilities" label="Capabilities" className="py-24 bg-[#f4f8fc]/60">
      <div className="wrap">
        <div className="badge mb-4">
          <span>CORE R&amp;D CAPABILITIES</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 tracking-tight text-slate-900">
              Propulsion Engineering <br />
              <span className="text-[#0284c7]">Capabilities</span>
            </h2>
            <p className="body-copy mt-4 max-w-2xl text-slate-700 font-medium">
              From molecular formulation of green propellants to vacuum hot-fire qualification, Brahmion brings full-stack aerospace propulsion design under one roof at SIIC, IIT Kanpur.
            </p>
          </div>

          <div className="font-sans text-xs text-slate-700 font-medium">
            <span className="text-[#0284c7] font-bold">SIIC IIT KANPUR</span> · AEROSPACE DEEP-TECH
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = icons[i]
            const badge = capabilityBadges[i]
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative rounded-2xl flex flex-col justify-between bg-white border border-[#d6e4f0] p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:border-[#0284c7] hover:shadow-[0_8px_24px_rgba(30,58,138,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3 mb-5">
                    <span className="font-sans text-[11px] font-bold tracking-wider text-[#0284c7]">
                      {badge}
                    </span>
                    <Icon className="h-5 w-5 text-slate-500 transition-colors group-hover:text-[#0284c7]" />
                  </div>

                  <h3 className="font-sans text-lg font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                    {c.title}
                  </h3>

                  <p className="body-copy mt-3 text-sm leading-relaxed text-slate-700 font-medium">
                    {c.text}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#e2e8f0] pt-3.5 flex items-center justify-between font-sans text-xs text-slate-700">
                  <span className="font-semibold">Discipline 0{i + 1}</span>
                  <span className="text-[#0284c7] font-bold">VALIDATED</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
