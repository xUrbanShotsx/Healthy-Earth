import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import OpenEllaButton from "@/components/OpenEllaButton";
import FadeIn from "@/components/FadeIn";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Healthy Earth | Australian Plant Nutrition by BioCare Fertilisers",
  description: "Healthy Earth means Heal Your Earth. Discover the story behind our fertiliser philosophy and why we believe soil health is the foundation of human health.",
};

const approach = [
  {
    num: "01",
    title: "Broad-spectrum nutrition",
    body: "Where most fertilisers supply one to four elements, our formulations are designed around the full spectrum that soils, crops and the food chain require. SilicaMax, Trace Elements Volcanic, CalMag 51 — each targets a specific gap in the nutritional cycle.",
  },
  {
    num: "02",
    title: "Soil biology, not just chemistry",
    body: "Soil is not inert. It is a living system. Products like Humic Carbon Liquid are formulated to feed the microbial community that makes nutrients available to plants. Healthy biology means less fertiliser is locked away and more reaches the plant.",
  },
  {
    num: "03",
    title: "Formulated for Australian conditions",
    body: "Our parent company BioCare Fertilisers has worked across Australian broadacre, horticulture and turf for over three decades. Every Healthy Earth product starts from Australian soil chemistry — its pH profiles, mineral imbalances and climate.",
  },
  {
    num: "04",
    title: "Accessible to every grower",
    body: "That agronomic depth used to require hiring an expert. Ella changes that. Describe your problem and get a science-grounded recommendation in seconds, for free. The same expertise, available to anyone.",
  },
];

