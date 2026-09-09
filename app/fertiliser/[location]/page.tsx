import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getLocationData, getAllLocationSlugs } from "@/lib/location-seo-data";
import LocationFAQAccordion from "./LocationFAQAccordion";

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ location: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const data = getLocationData(location);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.healthyearth.com.au/fertiliser/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.healthyearth.com.au/fertiliser/${data.slug}`,
      siteName: "Healthy Earth | BioCare Fertilisers",
      type: "website",
    },
  };
}

const TOPIC_ICONS = {
  garden: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3C12 3 7 8 7 13a5 5 0 0010 0c0-5-5-10-5-10z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13v8M9 18h6" />
    </svg>
  ),
  lawn: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 20h18M5 20V10c0-2 1.5-4 3-5M19 20V10c0-2-1.5-4-3-5M12 20V8c-2 0-4 1.5-4 4M12 20V8c2 0 4 1.5 4 4" />
    </svg>
  ),
  farming: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 20l9-16 9 16H3zM12 4v16M6 12h12" />
    </svg>
  ),
  organic: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12s1-4 4-4 4 4 4 4-1 4-4 4-4-4-4-4z" />
    </svg>
  ),
  soil: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h18M7 17V9l5-5 5 5v8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-4h6v4" />
    </svg>
  ),
  nutrition: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
};

function ProductTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{ background: "rgba(45,122,58,0.08)", color: "#1a5227", border: "1px solid rgba(45,122,58,0.15)" }}>
      {name}
    </span>
  );
}

function TopicSection({
  id,
  icon,
  heading,
  body,
  products,
}: {
  id: string;
  icon: React.ReactNode;
  heading: string;
  body: string;
  products: string[];
}) {
  return (
    <section id={id} className="py-12 border-b border-gray-100 last:border-0 scroll-mt-24">
      <div className="flex items-start gap-4 mb-5">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-green-700"
          style={{ background: "rgba(45,122,58,0.08)" }}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mt-1.5">{heading}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-base mb-5 max-w-3xl">{body}</p>
      <div className="flex flex-wrap gap-2">
        {products.map((p) => (
          <Link key={p} href="/products" className="hover:opacity-80 transition-opacity">
            <ProductTag name={p} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const data = getLocationData(location);
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Healthy Earth | BioCare Fertilisers",
    description: data.metaDescription,
    url: `https://www.healthyearth.com.au/fertiliser/${data.slug}`,
    areaServed: {
      "@type": "City",
      name: data.name,
      "@id": `https://www.wikidata.org/wiki/${data.name}`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Fertiliser Products for ${data.name}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const topics = [
    { id: "garden-fertiliser", icon: TOPIC_ICONS.garden, heading: `Garden Fertiliser in ${data.name}`, ...data.gardenSection },
    { id: "lawn-fertiliser", icon: TOPIC_ICONS.lawn, heading: `Lawn Fertiliser in ${data.name}`, ...data.lawnSection },
    { id: "farming-fertiliser", icon: TOPIC_ICONS.farming, heading: `Farming & Broadacre Fertiliser near ${data.name}`, ...data.farmingSection },
    { id: "organic-fertiliser", icon: TOPIC_ICONS.organic, heading: `Organic Fertiliser in ${data.name}`, ...data.organicSection },
    { id: "soil-conditioner", icon: TOPIC_ICONS.soil, heading: `Soil Conditioner & Soil Improver in ${data.name}`, ...data.soilSection },
    { id: "plant-nutrition", icon: TOPIC_ICONS.nutrition, heading: `Plant Nutrition in ${data.name}`, ...data.nutritionSection },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a5227 0%, #2d7a3a 60%, #3a9148 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0%, transparent 50%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold text-white/80"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
            {data.name}, {data.region} — BioCare Biological Fertilisers
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl">
            {data.heroHeadline}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            {data.heroSub}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}>
              Browse Products
            </Link>
            <Link href="/retailers" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-white transition-all hover:scale-105 active:scale-95"
              style={{ color: "#1a5227" }}>
              Find a Retailer
            </Link>
          </div>
        </div>
      </div>

      {/* Soil & Climate Info */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-1.5">Soil Type</p>
              <p className="text-sm text-gray-700 leading-relaxed">{data.soilType}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-1.5">Climate</p>
              <p className="text-sm text-gray-700 leading-relaxed">{data.climate}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-1.5">Growing Challenges</p>
              <ul className="space-y-1">
                {data.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Soil intro paragraph */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-0">
        <p className="text-gray-600 text-base leading-relaxed max-w-3xl">{data.soilIntro}</p>
      </div>

      {/* Jump nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Garden Fertiliser", href: "#garden-fertiliser" },
            { label: "Lawn Fertiliser", href: "#lawn-fertiliser" },
            { label: "Farming", href: "#farming-fertiliser" },
            { label: "Organic Fertiliser", href: "#organic-fertiliser" },
            { label: "Soil Conditioner", href: "#soil-conditioner" },
            { label: "Plant Nutrition", href: "#plant-nutrition" },
            { label: "FAQs", href: "#faqs" },
          ].map((l) => (
            <a key={l.href} href={l.href}
              className="px-3 py-1.5 rounded-full text-xs font-medium border transition-colors hover:border-green-600 hover:text-green-700"
              style={{ borderColor: "#d1d5db", color: "#374151" }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Topic sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {topics.map((t) => (
          <TopicSection key={t.id} {...t} />
        ))}
      </div>

      {/* FAQ */}
      <div id="faqs" className="bg-gray-50 border-t border-gray-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions — {data.name}
          </h2>
          <p className="text-gray-500 text-sm mb-8">Common questions from {data.name} growers about BioCare fertilisers.</p>
          <LocationFAQAccordion faqs={data.faqs} />
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Not sure which product is right for {data.name}?
        </h2>
        <p className="text-gray-500 mb-7 max-w-xl mx-auto">
          Ask Ella — our AI agronomist — for a personalised fertiliser recommendation based on your soil, plants and growing conditions.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "#2d7a3a" }}>
            Browse All Products
          </Link>
          <Link href="/retailers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all hover:bg-green-50"
            style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}>
            Find a Retailer Near {data.name}
          </Link>
        </div>
      </div>
    </>
  );
}
