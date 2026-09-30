import { navItems } from '../data/navigation'
import { contact } from '../data/contact'
import { scrollToId } from '../lib/utils'
import { Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-[#cfe0f2] bg-[#edf4fb] pt-16 pb-8">
      {/* Top Banner */}
      <div className="wrap border-b border-[#d2e2f2] pb-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
              <span className="font-sans text-xl sm:text-2xl font-bold tracking-[0.14em] text-slate-900">
                BRAHMION <span className="text-[#0284c7]">SPACETECH</span>
              </span>
            </div>
            <p className="font-sans text-lg font-bold text-[#0284c7]">
              || ब्रह्माण्डस्य नवप्रयाणम् ||
            </p>
            <p className="max-w-md font-sans text-sm leading-relaxed text-slate-700 font-medium">
              Developing next-generation green propulsion systems for safer, cleaner, and reliable space missions.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-1.5 font-sans text-xs text-slate-700 font-medium">
            <span className="text-slate-900 font-bold">INCUBATED AT SIIC · IIT KANPUR</span>
            <span className="text-slate-700 text-[11px] font-semibold">
              ANALYTICAL LAB, SIDBI BUILDING · KANPUR, INDIA
            </span>
          </div>
        </div>
      </div>

      {/* Navigation & Info Columns */}
      <div className="wrap py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Navigate */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#0284c7] font-bold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollToId(n.id)}
                  className="text-left font-sans text-xs font-semibold text-slate-900 transition-colors hover:text-[#0284c7] p-1 rounded hover:bg-white"
                >
                  {n.label} →
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Contact & Address */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#0284c7] font-bold">
              Facility &amp; Inquiries
            </span>
            <div className="space-y-2.5 font-sans text-xs text-slate-800">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-slate-900 font-bold hover:text-[#0284c7] transition-colors"
              >
                <Mail size={14} className="text-[#0284c7] shrink-0" />
                <span>{contact.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-700 leading-relaxed font-semibold">
                <MapPin size={14} className="text-[#0284c7] shrink-0 mt-0.5" />
                <span>{contact.location}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#0284c7] font-bold">
              Connect
            </span>
            <div>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#cfe0f2] bg-white px-3.5 py-2 font-sans text-xs font-bold text-slate-900 shadow-2xs transition-colors hover:border-[#0284c7] hover:text-[#0284c7]"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={11} className="opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="wrap border-t border-[#d2e2f2] pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-sans text-xs text-slate-700 font-semibold">
          <p>© 2026 Brahmion Spacetech Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-700">
            <span>Engineered by</span>
            <a
              href="https://github.com/231B121"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0284c7] font-bold hover:underline"
            >
              Gourav Ojha
            </a>
          </div>
          <p className="text-[#0284c7] font-bold">Clean Propulsion · Reliable Missions</p>
        </div>
      </div>
    </footer>
  )
}
