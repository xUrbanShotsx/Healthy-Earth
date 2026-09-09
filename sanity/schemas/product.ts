import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Product Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "shortName", title: "Short Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL path)", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Gardening", "Farming"], layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "formula", title: "Formula / Sub-heading", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({ name: "description", title: "Short Description (card)", type: "text", rows: 3 }),
    defineField({ name: "longDescription", title: "Full Description (detail page)", type: "text", rows: 6 }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "localImagePath", title: "Local Image Path (migration)", type: "string" }),
    defineField({ name: "color", title: "Accent Colour (hex)", type: "string" }),
    defineField({ name: "icon", title: "Icon Name", type: "string" }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "usage", title: "How to Use", type: "text", rows: 3 }),
    defineField({
      name: "dosage",
      title: "Dosage / Application Rates",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "safetyNotes", title: "Safety Notes", type: "text", rows: 2 }),
    defineField({
      name: "bestFor",
      title: "Best For",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "featured", title: "Featured Product", type: "boolean" }),
    defineField({
      name: "tags",
      title: "Tags (for search)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "shortName", subtitle: "category", media: "image" },
  },
});
