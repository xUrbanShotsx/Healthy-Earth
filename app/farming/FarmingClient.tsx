"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { FarmingPage, FarmingInfoSection, FarmingStat } from "@/lib/sanity-queries";

// ── Scroll-reveal hook ────────────────────────────────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Animated counter ──────────────────────────────────────────────────────────
function parseStatValue(raw: string): { prefix: string; num: number; suffix: string } {
  // Match optional leading text, then digits (with optional commas), then trailing text
  const m = raw.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: raw };
  return { prefix: m[1], num: parseInt(m[2].replace(/,/g, ""), 10), suffix: m[3] };
}

function formatNum(n: number): string {
  return n >= 1000 ? n.toLocaleString("en-AU") : String(n);
}

function AnimatedStat({ stat, delay = 0 }: { stat: FarmingStat; delay?: number }) {
  const { ref, visible } = useReveal(0.3);
  const [count, setCount] = useState(0);
  const { prefix, num, suffix } = parseStatValue(stat.value);

  useEffect(() => {
    if (!visible || num === 0) return;
    const duration = 1600;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(progress * num));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [visible, num]);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <p className="font-bold text-white mb-1" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
        {prefix}{visible ? formatNum(count) : "0"}{suffix}
      </p>
      <p className="text-white/55 text-xs leading-snug max-w-[160px] mx-auto">{stat.label}</p>
    </div>
  );
}

// ── Reveal wrapper ────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, y = 30, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.75s cubic-bezier(0.32,0.72,0,1) ${delay}ms, transform 0.75s cubic-bezier(0.32,0.72,0,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Info Section icons ────────────────────────────────────────────────────────
const ICON_SVG: Record<string, string> = {
  soil:    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
  leaf:    "M17 8C8 10 5.9 16.17 3.82 21h3.43C9 18 11.91 15 17 15c3.68 0 5 3 5 3s-1.1-10-5-10z",
  droplet: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
  sun:     "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-12.37l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.41 0l1.06-1.06a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0zM7.05 18.36l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.41 0l1.06-1.06a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0z",
  sprout:  "M12 22V12m0 0C12 7 7 4 2 4c0 5 3 9 7 10M12 12c0-5 5-8 10-8 0 5-3 9-7 10",
  chart:   "M3 3v18h18M7 16l4-4 4 4 4-4",
  shield:  "M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z",
  wheat:   "M3 17l4-8 4 4 4-6 4 10",
};

function SectionIcon({ name }: { name: string }) {
  const d = ICON_SVG[name] ?? ICON_SVG.leaf;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d={d} />
    </svg>
  );
}