const stats = [
  { value: "30+", label: "Years of research", sub: "BioCare Fertilisers, NSW" },
  { value: "25", label: "Formulations", sub: "Built for Australian conditions" },
  { value: "0", label: "Synthetic additives", sub: "Across the entire range" },
  { value: "100%", label: "Australian-made", sub: "Owned, tested, produced here" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Grain overlay (fixed, non-scrolling) ── */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex flex-col justify-end"
        style={{ background: "#0b1a0d", minHeight: "88vh", paddingBottom: "5rem" }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(45,122,58,0.22) 0%, transparent 65%)" }}
        />
        {/* Horizontal rule accent */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* Eyebrow */}
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 mb-10">
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#6fcf7c", letterSpacing: "0.22em" }}
              >
                Our Story
              </span>
              <span className="w-8 h-px" style={{ background: "#6fcf7c", opacity: 0.4 }} />
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={80} y={40}>
            <h1
              className={`${cormorant.className} text-white leading-[0.95]`}
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Heal Your
              <br />
              <em style={{ color: "#a5d6a7", fontStyle: "italic" }}>Earth.</em>
            </h1>
          </FadeIn>

          {/* Sub */}
          <FadeIn delay={180}>
            <p
              className="mt-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.05rem" }}
            >
              Fertilisers have the power to do great good or great harm. We built Healthy Earth around that responsibility.
            </p>
          </FadeIn>

          {/* Scroll cue */}
          <FadeIn delay={300}>
            <div className="mt-14 flex items-center gap-3" style={{ color: "rgba(255,255,255,0.25)" }}>
              <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />
              <span className="text-xs tracking-widest uppercase">Scroll</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-32 md:py-40" style={{ background: "#FDFBF7" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Eyebrow */}
          <FadeIn>
            <span
              className="inline-block text-[10px] font-semibold uppercase tracking-[0.22em] mb-10"
              style={{ color: "#2d7a3a" }}
            >
              The Problem We Set Out to Solve
            </span>
          </FadeIn>

          {/* Editorial split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — big serif statement */}
            <FadeIn delay={60} className="lg:col-span-5">
              <h2
                className={`${cormorant.className} text-gray-900 leading-[1.05]`}
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 600, letterSpacing: "-0.01em" }}
              >
                Fertilisers are the most powerful input in agriculture. Most are being used the wrong way.
              </h2>
              {/* Decorative rule */}
              <div className="mt-8 w-12 h-0.5" style={{ background: "#2d7a3a" }} />
            </FadeIn>

            {/* Right — body copy */}
            <div className="lg:col-span-7 space-y-6">
              {[
                "Fertilisers are the one agricultural input that is broadcast across entire landscapes. Their composition determines the nutritional quality of our soils, our crops, our pastures — and ultimately the food we eat. That is not a small thing.",
                "Modern, high-yield agriculture accelerates soil nutrient depletion. Intensive cropping can begin to significantly reduce soil mineral reserves within a few seasons. The land gives, and conventional farming takes — without restoring the full spectrum of what was removed.",
                "While many plants will survive on a relatively small suite of elements, animals and humans require a much broader range of minerals to maintain health. Most conventional fertilisers supply only one to four elements. That narrow focus helps crops grow — but it does not restore the full nutritional balance the soil and the food chain need.",
                "The outcome is food that fills bellies but often lacks the nutrients required to support long-term health, vitality and disease resistance. We started Healthy Earth because we believed there was a better way.",
              ].map((para, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <p className="leading-relaxed" style={{ color: "#4a5568", fontSize: "1.02rem" }}>{para}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "#0d1f10" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(45,122,58,0.15) 0%, transparent 60%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn y={20}>
            <div className="flex gap-6 items-start">
              <span className={`${cormorant.className} flex-shrink-0 leading-none`} style={{ fontSize: "6rem", color: "#2d7a3a", opacity: 0.5, lineHeight: 0.7 }}>&ldquo;</span>
              <blockquote>
                <p
                  className={`${cormorant.className} text-white leading-[1.12]`}
                  style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)", fontWeight: 500, fontStyle: "italic" }}
                >
                  Healthy soil doesn&apos;t just grow bigger crops. It grows food that actually nourishes the people who eat it.
                </p>
                <cite className="block mt-6 text-xs font-semibold uppercase tracking-[0.18em] not-italic" style={{ color: "#6fcf7c" }}>
                  Healthy Earth · BioCare Fertilisers, New South Wales
                </cite>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-32 md:py-40" style={{ background: "#FDFBF7" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.22em] mb-10" style={{ color: "#2d7a3a" }}>
              How We Work
            </span>
          </FadeIn>
          <FadeIn delay={60}>
            <h2
              className={`${cormorant.className} text-gray-900 leading-tight mb-20`}
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 600, letterSpacing: "-0.01em" }}
            >
              Built on 30 years of<br />Australian soil science.
            </h2>
          </FadeIn>

          <div className="space-y-0 divide-y" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
            {approach.map((item, i) => (
              <FadeIn key={item.num} delay={i * 60}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 group">
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs font-bold" style={{ color: "#2d7a3a", letterSpacing: "0.08em" }}>{item.num}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3
                      className={`${cormorant.className} text-gray-900 leading-tight`}
                      style={{ fontSize: "1.55rem", fontWeight: 600 }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="leading-relaxed" style={{ color: "#5a6872", fontSize: "0.97rem" }}>{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — Double-Bezel Bento ── */}
      <section className="py-24 md:py-32" style={{ background: "#f0ede6" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.22em] mb-12" style={{ color: "#2d7a3a" }}>
              By the numbers
            </span>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 70}>
                {/* Outer shell */}
                <div
                  className="p-1.5 rounded-[1.6rem]"
                  style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  {/* Inner core */}
                  <div
                    className="rounded-[calc(1.6rem-6px)] p-7 flex flex-col gap-3"
                    style={{
                      background: "#FDFBF7",
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9)",
                    }}
                  >
                    <div
                      className={`${cormorant.className} font-bold text-gray-900`}
                      style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
                    >
                      {s.value}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">{s.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#8a9a8a" }}>{s.sub}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 md:py-40" style={{ background: "#FDFBF7" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <FadeIn className="lg:col-span-7">
              <h2
                className={`${cormorant.className} text-gray-900 leading-[1.02]`}
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                Ready to build<br />
                <em style={{ fontStyle: "italic", color: "#2d7a3a" }}>healthier soil?</em>
              </h2>
            </FadeIn>
            <FadeIn delay={100} className="lg:col-span-5 flex flex-col gap-4">
              <p className="leading-relaxed mb-2" style={{ color: "#6b7a6b", fontSize: "1rem" }}>
                Browse our range or talk to Ella — she&apos;ll point you to exactly what your soil, lawn or crop needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Button-in-button pattern */}
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full font-semibold text-sm text-white transition-all active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #1a5227, #2d7a3a)",
                    boxShadow: "0 8px 30px rgba(45,122,58,0.28)",
                    transition: "all 0.5s cubic-bezier(0.32,0.72,0,1)",
                  }}
                >
                  Browse Products
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </Link>
                <OpenEllaButton
                  className="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full font-semibold text-sm transition-all active:scale-[0.98]"
                  style={{
                    border: "1px solid rgba(45,122,58,0.3)",
                    color: "#2d7a3a",
                    background: "transparent",
                    transition: "all 0.5s cubic-bezier(0.32,0.72,0,1)",
                  }}
                >
                  Ask Ella
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    style={{ background: "rgba(45,122,58,0.08)" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </span>
                </OpenEllaButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
