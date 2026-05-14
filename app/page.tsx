import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Healthy Earth | Fertilisers & Plant Nutrition for Australian Gardens & Farms",
  description: "Scientifically formulated fertilisers for Australian lawns, gardens and farms. Get personalised plant nutrition advice from Ella, our AI agronomist — free, instant, and tailored to your soil.",
};

const testimonials = [
  { name: "James T.", location: "Swan Hill, VIC", crop: "Cotton grower", text: "Using SilicaMax across our operation for two seasons. Noticeably better plant health and the soil biology has really come alive. Went from needing three fungicide sprays to one.", rating: 5 },
  { name: "Sarah M.", location: "Brisbane, QLD", crop: "Home lawn", text: "My lawn went from patchy and yellow to properly green within 3 weeks. I described the problem to Ella and she nailed exactly what it needed on the first try.", rating: 5 },
  { name: "Linda H.", location: "Perth, WA", crop: "Citrus orchard", text: "I've tried three other fertiliser brands on my citrus. HealthyEarth is the only one that gave me consistent colour improvement and heavier fruit. The Booster at fruit fill made a real difference.", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
            alt="Australian crop farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(115deg, rgba(10,35,15,0.92) 0%, rgba(20,65,30,0.80) 55%, rgba(10,35,15,0.55) 100%)" }} />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8" style={{ background: "rgba(255,255,255,0.08)", borderRadius: "99px", padding: "6px 16px", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-xs font-medium tracking-wide">BioCare Fertilisers · New South Wales, Australia</span>
            </div>
            <h1 className="font-bold text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
              Nutrition that works<br />
              <span style={{ color: "#a5d6a7" }}>with your soil,</span><br />
              not against it.
            </h1>
            <p className="text-white/70 leading-relaxed mb-10 max-w-xl" style={{ fontSize: "1.1rem" }}>
              25 formulations built for Australian conditions — from a lawn that won&apos;t green up, to broadacre crops that need every bit of yield they can get.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90 shadow-lg" style={{ background: "#2d7a3a", color: "white" }}>
                Browse Products
              </Link>
              <Link href="/chat-assistant" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border border-white/30 text-white transition-all hover:bg-white/10" style={{ backdropFilter: "blur(8px)" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                Ask Ella — Free
              </Link>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* ── CREDIBILITY STRIP ───────────────────────────────────────────────── */}
      <section style={{ background: "#0d1f10" }} className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {[
              { val: "25", label: "formulations" },
              { val: "51%", label: "SiO₂ in SilicaMax" },
              { val: "30+", label: "years of research" },
              { val: "0", label: "synthetic additives" },
              { val: "100%", label: "Australian-made" },
            ].map((s) => (
              <div key={s.label} className="text-center flex-1 min-w-[120px]">
                <div className="font-mono font-bold text-white" style={{ fontSize: "2rem" }}>{s.val}</div>
                <div className="text-green-500 text-xs mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPOTLIGHT ───────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#f5f0e8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#2d7a3a" }}>The Range</p>
            <h2 className="font-bold text-gray-900 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Built for Australian<br />conditions. Proven in the field.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Large feature — SilicaMax */}
            <div className="lg:col-span-3 rounded-3xl flex flex-col justify-between overflow-hidden" style={{ background: "#0d1f10", minHeight: "460px", padding: "2.5rem" }}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Farming · Soil Health</span>
                  <span className="w-1 h-1 rounded-full bg-green-600" />
                  <span className="font-mono text-green-500 text-xs">ID — 17</span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-1">SilicaMax</h3>
                <p className="font-mono text-green-300 text-lg mb-6">51% SiO₂ + Broad Trace Elements</p>
                <p className="text-white/60 leading-relaxed max-w-md">
                  Silicon physically strengthens cell walls — making plants mechanically harder for insects and fungal spores to penetrate. SilicaMax delivers 51% SiO₂ in a non-crystalline, plant-available form that simultaneously activates rhizosphere biology and improves drought tolerance.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-3 text-xs text-white/40 font-medium">
                  <span className="px-3 py-1 rounded-full border border-white/10">10 kg</span>
                  <span className="px-3 py-1 rounded-full border border-white/10">25 kg</span>
                  <span className="px-3 py-1 rounded-full border border-white/10">1 tonne bulk</span>
                </div>
                <Link href="/our-products/17" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-white transition-colors">
                  View product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Two stacked cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Lawn Fertiliser */}
              <div className="flex-1 rounded-3xl bg-white border border-gray-200 flex flex-col justify-between overflow-hidden" style={{ padding: "2rem" }}>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4caf50" }}>Gardening · Lawn</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">Pro-Strength Lawn Fertiliser</h3>
                  <p className="font-mono text-sm mb-4" style={{ color: "#2d7a3a" }}>N 13 · P 3 · K 14 + Traces</p>
                  <p className="text-gray-500 text-sm leading-relaxed">Suits all Australian grass types. Results visible in 7–10 days. High potassium builds heat and drought tolerance between applications.</p>
                </div>
                <Link href="/our-products/9" className="inline-flex items-center gap-1.5 text-sm font-bold mt-5 hover:opacity-70 transition-opacity" style={{ color: "#2d7a3a" }}>
                  View product <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>

              {/* Booster */}
              <div className="flex-1 rounded-3xl flex flex-col justify-between overflow-hidden" style={{ background: "#1a2e0f", padding: "2rem" }}>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Farming · Quality</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-1">Booster</h3>
                  <p className="font-mono text-sm text-orange-300 mb-4">No Withholding Period</p>
                  <p className="text-white/60 text-sm leading-relaxed">Increases Brix, improves flavour, extends shelf life. Apply at fruit set and again pre-harvest — safe right through to picking.</p>
                </div>
                <Link href="/our-products/25" className="inline-flex items-center gap-1.5 text-sm font-bold mt-5 text-orange-400 hover:text-white transition-colors">
                  View product <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300" />
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">
              Browse all 25 products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#2d7a3a" }}>The Science</p>
              <h2 className="font-bold text-gray-900 leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                Most fertilisers feed the plant.<br />
                <span style={{ color: "#2d7a3a" }}>Ours feed the soil.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                The rhizosphere — the microbially active zone around plant roots — determines how much nutrition your plants can actually access. BioCare formulations are designed to activate this zone, not just dump nutrients into it.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Silicon strengthens, not just feeds", body: "SiO₂ physically hardens cell walls against pest and fungal entry — a mechanical defence that NPK alone can't provide." },
                  { title: "Humic carbon improves cation exchange", body: "Humic and fulvic acids from ancient Australian deposits help soil hold nutrients where roots can reach them." },
                  { title: "Seaweed + fish + trace elements", body: "The 44-Plus range uses biostimulants alongside NPK — improving uptake efficiency, not just nutrient supply." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "#e8f5e9" }}>
                      <svg className="w-3 h-3" fill="none" stroke="#2d7a3a" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/products" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold" style={{ color: "#2d7a3a" }}>
                See all products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

            {/* Right: 44-Plus feature */}
            <div className="rounded-3xl overflow-hidden" style={{ background: "#f5f0e8" }}>
              <div className="p-8 border-b border-gray-200">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Flagship Farming Formula</span>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">44-Plus</h3>
                <p className="font-mono text-sm mt-1" style={{ color: "#2d7a3a" }}>N 13.9 · P 3.7 · K 10.7 · S 10.7</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">The four biostimulants included alongside NPK — seaweed, humic acid, fish and trace elements — work synergistically to improve nutrient efficiency, soil biology and plant resilience in one application.</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Seaweed", "Humic Acid", "Fish", "Trace Elements"].map((i) => (
                    <div key={i} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-gray-200">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2d7a3a" }} />
                      <span className="text-xs font-semibold text-gray-700">{i}</span>
                    </div>
                  ))}
                </div>
                <Link href="/our-products/11" className="inline-flex items-center gap-1.5 text-sm font-bold mt-6" style={{ color: "#2d7a3a" }}>
                  View 44-Plus Farming
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELLA ────────────────────────────────────────────────────────────── */}
      <section style={{ background: "#0d1f10" }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Chat preview */}
            <div className="rounded-3xl overflow-hidden border border-white/10" style={{ background: "#0a170c" }}>
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
                <div>
                  <p className="text-white text-sm font-semibold">Ella</p>
                  <p className="text-green-500 text-xs">Online</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              {/* Messages */}
              <div className="p-5 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-green-700 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                    My citrus leaves are yellowing between the veins but the veins stay green
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
                  <div className="bg-white/8 border border-white/10 text-white/85 text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs leading-relaxed">
                    That pattern — <strong className="text-white">yellowing between veins with green veins remaining</strong> — is classic iron or manganese deficiency. Common in alkaline soils where pH blocks uptake even when the minerals are present.
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
                  <div className="bg-white/8 border border-white/10 text-white/85 text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs leading-relaxed">
                    I&apos;d start with <strong className="text-white">EasyTrace</strong> as a foliar — it bypasses the soil chemistry issue entirely. You should see improvement in 5–7 days. What&apos;s your soil pH?
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-white/10" style={{ background: "#0a170c" }}>
                  <span className="text-white/30 text-sm flex-1">Ask about your plants...</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#2d7a3a" }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-green-500 mb-4">Free · No account needed</p>
              <h2 className="font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                Get the right answer,<br />not a generic one.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Ella is trained on BioCare agronomy — she knows the product range, Australian soil conditions, and how to narrow down a symptom to a specific deficiency or issue. Describe what you&apos;re seeing and she&apos;ll give you a product and a rate, not a brochure.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Yellowing leaves, poor growth, bare patches",
                  "Fruit quality, Brix levels, shelf life",
                  "Clay soils, compaction, soil biology",
                  "Germination, establishment, early root development",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-white/60">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    {t}
                  </div>
                ))}
              </div>
              <Link href="/chat-assistant" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90" style={{ background: "#2d7a3a", color: "white" }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                Chat with Ella
              </Link>
              <p className="text-white/30 text-xs mt-3">Ella provides general guidance. Always follow product label directions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#f5f0e8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#2d7a3a" }}>Grower results</p>
            <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>From Australian growers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 flex flex-col">
                <div className="text-5xl font-serif text-gray-200 leading-none mb-4">&ldquo;</div>
                <p className="text-gray-700 leading-relaxed flex-1 mb-6">{t.text}</p>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.crop} · {t.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            25 formulations.<br />One problem to solve.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">Whether it&apos;s a lawn that won&apos;t green up or a broadacre crop that needs every kilogram of yield, there&apos;s a product built for it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white hover:opacity-90 transition-all shadow-md" style={{ background: "#2d7a3a" }}>
              Browse all products
            </Link>
            <Link href="/chat-assistant" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 hover:bg-green-50 transition-all" style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}>
              Ask Ella instead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
