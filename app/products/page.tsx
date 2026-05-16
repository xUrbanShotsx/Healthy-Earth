"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, categories } from "@/lib/products";
import type { Product } from "@/lib/products";
import { Icon } from "@/components/Icon";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.formula.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      {/* Hero */}
      <section className="py-14" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Our Range</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Products</h1>
          <p className="text-white/70 text-lg max-w-2xl">Scientifically formulated plant nutrition for Australian lawns, gardens and farms.</p>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden" style={{ background: "#f7f4ef" }}>
        {/* Decorative backdrop */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #2d7a3a18 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #8bc34a22, transparent 70%)" }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #2d7a3a18, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #ffffff60, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Search + filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all"
                  style={activeCategory === cat
                    ? { background: "#2d7a3a", color: "white", borderColor: "#2d7a3a" }
                    : { borderColor: "#e5e7eb", color: "#6b7280" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-400 mb-6">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try a different search or category, or ask Ella for a recommendation.</p>
              <Link href="/chat-assistant" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "#2d7a3a" }}>Ask Ella</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product: Product) => (
                <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-white shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col">
                  <div className="h-44 flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${product.color}12, ${product.color}30)` }}>
                    {product.image ? (
                      <Image src={product.image} alt={product.shortName} width={320} height={176} className="w-full h-full object-cover" />
                    ) : (
                      <span style={{ color: product.color }}><Icon name={product.icon} className="w-20 h-20" /></span>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full text-white inline-block" style={{ background: product.color }}>
                        {product.category}
                      </span>
                      <div className="flex gap-1 flex-wrap justify-end">
                        {product.sizes.slice(0, 2).map((s) => (
                          <span key={s} className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>
                    <h2 className="font-bold text-gray-900 text-base mb-1 group-hover:text-green-700 transition-colors leading-snug">{product.name}</h2>
                    <p className="text-xs text-gray-400 font-medium mb-1">{product.formula}</p>
                    <p className="text-xs text-gray-400 italic mb-3">{product.subtitle}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{product.description}</p>
                    <ul className="space-y-1.5 mb-5">
                      {product.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#2d7a3a" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Link href={`/our-products/${product.id}`} className="flex-1 text-center py-2.5 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90" style={{ background: "#2d7a3a" }}>
                        View Details
                      </Link>
                      <Link href={`/chat-assistant?product=${product.slug}`} className="px-3 py-2.5 rounded-full border-2 text-sm font-semibold transition-all hover:bg-green-50" style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}>
                        Ask Ella
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Find Retailers */}
      <section className="py-14 border-t border-gray-100" style={{ background: "#f9f6f0" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Find a Retailer Near You</h2>
          <p className="text-gray-500 mb-6">Healthy Earth products are available through agricultural merchants, garden centres and farm supply stores across Australia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/retailers" className="px-8 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background: "#2d7a3a" }}>Find Retailers</Link>
            <Link href="/chat-assistant" className="px-8 py-3 rounded-full font-semibold border-2 transition-all hover:bg-green-50" style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}>Ask Ella Which Product</Link>
          </div>
        </div>
      </section>
    </>
  );
}
