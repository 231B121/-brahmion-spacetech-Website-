import Section from './ui/Section'
import { assetPath, scrollToId } from '../lib/utils'
import { ArrowRight, Handshake } from 'lucide-react'

const partners = [
  { name: 'SIIC IIT Kanpur', logo: '/assets/traction/siic-iit-kanpur.png', desc: 'Incubator & Aerospace Ecosystem' },
  { name: 'MeitY Startup Hub', logo: '/assets/traction/meity-startup-hub.png', desc: 'Govt. of India Tech Support' },
  { name: 'DPIIT Startup India', logo: '/assets/traction/dpiit-startup-india.png', desc: 'Recognized Deep-Tech Venture' },
  { name: 'Avia Solution & Advisors', logo: '/assets/traction/avia-solution.png', desc: 'Strategic Advisory Partner' },
  { name: 'Gupta & Shah CA', logo: '/assets/traction/gupta-shah.png', desc: 'Corporate Advisory & Governance' },
]

export default function Tractions() {
  return (
    <Section id="traction" label="Tractions" className="py-24 bg-white">
      <div className="wrap">
        <div className="badge mb-4">
          <span>INCUBATION &amp; STRATEGIC PARTNERS</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 tracking-tight text-slate-900">
              Backed by Leading <br />
              <span className="text-[#0284c7]">Institutions</span>
            </h2>
            <p className="body-copy max-w-2xl mt-4 text-slate-700 font-medium">
              From government deep-tech programs to India's premier aerospace technology incubator, Brahmion's mission is supported, verified, and accelerated by recognized institutions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToId('contact')}
              className="btn btn-solid"
            >
              <Handshake size={15} />
              <span>Partner With Us</span>
            </button>
            <button
              onClick={() => scrollToId('team')}
              className="btn"
            >
              <span>Meet The Team</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-2xl flex flex-col items-center justify-center p-6 text-center bg-white border border-[#d6e4f0] shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:border-[#0284c7] hover:shadow-[0_8px_24px_rgba(30,58,138,0.06)]"
            >
              <div className="relative mb-4 flex h-20 w-full items-center justify-center rounded-xl bg-[#f8fbfe] p-3.5 border border-[#e2e8f0] shadow-2xs">
                <img
                  src={assetPath(p.logo)}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-sans text-xs font-bold text-slate-900 leading-snug">
                {p.name}
              </h3>
              <p className="mt-1 font-sans text-[11px] text-slate-700 font-medium leading-tight">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
