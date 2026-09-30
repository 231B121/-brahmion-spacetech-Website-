import { motion, useSpring, useTransform } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'
export default function ScrollProgress() {
  const p = useScrollProgress(), s = useSpring(p, { stiffness: 120, damping: 30 })
  const label = useTransform(s, (v) => `${Math.round(v * 100)}`.padStart(2, '0'))
  return (
    <div aria-hidden className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 sm:flex">
      <div className="h-32 w-px bg-[#cfe0f2]"><motion.div className="h-full w-px origin-top bg-[#0284c7]" style={{ scaleY: s }} /></div>
      <motion.span className="font-mono text-[10px] text-slate-700 font-bold">{label}</motion.span>
    </div>
  )
}
