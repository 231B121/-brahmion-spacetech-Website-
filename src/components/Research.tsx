import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { researchStages } from '../data/technology'
export default function Research() {
  const ref = useRef<HTMLElement>(null), [a, setA] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => setA(Math.min(researchStages.length - 1, Math.floor(v * researchStages.length))))
  const s = researchStages[a]
  return (
    <section id="research" ref={ref} aria-label="Research and development" className="relative h-[420vh]">
      <div className="grid-bg sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="wrap w-full">
          <p className="eyebrow mb-6">06 / RESEARCH &amp; DEVELOPMENT</p>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-6xl text-cyan/80 sm:text-8xl">0{a + 1}</p>
              <h2 className="h2 mt-2">{s.label}</h2>
              <p className="body-copy mt-4 max-w-md" aria-live="polite">{s.text}</p>
            </div>
            <ol className="relative space-y-1 border-l border-line pl-6">
              <motion.div aria-hidden className="absolute -left-px top-0 w-px origin-top bg-cyan" style={{ scaleY: scrollYProgress, height: '100%' }} />
              {researchStages.map((r, k) => (
                <li key={r.id} className={`py-2 font-mono text-xs tracking-[0.25em] transition duration-500 sm:text-sm ${k === a ? 'text-white' : k < a ? 'text-cyan/70' : 'text-slate-600'}`}>
                  <span className="mr-4 text-[10px]">0{k + 1}</span>{r.label}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
