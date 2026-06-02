"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, blogCategories } from "@/lib/blog";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

const categoryFallback: Record<string, string> = {
  "Soil Health":  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=75",
  "Lawn Care":    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75",
  "Gardening":    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=75",
  "Farming":      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "Product Tips": "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=75",
  "News":         "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=75",
};

const categoryColor: Record<string, string> = {
  "Soil Health":  "#2d7a3a",
  "Lawn Care":    "#3a7d6e",
  "Gardening":    "#6a7d2d",
  "Farming":      "#7d5a2d",
  "Product Tips": "#2d5a7d",
  "News":         "#5a2d7d",
};

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, y = 24, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const { ref, visible } = useInView();
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

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const featured = blogPosts.find((p) => p.featured);
  const filtered = activeCategory === "All"
    ? blogPosts.filter((p) => !p.featured)
    : blogPosts.filter((p) => p.category === activeCategory);

  const showFeatured = activeCategory === "All" && featured;

  return (
    <div style={{ background: "#f6f7f4" }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 520 }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=85"
            alt="Healthy Earth fields"
            fill
            className="object-cover object-center scale-105 transition-transform duration-[3000ms]"
            style={{ transform: heroLoaded ? "scale(1)" : "scale(1.05)" }}
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,22,10,0.88) 0%, rgba(13,35,15,0.72) 50%, rgba(20,50,22,0.45) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, #f6f7f4)" }} />
        </div>

        {/* Floating tag */}
        <div className="absolute top-8 right-8 hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {blogPosts.length} Articles Published
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end" style={{ minHeight: 520, paddingBottom: "5rem" }}>
          <div
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] rounded-full" style={{ background: "#6fcf7c" }} />
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6fcf7c" }}>Growing Knowledge</p>
            </div>
            <h1 className="font-bold text-white leading-[1.05] mb-5" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}>
              The Healthy Earth<br />
              <span style={{ background: "linear-gradient(90deg, #6fcf7c, #a5d6a7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Chat
              </span>
            </h1>
            <p className="text-white/60 max-w-lg text-base leading-relaxed">
              Practical advice on soil health, lawn care, gardening and farming — from the BioCare Agronomy Team.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sticky category filter ── */}
      <div className="sticky top-0 z-30 bg-white/90 border-b border-gray-100" style={{ backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95"
                style={
                  activeCategory === cat
                    ? { background: "#1a5227", color: "#fff", boxShadow: "0 4px 12px rgba(26,82,39,0.3)" }
                    : { background: "#f3f4f6", color: "#374151" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Featured post — large horizontal card */}
        {showFeatured && (() => {
          const img = featured!.image || categoryFallback[featured!.category] || categoryFallback["Farming"];
          const accent = categoryColor[featured!.category] ?? "#2d7a3a";
          return (
            <Reveal className="mb-12">
              <Link
                href={`/blog/${featured!.slug}`}
                className="group grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl block"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.09)", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ minHeight: 300 }}>
                  <Image
                    src={img}
                    alt={featured!.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.15), transparent)" }} />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#1a5227", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>★ Featured</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: accent, boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>{featured!.category}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <p className="text-xs text-gray-400 mb-4">{featured!.author} · {formatDate(featured!.date)}</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-green-700 transition-colors">
                      {featured!.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-sm line-clamp-4">{featured!.excerpt}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 font-bold text-sm transition-all duration-200 group-hover:gap-3" style={{ color: accent }}>
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })()}

        {/* Section label */}
        {showFeatured && (
          <Reveal className="mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Latest Articles</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </Reveal>
        )}

        {/* Posts grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-gray-400 font-medium text-lg">No posts in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => {
              const img = post.image || categoryFallback[post.category] || categoryFallback["Farming"];
              const accent = categoryColor[post.category] ?? "#2d7a3a";
              return (
                <Reveal key={post.slug} delay={i * 60}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl block h-full"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden flex-shrink-0" style={{ height: 200 }}>
                      <Image
                        src={img}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-600 group-hover:scale-108"
                      />
                      {/* Dark gradient at bottom of image */}
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
                      {/* Category over image */}
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: accent }}>
                          {post.category}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}>★</span>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-green-700 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="text-xs text-gray-400">
                          <span className="font-medium text-gray-500">{post.author.split(" ")[0]}</span>
                          <span className="mx-1.5">·</span>
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-bold transition-all duration-200 group-hover:gap-2" style={{ color: accent }}>
                          Read
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Ask Ella CTA ── */}
      <Reveal className="pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "#0d1f10" }}>
          {/* Background photo */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=60"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(45,122,58,0.3), transparent)" }} />

          <div className="relative z-10 p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#6fcf7c" }}>Got a plant problem?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Ask Ella, your<br />AI plant expert.
              </h2>
              <p className="text-white/55 leading-relaxed">
                Describe what&apos;s going on with your plants and Ella will diagnose the issue and recommend the right BioCare product — instantly, free.
              </p>
            </div>

            {/* CTA card */}
            <div className="flex flex-col items-start md:items-end gap-5">
              {/* Mini chat preview */}
              <div className="w-full max-w-xs rounded-2xl p-4 border border-white/10" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
                  <span className="text-white text-xs font-semibold">Ella</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ml-auto" />
                </div>
                <p className="text-white/60 text-xs leading-relaxed italic">&ldquo;My leaves are yellowing and I don&apos;t know why...&rdquo;</p>
                <div className="mt-2 h-px bg-white/10" />
                <p className="text-white/50 text-xs leading-relaxed mt-2">That sounds like a <span className="text-green-400 font-semibold">magnesium deficiency</span>. I&apos;d recommend...</p>
              </div>

              <Link
                href="/chat"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #1a5227, #2d7a3a)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 8px 30px rgba(45,122,58,0.5)",
                  color: "white",
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#a5d6a7" }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#6fcf7c" }} />
                </span>
                Chat with Ella — Free
                <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <style>{`
        .group:hover .group-hover\\:scale-108 { transform: scale(1.08); }
        .duration-400 { transition-duration: 400ms; }
        .duration-600 { transition-duration: 600ms; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
