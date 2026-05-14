export type IconName =
  | "leaf" | "lawn" | "fruit" | "soil" | "bug" | "sprout"
  | "beaker" | "chip" | "globe" | "zap" | "trending"
  | "bloom" | "drops" | "spray" | "layers" | "mountain" | "snowflake"
  | "wheat" | "shovel" | "palette" | "microscope" | "rocket" | "waves"
  | "shield" | "sparkles" | "crystal" | "seed";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function Icon({ name, className = "w-5 h-5" }: { name: IconName; className?: string }) {
  switch (name) {
    case "leaf":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 3C8.5 8 6 11 6 14a6 6 0 0012 0c0-3-2.5-6-6-11z"/><path d="M12 20v-6"/></svg>;
    case "lawn":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M3 20h18"/><path d="M6 20v-6"/><path d="M12 20v-9"/><path d="M18 20v-5"/><path d="M6 14c0-3-2-5-2-5s2-1 4 1"/><path d="M12 11c0-4-2-6-2-6s3-1 4 2"/><path d="M18 15c0-3 2-5 2-5s-2-1-4 1"/></svg>;
    case "fruit":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 2v3"/><path d="M15 3c1.5-1.5 4-1 4 1"/><circle cx="12" cy="13" r="7"/></svg>;
    case "soil":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M2 8h20"/><path d="M2 14h20"/><path d="M2 20h20"/><path d="M7 8V5"/><path d="M12 8V3"/><path d="M17 8V6"/></svg>;
    case "bug":
      return <svg viewBox="0 0 24 24" className={className} {...S}><circle cx="12" cy="12" r="4"/><path d="M12 8V4"/><path d="M8 12H4"/><path d="M20 12h-4"/><path d="M6.3 6.3 8 8"/><path d="M17.7 6.3 16 8"/><path d="M6.3 17.7 8 16"/><path d="M17.7 17.7 16 16"/></svg>;
    case "sprout":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 22V12"/><path d="M12 12C12 7 8 4 3 5c0 5 4 7 9 7"/><path d="M12 12c0-5 4-8 9-7-2 5-6 7-9 7"/></svg>;
    case "seed":
      return <svg viewBox="0 0 24 24" className={className} {...S}><ellipse cx="12" cy="10" rx="5" ry="7"/><path d="M12 17v5"/><path d="M9 19c-3 1-5 0-5 0s1-3 4-3"/></svg>;
    case "beaker":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M9 3h6M9 3v6L6 18h12L15 9V3"/><path d="M7 15h10"/></svg>;
    case "chip":
      return <svg viewBox="0 0 24 24" className={className} {...S}><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 7V4"/><path d="M12 7V4"/><path d="M15 7V4"/><path d="M9 20v-3"/><path d="M12 20v-3"/><path d="M15 20v-3"/><path d="M4 9h3"/><path d="M4 12h3"/><path d="M4 15h3"/><path d="M17 9h3"/><path d="M17 12h3"/><path d="M17 15h3"/></svg>;
    case "globe":
      return <svg viewBox="0 0 24 24" className={className} {...S}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z"/></svg>;
    case "zap":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
    case "trending":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M22 7l-9 9-4-4L2 18"/><path d="M17 7h5v5"/></svg>;
    case "bloom":
      return <svg viewBox="0 0 24 24" className={className} {...S}><circle cx="12" cy="12" r="3"/><path d="M12 3a3 3 0 010 6"/><path d="M12 21a3 3 0 010-6"/><path d="M3 12a3 3 0 016 0"/><path d="M21 12a3 3 0 01-6 0"/><path d="M5.6 5.6a3 3 0 014.2 4.2"/><path d="M14.2 14.2a3 3 0 004.2 4.2"/><path d="M14.2 9.8a3 3 0 014.2-4.2"/><path d="M5.6 18.4a3 3 0 014.2-4.2"/></svg>;
    case "drops":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 2L8.5 9a4 4 0 107 0L12 2z"/></svg>;
    case "spray":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M3 9h10v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M13 13h2a4 4 0 004-4V5"/><path d="M19 5h-4"/><path d="M17 5V3"/><path d="M20 9l2-2"/><path d="M20 5l2 2"/></svg>;
    case "layers":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
    case "mountain":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M3 20L9 8l4 6 3-4 5 10H3z"/><path d="M13 7a1 1 0 102 0 1 1 0 00-2 0"/></svg>;
    case "snowflake":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 2v20"/><path d="M2 12h20"/><path d="M4.93 4.93l14.14 14.14"/><path d="M19.07 4.93L4.93 19.07"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>;
    case "wheat":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 22V10"/><path d="M12 10c0 0-1-4-4-5 0 0 1 4 4 5"/><path d="M12 10c0 0 1-4 4-5 0 0-1 4-4 5"/><path d="M12 14c0 0-2-3-4-3"/><path d="M12 14c0 0 2-3 4-3"/><path d="M12 18c0 0-2-2-4-2"/><path d="M12 18c0 0 2-2 4-2"/></svg>;
    case "shovel":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M4 20l10-10"/><path d="M14.5 4.5a5 5 0 017 7L17 16l-9-9 6.5-2.5z"/></svg>;
    case "palette":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.1 0 2-.9 2-2 0-.53-.21-1.01-.54-1.36-.32-.35-.53-.83-.53-1.36 0-1.1.9-2 2-2h2.36c2.95 0 5.04-2.37 5.04-5C22.33 6.18 17.7 2 12 2z"/><circle cx="6.5" cy="11.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="9.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="11.5" r="1.5" fill="currentColor" stroke="none"/></svg>;
    case "microscope":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M9 3h6v10H9V3z"/><path d="M7 13h10"/><path d="M12 13v8"/><path d="M8 21h8"/><path d="M9 3L7 1"/><path d="M15 3l2-2"/></svg>;
    case "rocket":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4"/><path d="M12 15v5s3.03-.55 4-2"/></svg>;
    case "waves":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M2 10c1.5-2 3-2 4.5 0S10 12 11.5 10 14 8 15.5 10s3 2 4.5 0"/><path d="M2 15c1.5-2 3-2 4.5 0S10 17 11.5 15s2.5-2 4 0 3 2 4.5 0"/></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "sparkles":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M5 5l.75 2.25L8 8l-2.25.75L5 11l-.75-2.25L2 8l2.25-.75L5 5z"/><path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z"/></svg>;
    case "crystal":
      return <svg viewBox="0 0 24 24" className={className} {...S}><path d="M6 3l-4 6 10 12 10-12-4-6H6z"/><path d="M2 9h20"/><path d="M12 3l4 6-4 12-4-12 4-6z"/></svg>;
    default:
      return null;
  }
}
