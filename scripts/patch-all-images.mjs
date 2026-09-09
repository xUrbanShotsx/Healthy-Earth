import { createClient } from "@sanity/client";

const TOKEN = "skDD2FH1e1YJX8BydZexQcPzR8sbfdWl7sEOHiy5oW1yWlJ3DHGemZDOkY8B5n7gSlxF7OsZJ5DJxSOdm7mpGrLwfAgA6uP13ZOQSewyIMNBQ6QD6RG8nFEP2qt8ncq19ZOxVTlUGfghsj2xHHEQD0wWjILg9IyiIUXUZDM9D4jKUtcrhqA5";

const client = createClient({
  projectId: "9342ykth",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

// Map slug → image filename in public/products/
const slugToImage = {
  "bloom-n-yield":              "bloom-n-yield.png",
  "eco-spray":                  "Eco Spray.png",
  "liquid-npk":                 "Liquid NPK.png",
  "premium-gp":                 "Suits all plants.png",
  "instant-clay-breaker-powder":"Instant Clay Breaker.png",
  "instant-clay-breaker":       "Instant Clay Breaker copy.png",
  "trace-elements-volcanic":    "Trace Elements Volcanic.png",
  "glacial-milk":               "Glacial Milk.png",
  "pro-strength-lawn":          "Pro Strength Lawn Fertilizer.png",
  "44-plus-garden":             "44 Plus Coated Fertiliser.png",
  "44-plus":                    "44 Plus.png",
  "calmag-51":                  "Calmag 51.png",
  "penetrator":                 "Penetrator.png",
  "npk-leafspray-plus":         "NPK LeafSpray Plus.png",
  "nutri-spread":               "NutriSpread.png",
  "nutrispread":                "NutriSpread.png",
  "ultra-silica-wettable":      "Ultrasilica Wettable.png",
  "ultrasilica-wettable":       "Ultrasilica Wettable.png",
  "silicamax":                  "Silica Max.png",
  "seedprimer":                 "SeedPrimer.png",
  "seed-primer":                "SeedPrimer.png",
  "humic-carbon-liquid":        "Humic Carbon Liquid.png",
  "regen-trace-elements":       "Regen Trace Elements.png",
  "regenerative-trace-elements":"Regen Trace Elements.png",
  "easy-trace":                 "EasyTrace.png",
  "easytrace":                  "EasyTrace.png",
  "liquid-moly-plus":           "Liquid Moly Plus.png",
  "kickstart-npk":              "Kickstart Liquid NPK Fertilizer.png",
  "kickstart-liquid-npk":       "Kickstart Liquid NPK Fertilizer.png",
  "colour-spray":               "Colour Spray.png",
  "booster":                    "Booster.png",
};

const products = await client.fetch('*[_type == "product"]{_id, slug, name, localImagePath}');

console.log(`Found ${products.length} products in Sanity\n`);

for (const product of products) {
  const imageFile = slugToImage[product.slug];
  if (!imageFile) {
    console.log(`⚠ No image mapping for slug: "${product.slug}" (${product.name})`);
    continue;
  }
  const newPath = `/products/${imageFile}`;
  if (product.localImagePath === newPath) {
    console.log(`✓ Already correct: ${product.slug}`);
    continue;
  }
  await client.patch(product._id).set({ localImagePath: newPath }).commit();
  console.log(`✓ Updated: ${product.slug} → ${newPath}`);
}

console.log("\nDone.");
