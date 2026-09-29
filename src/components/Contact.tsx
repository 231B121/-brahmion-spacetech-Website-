import { useState } from 'react'
import Section from './ui/Section'
import WordReveal from './ui/WordReveal'
import MagneticButton from './ui/MagneticButton'
import { contact } from '../data/contact'
import { Mail, MapPin, Compass, Briefcase, Handshake, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const [selectedTopic, setSelectedTopic] = useState<'general' | 'partner' | 'career'>('general')

  const drafts = {
    general: {
      title: 'General Enquiry',
      subject: 'Enquiry — Brahmion Spacetech',
      body: 'Hello Brahmion Spacetech team,\n\nI would like to enquire about your green propulsion solutions.\n\nName:\nOrganisation:\nDetails:\n\nThank you,',
    },
    partner: {
      title: 'Partnership Enquiry',
      subject: 'Partnership Enquiry — Brahmion Spacetech',
      body: "Hello Brahmion Spacetech team,\n\nI'd like to explore a partnership.\n\nName:\nOrganisation:\nRole:\nNature of partnership (investment, incubation, supply chain, research, other):\n\nDetails:\n\nThank you,",
    },
    career: {
      title: 'Career Enquiry',
      subject: 'Career Enquiry — Brahmion Spacetech',
      body: "Hello Brahmion Spacetech team,\n\nI'd like to enquire about opportunities to join the mission.\n\nName:\nBackground / current role:\nArea of interest (propulsion, chemistry, avionics, business, other):\nPortfolio or LinkedIn:\n\nA little about why I'd like to work with you:\n\nThank you,",
    },
  }

  const currentDraft = drafts[selectedTopic]
  const mailUrl = `mailto:${contact.email}?subject=${encodeURIComponent(currentDraft.subject)}&body=${encodeURIComponent(currentDraft.body)}`

  return (
    <Section id="contact" label="Contact" className="min-h-[85vh] py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(90,209,230,0.12),transparent_65%)]"
      />
      <div className="wrap relative">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-void/80 px-4 py-1.5 backdrop-blur-md">
          <span className="font-sans text-xs tracking-wider text-cyan font-medium">
            || ब्रह्माण्डस्य नवप्रयाणम् ||
          </span>
          <span className="h-1 w-1 rounded-full bg-cyan" />
          <span className="font-mono text-[10px] tracking-widest text-slate-400">
            // 08 — CONTACT US
          </span>
        </div>

        <h2 className="display mt-2">
          <WordReveal text="LET'S BUILD" />
          <br />
          <WordReveal text="WHAT COMES NEXT." delay={0.15} />
        </h2>

        <p className="body-copy max-w-2xl mt-4 text-slate-300">
          Developing next-generation green propulsion systems for safer, cleaner, and reliable space missions. Reach out for flight-testing, procurement, institutional partnerships, or careers.
        </p>

        {/* Draft Topic Selector */}
        <div className="mt-10 border border-line bg-white/[0.02] p-6 sm:p-8 rounded-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">
            SELECT INQUIRY TYPE:
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedTopic('general')}
              className={`flex items-center gap-2 rounded border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                selectedTopic === 'general'
                  ? 'border-cyan bg-cyan/20 text-white'
                  : 'border-line text-slate-400 hover:border-slate-500'
              }`}
            >
              <Mail size={14} />
              <span>General Enquiry</span>
            </button>

            <button
              onClick={() => setSelectedTopic('partner')}
              className={`flex items-center gap-2 rounded border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                selectedTopic === 'partner'
                  ? 'border-cyan bg-cyan/20 text-white'
                  : 'border-line text-slate-400 hover:border-slate-500'
              }`}
            >
              <Handshake size={14} />
              <span>Partnership & Investment</span>
            </button>

            <button
              onClick={() => setSelectedTopic('career')}
              className={`flex items-center gap-2 rounded border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                selectedTopic === 'career'
                  ? 'border-cyan bg-cyan/20 text-white'
                  : 'border-line text-slate-400 hover:border-slate-500'
              }`}
            >
              <Briefcase size={14} />
              <span>Join the Crew (Careers)</span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <MagneticButton solid href={mailUrl} external>
              Send Pre-filled Email <Send size={14} className="ml-1" />
            </MagneticButton>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn flex items-center gap-2"
            >
              <Linkedin size={15} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Official Coordinates & Lab Address */}
        <dl className="mt-14 grid gap-8 font-mono text-xs tracking-widest sm:grid-cols-3 border-t border-line/80 pt-8">
          <div>
            <dt className="text-slate-500 flex items-center gap-2 mb-1.5">
              <Mail size={13} className="text-cyan" />
              <span>OFFICE EMAIL</span>
            </dt>
            <dd className="mt-1 font-sans text-sm text-white break-words">
              <a href={`mailto:${contact.email}`} className="hover:text-cyan transition-colors">
                {contact.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-slate-500 flex items-center gap-2 mb-1.5">
              <MapPin size={13} className="text-cyan" />
              <span>FACILITY ADDRESS</span>
            </dt>
            <dd className="mt-1 font-sans text-sm text-white leading-relaxed">
              {contact.location}
            </dd>
          </div>

          <div>
            <dt className="text-slate-500 flex items-center gap-2 mb-1.5">
              <Compass size={13} className="text-cyan" />
              <span>LOCATION COORDINATES</span>
            </dt>
            <dd className="mt-1 font-mono text-xs text-cyan">
              LAT 26.5123° N — LON 80.2329° E
              <span className="block text-slate-400 text-[11px] mt-0.5">IIT KANPUR, INDIA</span>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  )
}
