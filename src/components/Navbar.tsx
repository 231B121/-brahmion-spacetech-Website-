import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navItems } from '../data/navigation'
import { scrollToId, assetPath } from '../lib/utils'

interface NavbarProps {
  active: string
}

export default function Navbar({ active }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open])

  const go = (id: string) => {
    const wasOpen = open
    setOpen(false)
    setTimeout(() => scrollToId(id), wasOpen ? 250 : 0)
  }

  const link = (id: string) => ({
    href: `#${id}`,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault()
      go(id)
    },
  })

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b border-[#dce7f3] bg-[#f7fafe]/90 py-3 backdrop-blur-md shadow-xs'
          : 'border-b border-transparent bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="wrap flex items-center justify-between gap-4">
        {/* Brand Logo & Formal Identity */}
        <a
          {...link('home')}
          aria-label="Brahmion Spacetech home"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#cfe0f2] bg-white p-1.5 shadow-2xs transition-all duration-200 group-hover:border-[#0284c7]">
            <img
              src={assetPath('/assets/logo/brahmion-mark.png')}
              alt="Brahmion Mark"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-sans text-sm font-bold tracking-[0.14em] text-slate-900 transition-colors group-hover:text-[#0284c7]">
              BRAHMION
            </span>
            <span className="mt-0.5 font-sans text-[10px] font-semibold tracking-[0.2em] text-[#0284c7]">
              SPACETECH
            </span>
          </div>
        </a>

        {/* Central Navigation Menu */}
        <nav
          aria-label="Primary"
          className="hidden xl:flex items-center gap-1 rounded-full border border-[#dce7f3] bg-white/80 p-1.5 shadow-2xs backdrop-blur-md"
        >
          {navItems.map((n) => {
            const isActive = active === n.id
            return (
              <a
                key={n.id}
                {...link(n.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative px-3.5 py-1.5 rounded-full font-sans text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#0284c7] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-[#edf5fc]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#edf5fc] border border-[#cfe0f2]"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span>{n.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Actions: Institutional Badge + Contact CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden md:flex items-center gap-1.5 rounded-md border border-[#cfe0f2] bg-white px-2.5 py-1.5 font-sans text-[11px] font-semibold text-[#0369a1] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
            <span>SIIC IIT KANPUR</span>
          </div>

          {/* Formal CTA Button */}
          <a
            {...link('contact')}
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[#0284c7] px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-[#0369a1] active:scale-[0.98]"
          >
            <span>Contact Us</span>
            <ArrowRight size={13} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#cfe0f2] bg-white text-slate-800 shadow-2xs transition hover:border-[#0284c7] hover:text-[#0284c7] xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile Navigation"
            className="fixed inset-0 top-[60px] flex flex-col justify-between bg-[#f7fafe]/98 px-6 py-6 backdrop-blur-xl xl:hidden z-50 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1">
              <div className="mb-4 pb-3 border-b border-[#cfe0f2] flex items-center justify-between">
                <span className="font-sans text-xs font-bold text-[#0284c7]">
                  || ब्रह्माण्डस्य नवप्रयाणम् ||
                </span>
                <span className="font-sans text-[11px] text-slate-700 font-bold">
                  SIIC · IIT KANPUR
                </span>
              </div>

              {navItems.map((n, i) => {
                const isActive = active === n.id
                return (
                  <a
                    key={n.id}
                    {...link(n.id)}
                    className={`flex min-h-[44px] items-center justify-between rounded-md px-3.5 py-2 text-sm font-semibold tracking-wide transition ${
                      isActive
                        ? 'bg-[#edf5fc] text-[#0284c7] border border-[#cfe0f2]'
                        : 'text-slate-900 hover:bg-white'
                    }`}
                  >
                    <span>{n.label}</span>
                    <span className="text-xs text-slate-700 font-semibold">0{i + 1}</span>
                  </a>
                )
              })}
            </div>

            <div className="pt-6 border-t border-[#cfe0f2]">
              <a
                {...link('contact')}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0284c7] py-3 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-xs"
              >
                <span>Get In Touch</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
