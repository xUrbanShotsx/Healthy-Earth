import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "9342ykth",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
