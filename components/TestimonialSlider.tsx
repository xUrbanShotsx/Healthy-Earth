"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  { name: "James T.", location: "Swan Hill, VIC", crop: "Cotton grower", text: "Using SilicaMax across our operation for two seasons. Noticeably better plant health and the soil biology has really come alive. Went from needing three fungicide sprays to one.", rating: 5 },
  { name: "Sarah M.", location: "Brisbane, QLD", crop: "Home lawn", text: "My lawn went from patchy and yellow to properly green within 3 weeks. I described the problem to Ella and she nailed exactly what it needed on the first try.", rating: 5 },
  { name: "Linda H.", location: "Perth, WA", crop: "Citrus orchard", text: "I've tried three other fertiliser brands on my citrus. HealthyEarth is the only one that gave me consistent colour improvement and heavier fruit. The Booster at fruit fill made a real difference.", rating: 5 },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 380);
  }, [animating]);

  const next = useCallback(() => {
    goTo((active + 1) % testimonials.length, "left");
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length, "right");
  }, [active, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#2d7a3a" }}>Grower results</p>
          <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>From Australian growers.</h2>
        </div>

        {/* Slide */}
        <div className="relative overflow-hidden">
          <div
            className="bg-white rounded-3xl p-10 md:p-14 border border-gray-100 flex flex-col items-center text-center transition-all"
            style={{
              boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "left" ? "-40px" : "40px"})`
                : "translateX(0)",
              transition: "opacity 0.38s ease, transform 0.38s ease",
            }}
          >
            {/* Quote mark */}
            <div className="text-6xl font-sans leading-none mb-6" style={{ color: "#2d7a3a", opacity: 0.2 }}>&ldquo;</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, j) => (
                <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl">{t.text}</p>

            {/* Author */}
            <div>
              <p className="font-bold text-gray-900">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.crop} · {t.location}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-green-50"
            style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}
            aria-label="Previous review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "left" : "right")}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  background: i === active ? "#2d7a3a" : "#d1d5db",
                }}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-green-50"
            style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}
            aria-label="Next review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
