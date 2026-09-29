import { useState } from 'react'
import { Linkedin, Globe, ArrowUpRight, Mail } from 'lucide-react'
import Section from './ui/Section'
import { team, type Member } from '../data/team'
import { assetPath } from '../lib/utils'

function MemberCard({ member }: { member: Member }) {
  const [imgError, setImgError] = useState(false)
  const initials = member.name.split(' ').map((n) => n[0]).join('')

  return (
    <article className="hairline group relative flex flex-col justify-between overflow-hidden bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan/50 hover:bg-white/[0.04]">
      {/* Subtle corner accent */}
      <div className="absolute right-0 top-0 h-10 w-10 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-[2px] w-6 bg-cyan/60" />
        <div className="absolute right-0 top-0 h-6 w-[2px] bg-cyan/60" />
      </div>

      <div>
        {/* Photo Container */}
        <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-sm bg-navy/60 border border-line">
          {!imgError ? (
            <img
              src={assetPath(member.image)}
              alt={`${member.name} — ${member.role}`}
              className="h-full w-full object-cover object-top filter grayscale contrast-105 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-navy text-5xl font-semibold text-cyan/70">
              {initials}
            </div>
          )}
          {/* Subtle gradient vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
        </div>

        {/* Member Details */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan/90">
              // {member.category.toUpperCase()}
            </span>
            {member.degree && (
              <span className="font-mono text-[10px] text-slate-500">
                IIT KANPUR
              </span>
            )}
          </div>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white group-hover:text-cyan transition-colors">
            {member.name}
          </h3>

          <p className="mt-1 font-mono text-xs tracking-wider text-cyan-alt">
            {member.role}
          </p>

          {member.degree && (
            <p className="mt-1 font-mono text-[11px] text-slate-400">
              {member.degree}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-slate-300/90 font-sans">
            {member.note}
          </p>
        </div>
      </div>

      {/* Social / Professional links */}
      <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-line/60">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex items-center gap-1.5 rounded border border-line bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] tracking-wider text-slate-300 transition-colors hover:border-cyan/60 hover:text-cyan hover:bg-cyan/10"
          >
            <Linkedin size={13} className="shrink-0" />
            <span>LINKEDIN</span>
            <ArrowUpRight size={11} className="opacity-70" />
          </a>
        )}

        {member.mail && (
          <a
            href={`mailto:${member.mail}`}
            aria-label={`Email ${member.name}`}
            className="inline-flex items-center gap-1.5 rounded border border-line bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] tracking-wider text-slate-300 transition-colors hover:border-cyan/60 hover:text-cyan hover:bg-cyan/10"
          >
            <Mail size={13} className="shrink-0" />
            <span>EMAIL</span>
          </a>
        )}

        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} faculty website`}
            className="inline-flex items-center gap-1.5 rounded border border-line bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] tracking-wider text-slate-300 transition-colors hover:border-cyan/60 hover:text-cyan hover:bg-cyan/10"
          >
            <Globe size={13} className="shrink-0" />
            <span>FACULTY PAGE</span>
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
    <Section id="team" label="Team">
      <div className="wrap">
        <p className="eyebrow mb-4">09 / CREW & ARCHITECTS</p>
        <h2 className="h2 mb-4">The minds behind the mission</h2>
        <p className="body-copy max-w-2xl mb-12">
          Aerospace engineers, propellant chemists, and academic researchers pioneering safe, high-performance in-space propulsion systems at IIT Kanpur.
        </p>

        {/* Founders */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">// 03.10 — FOUNDERS</span>
            <div className="h-px flex-1 bg-line/80" />
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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">// 03.20 — MENTORS & ADVISORS</span>
            <div className="h-px flex-1 bg-line/80" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {mentors.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-line/60 pt-6">
          <p className="font-mono text-xs text-slate-500">
            INCUBATED AT SIIC · INDIAN INSTITUTE OF TECHNOLOGY KANPUR
          </p>
          <a
            href="https://www.linkedin.com/company/brahmion-spacetech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan hover:underline"
          >
            <span>VIEW COMPANY UPDATES ON LINKEDIN</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </Section>
  )
}
