import { useState } from 'react'
import { Linkedin, Globe, ArrowUpRight, Mail } from 'lucide-react'
import Section from './ui/Section'
import { team, type Member } from '../data/team'
import { assetPath } from '../lib/utils'

function MemberCard({ member }: { member: Member }) {
  const [imgError, setImgError] = useState(false)
  const initials = member.name.split(' ').map((n) => n[0]).join('')

  return (
    <article className="group relative rounded-2xl flex flex-col justify-between overflow-hidden bg-white border border-[#d6e4f0] p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:border-[#0284c7] hover:shadow-[0_8px_24px_rgba(30,58,138,0.06)]">
      <div>
        {/* Photo Container */}
        <div className="relative aspect-[4/4] w-full overflow-hidden rounded-xl bg-[#edf5fc] border border-[#dce7f3]">
          {!imgError ? (
            <img
              src={assetPath(member.image)}
              alt={`${member.name} — ${member.role}`}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-[#edf5fc] text-4xl font-bold text-[#0284c7]">
              {initials}
            </div>
          )}
        </div>

        {/* Member Details */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#0284c7] font-bold">
              {member.category}
            </span>
            {member.degree && (
              <span className="font-sans text-[11px] text-slate-700 font-bold">
                IIT KANPUR
              </span>
            )}
          </div>

          <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#0284c7] transition-colors">
            {member.name}
          </h3>

          <p className="mt-0.5 font-sans text-xs uppercase tracking-wider text-[#0284c7] font-bold">
            {member.role}
          </p>

          {member.degree && (
            <p className="mt-1 font-sans text-xs text-slate-700 font-semibold">
              {member.degree}
            </p>
          )}

          <p className="mt-3 text-sm leading-relaxed text-slate-700 font-medium font-sans">
            {member.note}
          </p>
        </div>
      </div>

      {/* Social / Professional links */}
      <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#e2e8f0]">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#cfe0f2] bg-white px-3 py-1.5 font-sans text-xs font-semibold text-slate-900 transition-colors hover:border-[#0284c7] hover:text-[#0284c7] hover:bg-[#edf5fc]"
          >
            <Linkedin size={13} className="shrink-0" />
            <span>LinkedIn</span>
            <ArrowUpRight size={11} className="opacity-70" />
          </a>
        )}

        {member.mail && (
          <a
            href={`mailto:${member.mail}`}
            aria-label={`Email ${member.name}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#cfe0f2] bg-white px-3 py-1.5 font-sans text-xs font-semibold text-slate-900 transition-colors hover:border-[#0284c7] hover:text-[#0284c7] hover:bg-[#edf5fc]"
          >
            <Mail size={13} className="shrink-0" />
            <span>Email</span>
          </a>
        )}

        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} faculty website`}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#cfe0f2] bg-white px-3 py-1.5 font-sans text-xs font-semibold text-slate-900 transition-colors hover:border-[#0284c7] hover:text-[#0284c7] hover:bg-[#edf5fc]"
          >
            <Globe size={13} className="shrink-0" />
            <span>Faculty Page</span>
            <ArrowUpRight size={11} className="opacity-70" />
          </a>
        )}
      </div>
    </article>
  )
}

export default function Team() {
  const founders = team.filter((m) => m.category === 'Founders')
  const mentors = team.filter((m) => m.category === 'Mentors')

  return (
    <Section id="team" label="Team" className="py-24 bg-[#f4f8fc]/60">
      <div className="wrap">
        <div className="badge mb-4">
          <span>LEADERSHIP &amp; ADVISORS</span>
        </div>
        <h2 className="h2 mb-4 text-slate-900">The Minds Behind the Mission</h2>
        <p className="body-copy max-w-2xl mb-12 text-slate-700 font-medium">
          Aerospace engineers, propellant chemists, and academic researchers pioneering safe, high-performance in-space propulsion systems at IIT Kanpur.
        </p>

        {/* Founders */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#0284c7] font-bold">FOUNDING TEAM</span>
            <div className="h-px flex-1 bg-[#dce7f3]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {founders.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="font-sans text-xs uppercase tracking-wider text-[#0284c7] font-bold">MENTORS &amp; ADVISORS</span>
            <div className="h-px flex-1 bg-[#dce7f3]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {mentors.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#dce7f3] pt-6">
          <p className="font-sans text-xs text-slate-700 font-bold">
            INCUBATED AT SIIC · INDIAN INSTITUTE OF TECHNOLOGY KANPUR
          </p>
          <a
            href="https://www.linkedin.com/company/brahmion-spacetech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#0284c7] hover:underline"
          >
            <span>View Company Updates on LinkedIn</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </Section>
  )
}
