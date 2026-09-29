import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import WordReveal from './ui/WordReveal'
import { propulsionStages } from '../data/technology'
import { useReducedMotion } from '../hooks/useReducedMotion'
export default function GreenPropulsion() {
  const [i, setI] = useState(0), reduced = useReducedMotion()
  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setI((v) => (v + 1) % propulsionStages.length), 3200)
    return () => clearInterval(id)
  }, [reduced])
  const dots = Array.from({ length: 14 }, (_, k) => k)
  return (
    <Section id="propulsion" label="Green propulsion">
      <div className="wrap">
        <p className="eyebrow mb-6">04 / GREEN PROPULSION</p>
        <h2 className="h2"><WordReveal text="Cleaner than hydrazine." /></h2>
        <p className="body-copy mt-6 max-w-2xl">Green monopropellants — HTP, HAN, ADN and HAN-ADN blends — developed as environmentally safer alternatives to hydrazine, together with the catalysts and thrusters that use them.</p>
        <div className="hairline grid-bg relative mt-12 overflow-hidden p-4 sm:p-8">
          <svg viewBox="0 0 800 200" className="w-full" role="img" aria-label="Flow from propellant through reaction and energy to thrust">
            <path d="M20 100 H780" stroke="#a0c8ff" strokeOpacity=".2" />
            <rect x="290" y="50" width="200" height="100" fill="rgba(90,209,230,.06)" stroke="#5ad1e6" strokeOpacity=".5" />
            <path d="M490 60 L560 30 V170 L490 140" fill="rgba(255,122,61,.08)" stroke="#ff7a3d" strokeOpacity=".5" />
            {dots.map((k) => {
              const y = 88 + ((k * 7) % 24)
              return <motion.circle key={k} r="3" cy={y} fill={k % 3 === 0 ? '#ff9a5c' : '#5ad1e6'}
                initial={{ cx: 20, opacity: 0 }} animate={reduced ? { cx: 20 + k * 50, opacity: 0.8 } : { cx: [20, 780], opacity: [0, 1, 1, 0] }}
                transition={reduced ? undefined : { duration: 5, repeat: Infinity, delay: k * 0.35, ease: 'linear' }} />
            })}
            {['PROPELLANT', 'REACTION', 'ENERGY', 'THRUST'].map((t, k) => (
              <text key={t} x={40 + k * 200} y="190" fontFamily="monospace" fontSize="11" letterSpacing="2" fill={i === k ? '#5ad1e6' : '#64748b'}>{t}</text>
            ))}
          </svg>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {propulsionStages.map((s, k) => (
            <button key={s.id} onClick={() => setI(k)} aria-pressed={i === k} className={`min-h-[120px] border p-5 text-left transition ${i === k ? 'border-cyan bg-cyan/5' : 'border-line hover:border-white/30'}`}>
              <span className="font-mono text-[11px] tracking-widest text-cyan">0{k + 1} · {s.label}</span>
              <span className="mt-3 block text-sm leading-relaxed text-slate-300/85">{s.text}</span>
            </button>
          ))}
        </div>
      </div>
    </Section>
  )
}
