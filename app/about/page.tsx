import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Healthy Earth | Australian Plant Nutrition by BioCare Fertilisers",
  description: "Healthy Earth is an Australian-owned plant nutrition brand by BioCare Fertilisers. Discover our story, mission, soil science expertise and commitment to sustainable agriculture.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Healthy Earth</h1>
          <p className="text-white/70 text-lg max-w-2xl">An Australian-owned plant nutrition brand built on three decades of soil science — now with AI-powered advice for every grower.</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d7a3a" }}>Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expert plant nutrition, accessible to every grower</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Healthy Earth was created with a simple belief: every Australian grower — from the backyard gardener to the broadacre farmer — deserves access to the same quality of agronomic expertise that was once reserved for large agricultural businesses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our parent company, BioCare Fertilisers, has been developing specialty plant nutrition programs for Australian agriculture for over 30 years. That experience — across cotton, grain, horticulture, and everything in between — is the foundation of every Healthy Earth product.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By combining BioCare&apos;s formulation expertise with modern AI technology, we&apos;ve built a platform where anyone can describe a plant problem and receive a science-grounded recommendation within seconds — for free.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "30+", label: "Years of Research" },
                { value: "100+", label: "Products Formulated" },
                { value: "10,000+", label: "Growers Helped" },
                { value: "100%", label: "Australian Owned" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl text-center border border-gray-100 hover:shadow-md transition-all" style={{ background: "#f9f6f0" }}>
                  <div className="text-3xl font-bold mb-1" style={{ color: "#2d7a3a" }}>{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthy Earth */}
      <section className="py-20" style={{ background: "#f9f6f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d7a3a" }}>Why Healthy Earth</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built Different. For Australia.</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We don&apos;t adapt overseas products for Australian conditions. We start from Australian soils.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔬",
                title: "Soil Science, Not Shortcuts",
                body: "Every Healthy Earth product starts in the lab and finishes in Australian paddocks and gardens. Our agronomists study Australian soil chemistry — its pH profiles, mineral imbalances and microbiology — and formulate specifically for those conditions. Nothing is copy-pasted from a European or American product data sheet.",
              },
              {
                icon: "🌿",
                title: "Long-Term Soil Health",
                body: "Many fertilisers chase a quick green-up. We engineer for the long game. Products like SilicaMax improve soil biology and structure season after season. Our organic-mineral blends feed both the plant and the microbial community that supports it. Healthy soil doesn't need more fertiliser — it needs the right fertiliser.",
              },
              {
                icon: "🤖",
                title: "AI That Actually Knows Agronomy",
                body: "Ella isn't a chatbot pointed at a FAQ. She's built on agronomic principles, product chemistry and real-world application experience. When you describe a problem, Ella asks the right questions — plant type, symptom pattern, soil type, climate — and gives you a specific recommendation, not a generic product list.",
              },
              {
                icon: "🌱",
                title: "Sustainability That's Practical",
                body: "We believe sustainability and productivity aren't opposites. Our formulations are designed to build soil carbon, support beneficial microbiology and reduce the input load over time — while still delivering the results growers need in the short term. It's not about doing less. It's about doing it smarter.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BioCare section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-10 md:p-14 text-center border border-gray-100" style={{ background: "#f9f6f0" }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by BioCare Fertilisers</h2>
            <p className="text-gray-600 leading-relaxed mb-5 max-w-2xl mx-auto">
              BioCare Fertilisers is a New South Wales-based specialty fertiliser company with over 30 years of experience across Australian broadacre, horticulture and turf sectors. Our agronomists have worked in every major cropping region in the country.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Healthy Earth is how BioCare brings that expertise to the home gardener and small-scale grower — without the cost of hiring an agronomist, and without the guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "#f9f6f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d7a3a" }}>What We Stand For</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "🔬", title: "Science First", desc: "Peer-reviewed formulations, validated in Australian trials." },
              { icon: "🌱", title: "Soil Health", desc: "We build land that produces more with less, every season." },
              { icon: "🤝", title: "Accessibility", desc: "Expert advice for every grower, regardless of scale." },
              { icon: "🌏", title: "Australian", desc: "Owned, formulated and tested on Australian soil." },
            ].map((val, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 text-center bg-white hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{val.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{val.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to grow healthier plants?</h2>
          <p className="text-white/70 mb-8">Browse our products or chat with Ella to get a personalised recommendation — free, instant, and tailored to your situation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/products" className="px-8 py-4 rounded-full font-semibold bg-white hover:bg-gray-50 transition-all" style={{ color: "#2d7a3a" }}>Browse Products</Link>
            <Link href="/chat-assistant" className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-all">Ask Ella</Link>
          </div>
        </div>
      </section>
    </>
  );
}
