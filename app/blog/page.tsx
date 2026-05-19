"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, blogCategories } from "@/lib/blog";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured);
  const filtered = blogPosts.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        {/* subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Growing Knowledge</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Healthy Earth Blog</h1>
          <p className="text-white/70 text-lg max-w-2xl">Practical advice on soil health, lawn care, gardening and farming — from the BioCare Agronomy Team.</p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "text-white border-transparent shadow-sm"
                    : "text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700 bg-white"
                }`}
                style={activeCategory === cat ? { background: "#2d7a3a", borderColor: "#2d7a3a" } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: "#f7f4ef" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured post — only when "All" selected */}
          {activeCategory === "All" && featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-12">
              <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image / colour block */}
                  <div className="relative h-64 lg:h-auto min-h-[280px]" style={{ background: "linear-gradient(135deg, #1a5227, #4caf50)" }}>
                    {featured.image ? (
                      <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white/80 p-8">
                          <div className="text-6xl mb-4">🌱</div>
                          <p className="text-sm font-medium uppercase tracking-widest opacity-60">Featured Article</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest" style={{ background: "rgba(0,0,0,0.3)" }}>
                        ★ Featured
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "#e8f5e9", color: "#2d7a3a" }}>
                      {featured.category}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "#2d7a3a" }}>
                        {featured.author.charAt(0)}
                      </span>
                      <span>{featured.author}</span>
                      <span>·</span>
                      <span>{formatDate(featured.date)}</span>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: "#2d7a3a" }}>
                        Read article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-lg font-medium">No posts in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered
                .filter((p) => !(activeCategory === "All" && p.featured))
                .map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-green-200">
                    {/* Card image / colour header */}
                    <div className="relative h-48" style={{ background: "linear-gradient(135deg, #1a5227, #4caf50)" }}>
                      {post.image ? (
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-end p-4">
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white/90" style={{ background: "rgba(0,0,0,0.25)" }}>
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      {!post.image && null}
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3" style={{ background: "#e8f5e9", color: "#2d7a3a" }}>
                        {post.category}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                        <span>{formatDate(post.date)}</span>
                        <span className="font-medium group-hover:text-green-700 transition-colors" style={{ color: "#2d7a3a" }}>Read →</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA — Ask Ella */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d7a3a" }}>Got a plant problem?</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ask Ella, your AI plant expert</h2>
          <p className="text-gray-500 mb-8">Describe your symptoms — Ella will diagnose the issue and recommend the right Healthy Earth product for your situation.</p>
          <Link href="/chat-assistant" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:opacity-90 transition-all" style={{ background: "linear-gradient(135deg, #2d7a3a, #4caf50)" }}>
            <span>Chat with Ella</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
