import { createClient } from "@sanity/client";

const TOKEN = "skDD2FH1e1YJX8BydZexQcPzR8sbfdWl7sEOHiy5oW1yWlJ3DHGemZDOkY8B5n7gSlxF7OsZJ5DJxSOdm7mpGrLwfAgA6uP13ZOQSewyIMNBQ6QD6RG8nFEP2qt8ncq19ZOxVTlUGfghsj2xHHEQD0wWjILg9IyiIUXUZDM9D4jKUtcrhqA5";

const client = createClient({
  projectId: "9342ykth",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

const patches = [
  { slug: "calmag-51",         localImagePath: "/products/Calmag 51.png" },
  { slug: "npk-leafspray-plus",localImagePath: "/products/NPK LeafSpray Plus.png" },
  { slug: "nutri-spread",      localImagePath: "/products/NutriSpread.png" },
  { slug: "seed-primer",       localImagePath: "/products/SeedPrimer.png" },
  { slug: "easy-trace",        localImagePath: "/products/EasyTrace.png" },
  { slug: "colour-spray",      localImagePath: "/products/Colour Spray.png" },
];

for (const { slug, localImagePath } of patches) {
  const doc = await client.fetch(`*[_type == "product" && slug == $slug][0]`, { slug });
  if (!doc) { console.log(`NOT FOUND: ${slug}`); continue; }
  await client.patch(doc._id).set({ localImagePath }).commit();
  console.log(`✓ Patched ${slug} → ${localImagePath}`);
}

console.log("Done.");
