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
  { slug: "bloom-n-yield",              sizes: ["1 L", "4 L", "20 L"] },
  { slug: "eco-spray",                  sizes: ["1 L", "4 L", "20 L"] },
  { slug: "liquid-npk",                 sizes: ["1 L", "4 L", "20 L"] },
  { slug: "premium-gp-garden",          sizes: ["5 kg", "12 kg", "20 kg"] },
  { slug: "44-plus",                    sizes: ["20 kg", "1 tonne bulk bag"] },
  { slug: "44-plus-garden",             sizes: ["20 kg"] },
  { slug: "clay-breaker-powder",        sizes: ["20 kg"] },
  { slug: "clay-breaker",               sizes: ["1 L", "4 L", "20 L"] },
  { slug: "trace-elements-volcanic",    sizes: ["4 kg", "20 kg"] },
  { slug: "calmag-51",                  sizes: ["20 L", "200 L", "1000 L"] },
  { slug: "glacial-milk-silica-ultra",  sizes: ["400 g"] },
  { slug: "penetrator",                 sizes: ["1 L", "4 L", "20 L"] },
  { slug: "pro-strength-lawn",          sizes: ["10 kg"] },
  { slug: "npk-leafspray-plus",         sizes: ["1 L", "20 L", "200 L", "1000 L"] },
  { slug: "nutri-spread",               sizes: ["4 L", "20 L", "200 L"] },
  { slug: "ultra-silica-wettable",      sizes: ["10 kg", "20 kg", "1000 kg"] },
  { slug: "silicamax",                  sizes: ["1000 kg bulk bag"] },
  { slug: "seedprimer",                 sizes: ["1 L", "4 L", "20 L"] },
  { slug: "humic-carbon-liquid",        sizes: ["20 L", "200 L", "1000 L"] },
  { slug: "regenerative-trace-elements",sizes: ["Bulk / bulka bags"] },
  { slug: "easy-trace",                 sizes: ["20 L", "200 L", "1000 L"] },
  { slug: "liquid-moly-plus",           sizes: ["4 L", "20 L"] },
  { slug: "kickstart-npk",              sizes: ["20 L", "200 L", "1000 L"] },
  { slug: "colour-spray",               sizes: ["20 L", "200 L", "1000 L"] },
  { slug: "booster",                    sizes: ["1 L"] },
];

const products = await client.fetch('*[_type == "product"]{_id, slug}');
const bySlug = Object.fromEntries(products.map(p => [p.slug, p._id]));

for (const { slug, sizes } of updates) {
  const id = bySlug[slug];
  if (!id) { console.log(`NOT FOUND: ${slug}`); continue; }
  await client.patch(id).set({ sizes }).commit();
  console.log(`✓ ${slug}: ${sizes.join(", ")}`);
}

console.log("\nAll done.");
