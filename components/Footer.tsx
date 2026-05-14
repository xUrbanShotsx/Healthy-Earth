import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#1a5227" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/My Logo.png" alt="Healthy BioCare" width={130} height={56} className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Scientifically formulated plant nutrition for Australian gardens, lawns and farms. Backed by decades of agronomic research.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", path: null, isInstagram: true },
                { label: "YouTube", path: null, isYoutube: true },
              ].map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors">
                  {social.path && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.path}/></svg>
                  )}
                  {social.isInstagram && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                    </svg>
                  )}
                  {social.isYoutube && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2.5">
              {[
                ["All Products", "/products"],
                ["Gardening", "/products?category=Gardening"],
                ["Farming", "/products?category=Farming"],
                ["Lawn Fertiliser", "/lawn-fertiliser"],
                ["Find Retailers", "/retailers"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-white/65 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Help & Support</h3>
            <ul className="space-y-2.5">
              {[
                ["Plant Problem Solver", "/chat-assistant"],
                ["Yellow Leaves", "/yellow-leaves"],
                ["Lawn Not Growing", "/lawn-fertiliser"],
                ["Improve Soil Health", "/improve-soil"],
                ["About Us", "/about"],
                ["Terms of Service", "/terms"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-white/65 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-white/65">1800 HEALTHY<br/><span className="text-white/40 text-xs">Mon–Fri, 8am–5pm AEST</span></span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white/65">info@healthy-earth.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/65">BioCare Fertilisers<br/>New South Wales, Australia</span>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-white/10">
              <p className="text-xs text-white/70 font-medium mb-2">Get growing tips</p>
              <form className="flex gap-2">
                <input type="email" placeholder="your@email.com" className="flex-1 text-xs px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40" />
                <button type="submit" className="text-xs px-3 py-2 rounded-lg font-semibold text-white transition-colors" style={{ background: "#2d7a3a" }}>Join</button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2026 Healthy Earth · BioCare Fertilisers Pty Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms</Link>
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
