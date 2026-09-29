import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { company } from '../data/company'
import Section from './ui/Section'
import WordReveal from './ui/WordReveal'
export default function Mission() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bg = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  return (
    <Section id="mission" label="Mission" className="overflow-hidden">
      <motion.div aria-hidden ref={ref as never} style={{ y: bg }} className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="wrap relative">
        <p className="eyebrow mb-8">{company.mission.kicker}</p>
        <h2 className="h2">{company.mission.lines.map((l, i) => <span key={l} className="block"><WordReveal text={l} delay={i * 0.1} /></span>)}</h2>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="my-10 h-px origin-left bg-line" />
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <p className="body-copy max-w-2xl">{company.mission.body}</p>
          <ul className="flex flex-wrap gap-2 md:justify-end">{company.keywords.map((k) => <li key={k} className="hairline px-3 py-1.5 font-mono text-[11px] tracking-widest text-cyan/90">{k}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}
