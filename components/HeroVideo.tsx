"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  return (
    <>
      <video
        ref={videoRef}
        src="/ella-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center md:object-right-top"
      />

      {/* Chat to Ella tab — bottom centre */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("ella:open", { detail: { fullscreen: true } }))}
          className="group flex items-center gap-3 px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
        >
          {/* Pulsing green dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#6fcf7c" }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#4caf50" }} />
          </span>
          <span className="text-white font-semibold text-sm tracking-wide">Chat to Ella</span>
          {/* Arrow */}
          <svg className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mute / unmute toggle — top right */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
        style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
      >
        {muted ? (
          /* Muted — speaker with X */
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m2-2l-2 2m0 0l-2 2" />
          </svg>
        ) : (
          /* Unmuted — speaker with sound waves */
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728" />
          </svg>
        )}
      </button>
    </>
  );
}
