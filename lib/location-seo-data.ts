export type LocationFAQ = { q: string; a: string };

export type LocationData = {
  slug: string;
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  soilIntro: string;
  soilType: string;
  climate: string;
  challenges: string[];
  gardenSection: { body: string; products: string[] };
  lawnSection: { body: string; products: string[] };
  farmingSection: { body: string; products: string[] };
  organicSection: { body: string; products: string[] };
  soilSection: { body: string; products: string[] };
  nutritionSection: { body: string; products: string[] };
  faqs: LocationFAQ[];
};

const locations: LocationData[] = [
  {
    slug: "wollongong",
    name: "Wollongong",
    region: "NSW",
    metaTitle: "Fertiliser Wollongong | Garden, Lawn & Farming | Healthy Earth BioCare",
    metaDescription: "Premium fertilisers for Wollongong gardens, lawns and farms. BioCare biological fertilisers formulated for Illawarra's coastal soils and high-rainfall conditions. Free advice from Ella.",
    heroHeadline: "Fertiliser Built for Wollongong's Coastal Soils",
    heroSub: "Wollongong's combination of high rainfall, coastal humidity and volcanic red soils creates unique growing conditions. BioCare biological fertilisers are formulated to work with these conditions — feeding soil biology, reducing nutrient leaching and producing healthier plants season after season.",
    soilIntro: "Wollongong sits in one of Australia's most diverse soil zones. The Illawarra escarpment carries rich, deep krasnozem red soils formed from ancient volcanic basalt — naturally fertile and biologically active. Drop to the coastal strip and the picture changes: lighter, sandier soils that drain quickly and lose nutrients fast. Both soil types benefit from biological fertilisation, but for different reasons.",
    soilType: "Volcanic red krasnozem (escarpment) and light coastal sandy soils",
    climate: "Temperate maritime — high annual rainfall (1,200mm+), warm humid summers, mild winters, consistent coastal humidity year-round",
    challenges: [
      "Nutrient leaching in high-rainfall seasons",
      "Fungal disease pressure from coastal humidity",
      "Coastal salt wind affecting foliage and soil structure",
      "Sandy coastal soils with poor nutrient retention",
    ],
    gardenSection: {
      body: "Wollongong gardens thrive with the right biological nutrition program. The humid coastal climate means plants grow vigorously but also face pressure from fungal pathogens and sap-sucking insects drawn to lush growth. A balanced approach using Liquid NPK for fast nutrition and Eco-Spray for pest and disease management keeps gardens productive without heavy chemical inputs. The volcanic soils on the escarpment respond exceptionally well to biological stimulants — humic acid and seaweed extracts unlock nutrients already present in the soil, reducing the need for synthetic top-ups.",
      products: ["Liquid NPK Fertiliser", "Eco-Spray", "Bloom-n-Yield", "Premium GP Garden Fertiliser"],
    },
    lawnSection: {
      body: "Wollongong lawns face a specific challenge: the humid climate encourages fast growth but also fungal lawn diseases including dollar spot and brown patch. The key is balanced nutrition that builds strong cell walls rather than forcing excessive soft growth. Pro-Strength Lawn Fertiliser provides the right N:K ratio for Wollongong conditions — enough nitrogen for colour and density, with high potassium to build disease and drought resistance. Apply after the summer rains ease off in autumn to recover any heat-stressed areas.",
      products: ["Pro-Strength Lawn Fertiliser", "44-Plus Garden", "Liquid NPK Fertiliser"],
    },
    farmingSection: {
      body: "The Illawarra has a long history of dairy farming and market gardening on its rich volcanic red soils. These soils are naturally fertile but years of conventional farming can deplete the biological activity that makes them so productive. BioCare's farming range — particularly SilicaMax and 44-Plus — rebuilds the soil food web while delivering the nitrogen, phosphorus and potassium broadacre crops and pastures need. High rainfall means nutrient runoff is a real concern; biological products bind nutrients in the soil profile rather than leaving them in soluble form.",
      products: ["SilicaMax", "44-Plus Farming", "CalMag 51", "NPK LeafSpray Plus", "SeedPrimer"],
    },
    organicSection: {
      body: "Wollongong's active community of home growers and small market gardeners has driven strong demand for organic and biological fertiliser options. BioCare products contain no synthetic nitrates, no harmful residues and carry no withholding periods on edibles — making them safe to use right up to harvest. Trace Elements Volcanic and Humic Carbon Liquid are particularly popular with Wollongong organic growers for rebuilding depleted soil mineral reserves and supporting diverse soil biology.",
      products: ["Trace Elements Volcanic", "Humic Carbon Liquid", "Premium GP Garden Fertiliser", "Eco-Spray"],
    },
    soilSection: {
      body: "Sandy coastal soils in the Wollongong beachside suburbs — North Wollongong, Fairy Meadow, Thirroul — struggle to hold water and nutrients. The Instant Clay Breaker and Humic Carbon Liquid combination transforms these soils by increasing organic matter, improving cation exchange capacity and building the microbial communities that create genuine long-term fertility. For clay-heavy areas inland, the Clay Breaker Powder breaks compaction and dramatically improves drainage and root penetration.",
      products: ["Instant Clay Breaker", "Humic Carbon Liquid", "Trace Elements Volcanic", "Instant Clay Breaker Powder"],
    },
    nutritionSection: {
      body: "Plant nutrition in Wollongong's high-rainfall environment requires more frequent, lower-dose applications to compensate for leaching. Liquid fertilisers — particularly Liquid NPK and NPK LeafSpray Plus — deliver nutrients directly where they're needed and can be applied fortnightly without the risk of burning. The addition of NutriSpread to foliar programs improves adhesion so nutrients stay on the leaf rather than washing off in the next rain shower.",
      products: ["Liquid NPK Fertiliser", "NPK LeafSpray Plus", "NutriSpread", "EasyTrace"],
    },
    faqs: [
      { q: "What fertiliser works best for Wollongong's high rainfall?", a: "In high-rainfall areas like Wollongong, liquid biological fertilisers applied in smaller, more frequent doses work much better than slow-release granulars that can wash through the soil before plants absorb them. Liquid NPK and NPK LeafSpray Plus are ideal — they're taken up quickly and the humic acid in the BioCare range helps bind nutrients in the soil profile." },
      { q: "How do I deal with fungal problems in my Wollongong garden?", a: "Wollongong's coastal humidity creates ideal conditions for fungal diseases. Eco-Spray handles common fungal pathogens while also improving plant health and nutrient uptake. Building silica levels with our UltraSilica products strengthens cell walls, making plants naturally more resistant to fungal entry." },
      { q: "Are BioCare products safe for Wollongong's waterways and beaches?", a: "Yes — BioCare biological fertilisers do not contribute to nutrient runoff into waterways because nutrients are bound in soil biology rather than sitting in soluble form. They contain no synthetic nitrates and are non-toxic to aquatic life at recommended rates, making them a responsible choice for properties near Lake Illawarra, the coastal lagoons or the escarpment creeks." },
      { q: "Can I use these products on my Illawarra escarpment property?", a: "The red volcanic soils of the escarpment are already biologically rich — BioCare products amplify what's already there. SilicaMax and Humic Carbon Liquid are particularly effective on escarpment properties, stimulating the existing microbial communities and unlocking the deep mineral reserves in the volcanic basalt-derived soils." },
    ],
  },
  {
    slug: "sydney",
    name: "Sydney",
    region: "NSW",
    metaTitle: "Fertiliser Sydney | Garden, Lawn & Farming | Healthy Earth BioCare",
    metaDescription: "Biological fertilisers for Sydney gardens, lawns and urban farms. BioCare products formulated for Sydney's clay and sandstone soils. Free plant advice from Ella, our AI agronomist.",
    heroHeadline: "Fertiliser Formulated for Sydney's Diverse Soils",
    heroSub: "Sydney spans three distinct soil zones — Wianamatta clay in the west, Hawkesbury sandstone in the north and south, and the rich alluvial soils of the Cumberland Plain. BioCare biological fertilisers are designed to work across all of them, building genuine soil health rather than masking poor conditions with synthetic inputs.",
    soilIntro: "Sydney's soil story is one of dramatic contrasts. Western Sydney suburbs sit on Wianamatta Group shale — dense, heavy clay that waterloggs in winter and cracks open in summer. The northern beaches and Royal National Park south are pure Hawkesbury sandstone — ancient, nutrient-poor, acidic soils that drain in minutes. In between lies the Cumberland Plain with its deeper, more workable alluvial profiles. Understanding your Sydney suburb's soil type is the first step to choosing the right fertiliser.",
    soilType: "Heavy Wianamatta clay (west), Hawkesbury sandstone/sandy soils (north/south), Cumberland Plain alluvials (central)",
    climate: "Temperate with warm to hot summers (1,200mm annual rainfall, most falling summer), mild dry winters, high UV year-round",
    challenges: [
      "Heavy clay compaction in western suburbs",
      "Extremely poor, nutrient-deficient sandstone soils in north and south",
      "Summer heat stress on lawns and gardens",
      "Urban soil compaction from construction and foot traffic",
    ],
    gardenSection: {
      body: "Sydney home gardeners face a tale of two soils. In the west — Penrith, Blacktown, Campbelltown, Parramatta — the priority is breaking heavy clay, improving drainage and building organic matter before plants can thrive. On the northern and southern fringes — Manly, Cronulla, the Hills — the challenge is the opposite: feeding sandy, acidic, nutrient-poor soils that can't hold fertiliser for more than a few days. BioCare's range covers both ends of the spectrum. The Clay Breaker Powder and Liquid transform western Sydney's heavy soils, while Humic Carbon Liquid and frequent liquid feeding suit the sandstone soil gardeners of the north and south.",
      products: ["Instant Clay Breaker Powder", "Instant Clay Breaker", "Liquid NPK Fertiliser", "Humic Carbon Liquid", "Premium GP Garden Fertiliser", "Bloom-n-Yield"],
    },
    lawnSection: {
      body: "Sydney lawns take a beating from summer heat, heavy foot traffic and — in western suburbs — the iron-hard clay that makes root establishment difficult. Pro-Strength Lawn Fertiliser's N:P:K ratio is calibrated for Sydney conditions, with high potassium to build heat and drought tolerance through January and February when temperatures consistently top 35°C. For Buffalo lawns (by far the most common in Sydney), the organic biostimulant components in the 44-Plus range prevent the yellowing that's common in shaded Sydney gardens during winter.",
      products: ["Pro-Strength Lawn Fertiliser", "44-Plus Garden", "Liquid NPK Fertiliser", "Penetrator"],
    },
    farmingSection: {
      body: "Sydney's urban fringe — the Hawkesbury, the Hills, Camden and the Macarthur region — supports significant market gardening, small-scale farming and intensive horticulture. These operations work with soils ranging from the productive alluvials of the Hawkesbury River flats to the challenging volcanic soils of the Camden area. BioCare's farming range helps Sydney-fringe growers reduce synthetic fertiliser inputs while maintaining or improving yields. SeedPrimer is particularly effective for the intensive vegetable operations in the Hawkesbury region, improving germination uniformity and early root development.",
      products: ["44-Plus Farming", "SeedPrimer", "CalMag 51", "KickStart NPK", "NPK LeafSpray Plus", "NutriSpread"],
    },
    organicSection: {
      body: "Sydney has one of Australia's largest and most active organic growing communities — from backyard veggie patches in Newtown and Balmain to certified organic operations in the Hills and Macarthur. BioCare biological fertilisers contain no synthetic nitrates, no heavy metals above food-safe limits and carry no withholding periods, making them the natural choice for Sydney's organic growers. Trace Elements Volcanic is a particular favourite in Sydney organic circles for rebuilding the mineral diversity that intensive gardening strips from urban soils.",
      products: ["Trace Elements Volcanic", "Humic Carbon Liquid", "Glacial Milk Silica Ultra", "Eco-Spray", "Bloom-n-Yield"],
    },
    soilSection: {
      body: "Improving Sydney soil is the foundation of any successful garden or lawn program. For clay-dominant western Sydney, Instant Clay Breaker Powder provides immediate structural improvement — breaking clay plates, opening drainage channels and kick-starting the microbial communities that maintain good structure long-term. For sandy northern beaches soils, Humic Carbon Liquid builds cation exchange capacity, giving nutrients something to bind to rather than washing straight through to the water table. The Penetrator soil wetter is particularly useful across all Sydney soil types during the dry winters when soils become water-repellent.",
      products: ["Instant Clay Breaker Powder", "Instant Clay Breaker", "Humic Carbon Liquid", "Penetrator", "Trace Elements Volcanic"],
    },
    nutritionSection: {
      body: "Plant nutrition for Sydney gardens requires a different approach depending on your suburb's soil type. In clay-heavy western Sydney, slow-release granular fertilisers work well because clay holds nutrients effectively. Premium GP Garden Fertiliser and 44-Plus Garden are ideal. In sandstone-soil areas, regular liquid feeding is more effective — nutrients applied as granulars simply leach through too quickly. Liquid NPK applied fortnightly during the growing season, supplemented by a monthly Humic Carbon drench to build organic matter, gives the best results on Sydney's more challenging soils.",
      products: ["Premium GP Garden Fertiliser", "44-Plus Garden", "Liquid NPK Fertiliser", "Bloom-n-Yield", "EasyTrace"],
    },
    faqs: [
      { q: "What fertiliser is best for Sydney clay soils?", a: "Start with Instant Clay Breaker Powder to physically improve the soil structure — it works faster than lime or gypsum. Then follow with Humic Carbon Liquid to build organic matter and Premium GP Garden Fertiliser for ongoing nutrition. Within a season, most heavy western Sydney clay soils show significant improvement in drainage, root penetration and plant performance." },
      { q: "My Hawkesbury sandstone garden never responds to fertiliser — why?", a: "Sandy, acidic sandstone soils have almost no capacity to hold nutrients, so standard granular fertilisers simply leach through before roots can absorb them. Switch to small, frequent liquid applications — Liquid NPK fortnightly during the growing season — and build organic matter with Humic Carbon Liquid to give nutrients something to cling to. You'll see a significant difference within one season." },
      { q: "How do I green up my Sydney lawn before summer?", a: "Apply Pro-Strength Lawn Fertiliser in September and again in November. Water it in well and keep up moisture through October. The N:K balance in Pro-Strength drives rapid green-up while building the heat tolerance your lawn needs to survive Sydney's summer. For patchy areas, try Liquid NPK as a targeted drench." },
      { q: "Are BioCare fertilisers safe for Sydney Harbour and waterways?", a: "Yes — BioCare biological products don't contribute to the nutrient runoff that causes algal blooms in Sydney Harbour, the Parramatta River or coastal waterways. Nutrients are bound in soil biology rather than sitting in soluble form available for runoff, making them the responsible choice for harbour-adjacent properties." },
    ],
  },
  {
    slug: "central-coast",
    name: "Central Coast",
    region: "NSW",
    metaTitle: "Fertiliser Central Coast NSW | Garden, Lawn & Farming | Healthy Earth BioCare",
    metaDescription: "Biological fertilisers for Central Coast NSW gardens, lawns and farms. BioCare formulated for sandy coastal soils and heath country. Free advice from Ella.",
    heroHeadline: "Fertiliser That Actually Works in Central Coast Soils",
    heroSub: "Central Coast soils are among the most challenging in NSW — ancient, heavily leached sandy soils with near-zero nutrient reserves and poor water retention. BioCare biological fertilisers are built to fix this from the ground up, rebuilding organic matter, improving water-holding and delivering nutrition that stays in the root zone where plants need it.",
    soilIntro: "The Central Coast sits on ancient Hawkesbury sandstone and Permian Narrabeen Group formations — some of the oldest and most nutrient-depleted soils on the continent. Thousands of years of high rainfall have leached away virtually all the soluble minerals, leaving pale sandy soils that are strongly acidic, extremely low in organic matter and almost incapable of holding either water or fertiliser. It's a humbling environment for gardeners and farmers alike, but the right biological approach transforms these soils remarkably quickly.",
    soilType: "Ancient Hawkesbury sandstone-derived sandy soils, strongly acidic, very low organic matter, near-zero cation exchange capacity",
    climate: "Temperate maritime — moderate to high rainfall (1,100–1,400mm), warm summers, cool mild winters, strong coastal influence",
    challenges: [
      "Extreme nutrient leaching through sandy soils",
      "Very low organic matter — soils can't hold water or nutrients",
      "Strong soil acidity limiting nutrient availability",
      "Non-wetting dry soils in summer",
    ],
    gardenSection: {
      body: "Gardening on the Central Coast requires a fundamentally different mindset to gardening on richer soils elsewhere. The sandy acidic soils of suburbs like Gosford, Terrigal, The Entrance and Avoca Beach simply cannot hold nutrients applied as standard granular fertilisers — they leach through within days of rain. The solution is to build the soil first with Humic Carbon Liquid and Trace Elements Volcanic, then maintain nutrition with frequent small doses of liquid fertilisers. This builds a soil environment that actually retains what you put into it. Within one to two seasons, most Central Coast gardens show dramatic improvement.",
      products: ["Humic Carbon Liquid", "Trace Elements Volcanic", "Liquid NPK Fertiliser", "Bloom-n-Yield", "Eco-Spray"],
    },
    lawnSection: {
      body: "Central Coast lawns on sandy soils struggle with a frustrating pattern: they green up briefly after fertilising, then yellow off within a few weeks as nutrients leach below the root zone. Pro-Strength Lawn Fertiliser applied at half the standard rate but twice as frequently gives far better results on sandy Central Coast soils than standard single heavy applications. Combining with a monthly Penetrator soil wetter treatment dramatically improves water infiltration and prevents the hydrophobic dry spots that are the bane of coastal lawns.",
      products: ["Pro-Strength Lawn Fertiliser", "Penetrator", "Liquid NPK Fertiliser", "Humic Carbon Liquid"],
    },
    farmingSection: {
      body: "The Central Coast's farming sector — particularly the Wyong and Yarramalong valley areas — works with slightly better soils than the coastal sandstone, but building and maintaining soil carbon remains the central challenge for productive farming. BioCare's Regenerative Trace Element Fertiliser and SilicaMax are the foundational products for Central Coast farming operations, delivering the mineral diversity and biological stimulation that these ancient soils are missing. Combined with SeedPrimer for crop establishment and NPK LeafSpray Plus for in-season nutrition, growers consistently report better yields and stronger plant health.",
      products: ["Regenerative Trace Element Fertiliser", "SilicaMax", "SeedPrimer", "NPK LeafSpray Plus", "Humic Carbon Liquid"],
    },
    organicSection: {
      body: "The Central Coast has a passionate organic growing community, particularly in the hinterland villages and urban farms around Gosford and Wyong. BioCare's biological range — containing no synthetic nitrates, no heavy metals and carrying no withholding periods — is the natural choice for Central Coast organic growers. Glacial Milk Silica Ultra is particularly popular with organic gardeners for remineralising the heavily leached sandy soils, providing a broad spectrum of minerals in a food-safe, naturally derived form.",
      products: ["Glacial Milk Silica Ultra", "Trace Elements Volcanic", "Humic Carbon Liquid", "Eco-Spray", "Premium GP Garden Fertiliser"],
    },
    soilSection: {
      body: "Building Central Coast soil is the most important investment a local gardener or farmer can make. Humic Carbon Liquid, applied monthly as a soil drench, steadily builds the cation exchange capacity of sandy soils — essentially giving nutrients a surface to cling to rather than washing straight through. Trace Elements Volcanic adds the broad mineral spectrum that thousands of years of leaching have removed. And Penetrator ensures water and any applied fertilisers actually reach the root zone rather than running off hydrophobic dry soil.",
      products: ["Humic Carbon Liquid", "Trace Elements Volcanic", "Penetrator", "Glacial Milk Silica Ultra"],
    },
    nutritionSection: {
      body: "On the Central Coast, plant nutrition must be delivered little and often. A fortnightly program of Liquid NPK at half the standard rate, supplemented by a monthly Bloom-n-Yield for flowering and fruiting plants, gives far better results than a single heavy application that leaches away before plants can use it. EasyTrace added to the program quarterly addresses the broad trace element deficiencies that are endemic in Central Coast soils — particularly zinc, iron and manganese which are commonly deficient in acidic sandy profiles.",
      products: ["Liquid NPK Fertiliser", "Bloom-n-Yield", "EasyTrace", "NPK LeafSpray Plus", "NutriSpread"],
    },
    faqs: [
      { q: "Why won't anything grow well in my Central Coast garden?", a: "Central Coast sandy soils are some of the most nutrient-depleted in Australia — ancient leaching has removed almost everything plants need. The fix is to build the soil before you try to grow in it. Start with Humic Carbon Liquid monthly for three months to build organic matter and nutrient-holding capacity, add Trace Elements Volcanic to restore minerals, then begin a regular Liquid NPK program. You'll see a dramatic difference within one season." },
      { q: "How often should I fertilise my Central Coast lawn?", a: "More often than you think — every 4 weeks during the growing season rather than the standard 6–8 weeks recommended for richer soils. Apply Pro-Strength Lawn Fertiliser at a slightly reduced rate (20g/m² rather than 30g/m²) more frequently. This matches the rate at which your sandy soil drains nutrients and keeps a steady supply in the root zone." },
      { q: "What's the best way to fix non-wetting soil on the Central Coast?", a: "Apply Penetrator soil wetter at 2–3L per 100m² in a 10L watering can of water. Do this in the cool of the morning on dry soil. Within 24 hours you'll notice dramatically improved water penetration. Combine with a monthly Humic Carbon Liquid drench to build the organic matter that prevents non-wetting from returning." },
      { q: "Can BioCare fertilisers handle the acid soils of the Central Coast?", a: "Yes — BioCare biological fertilisers are pH-adaptable because they work through soil biology rather than direct chemical dissolution. Trace Elements Volcanic has a mildly alkalising effect over time, gradually lifting pH toward the 6.0–6.5 range that most plants prefer. The humic and fulvic acids in Humic Carbon Liquid also help buffer soil pH and improve nutrient availability in acidic conditions." },
    ],
  },
  {
    slug: "illawarra",
    name: "Illawarra",
    region: "NSW",
    metaTitle: "Fertiliser Illawarra | Garden, Lawn & Farming | Healthy Earth BioCare",
    metaDescription: "Premium biological fertilisers for the Illawarra region. BioCare formulated for Illawarra's volcanic red soils, dairy farms and coastal gardens. Free advice from Ella.",
    heroHeadline: "Biological Fertilisers for the Illawarra's Unique Landscape",
    heroSub: "The Illawarra region's spectacular geography — volcanic escarpment, productive red soils and coastal strip — creates one of Australia's most diverse growing environments. BioCare biological fertilisers are designed to work with this landscape, enhancing the natural fertility of Illawarra's renowned red soils while addressing the challenges of coastal and low-lying growing conditions.",
    soilIntro: "The Illawarra's famous red soils are krasnozems — formed from the deep weathering of Palaeogene volcanic basalt flows that cascaded down the escarpment millions of years ago. These soils are among the most naturally fertile in Australia: deep, well-structured, biologically active and rich in iron, phosphorus and trace minerals. The coastal strip and Macquarie Rivulet flats present lighter, more variable soils, while the escarpment itself offers the classic red volcanic profile that made the Illawarra one of NSW's most productive dairy regions.",
    soilType: "Deep volcanic krasnozem red soils (escarpment/tablelands), alluvial flats (river lowlands), light coastal sandy soils (beachside)",
    climate: "Temperate maritime — high annual rainfall (1,200–1,800mm on escarpment), warm humid summers, mild winters, coastal cloud and fog common",
    challenges: [
      "Nutrient leaching in high-rainfall escarpment zones",
      "Soil compaction on intensively grazed dairy country",
      "Coastal humidity driving pest and disease pressure",
      "Phosphorus fixation in highly weathered red soils",
    ],
    gardenSection: {
      body: "Illawarra gardens on the red volcanic soils are capable of extraordinary productivity — the natural fertility of these soils combined with reliable rainfall creates near-ideal growing conditions. The key to maximising this advantage is maintaining the biological activity that makes volcanic soils so productive. BioCare's organic biostimulant range — Bloom-n-Yield for flowering and fruiting plants, Liquid NPK for fast results, and Eco-Spray for pest and disease management — keeps Illawarra gardens productive without the artificial inputs that gradually degrade soil biology. For beachside gardens from Thirroul to Shellharbour, the approach shifts to building up lighter coastal soils with Humic Carbon and regular liquid feeding.",
      products: ["Bloom-n-Yield", "Liquid NPK Fertiliser", "Eco-Spray", "Premium GP Garden Fertiliser", "Humic Carbon Liquid"],
    },
    lawnSection: {
      body: "Illawarra lawns benefit from some of the best natural growing conditions in Australia — rich soils, reliable rainfall and a long growing season. The main challenge is managing the vigorous growth that Illawarra conditions encourage without creating excessive soft growth that invites fungal disease and pest attack. Pro-Strength Lawn Fertiliser with its high potassium content hardens growth, builds drought tolerance for the occasional dry spell, and provides the even green colour that Illawarra's lawn-proud communities expect. Buffalo and couch lawns in the Illawarra particularly respond to the trace element package included in the BioCare range.",
      products: ["Pro-Strength Lawn Fertiliser", "44-Plus Garden", "Liquid NPK Fertiliser"],
    },
    farmingSection: {
      body: "The Illawarra's dairy farming legacy is built on its volcanic red soils — and regenerative agriculture is now bringing those soils back to their natural productivity after decades of conventional intensive farming. BioCare's farming range is designed for exactly this transition. SilicaMax applied at 250kg per ha rebuilds the rhizosphere biology that conventional farming suppresses, while CalMag 51 addresses the calcium and magnesium balance critical for pasture quality and milk production. The 44-Plus Farming granular provides the balanced NPK that established pastures need, with seaweed and humic acid boosting the biological uptake efficiency that the volcanic soils are primed to support.",
      products: ["SilicaMax", "CalMag 51", "44-Plus Farming", "NPK LeafSpray Plus", "Humic Carbon Liquid", "SeedPrimer"],
    },
    organicSection: {
      body: "The Illawarra's growing organic food movement — from farmers markets in Kiama and Berry to urban backyard growers across the region — has embraced BioCare as the biological fertiliser of choice. No synthetic nitrates, no heavy metal contamination, no withholding periods and genuine effectiveness on the Illawarra's fertile soils makes the BioCare range the natural fit for certified and aspirational organic operations alike. Trace Elements Volcanic applied annually replenishes the mineral diversity that even the Illawarra's rich soils lose under intensive food production.",
      products: ["Trace Elements Volcanic", "Glacial Milk Silica Ultra", "Humic Carbon Liquid", "Eco-Spray", "Premium GP Garden Fertiliser"],
    },
    soilSection: {
      body: "Illawarra's volcanic red soils are naturally exceptional, but they have a known limitation: high phosphorus fixation. Iron and aluminium oxides in the deeply weathered volcanic material bind phosphorus into forms that plants struggle to access. BioCare's Humic Carbon Liquid and the fulvic acid component of the range act as natural chelating agents, unlocking this fixed phosphorus and making it available to plant roots — potentially reducing the need for phosphorus applications significantly. On the coastal strip and alluvial flats, building organic matter with Humic Carbon Liquid and improving structure with Clay Breaker is the priority.",
      products: ["Humic Carbon Liquid", "Trace Elements Volcanic", "Instant Clay Breaker", "Regenerative Trace Element Fertiliser"],
    },
    nutritionSection: {
      body: "Illawarra's naturally fertile soils mean plant nutrition programs can focus on maintenance and optimisation rather than remediation. A seasonal program of Premium GP Garden Fertiliser (granular) supplemented by Liquid NPK during the growing season gives most Illawarra garden plants everything they need. For high-value fruiting plants — citrus, stone fruit, avocados which all thrive in the Illawarra climate — adding Bloom-n-Yield at flowering and Booster at fruit fill drives noticeably better fruit quality and yields.",
      products: ["Premium GP Garden Fertiliser", "Liquid NPK Fertiliser", "Bloom-n-Yield", "Booster", "EasyTrace"],
    },
    faqs: [
      { q: "Are Illawarra's red soils really as good as people say?", a: "Yes — the volcanic krasnozem soils of the Illawarra escarpment are among the most naturally fertile in Australia. Deep, biologically active and rich in iron and trace minerals, they support the vigorous plant growth the region is famous for. The key is maintaining their biological activity with organic inputs rather than degrading the soil food web with heavy synthetic fertiliser programs." },
      { q: "What fertiliser do Illawarra dairy farmers use?", a: "Illawarra's most progressive dairy operations are moving toward a biological program anchored by SilicaMax for soil biology and drought resilience, CalMag 51 for pasture structural integrity and milk quality, and 44-Plus Farming for balanced NPK nutrition. The transition from conventional synthetic programs typically takes one to two seasons, after which most farmers report maintaining or improving yields at significantly lower input costs." },
      { q: "How do I get the best out of my Illawarra vegetable garden?", a: "The Illawarra's volcanic soils are already excellent for vegetables — your job is mainly to maintain them rather than rebuild them. Apply Premium GP Garden Fertiliser at the start of each season, then follow with Liquid NPK fortnightly during active growth. Add Bloom-n-Yield once flowering starts for tomatoes, capsicums, beans and zucchinis, and you'll be rewarded with production that takes full advantage of the Illawarra's exceptional growing climate." },
      { q: "My Illawarra lawn gets waterlogged in winter — what can I do?", a: "Winter waterlogging in the Illawarra is usually a compaction problem rather than a drainage problem — the volcanic clay soils compact under foot traffic and mowing, creating an impermeable layer just below the surface. Aerate with a garden fork or hire a core aerator, then drench with Instant Clay Breaker Liquid to break up the compacted zone. Follow with a light application of Trace Elements Volcanic. The improvement in drainage is typically immediate." },
    ],
  },
  {
    slug: "perth",
    name: "Perth",
    region: "WA",
    metaTitle: "Fertiliser Perth WA | Garden, Lawn & Farming | Healthy Earth BioCare",
    metaDescription: "Biological fertilisers for Perth gardens, lawns and farms. BioCare formulated for Perth's sandy soils and Mediterranean climate. Free plant advice from Ella.",
    heroHeadline: "Fertiliser That Works in Perth's Sandy Soils",
    heroSub: "Perth's white sandy soils are some of the most challenging in the world — ancient, heavily leached, with virtually no capacity to hold nutrients or water. BioCare biological fertilisers are designed to address this from the ground up: building organic matter, improving water retention and delivering nutrition that stays where plants need it, not draining away with the next watering.",
    soilIntro: "Perth's soils tell the story of an ancient landscape. The Swan Coastal Plain — where most of Perth's population lives — is dominated by Bassendean and Spearwood sands: pale, almost structureless sandy soils with organic matter levels below one percent and almost zero cation exchange capacity. These soils cannot hold nutrients or water. East of the Darling Scarp, the picture improves with lateritic gravelly soils and red-brown earths, but leaching and low organic matter remain the dominant challenges. Perth gardeners, farmers and turf managers all face the same fundamental problem: the soil simply doesn't function as a growing medium until it's actively improved.",
    soilType: "Bassendean and Spearwood sands (coastal plain), lateritic gravels (Darling Scarp), red-brown earths (Wheatbelt fringe)",
    climate: "Mediterranean — hot dry summers (40°C+), mild wet winters (700–900mm rainfall mostly May–September), almost zero summer rainfall, extreme evaporation",
    challenges: [
      "Extreme nutrient leaching through sandy soils",
      "Non-wetting hydrophobic soils — water runs off dry sand rather than penetrating",
      "Zero summer rainfall — total reliance on irrigation",
      "Very low organic matter and cation exchange capacity",
    ],
    gardenSection: {
      body: "Gardening in Perth requires a completely different approach to eastern Australia. With almost no summer rainfall and extremely sandy soils, irrigation is essential and nutrient management must account for constant leaching. The Penetrator soil wetter is arguably the most important product for Perth gardens — without it, water simply runs off the hydrophobic dry sand rather than reaching plant roots. Combined with Humic Carbon Liquid to build organic matter and frequent small doses of Liquid NPK, Perth gardens can be transformed from frustrating sandboxes into productive, thriving spaces. West Australian native plants require a different approach — lower phosphorus, trace-element focus — and the BioCare range accommodates natives well.",
      products: ["Penetrator", "Humic Carbon Liquid", "Liquid NPK Fertiliser", "Bloom-n-Yield", "Trace Elements Volcanic", "Eco-Spray"],
    },
    lawnSection: {
      body: "Perth has some of Australia's most lawn-obsessed suburbs — and some of its most lawn-challenging soils. Couch and buffalo lawns on Bassendean sands require watering every two to three days in summer and fertilising every four weeks during the growing season just to maintain colour and density. Pro-Strength Lawn Fertiliser applied regularly (every 4–5 weeks October to March) combined with monthly Penetrator applications is the program that Perth lawn owners consistently get the best results from. The Penetrator is critical — it converts your irrigation from surface-wetting to deep root-reaching moisture that actually sustains the lawn through Perth's brutal summer.",
      products: ["Pro-Strength Lawn Fertiliser", "Penetrator", "Liquid NPK Fertiliser", "44-Plus Garden"],
    },
    farmingSection: {
      body: "Western Australia's agricultural zone — the grain belt, the South-West and the Ord irrigation area — faces some of the world's most demanding soil conditions for farming. Acidity, aluminium toxicity, water repellence and trace element deficiencies combine to make WA soils among the most difficult to farm productively. BioCare's farming range provides the biological approach increasingly adopted by WA's progressive growers. SilicaMax builds crop resilience against the extreme summer dry spells. EasyTrace addresses the broad trace element deficiencies endemic in WA's ancient leached soils. And the Penetrator soil wetter makes the difference between water reaching plant roots and simply running off during irrigation.",
      products: ["SilicaMax", "EasyTrace", "Penetrator", "44-Plus Farming", "NPK LeafSpray Plus", "Regenerative Trace Element Fertiliser"],
    },
    organicSection: {
      body: "Perth's organic growing movement is strong — from the urban farms of Fremantle and Victoria Park to the certified organic wine and food producers of the Margaret River and Swan Valley regions. BioCare biological fertilisers — no synthetic nitrates, no harmful residues, no withholding periods — are the natural fit for WA's organic sector. Glacial Milk Silica Ultra is particularly valued in organic Perth gardens for delivering the broad spectrum of minerals that Perth's ancient, leached sands are completely missing.",
      products: ["Glacial Milk Silica Ultra", "Trace Elements Volcanic", "Humic Carbon Liquid", "Eco-Spray", "Premium GP Garden Fertiliser"],
    },
    soilSection: {
      body: "Improving Perth's Bassendean sands is a long-term project but the results are transformative. The three-step approach: first, fix the water repellence with Penetrator; second, build organic matter and nutrient-holding capacity with Humic Carbon Liquid applied monthly; third, add minerals back with Trace Elements Volcanic or Glacial Milk Silica Ultra. After six months on this program, most Perth gardeners report their soil changing from a dry white sand to a darker, more structured, moisture-retaining growing medium that actually supports plant growth without constant interventions.",
      products: ["Penetrator", "Humic Carbon Liquid", "Trace Elements Volcanic", "Glacial Milk Silica Ultra", "Regenerative Trace Element Fertiliser"],
    },
    nutritionSection: {
      body: "Perth plant nutrition must be frequent and in liquid form. Granular fertilisers on Perth's sandy soils leach below the root zone within days of irrigation — you're effectively fertilising the subsoil rather than your plants. Liquid NPK applied weekly at half strength during the growing season dramatically outperforms monthly granular applications in Perth's leaching environment. EasyTrace quarterly addresses the iron, zinc, manganese and boron deficiencies that are endemic in Perth's alkaline irrigated sandy soils, where trace elements are present but locked up and unavailable to plants.",
      products: ["Liquid NPK Fertiliser", "EasyTrace", "NPK LeafSpray Plus", "Bloom-n-Yield", "NutriSpread"],
    },
    faqs: [
      { q: "Why does everything I plant in Perth turn yellow?", a: "Yellowing in Perth gardens is almost always iron or manganese deficiency — classic symptoms of alkaline, sandy, irrigated soils where these trace elements are present but locked in unavailable forms. EasyTrace applied as a foliar spray corrects this rapidly. Also check your irrigation water pH — Perth's scheme water can be slightly alkaline, pushing soil pH up and worsening trace element availability. Monthly Humic Carbon Liquid drenches help buffer soil pH and keep trace elements accessible to plant roots." },
      { q: "How do I stop my Perth lawn from dying every summer?", a: "The key is getting water to actually reach the roots — not just wet the surface. Apply Penetrator soil wetter monthly through summer at 20ml per litre of water, irrigate before 7am to minimise evaporation, and apply Pro-Strength Lawn Fertiliser every 4–5 weeks. With Perth's scheme water restrictions, making every litre count with Penetrator is the single biggest improvement most Perth lawn owners can make." },
      { q: "What's the best way to build organic matter in Perth sand?", a: "Humic Carbon Liquid applied monthly as a soil drench is the most effective way to build cation exchange capacity and organic matter function in Perth's Bassendean sands. It doesn't add bulk organic matter, but it creates the humic acid chemistry that mimics organic matter's nutrient-holding function. Combine with annual applications of Trace Elements Volcanic to replace the minerals that Perth's ancient soils have completely lost to leaching." },
      { q: "Can I grow vegetables in Perth's sandy soil?", a: "Absolutely — but you need to improve the soil first. Dig in compost and apply Humic Carbon Liquid for two months before planting. Choose raised beds if possible for more control. Once your veggie patch is established, fertilise every two weeks with Liquid NPK and add Bloom-n-Yield when flowering starts. Perth's long growing season and reliable sunshine make vegetable gardening genuinely rewarding once you've addressed the soil limitations." },
    ],
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    region: "QLD",
    metaTitle: "Fertiliser Brisbane | Garden, Lawn & Farming | Healthy Earth BioCare",
    metaDescription: "Biological fertilisers for Brisbane gardens, lawns and farms. BioCare products formulated for Brisbane's clay soils and subtropical climate. Free advice from Ella.",
    heroHeadline: "Fertiliser for Brisbane's Subtropical Gardens and Farms",
    heroSub: "Brisbane's subtropical climate makes it one of Australia's most productive growing environments — but the heavy clay soils and intense summer wet season create unique challenges. BioCare biological fertilisers are built for Brisbane's conditions: boosting the year-round growing potential while addressing the clay compaction, waterlogging and humidity-driven disease pressure that Brisbane gardeners and farmers face.",
    soilIntro: "Greater Brisbane's soils are dominated by two types: the heavy grey and black cracking clays of the western suburbs and the Lockyer Valley (Vertosols), and the lighter red-brown and yellow clay loams of the ranges and coastal fringe. Both are fundamentally different from Sydney's sandstone soils or Perth's sands — they're mineral-rich but biologically suppressed, prone to waterlogging in the summer wet and rock-hard in the winter dry. Brisbane also benefits from alluvial soils along the Brisbane and Bremer Rivers — among the most naturally productive growing soils in Queensland.",
    soilType: "Grey and black cracking clays (west), red-brown clay loams (ranges/coastal), alluvial silts (river flats)",
    climate: "Subtropical — hot humid summers with heavy monsoon rainfall (Jan–March), mild dry winters, year-round growing season, frost-free",
    challenges: [
      "Heavy clay soils that waterlog in wet season and crack in dry season",
      "High summer humidity driving fungal diseases and pest pressure",
      "Manganese deficiency common in alkaline clay soils",
      "Nutrient leaching during intense summer rainfall events",
    ],
    gardenSection: {
      body: "Brisbane's year-round growing season is one of its great gifts — gardens that would be dormant in Canberra or Melbourne are actively growing 12 months of the year in Brisbane. Managing this continuous growth sustainably is the challenge. BioCare's Eco-Spray handles the persistent pest and disease pressure that Brisbane's humidity generates, while Bloom-n-Yield drives the prolific flowering and fruiting that Brisbane's subtropical climate is capable of delivering. For gardeners in Brisbane's western clay-heavy suburbs — Ipswich, Springfield, Forest Lake — breaking the clay with Instant Clay Breaker Powder first is essential before any nutrition program can work effectively.",
      products: ["Eco-Spray", "Bloom-n-Yield", "Instant Clay Breaker Powder", "Liquid NPK Fertiliser", "Premium GP Garden Fertiliser"],
    },
    lawnSection: {
      body: "Brisbane lawns — overwhelmingly buffalo and couch varieties — grow vigorously through the summer wet season and can turn from patchy to lush in a matter of weeks with the right nutrition program. The risk is excessive soft growth driven by nitrogen alone, which invites fungal disease and insect attack in Brisbane's humid conditions. Pro-Strength Lawn Fertiliser's high-potassium formula hardens growth while still delivering the colour and density Brisbane lawns are known for. Apply in September as the weather warms, again in December, and reduce to every 6 weeks through the peak wet season to avoid forcing excessive soft growth.",
      products: ["Pro-Strength Lawn Fertiliser", "Liquid NPK Fertiliser", "44-Plus Garden", "Eco-Spray"],
    },
    farmingSection: {
      body: "South-East Queensland and the Lockyer Valley — Brisbane's farming hinterland — is one of Australia's most intensively farmed regions, producing vegetables, cut flowers, small crops and intensive horticulture year-round. The demand on these soils is extreme, and biological farming inputs are increasingly the approach adopted by the region's most progressive growers. CalMag 51 addresses the calcium and magnesium balance critical in Brisbane's heavy clay soils. SeedPrimer improves germination rates and seedling establishment through Brisbane's intense summer heat. And NPK LeafSpray Plus combined with NutriSpread gives foliar nutrition that performs even through Brisbane's frequent summer downpours.",
      products: ["CalMag 51", "SeedPrimer", "NPK LeafSpray Plus", "NutriSpread", "44-Plus Farming", "Booster"],
    },
    organicSection: {
      body: "Brisbane's organic and biodynamic farming community is one of the most active in Australia. From the Scenic Rim certified organic producers to Brisbane's inner-city community gardens, demand for genuinely biological, residue-free fertiliser is high. BioCare's range delivers everything organic Brisbane growers need: no synthetic nitrates, no harmful residues, no withholding periods, and real effectiveness in Brisbane's heavy, biological clay soils. Humic Carbon Liquid is particularly valued by Brisbane organic growers for building soil carbon in the intensively farmed clay soils of the Lockyer Valley and Scenic Rim.",
      products: ["Humic Carbon Liquid", "Trace Elements Volcanic", "Eco-Spray", "Booster", "Glacial Milk Silica Ultra"],
    },
    soilSection: {
      body: "Brisbane's heavy clay soils are mineral-rich but biologically suppressed — years of conventional tillage and synthetic fertiliser have degraded the soil food web that makes clay soils so productive when healthy. Instant Clay Breaker Powder and Liquid work on the physical structure first, opening drainage channels and reducing the waterlogging that suffocates roots in Brisbane's summer downpours. Humic Carbon Liquid rebuilds the biological activity and organic matter that holds the improved structure long-term. The results in Brisbane clay gardens are dramatic: better drainage, less waterlogging, stronger root systems and plants that handle Brisbane's summer intensity far better.",
      products: ["Instant Clay Breaker Powder", "Instant Clay Breaker", "Humic Carbon Liquid", "Trace Elements Volcanic", "Penetrator"],
    },
    nutritionSection: {
      body: "Brisbane's year-round growing season means plant nutrition programs run continuously — there's no winter dormancy period to allow soils to recover as in southern states. Monthly applications of Premium GP Garden Fertiliser or Liquid NPK keep most Brisbane gardens consistently fed. For Brisbane's prized tropical fruits — mangoes, avocados, lychees, bananas — Bloom-n-Yield at flowering and Booster at fruit fill drives the fruit quality and size that Brisbane's climate is capable of delivering but that conventional fertiliser programs often underdeliver. EasyTrace quarterly prevents the manganese and zinc deficiencies that are common in Brisbane's alkaline clay soils.",
      products: ["Premium GP Garden Fertiliser", "Liquid NPK Fertiliser", "Bloom-n-Yield", "Booster", "EasyTrace", "CalMag 51"],
    },
    faqs: [
      { q: "What fertiliser is best for Brisbane's heavy clay soils?", a: "Start with Instant Clay Breaker Powder to improve drainage and root penetration — Brisbane's cracking clays can be genuinely hostile to roots without this step. Then apply Humic Carbon Liquid monthly to rebuild biological activity and organic matter. For ongoing nutrition, Premium GP Garden Fertiliser applied every 6–8 weeks works well in Brisbane's clay soils because they hold nutrients more effectively than sandy soils elsewhere." },
      { q: "How do I keep my Brisbane lawn looking good through wet season?", a: "Reduce nitrogen inputs through the peak wet season (January to March) to avoid forcing the excessive soft growth that invites fungal disease in Brisbane's humidity. Apply Pro-Strength Lawn Fertiliser at half rate in December, then resume full rate in April as the wet season ends. Keep Eco-Spray on hand for fungal issues — brown patch and dollar spot can appear rapidly in wet season conditions." },
      { q: "My Brisbane mango tree produces well but the fruit is small — why?", a: "Small fruit usually indicates inadequate calcium and potassium during fruit fill. Apply CalMag 51 at flowering to support fruit set and cell development, then Booster monthly from fruit set to harvest to drive sugar accumulation and size. Brisbane's climate is ideal for mangoes — with the right nutrition program, size and quality should improve significantly." },
      { q: "Are BioCare products effective in Brisbane's heat?", a: "Yes — BioCare biological products are formulated for Australian conditions and perform effectively in Brisbane's subtropical climate. Soil-applied products like Humic Carbon Liquid and Clay Breaker work better in Brisbane's warm moist soils than in cooler climates because the biological activity that drives their effectiveness is higher. Apply foliar products in the early morning before the heat of the day to maximise uptake and minimise evaporation." },
    ],
  },
];

export function getLocationData(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

export default locations;
