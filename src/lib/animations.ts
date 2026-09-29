export const ease = [0.2, 0.7, 0.2, 1] as const
export const blurIn = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease } },
}
export const stagger = { show: { transition: { staggerChildren: 0.08 } } }
