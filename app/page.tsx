import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import OpenEllaButton from "@/components/OpenEllaButton";
import HeroVideo from "@/components/HeroVideo";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Healthy Earth | Fertilisers & Plant Nutrition for Australian Gardens & Farms",
  description: "Scientifically formulated fertilisers for Australian lawns, gardens and farms. Get personalised plant nutrition advice from Ella, our AI agronomist — free, instant, and tailored to your soil.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO VIDEO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
        <HeroVideo />
      </section>

      {/* ── HERO TEXT ── */}
      <section className="relative overflow-hidden bg-white py-28 md:py-36">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(45,122,58,0.07) 0%, transparent 70%)" }} />
          <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(80,160,60,0.05) 0%, transparent 70%)" }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 mb-8" style={{ background: "rgba(45,122,58,0.08)", borderRadius: "99px", padding: "6px 18px", border: "1px solid rgba(45,122,58,0.18)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#2d7a3a" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#3a6b40" }}>BioCare Fertilisers · New South Wales, Australia</span>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="font-bold leading-[1.08] mb-7" style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)", letterSpacing: "-0.02em", color: "#0d1f10" }}>
              Nutrition that works<br />
              <span style={{ background: "linear-gradient(90deg, #2d7a3a, #5aaa5a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                with your soil,
              </span><br />
              not against it.
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="leading-relaxed mb-12 mx-auto" style={{ color: "#5a7060", fontSize: "1.15rem", maxWidth: "560px" }}>
              25 formulations built for Australian conditions — from a lawn that won&apos;t green up, to broadacre crops that need every bit of yield they can get.
            </p>
          </FadeIn>
          <FadeIn delay={240}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)", color: "white", boxShadow: "0 8px 30px rgba(45,122,58,0.35)" }}
              >
                Browse Products
              </Link>
              <OpenEllaButton className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-base transition-all hover:bg-green-50 active:scale-95" style={{ border: "1.5px solid rgba(45,122,58,0.35)", color: "#2d7a3a" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                Ask Ella — Free
              </OpenEllaButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS COUNTER ── */}
      <StatsCounter />

      {/* ── MARQUEE STRIP ── */}
      <div className="overflow-hidden py-4 border-y border-gray-100 bg-white">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mr-8 flex-shrink-0">
              {["🌱 Australian-Made", "✦ 30+ Years Research", "🌿 0 Synthetic Additives", "✦ 25 Formulations", "🔬 Soil-First Science", "✦ Safe for Family & Pets", "🍃 BioCare Certified", "✦ Proven in the Field"].map((item) => (
                <span key={item} className="text-sm font-semibold tracking-wide" style={{ color: "#4a7a50" }}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#2d7a3a" }}>Our Products</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Featured Products</h2>
              </div>
              <p className="text-gray-500 text-base max-w-xs leading-relaxed">Scientifically formulated for Australian conditions. Safe for family, pets and the environment.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: "/our-products/eco-spray", src: "/products/Eco Spray.png", alt: "BioCare Eco-Spray", label: "Eco-Safe Garden Formula", name: "BioCare Eco-Spray", desc: "Safe and effective garden spray for general plant health. No harsh chemicals — approved for use around family and pets.", sizes: ["1 L", "4 L", "20 L"], accent: "#43a047", delay: 0 },
              { href: "/our-products/liquid-npk", src: "/products/Liquid NPK.png", alt: "Liquid N.P.K Fertiliser", label: "Balanced Liquid NPK", name: "Liquid N.P.K Fertiliser", desc: "Fast-acting liquid formula that penetrates deep into the soil profile, reaching root zones faster than granular alternatives.", sizes: ["1 L", "4 L", "20 L"], accent: "#00897b", delay: 100 },
              { href: "/our-products/44-plus-garden", src: "/products/44 Plus.png", alt: "HealthyEarth 44-Plus", label: "N 13.9 · P 3.7 · K 10.7 + S 10.7", name: "44-Plus", desc: "Premium high-analysis NPK supercharged with seaweed, humic acid, fish and trace elements for superior results.", sizes: ["20 kg"], accent: "#2d7a3a", delay: 200 },
            ].map((p) => (
              <FadeIn key={p.href} delay={p.delay}>
                <Link
                  href={p.href}
                  className="group flex flex-col overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl block"
                  style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="relative w-full aspect-square flex-shrink-0 overflow-hidden" style={{ background: "#FFFBF6" }}>
                    <Image src={p.src} alt={p.alt} fill className="object-contain p-2 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.04), transparent)" }} />
                  </div>
                  <div className="flex-1 flex flex-col p-6 border-t border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.accent }}>{p.label}</p>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-green-700 transition-colors">{p.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {p.sizes.map(s => (
                          <span key={s} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#f0faf0", color: "#2d7a3a" }}>{s}</span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-xs font-bold transition-all duration-200 group-hover:gap-2 flex-shrink-0 ml-2" style={{ color: p.accent }}>
                        View
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={100}>
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full border-2 transition-all hover:bg-green-700 hover:text-white hover:border-green-700 active:scale-95"
                style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}
              >
                Browse all 25 products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ── */}
      <FadeIn>
        <div className="relative overflow-hidden" style={{ height: "480px" }}>
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85"
            alt="Australian farmland"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,25,12,0.80) 0%, rgba(10,25,12,0.50) 50%, rgba(10,25,12,0.20) 100%)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#6fcf7c" }}>Built for Australian Conditions</p>
              <h2 className="text-white font-bold leading-tight max-w-xl" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Proven in the field.<br />Trusted by growers.
              </h2>
              <p className="text-white/60 mt-4 max-w-md text-base leading-relaxed">
                From backyard vegetable gardens to broadacre operations — our formulas are built for Australian soil, Australian climate, Australian results.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ── PRODUCT SPOTLIGHT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-16">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#2d7a3a" }}>The Range</p>
              <h2 className="font-bold text-gray-900 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Built for Australian<br />conditions. Proven in the field.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Large dark card */}
            <FadeIn className="lg:col-span-3" delay={0}>
              <div className="rounded-3xl flex flex-col justify-between overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ background: "#0d1f10", minHeight: "460px", padding: "2.5rem" }}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Farming · Soil Health</span>
                    <span className="w-1 h-1 rounded-full bg-green-600" />
                    <span className="text-green-500 text-xs">ID — 17</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-1">SilicaMax</h3>
                  <p className="text-green-300 text-lg mb-6">51% SiO₂ + Broad Trace Elements</p>
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
            </FadeIn>

            {/* Two stacked cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <FadeIn delay={100} className="flex-1 flex flex-col">
                <div className="flex-1 rounded-3xl bg-white border border-gray-200 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ padding: "2rem" }}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4caf50" }}>Gardening · Lawn</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">Pro-Strength Lawn Fertiliser</h3>
                    <p className="text-sm mb-4" style={{ color: "#2d7a3a" }}>N 13 · P 3 · K 14 + Traces</p>
                    <p className="text-gray-500 text-sm leading-relaxed">Suits all Australian grass types. Results visible in 7–10 days. High potassium builds heat and drought tolerance between applications.</p>
                  </div>
                  <Link href="/our-products/9" className="inline-flex items-center gap-1.5 text-sm font-bold mt-5 hover:opacity-70 transition-opacity" style={{ color: "#2d7a3a" }}>
                    View product <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={200} className="flex-1 flex flex-col">
                <div className="flex-1 rounded-3xl flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ background: "#1a2e0f", padding: "2rem" }}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Farming · Quality</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-1">Booster</h3>
                    <p className="text-sm text-orange-300 mb-4">No Withholding Period</p>
                    <p className="text-white/60 text-sm leading-relaxed">Increases Brix, improves flavour, extends shelf life. Apply at fruit set and again pre-harvest — safe right through to picking.</p>
                  </div>
                  <Link href="/our-products/25" className="inline-flex items-center gap-1.5 text-sm font-bold mt-5 text-orange-400 hover:text-white transition-colors">
                    View product <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200" />
              <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">
                Browse all 25 products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="py-24" style={{ background: "#0d1f10" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#6fcf7c" }}>The Science</p>
                <h2 className="font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                  Most fertilisers feed the plant.<br />
                  <span style={{ color: "#6fcf7c" }}>Ours feed the soil.</span>
                </h2>
                <p className="text-white/50 leading-relaxed mb-10">
                  The rhizosphere — the microbially active zone around plant roots — determines how much nutrition your plants can actually access. BioCare formulations are designed to activate this zone, not just dump nutrients into it.
                </p>
              </FadeIn>
              <div className="space-y-6">
                {[
                  { title: "Silicon strengthens, not just feeds", body: "SiO₂ physically hardens cell walls against pest and fungal entry — a mechanical defence that NPK alone can't provide.", delay: 0 },
                  { title: "Humic carbon improves cation exchange", body: "Humic and fulvic acids from ancient Australian deposits help soil hold nutrients where roots can reach them.", delay: 100 },
                  { title: "Seaweed + fish + trace elements", body: "The 44-Plus range uses biostimulants alongside NPK — improving uptake efficiency, not just nutrient supply.", delay: 200 },
                ].map((item) => (
                  <FadeIn key={item.title} delay={item.delay}>
                    <div className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: "rgba(111,207,124,0.15)", border: "1px solid rgba(111,207,124,0.3)" }}>
                        <svg className="w-3 h-3" fill="none" stroke="#6fcf7c" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                        <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={300}>
                <Link href="/products" className="inline-flex items-center gap-2 mt-10 text-sm font-semibold transition-all hover:gap-3" style={{ color: "#6fcf7c" }}>
                  See all products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </FadeIn>
            </div>

            {/* Right: 44-Plus card */}
            <FadeIn delay={150}>
              <div className="rounded-3xl overflow-hidden border border-white/10" style={{ background: "#0a1a0c" }}>
                <div className="p-8 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">Flagship Farming Formula</span>
                  <h3 className="text-3xl font-bold text-white mt-2">44-Plus</h3>
                  <p className="text-sm mt-1" style={{ color: "#6fcf7c" }}>N 13.9 · P 3.7 · K 10.7 · S 10.7</p>
                </div>
                <div className="p-8">
                  <p className="text-white/50 text-sm leading-relaxed mb-6">The four biostimulants included alongside NPK — seaweed, humic acid, fish and trace elements — work synergistically to improve nutrient efficiency, soil biology and plant resilience in one application.</p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Seaweed", "Humic Acid", "Fish", "Trace Elements"].map((i) => (
                      <div key={i} className="flex items-center gap-2 rounded-xl px-3 py-2.5 border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#6fcf7c" }} />
                        <span className="text-xs font-semibold text-white/70">{i}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/our-products/11" className="inline-flex items-center gap-1.5 text-sm font-bold mt-6 transition-all hover:gap-3" style={{ color: "#6fcf7c" }}>
                    View 44-Plus Farming
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── ELLA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Chat preview */}
            <FadeIn delay={0}>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl" style={{ background: "#0a170c" }}>
                <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Ella</p>
                    <p className="text-green-500 text-xs">Online</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-green-700 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                      My citrus leaves are yellowing between the veins but the veins stay green
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
                    <div className="text-white/85 text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs leading-relaxed border border-white/10" style={{ background: "rgba(255,255,255,0.07)" }}>
                      That pattern — <strong className="text-white">yellowing between veins with green veins remaining</strong> — is classic iron or manganese deficiency. Common in alkaline soils where pH blocks uptake even when the minerals are present.
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
                    <div className="text-white/85 text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs leading-relaxed border border-white/10" style={{ background: "rgba(255,255,255,0.07)" }}>
                      I&apos;d start with <strong className="text-white">EasyTrace</strong> as a foliar — it bypasses the soil chemistry issue entirely. You should see improvement in 5–7 days.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <span className="text-white/30 text-sm flex-1">Ask about your plants...</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#2d7a3a" }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Copy */}
            <FadeIn delay={150}>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#2d7a3a" }}>Free · No account needed</p>
                <h2 className="font-bold text-gray-900 leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                  Get the right answer,<br />not a generic one.
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Ella is trained on BioCare agronomy — she knows the product range, Australian soil conditions, and how to narrow down a symptom to a specific deficiency or issue. Describe what you&apos;re seeing and she&apos;ll give you a product and a rate, not a brochure.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Yellowing leaves, poor growth, bare patches",
                    "Fruit quality, Brix levels, shelf life",
                    "Clay soils, compaction, soil biology",
                    "Germination, establishment, early root development",
                  ].map((t, i) => (
                    <div key={t} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "#e8f5e9" }}>
                        <svg className="w-3 h-3" fill="none" stroke="#2d7a3a" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {t}
                    </div>
                  ))}
                </div>
                <OpenEllaButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90 hover:scale-105 active:scale-95" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)", color: "white", boxShadow: "0 8px 30px rgba(45,122,58,0.3)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  Chat with Ella
                </OpenEllaButton>
                <p className="text-gray-400 text-xs mt-3">Ella provides general guidance. Always follow product label directions.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSlider />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </>
  );
}
