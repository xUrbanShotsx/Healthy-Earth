import type { Metadata } from "next";
import { getFarmingPage } from "@/lib/sanity-queries";
import FarmingClient from "./FarmingClient";

export const metadata: Metadata = {
  title: "Regenerative Farming | Healthy Earth",
  description: "HealthyEarth BioCare farming solutions — regenerative nutrition, drought protection and soil biology programs for Australian farmers.",
};

export default async function FarmingPage() {
  const data = await getFarmingPage();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Farming page content is being prepared. Check back soon.</p>
      </div>
    );
  }

  return <FarmingClient data={data} />;
}
