import { navItems } from '../data/navigation'
import { contact } from '../data/contact'
import { scrollToId } from '../lib/utils'
import { Linkedin, Mail, MapPin, Compass, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-void pt-16 pb-8">
      {/* Top Banner */}
      <div className="wrap border-b border-line pb-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-bold tracking-[0.2em] text-white sm:text-3xl">
                BRAHMION <span className="text-cyan">SPACETECH</span>
              </span>
            </div>
            <p className="font-sans text-xl font-medium tracking-wide text-cyan-alt/90">
              || ब्रह्माण्डस्य नवप्रयाणम् ||
            </p>
            <p className="max-w-md font-sans text-sm leading-relaxed text-slate-300">
              Developing next-generation green propulsion systems for safer, cleaner, and reliable space missions.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-1.5 font-mono text-xs text-slate-400">
            <div className="inline-flex items-center gap-2 rounded border border-line bg-white/[0.02] px-3 py-1.5 text-cyan">
              <Compass size={14} />
              <span>LAT 26.5123° N — LON 80.2329° E</span>
            </div>
            <span className="text-[11px] text-slate-500">
              ANALYTICAL LAB, SIDBI BUILDING · IIT KANPUR
            </span>
          </div>
        </div>
      </div>

      {/* Navigation & Info Columns */}
      <div className="wrap py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Navigate */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              // NAVIGATE
            </span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollToId(n.id)}
                  className="text-left font-mono text-xs tracking-wider text-slate-300 transition-colors hover:text-cyan p-1.5 rounded hover:bg-white/[0.02]"
                >
                  {n.label} →
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Contact & Address */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              // ADDRESS & ENQUIRY
            </span>
            <div className="space-y-3 font-sans text-xs text-slate-300">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-white hover:text-cyan transition-colors"
              >
                <Mail size={13} className="text-cyan shrink-0" />
                <span>{contact.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin size={13} className="text-cyan shrink-0 mt-0.5" />
                <span>{contact.location}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              // SOCIALS
            </span>
            <div>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-line bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-slate-300 transition hover:border-cyan hover:text-cyan"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="wrap border-t border-line/60 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[11px] text-slate-500">
          <p>© 2026 BRAHMION SPACETECH PVT. LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Handcrafted & Engineered by</span>
            <a
              href="https://github.com/231B121"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan font-semibold hover:underline"
            >
              Gourav Ojha
            </a>
          </div>
          <p className="text-cyan/80 tracking-wider">SAFER PROPULSION · RELIABLE MISSIONS</p>
        </div>
      </div>
    </footer>
  )
}
