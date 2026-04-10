import { writeFileSync } from "fs";
import { resolve } from "path";
import { config } from "dotenv";

// Load .env.local
config({ path: resolve(process.cwd(), ".env.local") });

import { GoogleGenAI } from "@google/genai";
import { chunkPortfolio } from "../lib/rag";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

async function embedText(text: string): Promise<number[]> {
  const result = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: text,
  });
  return result.embeddings![0].values!;
}

async function main() {
  console.log("Generating embeddings for portfolio chunks...\n");
  const rawChunks = chunkPortfolio();
  const chunks = [];

  for (let i = 0; i < rawChunks.length; i++) {
    const chunk = rawChunks[i];
    console.log(`[${i + 1}/${rawChunks.length}] Embedding: ${chunk.metadata.section}`);
    const embedding = await embedText(chunk.text);
    chunks.push({ ...chunk, embedding });
    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 200));
  }

  const outputPath = resolve(process.cwd(), "data/vectors.json");
  writeFileSync(outputPath, JSON.stringify({ chunks }, null, 2));
  console.log(`\nDone! Wrote ${chunks.length} chunks to data/vectors.json`);
}

main().catch(console.error);
