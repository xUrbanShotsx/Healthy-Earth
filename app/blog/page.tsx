"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, blogCategories } from "@/lib/blog";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

// Category accent colours
const categoryColor: Record<string, string> = {
  "Soil Health":   "#2d7a3a",
  "Lawn Care":     "#3a7d6e",
  "Gardening":     "#6a7d2d",
  "Farming":       "#7d5a2d",
  "Product Tips":  "#2d5a7d",
  "News":          "#5a2d7d",
};

function CategoryBadge({ category }: { category: string }) {
  const color = categoryColor[category] ?? "#2d7a3a";
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{ background: color + "18", color }}
    >
      {category}
    </span>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured || activeCategory !== "All");
  const filtered = activeCategory === "All"
    ? blogPosts.filter((p) => !p.featured)
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div style={{ background: "#fafaf8" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-14 pb-10 border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#2d7a3a" }}>
            Growing Knowledge
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Healthy Earth<br />Blog
            </h1>
            <p className="text-gray-500 max-w-sm md:text-right text-sm leading-relaxed">
              Practical advice on soil health, lawn care, gardening and farming — from the BioCare Agronomy Team.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category filter ───────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={
                  activeCategory === cat
                    ? { background: "#2d7a3a", color: "#fff" }
                    : { background: "#f3f4f6", color: "#374151" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured post */}
          {activeCategory === "All" && featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-10">
              <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-[5fr_4fr]">

                {/* Text side */}
                <div className="p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest text-white" style={{ background: "#2d7a3a" }}>
                      Featured
                    </span>
                    <CategoryBadge category={featured.category} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-green-700 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{featured.author}</span>
                      <span>·</span>
                      <span>{formatDate(featured.date)}</span>
                    </div>
                    <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: "#2d7a3a" }}>
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Colour/image panel */}
                <div className="relative order-1 lg:order-2 h-52 lg:h-auto min-h-[220px]" style={{ background: "linear-gradient(145deg, #1a5227 0%, #3a8a48 60%, #6abf6e 100%)" }}>
                  {featured.image ? (
                    <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                      {/* Decorative leaf pattern */}
                      <svg viewBox="0 0 120 120" className="w-24 h-24 opacity-25" fill="none">
                        <ellipse cx="60" cy="60" rx="52" ry="40" fill="white" />
                        <ellipse cx="60" cy="58" rx="36" ry="28" fill="#1a5227" />
                        <line x1="60" y1="30" x2="60" y2="90" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="60" y1="50" x2="40" y2="65" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="60" y1="58" x2="78" y2="70" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Soil Health</p>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          )}

          {/* Posts grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-3">📭</p>
              <p className="text-gray-400 font-medium">No posts in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                >
                  {/* Card colour bar */}
                  <div
                    className="h-2 w-full flex-shrink-0"
                    style={{ background: categoryColor[post.category] ?? "#2d7a3a" }}
                  />

                  {post.image && (
                    <div className="relative h-44 flex-shrink-0">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                  )}

                  <div className="p-5 flex flex-col flex-1">
                    <CategoryBadge category={post.category} />
                    <h3 className="mt-2.5 text-base font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug line-clamp-2 flex-1">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                      <span>{formatDate(post.date)}</span>
                      <span className="font-semibold group-hover:text-green-700 transition-colors" style={{ color: "#2d7a3a" }}>
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Ask Ella CTA ──────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
            <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-3">Got a plant problem?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ask Ella, your AI plant expert</h2>
            <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
              Describe your symptoms and Ella will diagnose the issue and recommend the right product.
            </p>
            <button onClick={() => (window as any).voiceflow?.chat?.open?.()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 shadow-lg"
              style={{ background: "white", color: "#1a5227" }}
            >
              Chat with Ella
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
