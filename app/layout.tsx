import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ConditionalFooter from "@/components/ConditionalFooter";
import EllaWidget from "@/components/EllaWidget";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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
    <html lang="en" className={jakarta.className}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <ConditionalFooter />
        <EllaWidget />
      </body>
    </html>
  );
}
