"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function EllaFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <Link
      href="/chat-assistant"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full text-white font-semibold text-sm shadow-2xl transition-all hover:scale-105 hover:shadow-green-900/30"
      style={{ background: "linear-gradient(135deg, #2d7a3a, #4caf50)" }}
      aria-label="Ask Ella — Plant Problem Solver"
    >
      <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-xs font-bold">E</div>
      <span>Ask Ella</span>
      <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
    </Link>
  );
}
