import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Improve Soil Health in Australia | Healthy Earth",
  description: "Practical, science-backed guides to improving Australian soil health. Build soil biology, reduce compaction and grow more with less input — with help from Ella.",
};

export default function ImproveSoilPage() {
  return (
    <>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Soil Health Guide</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How to Improve Soil Health</h1>
          <p className="text-white/70 text-lg max-w-2xl">Great plants start with great soil. Here&apos;s a practical guide to building healthier, more productive soil &mdash; in your backyard or on your farm.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Stimulate Soil Biology",
                body: "Healthy soil is alive. Billions of microbes break down organic matter, fix nitrogen and make minerals plant-available. SilicaMax activates the rhizosphere — the zone around plant roots where beneficial microbes live — significantly improving nutrient cycling.",
                product: { name: "SilicaMax", id: 17 },
              },
              {
                step: "2",
                title: "Build Soil Carbon",
                body: "Soil carbon drives water retention, nutrient holding capacity and biological diversity. Humic Carbon Liquid delivers concentrated humic and fulvic acid from ancient Australian deposits — feeding soil microbes and improving cation exchange capacity long-term.",
                product: { name: "Humic Carbon Liquid", id: 19 },
              },
              {
                step: "3",
                title: "Correct Trace Element Deficiencies",
                body: "Nutrient imbalances are common in Australian soils. Trace element deficiencies limit plant growth even when NPK is adequate. EasyTrace delivers a full spectrum of liquid trace elements including selenium, boron, iron, zinc and molybdenum in one product.",
                product: { name: "EasyTrace", id: 21 },
              },
              {
                step: "4",
                title: "Reduce Compaction",
                body: "Compacted soil suffocates plant roots and soil microbes. Aerate mechanically, then apply a soil amendment to stimulate biological loosening. Earthworm activity increases naturally as soil biology improves. The Instant Clay Breaker range helps break clay bonds and restore structure.",
                product: { name: "Instant Clay Breaker", id: 6 },
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1" style={{ background: "#2d7a3a" }}>{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.body}</p>
                  {item.product && (
                    <Link href={`/our-products/${item.product.id}`} className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#2d7a3a" }}>
                      View {item.product.name} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
            <h3 className="text-xl font-bold text-white mb-2">Not sure where to start?</h3>
            <p className="text-white/75 mb-4">Tell Ella about your soil &mdash; type, location, current issues &mdash; and she&apos;ll give you a specific improvement program.</p>
            <Link href="/chat-assistant?q=improve+soil+health" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-white" style={{ color: "#2d7a3a" }}>Ask Ella</Link>
          </div>
        </div>
      </section>
    </>
  );
}
