import { useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
export function useMouseParallax(strength = 20, enabled = true) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 60, damping: 20 }), sy = useSpring(y, { stiffness: 60, damping: 20 })
  useEffect(() => {
    if (!enabled) return
    const f = (e: PointerEvent) => { x.set((e.clientX / innerWidth - 0.5) * strength); y.set((e.clientY / innerHeight - 0.5) * strength) }
    addEventListener('pointermove', f, { passive: true })
    return () => removeEventListener('pointermove', f)
  }, [enabled, strength, x, y])
  return { x: sx, y: sy }
}
