import { defineField, defineType } from "sanity";

export const farmingPageSchema = defineType({
  name: "farmingPage",
  title: "Farming Page",
  type: "document",
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({ name: "heroTagline", title: "Hero Tagline (small text)", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 3 }),

    // ── Intro ─────────────────────────────────────────────────────────────────
    defineField({ name: "introTitle", title: "Intro Section Title", type: "string" }),
    defineField({ name: "introBody", title: "Intro Section Body", type: "text", rows: 6 }),

    // ── Info Sections (repeating) ─────────────────────────────────────────────
    defineField({
      name: "infoSections",
      title: "Information Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Section Title", type: "string" }),
            defineField({ name: "body", title: "Section Body", type: "text", rows: 5 }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: ["leaf", "wheat", "droplet", "sun", "soil", "sprout", "chart", "shield"],
                layout: "dropdown",
              },
            }),
            defineField({ name: "highlight", title: "Highlight Stat (e.g. '40% less water')", type: "string" }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),

    // ── Drought Protection ────────────────────────────────────────────────────
    defineField({ name: "droughtTitle", title: "Drought Protection — Title", type: "string" }),
    defineField({ name: "droughtIntro", title: "Drought Protection — Intro Paragraph", type: "text", rows: 4 }),
    defineField({
      name: "droughtTips",
      title: "Drought Protection — Tips (bullet list)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "droughtClosing", title: "Drought Protection — Closing Paragraph", type: "text", rows: 3 }),

    // ── Stats Bar ─────────────────────────────────────────────────────────────
    defineField({
      name: "stats",
      title: "Key Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Stat Value (e.g. '40%')", type: "string" }),
            defineField({ name: "label", title: "Stat Label (e.g. 'Less water needed')", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),

    // ── CTA ───────────────────────────────────────────────────────────────────
    defineField({ name: "ctaTitle", title: "CTA Title", type: "string" }),
    defineField({ name: "ctaBody", title: "CTA Body", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "heroTitle" },
    prepare: () => ({ title: "Farming Page" }),
  },
});
