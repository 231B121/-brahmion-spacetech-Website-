import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import { navItems } from '../data/navigation'
import { scrollToId, assetPath } from '../lib/utils'

export default function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30)
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
    setTimeout(() => scrollToId(id), wasOpen ? 380 : 0)
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-cyan/20 bg-void/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-3'
          : 'border-b border-transparent bg-gradient-to-b from-void/90 via-void/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="wrap flex items-center justify-between gap-4">
        {/* Brand Logo & Mark */}
        <a
          {...link('home')}
          aria-label="Brahmion Spacetech home"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-cyan/40 bg-void/90 p-1 transition-all duration-300 group-hover:border-cyan group-hover:shadow-[0_0_18px_rgba(90,209,230,0.5)]">
            <img
              src={assetPath('/assets/logo/brahmion-mark.png')}
              alt="Brahmion Mark"
              className="h-full w-full object-contain filter brightness-110 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-[0.24em] text-white transition-colors group-hover:text-cyan">
              BRAHMION
            </span>
            <span className="mt-0.5 font-mono text-[9px] font-bold tracking-[0.32em] text-cyan drop-shadow-[0_0_8px_rgba(90,209,230,0.6)]">
              SPACETECH
            </span>
          </div>
        </a>

        {/* Central Navigation Capsule (Desktop) */}
        <nav
          aria-label="Primary"
          className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 bg-void/70 p-1.5 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          {navItems.map((n) => {
            const isActive = active === n.id
            return (
              <a
                key={n.id}
                {...link(n.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative px-3 py-1.5 rounded-full font-mono text-[11px] font-bold tracking-[0.14em] uppercase transition-all duration-300 ${
                  isActive
                    ? 'text-void drop-shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan via-[#5be2f8] to-cyan-alt shadow-[0_0_20px_rgba(90,209,230,0.55)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{n.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Medium Screen Nav (Compact version if xl is too wide) */}
        <nav
          aria-label="Primary Compact"
          className="hidden lg:flex xl:hidden items-center gap-0.5 rounded-full border border-white/10 bg-void/70 p-1 backdrop-blur-xl"
        >
          {navItems.slice(0, 6).map((n) => {
            const isActive = active === n.id
            return (
              <a
                key={n.id}
                {...link(n.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative px-2 py-1 rounded-full font-mono text-[10px] font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'text-void font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill-compact"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan via-cyan-alt to-[#7fe4f3] shadow-[0_0_15px_rgba(90,209,230,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{n.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Right CTA: Highlighted & Animated "LET'S CONNECT →" Button */}
        <div className="flex items-center gap-3">
          <a
            {...link('contact')}
            className="group relative hidden lg:inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-cyan bg-cyan/15 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(90,209,230,0.3)] backdrop-blur-md transition-all duration-300 hover:border-cyan hover:bg-cyan hover:text-void hover:shadow-[0_0_30px_rgba(90,209,230,0.7)] active:scale-95"
          >
            {/* Continuous Shimmer Light Beam */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            {/* Pulsing Green/Cyan Radar Beacon */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_#5ad1e6]" />
            </span>

            <span className="relative z-10 font-bold">LET'S CONNECT</span>

            <ArrowRight
              size={14}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.04] text-white transition hover:border-cyan hover:text-cyan lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile Navigation"
            className="fixed inset-0 top-[65px] flex flex-col justify-between bg-void/98 px-6 py-8 backdrop-blur-3xl lg:hidden z-50 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-col gap-1">
              <div className="mb-4 pb-3 border-b border-line flex items-center justify-between">
                <span className="font-sans text-sm font-semibold text-cyan">
                  || ब्रह्माण्डस्य नवप्रयाणम् ||
                </span>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  IIT KANPUR
                </span>
              </div>

              {navItems.map((n, i) => {
                const isActive = active === n.id
                return (
                  <motion.a
                    key={n.id}
                    {...link(n.id)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    className={`flex min-h-[46px] items-center justify-between rounded-lg px-4 py-2 text-xl font-bold tracking-tight transition ${
                      isActive
                        ? 'bg-cyan/15 text-cyan border border-cyan/40 shadow-[0_0_15px_rgba(90,209,230,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{n.label}</span>
                    <span className="font-mono text-xs text-slate-500">0{i + 1}</span>
                  </motion.a>
                )
              })}
            </div>

            {/* Mobile "LET'S CONNECT" Button */}
            <div className="pt-6 border-t border-line">
              <a
                {...link('contact')}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-cyan bg-cyan py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void shadow-[0_0_25px_rgba(90,209,230,0.5)] active:scale-95"
              >
                <Sparkles size={16} />
                <span>LET'S CONNECT →</span>
              </a>
              <p className="mt-3 text-center font-mono text-[10px] text-slate-500">
                LAT 26.5123° N — LON 80.2329° E · IIT KANPUR
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
