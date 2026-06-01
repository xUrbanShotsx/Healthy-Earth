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

      {/* Chat to Ella — bold CTA bottom centre */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("ella:open", { detail: { fullscreen: true } }))}
          className="group relative flex items-center gap-4 pl-5 pr-2 py-2 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #1a5227, #2d7a3a)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 8px 40px rgba(45,122,58,0.55), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {/* Pulsing live dot */}
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#a5d6a7" }} />
            <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#6fcf7c" }} />
          </span>

          {/* Label */}
          <span className="text-white font-bold text-base tracking-wide pr-1">Chat to Ella</span>

          {/* Button-in-button arrow */}
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
