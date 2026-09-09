// Run with: node scripts/migrate-to-sanity.mjs
// Paste your Sanity write token below before running.

import { createClient } from "@sanity/client";

const TOKEN = "skDD2FH1e1YJX8BydZexQcPzR8sbfdWl7sEOHiy5oW1yWlJ3DHGemZDOkY8B5n7gSlxF7OsZJ5DJxSOdm7mpGrLwfAgA6uP13ZOQSewyIMNBQ6QD6RG8nFEP2qt8ncq19ZOxVTlUGfghsj2xHHEQD0wWjILg9IyiIUXUZDM9D4jKUtcrhqA5";

const client = createClient({
  projectId: "9342ykth",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

// ── Products ───────────────────────────────────────────────────────────────

const products = [
  {
    slug: "bloom-n-yield",
    name: "HealthyEarth BioCare BLOOM-n-YIELD",
    shortName: "BLOOM-n-YIELD",
    category: "Gardening",
    formula: "Biostimulant Flowering & Fruiting Complex",
    subtitle: "Stimulates Beautiful Flowering, Fruits, Vegies & Berries",
    description: "Promotes abundant blooms, improved fruit set and vigorous growth in vegetables, berries and ornamentals.",
    longDescription: "BioCare BLOOM-n-YIELD is a specialised biostimulant formulated to trigger and sustain the flowering and fruiting cycle. It delivers the precise nutritional signals plants need at critical reproductive stages — driving heavier fruit set, brighter blooms and higher yields from home gardens through to commercial orchards. Environmentally safe and compatible with all BioCare programs.",
    benefits: ["Stimulates abundant, lasting flower production","Improves fruit set and berry development","Enhances crop yield and quality","Suitable for vegetables, berries and ornamentals","Environmentally safe around family and pets","Compatible with all fertiliser programs"],
    usage: "Apply as a foliar spray or through drip irrigation during the flowering and early fruiting stage. Repeat every 2–3 weeks during flowering season.",
    dosage: ["Foliar: 10–20 mL/L of water","Drip irrigation: 2–4 L/ha","Apply from bud formation through fruit set","Repeat every 2–3 weeks during flowering"],
    safetyNotes: "Environmentally safe. Wash hands after use. Keep away from eyes. Store in cool, dry place.",
    bestFor: ["Tomatoes","Strawberries and berries","Stone fruit","Citrus","Roses and ornamentals","Vegetable gardens"],
    sizes: ["500 mL","1 L","5 L"],
    color: "#c2185b",
    icon: "bloom",
    localImagePath: "/products/bloom-n-yield.png",
    featured: true,
    tags: ["flowering","fruiting","bloom","biostimulant","berries","vegetables","ornamentals"],
  },
  {
    slug: "eco-spray",
    name: "HealthyEarth BioCare Eco-Spray",
    shortName: "Eco-Spray",
    category: "Gardening",
    formula: "Eco-Safe Garden Formula",
    subtitle: "Environmentally Safe Around Family and Pets",
    description: "Safe and effective garden spray for general plant health. Environmentally responsible formula approved for use around family and pets.",
    longDescription: "BioCare Eco-Spray is a gentle yet effective formulation for general garden health and maintenance. Designed with family safety in mind, it contains no harsh chemicals — making it ideal for homes with children and pets. Use as a preventative or responsive spray to maintain healthy, vibrant garden plants throughout the season.",
    benefits: ["Completely safe around children and pets","Environmentally responsible formula","Suitable for edible and ornamental gardens","Easy-to-use ready-to-dilute concentrate","No withholding period on edibles","Supports overall plant health and vigour"],
    usage: "Dilute as directed and apply as a fine foliar spray. Apply in the cool of the morning or evening. Avoid spraying in direct midday sun or temperatures above 30°C.",
    dosage: ["General use: 10–15 mL/L of water","Apply every 2–4 weeks as required","Thorough coverage of upper and lower leaf surfaces"],
    safetyNotes: "Eco-safe formula. Keep out of reach of children. Avoid contact with eyes. Do not spray near waterways.",
    bestFor: ["Home vegetable gardens","Edible herbs","Ornamental gardens","Children's play areas","Pet-accessible gardens"],
    sizes: ["500 mL","1 L","5 L"],
    color: "#43a047",
    icon: "shield",
    localImagePath: "/products/Eco Spray.png",
    featured: false,
    tags: ["eco","safe","family","pets","garden","spray","biostimulant"],
  },
  {
    slug: "liquid-npk",
    name: "HealthyEarth Liquid N.P.K Fertiliser",
    shortName: "Liquid N.P.K",
    category: "Gardening",
    formula: "Balanced Liquid NPK",
    subtitle: "Fast-Working, Deep Soil Penetration",
    description: "Liquid NPK fertiliser for fast results and deep soil penetration. Environmentally safe around family and pets.",
    longDescription: "HealthyEarth Liquid N.P.K delivers balanced nutrition in a liquid form that penetrates deep into the soil profile — reaching root zones faster than granular alternatives. Its low-odour formulation is safe around family and pets, making it the ideal choice for home gardens where ease of use and fast results are the priority.",
    benefits: ["Fast-acting liquid formula shows results quickly","Deep soil penetration reaches the full root zone","Balanced NPK suits all garden plants","Environmentally safe and low-odour","Safe around family and pets","Easy to apply through watering can or hose-end sprayer"],
    usage: "Dilute in water and apply to soil around the base of plants or through a hose-end sprayer. Water in after application if applying directly to soil.",
    dosage: ["General garden: 20–30 mL/L of water","Apply every 4–6 weeks during growing season","Can be applied monthly as a maintenance feed"],
    safetyNotes: "Keep out of reach of children. Wash hands after use. Avoid direct contact with plant foliage at high concentrations. Store away from frost.",
    bestFor: ["Vegetables and herbs","Fruit trees","Lawns","Ornamental gardens","Container plants","Raised garden beds"],
    sizes: ["1 L","2.5 L","5 L","20 L"],
    color: "#00897b",
    icon: "drops",
    localImagePath: "/products/Liquid NPK.png",
    featured: false,
    tags: ["liquid","NPK","fast","penetration","garden","safe","family"],
  },
  {
    slug: "premium-gp-garden",
    name: "HealthyEarth Premium GP Garden Fertiliser",
    shortName: "Premium GP Garden",
    category: "Gardening",
    formula: "Food Chain NPK + Biodynamic Activator",
    subtitle: "Suits All Plants – Biodynamic Activator – No Strong Odours",
    description: "Premium all-purpose garden fertiliser with biodynamic activator. Safe for food growing, no strong odours and environmentally responsible.",
    longDescription: "HealthyEarth Premium GP Garden Fertiliser is the choice for gardeners who want premium results without compromise. The inclusion of a biodynamic activator elevates it beyond standard NPK — stimulating soil biology and promoting plant resilience alongside conventional nutrition. Safe for food production right up to harvest. No strong odours make it pleasant to use in home settings.",
    benefits: ["Suits all garden plants — ornamentals, edibles and lawns","Safe for food growing and edible crops","Biodynamic activator stimulates soil biology","No strong odours — pleasant for home use","Environmentally safe around family and pets","Food chain fertiliser — no synthetic residues"],
    usage: "Apply granules evenly around the drip line of plants and water in thoroughly. For soil preparation, incorporate into the top 10 cm of soil before planting.",
    dosage: ["Established plants: 50–100 g/m²","Soil preparation: 100–150 g/m²","Containers: 10 g per litre of potting mix","Frequency: Every 6–8 weeks"],
    safetyNotes: "Safe for food growing. Wash hands after use. Keep out of reach of children. Store in a cool, dry place.",
    bestFor: ["All garden plants","Vegetables and herbs","Fruit trees","Roses","Lawns","Native plants"],
    sizes: ["1 kg","2.5 kg","5 kg","10 kg"],
    color: "#ff7043",
    icon: "shovel",
    localImagePath: "/products/Suits all plants.png",
    featured: false,
    tags: ["garden","all plants","biodynamic","food safe","no odour","premium"],
  },
  {
    slug: "clay-breaker-powder",
    name: "HealthyEarth Instant Clay Breaker Powder",
    shortName: "Clay Breaker Powder",
    category: "Gardening",
    formula: "Soil Health Conditioner Powder",
    subtitle: "Also a Soil Health Conditioner – Replaces Lime and Gypsum!",
    description: "Fast-acting powdered clay breaker and soil conditioner. Replaces the need for lime and gypsum — improves drainage and soil structure rapidly.",
    longDescription: "HealthyEarth Instant Clay Breaker Powder is a dual-action product that breaks down clay soils and conditions the soil profile simultaneously. It works faster than traditional lime or gypsum, dispersing through the soil to improve drainage, aeration and root penetration. The result is a looser, more biologically active soil that holds nutrients and moisture more effectively.",
    benefits: ["Instantly improves drainage in clay soils","Replaces the need for lime and gypsum","Dual-action clay breaker and soil conditioner","Improves root penetration and aeration","Fast-acting powder format for quick results","Enhances long-term soil structure"],
    usage: "Apply powder to surface of soil and water in thoroughly. For heavy clay, apply before cultivating and incorporate into top 10–15 cm. Reapply seasonally for best results.",
    dosage: ["Light clay improvement: 100–200 g/m²","Heavy clay breakup: 200–400 g/m²","Pre-plant soil preparation: 300 g/m²","Maintenance: apply 1–2 times per year"],
    safetyNotes: "Wear dust mask during application. Wash hands after use. Avoid contact with eyes. Keep out of reach of children.",
    bestFor: ["Heavy clay soils","Waterlogged areas","Compacted garden beds","New lawns on clay","Vegetable gardens on clay"],
    sizes: ["2 kg","5 kg","10 kg","25 kg"],
    color: "#8d6e63",
    icon: "layers",
    localImagePath: "/products/Instant Clay Breaker.png",
    featured: false,
    tags: ["clay","soil","conditioner","drainage","compaction","lime","gypsum"],
  },
  {
    slug: "clay-breaker",
    name: "HealthyEarth Instant Clay Breaker",
    shortName: "Clay Breaker",
    category: "Gardening",
    formula: "Organic Seaweed & Safe Sea Calcium",
    subtitle: "Dual-Purpose Soil Health Conditioner",
    description: "Dual-purpose clay breaker and soil health conditioner with organic seaweed and safe sea calcium. Improves soil structure and biology.",
    longDescription: "HealthyEarth Instant Clay Breaker combines the physical action of clay dispersion with the biological benefits of organic seaweed and sea-derived calcium. Where the Powder version is focused on speed and penetration, this liquid formulation penetrates soil pores to act from within — breaking clay bonds and feeding the microbial life that maintains good soil structure long-term.",
    benefits: ["Breaks clay bonds and improves soil structure","Organic seaweed enhances soil biology","Safe sea calcium improves nutrient availability","Dual-purpose clay breaker and soil conditioner","Liquid form penetrates soil pores rapidly","Long-term soil structure improvement"],
    usage: "Dilute and apply to soil surface or through irrigation. Apply before cultivating for best results. Compatible with all fertiliser programs.",
    dosage: ["Liquid concentrate: 20–40 mL/L of water","Apply 2–4 L/ha for broadacre use","Repeat applications every 4–6 weeks","Best applied before cultivation or planting"],
    safetyNotes: "Environmentally safe formulation. Wash hands after use. Keep out of reach of children. Store in cool, dry place away from direct sunlight.",
    bestFor: ["Clay soils","Compacted soils","Heavy garden beds","New lawn preparation","Raised bed soil improvement"],
    sizes: ["1 L","5 L","20 L"],
    color: "#795548",
    icon: "waves",
    localImagePath: "/products/Instant Clay Breaker.png",
    featured: false,
    tags: ["clay","seaweed","calcium","soil structure","conditioner","liquid"],
  },
  {
    slug: "trace-elements-volcanic",
    name: "HealthyEarth Trace Elements Volcanic",
    shortName: "Trace Elements Volcanic",
    category: "Gardening",
    formula: "Natural Volcanic Trace Elements",
    subtitle: "Bio-Dynamic Soil Activator – Regenerates Soils",
    description: "Regenerates soils with natural trace elements from volcanic rock. Bio-dynamic activator that rebuilds depleted soils and restores mineral balance.",
    longDescription: "HealthyEarth Trace Elements Volcanic harnesses the mineral-rich profile of volcanic rock to deliver a comprehensive spectrum of trace elements and soil-activating minerals. Volcanic rock minerals are released slowly as soil biology breaks them down — rebuilding long-term mineral reserves and supporting the bio-dynamic cycles that make soil truly productive. Ideal for depleted or heavily cropped soils.",
    benefits: ["Delivers a full spectrum of natural trace elements","Bio-dynamic activator stimulates soil life","Slowly releases minerals as biology develops","Rebuilds depleted or over-cropped soils","Improves plant mineral density (nutrition quality)","100% natural volcanic source"],
    usage: "Apply as a soil amendment and incorporate into top soil layer. Can be mixed with compost or organic matter for enhanced effect. Apply 1–2 times per year.",
    dosage: ["Home garden: 100–200 g/m²","Lawn: 50–100 g/m²","Vegetable beds: 200 g/m² before planting","Annual top-dress: 50–100 g/m²"],
    safetyNotes: "Natural mineral product. Wear dust mask during handling. Wash hands after use. Not harmful to soil biology — beneficial long-term.",
    bestFor: ["Depleted soils","Heavy cropping areas","Organic gardens","Biodynamic farming","Long-term soil rebuilding"],
    sizes: ["2 kg","5 kg","10 kg","25 kg"],
    color: "#5d4037",
    icon: "mountain",
    localImagePath: "/products/Trace Elements Volcanic.png",
    featured: false,
    tags: ["volcanic","trace elements","biodynamic","minerals","soil health","natural"],
  },
  {
    slug: "glacial-milk-silica-ultra",
    name: "HealthyEarth BioCare Glacial Milk (Silica Max Ultra)",
    shortName: "Glacial Milk Silica Ultra",
    category: "Gardening",
    formula: "Nutrient-Rich Silica Ultra Formula",
    subtitle: "Unlock the Power of Silica for Plant Health",
    description: "Premium glacial milk silica formula for home gardens. Unlock the plant-strengthening and soil-building power of ultra-fine silica.",
    longDescription: "BioCare Glacial Milk (Silica Max Ultra) brings the proven benefits of silica into a home gardener-friendly formula. The fine silica particles ('glacial milk') are in a highly bioavailable form that plants and soil microbes can rapidly utilise — strengthening cell walls, improving stress tolerance and activating the soil biology that makes plants thrive. A premium addition to any garden program.",
    benefits: ["Ultra-fine silica for rapid plant and soil uptake","Strengthens cell walls against pests and disease","Improves drought and heat stress tolerance","Activates beneficial soil microbes","Enhances uptake of applied fertilisers","Safe for use in home gardens"],
    usage: "Mix powder into water until fully dispersed and apply to soil or as foliar spray. Shake or stir well before use. Compatible with most garden fertiliser programs.",
    dosage: ["Soil drench: 50–100 g/10 L of water per m²","Foliar spray: 25–50 g/10 L of water","Frequency: every 4–6 weeks","Apply during active growing season"],
    safetyNotes: "Wear dust mask when mixing powder. Keep out of reach of children. Wash hands after use. Not harmful to plants or soil biology.",
    bestFor: ["Home vegetable gardens","Fruit trees","Lawns","Roses and ornamentals","High-stress growing environments"],
    sizes: ["500 g","1 kg","2.5 kg","5 kg"],
    color: "#4dd0e1",
    icon: "snowflake",
    localImagePath: "/products/Glacial Milk.png",
    featured: false,
    tags: ["silica","glacial milk","ultra","biostimulant","gardening","soil health"],
  },
  {
    slug: "pro-strength-lawn",
    name: "HealthyEarth Pro-Strength Lawn Fertiliser",
    shortName: "Pro-Strength Lawn",
    category: "Gardening",
    formula: "N 13 : P 3 : K 14 Plus Trace Elements",
    subtitle: "Suits All Lawn Types and Soils",
    description: "Professional-strength granular lawn fertiliser for deep green colour and strong root systems across all Australian grass types.",
    longDescription: "HealthyEarth Pro-Strength Lawn Fertiliser delivers professional-grade nutrition in an easy-to-apply granular format. The N 13 : P 3 : K 14 ratio with trace elements is the ideal balance for Australian lawns — high potassium builds heat and drought tolerance while nitrogen drives rapid green-up. Suitable for all grass types including couch, kikuyu, buffalo and fescue.",
    benefits: ["Deep, lasting green colour within 7–10 days","High potassium builds drought and heat tolerance","Suits all Australian grass types","Strengthens root systems for better wear resistance","Trace elements prevent yellowing and deficiencies","Safe for children and pets once watered in"],
    usage: "Apply granules evenly across lawn surface using a fertiliser spreader or by hand. Water in thoroughly after application. Best applied in early morning or late afternoon.",
    dosage: ["Standard application: 25–30 g/m²","Recovery or establishment: 40–50 g/m²","Frequency: every 6–8 weeks during growing season","4–6 applications per year recommended"],
    safetyNotes: "Keep off lawn until watered in. Wash hands after use. Keep away from waterways. Store in a cool, dry place.",
    bestFor: ["Couch grass","Kikuyu","Buffalo (Sir Walter, Palmetto)","Fescue","Zoysia","All residential and sports lawns"],
    sizes: ["2.5 kg","5 kg","10 kg","20 kg"],
    color: "#4caf50",
    icon: "lawn",
    localImagePath: "/products/Pro Strength Lawn Fertilizer.png",
    featured: true,
    tags: ["lawn","grass","green","NPK","granular","couch","buffalo","kikuyu"],
  },
  {
    slug: "44-plus-garden",
    name: "HealthyEarth 44-Plus",
    shortName: "44-Plus",
    category: "Gardening",
    formula: "N 13.9 : P 3.7 : K 10.7 + S 10.7",
    subtitle: "Plus Seaweed + Humic Acid + Fish + Trace Elements",
    description: "Premium high-analysis NPK enriched with seaweed, humic acid, fish and trace elements for superior garden and crop results.",
    longDescription: "44-Plus is HealthyEarth's most complete NPK formula. The high-analysis N 13.9 : P 3.7 : K 10.7 + S 10.7 base is supercharged with four powerful biostimulant ingredients — seaweed, humic acid, fish and trace elements — that work together to improve nutrient uptake, soil biology and plant resilience. One product that does the work of many.",
    benefits: ["High-analysis NPK for fast visible results","Seaweed improves plant stress tolerance","Humic acid enhances nutrient availability and uptake","Fish provides organic nitrogen and amino acids","Broad trace element package","Suitable for most garden plants and conditions"],
    usage: "Dilute liquid concentrate in water and apply to soil or as a foliar spray. Stir well before use. Can be tank-mixed with most other fertilisers.",
    dosage: ["Foliar spray: 10–20 mL/L of water","Soil drench: 20–30 mL/L of water","Frequency: every 3–4 weeks"],
    safetyNotes: "Wash hands after use. Keep away from eyes. Store in cool place away from direct sunlight. Keep out of reach of children.",
    bestFor: ["Vegetable gardens","Fruit trees","Lawns","Ornamental gardens","Container plants"],
    sizes: ["1 L","5 L","20 L"],
    color: "#2e7d32",
    icon: "leaf",
    localImagePath: "/products/44 Plus Coated Fertiliser.png",
    featured: false,
    tags: ["44-plus","NPK","seaweed","humic acid","fish","trace elements","premium"],
  },
  {
    slug: "44-plus",
    name: "HealthyEarth 44-Plus",
    shortName: "44-Plus",
    category: "Farming",
    formula: "N 13.9 : P 3.7 : K 10.7 + S 10.7",
    subtitle: "Plus Seaweed + Humic Acid + Fish + Trace Elements",
    description: "High-analysis NPK farming formula enhanced with seaweed, humic acid, fish and trace elements for superior crop performance.",
    longDescription: "44-Plus is HealthyEarth's most comprehensive farming fertiliser. The high-analysis N 13.9 : P 3.7 : K 10.7 + S 10.7 base provides strong, immediately available nutrition while seaweed, humic acid, fish and trace elements work synergistically to improve soil biology, nutrient efficiency and crop resilience. Ideal for broadacre and horticulture where productivity and input efficiency are critical.",
    benefits: ["High-analysis NPK drives strong crop responses","Sulphur supports protein synthesis in grain crops","Seaweed improves plant stress tolerance and recovery","Humic acid binds nutrients and improves cation exchange","Fish-derived amino acids enhance nutrient uptake","Comprehensive trace element package included"],
    usage: "Apply through irrigation (fertigation), as foliar spray, or in-furrow at planting. Tank-mix with other nutrients as required. Always jar-test before mixing.",
    dosage: ["Foliar spray: 5–10 L/ha","Fertigation: 10–20 L/ha per application","In-furrow: 5–8 L/ha at planting","Apply every 3–4 weeks during the growing season"],
    safetyNotes: "Keep out of reach of children. Avoid contact with eyes. Wash hands after use. Do not apply during heat stress. Store in cool location.",
    bestFor: ["Grain crops","Pastures","Horticulture","Broadacre farming","Vegetables","Sugar cane"],
    sizes: ["20 L","200 L drum","1000 L IBC"],
    color: "#1b5e20",
    icon: "wheat",
    localImagePath: "/products/44 Plus.png",
    featured: true,
    tags: ["44-plus","NPK","seaweed","humic acid","farming","broadacre","horticulture"],
  },
  {
    slug: "calmag-51",
    name: "HealthyEarth CalMag 51",
    shortName: "CalMag 51",
    category: "Farming",
    formula: "Ca 5.23% : Mg 1.4% : N 3.2% + B 50ppm, Mo 0.9ppm",
    subtitle: "Sea Minerals with Seaweed & Traces",
    description: "Calcium and magnesium supplement from sea minerals with nitrogen, boron, molybdenum, seaweed and trace elements for crop structural integrity.",
    longDescription: "CalMag 51 delivers calcium and magnesium in sea-mineral form alongside a supporting cast of nitrogen, boron, molybdenum and seaweed. Calcium is critical for cell wall strength and fruit quality; magnesium is the core of every chlorophyll molecule. Together they support fruit fill, prevent disorders like blossom end rot, and keep photosynthesis performing at its peak.",
    benefits: ["Sea-mineral calcium improves fruit quality and shelf life","Magnesium supports chlorophyll and photosynthesis","Boron enhances pollination and fruit set","Molybdenum aids nitrogen fixation and enzyme function","Seaweed component improves stress tolerance","Prevents calcium and magnesium deficiency disorders"],
    usage: "Apply as foliar spray or through fertigation. Best applied at fruit fill stage and during rapid vegetative growth. Can be tank-mixed with most foliar fertilisers.",
    dosage: ["Foliar spray: 2–4 L/ha in 100–200 L water","Fertigation: 4–8 L/ha per application","Apply at fruit fill and 2–4 times during season"],
    safetyNotes: "Avoid contact with eyes. Wash hands after use. Jar-test before mixing with other products. Keep away from children.",
    bestFor: ["Tomatoes and peppers","Citrus and avocado","Stone fruit","Brassicas","Leafy vegetables","Pasture"],
    sizes: ["20 L","200 L drum","1000 L IBC"],
    color: "#00695c",
    icon: "drops",
    localImagePath: null,
    featured: false,
    tags: ["calcium","magnesium","CalMag","sea minerals","seaweed","boron","molybdenum"],
  },
  {
    slug: "penetrator",
    name: "HealthyEarth Penetrator",
    shortName: "Penetrator",
    category: "Farming",
    formula: "Soil Wetter Concentrate",
    subtitle: "The Ultimate Soil Wetter",
    description: "The ultimate soil wetter — helps water and fertiliser penetrate deeply into hydrophobic, waxy or compacted soils.",
    longDescription: "HealthyEarth Penetrator is a high-performance soil wetting agent engineered to overcome the water and fertiliser repellence common in Australian soils. Whether your soil is hydrophobic from organic matter breakdown, sandy and non-wetting, or compacted clay, Penetrator breaks the surface tension that prevents water and nutrients reaching the root zone — maximising the effectiveness of every irrigation and fertiliser application.",
    benefits: ["Breaks hydrophobic barriers in non-wetting soils","Improves water penetration depth and uniformity","Increases fertiliser efficiency through better distribution","Reduces water run-off and wastage","Long-lasting wetting effect","Compatible with all irrigation and fertigation systems"],
    usage: "Apply through irrigation, as a drench or spray. Best applied immediately before or alongside fertiliser applications on dry or hydrophobic soils.",
    dosage: ["Standard soil wetting: 1–2 L/ha","Severe hydrophobicity: 2–4 L/ha","Mix with fertiliser and apply through irrigation","Repeat at each fertiliser application as required"],
    safetyNotes: "Avoid contact with eyes. Wear gloves during handling. Do not apply near waterways at high rates. Wash hands after use.",
    bestFor: ["Sandy non-wetting soils","Hydrophobic soils","Compacted soils","Dry climate farming","Sports turf","Golf courses"],
    sizes: ["5 L","20 L","200 L drum"],
    color: "#1565c0",
    icon: "drops",
    localImagePath: "/products/Penetrator.png",
    featured: false,
    tags: ["soil wetter","penetration","hydrophobic","irrigation","water efficiency"],
  },
  {
    slug: "npk-leafspray-plus",
    name: "HealthyEarth NPK LeafSpray Plus",
    shortName: "NPK LeafSpray Plus",
    category: "Farming",
    formula: "Balanced NPK + Sea Minerals & Seaweed",
    subtitle: "For Deficiencies & Crop Health",
    description: "Balanced NPK foliar fertiliser with trace elements, sea minerals and seaweed for rapid deficiency correction and sustained crop health.",
    longDescription: "NPK LeafSpray Plus is formulated for precision foliar nutrition — delivering balanced NPK directly through the leaf to correct deficiencies, support crop health at critical growth stages, and complement soil-applied programs. The addition of sea minerals, seaweed and trace elements makes it far more than a standard foliar; it works with the plant's physiology to improve uptake efficiency and stress response.",
    benefits: ["Rapid deficiency correction through direct leaf uptake","Balanced NPK suitable for all crop types","Sea minerals provide a broad trace element base","Seaweed enhances stress tolerance and recovery","Compatible with most crop protection programs","Mix with NutriSpread for improved coverage and adhesion"],
    usage: "Mix with water and apply as a fine foliar spray. For best results, combine with NutriSpread to improve coverage and adhesion. Apply in calm conditions away from direct midday heat.",
    dosage: ["Standard application: 3–5 L/ha","Deficiency correction: 5–8 L/ha","Apply every 3–4 weeks during growing season","Mix with NutriSpread at 200–500 mL/ha for improved coverage"],
    safetyNotes: "Avoid contact with eyes. Wear protective clothing during mixing and spraying. Jar-test before mixing. Store in cool location.",
    bestFor: ["Grain crops","Horticulture","Vegetables","Pastures","Broadacre farming","Sugar cane"],
    sizes: ["20 L","200 L drum","1000 L IBC"],
    color: "#388e3c",
    icon: "spray",
    localImagePath: null,
    featured: false,
    tags: ["foliar","NPK","sea minerals","seaweed","deficiency","leafspray"],
  },
  {
    slug: "nutri-spread",
    name: "HealthyEarth NutriSpread",
    shortName: "NutriSpread",
    category: "Farming",
    formula: "Foliar Spray Activator",
    subtitle: "Activates Foliar Sprays – Improved Coverage & Adhesion",
    description: "Activates and enhances foliar sprays. Improves coverage, adhesion and slow-release nutrient delivery from every application.",
    longDescription: "NutriSpread is a specialist foliar spray activator — a key tool in any high-performance crop nutrition program. By improving the spreading and sticking properties of foliar fertilisers, it ensures even leaf coverage and longer retention times, converting each spray into a slow-release application. Use NutriSpread alongside NPK LeafSpray Plus and other foliar nutrients for measurably better results.",
    benefits: ["Improves foliar spray coverage and uniformity","Enhances adhesion — nutrients stay on the leaf longer","Converts foliar sprays into slow-release applications","Compatible with all HealthyEarth foliar products","Reduces spray volume requirements","Improves efficacy of companion crop protection products"],
    usage: "Add to foliar spray mix as a tank partner. Always add NutriSpread last when mixing. Compatible with most foliar fertilisers and most registered crop protection products — jar-test first.",
    dosage: ["Standard rate: 200–500 mL/ha","Add to tank last after other products","Use with every foliar spray application"],
    safetyNotes: "Wear gloves and eye protection during mixing. Jar-test before mixing with new products. Keep out of reach of children.",
    bestFor: ["All foliar spray programs","Horticulture","Grain crops","Vegetables","High-value crops"],
    sizes: ["5 L","20 L","200 L drum"],
    color: "#f9a825",
    icon: "sparkles",
    localImagePath: null,
    featured: false,
    tags: ["foliar","spray","spreader","sticker","adjuvant","coverage","adhesion"],
  },
  {
    slug: "ultra-silica-wettable",
    name: "HealthyEarth UltraSilica Wettable",
    shortName: "UltraSilica Wettable",
    category: "Farming",
    formula: "51% Silica (SiO₂) + Broad Trace Elements",
    subtitle: "Wettable, Sprayable, Non-Crystalline",
    description: "High-concentration wettable silica powder for foliar and drench application. Non-crystalline and easy to mix — delivers 51% SiO₂ through any spray system.",
    longDescription: "UltraSilica Wettable is a premium foliar-grade silica product delivering 51% SiO₂ in a non-crystalline, wettable powder form. Unlike crystalline silica products, UltraSilica Wettable disperses rapidly in water and is safe for pump and nozzle systems. The broad trace element package complements the silicon and together they create measurably stronger, more pest and disease-resistant plants.",
    benefits: ["51% SiO₂ — high-concentration foliar silica","Non-crystalline — safe for spray equipment","Wettable powder disperses easily in water","Strengthens cell walls against pests and fungal entry","Broad trace element package included","Compatible with most foliar programs"],
    usage: "Pre-mix in a small volume of water before adding to main tank. Agitate tank continuously during application. Apply as foliar spray or through irrigation.",
    dosage: ["Foliar spray: 0.5–1 kg/ha","Soil drench: 1–2 kg/ha","Apply every 3–4 weeks during growing season"],
    safetyNotes: "Wear dust mask when mixing powder. Avoid contact with eyes. Not crystalline — does not carry silica dust risks of crystalline products. Wash hands after use.",
    bestFor: ["Grain crops","Horticulture","Vegetables","Turf","High pest or disease pressure situations"],
    sizes: ["5 kg","10 kg","25 kg","500 kg bulk bag"],
    color: "#607d8b",
    icon: "crystal",
    localImagePath: "/products/Ultrasilica Wettable.png",
    featured: false,
    tags: ["silica","wettable","foliar","spray","non-crystalline","trace elements"],
  },
  {
    slug: "silicamax",
    name: "Healthy Earth SilicaMax",
    shortName: "SilicaMax",
    category: "Farming",
    formula: "51% Silica (SiO₂) + Broad Trace Elements",
    subtitle: "Stimulates Rhizosphere & Root Health",
    description: "Soil-applied silica amendment that stimulates rhizosphere biology, strengthens plants and improves stress tolerance across all crop types.",
    longDescription: "SilicaMax delivers 51% silicon dioxide (SiO₂) alongside a broad spectrum of trace elements for soil application. Silicon is one of the most abundant yet under-utilised elements in Australian agriculture — SilicaMax makes it plant-available in a highly soluble, non-crystalline form. Applied to soil, it activates the rhizosphere — the microbially rich zone around plant roots — while simultaneously strengthening cell walls and improving drought tolerance.",
    benefits: ["51% SiO₂ — highest concentration available","Strengthens plant cell walls against pests and disease","Improves drought, heat and salinity tolerance","Stimulates rhizosphere microbial activity","Enhances uptake of phosphorus and other nutrients","Broad trace element package included"],
    usage: "Apply to soil prior to planting or as a top-dress. Can be incorporated into irrigation systems. Compatible with most fertiliser programs.",
    dosage: ["Broadacre crops: 100–200 kg/ha","Horticulture: 200–400 kg/ha","Pastures: 100–150 kg/ha","Apply 1–2 times per season"],
    safetyNotes: "Wear dust mask during handling. Not crystalline — reduced silica dust risks. Wash hands after use. Not harmful to soil biology.",
    bestFor: ["Broadacre farming","Horticulture","Market gardens","Pastures","Sandy or degraded soils","High-stress environments"],
    sizes: ["10 kg","25 kg","500 kg bulk bag","1 tonne bulk"],
    color: "#8bc34a",
    icon: "zap",
    localImagePath: "/products/Silica Max.png",
    featured: true,
    tags: ["silica","SiO2","rhizosphere","soil health","farming","root health"],
  },
  {
    slug: "seedprimer",
    name: "HealthyEarth SeedPrimer",
    shortName: "SeedPrimer",
    category: "Farming",
    formula: "Biostimulant Seed Coating Complex",
    subtitle: "Stronger Germination, Emergence & Root Development",
    description: "Promotes stronger germination, faster emergence and vigorous root development through pre-emergence seed coating technology.",
    longDescription: "SeedPrimer is a scientifically formulated biostimulant that activates seed metabolism, accelerates germination and drives early root development. Its proprietary blend of plant growth regulators, humates and micronutrients is applied as a seed treatment or in-furrow to establish seedlings faster and more uniformly — reducing replanting risk and improving final stand establishment across grain, pasture and vegetable crops.",
    benefits: ["Accelerates and uniforms germination timing","Drives vigorous early root development","Improves stand establishment uniformity","Reduces replanting risk in difficult conditions","Works on broadacre, pasture, vegetable and horticultural crops","Compatible with most seed treatments and fungicides"],
    usage: "Apply as a seed treatment or in-furrow at planting. Mix with a small volume of water for seed treatment. Shake well before use. Store below 25°C.",
    dosage: ["Seed treatment: 1–2 L per tonne of seed","In-furrow: 2–4 L/ha","Germination trays: 2 mL/L of water","Applied once at sowing time"],
    safetyNotes: "Avoid contact with eyes. Do not ingest. Wash hands after use. Store in original container away from direct sunlight. Keep below 25°C.",
    bestFor: ["Grain crops (wheat, barley, canola)","Pasture establishment","Vegetable transplants","Cotton","Corn and maize","Turf renovation"],
    sizes: ["1 L","5 L","20 L","200 L drum"],
    color: "#2d7a3a",
    icon: "sprout",
    localImagePath: null,
    featured: true,
    tags: ["seed","germination","biostimulant","establishment","roots","planting"],
  },
  {
    slug: "humic-carbon-liquid",
    name: "HealthyEarth Humic Carbon Liquid L.H.C.",
    shortName: "Humic Carbon Liquid",
    category: "Farming",
    formula: "Liquid Humic Carbon",
    subtitle: "Organic Trace Elements from Ancient Australian Deposits",
    description: "Liquid humic carbon derived from ancient Australian deposits. Builds soil carbon, improves nutrient retention and delivers naturally complexed organic trace elements.",
    longDescription: "HealthyEarth Humic Carbon Liquid L.H.C. is extracted from ancient leonardite and humate deposits unique to Australia. These deposits have been building biological complexity for thousands of years — and in liquid form, they deliver highly concentrated humic acid and fulvic acid alongside organic trace elements that have been naturally complexed for superior bioavailability. A foundational soil-building product for any regenerative or high-performance farming system.",
    benefits: ["Builds soil carbon and cation exchange capacity (CEC)","Humic acid improves nutrient retention and availability","Fulvic acid acts as a natural chelator for trace elements","Organic trace elements in naturally complexed form","Improves soil water-holding capacity","Supports soil microbial diversity and activity"],
    usage: "Apply through irrigation (fertigation) or as a soil drench. Can be used as a foliar at low rates. Compatible with most liquid fertiliser programs.",
    dosage: ["Soil application: 5–10 L/ha","Fertigation: 5–15 L/ha per application","Foliar: 1–2 L/ha (diluted 1:50 minimum)","Apply monthly or at each fertiliser event"],
    safetyNotes: "May stain — use care with clothing and surfaces. Wash hands after use. Keep out of reach of children. Store in cool location away from direct sunlight.",
    bestFor: ["Broadacre farming","Horticulture","Organic programs","Regenerative agriculture","Soils low in organic matter"],
    sizes: ["20 L","200 L drum","1000 L IBC"],
    color: "#4e342e",
    icon: "soil",
    localImagePath: "/products/Humic Carbon Liquid.png",
    featured: false,
    tags: ["humic acid","fulvic acid","soil carbon","organic","trace elements","regenerative"],
  },
  {
    slug: "regenerative-trace-elements",
    name: "HealthyEarth Regenerative Trace Element Fertilizer",
    shortName: "Regenerative Trace Elements",
    category: "Farming",
    formula: "High Natural Silica + Added Trace Minerals",
    subtitle: "Sustainable Regenerative Food Chain Agriculture",
    description: "High natural silica with hundreds of minerals plus added trace minerals for sustainable regenerative food chain agriculture.",
    longDescription: "HealthyEarth Regenerative Trace Element Fertilizer is built for the future of Australian farming. It combines a naturally high silica base with a comprehensive spectrum of hundreds of minerals and specifically added trace minerals to deliver complete nutritional rebuilding for degraded or intensively farmed soils. Designed for regenerative food chain agricultural systems — where soil health, product quality and environmental sustainability are inseparable goals.",
    benefits: ["Hundreds of natural minerals in a single product","High silica base for plant structural strength","Supports regenerative and biodynamic farming systems","Improves crop mineral density and nutritional quality","Long-term soil mineralisation","Sustainable and environmentally responsible"],
    usage: "Apply to soil and incorporate by cultivation or water in thoroughly. Best applied before planting as a soil conditioner. Repeat annually or seasonally.",
    dosage: ["Broadacre: 100–300 kg/ha","Horticulture: 200–400 kg/ha","Apply 1–2 times per year"],
    safetyNotes: "Natural mineral product. Wear dust mask during handling. Wash hands after use. Not harmful to soil biology — beneficial long-term.",
    bestFor: ["Regenerative farming systems","Biodynamic programs","Degraded soils","High-value food production","Organic farms"],
    sizes: ["25 kg","500 kg bulk bag","1 tonne bulk"],
    color: "#6d4c41",
    icon: "globe",
    localImagePath: "/products/Regen Trace Elements.png",
    featured: false,
    tags: ["regenerative","trace elements","silica","minerals","biodynamic","sustainable"],
  },
  {
    slug: "easy-trace",
    name: "HealthyEarth EasyTrace",
    shortName: "EasyTrace",
    category: "Farming",
    formula: "Broad Spectrum Liquid Trace Elements",
    subtitle: "Selenium, Boron, Iron, Copper, Manganese, Molybdenum, Zinc, Sulphur, Nitrogen",
    description: "Comprehensive liquid trace element formula covering all major micronutrient requirements in a single, easy-to-use product.",
    longDescription: "EasyTrace takes the complexity out of trace element management by delivering all major micronutrients in a single, liquid formulation. Selenium, boron, iron, copper, manganese, molybdenum, zinc, sulphur and nitrogen work together to prevent and correct a full range of trace element deficiencies — from the zinc deficiency common in alkaline Australian soils to the selenium deficiencies that affect livestock health in southern regions.",
    benefits: ["Covers all major trace element requirements","Liquid form for rapid foliar or soil uptake","Selenium supports livestock nutritional quality in pasture","Boron critical for pollination and fruit set","Broad trace element package in one product","Simplifies multi-element trace programs"],
    usage: "Apply as foliar spray or through fertigation. Best used as part of a regular trace element maintenance program. Check soil and plant tissue tests to monitor levels.",
    dosage: ["Foliar spray: 1–3 L/ha","Fertigation: 3–5 L/ha","Apply every 4–6 weeks or as deficiency dictates"],
    safetyNotes: "Wear gloves and eye protection during mixing. Contains selenium — do not exceed recommended rates. Keep out of reach of children. Jar-test before mixing with other products.",
    bestFor: ["Grain crops","Pastures","Horticulture","Vegetables","Livestock feed crops","Selenium-deficient regions"],
    sizes: ["5 L","20 L","200 L drum"],
    color: "#e65100",
    icon: "microscope",
    localImagePath: null,
    featured: false,
    tags: ["trace elements","selenium","boron","zinc","copper","manganese","molybdenum"],
  },
  {
    slug: "liquid-moly-plus",
    name: "HealthyEarth Liquid Moly Plus",
    shortName: "Liquid Moly Plus",
    category: "Farming",
    formula: "Liquid Molybdenum Concentrate",
    subtitle: "For Molybdenum Deficiencies in Crops",
    description: "Concentrated liquid molybdenum for correcting deficiencies that limit nitrogen fixation and protein synthesis in legumes and grain crops.",
    longDescription: "Molybdenum is required in only trace amounts, but its absence has outsized consequences — particularly in legumes where it's essential for biological nitrogen fixation, and in grain crops where it drives protein synthesis. HealthyEarth Liquid Moly Plus delivers concentrated, immediately plant-available molybdenum to correct deficiencies quickly and restore full crop productivity.",
    benefits: ["Corrects molybdenum deficiency rapidly","Essential for biological nitrogen fixation in legumes","Supports protein synthesis in grain crops","Liquid form for fast foliar or soil uptake","High concentration — low application rates","Cost-effective deficiency correction"],
    usage: "Apply as a foliar spray or through fertigation. For legume seed treatment, dilute and apply to seed before planting. Always dilute before use.",
    dosage: ["Foliar spray: 100–200 mL/ha","Fertigation: 200–400 mL/ha","Legume seed treatment: 50 mL/100 kg seed","Apply once at deficiency detection or preventatively"],
    safetyNotes: "Wear gloves and eye protection. Molybdenum is toxic at high rates — do not exceed recommended rates. Dilute before use. Keep out of reach of children.",
    bestFor: ["Legumes (clover, lucerne, soybeans, beans)","Grain crops","Brassicas (cauliflower, broccoli)","Pastures","Molybdenum-deficient acidic soils"],
    sizes: ["1 L","5 L","20 L"],
    color: "#283593",
    icon: "drops",
    localImagePath: "/products/Liquid Moly Plus.png",
    featured: false,
    tags: ["molybdenum","moly","legume","nitrogen fixation","deficiency","trace element"],
  },
  {
    slug: "kickstart-npk",
    name: "HealthyEarth KickStart liquid NPK",
    shortName: "KickStart NPK",
    category: "Farming",
    formula: "Balanced Liquid NPK + Trace Elements",
    subtitle: "Improves Soil Health and Boosts Crop Productivity",
    description: "Liquid NPK with trace elements designed to kickstart soil health and boost crop productivity from the ground up — season after season.",
    longDescription: "KickStart liquid NPK is designed to do exactly what the name suggests — deliver an immediate, comprehensive nutritional kick that sets crops up for maximum productivity. Balanced NPK combined with trace elements works synergistically to improve both soil health and crop performance simultaneously. Ideal for early-season applications, transplant nutrition and situations where rapid establishment of soil biology and plant growth are the priority.",
    benefits: ["Immediate NPK nutrition for rapid early-season growth","Trace elements prevent deficiency at critical establishment stages","Improves soil health alongside crop nutrition","Boosts crop productivity from the first application","Liquid form for fast uptake through roots and leaves","Suitable for fertigation, foliar and in-furrow application"],
    usage: "Apply through irrigation (fertigation), as a foliar spray, or in-furrow at planting. Mix with water and agitate before applying. Compatible with most fertiliser programs.",
    dosage: ["Fertigation: 10–20 L/ha","Foliar spray: 5–10 L/ha","In-furrow at planting: 5–8 L/ha","Apply every 3–4 weeks or at key growth stages"],
    safetyNotes: "Avoid contact with eyes. Wash hands after use. Jar-test before mixing with other products. Keep out of reach of children.",
    bestFor: ["Early-season crop establishment","Transplant nutrition","Grain crops","Vegetables","Horticulture","Pasture renovation"],
    sizes: ["20 L","200 L drum","1000 L IBC"],
    color: "#f57f17",
    icon: "rocket",
    localImagePath: "/products/Kickstart Liquid NPK Fertilizer.png",
    featured: false,
    tags: ["NPK","kickstart","liquid","soil health","crop productivity","early season"],
  },
  {
    slug: "colour-spray",
    name: "HealthyEarth Colour Spray",
    shortName: "Colour Spray",
    category: "Farming",
    formula: "Colour Enhancement Blend",
    subtitle: "Deeper, Richer Colours in Fruit, Flowers & Foliage",
    description: "Drives deeper, richer colour development in fruit, flowers and foliage. Mix with NPK LeafSpray Plus and NutriSpread for best results.",
    longDescription: "HealthyEarth Colour Spray targets the specific nutritional triggers that control colour development — primarily anthocyanin synthesis in fruit and foliage. Applied at the colour break stage and again pre-harvest, it drives deeper reds, richer yellows and more vivid greens that command premium prices at market. Works as a companion product to NPK LeafSpray Plus — the two products together deliver both nutritional foundation and targeted colour response.",
    benefits: ["Drives deeper, richer colour development in fruit","Improves red colour intensity in stone fruit and apples","Enhances flower colour and longevity","Richer foliage colour improves photosynthesis efficiency","Premium appearance commands better market prices","No withholding period"],
    usage: "Apply as foliar spray at colour break stage. Mix with NPK LeafSpray Plus and NutriSpread for maximum effect. Apply in calm conditions in early morning or evening.",
    dosage: ["Foliar spray: 1–2 L/ha","Mix with NPK LeafSpray Plus at recommended rates","Add NutriSpread at 200–500 mL/ha for improved coverage","Apply 2–3 times from colour break to harvest"],
    safetyNotes: "Wear gloves and eye protection. Avoid spray drift onto non-target plants. Store in cool, dry location. Keep out of reach of children.",
    bestFor: ["Apples and pears","Stone fruit (cherries, peaches, plums)","Red grapes","Citrus (colour enhancement)","Cut flowers","Ornamental foliage"],
    sizes: ["5 L","20 L","200 L drum"],
    color: "#ad1457",
    icon: "palette",
    localImagePath: null,
    featured: false,
    tags: ["colour","anthocyanin","fruit colour","stone fruit","apples","grapes","premium"],
  },
  {
    slug: "booster",
    name: "HealthyEarth Booster",
    shortName: "Booster",
    category: "Farming",
    formula: "Comprehensive Quality Enhancement Blend",
    subtitle: "Improves Taste, Palatability, Health, Vigour & Sugar Levels",
    description: "Enhances crop quality, Brix (sugar) levels, taste and palatability. No withholding period — safe right through to harvest.",
    longDescription: "HealthyEarth Booster is a comprehensive liquid nutrient formulation designed to lift the quality of your crop at the final stages of production. Applied during fruit fill and maturation, Booster drives measurably higher Brix (sugar) levels, improved palatability and enhanced nutritional density. The result is produce that tastes better, lasts longer and achieves better market returns — across everything from citrus and stone fruit to vegetables and pasture.",
    benefits: ["Measurably increases Brix (sugar) levels","Improves taste, flavour and palatability","Enhances plant health and vigour at maturation","Improves produce shelf life and storage quality","No withholding period — safe right up to harvest","Suitable for organic programs"],
    usage: "Apply as foliar spray or through drip irrigation at fruit fill stage. Repeat 3–4 weeks before harvest for maximum Brix response. Can be used throughout the season for ongoing health benefits.",
    dosage: ["Foliar spray: 2–3 L/ha in 200–400 L water","Drip irrigation: 3–5 L/ha per application","Apply at fruit set, mid-fill and pre-harvest","3 applications per season recommended"],
    safetyNotes: "Dilute before use. No withholding period. Wash hands after handling. Compatible with most crop protection products — jar-test before mixing. Store in cool location.",
    bestFor: ["Stone fruit","Citrus","Tomatoes and capsicum","Grapes","Avocados","Berries","Vegetables","Pasture"],
    sizes: ["5 L","20 L","200 L drum"],
    color: "#d84315",
    icon: "trending",
    localImagePath: "/products/Booster.png",
    featured: true,
    tags: ["brix","sugar","quality","taste","palatability","fruit","no withholding"],
  },
];

// ── Blog Posts ─────────────────────────────────────────────────────────────

const blogPosts = [
  {
    slug: "why-silica-matters-australian-gardens",
    title: "Why Silica is the Missing Nutrient in Australian Gardens",
    date: "2026-05-15",
    author: "BioCare Agronomy Team",
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

SilicaMax is our liquid silicon concentrate, and it's what most of our customers start with. It's straightforward to apply — either as a foliar spray or through your irrigation — and because it's in a plant-available form, you tend to see results within four to six weeks. Firmer structure, stronger colour, and usually a noticeable drop in pest and disease pressure.

For lawns, two applications a year — early spring and again in autumn — is enough to build real soil biology and turf density over time.

If you're running a spray program on a larger scale, UltraSilica Wettable is the powder format that mixes easily into existing tank mixes. Same results, more practical for broadacre.

Give it a season. The plants will show you whether it's working.`,
  },
  {
    slug: "spring-lawn-prep-guide",
    title: "The 5-Step Spring Lawn Prep Guide for Australian Conditions",
    date: "2026-05-01",
    author: "BioCare Agronomy Team",
    category: "Lawn Care",
    excerpt: "Spring is the most important window for getting your lawn right for the season ahead. Here's exactly what to do — and in what order.",
    featured: false,
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

This step gets skipped a lot, but it makes a real difference to how well everything else performs. Apply SilicaMax as a soil drench — about 50–100 mL per 10 m², diluted in water — before you fertilise. Silicon activates soil biology and conditions the root zone to receive nutrition more efficiently.

Apply to moist soil and water in lightly afterwards. Don't apply to bone-dry ground.

**Step 4: Fertilise properly**

Now the soil is open and the biology is active, it's ready to receive nutrition. Apply Pro-Strength Lawn Fertiliser (N 13 : P 3 : K 14) at 30–40 g per square metre. The NPK ratio is specifically balanced for spring lawn growth — enough nitrogen to drive colour and density, potassium to harden the plant, and low enough phosphorus that you're not stimulating weeds.

Water in well after application. If you're not expecting rain for more than three or four days, hold off until the forecast improves.

Most people see visible results in 7–10 days.

**Step 5: Sort the bare patches**

Once the main lawn is fertilised, walk it and identify any thin or bare areas. Oversow with a grass seed variety suited to your climate and sun conditions — your local nursery can point you to the right one. Water SeedPrimer into the seed after sowing. It speeds up germination noticeably and evens out establishment across the patch.

Do these five things in this order, and your lawn will come into summer in the best shape it can be. Skip ahead or cut corners and you'll spend the rest of the season trying to catch up.`,
  },
  {
    slug: "understanding-npk-fertiliser-ratios",
    title: "Understanding NPK Ratios — What Do Those Numbers Actually Mean?",
    date: "2026-04-18",
    author: "BioCare Agronomy Team",
    category: "Product Tips",
    excerpt: "Every fertiliser bag has three numbers on it. Here's a plain-English guide to what N, P and K do — and how to choose the right ratio for what you're growing.",
    featured: false,
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

• Lawns want high N and moderate K, with low P — our Pro-Strength Lawn Fertiliser (N 13 : P 3 : K 14) is built around this
• Leafy vegetables and herbs do well on a balanced formula — Premium GP Garden Fertiliser covers most situations
• Flowering and fruiting plants need less N and more P and K — BLOOM-n-YIELD is formulated for exactly this
• Broadacre and pasture needs a complete balanced program — 44-Plus (N 13.9 : P 3.7 : K 10.7 + S 10.7) is designed for this

**The bit most people miss — trace elements**

N, P and K are the three that get all the attention, but they're not the whole story. Iron, zinc, manganese, boron, copper, molybdenum — these trace elements are just as essential to plant health, just needed in much smaller quantities.

The tricky thing is that trace element deficiencies often look almost identical to NPK deficiencies. Yellowing leaves, poor growth, discolouration — you can go chasing the wrong thing for a whole season. EasyTrace is our foliar trace element blend, and it works quickly — most growers see a visible response within five to seven days of application, which also confirms whether trace elements were the issue.

If you're still not sure what your plants are missing, that's exactly what Ella is there for. Describe what you're seeing and she'll work through it with you.`,
  },
];

// ── Run migration ──────────────────────────────────────────────────────────

async function migrate() {
  console.log("Migrating products...");
  for (const p of products) {
    const doc = {
      _type: "product",
      ...p,
    };
    await client.create(doc);
    console.log(`  ✓ ${p.shortName}`);
  }

  console.log("\nMigrating blog posts...");
  for (const post of blogPosts) {
    const { slug: slugStr, ...rest } = post;
    const doc = {
      _type: "blogPost",
      ...rest,
      slug: { _type: "slug", current: slugStr },
    };
    await client.create(doc);
    console.log(`  ✓ ${post.title}`);
  }

  console.log("\n✅ Migration complete!");
}

migrate().catch(console.error);
