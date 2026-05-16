import type { Metadata } from "next";
import Link from "next/link";
import { products, getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import Image from "next/image";

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Healthy Earth`,
    description: `${product.description} Formula: ${product.formula}. ${product.subtitle}.`,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-gray-600">Products</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">{product.shortName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden flex items-center justify-center h-80 lg:h-96" style={{ background: `linear-gradient(135deg, ${product.color}15, ${product.color}35)` }}>
              {product.image ? (
                <Image src={product.image} alt={product.shortName} width={600} height={384} className="w-full h-full object-cover" />
              ) : (
                <span style={{ color: product.color }}><Icon name={product.icon} className="w-40 h-40" /></span>
              )}
            </div>

            {/* Info */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white mb-4 inline-block" style={{ background: product.color }}>
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-base font-medium text-gray-500 mb-1">{product.formula}</p>
              <p className="text-sm text-gray-400 italic mb-5">{product.subtitle}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{product.longDescription}</p>

              {/* Sizes */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Available sizes:</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full border-2 border-gray-200 text-sm font-medium text-gray-700">{s}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/retailers" className="flex-1 text-center py-4 rounded-full font-semibold text-white transition-all hover:opacity-90 shadow-md" style={{ background: "#2d7a3a" }}>
                  Find Retailers
                </Link>
                <Link href={`/chat-assistant?product=${product.slug}`} className="flex-1 text-center py-4 rounded-full font-semibold border-2 transition-all hover:bg-green-50" style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}>
                  Ask Ella About This Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="py-14" style={{ background: "#f9f6f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs" style={{ background: "#2d7a3a" }}>✓</span>
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#2d7a3a" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dosage */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs" style={{ background: "#2d7a3a" }}>📏</span>
                Dosage Guide
              </h2>
              <ul className="space-y-3">
                {product.dosage.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: product.color }} />
                    <span className="text-gray-700">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best For */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs" style={{ background: "#2d7a3a" }}>🎯</span>
                Best For
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.bestFor.map((b) => (
                  <span key={b} className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-700">{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Usage + Safety */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-3">How to Use</h2>
              <p className="text-sm text-gray-700 leading-relaxed">{product.usage}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100" style={{ background: "#fffbf0" }}>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">⚠️</span> Safety Information
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">{product.safetyNotes}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ask Ella */}
      <section className="py-14" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a question about {product.shortName}?</h2>
          <p className="text-white/70 mb-6">Ella can tell you if this product is right for your situation, and what rate and timing to use.</p>
          <Link href={`/chat-assistant?product=${product.slug}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white hover:bg-white hover:text-green-800 transition-all">
            Ask Ella About This Product
          </Link>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.id} href={`/our-products/${p.id}`} className="group p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 flex gap-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}20`, color: p.color }}><Icon name={p.icon} className="w-8 h-8" /></div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm group-hover:text-green-700 transition-colors">{p.shortName}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{p.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
