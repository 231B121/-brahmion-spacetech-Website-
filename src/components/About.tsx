import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Section from './ui/Section'
import WordReveal from './ui/WordReveal'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rot = useTransform(scrollYProgress, [0, 1], [0, 300])
  const rot2 = useTransform(scrollYProgress, [0, 1], [0, -180])

  return (
    <Section id="about" label="About">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">// 01 — ABOUT US</p>
          <h2 className="h2 tracking-tight leading-[0.98]">
            <WordReveal text="Making Space Safer" />
            <br />
            <span className="text-cyan">One Launch</span> at a Time
          </h2>

          <div className="mt-8 space-y-4 body-copy text-lg text-slate-300">
            <p>
              Traditional rocket fuels like hydrazine are highly toxic as they cause cancer, harm the environment, and cost up to $100,000 per ton to store safely. As space launches multiply, this problem is only getting worse.
            </p>
            <p>
              We've created a <span className="font-semibold text-cyan">green alternative</span> that's just as powerful but completely safe. Our propellants are <span className="font-semibold text-cyan">non-toxic</span>, <span className="font-semibold text-cyan">environmentally responsible</span>, and <span className="font-semibold text-cyan">reliable</span>.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded border border-line bg-white/[0.02] px-4 py-2 font-mono text-xs tracking-wider text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span>INCUBATED AT SIIC · IIT KANPUR</span>
          </div>
        </div>

        <div ref={ref} className="lg:col-span-5 mx-auto w-full max-w-[440px]" role="img" aria-label="Orbital diagram">
          <div className="hairline bg-void/60 p-6 relative rounded-sm border-line/80 backdrop-blur-sm">
            <div className="absolute top-3 left-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              ORBITAL DYNAMICS // CLEAN FLIGHT
            </div>
            <svg viewBox="0 0 400 400" className="w-full mt-4">
              <circle cx="200" cy="200" r="46" fill="#0a1020" stroke="#5ad1e6" strokeOpacity=".7" />
              <path d="M160 190 q40 -20 80 0 M158 210 q42 18 84 0" stroke="#5ad1e6" strokeOpacity=".3" fill="none" />
              <motion.g style={{ rotate: rot }}>
                <circle cx="200" cy="200" r="120" fill="none" stroke="#a0c8ff" strokeOpacity=".25" strokeDasharray="3 6" />
                <circle cx="320" cy="200" r="6" fill="#5ad1e6" />
              </motion.g>
              <motion.g style={{ rotate: rot2 }}>
                <circle cx="200" cy="200" r="175" fill="none" stroke="#a0c8ff" strokeOpacity=".15" />
                <circle cx="375" cy="200" r="4" fill="#ff7a3d" />
              </motion.g>
              <g fontFamily="monospace" fontSize="9" fill="#8fa3bf">
                <text x="180" y="204">EARTH</text>
                <text x="30" y="380">LEO ORBIT · GEO INSERTION</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </Section>
  )
}
