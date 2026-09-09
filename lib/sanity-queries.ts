import { client } from "./sanity";

// ── Types ──────────────────────────────────────────────────────────────────

export type SanityProduct = {
  _id: string;
  slug: string;
  name: string;
  shortName: string;
  category: "Gardening" | "Farming";
  formula: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string | null;   // resolved from Sanity image or localImagePath
  color: string;
  icon: string;
  benefits: string[];
  usage: string;
  dosage: string[];
  safetyNotes: string;
  bestFor: string[];
  sizes: string[];
  featured: boolean;
  tags: string[];
};

export type SanityBlogPost = {
  _id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string | null;
  featured: boolean;
};

// ── Products ───────────────────────────────────────────────────────────────

const PRODUCT_FIELDS = `
  _id,
  slug,
  name,
  shortName,
  category,
  formula,
  subtitle,
  description,
  longDescription,
  "imageUrl": select(
    defined(image.asset) => image.asset->url,
    defined(localImagePath) => localImagePath,
    null
  ),
  color,
  icon,
  benefits,
  usage,
  dosage,
  safetyNotes,
  bestFor,
  sizes,
  featured,
  tags
`;

export async function getAllProducts(): Promise<SanityProduct[]> {
  return client.fetch(`*[_type == "product"] | order(name asc) { ${PRODUCT_FIELDS} }`);
}

export async function getProductBySlug(slug: string): Promise<SanityProduct | null> {
  return client.fetch(`*[_type == "product" && slug == $slug][0] { ${PRODUCT_FIELDS} }`, { slug });
}

export async function getFeaturedProducts(): Promise<SanityProduct[]> {
  return client.fetch(`*[_type == "product" && featured == true] | order(name asc) { ${PRODUCT_FIELDS} }`);
}

// ── Farming Page ───────────────────────────────────────────────────────────

export type FarmingInfoSection = {
  _key: string;
  title: string;
  body: string;
  icon: string;
  highlight: string;
};

export type FarmingStat = {
  _key: string;
  value: string;
  label: string;
};

export type FarmingPage = {
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introBody: string;
  infoSections: FarmingInfoSection[];
  droughtTitle: string;
  droughtIntro: string;
  droughtTips: string[];
  droughtClosing: string;
  stats: FarmingStat[];
  ctaTitle: string;
  ctaBody: string;
};

export async function getFarmingPage(): Promise<FarmingPage | null> {
  return client.fetch(`*[_type == "farmingPage" && _id == "farmingPage"][0]`);
}

// ── Blog Posts ─────────────────────────────────────────────────────────────

const BLOG_FIELDS = `
  _id,
  "slug": slug.current,
  title,
  date,
  author,
  category,
  excerpt,
  content,
  "imageUrl": select(
    defined(image.asset) => image.asset->url,
    null
  ),
  featured
`;

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch(`*[_type == "blogPost"] | order(date desc) { ${BLOG_FIELDS} }`);
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0] { ${BLOG_FIELDS} }`, { slug });
}
