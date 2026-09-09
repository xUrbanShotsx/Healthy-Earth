import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Healthy Earth",
  description: "Privacy Policy for Healthy Earth by BioCare Fertilisers — how we collect, use and protect your personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `This Privacy Policy applies to Healthy Earth by BioCare Fertilisers ("we", "us" or "our"), an Australian-owned and operated business based in New South Wales, Australia. We operate the website at healthy-earth.com.au and healthy-earth.com (the "Site") and provide plant nutrition advice and product information, including through our AI plant advisor Ella.\n\nWe are committed to protecting your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).\n\nIf you have any questions about this policy, please contact us at hesales101@gmail.com.`,
  },
  {
    title: "2. What Information We Collect",
    body: `We collect only the information necessary to provide our services. This may include:\n\nInformation you give us directly — when you contact us by email or submit a form, we collect your name, email address and any other details you choose to provide.\n\nConversation data — when you chat with Ella, your messages are processed to generate a response. We do not permanently store your chat history after your session ends.\n\nUsage data — when you visit the Site, we may automatically collect technical information such as your IP address, browser type, pages visited and time spent on the Site. This is used to improve the Site and is not linked to your identity.\n\nWe do not collect sensitive information such as health records, financial details or government identifiers unless you voluntarily provide them as part of a plant health question.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use your information only for the purposes for which it was collected:\n\n— To respond to your enquiries and provide customer support.\n— To operate and improve the Site and Ella's responses.\n— To send product or gardening information you have requested (we will not send marketing emails without your consent).\n— To comply with legal obligations.\n\nWe will not use your personal information for any purpose that is unrelated to why you provided it, without your consent.`,
  },
  {
    title: "4. AI Conversations with Ella",
    body: `Ella is our AI plant advisor, powered by third-party AI technology. When you chat with Ella, your messages are sent to a third-party AI provider to generate a response. We do not retain those conversations after your session ends.\n\nElla's responses are general in nature and intended for informational purposes only. They are not a substitute for professional plant or soil advice. Always read product labels and follow the directions before use.\n\nWe do not use your Ella conversations to identify you personally or to build a profile about you.`,
  },
  {
    title: "5. Sharing Your Information",
    body: `We do not sell, rent or trade your personal information to third parties.\n\nWe may share your information with trusted third-party service providers who help us operate the Site — for example, hosting providers, analytics services and AI technology providers. These providers are required to handle your information securely and only for the purposes we specify.\n\nWe may disclose your information if required to do so by law, or to protect the rights, property or safety of Healthy Earth, our users or others.\n\nIf we share information with overseas providers (such as cloud or AI services), we take reasonable steps to ensure those providers handle your information in accordance with the Australian Privacy Principles.`,
  },
  {
    title: "6. Cookies and Analytics",
    body: `The Site may use cookies and similar technologies to improve your experience, remember your preferences and understand how visitors use the Site. Cookies are small files stored on your device.\n\nYou can control cookies through your browser settings. Disabling cookies may affect some features of the Site.\n\nWe may use analytics tools (such as website traffic analysis services) that collect anonymised usage data. This data cannot be used to identify you personally.`,
  },
  {
    title: "7. How We Protect Your Information",
    body: `We take reasonable technical and organisational steps to protect your personal information from misuse, loss, unauthorised access, modification or disclosure. The Site uses HTTPS encryption to protect data transmitted between your browser and our servers.\n\nNo method of transmission over the internet is completely secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    title: "8. Accessing and Correcting Your Information",
    body: `Under the Australian Privacy Act, you have the right to request access to the personal information we hold about you, and to request that we correct any inaccurate, incomplete or outdated information.\n\nTo make a request, please contact us at hesales101@gmail.com. We will respond within a reasonable timeframe (generally 30 days). In some circumstances, we may need to verify your identity before granting access.\n\nIf we are unable to provide access or make a correction, we will explain why in writing.`,
  },
  {
    title: "9. Data Retention",
    body: `We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law.\n\nEnquiry and contact data is retained for a reasonable period to allow us to respond to follow-up questions. Anonymised usage data may be retained for longer periods to help us improve the Site.\n\nWhen information is no longer needed, we take reasonable steps to destroy or de-identify it.`,
  },
  {
    title: "10. Links to Other Websites",
    body: `The Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to read the privacy policies of any website you visit.`,
  },
  {
    title: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal or operational reasons. When we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.\n\nYour continued use of the Site after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "12. Complaints",
    body: `If you believe we have not handled your personal information in accordance with the Australian Privacy Principles, you may contact us at hesales101@gmail.com. We will investigate your complaint and respond within 30 days.\n\nIf you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.`,
  },
  {
    title: "13. Contact Us",
    body: `If you have any questions, concerns or requests relating to this Privacy Policy or how we handle your personal information, please contact us:\n\nHealthy Earth by BioCare Fertilisers\nNew South Wales, Australia\nEmail: hesales101@gmail.com\nWebsite: healthy-earth.com.au`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#f5f0e8" }} className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#2d7a3a" }}>
            Legal
          </p>
          <h1 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: June 23, 2026 · Healthy Earth by BioCare Fertilisers
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
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href="/terms" className="text-xs text-gray-400 hover:text-green-700 transition-colors">
                    → Terms of Service
                  </Link>
                </div>
              </div>
            </aside>

            {/* Sections */}
            <div className="flex-1 min-w-0 space-y-10">
              <p className="text-gray-600 leading-relaxed text-sm border-l-4 pl-4 py-2" style={{ borderColor: "#2d7a3a", background: "#f0faf2" }}>
                We respect your privacy. This policy explains what personal information we collect, how we use it, and your rights under Australian privacy law. We collect only what we need, we do not sell your data, and we keep things simple.
              </p>

              {sections.map((s) => (
                <div key={s.title} id={s.title.replace(/\s+/g, "-").toLowerCase()}>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h2>
                  {s.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">
                      {para}
                    </p>
                  ))}
                </div>
              ))}

              <div className="pt-6 border-t border-gray-100 text-xs text-gray-400">
                This policy was last updated on 23 June 2026. For earlier versions, please contact us.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
