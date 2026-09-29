import { motion } from 'framer-motion'
import Section from './ui/Section'
import WordReveal from './ui/WordReveal'
import { Rocket, Satellite, Globe, Compass, CheckCircle2, Sparkles } from 'lucide-react'

const flightPhases = [
  {
    phase: '01',
    code: 'LEO REGIME',
    title: 'Low Earth Orbit (LEO)',
    altitude: '200 – 1,200 km',
    icon: Satellite,
    propulsion: 'VEGASTRA-1 & BHP-90',
    description: 'Precision attitude determination & control (ADCS), rapid collision avoidance maneuvers, and sustainable de-orbiting for commercial CubeSats and SmallSats.',
    readiness: 'HOT-FIRE TEST BENCH VALIDATED',
    readinessColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
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
    readinessColor: 'text-cyan border-cyan/30 bg-cyan/10',
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
    readinessColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    metric: '1,200°C Thermal Matrix',
  },
  {
    phase: '04',
    code: 'DEEP SPACE',
    title: 'Interplanetary & Exploration',
    altitude: 'Interplanetary Heliocentric',
    icon: Compass,
    propulsion: 'Next-Gen Dual-Mode Electric / Chemical',
    description: 'High specific impulse deep-space propulsion networks, interplanetary trajectory injection, and orbital green propellant depot refuelling architectures.',
    readiness: 'LONG-RANGE R&D ROADMAP',
    readinessColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
    metric: 'Interplanetary Class',
  },
]

export default function DeepSpace() {
  return (
    <Section id="deep-space" label="Deep space" className="overflow-hidden py-24">
      <div className="wrap">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan">
          <span>STRATEGIC FLIGHT HORIZON</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h2 tracking-tight leading-[0.98]">
              <WordReveal text="Toward Deep Space." />
            </h2>
            <p className="body-copy mt-4 max-w-2xl text-slate-200">
              From low Earth orbit satellite constellations to interplanetary exploration, Brahmion's green propulsion architectures scale progressively across mission profiles — eliminating toxic hydrazine across all flight regimes.
            </p>
          </div>

          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan/30 bg-surface/80 px-4 py-1.5 font-mono text-xs text-cyan backdrop-blur-md">
            <Sparkles size={14} className="animate-pulse" />
            <span>PROGRESSIVE FLIGHT ARCHITECTURE</span>
          </div>
        </div>

        {/* Structured Mission Horizon Grid - Formal & Engineering-grade */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {flightPhases.map((phase) => {
            const Icon = phase.icon
            return (
              <motion.article
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-lg flex flex-col justify-between bg-surface/85 border border-line/80 p-6 transition-all duration-300 hover:border-cyan/60 hover:bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-line/60 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-cyan">
                      {phase.phase} // {phase.code}
                    </span>
                    <Icon size={18} className="text-slate-400 transition-colors group-hover:text-cyan" />
                  </div>

                  <h3 className="font-sans text-lg font-bold text-white mb-1 group-hover:text-cyan transition-colors">
                    {phase.title}
                  </h3>

                  <div className="font-mono text-[11px] text-slate-400 mb-3 flex items-center gap-1.5">
                    <span className="text-slate-500">ALTITUDE:</span>
                    <span className="text-white font-medium">{phase.altitude}</span>
                  </div>

                  <p className="body-copy text-xs leading-relaxed text-slate-300/85 mb-4">
                    {phase.description}
                  </p>
                </div>

                {/* Footer Specs */}
                <div className="mt-4 border-t border-line/60 pt-4 space-y-2.5">
                  <div className="font-mono text-[10px] tracking-wider text-slate-400">
                    <span className="text-slate-500 block mb-0.5">CORE PROPULSION:</span>
                    <span className="text-cyan font-semibold">{phase.propulsion}</span>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-slate-500">{phase.metric}</span>
                  </div>

                  <div className={`mt-2 inline-flex items-center gap-1.5 rounded px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase border ${phase.readinessColor}`}>
                    <CheckCircle2 size={11} className="shrink-0" />
                    <span>{phase.readiness}</span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom Technical Telemetry Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-sm border border-line bg-void/60 p-4 font-mono text-xs text-slate-400 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-white">SIIC IIT KANPUR PROPULSION ECOSYSTEM</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span>IMPULSE BIT: <strong className="text-cyan">&lt; 10 ms</strong></span>
            <span>SPECIFIC IMPULSE: <strong className="text-cyan">UP TO 366s ISP</strong></span>
            <span>TOXICITY HAZARD: <strong className="text-emerald-400">ZERO (NON-HYPERGOLIC)</strong></span>
          </div>
        </div>
      </div>
    </Section>
  )
}
