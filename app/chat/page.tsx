"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ELLA_SUGGESTIONS = [
  "My lawn has yellow patches — what's wrong?",
  "How do I improve my vegetable garden soil?",
  "What fertilizer is best for fruit trees?",
  "My plants look pale and aren't growing — why?",
  "How often should I fertilize my lawn?",
  "What's the best product for seed germination?",
];

const ELLA_RESPONSES: Record<string, string> = {
  default: "Hi! I'm Ella, your plant nutrition expert. Could you describe what you're noticing with your plants? For example, are there colour changes, stunted growth, or unusual spots? The more detail you share, the better I can help.",
};

function getEllaResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();
  if (msg.includes("yellow") || msg.includes("pale")) {
    return "Yellow or pale leaves often indicate a nitrogen deficiency, though it can also be caused by iron or magnesium shortfalls. For lawns, I'd recommend our **HealthyEarth Lawn Fertiliser (N 13 : P 3 : K 14)** — the nitrogen will restore that deep green colour quickly. For garden beds or crops, our **FoliMax** foliar spray can correct micronutrient deficiencies rapidly. Can you tell me more about the plant type and how long this has been happening?";
  }
  if (msg.includes("lawn")) {
    return "Great question about lawns! For general lawn health, our **HealthyEarth Lawn Fertiliser (N 13 : P 3 : K 14)** is a fantastic all-rounder — it suits every grass variety and provides a balanced NPK ratio plus trace elements. Apply at 30–40g/m² every 6–8 weeks during the growing season. Are you dealing with a specific issue like yellowing, bare patches, or slow growth?";
  }
  if (msg.includes("vegetable") || msg.includes("veggie") || msg.includes("garden soil")) {
    return "For vegetable gardens, soil health is everything! I'd start with our **HealthyEarth VegePro (N 8 : P 4 : K 6)** — it's an organic-mineral blend that feeds your plants while building long-term soil structure. If you're starting new beds, incorporating **SilicaMax** will stimulate the soil microbiome and help plants take up nutrients more efficiently. What are you planning to grow?";
  }
  if (msg.includes("fruit") || msg.includes("tree")) {
    return "Fruit trees have specific nutritional needs that change through the seasons. In spring (bud burst to fruit set), focus on potassium and phosphorus for flowering and fruit development. Our **HealthyEarth Booster** is excellent around harvest time — it improves sugar (Brix) levels, palatability, and fruit quality significantly. Are your trees showing any visible symptoms, or is this more about maximising yield and flavour?";
  }
  if (msg.includes("seed") || msg.includes("germination") || msg.includes("germinate")) {
    return "For seed germination, our **HealthyEarth SeedPrimer** is exactly what you need. It's a biostimulant complex that promotes fast, uniform emergence and early root development — you'll notice significantly better establishment compared to untreated seed. It works for vegetables, pastures, and broadacre crops. Are you sowing directly or using trays/pots?";
  }
  if (msg.includes("silica") || msg.includes("rhizosphere") || msg.includes("soil microbe")) {
    return "**Healthy Earth SilicaMax** is our premium silica product at 51% SiO₂ — one of the highest concentrations available. Silica strengthens plant cell walls (making them more resistant to pests, disease and drought), and it stimulates the rhizosphere — the zone around plant roots where beneficial microbes live. It's especially valuable in sandy or degraded soils. Would you like application rate information?";
  }
  if (msg.includes("how often") || msg.includes("frequency") || msg.includes("apply")) {
    return "Application frequency depends on the product and plant type. As a general guide:\n\n• **Lawn fertiliser** — every 6–8 weeks during growing season\n• **Foliar sprays** — every 2–4 weeks during active growth\n• **Soil amendments (SilicaMax)** — once or twice per season\n• **SeedPrimer** — applied at sowing, once only\n\nWhich product or plant type are you asking about specifically?";
  }
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hello! I'm Ella, Healthy Earth's AI plant nutrition expert. I'm here to help you diagnose plant problems and find the right products for your situation. What's going on with your plants today?";
  }
  return "Thanks for sharing that! Based on what you've described, I'd suggest starting with a soil assessment to identify the limiting factor. Our range covers most Australian soil and plant challenges. Could you tell me:\n\n1. What type of plants or crops are you working with?\n2. What symptoms are you seeing?\n3. Are you gardening at home or in a commercial setting?\n\nThis will help me give you a precise recommendation.";
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: ELLA_RESPONSES.default },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage(text?: string) {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: getEllaResponse(msg) }]);
      setLoading(false);
    }, 1000 + Math.random() * 800);
  }

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      {/* Top bar */}
      <div className="border-b border-gray-100 px-4 py-3 flex items-center gap-3 bg-white">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">Ella</p>
          <p className="text-xs text-gray-400">Plant Nutrition Expert · AI-powered</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-gray-400">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4" style={{ background: "#f9f6f0" }}>
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
              )}
              <div className={`max-w-lg px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.role === "user" ? "text-white rounded-tr-sm" : "bg-white text-gray-800 rounded-tl-sm shadow-sm"}`} style={msg.role === "user" ? { background: "#2d7a3a" } : {}}>
                {msg.content.split("**").map((part, j) =>
                  j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #2d7a3a, #8bc34a)" }}>E</div>
              <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                <div className="flex gap-1">
                  {[0, 1, 2].map((d) => (
                    <div key={d} className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#2d7a3a", animationDelay: `${d * 0.15}s` }} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 py-3 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-gray-400 mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {ELLA_SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => sendMessage(s)} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700 transition-colors bg-white">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask Ella about your plants..."
            className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all disabled:opacity-40"
            style={{ background: "#2d7a3a" }}
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
