import Section from './ui/Section'
import { Check, X, ShieldCheck, Zap, DollarSign, Leaf } from 'lucide-react'

const benchmarks = [
  {
    parameter: 'Human Toxicity',
    icon: ShieldCheck,
    brahmion: 'Non-Toxic · Safe Open-Air Handling',
    hydrazine: 'Lethal & Carcinogenic (Hazmat Level A)',
    advantage: true,
  },
  {
    parameter: 'Storage & Logistics',
    icon: DollarSign,
    brahmion: '$8 – $30 / kg Ambient Logistics',
    hydrazine: 'Up to $100,000 / ton Specialized PPE',
    advantage: true,
  },
  {
    parameter: 'Specific Impulse (Isp)',
    icon: Zap,
    brahmion: 'Up to 366s High-Density Impulse',
    hydrazine: '~220s – 240s Baseline Isp',
    advantage: true,
  },
  {
    parameter: 'Environmental Impact',
    icon: Leaf,
    brahmion: 'Eco-Friendly (H2O, O2, N2 Byproducts)',
    hydrazine: 'Severe Environmental Contaminant',
    advantage: true,
  },
]

export default function About() {
  return (
    <Section id="about" label="About" className="py-24 bg-white/70">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="badge mb-4">
            <span>ABOUT BRAHMION</span>
          </div>

          <h2 className="h2 tracking-tight text-slate-900">
            Making Space Safer, <br />
            <span className="text-[#0284c7]">One Launch at a Time</span>
          </h2>

          <div className="mt-6 space-y-4 body-copy text-slate-700 text-base sm:text-lg font-medium">
            <p>
              Traditional rocket fuels like hydrazine are severely toxic, carcinogenic, and cost upwards of $100,000 per ton to store and service under strict hazmat protocols. As orbital deployment volumes multiply, this operational bottleneck is unsustainable.
            </p>
            <p>
              We've engineered a <strong className="font-semibold text-slate-900">clean monopropellant alternative</strong> that matches or exceeds conventional hypergolic performance while eliminating hazardous toxicity. Our propulsion chemistry is ambient-storable, non-toxic, and flight-ready.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-lg border border-[#cfe0f2] bg-[#f0f6fc] px-4 py-2 font-sans text-xs font-semibold text-slate-800">
            <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
            <span>INCUBATED AT SIIC · INDIAN INSTITUTE OF TECHNOLOGY KANPUR</span>
          </div>
        </div>

        {/* Engineering Benchmark Spec Sheet */}
        <div className="lg:col-span-6 w-full">
          <div className="rounded-xl border border-[#d6e4f0] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4 mb-5">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0284c7] block">
                  Propulsion Benchmark Specification
                </span>
                <span className="font-sans text-xs text-slate-700 font-medium">
                  Brahmion Green Monopropellant vs Conventional Hydrazine
                </span>
              </div>
              <span className="rounded-full bg-[#edf5fc] border border-[#cfe0f2] px-3 py-1 font-sans text-[11px] font-bold text-[#0284c7]">
                TRL 4 VALIDATED
              </span>
            </div>

            <div className="space-y-3.5">
              {benchmarks.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.parameter}
                    className="rounded-lg border border-[#e2e8f0] bg-[#fbfdff] p-3.5"
                  >
                    <div className="flex items-center gap-2 mb-2 font-sans text-xs font-bold text-slate-900">
                      <Icon size={15} className="text-[#0284c7] shrink-0" />
                      <span>{b.parameter}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {/* Brahmion */}
                      <div className="flex items-start gap-2 rounded-md bg-[#f0f7fe] border border-[#cfe0f2] p-2.5">
                        <Check size={14} className="shrink-0 mt-0.5 text-[#0284c7]" />
                        <div>
                          <span className="block font-sans text-[10px] uppercase tracking-wider text-[#0284c7] font-bold">
                            BRAHMION GREEN
                          </span>
                          <span className="font-bold text-slate-900 text-xs leading-snug">
                            {b.brahmion}
                          </span>
                        </div>
                      </div>

                      {/* Hydrazine */}
                      <div className="flex items-start gap-2 rounded-md bg-rose-50/70 border border-rose-200/70 p-2.5">
                        <X size={14} className="shrink-0 mt-0.5 text-rose-600" />
                        <div>
                          <span className="block font-sans text-[10px] uppercase tracking-wider text-rose-700 font-bold">
                            CONVENTIONAL HYDRAZINE
                          </span>
                          <span className="font-semibold text-slate-900 text-xs leading-snug">
                            {b.hydrazine}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 border-t border-[#e2e8f0] pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans text-xs text-slate-700 font-medium">
              <span>Tested &amp; verified at SIIC, IIT Kanpur</span>
              <span className="text-[#0284c7] font-bold">Green Mobility Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
