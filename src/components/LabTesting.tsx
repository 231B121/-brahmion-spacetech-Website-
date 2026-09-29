import Section from './ui/Section'
import { assetPath, scrollToId } from '../lib/utils'
import { Play, Sparkles, CheckCircle2 } from 'lucide-react'

export default function LabTesting() {
  return (
    <Section id="lab" label="Lab Testing" className="py-20">
      <div className="wrap">
        <p className="eyebrow mb-4">// 07 — IN LAB TESTING & VERIFICATION</p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="h2 tracking-tight leading-[0.95]">
              Validated Under Real <br />
              <span className="text-cyan">Firing Conditions</span>
            </h2>
            <p className="body-copy max-w-2xl mt-4 text-slate-300">
              Hardware built, tested, and integrated in-house. In-lab hot-fire testing at IIT Kanpur confirms ignition response, stable decomposition across catalyst beds, and clean vacuum impulse bits.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 space-y-1">
            <div className="flex items-center gap-2 text-cyan">
              <Sparkles size={14} />
              <span>FACILITY: ANALYTICAL LAB · SIDBI BUILDING</span>
            </div>
            <p>LAT 26.5123° N — LON 80.2329° E · IIT KANPUR</p>
          </div>
        </div>

        {/* Video Player Card */}
        <div className="hairline relative overflow-hidden rounded-sm bg-void border border-cyan/30 shadow-[0_0_40px_rgba(90,209,230,0.1)]">
          <div className="relative aspect-[16/9] w-full max-h-[640px] overflow-hidden bg-black">
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
            <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 rounded bg-void/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan backdrop-blur-md border border-cyan/40">
              <span className="h-2 w-2 rounded-full bg-cyan animate-ping" />
              <span>IN-LAB FIRING TEST // BRAHMION THRUSTER</span>
            </div>
          </div>

          {/* Video Footer Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white/[0.02] border-t border-line">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-cyan shrink-0" />
              <p className="font-mono text-xs text-slate-300">
                Hot-fire test bench verification — 100 mN / 1N thruster pulse sequence successfully executed.
              </p>
            </div>
            <button
              onClick={() => scrollToId('contact')}
              className="btn btn-solid py-2 text-xs"
            >
              REQUEST TEST DATA REPORT
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
