import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ease } from '../../lib/animations'
export default function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden className="mr-[0.22em] inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduced ? false : { y: '100%', opacity: 0, filter: 'blur(8px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.8, delay: delay + i * 0.06, ease }}
          >{w}</motion.span>
        </span>
      ))}
    </span>
  )
}
