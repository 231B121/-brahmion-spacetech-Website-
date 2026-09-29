import { useRef, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'
type P = { children: ReactNode; href: string; onClick?: () => void; solid?: boolean; external?: boolean }
export default function MagneticButton({ children, href, onClick, solid, external }: P) {
  const ref = useRef<HTMLAnchorElement>(null)
  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`
  }
  const reset = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <a ref={ref} href={href} className={cn('btn group', solid && 'btn-solid')} onPointerMove={move} onPointerLeave={reset}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      onClick={(e) => { if (onClick) { e.preventDefault(); onClick() } }}>
      {children}<ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
