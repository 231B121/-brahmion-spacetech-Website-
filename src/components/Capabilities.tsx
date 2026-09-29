import { useState } from 'react'
import { motion } from 'framer-motion'
import { Atom, FlaskConical, Cpu, Ruler, Flame, Orbit } from 'lucide-react'
import Section from './ui/Section'
import { capabilities } from '../data/technology'
const icons = [Atom, FlaskConical, Cpu, Ruler, Flame, Orbit]
export default function Capabilities() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <Section id="capabilities" label="Capabilities">
      <div className="wrap">
        <p className="eyebrow mb-6">08 / CAPABILITIES</p>
        <h2 className="h2 mb-12">Engineering capability</h2>
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = icons[i], on = open === c.id
            return (
              <motion.button key={c.id} onClick={() => setOpen(on ? null : c.id)} aria-expanded={on} whileHover={{ rotateX: 2, rotateY: -2 }} style={{ transformPerspective: 800 }}
                className={`group relative min-h-[200px] bg-void p-7 text-left transition ${on ? 'grid-bg' : 'hover:bg-navy'}`}>
                <Icon className={`transition duration-500 ${on ? 'scale-110 text-cyan' : 'text-slate-400 group-hover:text-cyan'}`} />
                <h3 className="mt-6 text-lg font-semibold">{c.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed text-slate-300/85 transition-all duration-500 ${on ? 'max-h-40 opacity-100' : 'max-h-0 overflow-hidden opacity-0 sm:group-hover:max-h-40 sm:group-hover:opacity-100'}`}>{c.text}</p>
                <span className="absolute bottom-3 right-4 font-mono text-[10px] text-slate-600">{on ? '−' : '+'}</span>
                <span className="sr-only">{on ? '' : c.text}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
