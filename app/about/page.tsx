import type { Metadata } from "next";
import Link from "next/link";
import OpenEllaButton from "@/components/OpenEllaButton";

export const metadata: Metadata = {
  title: "About Healthy Earth | Australian Plant Nutrition by BioCare Fertilisers",
  description: "Healthy Earth means Heal Your Earth. Discover the story behind our fertiliser philosophy and why we believe soil health is the foundation of human health.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#0d1f10" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(45,122,58,0.20) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#6fcf7c" }}>Our Story</p>
          <h1 className="font-bold text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
            Heal Your Earth.
          </h1>
          <p className="leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.60)", fontSize: "1.15rem" }}>
            The name says it all. Fertilisers have the power to do great good or great harm — and we built Healthy Earth around that responsibility.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2d7a3a" }}>The Problem We Set Out to Solve</p>
            <h2 className="font-bold text-gray-900 leading-tight mb-8" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.01em" }}>
              Fertilisers are the most powerful input in agriculture. Most are being used the wrong way.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
                Fertilisers are the one agricultural input that is broadcast across entire landscapes. Their composition determines the nutritional quality of our soils, our crops, our pastures — and ultimately the food we eat. That is not a small thing.
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
                Modern, high-yield agriculture accelerates soil nutrient depletion. Intensive cropping can begin to significantly reduce soil mineral reserves within a few seasons. The land gives, and conventional farming takes — without restoring the full spectrum of what was removed.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
                While many plants will survive on a relatively small suite of elements, animals and humans require a much broader range of minerals to maintain health. Most conventional fertilisers supply only one to four elements. That narrow focus helps crops grow — but it does not restore the full nutritional balance the soil and the food chain need.
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
                The outcome is food that fills bellies but often lacks the nutrients required to support long-term health, vitality and disease resistance. We started Healthy Earth because we believed there was a better way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20" style={{ background: "#f5f0e8" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-4 pl-8" style={{ borderColor: "#2d7a3a" }}>
            <p className="font-bold text-gray-900 leading-snug mb-4" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.01em" }}>
              &ldquo;Healthy soil doesn&apos;t just grow bigger crops. It grows food that actually nourishes the people who eat it.&rdquo;
            </p>
            <cite className="text-sm font-medium not-italic" style={{ color: "#2d7a3a" }}>Healthy Earth · BioCare Fertilisers, New South Wales</cite>
          </blockquote>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2d7a3a" }}>How We Work</p>
          <h2 className="font-bold text-gray-900 leading-tight mb-14" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.01em" }}>
            Built on 30 years of Australian soil science.
          </h2>

          <div className="space-y-12">
            {[
              {
                num: "01",
                title: "Broad-spectrum nutrition",
                body: "Where most fertilisers supply one to four elements, our formulations are designed around the full spectrum that soils, crops and the food chain require. SilicaMax, Trace Elements Volcanic, CalMag 51 — each product targets a specific gap in the nutritional cycle.",
              },
              {
                num: "02",
                title: "Soil biology, not just chemistry",
                body: "Soil is not inert. It is a living system. Products like Humic Carbon Liquid are formulated to feed the microbial community that makes nutrients available to plants. Healthy biology means less fertiliser is locked away and more reaches the plant.",
              },
              {
                num: "03",
                title: "Formulated for Australian conditions",
                body: "Our parent company BioCare Fertilisers has worked across Australian broadacre, horticulture and turf for over three decades. Every Healthy Earth product starts from Australian soil chemistry — its pH profiles, mineral imbalances and climate — not from an overseas data sheet.",
              },
              {
                num: "04",
                title: "Accessible to every grower",
                body: "That agronomic depth used to require hiring an expert. Ella changes that. Describe your problem — plant type, symptom, soil, climate — and get a science-grounded recommendation in seconds, for free. The same expertise, available to anyone.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-8 items-start">
                <span className="font-mono font-bold flex-shrink-0 mt-1" style={{ fontSize: "0.85rem", color: "#2d7a3a", letterSpacing: "0.05em" }}>{item.num}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2" style={{ fontSize: "1.1rem" }}>{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed" style={{ fontSize: "0.97rem" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16" style={{ background: "#0d1f10" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "30+", label: "Years of research" },
              { value: "25", label: "Formulations" },
              { value: "0", label: "Synthetic additives" },
              { value: "100%", label: "Australian-made" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono font-bold text-white mb-1" style={{ fontSize: "2.2rem" }}>{stat.value}</div>
                <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "#6fcf7c" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#f5f0e8" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.01em" }}>
            Ready to build healthier soil?
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Browse our range or talk to Ella — she&apos;ll point you to exactly what your soil, lawn or crop needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/products" className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
              Browse Products
            </Link>
            <OpenEllaButton className="px-8 py-4 rounded-full font-semibold border transition-all hover:bg-green-50" style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}>
              Ask Ella
            </OpenEllaButton>
          </div>
        </div>
      </section>
    </>
  );
}
