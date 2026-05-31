"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "My tomatoes have yellow leaves",
  "How do I green up my lawn?",
  "What's eating my plants?",
  "My soil is rock hard — help!",
];


export default function EllaWidget() {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    function handleOpen(e: Event) {
      const detail = (e as CustomEvent).detail;
      setFullscreen(!!detail?.fullscreen);
      setOpen(true);
      const prompt = detail?.prompt as string | undefined;
      if (prompt) setTimeout(() => sendMessage(prompt), 150);
    }
    window.addEventListener("ella:open", handleOpen);
    return () => window.removeEventListener("ella:open", handleOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    if (!open) {
      audioRef.current?.pause();
      audioRef.current = null;
      setSpeaking(false);
    }
  }, [open]);

  useEffect(() => {
    if (fullscreen && open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [fullscreen, open]);

  const stopSpeaking = useCallback(() => {
    audioRef.current?.pause();
    audioRef.current = null;
    setSpeaking(false);
  }, []);

  const sendMessage = useCallback(async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;

    audioRef.current?.pause();
    audioRef.current = null;
    setSpeaking(false);

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

      if (voiceEnabled && assistantText) {
        try {
          const audioRes = await fetch("/api/speak", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: assistantText }),
          });
          if (audioRes.ok) {
            const blob = await audioRes.blob();
            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            audioRef.current = audio;
            setSpeaking(true);
            audio.play();
            audio.onended = () => { URL.revokeObjectURL(url); setSpeaking(false); };
          }
        } catch { /* fall back to silence if TTS fails */ }
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong. Give it another go in a sec!" }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, voiceEnabled]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  }, [sendMessage]);

  function startListening() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { alert("Voice input needs Chrome or Safari."); return; }
    audioRef.current?.pause();
    audioRef.current = null;
    setSpeaking(false);
    const rec = new SR();
    rec.lang = "en-AU";
    rec.interimResults = false;
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      setTimeout(() => sendMessage(transcript), 300);
    };
    recognitionRef.current = rec;
    rec.start();
  }

  function stopListening() { recognitionRef.current?.stop(); setListening(false); }
  function close() { setOpen(false); stopSpeaking(); }

  // ── Shared JSX pieces (plain variables, not components) ──

  const voiceToggleJsx = (
    <button
      onClick={() => { setVoiceEnabled((v) => !v); if (speaking) stopSpeaking(); }}
      aria-label={voiceEnabled ? "Mute Ella's voice" : "Unmute Ella's voice"}
      className="text-white/70 hover:text-white transition-colors p-1 flex-shrink-0"
    >
      {voiceEnabled
        ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728" />
          </svg>
        : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m2-2l-2 2m0 0l-2 2" />
          </svg>}
    </button>
  );

  const disclaimerJsx = (
    <div className="flex-shrink-0 px-4 py-1.5 text-center" style={{ background: "#f9f6f0", borderTop: "1px solid #ede9e1" }}>
      <p className="text-xs text-gray-400 leading-snug">Ella&apos;s advice is general in nature. Always read the product label. Healthy Earth does not guarantee results for every situation.</p>
    </div>
  );

  const dotsJsx = (
    <span className="flex gap-1 items-center py-0.5">
      {[0, 150, 300].map((d) => <span key={d} className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
    </span>
  );

  const messagesJsx = (compact: boolean) => (
    <div className={`flex-1 overflow-y-auto ${compact ? "px-4 py-3 space-y-2.5" : "px-6 py-6 space-y-4"}`} style={{ background: compact ? "#f9f6f0" : "#fafaf8" }}>
      {messages.length === 0 && (
        <div className={`text-center ${compact ? "py-4" : "py-10"}`}>
          <div className={`rounded-full mx-auto flex items-center justify-center text-white font-bold ${compact ? "w-12 h-12 text-lg mb-2" : "w-20 h-20 text-3xl mb-4"}`} style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
            E
          </div>
          <p className={`font-semibold text-gray-800 ${compact ? "text-sm mb-1" : "text-lg mb-2"}`}>G&apos;day! I&apos;m Ella 👋</p>
          <p className={`text-gray-500 leading-relaxed ${compact ? "text-xs" : "text-sm max-w-xs mx-auto"}`}>
            Tell me what&apos;s going on with your plants and I&apos;ll sort you out!
          </p>
          {!compact && (
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => sendMessage(s)}
                  className="text-xs px-3 py-1.5 rounded-full border transition-all hover:bg-green-50 hover:border-green-400 hover:text-green-700 text-gray-600 border-gray-200">
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
          {msg.role === "assistant" && (
            <div className={`rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${compact ? "w-6 h-6 text-xs" : "w-8 h-8 text-sm"}`} style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
              E
            </div>
          )}
          <div
            className={`rounded-2xl leading-relaxed whitespace-pre-wrap ${compact ? "max-w-[78%] px-3 py-2 text-sm" : "max-w-[70%] px-4 py-3 text-sm"}`}
            style={msg.role === "user"
              ? { background: "linear-gradient(135deg, #1a5227, #2d7a3a)", color: "white", borderBottomRightRadius: "4px" }
              : { background: "white", color: "#1f2937", borderBottomLeftRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", border: "1px solid #f0ede8" }}
          >
            {msg.content || (loading && i === messages.length - 1 ? dotsJsx : "")}
          </div>
        </div>
      ))}

      {loading && messages[messages.length - 1]?.role === "user" && (
        <div className="flex justify-start items-end gap-2">
          <div className={`rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${compact ? "w-6 h-6 text-xs" : "w-8 h-8 text-sm"}`} style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>E</div>
          <div className="px-3 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-sm" style={{ borderBottomLeftRadius: "4px" }}>
            {dotsJsx}
          </div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );

  const inputBarJsx = (compact: boolean) => (
    <div className={`flex-shrink-0 bg-white border-t border-gray-100 ${compact ? "px-3 py-2.5" : "px-4 py-4"}`}>
      {speaking && (
        <div className="flex items-center gap-2 mb-2 px-1">
          <span className="flex gap-0.5 items-end h-3">
            {[8, 12, 10, 6].map((h, i) => (
              <span key={i} className="w-0.5 rounded-full bg-green-500 animate-bounce" style={{ height: `${h}px`, animationDelay: `${i * 100}ms` }} />
            ))}
          </span>
          <span className="text-xs text-green-700 font-medium flex-1">Ella is speaking…</span>
          <button onClick={stopSpeaking} className="text-xs text-green-600 hover:text-green-800 font-medium">Stop</button>
        </div>
      )}
      <div className="flex gap-2 items-center">
        <button
          onClick={listening ? stopListening : startListening}
          disabled={loading}
          aria-label={listening ? "Stop listening" : "Speak to Ella"}
          className={`flex-shrink-0 rounded-full flex items-center justify-center transition-all disabled:opacity-40 ${compact ? "w-8 h-8" : "w-10 h-10"}`}
          style={listening ? { background: "#dc2626", color: "white" } : { background: "#f3f4f6", color: "#6b7280" }}
        >
          {listening
            ? <span className={`rounded-sm bg-white ${compact ? "w-2.5 h-2.5" : "w-3 h-3"}`} />
            : <svg className={compact ? "w-3.5 h-3.5" : "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>}
        </button>

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={listening ? "Listening…" : "Ask Ella anything about plants…"}
          disabled={loading || listening}
          className={`flex-1 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all disabled:opacity-50 ${compact ? "text-sm px-3 py-2" : "text-sm px-4 py-2.5"}`}
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          aria-label="Send"
          className={`flex-shrink-0 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90 disabled:opacity-40 ${compact ? "w-8 h-8" : "w-10 h-10"}`}
          style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}
        >
          <svg className={compact ? "w-3.5 h-3.5" : "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );

  /* ── Fullscreen mode ───────────────────────────────────── */
  if (open && fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex" style={{ background: "#fafaf8" }}>
        {/* Left panel */}
        <div className="hidden lg:flex flex-col w-80 flex-shrink-0 text-white relative overflow-hidden" style={{ background: "linear-gradient(160deg, #0f3318 0%, #1a5227 50%, #2d7a3a 100%)" }}>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent)" }} />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent)" }} />
          <div className="relative flex-1 flex flex-col p-8 pt-12">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>E</div>
            <h1 className="text-2xl font-bold mb-1">Hey, I&apos;m Ella</h1>
            <p className="text-green-200 text-sm mb-8 leading-relaxed">Your personal plant expert from Healthy Earth. Ask me anything — I&apos;ve been gardening for 20 years and I love a good plant problem.</p>
            <p className="text-xs font-semibold text-green-300 uppercase tracking-widest mb-3">Try asking me…</p>
            <div className="space-y-2">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => sendMessage(s)}
                  className="w-full text-left text-sm px-4 py-2.5 rounded-xl transition-all hover:bg-white/20 text-white/80 hover:text-white"
                  style={{ background: "rgba(255,255,255,0.08)" }}>
                  {s}
                </button>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <p className="text-xs text-green-300/60">Healthy Earth · BioCare Fertilisers</p>
              <p className="text-xs text-green-300/60">New South Wales, Australia</p>
            </div>
          </div>
        </div>

        {/* Right panel — chat */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-white flex-shrink-0">
            <div className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>E</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">Plant Problem Solver</p>
              <p className="text-xs text-gray-400">Powered by Ella · Healthy Earth</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-400 mr-3">Online</span>
            </div>
            {voiceToggleJsx}
            <button onClick={close} className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {messagesJsx(false)}
          {disclaimerJsx}
          {inputBarJsx(false)}
        </div>
      </div>
    );
  }

  /* ── Widget mode ───────────────────────────────────────── */
  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 flex flex-col rounded-2xl overflow-hidden"
          style={{ width: "360px", maxWidth: "calc(100vw - 2rem)", height: "520px", maxHeight: "calc(100vh - 120px)", background: "#fff", boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}>
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)" }}>E</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-white font-semibold text-sm leading-tight">Ella</p>
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
              </div>
              <p className="text-green-200/80 text-xs">Plant Expert · Healthy Earth</p>
            </div>
            {voiceToggleJsx}
            <button onClick={close} className="text-white/60 hover:text-white transition-colors p-1 flex-shrink-0" aria-label="Close">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {messagesJsx(true)}
          {disclaimerJsx}
          {inputBarJsx(true)}
        </div>
      )}

      {/* Launcher */}
      <button
        onClick={() => { setFullscreen(false); setOpen((o) => !o); }}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white transition-all hover:scale-105"
        style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)", boxShadow: "0 4px 20px rgba(45,122,58,0.5)" }}
        aria-label={open ? "Close Ella chat" : "Chat with Ella"}
      >
        {open
          ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
      </button>
    </>
  );
}
