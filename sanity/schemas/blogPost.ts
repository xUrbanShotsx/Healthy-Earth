import { defineField, defineType } from "sanity";

export const blogPostSchema = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "date", title: "Publish Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Soil Health", "Lawn Care", "Gardening", "Farming", "Product Tips", "News"],
        layout: "radio",
      },
    }),
    defineField({ name: "excerpt", title: "Excerpt (summary shown on listing)", type: "text", rows: 3 }),
    defineField({ name: "content", title: "Full Article Content", type: "text", rows: 20 }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "featured", title: "Featured Post", type: "boolean" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
