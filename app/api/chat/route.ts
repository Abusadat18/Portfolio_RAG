import { NextRequest } from "next/server";
import { embedText, streamChatResponse } from "@/lib/gemini";
import { retrieveContext, type VectorsFile } from "@/lib/rag";
import { readFileSync } from "fs";
import { join } from "path";

let cachedChunks: VectorsFile["chunks"] | null = null;

function loadChunks(): VectorsFile["chunks"] {
  if (cachedChunks) return cachedChunks;
  try {
    const raw = readFileSync(join(process.cwd(), "data/vectors.json"), "utf-8");
    const data = JSON.parse(raw) as VectorsFile;
    cachedChunks = data.chunks;
    return cachedChunks;
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Missing message" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const chunks = loadChunks();

    if (chunks.length === 0) {
      // No embeddings generated yet — fall back to direct LLM call without RAG
      const { streamChatResponse: streamDirect } = await import("@/lib/gemini");
      const stream = await streamDirect(
        "No portfolio data is loaded yet. Respond politely and say the portfolio data is still being set up. Mention that the visitor should check back soon.",
        message
      );
      return new Response(stream, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    const queryEmbedding = await embedText(message);
    const context = retrieveContext(queryEmbedding, chunks);
    const stream = await streamChatResponse(context, message);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    console.error("[chat/route] Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
