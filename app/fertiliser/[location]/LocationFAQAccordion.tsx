"use client";

import { useState } from "react";
import type { LocationFAQ } from "@/lib/location-seo-data";

export default function LocationFAQAccordion({ faqs }: { faqs: LocationFAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
          >
            <span className="font-medium text-gray-900 text-sm leading-snug">{faq.q}</span>
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform"
              style={{
                background: "#2d7a3a",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? "600px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.35s ease",
            }}
          >
            <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