// ── Interactive Info Card ─────────────────────────────────────────────────────
function InfoCard({ sec, index }: { sec: FarmingInfoSection; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, visible } = useReveal();
  const delay = index * 100;

  return (
    <div
      ref={ref}
      onClick={() => setExpanded(!expanded)}
      className="relative overflow-hidden flex flex-col gap-4 cursor-pointer select-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.32,0.72,0,1) ${delay}ms, transform 0.7s cubic-bezier(0.32,0.72,0,1) ${delay}ms`,
        background: "white",
        border: expanded ? "1.5px solid #2d7a3a" : "1.5px solid rgba(0,0,0,0.07)",
        boxShadow: expanded ? "0 12px 40px rgba(45,122,58,0.15)" : "0 2px 16px rgba(0,0,0,0.05)",
        padding: "2rem",
        borderRadius: 0,
      }}
    >
      {/* Animated left accent */}
      <div
        className="absolute top-0 left-0 w-1"
        style={{
          background: "linear-gradient(to bottom, #2d7a3a, #8bc34a)",
          height: expanded ? "100%" : "48px",
          transition: "height 0.5s cubic-bezier(0.32,0.72,0,1)",
        }}
      />

      <div className="flex items-start gap-4 pl-4">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: expanded ? "#2d7a3a" : "#e8f5e9",
            color: expanded ? "white" : "#2d7a3a",
          }}
        >
          <SectionIcon name={sec.icon || "leaf"} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-base leading-snug mb-1">{sec.title}</h3>
          {sec.highlight && (
            <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ background: "#e8f5e9", color: "#2d7a3a" }}>
              {sec.highlight}
            </span>
          )}
        </div>
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-400 mt-0.5 transition-transform duration-300"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div
        style={{
          maxHeight: expanded ? "300px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        <p className="text-gray-600 text-sm leading-relaxed pl-4 pt-2">{sec.body}</p>
      </div>
    </div>
  );
}

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "What is the difference between biological and synthetic fertilisers?",
    a: "Synthetic fertilisers deliver nutrients directly to the plant but bypass the soil food web, often leading to compaction, salinity build-up, and reduced microbial diversity over time. BioCare biological fertilisers feed the soil ecosystem — stimulating beneficial bacteria and fungi that unlock locked nutrients, improve water retention, and build long-term soil carbon. The result is healthier crops with lower input costs each season.",
  },
  {
    q: "How does SilicaMax help crops survive drought?",
    a: "SilicaMax delivers 51% plant-available SiO₂, which deposits in cell walls and leaf cuticles to reduce transpiration loss by up to 30%. Silicon-strengthened plants maintain turgor pressure longer under heat stress, suffer less oxidative damage, and recover faster after dry spells. It also improves root architecture, helping plants access deeper soil moisture.",
  },
  {
    q: "Can BioCare products be used alongside conventional fertilisers?",
    a: "Yes. BioCare products are designed as complementary inputs, not replacements. Most growers start by pairing our biologicals with their existing urea or MAP program at reduced synthetic rates, then gradually transition as soil biology recovers. We recommend starting with SilicaMax or 44-Plus as easy additions to any existing regime.",
  },
  {
    q: "How quickly will I see results in the field?",
    a: "Visible plant responses — greener canopy, faster tiller development, stronger root mass — typically appear within 3–6 weeks of the first application. Measurable soil biology improvements (PLFA counts, aggregate stability) are usually evident by the second season. Broadacre growers often report meaningful yield lifts from year one, with compounding gains over a 3-year program.",
  },
  {
    q: "Are BioCare products safe near waterways and stock?",
    a: "All BioCare farming products are formulated with food-grade inputs and carry no withholding periods for grazing stock. They are non-toxic to aquatic life at label rates. Unlike conventional fertilisers, they do not contribute to algal bloom risk because nutrients are bound to soil biology rather than sitting in soluble form available for runoff.",
  },
  {
    q: "What's the best time of year to apply biological fertilisers?",
    a: "Soil biologicals perform best when soil temperature is above 10°C and moisture is adequate — typically autumn (after break-of-season rain) and spring. Avoid applying to hot, dry, cracking soil as microbial activity will be suppressed. For winter crops, a pre-sowing in-furrow application of 44-Plus combined with a late-tillering SilicaMax foliar spray gives the best response.",
  },
  {
    q: "Do I need special equipment to apply these products?",
    a: "No specialised equipment is required. All BioCare farming liquids are compatible with standard boomspray, centre-pivot fertigation, and in-furrow drip systems. They can also be mixed with most broadleaf herbicides and fungicides in a jar test before tank-mixing. Always check compatibility and apply at label rates.",
  },
  {
    q: "How do I work out application rates for my property?",
    a: "Application rates vary by crop type, soil carbon baseline, and target yield. As a starting point, most broadacre growers apply SilicaMax at 2–4 L/ha at tillering and again at flag leaf, and 44-Plus at 3–5 L/ha at sowing. Ella, our AI agronomist, can build a property-specific program based on your crop, soil type, and season — just ask her.",
  },
];

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 60}ms, transform 0.6s ease ${index * 60}ms`,
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
      >
        <span className="font-semibold text-gray-900 text-base leading-snug pr-2">{item.q}</span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5"
          style={{ background: open ? "#2d7a3a" : "#e8f5e9", color: open ? "white" : "#2d7a3a" }}
        >
          <svg className="w-4 h-4 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        <p className="text-gray-600 text-sm leading-relaxed pb-6 max-w-2xl">{item.a}</p>
      </div>
    </div>
  );
}

// ── Drought Tip ───────────────────────────────────────────────────────────────
function DroughtTip({ tip, index }: { tip: string; index: number }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className="flex items-start gap-4 p-4 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(30px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: "#2d7a3a", color: "white" }}>
        {index + 1}
      </span>
      <p className="text-white/70 text-sm leading-relaxed">{tip}</p>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function FarmingClient({ data }: { data: FarmingPage }) {
  const [heroReady, setHeroReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Hero entrance
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Parallax scroll
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const introParas = data.introBody?.split("\n\n").filter(Boolean) ?? [];

  function openElla(fullscreen = false) {
    window.dispatchEvent(new CustomEvent("ella:open", { detail: { fullscreen } }));
  }

  return (
    <>
      {/* ── Full-screen Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex items-center" style={{ height: "100svh", minHeight: 600, background: "#0b1f0e" }}>
        {/* Parallax image */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.35}px)`, willChange: "transform" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
            alt="Australian farm"
            fill
            className="object-cover object-center scale-110"
            priority
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(4,14,5,0.93) 0%, rgba(8,24,10,0.78) 55%, rgba(14,38,16,0.45) 100%)" }} />

        {/* Animated grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Tagline */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span className="w-10 h-[2px] rounded-full" style={{ background: "#6fcf7c" }} />
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6fcf7c" }}>
              {data.heroTagline || "Regenerative Farming"}
            </p>
          </div>

          {/* Headline */}
          <h1
            className="font-bold text-white max-w-3xl mb-6"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
            }}
          >
            {data.heroTitle}
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/60 max-w-lg text-base leading-relaxed mb-12"
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
            }}
          >
            {data.heroSubtitle}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3"
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.9s ease 0.55s, transform 0.9s ease 0.55s",
            }}
          >
            <Link
              href="/products?category=Farming"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white text-sm transition-all duration-300 hover:gap-3 hover:opacity-90 active:scale-95"
              style={{ background: "#2d7a3a", borderRadius: 9999 }}
            >
              Browse Farming Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <button
              onClick={() => openElla(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white text-sm transition-all duration-300 hover:bg-white/10 active:scale-95"
              style={{ border: "1px solid rgba(255,255,255,0.25)", borderRadius: 9999 }}
            >
              Ask Ella
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: heroReady ? 1 : 0,
            transition: "opacity 1.2s ease 1s",
          }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-[1px] h-10 overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
            <div
              className="w-full bg-white/60"
              style={{ height: "40%", animation: "scrollLine 1.8s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────────────── */}
      {data.stats?.length > 0 && (
        <section style={{ background: "#2d7a3a" }} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {data.stats.map((s, i) => <AnimatedStat key={s._key} stat={s} delay={i * 120} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#2d7a3a" }}>Our Philosophy</p>
                <h2 className="font-bold text-gray-900 mb-8 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.01em" }}>
                  {data.introTitle}
                </h2>
              </Reveal>
              <div className="space-y-5">
                {introParas.map((para, i) => (
                  <Reveal key={i} delay={i * 120}>
                    <p className="text-gray-600 leading-relaxed text-base">{para}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right side visual */}
            <Reveal delay={200}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
                  alt="Soil health"
                  fill
                  className="object-cover"
                />
                {/* Stat overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="p-5 rounded-xl"
                    style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Regenerative farming</p>
                    <p className="text-white font-bold text-lg leading-snug">Feeds crops. Rebuilds soil. Reduces dependency.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Info Sections — Interactive Cards ─────────────────────────────────── */}
      {data.infoSections?.length > 0 && (
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#2d7a3a" }}>Key Principles</p>
              <h2 className="font-bold text-gray-900 mb-6 leading-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.01em" }}>
                How Regenerative Nutrition Works
              </h2>
              <p className="text-gray-400 text-sm mb-14">Tap each card to learn more.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.infoSections.map((sec, i) => (
                <InfoCard key={sec._key} sec={sec} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Drought Protection ────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "#0b1f0e" }}>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1600&q=60"
            alt="Dry cracked earth"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,18,7,0.97), rgba(10,30,12,0.88))" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-[2px] rounded-full" style={{ background: "#f59e0b" }} />
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f59e0b" }}>Drought Resilience</p>
                </div>
                <h2 className="font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.01em" }}>
                  {data.droughtTitle}
                </h2>
                <p className="text-white/60 leading-relaxed mb-8 text-base">{data.droughtIntro}</p>
              </Reveal>
              {data.droughtClosing && (
                <Reveal delay={150}>
                  <p className="text-white/40 text-sm leading-relaxed border-l-2 pl-4 italic mb-10" style={{ borderColor: "#f59e0b" }}>
                    {data.droughtClosing}
                  </p>
                </Reveal>
              )}
              <Reveal delay={200}>
                <Link href="/products?category=Farming" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90" style={{ background: "#2d7a3a" }}>
                  View Farming Products
                </Link>
              </Reveal>
            </div>

            {data.droughtTips?.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>Practical Strategies</p>
                {data.droughtTips.map((tip, i) => (
                  <DroughtTip key={i} tip={tip} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Q&A ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sticky heading col */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#2d7a3a" }}>Common Questions</p>
                <h2 className="font-bold text-gray-900 leading-tight mb-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.01em" }}>
                  Farming Q&amp;A
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Answers to the questions we get most from Australian broadacre and horticulture growers.
                </p>
                <button
                  onClick={() => openElla(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "#2d7a3a", color: "white" }}
                >
                  Ask Ella anything
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>
              </Reveal>
            </div>

            {/* FAQ accordion col */}
            <div className="lg:col-span-2">
              {FAQ_ITEMS.map((item, i) => (
                <FAQItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#2d7a3a" }}>Get Started</p>
            <h2 className="font-bold text-gray-900 mb-4 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.01em" }}>
              {data.ctaTitle}
            </h2>
            <p className="text-gray-500 mb-10 text-base max-w-xl mx-auto leading-relaxed">{data.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products?category=Farming" className="px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90 shadow-sm active:scale-95" style={{ background: "#2d7a3a" }}>
                Browse Farming Range
              </Link>
              <button
                onClick={() => openElla(true)}
                className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 transition-all hover:bg-green-50 active:scale-95"
                style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}
              >
                Ask Ella
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </>
  );
}
