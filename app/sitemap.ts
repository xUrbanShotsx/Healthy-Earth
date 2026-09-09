import type { MetadataRoute } from "next";
import { getAllLocationSlugs } from "@/lib/location-seo-data";

const BASE = "https://www.healthyearth.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/farming`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lawn-fertiliser`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/retailers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const locationRoutes: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `${BASE}/fertiliser/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...locationRoutes];
}
