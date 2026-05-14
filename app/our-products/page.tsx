import Link from "next/link";

const products = [
  {
    id: 13,
    name: "HealthyEarth Lawn Fertiliser",
    category: "Gardening",
    formula: "N 13 : P 3 : K 14 Plus Trace Elements",
    subtitle: "Suits All Lawn Types",
    description: "A complete lawn nutrition formula designed to promote lush, green growth while strengthening root systems against drought and wear. Suitable for all grass varieties across Australia.",
    benefits: ["Deep green colour", "Strong root development", "Drought resistance", "Suits all lawn types"],
    color: "#4caf50",
    icon: "🌿",
  },
  {
    id: 18,
    name: "Healthy Earth SilicaMax",
    category: "Farming",
    formula: "51% Silica (SiO₂) + Broad Trace Elements",
    subtitle: "Stimulates Rhizosphere",
    description: "High-concentration silica amendment that strengthens plant cell walls, improves drought tolerance, and stimulates beneficial microbial activity in the rhizosphere.",
    benefits: ["51% Silica (SiO₂)", "Broad trace elements", "Rhizosphere stimulation", "Cell wall strengthening"],
    color: "#8bc34a",
    icon: "⚡",
  },
  {
    id: 19,
    name: "HealthyEarth SeedPrimer",
    category: "Farming",
    formula: "Biostimulant Complex",
    subtitle: "Rapid Emergence & Root Development",
    description: "Promotes fast, uniform seed germination and vigorous early root development for stronger crop establishment and better first-season performance.",
    benefits: ["Faster germination", "Uniform emergence", "Early root vigour", "Improved establishment"],
    color: "#2d7a3a",
    icon: "🌱",
  },
  {
    id: 26,
    name: "HealthyEarth Booster",
    category: "Farming",
    formula: "Comprehensive Nutrient Blend",
    subtitle: "Taste, Vigor & Sugar Levels",
    description: "Enhances produce palatability, health, and sugar content while boosting overall crop vigor and yield quality. Ideal for fruit, vegetable and grain crops.",
    benefits: ["Improved taste", "Higher sugar (Brix)", "Better palatability", "Enhanced crop health"],
    color: "#795548",
    icon: "🚀",
  },
  {
    id: 20,
    name: "HealthyEarth FoliMax",
    category: "Gardening",
    formula: "Foliar Micronutrient Blend",
    subtitle: "Rapid Uptake via Leaves",
    description: "Fast-acting foliar spray delivering essential micronutrients directly through leaf tissue for immediate correction of deficiencies.",
    benefits: ["Rapid uptake", "Micronutrient correction", "Foliar application", "Immediate results"],
    color: "#009688",
    icon: "🍃",
  },
  {
    id: 21,
    name: "HealthyEarth VegePro",
    category: "Gardening",
    formula: "N 8 : P 4 : K 6 + Organics",
    subtitle: "Complete Vegetable Garden Formula",
    description: "Balanced organic-mineral blend designed specifically for home vegetable gardens. Promotes healthy leafy growth and generous fruiting.",
    benefits: ["Organic + mineral", "Leafy & fruiting crops", "Safe for edibles", "Slow release"],
    color: "#ff7043",
    icon: "🥕",
  },
];

const categories = ["All", "Gardening", "Farming"];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Our Range</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Scientifically formulated nutrition for every plant, every garden, every farm.</p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button key={cat} className="px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all" style={cat === "All" ? { background: "#2d7a3a", color: "white", borderColor: "#2d7a3a" } : { borderColor: "#e5e7eb", color: "#6b7280" }}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-40 flex items-center justify-center text-6xl" style={{ background: `linear-gradient(135deg, ${product.color}15, ${product.color}35)` }}>
                  {product.icon}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full text-white" style={{ background: product.color }}>
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-green-700 transition-colors">{product.name}</h3>
                  <p className="text-xs text-gray-400 font-medium mb-1">{product.formula}</p>
                  <p className="text-xs text-gray-400 italic mb-4">{product.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#2d7a3a" }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/our-products/${product.id}`} className="block text-center py-3 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90" style={{ background: "#2d7a3a" }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "#f9f6f0" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Not sure which product is right for you?</h2>
          <p className="text-gray-500 mb-8">Chat with Ella, our AI plant nutrition expert, and get a personalised recommendation based on your specific needs.</p>
          <Link href="/chat" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90 shadow-md" style={{ background: "#2d7a3a" }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Chat with Ella
          </Link>
        </div>
      </section>
    </>
  );
}
