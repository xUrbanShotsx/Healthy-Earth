"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";

// Product slug map for inline recommendation chips
const PRODUCT_LINKS: Record<string, string> = {
  "EasyTrace": "easy-trace",
  "SilicaMax": "silicamax",
  "Pro-Strength Lawn Fertiliser": "pro-strength-lawn",
  "Pro-Strength Lawn": "pro-strength-lawn",
  "BLOOM-n-YIELD": "bloom-n-yield",
  "SeedPrimer": "seedprimer",
  "44-Plus": "44-plus",
  "Booster": "booster",
  "Humic Carbon Liquid": "humic-carbon-liquid",
  "NPK LeafSpray Plus": "npk-leafspray-plus",
  "NutriSpread": "nutri-spread",
  "UltraSilica Wettable": "ultra-silica-wettable",
  "Premium GP Garden Fertiliser": "premium-gp-garden",
  "Premium GP": "premium-gp-garden",
  "Clay Breaker": "clay-breaker",
  "Colour Spray": "colour-spray",
  "CalMag 51": "calmag-51",
  "BioCare Eco-Spray": "eco-spray",
  "Humic Carbon": "humic-carbon-liquid",
};

const FOLLOW_UPS: Record<string, string[]> = {
  yellow: ["How do I apply EasyTrace as a foliar spray?", "Is it safe around edible crops?", "How quickly will I see results?"],
  lawn: ["How often should I fertilise my lawn?", "Best time of year to apply?", "Can I use it on buffalo grass?"],
  fruit: ["When's the best time to apply Booster?", "How do I improve fruit colour?", "What about citrus trees specifically?"],
  soil: ["How long does SilicaMax take to work?", "Can I mix it with other products?", "Best rate for heavy clay soils?"],
  pest: ["Is silica safe to use alongside pesticides?", "How do I prevent powdery mildew?", "How does silicon strengthen cell walls?"],
  seed: ["What's the rate for pasture sowing?", "Can SeedPrimer be used on all crops?", "Best soil temperature for germination?"],
  vegetable: ["Is it safe for edible plants?", "How often should I apply?", "What about tomatoes and capsicum?"],
  farming: ["What rate for broadacre application?", "Can I apply through centre pivots?", "How does 44-Plus compare to standard NPK?"],
  default: ["Is it safe around children and pets?", "How quickly will I see results?", "Can I mix different products?"],
};

type Message = {
  role: "user" | "assistant";
  content: string;
  products?: string[];
  followUps?: string[];
};

const problemCards: { label: string; icon: IconName; desc: string; q: string; accent: string }[] = [
  { label: "Yellow leaves", icon: "leaf", desc: "Deficiency or pH issue", q: "My plant leaves are turning yellow", accent: "#f59e0b" },
  { label: "Lawn not growing", icon: "lawn", desc: "Thin, patchy or pale", q: "My lawn is not growing and looks thin", accent: "#16a34a" },
  { label: "Poor fruiting", icon: "fruit", desc: "Low yield or small fruit", q: "My fruit trees are not producing much fruit", accent: "#ea580c" },
  { label: "Soil improvement", icon: "soil", desc: "Clay, compaction, biology", q: "How do I improve my soil health?", accent: "#92400e" },
  { label: "Pest or disease", icon: "bug", desc: "Spots, damage, wilting", q: "I think my plants have a pest or disease problem", accent: "#dc2626" },
  { label: "Slow germination", icon: "seed", desc: "Uneven or poor strike", q: "My seeds are germinating slowly or unevenly", accent: "#0891b2" },
  { label: "Lawn fertiliser", icon: "drops", desc: "Which product, when to apply", q: "What lawn fertiliser should I use?", accent: "#2d7a3a" },
  { label: "Veggie garden", icon: "shovel", desc: "Nutrition for food gardens", q: "What should I put on my vegetable garden?", accent: "#7c3aed" },
];

function detectProducts(content: string): string[] {
  return Object.keys(PRODUCT_LINKS).filter((name) => content.includes(name));
}

