import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ConditionalFooter from "@/components/ConditionalFooter";
import EllaFloatingButton from "@/components/EllaFloatingButton";

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
        <EllaFloatingButton />
      </body>
    </html>
  );
}
