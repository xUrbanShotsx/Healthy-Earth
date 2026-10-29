"use client";

import { useRef, useState, useEffect } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const playsRef = useRef(0);

  function handleEnded() {
    playsRef.current += 1;
    if (playsRef.current < 3 && videoRef.current) {
      videoRef.current.play();
    }
  }

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  // Notify EllaWidget when hero enters/exits viewport (mobile only)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(new CustomEvent(
          entry.isIntersecting ? "ella:hero-enter" : "ella:hero-exit"
        ));
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="contents">
      <video
        ref={videoRef}
        src="/Video.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover object-center md:object-right-top"
      />

      {/* Chat to Ella — full-width bar on mobile, centred pill on desktop */}
      {/* Mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-20">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("ella:open", { detail: { fullscreen: true } }))}
          className="w-full flex items-center justify-center gap-3 py-4 active:opacity-90"
          style={{ background: "linear-gradient(135deg, #1a5227, #2d7a3a)" }}
        >
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#a5d6a7" }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#6fcf7c" }} />
          </span>
          <span className="text-white font-bold text-base tracking-wide">Chat to Ella</span>
        </button>
      </div>

      {/* Desktop — centred pill */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("ella:open", { detail: { fullscreen: true } }))}
          className="group relative flex items-center gap-4 pl-5 pr-2 py-2 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #1a5227, #2d7a3a)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 8px 40px rgba(45,122,58,0.55), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#a5d6a7" }} />
            <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#6fcf7c" }} />
          </span>
          <span className="text-white font-bold text-base tracking-wide pr-1">Chat to Ella</span>
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Mute / unmute toggle — top right */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-center gap-3">
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-lg tracking-wide transition-all active:scale-95 hover:scale-105"
          style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.35)", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
        >
          {muted ? "Click to unmute" : "Click to mute"}
        </button>
      </div>
    </div>
  );
}
