import { createClient } from "@sanity/client";

const TOKEN = "skDD2FH1e1YJX8BydZexQcPzR8sbfdWl7sEOHiy5oW1yWlJ3DHGemZDOkY8B5n7gSlxF7OsZJ5DJxSOdm7mpGrLwfAgA6uP13ZOQSewyIMNBQ6QD6RG8nFEP2qt8ncq19ZOxVTlUGfghsj2xHHEQD0wWjILg9IyiIUXUZDM9D4jKUtcrhqA5";

const client = createClient({
  projectId: "9342ykth",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

const updates = [
  { slug: "bloom-n-yield",               category: "Gardening" },
  { slug: "eco-spray",                   category: "Gardening" },
  { slug: "liquid-npk",                  category: "Gardening" },
  { slug: "premium-gp-garden",           category: "Gardening" },
  { slug: "44-plus",                     category: "Farming"   },
  { slug: "44-plus-garden",              category: "Gardening" },
  { slug: "clay-breaker-powder",         category: "Gardening" },
  { slug: "clay-breaker",                category: "Gardening" },
  { slug: "trace-elements-volcanic",     category: "Gardening" },
  { slug: "calmag-51",                   category: "Farming"   },
  { slug: "glacial-milk-silica-ultra",   category: "Gardening" },
  { slug: "penetrator",                  category: "Farming"   },
  { slug: "pro-strength-lawn",           category: "Gardening" },
  { slug: "npk-leafspray-plus",          category: "Farming"   },
  { slug: "nutri-spread",                category: "Farming"   },
  { slug: "ultra-silica-wettable",       category: "Farming"   },
  { slug: "silicamax",                   category: "Farming"   },
  { slug: "seedprimer",                  category: "Farming"   },
  { slug: "humic-carbon-liquid",         category: "Farming"   },
  { slug: "regenerative-trace-elements", category: "Farming"   },
  { slug: "easy-trace",                  category: "Farming"   },
  { slug: "liquid-moly-plus",            category: "Farming"   },
  { slug: "kickstart-npk",               category: "Farming"   },
  { slug: "colour-spray",                category: "Farming"   },
  { slug: "booster",                     category: "Farming"   },
];

const products = await client.fetch('*[_type == "product"]{_id, slug, category}');
const bySlug = Object.fromEntries(products.map(p => [p.slug, p]));

for (const { slug, category } of updates) {
  const doc = bySlug[slug];
  if (!doc) { console.log(`NOT FOUND: ${slug}`); continue; }
  if (doc.category === category) { console.log(`✓ Already correct: ${slug} (${category})`); continue; }
  await client.patch(doc._id).set({ category }).commit();
  console.log(`✓ Updated: ${slug} → ${category} (was: ${doc.category})`);
}

console.log("\nAll done.");
