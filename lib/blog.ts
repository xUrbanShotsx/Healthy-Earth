// ─────────────────────────────────────────────────────────────────────────────
// HEALTHY EARTH BLOG
// To add a new post, copy one of the objects below, paste it at the top of
// the `blogPosts` array, and fill in your own content.
//
// Fields:
//   slug      — URL-friendly ID, e.g. "my-post-title" (no spaces, lowercase)
//   title     — Full post title
//   date      — Publication date: "YYYY-MM-DD"
//   author    — Author name
//   category  — One of: "Soil Health" | "Lawn Care" | "Gardening" | "Farming" | "Product Tips" | "News"
//   excerpt   — Short summary shown on the listing page (1–2 sentences)
//   content   — Full post body. Use **bold**, • bullet points, and blank lines between paragraphs.
//   image     — Optional. Put the image in /public/blog/ and set to "/blog/filename.jpg"
//   featured  — Set to true to pin at the top of the listing page
// ─────────────────────────────────────────────────────────────────────────────

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  // ── ADD NEW POSTS HERE (at the top) ──────────────────────────────────────

  {
    slug: "why-silica-matters-australian-gardens",
    title: "Why Silica is the Missing Nutrient in Australian Gardens",
    date: "2026-05-15",
    author: "BioCare Agronomy Team",
    category: "Soil Health",
    excerpt: "Most gardeners focus on N, P and K — but silica is the nutrient that ties it all together. Here's why Australian soils are silica-deficient and what to do about it.",
    featured: true,
    content: `Most gardeners know about nitrogen, phosphorus and potassium. But there's a fourth element that's quietly doing some of the most important work in your garden — and most Australian soils are severely short of it.

**What does silica actually do?**

Silicon (Si) is one of the most abundant elements on Earth, but in a form that plants can actually absorb it's often scarce — particularly in the heavily weathered, leached soils that cover most of Australia's agricultural and garden land.

When plants take up silicon, they deposit it in their cell walls. This does several remarkable things:

• Physically strengthens stems, leaves and roots against wind and mechanical damage
• Creates a barrier that fungal spores and piercing insects struggle to penetrate
• Improves water-use efficiency by reducing transpiration through leaf surfaces
• Triggers the plant's own immune response, boosting its natural defence mechanisms

**Why Australian soils are often deficient**

Australia's ancient soils have been weathered over millions of years, stripping them of plant-available silica. Add in heavy irrigation, which leaches nutrients through the profile, and the use of conventional fertilisers that don't replenish silicon, and you have a recipe for silicon-depleted growing conditions.

The result? Plants that are softer, more susceptible to pests and disease, and more reliant on chemical inputs to stay healthy.

**Signs your plants might need silica**

• Soft, floppy stems that don't hold their structure
• Repeated fungal problems — powdery mildew, black spot, botrytis
• Heavy insect pressure despite regular pest management
• Poor fruit quality or skin that splits easily
• Lawns that stay soft and "thatchy" rather than dense and upright

**Our recommendation**

**SilicaMax** is BioCare's flagship silica formula, delivering plant-available silicon in a liquid concentrate that's easy to apply as a foliar spray or through irrigation. Results are typically visible within 4–6 weeks — firmer plant structure, noticeably stronger growth, and often a significant reduction in the need for pest and disease sprays.

For lawns specifically, SilicaMax applied at the start of spring and again in autumn builds long-term soil biology and turf density. For broadacre applications, **UltraSilica Wettable** gives you the flexibility of a powder format that mixes easily into spray programs.

Start with one application and see what your plants tell you.`,
  },

  {
    slug: "spring-lawn-prep-guide",
    title: "The 5-Step Spring Lawn Prep Guide for Australian Conditions",
    date: "2026-05-01",
    author: "BioCare Agronomy Team",
    category: "Lawn Care",
    excerpt: "Spring is the most important window for getting your lawn right for the season ahead. Here's exactly what to do — and in what order.",
    content: `Spring is your lawn's best opportunity for recovery, growth and establishment. Get the timing and sequencing right and you'll have a dense, green lawn through summer. Rush it or skip steps and you'll be chasing problems all season.

Here's the BioCare five-step approach.

**Step 1: Aerate (early spring)**

Before any product goes down, open up the soil. Compacted soil prevents fertiliser, water and air from reaching the root zone. You don't need professional equipment — a garden fork pushed 10–15 cm deep across the lawn every 20–30 cm is enough for most home lawns. For larger areas, hire a coring machine from your local hardware store.

**Step 2: Dethatch if needed**

Thatch — the layer of dead organic matter sitting between the grass and the soil — blocks water and nutrient penetration. If you can push your finger more than 1 cm into the thatch layer, it's worth scarifying (raking hard or using a scarifying machine) before you fertilise.

**Step 3: Apply SilicaMax**

Before fertilising, apply **SilicaMax** as a soil drench or diluted foliar spray. Silica activates soil biology and prepares the root zone to receive nutrition more efficiently. This step is optional but makes a measurable difference to how well your fertiliser performs.

• Rate: 50–100 mL per 10 m² diluted in water
• Apply to moist soil, not bone dry
• Water in lightly after application

**Step 4: Fertilise with Pro-Strength Lawn Fertiliser**

Once the soil is open and biology is activated, apply **Pro-Strength Lawn Fertiliser** (N 13 : P 3 : K 14) at 30–40 g/m². This balanced NPK formula with trace elements is specifically designed to drive strong spring growth without burning.

• Water in thoroughly after application
• Don't apply if rain isn't expected for more than 3–4 days
• Results typically visible within 7–10 days

**Step 5: Oversow bare patches**

After fertilising, identify any thin or bare patches and oversow with a suitable grass seed variety for your climate and sun conditions. Apply **SeedPrimer** as a seed treatment or water it in after sowing — it accelerates germination and improves establishment uniformity.

Follow these five steps in sequence and your lawn will hit its straps early in the season.`,
  },

  {
    slug: "understanding-npk-fertiliser-ratios",
    title: "Understanding NPK Ratios — What Do Those Numbers Actually Mean?",
    date: "2026-04-18",
    author: "BioCare Agronomy Team",
    category: "Product Tips",
    excerpt: "Every fertiliser bag has three numbers on it. Here's a plain-English guide to what N, P and K do — and how to choose the right ratio for what you're growing.",
    content: `Walk into any garden centre and you'll see bags of fertiliser with numbers like "13-3-14" or "5-6-10" printed on the front. These are the N-P-K ratios — the three primary nutrients in most fertilisers. Here's what they mean.

**N — Nitrogen (the green number)**

Nitrogen drives vegetative growth. It's the nutrient most responsible for lush, green, leafy growth. Lawns, leafy vegetables and fast-growing shrubs need relatively high nitrogen. Signs of nitrogen deficiency include yellowing leaves (starting from the oldest, lower leaves), pale colour and stunted growth.

**P — Phosphorus (the root number)**

Phosphorus is critical for root development, energy transfer within the plant, and establishment from seed or transplant. It's most important early in a plant's life and during flowering. High-phosphorus fertilisers are often used at planting time or when establishing lawns from seed.

**K — Potassium (the fruit and stress number)**

Potassium improves stress tolerance, fruit and seed quality, water regulation and overall plant hardiness. High-K fertilisers are important for fruiting crops, lawns under heat or drought stress, and plants approaching harvest.

**Choosing the right ratio**

• **Lawns:** High N, moderate K, low P — like our **Pro-Strength Lawn Fertiliser** at N 13 : P 3 : K 14
• **Vegetables (leafy):** Balanced NPK, moderate N — like **Premium GP Garden Fertiliser**
• **Flowering and fruiting crops:** Lower N, higher P and K — like **BLOOM-n-YIELD**
• **Broadacre crops:** Balanced complete nutrition — like **44-Plus** (N 13.9 : P 3.7 : K 10.7 + S 10.7)

**Don't forget the trace elements**

N, P and K are just the headline act. Trace elements — iron, zinc, manganese, boron, copper, molybdenum and others — are equally essential, just in smaller quantities. Deficiencies in trace elements are very common in Australian soils and often mistaken for NPK deficiencies. **EasyTrace** is designed specifically to correct these, and can be applied as a quick foliar spray with results visible within 5–7 days.

The right fertiliser depends on what you're growing, what your soil is lacking, and where you are in the growing season. If you're unsure, describe your situation to Ella and she'll point you in the right direction.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
