import { motion } from 'framer-motion'
import Section from './ui/Section'
import { Rocket, Satellite, Globe, Compass, CheckCircle2 } from 'lucide-react'

const flightPhases = [
  {
    phase: '01',
    code: 'LEO REGIME',
    title: 'Low Earth Orbit (LEO)',
    altitude: '200 – 1,200 km',
    icon: Satellite,
    propulsion: 'VEGASTRA-1 & BHP-90',
    description: 'Precision attitude determination & control (ADCS), rapid collision avoidance maneuvers, and sustainable de-orbiting for commercial CubeSats and SmallSats.',
    readiness: 'HOT-FIRE TEST STAND VALIDATED',
    readinessColor: 'text-emerald-700 border-emerald-300 bg-emerald-50',
    metric: '100 mN / 366s ISP',
  },
  {
    phase: '02',
    code: 'GEO / GTO',
    title: 'Geostationary Transfer',
    altitude: '~35,786 km',
    icon: Globe,
    propulsion: 'HAN-ADN Green Monopropellant',
    description: 'High-thrust station keeping, momentum management, and apogee kick stages replacing toxic hypergolic hydrazine in geostationary telecommunications platforms.',
    readiness: 'QUALIFICATION & PROTOTYPING',
    readinessColor: 'text-[#0284c7] border-[#bae6fd] bg-[#f0f9ff]',
    metric: '1 – 10 N Thrust Tier',
  },
  {
    phase: '03',
    code: 'CISLUNAR',
    title: 'Lunar & Cislunar Space',
    altitude: '~384,400 km',
    icon: Rocket,
    propulsion: 'High-Temp Ceramic Catalyst Core',
    description: 'Extended pulse life and thermal endurance for lunar lander attitude systems, lunar gateway logistics, and deep-space rideshare orbital transfers.',
    readiness: 'CFD & THERMAL SIMULATION',
    readinessColor: 'text-amber-700 border-amber-300 bg-amber-50',
    metric: '1,200°C Thermal Matrix',
  },
  {
    phase: '04',
    code: 'DEEP SPACE',
    title: 'Interplanetary & Exploration',
    altitude: 'Heliocentric Regimes',
    icon: Compass,
    propulsion: 'Next-Gen Dual-Mode Electric / Chemical',
    description: 'High specific impulse deep-space propulsion networks, interplanetary trajectory injection, and orbital green propellant depot refuelling architectures.',
    readiness: 'LONG-RANGE R&D ROADMAP',
    readinessColor: 'text-indigo-700 border-indigo-300 bg-indigo-50',
    metric: 'Interplanetary Class',
  },
]

export default function DeepSpace() {
  return (
    <Section id="deep-space" label="Deep space" className="py-24 bg-white">
      <div className="wrap">
        <div className="badge mb-4">
          <span>STRATEGIC FLIGHT REGIMES</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 tracking-tight text-slate-900">
              Toward Deep Space: <br />
              <span className="text-[#0284c7]">Multi-Regime Mission Profiles</span>
            </h2>
            <p className="body-copy mt-4 max-w-2xl text-slate-700 font-medium">
              From low Earth orbit satellite constellations to interplanetary exploration, Brahmion's green propulsion architectures scale across mission profiles — eliminating toxic hydrazine across all flight regimes.
            </p>
          </div>

          <div className="font-sans text-xs text-slate-700 font-medium">
            SCALABLE ARCHITECTURE · <span className="text-[#0284c7] font-bold">LEO TO INTERPLANETARY</span>
          </div>
        </div>

        {/* Mission Horizon Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {flightPhases.map((phase) => {
            const Icon = phase.icon
            return (
              <motion.article
                key={phase.phase}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl flex flex-col justify-between bg-white border border-[#d6e4f0] p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:border-[#0284c7] hover:shadow-[0_8px_24px_rgba(30,58,138,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3 mb-4">
                    <span className="font-sans text-xs font-bold tracking-wider text-[#0284c7]">
                      PHASE {phase.phase} · {phase.code}
                    </span>
                    <Icon size={18} className="text-slate-500 group-hover:text-[#0284c7] transition-colors" />
                  </div>

                  <h3 className="font-sans text-lg font-bold text-slate-900 mb-1 group-hover:text-[#0284c7] transition-colors">
                    {phase.title}
                  </h3>

                  <div className="font-sans text-xs text-slate-700 mb-3 flex items-center gap-1.5 font-medium">
                    <span>Altitude:</span>
                    <span className="text-slate-900 font-bold">{phase.altitude}</span>
                  </div>

                  <p className="body-copy text-xs leading-relaxed text-slate-700 font-medium mb-4">
                    {phase.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-[#e2e8f0] pt-4 space-y-2.5">
                  <div className="font-sans text-[11px] text-slate-700">
                    <span className="block mb-0.5 font-medium">Core Propulsion:</span>
                    <span className="text-[#0284c7] font-bold">{phase.propulsion}</span>
                  </div>

                  <div className="flex items-center justify-between font-sans text-xs">
                    <span className="text-slate-900 font-bold">{phase.metric}</span>
                  </div>

                  <div className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-sans text-[10px] font-bold tracking-wide uppercase border ${phase.readinessColor}`}>
                    <CheckCircle2 size={12} className="shrink-0" />
                    <span>{phase.readiness}</span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom Technical Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#cfe0f2] bg-[#f8fbfe] p-5 font-sans text-xs text-slate-700 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
            <span className="text-slate-900 font-bold">SIIC IIT KANPUR PROPULSION ECOSYSTEM</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <span>MIN PULSE: <strong className="text-[#0284c7] font-bold">&lt; 10 ms</strong></span>
            <span>SPECIFIC IMPULSE: <strong className="text-[#0284c7] font-bold">UP TO 366s ISP</strong></span>
            <span>TOXICITY HAZARD: <strong className="text-emerald-700 font-bold">ZERO (NON-HYPERGOLIC)</strong></span>
          </div>
        </div>
      </div>
    </Section>
  )
}
