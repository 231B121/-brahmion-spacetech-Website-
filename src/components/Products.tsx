import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Tag, ShieldCheck } from 'lucide-react'
import Section from './ui/Section'
import { flagship, products, type Product } from '../data/products'
import { assetPath, scrollToId } from '../lib/utils'

function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className="hairline group relative flex flex-col justify-between overflow-hidden bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan/60 hover:bg-white/[0.04]">
      {/* Accent corner */}
      <div className="absolute top-0 right-0 h-12 w-12 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-[2px] w-8 bg-cyan/50" />
        <div className="absolute top-0 right-0 h-8 w-[2px] bg-cyan/50" />
      </div>

      <div>
        {/* Product Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-navy/60 border border-line">
          {!imgError ? (
            <img
              src={assetPath(product.image)}
              alt={product.name}
              className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-navy text-sm font-mono text-cyan/70">
              {product.name}
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent opacity-40" />

          {/* Category Pill */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded bg-void/85 border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan backdrop-blur-md">
            <Tag size={11} className="shrink-0" />
            <span>{product.category}</span>
          </div>

          {product.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded bg-cyan/20 border border-cyan/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan backdrop-blur-md">
              <Sparkles size={11} />
              <span>HIGH EFFICIENCY</span>
            </div>
          )}
        </div>

        {/* Header & Subtitle */}
        <div className="mt-5">
          <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-cyan transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cyan-alt">
            {product.subtitle}
          </p>

          {/* Pricing Box */}
          <div className="my-4 rounded border border-line/80 bg-white/[0.03] p-3.5 flex items-baseline justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-0.5">
                ESTIMATED PRICING
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-xl font-bold tracking-tight text-white group-hover:text-cyan">
                  {product.price}
                </span>
                {product.priceUnit && (
                  <span className="font-mono text-xs text-slate-400">
                    {product.priceUnit}
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-cyan/90 border border-cyan/30 rounded px-2 py-0.5 bg-cyan/5">
                <ShieldCheck size={11} />
                <span>CLEAN TECH</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-300/90 font-sans">
            {product.description}
          </p>

          {/* Specs list */}
          <div className="mt-5 space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              KEY SPECIFICATIONS
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.specs.map((spec, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 rounded border border-line/60 bg-white/[0.015] p-2 text-xs text-slate-300"
                >
                  <CheckCircle2 size={13} className="text-cyan shrink-0 mt-0.5" />
                  <span className="leading-snug">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-4 border-t border-line/60">
        <button
          onClick={() => scrollToId('contact')}
          className="w-full flex items-center justify-center gap-2 rounded border border-line bg-white/[0.04] py-2.5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:border-cyan hover:bg-cyan/15 hover:text-cyan"
        >
          <span>REQUEST PROPOSAL / DATASHEET</span>
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  )
}

export default function Products() {
  return (
    <Section id="products" label="Products" className="overflow-hidden">
      <div className="wrap">
        <p className="eyebrow mb-4">05 / PROPULSION CATALOGUE</p>
        <h2 className="h2 mb-4">Propulsion Solutions for the New Space Era</h2>
        <p className="body-copy max-w-3xl mb-12">
          Engineered as high-performance, non-toxic alternatives to hydrazine. From flight-grade green monopropellants to ceramic catalyst beds and precision micro thrusters.
        </p>

        {/* Flagship Section */}
        <div className="mb-16 hairline bg-white/[0.02] p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[11px] text-cyan/70 tracking-widest uppercase">
            // IN-HOUSE FLAGSHIP
          </div>

          <motion.h3
            initial={{ opacity: 0, filter: 'blur(14px)', letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', letterSpacing: '-0.02em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-semibold uppercase leading-none"
            style={{ fontSize: 'clamp(2.4rem, 9vw, 6.5rem)' }}
          >
            {flagship.name}
          </motion.h3>

          <p className="mt-1 font-mono text-sm tracking-widest text-slate-400">
            {flagship.native} · {flagship.kind}
          </p>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="body-copy text-lg">{flagship.text}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {flagship.callouts.map((c) => (
                  <li
                    key={c}
                    className="hairline bg-white/[0.02] px-4 py-2.5 font-mono text-[11px] tracking-wider text-cyan/90 flex items-center gap-2"
                  >
                    <CheckCircle2 size={13} className="text-cyan shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  onClick={() => scrollToId('contact')}
                  className="btn"
                >
                  SCHEDULE TECHNICAL BRIEFING
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div
              className="hairline grid-bg p-6 relative rounded-sm"
              role="img"
              aria-label="Schematic of a micro thruster"
            >
              <svg viewBox="0 0 400 260" className="w-full">
                <g fill="none" stroke="#5ad1e6" strokeWidth="1.5">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    d="M60 90 H160 V70 H230 V90 H250 L340 40 V220 L250 170 H230 V190 H160 V170 H60 Z"
                  />
                  <path d="M170 100 H225 V160 H170 Z" strokeOpacity=".5" strokeDasharray="4 4" />
                </g>
                <g fontFamily="monospace" fontSize="9" fill="#8fa3bf">
                  <text x="60" y="60">FEED SYSTEM</text>
                  <text x="168" y="130">CATALYST BED</text>
                  <text x="295" y="30">EXPANSION NOZZLE</text>
                </g>
                <text x="60" y="245" fontFamily="monospace" fontSize="8" fill="#64748b">
                  ILLUSTRATIVE HARDWARE SCHEMATIC — HOT-FIRE TESTED
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* All Products Grid with Images and Pricing */}
        <div>
          <div className="mb-8 flex items-center justify-between border-b border-line pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              // COMPLETE PRODUCT LINEUP & PRICING
            </span>
            <span className="font-mono text-xs text-slate-500">
              5 FLIGHT-READY TECHNOLOGIES
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
