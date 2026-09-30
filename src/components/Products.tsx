import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Tag, ShieldCheck, Filter } from 'lucide-react'
import Section from './ui/Section'
import { flagship, products, type Product } from '../data/products'
import { assetPath, scrollToId } from '../lib/utils'

function ProductCard({
  product,
  onRequest,
}: {
  product: Product
  onRequest: (p: Product) => void
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-xl flex flex-col justify-between overflow-hidden bg-white border border-[#d6e4f0] p-6 transition-all duration-200 hover:border-[#0284c7] hover:shadow-[0_8px_24px_rgba(30,58,138,0.06)]"
    >
      <div>
        {/* Product Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#edf5fc] border border-[#dce7f3]">
          {!imgError ? (
            <img
              src={assetPath(product.image)}
              alt={product.name}
              className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-[#edf5fc] text-sm font-semibold text-[#0284c7]">
              {product.name}
            </div>
          )}

          {/* Category Tag */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/95 border border-[#cfe0f2] px-3 py-1 font-sans text-[11px] font-semibold text-[#0369a1] shadow-2xs backdrop-blur-xs">
            <Tag size={11} className="shrink-0" />
            <span>{product.category}</span>
          </div>

          {product.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-[#e0f2fe] border border-[#bae6fd] px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-[#0369a1]">
              <span>High Efficiency</span>
            </div>
          )}
        </div>

        {/* Header & Subtitle */}
        <div className="mt-5">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#0284c7] transition-colors">
            {product.name}
          </h3>
          <p className="mt-0.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#0284c7]">
            {product.subtitle}
          </p>

          {/* Pricing & Qualification Box */}
          <div className="my-4 rounded-lg border border-[#e2e8f0] bg-[#f8fbfe] p-3.5 flex flex-wrap items-center justify-between gap-2.5">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-wider text-slate-700 block mb-0.5 font-bold">
                ESTIMATED UNIT PRICING
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-sans text-lg font-bold text-slate-900 group-hover:text-[#0284c7]">
                  {product.price}
                </span>
                {product.priceUnit && (
                  <span className="font-sans text-xs text-slate-700 font-semibold">
                    {product.priceUnit}
                  </span>
                )}
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1 font-sans text-[10px] font-semibold text-[#0284c7] border border-[#bae6fd] rounded-full px-2.5 py-0.5 bg-[#f0f9ff]">
                <ShieldCheck size={11} />
                <span>Clean Monoprop</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-600">
            {product.description}
          </p>

          {/* Specs list */}
          <div className="mt-5 space-y-2">
            <p className="font-sans text-[11px] uppercase tracking-wider text-slate-700 font-bold">
              KEY SPECIFICATIONS
            </p>
            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {product.specs.map((spec, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 rounded-md border border-[#e2e8f0] bg-[#fbfdff] p-2 text-xs text-slate-900 font-medium"
                >
                  <CheckCircle2 size={13} className="text-[#0284c7] shrink-0 mt-0.5" />
                  <span className="leading-snug">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
        <button
          onClick={() => onRequest(product)}
          className="w-full flex items-center justify-center gap-2 rounded-md border border-[#cfe0f2] bg-white py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-slate-900 transition-all hover:border-[#0284c7] hover:bg-[#edf5fc] hover:text-[#0284c7] active:scale-[0.98]"
        >
          <span>Request Technical Datasheet</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </motion.article>
  )
}

const CATEGORIES = [
  { id: 'ALL', label: 'All Propulsion' },
  { id: 'Green Propellant', label: 'Green Propellants' },
  { id: 'Catalyst Technology', label: 'Ceramic Catalysts' },
  { id: 'Hardware Thruster', label: 'Micro Thrusters' },
  { id: 'Integrated Propulsion', label: 'Integrated Systems' },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const filtered =
    activeCategory === 'ALL'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const handleRequest = (p: Product) => {
    setToastMessage(`Datasheet request initiated for "${p.name}". Scrolling to contact desk...`)
    setTimeout(() => {
      scrollToId('contact')
    }, 250)
    setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  return (
    <Section id="products" label="Products" className="py-24 bg-[#f4f8fc]/60">
      <div className="wrap">
        <div className="badge mb-4">
          <span>PROPULSION CATALOGUE</span>
        </div>
        <h2 className="h2 mb-4 text-slate-900">Propulsion Solutions for the New Space Era</h2>
        <p className="body-copy max-w-3xl mb-12 text-slate-600">
          Engineered as high-performance, non-toxic alternatives to hydrazine. From flight-grade green monopropellants to ceramic catalyst beds and precision micro thrusters.
        </p>

        {/* Flagship Section */}
        <div className="mb-14 rounded-2xl border border-[#cfe0f2] bg-white p-6 sm:p-10 relative overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="badge">FLAGSHIP HARDWARE</span>
            <span className="font-sans text-xs font-semibold text-[#0284c7]">
              HOT-FIRE STAND VALIDATED
            </span>
          </div>

          <h3
            className="font-bold uppercase leading-tight tracking-tight text-slate-900"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)' }}
          >
            {flagship.name}
          </h3>

          <p className="mt-2 font-sans text-sm font-semibold tracking-wide text-slate-700">
            {flagship.native} · {flagship.kind}
          </p>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="body-copy text-base sm:text-lg text-slate-700 leading-relaxed font-medium">{flagship.text}</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {flagship.callouts.map((c) => (
                  <li
                    key={c}
                    className="border border-[#cfe0f2] bg-[#f8fbfe] px-3.5 py-2 font-sans text-xs font-semibold text-slate-900 flex items-center gap-2 rounded-md"
                  >
                    <CheckCircle2 size={14} className="text-[#0284c7] shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  onClick={() => scrollToId('contact')}
                  className="btn btn-solid"
                >
                  Schedule Technical Briefing
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div
              className="border border-[#cfe0f2] p-6 relative rounded-xl bg-[#f0f6fc]"
              role="img"
              aria-label="Schematic of a micro thruster"
            >
              <svg viewBox="0 0 400 260" className="w-full">
                <g fill="none" stroke="#0284c7" strokeWidth="1.8">
                  <path d="M60 90 H160 V70 H230 V90 H250 L340 40 V220 L250 170 H230 V190 H160 V170 H60 Z" />
                  <path d="M170 100 H225 V160 H170 Z" strokeOpacity=".6" strokeDasharray="4 4" />
                </g>
                <g fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#0f172a">
                  <text x="60" y="60">FEED SYSTEM</text>
                  <text x="168" y="130">CATALYST BED</text>
                  <text x="285" y="30">EXPANSION NOZZLE</text>
                </g>
                <text x="60" y="245" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#334155">
                  HARDWARE ARCHITECTURE · SIIC IIT KANPUR HOT-FIRE STAND
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* All Products Grid with Category Tabs */}
        <div>
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#cfe0f2] pb-4">
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-[#0284c7] block mb-1 font-bold">
                Propulsion Solutions &amp; Datasheets
              </span>
              <span className="font-sans text-xs text-slate-700 font-medium">
                5 Flight-Ready Technologies · TRL 3 to 4
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter size={14} className="text-slate-400 mr-1 hidden sm:block" />
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-full px-3.5 py-1.5 font-sans text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'bg-[#0284c7] text-white shadow-2xs'
                        : 'border border-[#cfe0f2] bg-white text-slate-600 hover:border-[#0284c7] hover:text-[#0284c7]'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onRequest={handleRequest} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Floating Notification Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-[#cfe0f2] bg-white px-4 py-3 font-sans text-xs font-medium text-slate-900 shadow-xl backdrop-blur-xl"
          >
            <CheckCircle2 size={16} className="text-[#0284c7] shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
