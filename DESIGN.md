---
version: "1.0"
name: HealthyEarth-BioCare
description: >
  HealthyEarth by BioCare Fertilisers is an Australian-owned agricultural brand built on regenerative
  farming principles. The visual language is grounded, earthy, and confident — deep forest greens
  anchor every surface, hero sections use full-bleed farm photography under dark overlays, and
  typography is tight-tracked bold sans at display sizes with relaxed body copy. Buttons are pill-shaped.
  Cards are either borderless-with-shadow (product cards) or sharp-cornered with a left green accent
  (info cards). The system avoids gradients except on dark hero overlays. White is the default
  background; cream (#f7f4ef) is reserved for terms/privacy pages only. An amber (#f59e0b)
  accent signals drought/warning contexts exclusively.
---

colors:
  # Brand greens
  primary: "#2d7a3a"
  primary-dark: "#1a5227"
  primary-deep: "#0d3318"
  primary-light: "#8bc34a"
  primary-glow: "#6fcf7c"
  primary-soft: "#e8f5e9"
  primary-muted: "#c8e6c9"

  # Hero / dark surfaces
  hero-base: "#0b1f0e"
  hero-overlay-start: "rgba(4,14,5,0.93)"
  hero-overlay-end: "rgba(14,38,16,0.45)"
  stats-band: "#2d7a3a"

  # Accent (drought / warning only)
  amber: "#f59e0b"

  # Canvas
  canvas: "#ffffff"
  canvas-cream: "#f7f4ef"       # terms/privacy pages only
  canvas-dot-pattern: "#2d7a3a18"

  # Text
  ink: "#111827"               # gray-900
  ink-secondary: "#4b5563"     # gray-600
  ink-muted: "#9ca3af"         # gray-400
  ink-xmuted: "#d1d5db"        # gray-300
  on-primary: "#ffffff"
  on-dark-primary: "#6fcf7c"   # green text on dark hero

  # Borders / hairlines
  hairline: "rgba(0,0,0,0.07)"
  hairline-strong: "rgba(0,0,0,0.12)"

typography:
  display-hero:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"

  display-section:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"

  display-card:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"

  heading-lg:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"       # text-lg
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0"

  heading-base:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"

  body-lg:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"

  body-md:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"       # text-sm
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"

  label-caps:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"        # text-xs
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "0.1em"
    textTransform: "uppercase"

  button:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "0"

rounded:
  none: "0"
  sm: "0.5rem"     # 8px — input fields, small badges
  md: "0.75rem"    # 12px — feature cards, image overlays
  lg: "1rem"       # 16px — product cards
  xl: "1.25rem"    # 20px — dropdown panels, popups
  pill: "9999px"   # all buttons, category filter chips, tags

spacing:
  xxs: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "32px"
  section-sm: "48px"   # py-12
  section-md: "64px"   # py-16 / py-20
  section-lg: "96px"   # py-24

shadows:
  card: "0 2px 16px rgba(0,0,0,0.08)"
  card-hover: "0 8px 32px rgba(0,0,0,0.12)"
  card-focus: "0 12px 40px rgba(45,122,58,0.15)"
  dropdown: "0 8px 32px rgba(0,0,0,0.12)"
  button-green: "0 4px 16px rgba(45,122,58,0.35)"

components:
  # ── Buttons ────────────────────────────────────────────────────────────────
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
    shadow: "{shadows.button-green}"
    hover: "opacity 0.9, scale 1.0"
    active: "scale 0.95"

  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "2px solid {colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    hover: "background {colors.primary-soft}"

  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-primary}"
    border: "1px solid rgba(255,255,255,0.25)"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    hover: "background rgba(255,255,255,0.10), border rgba(255,255,255,0.50)"

  # ── Navigation ─────────────────────────────────────────────────────────────
  navbar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-md}"
    height: "80px"
    position: "sticky top-0 z-50"
    border: "1px solid {colors.hairline}"
    shadow: "0 1px 3px rgba(0,0,0,0.06)"
    activeColor: "{colors.primary}"
    hoverBackground: "{colors.primary-soft}"

  navbar-dropdown:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    shadow: "{shadows.dropdown}"
    border: "1px solid {colors.hairline}"
    padding: "8px"
    width: "288px"

  # ── Cards ──────────────────────────────────────────────────────────────────
  card-product:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"       # sharp corners, brand feel
    border: "1px solid {colors.hairline}"
    shadow: "{shadows.card}"
    padding: "24px"
    imageAspect: "1/1"
    imageBackground: "#FFFBF6"
    hover: "translateY(-4px), shadow card-hover"

  card-info-accent:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "1.5px solid {colors.hairline}"
    accentBar: "4px left, linear-gradient(to bottom, {colors.primary}, {colors.primary-light})"
    padding: "32px"
    hover: "border {colors.primary}, shadow card-focus"

  card-stat-overlay:
    backgroundColor: "rgba(0,0,0,0.70)"
    backdropFilter: "blur(12px)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    border: "1px solid rgba(255,255,255,0.10)"
    padding: "20px"

  # ── Hero ───────────────────────────────────────────────────────────────────
  hero-dark:
    height: "100svh"
    minHeight: "600px"
    backgroundBase: "{colors.hero-base}"
    overlayGradient: "linear-gradient(135deg, rgba(4,14,5,0.93) 0%, rgba(8,24,10,0.78) 55%, rgba(14,38,16,0.45) 100%)"
    imageParallax: true
    textColor: "{colors.on-primary}"
    taglineColor: "{colors.on-dark-primary}"
    scrollIndicator: true

  hero-green:
    background: "linear-gradient(135deg, {colors.primary-dark}, {colors.primary})"
    textColor: "{colors.on-primary}"
    padding: "56px 0 48px"

  # ── Stats Band ─────────────────────────────────────────────────────────────
  stats-band:
    backgroundColor: "{colors.stats-band}"
    textColor: "{colors.on-primary}"
    labelColor: "rgba(255,255,255,0.55)"
    padding: "48px 0"
    counterAnimation: "ease-out cubic-bezier, 1600ms, stagger 120ms"

  # ── Tags & Badges ──────────────────────────────────────────────────────────
  badge-category:
    backgroundColor: "dynamic per product color"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"

  badge-highlight:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"

  badge-aus-made:
    backgroundColor: "#f0faf0"
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary-muted}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"

  # ── Forms & Inputs ─────────────────────────────────────────────────────────
  input-search:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline-strong}"
    rounded: "{rounded.pill}"
    padding: "10px 16px 10px 40px"
    focusBorder: "{colors.primary-light}"
    focusRing: "2px {colors.primary-soft}"

  # ── Ella AI Widget ─────────────────────────────────────────────────────────
  ella-bubble:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    shadow: "{shadows.button-green}"
    position: "fixed bottom-6 right-6 z-50"

  ella-panel:
    backgroundColor: "{colors.canvas}"
    rounded: "16px 16px 0 0"
    shadow: "0 -4px 32px rgba(0,0,0,0.15)"
    maxWidth: "420px"
    headerBackground: "linear-gradient(135deg, {colors.primary-dark}, {colors.primary})"

