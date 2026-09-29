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
    <Section id="capabilities" label="Capabilities" className="py-24">
      <div className="wrap">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan">
          <span>CORE R&amp;D CAPABILITIES</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 tracking-tight leading-[0.98]">
              Propulsion Engineering <br />
              <span className="text-cyan">Capabilities</span>
            </h2>
            <p className="body-copy mt-4 max-w-2xl text-slate-200">
              From molecular formulation of green propellants to vacuum hot-fire qualification, Brahmion brings full-stack aerospace propulsion design under one roof at SIIC, IIT Kanpur.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-300">
            <span className="text-cyan font-bold">SIIC IIT KANPUR</span> · AEROSPACE DEEP-TECH
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = icons[i]
            const badge = capabilityBadges[i]
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-lg flex flex-col justify-between bg-surface/80 border border-line/80 p-7 transition-all duration-300 hover:border-cyan/60 hover:bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-line/60 pb-3 mb-5">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-cyan">
                      {badge}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan" />
                  </div>

                  <h3 className="font-sans text-lg font-bold text-white group-hover:text-cyan transition-colors">
                    {c.title}
                  </h3>

                  <p className="body-copy mt-3 text-xs leading-relaxed text-slate-300/85">
                    {c.text}
                  </p>
                </div>

                <div className="mt-6 border-t border-line/50 pt-3 flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>DISCIPLINE 0{i + 1}</span>
                  <span className="text-cyan font-semibold">QUALIFIED</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
