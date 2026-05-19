import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import ConditionalFooter from "@/components/ConditionalFooter";

export const metadata: Metadata = {
  title: "Healthy Earth | Expert Plant Nutrition by BioCare Fertilisers",
  description: "Scientifically formulated fertilizers and AI-powered plant nutrition advice. Chat with Ella, our plant nutrition expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <ConditionalFooter />

        {/* Voiceflow — Ella chat widget */}
        <Script id="voiceflow-ella" strategy="afterInteractive">{`
          (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '6a0be98d7c3346bcb2ad1f4a' },
                url: 'https://general-runtime.voiceflow.com',
                voice: {
                  url: "https://runtime-api.voiceflow.com"
                },
                assistant: {
                  name: 'Ella',
                  description: 'Healthy Earth Plant Expert',
                  image: 'https://www.healthyearth.com.au/ella-icon.svg',
                },
                stylesheet: 'https://www.healthyearth.com.au/voiceflow-theme.css',
              });
            }
            v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
            v.type = "text/javascript";
            s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `}</Script>
      </body>
    </html>
  );
}