layout:
  maxWidth: "1280px"          # max-w-7xl
  contentMaxWidth: "896px"    # max-w-4xl for text pages
  navHeight: "80px"
  gridProduct: "1 / 2 / 3 col, gap 24px"
  gridInfo: "1 / 2 col, gap 32px"
  sectionPaddingY: "80px–96px"
  containerPaddingX: "16px / 24px / 32px (sm/md/lg breakpoints)"

animation:
  easing: "cubic-bezier(0.32, 0.72, 0, 1)"
  duration-fast: "200ms"
  duration-base: "300ms"
  duration-reveal: "750ms"
  duration-counter: "1600ms"
  reveal-y: "30px → 0"
  reveal-opacity: "0 → 1"
  stagger-base: "100ms"
  parallax-factor: "0.35"     # hero image scrolls at 35% of scroll speed

---

## Overview

HealthyEarth uses a **single-primary-green system**. The brand green (`#2d7a3a`) is the only interactive colour: it fills primary buttons, active filters, accent bars, badges, icon containers, and the stats band. Everything else is white, black, or gray. The amber (`#f59e0b`) accent is reserved **exclusively** for drought/warning contexts and must not appear elsewhere.

Dark hero sections use **real farm photography** at full viewport height with a directional gradient overlay. The parallax factor of 0.35 gives depth without motion-sickness. A subtle film-grain texture overlay at 3% opacity adds tactility on hero surfaces.

