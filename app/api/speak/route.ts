import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return new Response("XAI_API_KEY not configured", { status: 500 });

  const { text } = await req.json();
  if (!text) return new Response("No text provided", { status: 400 });

  const xaiRes = await fetch("https://api.x.ai/v1/audio/speech", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-2-mini-tts",
      input: text,
      voice: "eve",
    }),
  });

  if (!xaiRes.ok) {
    const err = await xaiRes.text();
    return new Response(err, { status: xaiRes.status });
  }

  return new Response(xaiRes.body, {
    headers: { "Content-Type": "audio/mpeg" },
  });
}
