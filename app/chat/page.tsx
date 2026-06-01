"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "My lawn has yellow patches",
  "Best fertiliser for tomatoes?",
  "How do I fix heavy clay soil?",
  "My fruit trees won't flower",
  "Plants look pale and weak",
  "How to improve soil biology?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = useCallback(async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;
    setStarted(true);
    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      if (!res.ok || !res.body) throw new Error("Failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const lines = decoder.decode(value, { stream: true }).split("\n");
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const delta = JSON.parse(data).choices?.[0]?.delta?.content ?? "";
            assistantText += delta;
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: "assistant", content: assistantText };
              return updated;
            });
          } catch { /* skip */ }
        }
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong — give it another go!" }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [input, loading, messages]);

  return (
    <div className="flex" style={{ height: "calc(100dvh - 80px)" }}>

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex flex-col w-[400px] flex-shrink-0 relative overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=85"
          alt="Lush garden"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(10,28,12,0.88) 0%, rgba(13,50,18,0.80) 50%, rgba(10,28,12,0.92) 100%)" }} />

        {/* Content */}
        <div className="relative flex flex-col h-full p-8 pt-10">
          {/* Ella avatar + name */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              E
            </div>
            <div>
              <p className="font-bold text-white text-lg leading-tight">Ella</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium" style={{ color: "#a5d6a7" }}>Online now</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h1 className="font-bold text-white text-2xl leading-tight mb-3">
              Plant Problem<br />Solver
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Tell Ella what&apos;s going on with your plants. She&apos;ll diagnose the problem and recommend exactly what your soil needs.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />

          {/* Suggestions */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Try asking
            </p>
            <div className="flex flex-col gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-left text-sm px-4 py-2.5 rounded-xl transition-all duration-300 hover:bg-white/15 text-white/70 hover:text-white"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8">
            <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
              Healthy Earth · BioCare Fertilisers
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.18)" }}>
              Ella&apos;s advice is general in nature. Always read the label.
            </p>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL — chat ── */}
      <div className="flex-1 flex flex-col min-w-0" style={{ background: "#f8f6f2" }}>

        {/* Mobile header */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>E</div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Plant Problem Solver</p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-400">Ella is online</span>
            </div>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
          <div className="max-w-2xl mx-auto">

            {/* Empty state */}
            {messages.length === 0 && !started && (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center py-16">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mb-5"
                  style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)", boxShadow: "0 12px 40px rgba(45,122,58,0.30)" }}
                >
                  E
                </div>
                <h2 className="font-bold text-gray-900 text-xl mb-2">G&apos;day! I&apos;m Ella</h2>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                  Describe what&apos;s going on with your plants and I&apos;ll sort you out. Yellow leaves, patchy lawn, poor growth — I&apos;ve seen it all.
                </p>
                {/* Mobile suggestions */}
                <div className="lg:hidden mt-6 flex flex-wrap gap-2 justify-center">
                  {SUGGESTIONS.slice(0, 4).map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-xs px-3 py-2 rounded-full border transition-all hover:border-green-400 hover:text-green-700"
                      style={{ borderColor: "#e5e7eb", color: "#6b7280", background: "white" }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="space-y-5">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  style={{ animation: "fadeUp 0.4s cubic-bezier(0.32,0.72,0,1) both" }}
                >
                  {msg.role === "assistant" && (
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mb-0.5"
                      style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}
                    >
                      E
                    </div>
                  )}
                  <div
                    className="rounded-2xl px-4 py-3 text-sm leading-relaxed max-w-[75%]"
                    style={msg.role === "user"
                      ? { background: "linear-gradient(135deg, #1a5227, #2d7a3a)", color: "white", borderBottomRightRadius: "4px" }
                      : { background: "white", color: "#1f2937", borderBottomLeftRadius: "4px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)" }
                    }
                  >
                    {msg.content || (
                      <span className="flex gap-1 items-center py-0.5">
                        {[0, 150, 300].map((d) => (
                          <span key={d} className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex items-end gap-3" style={{ animation: "fadeUp 0.4s cubic-bezier(0.32,0.72,0,1) both" }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>E</div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-black/5">
                    <span className="flex gap-1 items-center py-0.5">
                      {[0, 150, 300].map((d) => <span key={d} className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
                    </span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex-shrink-0 px-4 py-2 text-center" style={{ background: "#f8f6f2", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
          <p className="text-xs" style={{ color: "#aaa" }}>Ella&apos;s advice is general in nature. Always read the product label before use.</p>
        </div>

        {/* Input bar */}
        <div className="flex-shrink-0 bg-white border-t border-gray-100 px-4 py-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="flex gap-3 items-center px-2 py-2 rounded-2xl transition-all duration-300"
              style={{ background: "#f4f6f4", border: "1.5px solid rgba(45,122,58,0.15)" }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask Ella about your plants…"
                disabled={loading}
                className="flex-1 bg-transparent text-sm px-3 py-2 focus:outline-none placeholder-gray-400 disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:opacity-90 disabled:opacity-30 active:scale-95"
                style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)", boxShadow: "0 4px 12px rgba(45,122,58,0.35)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fade-up keyframe */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
