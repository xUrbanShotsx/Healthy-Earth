"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  { icon: "🌿", text: "My lawn has yellow patches" },
  { icon: "🍅", text: "Best fertiliser for tomatoes?" },
  { icon: "🌱", text: "How do I fix clay soil?" },
  { icon: "🌳", text: "My fruit trees won't flower" },
  { icon: "🍃", text: "Plants look pale and weak" },
  { icon: "🔬", text: "How to improve soil biology?" },
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
    <div className="relative flex flex-col" style={{ minHeight: "calc(100dvh - 80px)" }}>

      {/* ── Full-page background ── */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(8,22,10,0.82) 0%, rgba(12,35,15,0.75) 50%, rgba(8,22,10,0.88) 100%)" }} />
      </div>

      {/* ── Page layout ── */}
      <div className="flex flex-col flex-1" style={{ height: "calc(100dvh - 80px)" }}>

        {/* ── Hero header ── */}
        <div className="flex-shrink-0 pt-10 pb-6 px-4 text-center">
          {/* Avatar */}
          <div className="relative inline-block mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto"
              style={{
                background: "linear-gradient(135deg, #1a5227, #2d7a3a)",
                boxShadow: "0 0 0 3px rgba(111,207,124,0.25), 0 12px 40px rgba(45,122,58,0.4)",
              }}
            >
              E
            </div>
            {/* Live indicator */}
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white/10 flex items-center justify-center" style={{ background: "#0d1f10" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse block" />
            </span>
          </div>
          <h1 className="font-bold text-white text-xl leading-tight">Plant Problem Solver</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Powered by Ella · Healthy Earth</p>
        </div>

        {/* ── Chat container ── */}
        <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto px-4 pb-4 min-h-0">
          <div
            className="flex flex-col flex-1 rounded-3xl overflow-hidden min-h-0"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">

              {/* Empty state */}
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center py-8">
                  <p className="font-semibold text-white text-base mb-1">G&apos;day! I&apos;m Ella 👋</p>
                  <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Tell me what&apos;s going on with your plants and I&apos;ll sort you out.
                  </p>
                  {/* Suggestion grid */}
                  <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s.text}
                        onClick={() => sendMessage(s.text)}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-all duration-300 hover:bg-white/15 active:scale-95"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        <span className="text-base flex-shrink-0">{s.icon}</span>
                        <span className="leading-snug">{s.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message bubbles */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  style={{ animation: "fadeUp 0.45s cubic-bezier(0.32,0.72,0,1) both" }}
                >
                  {msg.role === "assistant" && (
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mb-0.5"
                      style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}
                    >
                      E
                    </div>
                  )}
                  <div
                    className="rounded-2xl px-4 py-3 text-sm leading-relaxed max-w-[80%]"
                    style={msg.role === "user"
                      ? {
                          background: "linear-gradient(135deg, #1a5227, #2d7a3a)",
                          color: "white",
                          borderBottomRightRadius: "6px",
                          boxShadow: "0 4px 16px rgba(45,122,58,0.35)",
                        }
                      : {
                          background: "rgba(255,255,255,0.10)",
                          color: "rgba(255,255,255,0.90)",
                          borderBottomLeftRadius: "6px",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }
                    }
                  >
                    {msg.content || (
                      <span className="flex gap-1 items-center py-0.5">
                        {[0, 150, 300].map((d) => (
                          <span key={d} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "rgba(255,255,255,0.4)", animationDelay: `${d}ms` }} />
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex items-end gap-2.5" style={{ animation: "fadeUp 0.45s cubic-bezier(0.32,0.72,0,1) both" }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>E</div>
                  <div className="rounded-2xl rounded-bl-md px-4 py-3" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="flex gap-1 items-center py-0.5">
                      {[0, 150, 300].map((d) => (
                        <span key={d} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "rgba(255,255,255,0.4)", animationDelay: `${d}ms` }} />
                      ))}
                    </span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Disclaimer */}
            <div className="flex-shrink-0 px-5 py-1.5 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                Ella&apos;s advice is general in nature. Always read the product label before use.
              </p>
            </div>

            {/* Input bar */}
            <div className="flex-shrink-0 px-4 py-4">
              <div
                className="flex items-center gap-2 px-2 py-2 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask Ella about your plants…"
                  disabled={loading}
                  className="flex-1 bg-transparent text-sm px-3 py-2 focus:outline-none disabled:opacity-50"
                  style={{ color: "white" }}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:opacity-90 disabled:opacity-25 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #1a5227, #2d7a3a)",
                    boxShadow: "0 4px 16px rgba(45,122,58,0.45)",
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        input::placeholder { color: rgba(255,255,255,0.35); }
      `}</style>
    </div>
  );
}
