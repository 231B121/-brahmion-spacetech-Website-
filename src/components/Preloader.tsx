import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [p, setP] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setP((v) => Math.min(100, v + 5)), 60)
    return () => clearInterval(id)
  }, [])
  useEffect(() => {
    if (p < 100) return
    const t = setTimeout(onDone, 300)
    return () => clearTimeout(t)
  }, [p, onDone])
  return (
    <motion.div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void" exit={{ opacity: 0, filter: 'blur(12px)' }} transition={{ duration: 0.7 }} role="status" aria-live="polite">
      <div className="text-center font-semibold tracking-[0.35em]"><div className="text-2xl sm:text-4xl">BRAHMION</div><div className="text-xs text-cyan sm:text-sm">SPACETECH</div></div>
      <p className="mt-10 px-6 text-center font-mono text-[10px] tracking-[0.25em] text-slate-400 sm:text-xs">INITIALIZING PROPULSION SYSTEMS...</p>
      <div className="mt-4 h-px w-56 bg-white/10"><div className="h-px bg-cyan transition-[width]" style={{ width: `${p}%` }} /></div>
      <div className="mt-3 flex w-56 justify-between font-mono text-[10px] text-slate-500">
        {[0, 25, 50, 75, 100].map((n) => <span key={n} className={p >= n ? 'text-cyan' : ''}>{String(n).padStart(2, '0')}</span>)}
      </div>
      <span className="mt-6 font-mono text-sm">{String(p).padStart(2, '0')}%</span>
    </motion.div>
  )
}
