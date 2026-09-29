import Section from './ui/Section'
import { assetPath, scrollToId } from '../lib/utils'
import { ArrowRight, Handshake } from 'lucide-react'

const partners = [
  { name: 'SIIC IIT Kanpur', logo: '/assets/traction/siic-iit-kanpur.png', desc: 'Incubator & Research Ecosystem' },
  { name: 'MeitY Startup Hub', logo: '/assets/traction/meity-startup-hub.png', desc: 'Govt. of India Tech Support' },
  { name: 'DPIIT Startup India', logo: '/assets/traction/dpiit-startup-india.png', desc: 'Recognized Deep-Tech Venture' },
  { name: 'Avia Solution and Advisors', logo: '/assets/traction/avia-solution.png', desc: 'Strategic Advisory Partner' },
  { name: 'Gupta & Shah Chartered Accountant', logo: '/assets/traction/gupta-shah.png', desc: 'Corporate Advisory & Governance' },
]

export default function Tractions() {
  return (
    <Section id="traction" label="Tractions" className="py-20">
      <div className="wrap">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan">
          <span>INCUBATION &amp; PARTNERS</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 tracking-tight leading-[0.95]">
              Backed by the <br />
              <span className="text-cyan">Right Hands</span>
            </h2>
            <p className="body-copy max-w-2xl mt-4 text-slate-200">
              From government innovation programmes to India's premier aerospace incubator, Brahmion's mission is supported, validated, and accelerated by institutions that matter in the new space economy.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToId('contact')}
              className="btn btn-solid"
            >
              <Handshake size={15} />
              PARTNER WITH US
            </button>
            <button
              onClick={() => scrollToId('team')}
              className="btn"
            >
              MEET THE TEAM
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="relative rounded-lg flex flex-col items-center justify-center p-6 text-center bg-surface/80 border border-line/80 transition-all duration-300 hover:border-cyan/60 hover:bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            >
              <div className="relative mb-4 flex h-20 w-full items-center justify-center rounded bg-white/95 p-3.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src={assetPath(p.logo)}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain filter contrast-125"
                  loading="lazy"
                />
              </div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                {p.name}
              </h3>
              <p className="mt-1 font-mono text-[10px] text-slate-400">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
