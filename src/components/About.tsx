import Section from './ui/Section'
import WordReveal from './ui/WordReveal'
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
    <Section id="about" label="About" className="py-24">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan">
            <span>ABOUT BRAHMION</span>
          </div>
          <h2 className="h2 tracking-tight leading-[0.98]">
            <WordReveal text="Making Space Safer" />
            <br />
            <span className="text-cyan">One Launch</span> at a Time
          </h2>

          <div className="mt-8 space-y-4 body-copy text-lg text-slate-200">
            <p>
              Traditional rocket fuels like hydrazine are highly toxic as they cause cancer, harm the environment, and cost up to $100,000 per ton to store safely. As commercial space launches multiply, this operational burden is unsustainable.
            </p>
            <p>
              We've engineered a <span className="font-semibold text-cyan">green alternative</span> that matches or exceeds conventional performance while eliminating hazardous toxicity. Our propellants are non-toxic, environmentally responsible, and mission-reliable.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded border border-line bg-surface/60 px-4 py-2 font-mono text-xs tracking-wider text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span>INCUBATED AT SIIC · IIT KANPUR</span>
          </div>
        </div>

        {/* Formal Engineering Benchmark Spec Card */}
        <div className="lg:col-span-6 w-full">
          <div className="relative rounded-lg border border-line/80 bg-surface/80 p-6 sm:p-7 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between border-b border-line pb-4 mb-5">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan block">
                  PROPULSION BENCHMARK SPEC SHEET
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  BRAHMION GREEN FUEL VS CONVENTIONAL HYDRAZINE
                </span>
              </div>
              <span className="rounded bg-cyan/10 border border-cyan/30 px-2 py-0.5 font-mono text-[9px] font-bold text-cyan uppercase tracking-wider">
                TRL 4 VALIDATED
              </span>
            </div>

            <div className="space-y-4">
              {benchmarks.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.parameter}
                    className="rounded border border-line/60 bg-white/[0.02] p-3.5 transition-colors hover:border-cyan/40"
                  >
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-slate-300">
                      <Icon size={14} className="text-cyan shrink-0" />
                      <span>{b.parameter}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {/* Brahmion */}
                      <div className="flex items-start gap-1.5 rounded bg-cyan/10 border border-cyan/25 p-2 text-cyan">
                        <Check size={14} className="shrink-0 mt-0.5 text-cyan" />
                        <div>
                          <span className="block font-mono text-[9px] uppercase tracking-wider text-cyan/70 font-bold">
                            BRAHMION GREEN
                          </span>
                          <span className="font-medium text-white text-[11px] leading-snug">
                            {b.brahmion}
                          </span>
                        </div>
                      </div>

                      {/* Hydrazine */}
                      <div className="flex items-start gap-1.5 rounded bg-rose-500/5 border border-rose-500/20 p-2 text-rose-300">
                        <X size={14} className="shrink-0 mt-0.5 text-rose-400" />
                        <div>
                          <span className="block font-mono text-[9px] uppercase tracking-wider text-rose-400/80 font-bold">
                            CONVENTIONAL HYDRAZINE
                          </span>
                          <span className="font-medium text-slate-300 text-[11px] leading-snug">
                            {b.hydrazine}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 border-t border-line/80 pt-3 flex items-center justify-between font-mono text-[10px] text-slate-500">
              <span>TESTED &amp; VERIFIED AT IIT KANPUR</span>
              <span className="text-cyan">NEXT-GEN GREEN MOBILITY</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
