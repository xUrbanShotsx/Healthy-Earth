"use client";

export function EllaHeroButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("ella:open", { detail: { fullscreen: true } }))}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm border border-white/25 transition-all hover:border-white/50 hover:bg-white/10"
    >
      Ask Ella for a Program
    </button>
  );
}

export function EllaCtaButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("ella:open", { detail: { fullscreen: true } }))}
      className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 transition-all hover:bg-green-50"
      style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}
    >
      Ask Ella for a Program
    </button>
  );
}
