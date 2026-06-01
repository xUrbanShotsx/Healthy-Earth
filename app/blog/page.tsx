"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, blogCategories } from "@/lib/blog";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

// Fallback Unsplash images per category
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

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div style={{ background: "#f6f7f4" }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 380 }}>
        {/* Background image — vibrant, high opacity */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=85"
            alt="Healthy Earth fields"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Multi-stop overlay: left-side dark for text legibility, right stays bright */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(10,28,12,0.82) 0%, rgba(13,40,16,0.68) 45%, rgba(20,55,24,0.38) 75%, rgba(20,55,24,0.18) 100%)",
            }}
          />
          {/* Subtle bottom fade into page background */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: "linear-gradient(to bottom, transparent, #f6f7f4)" }}
          />
        </div>

        {/* Decorative grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }} />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-[2px] rounded-full" style={{ background: "#6fcf7c" }} />
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6fcf7c" }}>
              Growing Knowledge
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            The Healthy Earth<br />Chat
          </h1>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            Practical advice on soil health, lawn care, gardening and farming — from the BioCare Agronomy Team.
          </p>
        </div>
      </section>

      {/* ── Category filter ── */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3.5 no-scrollbar">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  activeCategory === cat
                    ? { background: "#1a5227", color: "#fff" }
                    : { background: "#f3f4f6", color: "#374151" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts grid ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-gray-400 font-medium text-lg">No posts in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => {
                const img = post.image || categoryFallback[post.category] || categoryFallback["Farming"];
                const accent = categoryColor[post.category] ?? "#2d7a3a";
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      <Image
                        src={img}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category pill over image */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                          style={{ background: accent, boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
                        >
                          {post.category}
                        </span>
                      </div>
                      {/* Featured badge */}
                      {post.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}>
                            ★ Featured
                          </span>
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

                      {/* Footer */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="text-xs text-gray-400">
                          <span className="font-medium text-gray-500">{post.author.split(" ")[0]}</span>
                          <span className="mx-1.5">·</span>
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <span
                          className="flex items-center gap-1 text-xs font-bold transition-all duration-200 group-hover:gap-2"
                          style={{ color: accent }}
                        >
                          Read
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Ask Ella CTA ── */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
            style={{ background: "linear-gradient(135deg, #0d1f10 0%, #1a5227 50%, #2d7a3a 100%)" }}
          >
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=60"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6fcf7c" }}>
                Got a plant problem?
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Ask Ella, your AI plant expert
              </h2>
              <p className="text-white/55 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
                Describe what&apos;s going on with your plants and Ella will diagnose the issue and recommend the right product.
              </p>
              <Link
                href="/chat"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
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
                Chat with Ella
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
