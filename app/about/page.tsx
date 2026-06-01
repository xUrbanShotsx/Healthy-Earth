import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OpenEllaButton from "@/components/OpenEllaButton";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Healthy Earth | BioCare Fertilisers",
  description: "Healthy Earth means Heal Your Earth. Built on 30 years of Australian soil science.",
};

const pillars = [
  {
    img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
    label: "Soil First",
    title: "Feed the soil, not just the plant",
    body: "Our formulations restore the full mineral spectrum that modern farming strips away — not just N, P and K.",
  },
  {
    img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    label: "Australian-Made",
    title: "Built for Australian conditions",
    body: "30 years working across broadacre, horticulture and turf in Australia. Every product starts from Australian soil chemistry.",
  },
  {
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    label: "Food Quality",
    title: "Nutrition flows up the food chain",
    body: "Mineral-rich soil grows mineral-rich food. That's the chain we're trying to restore — from the ground up.",
  },
];

const stats = [
  { value: "30+", label: "Years of research" },
  { value: "25", label: "Formulations" },
  { value: "0", label: "Synthetic additives" },
  { value: "100%", label: "Australian-made" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO — full image ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85"
          alt="Australian farmland at golden hour"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(10,28,12,0.72) 0%, rgba(10,28,12,0.35) 60%, rgba(10,28,12,0.60) 100%)" }} />

        {/* Content */}
        <div className="relative flex flex-col justify-end h-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 md:pb-28" style={{ minHeight: "90vh" }}>
          <FadeIn delay={0}>
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#a5d6a7" }}>
              Our Story
            </span>
          </FadeIn>
          <FadeIn delay={80} y={40}>
            <h1
              className={`text-white leading-[0.95]`}
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Heal Your<br />
              <span style={{ color: "#a5d6a7" }}>Earth.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mt-6 max-w-md leading-relaxed text-sm md:text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
              Fertilisers have the power to do great good or great harm. We built Healthy Earth around that responsibility.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STORY — image + text ── */}
      <section className="py-24 md:py-32" style={{ background: "#FDFBF7" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <FadeIn delay={0}>
              {/* Outer bezel */}
              <div className="p-1.5 rounded-[2rem]" style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.07)" }}>
                {/* Inner */}
                <div className="relative rounded-[calc(2rem-6px)] overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85"
                    alt="Healthy soil and plants"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Text */}
            <div>
              <FadeIn delay={100}>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#2d7a3a" }}>
                  The Problem We Solve
                </span>
              </FadeIn>
              <FadeIn delay={160}>
                <h2
                  className={`text-gray-900 leading-tight mb-6`}
                  style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  Most conventional fertilisers supply only 1–4 elements. The food chain needs far more.
                </h2>
              </FadeIn>
              <FadeIn delay={220}>
                <p className="leading-relaxed mb-5" style={{ color: "#5a6872", fontSize: "1rem" }}>
                  Modern high-yield agriculture depletes soil mineral reserves within a few seasons. While crops survive on a narrow suite of nutrients, animals and humans require a much broader range to maintain health.
                </p>
              </FadeIn>
              <FadeIn delay={280}>
                <p className="leading-relaxed" style={{ color: "#5a6872", fontSize: "1rem" }}>
                  The result? Food that fills bellies but lacks the nutrition to support long-term health and vitality. We started Healthy Earth to fix that — from the ground up.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS — image cards ── */}
      <section className="py-24 md:py-32" style={{ background: "#f0ede6" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#2d7a3a" }}>What drives us</span>
          </FadeIn>
          <FadeIn delay={60}>
            <h2
              className={`text-gray-900 mb-14`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.1 }}
            >
              Three things we never<br />compromise on.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <FadeIn key={p.label} delay={i * 80}>
                {/* Outer bezel */}
                <div
                  className="group h-full p-1.5 rounded-[2rem] transition-all duration-700"
                  style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  {/* Inner */}
                  <div
                    className="rounded-[calc(2rem-6px)] overflow-hidden h-full flex flex-col"
                    style={{ background: "#FDFBF7", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9)" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ height: "220px" }}>
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Label pill */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                          style={{ background: "rgba(13,31,16,0.7)", color: "#a5d6a7", backdropFilter: "blur(8px)" }}
                        >
                          {p.label}
                        </span>
                      </div>
                    </div>
                    {/* Text */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3
                        className={`text-gray-900 mb-3`}
                        style={{ fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.2 }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7a6b" }}>{p.body}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 md:py-24" style={{ background: "#0d1f10" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 70}>
                <div className="text-center">
                  <div
                    className={`font-bold text-white`}
                    style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-widest" style={{ color: "#6fcf7c" }}>
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 md:py-36" style={{ background: "#FDFBF7" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <FadeIn>
            <h2
              className={`text-gray-900 leading-tight mb-6`}
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Ready to build<br />
              <span style={{ color: "#2d7a3a" }}>healthier soil?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="mb-10 leading-relaxed" style={{ color: "#6b7a6b", fontSize: "1rem", maxWidth: "420px", margin: "0 auto 2.5rem" }}>
              Browse our range or talk to Ella — she&apos;ll point you to exactly what your soil needs.
            </p>
          </FadeIn>
          <FadeIn delay={140}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-3 pl-7 pr-2 py-2 rounded-full font-semibold text-sm text-white transition-all duration-500 active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)", boxShadow: "0 8px 30px rgba(45,122,58,0.28)" }}
              >
                Browse Products
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </Link>
              <OpenEllaButton
                className="group inline-flex items-center justify-center gap-3 pl-7 pr-2 py-2 rounded-full font-semibold text-sm transition-all duration-500 active:scale-[0.98]"
                style={{ border: "1px solid rgba(45,122,58,0.3)", color: "#2d7a3a" }}
              >
                Ask Ella
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(45,122,58,0.08)" }}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </span>
              </OpenEllaButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
