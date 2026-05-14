"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";

const productDropdown = [
  { label: "Gardening", href: "/products?category=Gardening", icon: "shovel" as const, desc: "Home garden nutrition" },
  { label: "Farming", href: "/products?category=Farming", icon: "wheat" as const, desc: "Broadacre & horticulture" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/My Logo.png" alt="Healthy BioCare" width={260} height={114} className="h-16 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors">Home</Link>

            {/* Products dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50">
                  <Link href="/products" className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-green-50 rounded-xl mb-1 transition-colors" onClick={() => setDropdownOpen(false)}>
                    All Products →
                  </Link>
                  <div className="border-t border-gray-100 pt-1">
                    {productDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 transition-colors group"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="text-green-700"><Icon name={item.icon} className="w-5 h-5" /></span>
                        <div>
                          <p className="text-sm font-medium text-gray-900 group-hover:text-green-700">{item.label}</p>
                          <p className="text-xs text-gray-400">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/chat-assistant" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors">Plant Problem Solver</Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors">About</Link>
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/chat-assistant" className="text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all hover:bg-green-700 hover:text-white hover:border-green-700" style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }}>
              Ask Ella
            </Link>
            <Link href="/products" className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-all hover:opacity-90 shadow-sm" style={{ background: "#2d7a3a" }}>
              Browse Products
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3">
            <Link href="/" className="block px-4 py-2.5 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Products</p>
              {[{ label: "All Products", href: "/products" }, ...productDropdown].map((item) => (
                <Link key={item.href} href={item.href} className="block py-1.5 text-sm text-gray-700" onClick={() => setMenuOpen(false)}>{"icon" in item ? `${item.icon} ` : ""}{item.label}</Link>
              ))}
            </div>
            <Link href="/chat-assistant" className="block px-4 py-2.5 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Plant Problem Solver</Link>
            <Link href="/about" className="block px-4 py-2.5 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>About</Link>
            <div className="px-4 pt-3 flex flex-col gap-2">
              <Link href="/chat-assistant" className="text-center text-sm font-semibold py-2.5 rounded-full border-2" style={{ borderColor: "#2d7a3a", color: "#2d7a3a" }} onClick={() => setMenuOpen(false)}>Ask Ella</Link>
              <Link href="/products" className="text-center text-sm font-semibold py-2.5 rounded-full text-white" style={{ background: "#2d7a3a" }} onClick={() => setMenuOpen(false)}>Browse Products</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
