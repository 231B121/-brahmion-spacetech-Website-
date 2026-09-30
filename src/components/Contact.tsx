import { useState } from 'react'
import Section from './ui/Section'
import { contact } from '../data/contact'
import { Mail, MapPin, Building2, Briefcase, Handshake, Linkedin, Send } from 'lucide-react'

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
    <Section id="contact" label="Contact" className="min-h-[75vh] py-24 bg-white">
      <div className="wrap relative">
        <div className="badge mb-4">
          <span>|| ब्रह्माण्डस्य नवप्रयाणम् ||</span>
          <span>·</span>
          <span>GET IN TOUCH</span>
        </div>

        <h2 className="display mt-2 tracking-tight text-slate-900">
          Let's Build What Comes Next.
        </h2>

        <p className="body-copy max-w-2xl mt-4 text-slate-700 font-medium">
          Developing next-generation green propulsion systems for safer, cleaner, and reliable space missions. Reach out for technical specifications, mission integration, institutional partnerships, or careers.
        </p>

        {/* Inquiry Topic Selector Card */}
        <div className="mt-10 rounded-2xl border border-[#cfe0f2] bg-[#f8fbfe] p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
          <p className="font-sans text-xs uppercase tracking-wider text-[#0284c7] mb-4 font-bold">
            Select Inquiry Type:
          </p>
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setSelectedTopic('general')}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 font-sans text-xs font-bold tracking-wide transition-colors ${
                selectedTopic === 'general'
                  ? 'border-[#0284c7] bg-[#edf5fc] text-[#0284c7] shadow-2xs'
                  : 'border-[#cfe0f2] bg-white text-slate-900 hover:border-[#0284c7] hover:text-[#0284c7]'
              }`}
            >
              <Mail size={15} />
              <span>General Enquiry</span>
            </button>

            <button
              onClick={() => setSelectedTopic('partner')}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 font-sans text-xs font-bold tracking-wide transition-colors ${
                selectedTopic === 'partner'
                  ? 'border-[#0284c7] bg-[#edf5fc] text-[#0284c7] shadow-2xs'
                  : 'border-[#cfe0f2] bg-white text-slate-900 hover:border-[#0284c7] hover:text-[#0284c7]'
              }`}
            >
              <Handshake size={15} />
              <span>Partnership &amp; Investment</span>
            </button>

            <button
              onClick={() => setSelectedTopic('career')}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 font-sans text-xs font-bold tracking-wide transition-colors ${
                selectedTopic === 'career'
                  ? 'border-[#0284c7] bg-[#edf5fc] text-[#0284c7] shadow-2xs'
                  : 'border-[#cfe0f2] bg-white text-slate-900 hover:border-[#0284c7] hover:text-[#0284c7]'
              }`}
            >
              <Briefcase size={15} />
              <span>Careers &amp; Engineering</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={mailUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-solid inline-flex items-center gap-2"
            >
              <span>Send Pre-filled Email</span>
              <Send size={14} />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn inline-flex items-center gap-2 text-slate-900 font-semibold"
            >
              <Linkedin size={15} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Corporate Address & Contact Details */}
        <dl className="mt-12 grid gap-6 font-sans text-xs sm:grid-cols-3 border-t border-[#dce7f3] pt-8">
          <div>
            <dt className="text-slate-700 font-bold flex items-center gap-2 mb-1.5 uppercase tracking-wider">
              <Mail size={15} className="text-[#0284c7]" />
              <span>OFFICE EMAIL</span>
            </dt>
            <dd className="mt-1 font-sans text-sm text-slate-900 font-bold break-words">
              <a href={`mailto:${contact.email}`} className="hover:text-[#0284c7] transition-colors">
                {contact.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-slate-700 font-bold flex items-center gap-2 mb-1.5 uppercase tracking-wider">
              <Building2 size={15} className="text-[#0284c7]" />
              <span>INCUBATION FACILITY</span>
            </dt>
            <dd className="mt-1 font-sans text-sm text-slate-900 font-bold leading-relaxed">
              SIIC, Analytical Lab, SIDBI Building
              <span className="block text-slate-700 text-xs mt-0.5 font-medium">IIT Kanpur, Uttar Pradesh, India</span>
            </dd>
          </div>

          <div>
            <dt className="text-slate-700 font-bold flex items-center gap-2 mb-1.5 uppercase tracking-wider">
              <MapPin size={15} className="text-[#0284c7]" />
              <span>HEADQUARTERS</span>
            </dt>
            <dd className="mt-1 font-sans text-sm text-slate-900 font-bold leading-relaxed">
              {contact.location}
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  )
}