Product cards use **sharp (zero-radius) corners** — this is intentional and non-negotiable. It reads as confident and industrial. Info/content cards also use zero radius but gain an animated left accent bar as their interactive signal.

## Colors

**Primary greens** form a complete scale from `#0d3318` (deep shadow) through `#2d7a3a` (action brand) to `#6fcf7c` (on-dark text/glow). Never use the glow green on white backgrounds — it fails contrast. Use `#2d7a3a` or darker for text on white.

The **dark hero base** (`#0b1f0e`) is a near-black forest green, not pure black. This keeps the brand present even on dark surfaces.

**Canvas** is always white. The cream `#f7f4ef` appears only on terms/privacy pages for a legal-document editorial feel. Do not use it as a section alternation background.

## Typography

System sans (`system-ui, -apple-system`) is used throughout — no custom font. This keeps load times minimal for a Vercel-deployed Next.js site and reads as clean and modern on Australian browsers.

Display headlines at hero size use `font-weight: 700` with `letter-spacing: -0.025em`. This tight tracking is essential — loose tracking at large sizes looks amateurish.

The `label-caps` style (`10–12px, uppercase, tracking-widest, font-bold`) is used for every section eyebrow label in brand green. It provides rhythmic visual anchoring across all sections.

## Components

**Buttons** are always pills (`border-radius: 9999px`). Primary buttons use the brand green fill. Outline buttons use a 2px green border on white. Ghost buttons (on dark heroes) use a 1px semi-transparent white border. All buttons have `active:scale-95` feedback.

**Product cards** have no border radius. They use a soft `box-shadow` for lift, a full 1:1 image square with `#FFFBF6` warm-white background, and a bottom section with category badge, sizes, description, and two action buttons (View Details + Ask Ella).

**Info/content cards** (farming page, feature sections) also have no border radius. Their interactive signal is the animated left green accent bar that extends full-height on expansion. They support accordion expand/collapse with `max-height` CSS transition.

**The Ella widget** is the primary conversion surface. Its bubble sits `fixed bottom-right`. The panel slides up from the bottom on mobile and appears as a fixed panel on desktop. Never block the Ella bubble with other UI.

## Responsive Behaviour

- Mobile-first. Product grids go 1→2→3 col.
- Info grids go 1→2 col at `md` (768px).
- Hero text: `clamp()` scales smoothly — never hard breakpoint the headline size.
- Stats band: 2→4 col at `lg` (1024px).
- Navbar: hamburger menu on `< md`. Mobile menu is a full-width dropdown below the nav bar.

## Critical Rules

1. **Never use cream as a section divider** — white only between content sections.
2. **Never put amber on marketing sections** — amber is drought/warning only.
3. **Card corners are sharp (0px radius)** — this is the brand's industrial confidence signal.
4. **One filled green button per CTA group** — paired with a ghost or outline variant.
5. **Hero images must always have the directional overlay** — raw photos without overlay look unbranded.
6. **Ella widget must always be visible** — never position other UI to cover it.
7. **Tagline eyebrows are always `label-caps` in `#2d7a3a`** on light backgrounds, `#6fcf7c` on dark.
8. **Letter-spacing on display headlines is non-negotiable** — `-0.025em` at hero size.
