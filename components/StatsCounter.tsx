"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 25, suffix: "", label: "formulations" },
  { num: 51, suffix: "%", label: "SiO₂ in SilicaMax" },
  { num: 30, suffix: "+", label: "years of research" },
  { num: 0,  suffix: "", label: "synthetic additives" },
  { num: 100, suffix: "%", label: "Australian-made" },
];

function Counter({ num, suffix, label, started }: { num: number; suffix: string; label: string; started: boolean }) {
  const [display, setDisplay] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;
    if (num === 0) { setDisplay(0); return; }

    const duration = 1400;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [started, num]);

  return (
    <div className="text-center flex-1 min-w-[120px] flex flex-col items-center">
      <div
        className="font-mono font-bold tabular-nums transition-all"
        style={{
          fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
          color: "white",
          lineHeight: 1.1,
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {display}{suffix}
      </div>
      <div
        className="text-xs mt-1 uppercase tracking-widest font-semibold"
        style={{
          color: "#6fcf7c",
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#0d1f10" }} className="py-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {stats.map((s) => (
            <Counter key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
