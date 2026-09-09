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
    author: "Healthy Earth Team",
    category: "Soil Health",
    excerpt: "Most gardeners focus on N, P and K — but silica is the nutrient that ties it all together. Here's why Australian soils are silica-deficient and what to do about it.",
    featured: true,
    content: `I've spoken to a lot of growers over the years — backyard gardeners, market gardeners, broadacre farmers — and when things aren't going right with their plants, the conversation almost always starts and ends with nitrogen, phosphorus and potassium. Which makes sense. NPK is what's on the bag. It's what's taught. It's what gets measured.

But there's another element that doesn't get nearly enough attention, and in my experience it's often the missing piece. Silicon — or more specifically, plant-available silica — is quietly doing some of the most important work in a healthy garden, and most Australian soils are running low on it.

**What silica actually does inside a plant**

When a plant takes up silicon, it deposits it into its cell walls. That sounds simple enough, but the effects ripple out in ways that aren't immediately obvious.

Physically, the plant gets stronger. Stems hold their structure better. Leaves resist being chewed through. Roots push deeper. The plant stands up to heat and wind in a way that soft, silicon-deficient growth just doesn't.

There's also a disease resistance angle that I find really interesting. Silicon creates a physical barrier in the leaf surface that fungal spores genuinely struggle to get through. We've had growers reduce their fungicide programs significantly after incorporating silica — not because we told them to, but because they stopped needing to spray as often.

And then there's water efficiency. Silicon reduces transpiration loss through the leaf surface, which means plants cope better in dry spells without as much irrigation. For Australian conditions, that's not a small thing.

**Why our soils tend to be short of it**

Australia's soils are some of the oldest and most weathered on the planet. Millions of years of leaching have stripped out a lot of what was once there, including plant-available silicon. Heavy irrigation speeds that process up. And most conventional fertiliser programs don't bother replacing silicon at all — so the deficit compounds over time.

The result is plants that look okay on the surface but are running at a fraction of their potential. Softer growth. More fungal issues. Higher pest pressure. More reliance on sprays that treat the symptom rather than the underlying problem.

**How to tell if your plants are silica-deficient**

There's no single dead giveaway, but a few things together usually tell the story:

• Stems that flop or need staking when they shouldn't
• Recurring powdery mildew, black spot or botrytis no matter what you spray
• Insect damage that keeps coming back season after season
• Fruit with poor skin quality, or that splits in warm weather
• Lawn that stays soft and thatchy rather than building a firm, dense sward

If you're ticking two or three of those boxes, silica is worth looking at before you reach for anything else.

**What we'd suggest**

**SilicaMax** is our liquid silicon concentrate, and it's what most of our customers start with. It's straightforward to apply — either as a foliar spray or through your irrigation — and because it's in a plant-available form, you tend to see results within four to six weeks. Firmer structure, stronger colour, and usually a noticeable drop in pest and disease pressure.

For lawns, two applications a year — early spring and again in autumn — is enough to build real soil biology and turf density over time.

If you're running a spray program on a larger scale, **UltraSilica Wettable** is the powder format that mixes easily into existing tank mixes. Same results, more practical for broadacre.

Give it a season. The plants will show you whether it's working.`,
  },

  {
    slug: "spring-lawn-prep-guide",
    title: "The 5-Step Spring Lawn Prep Guide for Australian Conditions",
    date: "2026-05-01",
    author: "Healthy Earth Team",
    category: "Lawn Care",
    excerpt: "Spring is the most important window for getting your lawn right for the season ahead. Here's exactly what to do — and in what order.",
    content: `Every spring, people start throwing fertiliser at their lawn hoping for a quick green-up — and then wonder why it didn't stick, or why they've got patchy growth three weeks later. Usually the problem isn't the product. It's the order things happened in.

Spring is genuinely the best window your lawn gets all year. The soil is warming up, the grass wants to grow, and whatever you put in now has the best possible chance of actually working. But you need to set things up right before you start feeding.

Here's the sequence we'd recommend.

**Step 1: Aerate first, always**

If the soil is compacted — and most lawn soil is, especially in high-traffic areas — nothing you apply is going to perform the way it should. Water sits on the surface. Fertiliser doesn't reach the roots. The grass looks fed but isn't really.

You don't need to hire a professional or buy expensive gear. A garden fork pushed 10–15 cm deep, every 20–30 cm across the lawn, is enough for a typical backyard. If you've got a bigger area, coring machines are available at most hire places for not much money. It's worth the hour.

**Step 2: Check for thatch**

Push your finger into the lawn down near the soil. If there's more than about a centimetre of spongy, dead organic material between the grass and the dirt, that's thatch — and it's blocking water and nutrients from getting through.

Scarify before you fertilise. A hard rake does the job on smaller lawns. For bigger areas, a scarifying machine (again, hireable) makes light work of it. You want the soil surface reasonably clear before anything goes on.

**Step 3: Get the biology going with SilicaMax**

This step gets skipped a lot, but it makes a real difference to how well everything else performs. Apply **SilicaMax** as a soil drench — about 50–100 mL per 10 m², diluted in water — before you fertilise. Silicon activates soil biology and conditions the root zone to receive nutrition more efficiently.

Apply to moist soil and water in lightly afterwards. Don't apply to bone-dry ground.

**Step 4: Fertilise properly**

Now the soil is open and the biology is active, it's ready to receive nutrition. Apply **Pro-Strength Lawn Fertiliser** (N 13 : P 3 : K 14) at 30–40 g per square metre. The NPK ratio is specifically balanced for spring lawn growth — enough nitrogen to drive colour and density, potassium to harden the plant, and low enough phosphorus that you're not stimulating weeds.

Water in well after application. If you're not expecting rain for more than three or four days, hold off until the forecast improves.

Most people see visible results in 7–10 days.

**Step 5: Sort the bare patches**

Once the main lawn is fertilised, walk it and identify any thin or bare areas. Oversow with a grass seed variety suited to your climate and sun conditions — your local nursery can point you to the right one. Water **SeedPrimer** into the seed after sowing. It speeds up germination noticeably and evens out establishment across the patch.

Do these five things in this order, and your lawn will come into summer in the best shape it can be. Skip ahead or cut corners and you'll spend the rest of the season trying to catch up.`,
  },

  {
    slug: "understanding-npk-fertiliser-ratios",
    title: "Understanding NPK Ratios — What Do Those Numbers Actually Mean?",
    date: "2026-04-18",
    author: "Healthy Earth Team",
    category: "Product Tips",
    excerpt: "Every fertiliser bag has three numbers on it. Here's a plain-English guide to what N, P and K do — and how to choose the right ratio for what you're growing.",
    content: `Pick up almost any fertiliser bag and there are three numbers printed somewhere on the front — something like 13-3-14, or 5-6-10, or 8-4-12. Most people either ignore them completely or assume bigger numbers are better. Neither approach really works.

Those numbers are the N-P-K ratio, and once you understand what each one actually does, choosing the right fertiliser for your situation gets a lot more straightforward.

**N is for nitrogen — and nitrogen means growth**

Nitrogen is the engine. It's what drives lush, leafy, green growth. When a plant is getting enough nitrogen, you know about it — deep colour, fast growth, everything looking vigorous.

When it's short on nitrogen, the signs are also pretty obvious. Older leaves go pale yellow first (nitrogen moves from old growth to new, so the plant effectively cannibalises itself). Growth slows. The whole plant looks a bit washed out.

Lawns need relatively high nitrogen. So do leafy vegetables, herbs, and fast-growing hedges. Anything where you're harvesting the leaves or just want green bulk.

**P is for phosphorus — roots, energy, and getting started**

Phosphorus does most of its work underground and in the early stages of a plant's life. It drives root development, which is why high-phosphorus fertilisers are commonly used at planting time and when establishing lawns from seed.

It's also involved in how plants transfer energy internally, and it plays a role in flowering. If phosphorus is short, plants often look stunted early on — they never quite get established the way they should.

**K is for potassium — the hardener**

Potassium is about resilience. It improves how plants regulate water, which matters a lot in Australian summer conditions. It hardens cell walls, improving drought and heat tolerance. It improves fruit skin quality and helps crops produce heavier, better-quality yields.

High-K fertilisers are most useful for fruiting crops, lawns under stress, and anything that's approaching harvest and needs to fill out properly.

**So which ratio do you actually want?**

It depends on what you're growing:

• **Lawns** want high N and moderate K, with low P — our **Pro-Strength Lawn Fertiliser** (N 13 : P 3 : K 14) is built around this
• **Leafy vegetables and herbs** do well on a balanced formula — **Premium GP Garden Fertiliser** covers most situations
• **Flowering and fruiting plants** need less N and more P and K — **BLOOM-n-YIELD** is formulated for exactly this
• **Broadacre and pasture** needs a complete balanced program — **44-Plus** (N 13.9 : P 3.7 : K 10.7 + S 10.7) is designed for this

**The bit most people miss — trace elements**

N, P and K are the three that get all the attention, but they're not the whole story. Iron, zinc, manganese, boron, copper, molybdenum — these trace elements are just as essential to plant health, just needed in much smaller quantities.

The tricky thing is that trace element deficiencies often look almost identical to NPK deficiencies. Yellowing leaves, poor growth, discolouration — you can go chasing the wrong thing for a whole season. **EasyTrace** is our foliar trace element blend, and it works quickly — most growers see a visible response within five to seven days of application, which also confirms whether trace elements were the issue.

If you're still not sure what your plants are missing, that's exactly what Ella is there for. Describe what you're seeing and she'll work through it with you.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
