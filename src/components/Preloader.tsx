import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [p, setP] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setP((v) => Math.min(100, v + 25)), 30)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (p < 100) return
    const t = setTimeout(onDone, 120)
    return () => clearTimeout(t)
  }, [p, onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      role="status"
      aria-live="polite"
    >
      <div className="text-center font-semibold tracking-[0.35em]">
        <div className="text-2xl sm:text-4xl text-slate-900 font-bold">BRAHMION</div>
        <div className="text-xs text-[#0284c7] sm:text-sm font-sans mt-1 font-bold">SPACETECH</div>
      </div>
      <div className="mt-8 h-1 w-48 bg-[#cfe0f2] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#0284c7] transition-all duration-150 ease-out"
          style={{ width: `${p}%` }}
        />
      </div>
    </motion.div>
  )
}
