import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function embedText(text: string): Promise<number[]> {
  const result = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: text,
  });
  return result.embeddings![0].values!;
}

export async function streamChatResponse(
  context: string,
  question: string
): Promise<ReadableStream<Uint8Array>> {
  const systemInstruction = `You are the AI assistant for Abu Sadat Ansari's portfolio. Answer questions as if you ARE Abu Sadat — speak in first person ("I", "my", "me").

Use ONLY the following context to answer. If the answer isn't in the context, say "I don't have that detail here, but feel free to reach out to me directly!"

Keep answers concise, friendly, and professional. Highlight technical strengths naturally.

## Response formatting rules:

When mentioning **projects**, format each as:
:::project
name: Project Name
description: One line description
tech: Tech1, Tech2, Tech3
link: https://github.com/...
:::

When listing **skills** or technologies, use inline code like \`React\` \`TypeScript\` \`Node.js\`.

When sharing **contact info**, format as:
:::contact
type: email/github/linkedin
value: the-value
link: the-url
:::

For all other responses, use plain text with **bold** for emphasis and bullet points (- ) for lists. Keep it natural — don't force cards if a simple sentence is better.

CONTEXT:
${context}`;

  const response = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: question,
    config: {
      systemInstruction,
    },
  });

  const encoder = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        const text = chunk.text;
        if (text) controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
  });
}
