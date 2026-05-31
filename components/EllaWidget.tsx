"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Message = { role: "user" | "assistant"; content: string };

/* Pick the best Australian female voice available */
function getAussieVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  // Prefer en-AU voices, then any English female
  return (
    voices.find((v) => v.lang === "en-AU" && /female|karen|catherine|lee/i.test(v.name)) ||
    voices.find((v) => v.lang === "en-AU") ||
    voices.find((v) => v.lang.startsWith("en") && /female|zira|samantha|victoria/i.test(v.name)) ||
    voices.find((v) => v.lang.startsWith("en")) ||
    null
  );
}

function speakText(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = getAussieVoice();
  utterance.rate = 1.05;
  utterance.pitch = 1.05;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

export default function EllaWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  // Listen for external open events (from "Ask Ella" buttons)
  useEffect(() => {
    function handleOpen() { setOpen(true); }
    window.addEventListener("ella:open", handleOpen);
    return () => window.removeEventListener("ella:open", handleOpen);
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // Stop speech when widget closes
  useEffect(() => {
    if (!open) window.speechSynthesis?.cancel();
  }, [open]);

  // Track speaking state
  useEffect(() => {
    if (!speaking) return;
    const interval = setInterval(() => {
      if (!window.speechSynthesis.speaking) setSpeaking(false);
    }, 300);
    return () => clearInterval(interval);
  }, [speaking]);

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  const sendMessage = useCallback(async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;

    stopSpeaking();

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

      if (!res.ok || !res.body) throw new Error("Failed to connect");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content ?? "";
            assistantText += delta;
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: "assistant", content: assistantText };
              return updated;
            });
          } catch {
            // skip malformed chunks
          }
        }
      }

      // Speak Ella's reply when done streaming
      if (voiceEnabled && assistantText) {
        // Voices may not be loaded yet — wait briefly
        setTimeout(() => {
          speakText(assistantText);
          setSpeaking(true);
        }, 100);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Give it another go in a sec!" },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, voiceEnabled]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function startListening() {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support voice input. Try Chrome.");
      return;
    }

    stopSpeaking();
    const rec = new SpeechRecognition();
    rec.lang = "en-AU";
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      // Auto-send after a short delay so user sees what was heard
      setTimeout(() => sendMessage(transcript), 300);
    };

    recognitionRef.current = rec;
    rec.start();
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-20 right-4 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden"
          style={{ width: "360px", maxWidth: "calc(100vw - 2rem)", height: "540px", maxHeight: "calc(100vh - 120px)", background: "#fff", border: "1px solid #e5e7eb" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "rgba(255,255,255,0.2)" }}>
              E
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Ella</p>
              <p className="text-green-200 text-xs">Healthy Earth Plant Expert</p>
            </div>

            {/* Voice on/off toggle */}
            <button
              onClick={() => { setVoiceEnabled((v) => !v); if (speaking) stopSpeaking(); }}
              aria-label={voiceEnabled ? "Mute Ella's voice" : "Unmute Ella's voice"}
              className="text-white/70 hover:text-white transition-colors p-1 flex-shrink-0"
              title={voiceEnabled ? "Mute voice" : "Unmute voice"}
            >
              {voiceEnabled ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m2-2l-2 2m0 0l-2 2" />
                </svg>
              )}
            </button>

            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors p-1 flex-shrink-0" aria-label="Close chat">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: "#f9f6f0" }}>
            {messages.length === 0 && (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold" style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}>
                  E
                </div>
                <p className="text-sm font-semibold text-gray-800 mb-1">G&apos;day! I&apos;m Ella 👋</p>
                <p className="text-xs text-gray-500 leading-relaxed">Type or tap the mic and tell me about your plant problem — I&apos;ll sort you out!</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-0.5" style={{ background: "#2d7a3a" }}>
                    E
                  </div>
                )}
                <div
                  className="max-w-[78%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                  style={msg.role === "user"
                    ? { background: "#2d7a3a", color: "white", borderBottomRightRadius: "4px" }
                    : { background: "white", color: "#1f2937", borderBottomLeftRadius: "4px", border: "1px solid #e5e7eb" }}
                >
                  {msg.content || (loading && i === messages.length - 1 ? (
                    <span className="flex gap-1 items-center py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  ) : "")}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-0.5" style={{ background: "#2d7a3a" }}>E</div>
                <div className="px-3 py-2.5 rounded-2xl bg-white border border-gray-200" style={{ borderBottomLeftRadius: "4px" }}>
                  <span className="flex gap-1 items-center py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Speaking indicator */}
          {speaking && (
            <div className="px-4 py-1.5 flex items-center gap-2 flex-shrink-0" style={{ background: "#f0faf2", borderTop: "1px solid #d1fae5" }}>
              <span className="flex gap-0.5 items-end h-3">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="w-0.5 rounded-full bg-green-500 animate-bounce" style={{ height: `${[8, 12, 10, 6][i]}px`, animationDelay: `${i * 100}ms` }} />
                ))}
              </span>
              <span className="text-xs text-green-700 font-medium flex-1">Ella is speaking…</span>
              <button onClick={stopSpeaking} className="text-xs text-green-600 hover:text-green-800 font-medium">Stop</button>
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 flex gap-2 flex-shrink-0 border-t border-gray-100 bg-white">
            {/* Mic button */}
            <button
              onClick={listening ? stopListening : startListening}
              disabled={loading}
              aria-label={listening ? "Stop listening" : "Speak to Ella"}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-40"
              style={listening
                ? { background: "#dc2626", color: "white" }
                : { background: "#f3f4f6", color: "#6b7280" }}
            >
              {listening ? (
                /* Stop / recording icon */
                <span className="w-3 h-3 rounded-sm bg-white" />
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              )}
            </button>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={listening ? "Listening…" : "Ask Ella anything about plants…"}
              disabled={loading || listening}
              className="flex-1 text-sm px-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all disabled:opacity-50"
            />

            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90 disabled:opacity-40 flex-shrink-0"
              style={{ background: "#2d7a3a" }}
              aria-label="Send"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Launcher button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all hover:scale-105 hover:shadow-xl"
        style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}
        aria-label={open ? "Close Ella chat" : "Open Ella chat"}
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
}