function detectFollowUps(content: string): string[] {
  const lower = content.toLowerCase();
  if (lower.includes("yellow") || lower.includes("easytrace") || lower.includes("chlorosis")) return FOLLOW_UPS.yellow;
  if (lower.includes("lawn") || lower.includes("grass") || lower.includes("turf")) return FOLLOW_UPS.lawn;
  if (lower.includes("fruit") || lower.includes("booster") || lower.includes("citrus")) return FOLLOW_UPS.fruit;
  if (lower.includes("soil") || lower.includes("silicamax") || lower.includes("clay")) return FOLLOW_UPS.soil;
  if (lower.includes("pest") || lower.includes("disease") || lower.includes("fungal")) return FOLLOW_UPS.pest;
  if (lower.includes("seed") || lower.includes("germination") || lower.includes("seedprimer")) return FOLLOW_UPS.seed;
  if (lower.includes("vegetable") || lower.includes("veggie")) return FOLLOW_UPS.vegetable;
  if (lower.includes("farming") || lower.includes("crop") || lower.includes("broadacre")) return FOLLOW_UPS.farming;
  return FOLLOW_UPS.default;
}

function getResponse(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("yellow") || m.includes("pale") || m.includes("chlorosis")) {
    return "Yellow leaves most often point to a **nitrogen deficiency** — but if the yellowing is between the veins with green veins remaining, it's classic **iron, manganese or zinc deficiency** (very common in alkaline or waterlogged soils).\n\n**My recommendation:**\n• For lawns: **Pro-Strength Lawn Fertiliser** (N 13 : P 3 : K 14) — nitrogen boost, greens up in 7–10 days.\n• For garden plants or citrus: **EasyTrace** foliar spray — corrects iron, zinc and manganese within 5–7 days.\n• For high-pH soils long-term: **SilicaMax** improves nutrient availability and soil biology.\n\nCan you tell me more — what type of plant, and is the yellowing on older leaves (lower) or new growth (upper)?";
  }
  if (m.includes("lawn") && (m.includes("grow") || m.includes("thin") || m.includes("patchy") || m.includes("bare") || m.includes("fertiliser") || m.includes("fertilizer"))) {
    return "Thin or patchy lawn usually comes down to nutrition, soil compaction, or the wrong grass for your conditions.\n\n**Quick diagnosis:**\n• Generally thin and pale → nitrogen deficiency → **Pro-Strength Lawn Fertiliser**\n• Bare patches after wear → fertilise and oversow\n• Soil feels hard → aerate, then apply **SilicaMax** to stimulate soil biology\n\n**Start with:** Pro-Strength Lawn Fertiliser at 30–40 g/m², watered in well. Most lawns show visible improvement within 2 weeks.\n\nWhat's your grass type and what state are you in? That'll help me fine-tune the timing.";
  }
  if (m.includes("fruit") || m.includes("fruiting") || m.includes("citrus") || m.includes("tree")) {
    return "Poor fruiting is usually linked to **potassium and phosphorus at flowering**, or **boron deficiency** which disrupts pollination.\n\n**My recommendation:**\n• At fruit set: **Booster** — increases sugar (Brix), improves fruit size and colour. No withholding period.\n• For micronutrient correction: **EasyTrace** foliar spray, especially if trees look stressed or leaves are discoloured.\n• For colour at harvest: **Colour Spray** mixed with NPK LeafSpray Plus.\n• Long-term soil: **SilicaMax** improves plant resilience and fruit quality season after season.\n\nApply Booster 2–3 times — at early fruit set, then again 3–4 weeks before harvest.\n\nWhat type of fruit tree, and have you noticed leaf drop or unusual colouring?";
  }
  if (m.includes("soil") || m.includes("compaction") || m.includes("biology") || m.includes("clay")) {
    return "Soil health is the foundation of everything. Here's a practical approach:\n\n**1. Stimulate soil biology:** **SilicaMax** activates the rhizosphere — the zone around plant roots where beneficial microbes live. This improves nutrient uptake and long-term soil structure.\n\n**2. Build soil carbon:** **Humic Carbon Liquid** delivers humic and fulvic acid from ancient Australian deposits — feeds microbes and improves nutrient retention.\n\n**3. Break clay soils:** **Clay Breaker** with organic seaweed and sea calcium improves drainage and structure rapidly.\n\nWhat are you working with — home garden, lawn, or farm? And what's the soil like: hard clay, sandy, waterlogged?";
  }
  if (m.includes("pest") || m.includes("disease") || m.includes("fungal") || m.includes("mould")) {
    return "Strong plants resist pests and disease better — and nutrition plays a big role:\n\n• **SilicaMax or UltraSilica Wettable** — silicon physically strengthens cell walls, making it mechanically harder for fungal spores and insects to penetrate. Many growers report fewer sprays needed after adding silica.\n• **EasyTrace** — deficient plants are far more susceptible to attack. Correcting trace elements builds resilience.\n• **BioCare Eco-Spray** — environmentally safe option, safe around family and pets.\n\nFor specific pest or disease ID, you may also want a crop protection product from your local ag merchant.\n\nWhat are you seeing — spots on leaves, wilting, chewing damage, white powder?";
  }
  if (m.includes("seed") || m.includes("germination") || m.includes("germinate") || m.includes("establish")) {
    return "Slow or uneven germination usually comes down to **seed vigour, soil temperature, or nutrient availability** in the critical establishment window.\n\n**SeedPrimer** is designed exactly for this. Applied at sowing as a seed treatment or in-furrow, it:\n• Accelerates germination by activating seed metabolism\n• Drives early root development\n• Improves establishment uniformity\n\n**Rates:** 1–2 L per tonne of seed (seed treatment) or 2–4 L/ha in-furrow.\n\nWhat are you sowing — pasture, grain crops, vegetables? And are conditions dry, cold, or normal?";
  }
  if (m.includes("vegetable") || m.includes("veggie") || m.includes("garden bed") || m.includes("raised bed")) {
    return "For vegetable gardens, I'd recommend our **Premium GP Garden Fertiliser** — safe for food growing, no strong odours, includes a biodynamic activator.\n\nFor a flowering and fruiting boost on tomatoes, capsicum and berries: **BLOOM-n-YIELD** is the go.\n\n**Apply:** Premium GP at 100 g/m² worked into soil before planting, or 50 g/m² monthly as a top-dress.\n\nFor a quick trace element boost on established plants: **EasyTrace** foliar spray gives visible results within a week.\n\nWhat are you growing — leafy greens, tomatoes, root veg?";
  }
  if (m.includes("farming") || m.includes("broadacre") || m.includes("crop") || m.includes("grain") || m.includes("pasture")) {
    return "For broadacre and farming applications:\n\n**Foundation nutrition:** **44-Plus** (N 13.9 : P 3.7 : K 10.7 + S 10.7) with seaweed, humic acid, fish and trace elements — one of our most complete farming fertilisers.\n\n**Soil biology:** **SilicaMax** activates the rhizosphere and strengthens crops against stress and disease.\n\n**Foliar nutrition:** **NPK LeafSpray Plus** with **NutriSpread** for maximum coverage and adhesion — ideal for deficiency correction at critical growth stages.\n\n**Crop establishment:** **SeedPrimer** for faster, more uniform germination.\n\nWhat crop are you growing, and what's the main issue you're trying to solve?";
  }
  if (m.includes("hello") || m.includes("hi") || m.includes("hey") || m.includes("g'day")) {
    return "G'day! I'm **Ella**, Healthy Earth's plant nutrition expert. I'm here to help you work out exactly what your plants need — whether it's a yellowing lawn, underperforming crops or a vegie patch that could do better.\n\nJust describe what you're seeing and I'll give you a specific, science-backed recommendation. What's the issue?";
  }
  return "Thanks for that — let me help you get to the bottom of it.\n\nTo give you the most accurate recommendation, can you tell me:\n\n**1.** What type of plant or crop? (lawn, vegetables, fruit trees, broadacre crop, etc.)\n**2.** What symptoms are you seeing? (yellowing, poor growth, patchy, wilting, etc.)\n**3.** Where are you located — state and region if possible?\n\nThe more detail, the better I can tailor the advice.";
}

function renderContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (line === "") return <div key={i} className="h-2" />;

    const isBullet = line.startsWith("• ") || line.startsWith("**1.**") || line.startsWith("**2.**") || line.startsWith("**3.**");

    const parts = line.split(/\*\*(.*?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1 ? <strong key={j} className="font-semibold">{part}</strong> : part
    );

    if (isBullet) {
      return (
        <div key={i} className="flex gap-2 mb-1">
          <span className="mt-0.5 flex-shrink-0 text-green-500">›</span>
          <p className="leading-relaxed">{rendered}</p>
        </div>
      );
    }

    return <p key={i} className="mb-1 leading-relaxed">{rendered}</p>;
  });
}

export default function ChatAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasStarted = messages.length > 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function send(text?: string) {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setLoading(true);
    setTimeout(() => {
      const response = getResponse(msg);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          products: detectProducts(response),
          followUps: detectFollowUps(response),
        },
      ]);
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }, 800 + Math.random() * 600);
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">

      {/* ── Header bar ─────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3 bg-white flex-shrink-0 shadow-sm">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a, #8bc34a)" }}
        >
          E
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm">Ella — Plant Nutrition Expert</p>
          <p className="text-xs text-gray-400">Powered by BioCare agronomy · 25 formulations</p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#f0faf2", color: "#2d7a3a" }}>Lawns</span>
          <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#f0faf2", color: "#2d7a3a" }}>Gardens</span>
          <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#f0faf2", color: "#2d7a3a" }}>Farming</span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-gray-400">Online</span>
        </div>
      </div>

      {/* ── Main area ──────────────────────────────────────────────── */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ background: hasStarted ? "#f7f4ef" : "white" }}
      >

        {/* WELCOME STATE */}
        {!hasStarted && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
            {/* Ella intro */}
            <div className="text-center mb-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5"
                style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a, #8bc34a)" }}
              >
                E
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Hi, I&apos;m Ella</h1>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                Healthy Earth&apos;s AI plant nutrition expert. Describe what&apos;s going on with your plants and I&apos;ll give you a specific, science-backed recommendation — free, instant, no account needed.
              </p>
            </div>

            {/* Problem cards */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-5">
              What&apos;s the problem?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {problemCards.map((card) => (
                <button
                  key={card.label}
                  onClick={() => send(card.q)}
                  className="group text-left p-4 rounded-2xl border border-gray-100 bg-white hover:border-transparent hover:shadow-lg transition-all duration-200 flex flex-col gap-3"
                  style={{ "--card-accent": card.accent } as React.CSSProperties}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${card.accent}18`, color: card.accent }}
                  >
                    <Icon name={card.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight mb-0.5">{card.label}</p>
                    <p className="text-xs text-gray-400">{card.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-gray-400 mt-8">
              Or type your question below ↓
            </p>
          </div>
        )}

        {/* CONVERSATION */}
        {hasStarted && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            {messages.map((msg, i) => {
              const isLast = i === messages.length - 1;
              const isAssistant = msg.role === "assistant";
              return (
                <div key={i} className={`flex gap-3 ${!isAssistant ? "flex-row-reverse" : ""}`}>
                  {isAssistant && (
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold self-start mt-0.5"
                      style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}
                    >
                      E
                    </div>
                  )}

                  <div className={`flex flex-col gap-2 ${isAssistant ? "flex-1 max-w-xl" : ""}`}>
                    {/* Bubble */}
                    <div
                      className={`px-4 py-3.5 rounded-2xl text-sm ${
                        isAssistant
                          ? "bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-100"
                          : "text-white rounded-tr-sm"
                      }`}
                      style={!isAssistant ? { background: "#2d7a3a" } : {}}
                    >
                      {renderContent(msg.content)}
                    </div>

                    {/* Product chips */}
                    {isAssistant && msg.products && msg.products.length > 0 && (
                      <div className="flex flex-wrap gap-2 pl-0.5">
                        {msg.products.map((name) => (
                          <Link
                            key={name}
                            href={`/our-products/${PRODUCT_LINKS[name]}`}
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border font-medium transition-all hover:shadow-sm"
                            style={{ borderColor: "#2d7a3a", color: "#2d7a3a", background: "#f0faf2" }}
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            {name}
                            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Follow-up suggestions (last assistant message only) */}
                    {isAssistant && isLast && !loading && msg.followUps && (
                      <div className="flex flex-col gap-1.5 pl-0.5 mt-1">
                        <p className="text-xs text-gray-400 font-medium">Suggested follow-ups:</p>
                        {msg.followUps.slice(0, 3).map((q) => (
                          <button
                            key={q}
                            onClick={() => send(q)}
                            className="text-left text-xs px-3 py-2 rounded-xl border border-dashed border-gray-200 text-gray-600 bg-white hover:border-green-300 hover:text-green-700 hover:bg-green-50 transition-all"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold self-start"
                  style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}
                >
                  E
                </div>
                <div className="bg-white px-4 py-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
                  <div className="flex gap-1.5 items-center h-4">
                    {[0, 1, 2].map((d) => (
                      <div
                        key={d}
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ background: "#2d7a3a", animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* ── Disclaimer ─────────────────────────────────────────────── */}
      <div className="px-4 py-1.5 flex-shrink-0" style={{ background: "#fffbeb", borderTop: "1px solid #fde68a" }}>
        <p className="text-xs text-amber-700 text-center max-w-3xl mx-auto">
          ⚠️ Ella provides general guidance. Always read and follow product label directions before applying any fertiliser.
        </p>
      </div>

      {/* ── Input bar ──────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6 py-3 bg-white border-t border-gray-100 flex-shrink-0">
        <div className="max-w-3xl mx-auto flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Describe your plant problem..."
            className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all bg-gray-50"
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 flex-shrink-0"
            style={{ background: "#2d7a3a" }}
            aria-label="Send message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
