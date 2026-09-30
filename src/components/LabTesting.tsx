import Section from './ui/Section'
import { assetPath, scrollToId } from '../lib/utils'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function LabTesting() {
  return (
    <Section id="lab" label="Lab Testing" className="py-24 bg-white">
      <div className="wrap">
        <div className="badge mb-4">
          <span>IN-LAB HOT-FIRE VALIDATION</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="h2 tracking-tight text-slate-900">
              Validated Under Real <br />
              <span className="text-[#0284c7]">Hot-Fire Conditions</span>
            </h2>
            <p className="body-copy max-w-2xl mt-4 text-slate-700 font-medium">
              Hardware designed, manufactured, and test-fired in-house. In-lab hot-fire qualification at IIT Kanpur validates ignition latency, catalytic bed stability, and repeatable vacuum impulse bits.
            </p>
          </div>

          <div className="font-sans text-xs text-slate-700 font-medium">
            TEST FACILITY: <span className="text-slate-900 font-bold">ANALYTICAL LAB · SIDBI BUILDING, IIT KANPUR</span>
          </div>
        </div>

        {/* Video Player Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-[#cfe0f2] shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
          <div className="relative aspect-[16/9] w-full max-h-[620px] overflow-hidden bg-slate-900">
            <video
              src={assetPath('/assets/lab/thruster-test.mp4')}
              poster={assetPath('/assets/lab/thruster-test-poster.jpg')}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="h-full w-full object-cover"
            />
            {/* Live Indicator overlay */}
            <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 font-sans text-xs uppercase tracking-wider text-[#0284c7] font-semibold backdrop-blur-xs border border-[#cfe0f2] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
              <span>Hot-Fire Test Stand · Brahmion Thruster</span>
            </div>
          </div>

          {/* Video Footer Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border-t border-[#e2e8f0] bg-[#f8fbfe]">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-[#0284c7] shrink-0" />
              <p className="font-sans text-xs font-semibold text-slate-900">
                Hot-fire test bench verification — 100 mN / 1 N thruster pulse sequence successfully executed.
              </p>
            </div>
            <button
              onClick={() => scrollToId('contact')}
              className="btn btn-solid py-2 text-xs"
            >
              <span>Request Test Data Report</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
