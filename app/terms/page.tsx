import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Healthy Earth",
  description: "Terms of Service for Healthy-Earth.com",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By using the Service, you represent that you are at least 18 years old or have the legal capacity to enter into these Terms. You agree to comply with all applicable laws and regulations. We may update these Terms from time to time, and your continued use of the Service constitutes acceptance of any changes. We will notify you of material changes via the Site.`,
  },
  {
    title: "2. Description of Service",
    body: `Healthy-Earth.com provides AI-generated information, tools, and resources related to environmental health, agriculture, sustainability, and related topics. The Service may include articles, recommendations, simulations, or interactive features powered by artificial intelligence. All content is intended for informational and educational purposes only.`,
  },
  {
    title: "3. User Accounts and Responsibilities",
    body: `To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree not to share your account with others or use the Service for any unlawful or prohibited purpose. We reserve the right to suspend or terminate accounts for violations of these Terms.`,
  },
  {
    title: "4. Intellectual Property",
    body: `All content on the Site, including text, graphics, logos, AI-generated outputs, and software, is owned by us or our licensors and protected by intellectual property laws. You may use the Service for personal, non-commercial purposes only. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.`,
  },
  {
    title: "5. User-Generated Content",
    body: `If the Service allows you to submit content (e.g., comments, data, or feedback), you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and display such content in connection with the Service. You represent that your content does not infringe third-party rights and complies with these Terms. We may remove or edit user content at our discretion but are not obligated to monitor it.`,
  },
  {
    title: "6. Disclaimer of Warranties",
    body: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES.\n\nAll information provided on the Site, including AI-generated advice, recommendations, or data, is general in nature and for informational purposes only. It is not intended to replace professional advice. You must seek proper advice from a qualified expert, environmental professional, or other relevant professional before implementing any suggestions from the Service. The viewer (you) must decide for themselves if the information fits their specific purpose, circumstances, or needs. We make no representations about the accuracy, completeness, or suitability of any content for your particular situation.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS, IF ANY.\n\nYou agree to indemnify and hold us harmless from any claims, losses, or damages arising from your use of the Service or violation of these Terms.`,
  },
  {
    title: "8. Privacy",
    body: `Your use of the Service is also governed by our Privacy Policy, which is incorporated herein by reference.`,
  },
  {
    title: "9. Termination",
    body: `We may terminate or suspend your access to the Service at any time, with or without cause or notice. Upon termination, your right to use the Service ceases immediately.`,
  },
  {
    title: "10. Governing Law and Dispute Resolution",
    body: `These Terms are governed by the laws of Australia, without regard to conflict of laws principles. Any disputes arising from these Terms or the Service shall be resolved exclusively in the courts located in New South Wales, Australia.`,
  },
  {
    title: "11. Miscellaneous",
    body: `If any provision of these Terms is held invalid, the remainder shall continue in full force. Our failure to enforce any right does not constitute a waiver. These Terms constitute the entire agreement between you and us regarding the Service.\n\nIf you have any questions about these Terms, please contact us at hesales101@gmail.com.\n\nBy using healthy-earth.com, you acknowledge that you have read, understood, and agree to these Terms of Service.`,
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#f5f0e8" }} className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#2d7a3a" }}>
            Legal
          </p>
          <h1 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: March 8, 2026 · Healthy-Earth.com
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Table of contents */}
            <aside className="lg:w-56 flex-shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.title}
                      href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                      className="block text-sm text-gray-500 hover:text-green-700 py-1 leading-snug transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div className="flex-1 min-w-0 space-y-10">
              <p className="text-gray-600 leading-relaxed text-sm border-l-4 pl-4 py-1" style={{ borderColor: "#2d7a3a", background: "#f0faf2" }}>
                Welcome to Healthy-Earth.com (the &quot;Site&quot;), an AI-powered platform operated by HealthyEarth (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Site, including any content, features, or services offered through it (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
              </p>

              {sections.map((s) => (
                <div key={s.title} id={s.title.replace(/\s+/g, "-").toLowerCase()}>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h2>
                  <div className="space-y-3">
                    {s.body.split("\n\n").map((para, i) => (
                      <p key={i} className="text-sm text-gray-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  © 2026 Healthy Earth. All rights reserved.{" "}
                  <Link href="/privacy" className="underline hover:text-gray-600 transition-colors">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
