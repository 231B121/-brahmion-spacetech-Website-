import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
export default function Cursor() {
  const fine = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 300, damping: 28 }), ry = useSpring(y, { stiffness: 300, damping: 28 })
  const [state, setState] = useState<{ big: boolean; label: string }>({ big: false, label: '' })
  useEffect(() => {
    if (!fine) return
    document.documentElement.classList.add('has-cursor')
    const mv = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY)
      const t = (e.target as HTMLElement).closest('a,button,[data-cursor]') as HTMLElement | null
      setState({ big: !!t, label: t?.dataset.cursorLabel ?? '' })
    }
    addEventListener('pointermove', mv, { passive: true })
    return () => { removeEventListener('pointermove', mv); document.documentElement.classList.remove('has-cursor') }
  }, [fine, x, y])
  if (!fine) return null
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[95] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" style={{ x, y }} />
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[95] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/70 font-mono text-[9px] tracking-widest text-white mix-blend-difference"
        style={{ x: rx, y: ry }} animate={{ width: state.label ? 84 : state.big ? 52 : 26, height: state.label ? 84 : state.big ? 52 : 26 }}>{state.label}</motion.div>
    </>
  )
}
