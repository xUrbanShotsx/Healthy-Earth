import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;

  if (!apiKey) return new Response("ELEVENLABS_API_KEY not configured", { status: 500 });
  if (!voiceId) return new Response("ELEVENLABS_VOICE_ID not configured", { status: 500 });

  const { text } = await req.json();
  if (!text) return new Response("No text provided", { status: 400 });

  const elRes = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
      "Accept": "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.45,
        similarity_boost: 0.80,
        style: 0.35,
        use_speaker_boost: true,
      },
    }),
  });

  if (!elRes.ok) {
    const err = await elRes.text();
    console.error("ElevenLabs TTS error:", elRes.status, err);
    return new Response(JSON.stringify({ status: elRes.status, error: err }), {
      status: elRes.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(elRes.body, {
    headers: { "Content-Type": "audio/mpeg" },
  });
}
