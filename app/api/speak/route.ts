import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return new Response("XAI_API_KEY not configured", { status: 500 });

  const { text } = await req.json();
  if (!text) return new Response("No text provided", { status: 400 });

  const xaiRes = await fetch("https://api.x.ai/v1/tts", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      voice_id: "liora",
      language: "en-AU",
    }),
  });

  if (!xaiRes.ok) {
    const err = await xaiRes.text();
    console.error("xAI TTS error:", xaiRes.status, err);
    return new Response(JSON.stringify({ status: xaiRes.status, error: err }), {
      status: xaiRes.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(xaiRes.body, {
    headers: { "Content-Type": "audio/mpeg" },
  });
}
