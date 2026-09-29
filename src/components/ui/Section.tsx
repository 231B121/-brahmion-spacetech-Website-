import type { ReactNode } from 'react'
export default function Section({ id, label, children, className = '' }: { id: string; label?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-label={label} className={`relative scroll-mt-0 py-24 sm:py-32 ${className}`}>{children}</section>
  )
}
