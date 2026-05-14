import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Lawn Fertiliser for Australian Lawns | Healthy Earth",
  description: "Find the best lawn fertiliser for couch, buffalo, kikuyu and fescue grass types in Australia. Science-backed formulas with personalised advice from Ella.",
};

export default function LawnFertiliserPage() {
  return (
    <>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Lawn Care Guide</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lawn Fertiliser for Australian Lawns</h1>
          <p className="text-white/70 text-lg max-w-2xl">The right fertiliser at the right time makes the difference between a struggling lawn and a lush, green one. Here&apos;s what you need to know.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fertilising by Grass Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { type: "Couch Grass", tip: "High nitrogen feeder. Fertilise every 6 weeks in growing season. Tolerates frequent application.", season: "Sep–Mar" },
              { type: "Buffalo (Sir Walter, Palmetto)", tip: "Moderate feeder. Avoid over-fertilising — causes excessive thatch. Every 8 weeks.", season: "Oct–Apr" },
              { type: "Kikuyu", tip: "Aggressive grower, responds well to nitrogen. Monthly during peak growth.", season: "Sep–Apr" },
              { type: "Fescue / Ryegrass (cool-season)", tip: "Fertilise in autumn and spring, avoid summer heat. Light applications.", season: "Mar–May, Aug–Oct" },
            ].map((item) => (
              <div key={item.type} className="p-5 rounded-2xl border border-gray-100" style={{ background: "#f9f6f0" }}>
                <h3 className="font-bold text-gray-900 mb-1">{item.type}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.tip}</p>
                <p className="text-xs font-medium" style={{ color: "#2d7a3a" }}>Peak season: {item.season}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border border-green-200 mb-10" style={{ background: "#f0f9f0" }}>
            <h3 className="font-bold text-gray-900 mb-2">Our Recommendation: HealthyEarth Pro-Strength Lawn Fertiliser</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">A balanced N 13 : P 3 : K 14 granular formula with trace elements. Suits all Australian grass types. Apply 25&ndash;40 g/m&sup2; and water in thoroughly. Results visible within 7&ndash;10 days.</p>
            <Link href="/our-products/9" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: "#2d7a3a" }}>View Product Details</Link>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
            <h3 className="text-xl font-bold text-white mb-2">Get personalised lawn advice</h3>
            <p className="text-white/75 mb-4">Tell Ella your grass type, location and what&apos;s going wrong &mdash; she&apos;ll give you a specific fertiliser program.</p>
            <Link href="/chat-assistant?q=lawn+fertiliser" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-white" style={{ color: "#2d7a3a" }}>Ask Ella</Link>
          </div>
        </div>
      </section>
    </>
  );
}
