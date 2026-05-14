import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yellow Leaves on Plants — Causes & Fertiliser Fix | Healthy Earth",
  description: "Yellow leaves are the most common sign of plant nutrient deficiency. Identify the cause and find the right Australian fertiliser to fix it — fast.",
};

export default function YellowLeavesPage() {
  return (
    <>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Common Problem Guide</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Yellow Leaves on Plants</h1>
          <p className="text-white/70 text-lg max-w-2xl">Yellowing leaves are your plant&apos;s distress signal. Here&apos;s how to read what it&apos;s telling you — and fix it fast.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What Causes Yellow Leaves?</h2>
          <div className="space-y-4">
            {[
              { cause: "Nitrogen Deficiency", pattern: "Overall pale/yellow, starting with older (lower) leaves first", fix: "HealthyEarth Lawn Fertiliser or VegePro", icon: "🌿" },
              { cause: "Iron or Manganese Deficiency", pattern: "Yellow between veins, green veins remain (interveinal chlorosis)", fix: "FoliMax chelated foliar spray", icon: "🍃" },
              { cause: "Magnesium Deficiency", pattern: "Yellow from centre outward on older leaves", fix: "FoliMax (contains Mg) or Epsom salt flush", icon: "🌱" },
              { cause: "Overwatering / Root Rot", pattern: "Yellowing with soft or mushy stems at base", fix: "Reduce watering; apply SilicaMax to stimulate root zone recovery", icon: "💧" },
              { cause: "High Soil pH", pattern: "Widespread yellowing unresponsive to fertiliser", fix: "Soil test recommended; FoliMax bypasses pH barrier via leaf", icon: "⚡" },
            ].map((item) => (
              <div key={item.cause} className="flex gap-4 p-5 rounded-2xl border border-gray-100" style={{ background: "#f9f6f0" }}>
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.cause}</h3>
                  <p className="text-sm text-gray-500 mb-2"><strong>Pattern:</strong> {item.pattern}</p>
                  <p className="text-sm" style={{ color: "#2d7a3a" }}><strong>Fix:</strong> {item.fix}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
            <h3 className="text-xl font-bold text-white mb-2">Not sure which it is?</h3>
            <p className="text-white/75 mb-4">Describe your symptoms to Ella and she&apos;ll help you identify the cause and recommend the right product.</p>
            <Link href="/chat-assistant?q=yellow+leaves" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-white transition-all hover:bg-green-50" style={{ color: "#2d7a3a" }}>
              Ask Ella About Yellow Leaves
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
