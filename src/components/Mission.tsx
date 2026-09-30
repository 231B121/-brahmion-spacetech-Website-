import { company } from '../data/company'
import Section from './ui/Section'

export default function Mission() {
  return (
    <Section id="mission" label="Mission" className="py-24 bg-[#f4f8fc]/80">
      <div className="wrap relative">
        <div className="badge mb-4">
          <span>{company.mission.kicker}</span>
        </div>

        <h2 className="h2 tracking-tight max-w-4xl text-slate-900">
          {company.mission.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>

        <div className="my-8 h-px w-full bg-[#dce7f3]" />

        <div className="grid gap-8 md:grid-cols-[2fr_1fr] items-start">
          <p className="body-copy text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
            {company.mission.body}
          </p>

          <ul className="flex flex-wrap gap-2 md:justify-end">
            {company.keywords.map((k) => (
              <li
                key={k}
                className="rounded-lg border border-[#cfe0f2] bg-white px-3.5 py-1.5 font-sans text-xs font-bold text-[#0369a1] shadow-2xs"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
