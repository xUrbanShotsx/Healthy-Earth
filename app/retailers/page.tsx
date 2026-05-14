import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find a Retailer | Healthy Earth",
  description: "Find a Healthy Earth stockist near you across NSW, ACT, QLD and beyond.",
};

type Retailer = {
  name: string;
  address: string;
  phone?: string;
  state: string;
};

const retailers: Retailer[] = [
  { name: "Shell Harbour City Council Nursery", address: "River Oak PL, Oak Flats NSW 2529", phone: "02 4221 6191", state: "NSW" },
  { name: "Gnulla Dulla Garden Centre", address: "Green St, Ulladulla NSW 2539", phone: "02 4454 4166", state: "NSW" },
  { name: "Rose Tree Garden Centre", address: "102 Queen St, Berry NSW 2535", phone: "0478 429 768", state: "NSW" },
  { name: "Bishops South Nowra Nursery", address: "21 Bellevue St, South Nowra NSW 2541", phone: "02 4423 2359", state: "NSW" },
  { name: "Thrifty-Link Hardware – Cobargo Co-op Society", address: "Princes Hwy, Cobargo NSW 2550", phone: "02 6493 6401", state: "NSW" },
  { name: "Eden at Byron Nursery", address: "140 Bangalow Rd, Byron Bay NSW 2481", phone: "02 6685 6874", state: "NSW" },
  { name: "Dapto Community Farm", address: "29 Darkes Rd, Dapto NSW 2530", phone: "0406 130 xxx", state: "NSW" },
  { name: "Leisure Coast Garden Centre", address: "75 Princes Hwy, Fairy Meadow NSW 2519", phone: "02 4285 1130", state: "NSW" },
  { name: "Nonno's Garden Centre", address: "195 Princes Hwy, Bodalla NSW 2545", phone: "0482 512 516", state: "NSW" },
  { name: "Enfield Produce", address: "56 Coronation Parade, Enfield NSW", phone: "02 9072 9015", state: "NSW" },
  { name: "Backyard Blooms", address: "309 Lawrence Hargrave Drive, Thirroul NSW", phone: "02 4268 0516", state: "NSW" },
  { name: "Oaklands Barn and Garden Centre", address: "3546 Princes Hwy, Greigs Flat NSW 2549", phone: "02 6495 7257", state: "NSW" },
  { name: "The Heritage Nursery", address: "Robert Boden Grv, Yarralumla ACT 2600", phone: "0448 007 207", state: "ACT" },
  { name: "Willow Park Nursery", address: "6 Beltana Rd, Pialligo ACT 2609", phone: "02 6248 9095", state: "ACT" },
  { name: "Powells Stockfeeds", address: "42–44 Colbee Crt, Phillip ACT 2606", phone: "02 6282 4937", state: "ACT" },
  { name: "Horticultural Touch Garden Centre", address: "5 St Aldwyn Rd, North Maclean QLD 4280", phone: "0429 269 771", state: "QLD" },
  { name: "Gardenwize Nursery", address: "605 Seventeen Mile Rocks Rd, Seventeen Mile Rocks QLD 4073", phone: "07 3712 0352", state: "QLD" },
  { name: "Cutting Edge Group Co., Ltd.", address: "120 Silom Road, Kasemkij Building, Bangkok 10500 Thailand", phone: "+66 (0)2 632 9922", state: "International" },
];

const stateOrder = ["NSW", "ACT", "QLD", "International"];

const stateLabels: Record<string, string> = {
  NSW: "New South Wales",
  ACT: "Australian Capital Territory",
  QLD: "Queensland",
  International: "International",
};

const stateCounts = stateOrder.map((s) => ({
  state: s,
  count: retailers.filter((r) => r.state === s).length,
}));

export default function RetailersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12" style={{ background: "#f5f0e8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#2d7a3a" }}>
            Stockists
          </p>
          <h1 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
            Find a retailer<br />near you.
          </h1>
          <p className="text-gray-500 max-w-xl" style={{ fontSize: "1.05rem" }}>
            Healthy Earth products are available at independent nurseries, produce stores and garden centres across Australia.
          </p>

          {/* State pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {stateCounts.map(({ state, count }) => (
              <a
                key={state}
                href={`#${state}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors hover:border-green-600 hover:text-green-700 hover:bg-white"
                style={{ borderColor: "#d4cfc6", color: "#555", background: "white" }}
              >
                {state}
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "#eee", color: "#666" }}>
                  {count}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers by state */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {stateOrder.map((state) => {
            const group = retailers.filter((r) => r.state === state);
            if (group.length === 0) return null;
            return (
              <div key={state} id={state}>
                <div className="flex items-baseline gap-4 mb-8">
                  <h2 className="font-bold text-gray-900" style={{ fontSize: "1.5rem" }}>
                    {stateLabels[state]}
                  </h2>
                  <span className="text-sm text-gray-400">{group.length} location{group.length !== 1 ? "s" : ""}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.map((r) => (
                    <div
                      key={r.name}
                      className="rounded-2xl p-5 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all"
                      style={{ background: "#fafaf8" }}
                    >
                      <p className="font-semibold text-gray-900 mb-1 leading-snug">{r.name}</p>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{r.address}</p>
                      {r.phone && r.phone !== "0406 130 xxx" && (
                        <a
                          href={`tel:${r.phone.replace(/\s/g, "")}`}
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-green-700"
                          style={{ color: "#2d7a3a" }}
                        >
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {r.phone}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Become a stockist CTA */}
      <section className="py-16" style={{ background: "#f5f0e8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ background: "#0d1f10" }}>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#a5d6a7" }}>
                For retailers
              </p>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: "1.75rem", lineHeight: 1.2 }}>
                Interested in stocking Healthy Earth?
              </h2>
              <p className="text-white/60 max-w-md">
                We work with independent nurseries, produce stores and garden centres. Get in touch to discuss wholesale pricing and terms.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="mailto:info@healthy-earth.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#2d7a3a" }}
              >
                Contact us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
