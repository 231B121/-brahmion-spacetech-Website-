import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Section from './ui/Section'
import WordReveal from './ui/WordReveal'
import { trajectory } from '../data/technology'
export default function DeepSpace() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] })
  const pts = [[60, 300], [220, 200], [420, 130], [620, 60]]
  return (
    <Section id="deep-space" label="Deep space" className="overflow-hidden">
      <div className="wrap">
        <p className="eyebrow mb-6">07 / FUTURE</p>
        <h2 className="h2"><WordReveal text="Toward deep space." /></h2>
        <p className="body-copy mt-6 max-w-2xl">Beyond green chemical propulsion, Brahmion is reported to be developing a hybrid plasma-based electric propulsion system for deep-space, high-Isp missions. [CONTENT TO BE VERIFIED]</p>
        <div ref={ref} className="mt-12" role="img" aria-label="Trajectory from Earth to orbit, deep space and interplanetary space">
          <svg viewBox="0 0 700 340" className="w-full">
            <circle cx="60" cy="300" r="34" fill="#0a1020" stroke="#5ad1e6" strokeOpacity=".6" />
            <circle cx="60" cy="300" r="70" fill="none" stroke="#a0c8ff" strokeOpacity=".2" strokeDasharray="3 6" />
            <motion.path d="M60 300 C 140 160, 300 260, 420 130 S 600 90, 640 50" fill="none" stroke="#5ad1e6" strokeWidth="1.5" style={{ pathLength: scrollYProgress }} />
            {pts.map(([x, y], i) => (<g key={i}><circle cx={x} cy={y} r="4" fill={i === 3 ? '#ff7a3d' : '#5ad1e6'} /><text x={x + 10} y={y - 10} fontFamily="monospace" fontSize="11" letterSpacing="2" fill="#9fb0c8">{trajectory[i]}</text></g>))}
          </svg>
        </div>
      </div>
    </Section>
  )
}
