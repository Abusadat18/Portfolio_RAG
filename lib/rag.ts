import { portfolio } from "@/data/portfolio";

export interface Chunk {
  text: string;
  metadata: { section: string };
  embedding: number[];
}

export interface VectorsFile {
  chunks: Chunk[];
}

export function chunkPortfolio(): Array<{ text: string; metadata: { section: string } }> {
  const chunks: Array<{ text: string; metadata: { section: string } }> = [];

  // Personal + About
  chunks.push({
    text: `My name is ${portfolio.personal.name}. ${portfolio.personal.tagline}. I'm based in ${portfolio.personal.location}. You can reach me at ${portfolio.personal.email}. GitHub: ${portfolio.personal.github}. LinkedIn: ${portfolio.personal.linkedin}.`,
    metadata: { section: "personal" },
  });

  chunks.push({
    text: portfolio.about,
    metadata: { section: "about" },
  });

  // Skills
  const { skills } = portfolio;
  chunks.push({
    text: `My technical skills include:
Languages: ${skills.languages.join(", ")}.
Frameworks & Libraries: ${skills.frameworks.join(", ")}.
AI & Machine Learning: ${skills.ai_ml.join(", ")}.
Databases: ${skills.databases.join(", ")}.
Tools & Platforms: ${skills.tools.join(", ")}.`,
    metadata: { section: "skills" },
  });

  // Experience — one chunk per job
  portfolio.experience.forEach((job) => {
    chunks.push({
      text: `Work Experience — ${job.role} at ${job.company} (${job.duration}, ${job.location}):
${job.bullets.map((b) => `- ${b}`).join("\n")}`,
      metadata: { section: "experience" },
    });
  });

  // Projects — one chunk per project
  portfolio.projects.forEach((project) => {
    chunks.push({
      text: `Project: ${project.name}
Description: ${project.description}
Technologies used: ${project.tech.join(", ")}.
Link: ${project.link}`,
      metadata: { section: "projects" },
    });
  });

  // Education
  const { education } = portfolio;
  chunks.push({
    text: `Education: ${education.degree} from ${education.university} (${education.year}). GPA: ${education.gpa}.
Highlights: ${education.highlights.join(" | ")}`,
    metadata: { section: "education" },
  });

  // Achievements
  chunks.push({
    text: `Achievements & Recognition:\n${portfolio.achievements.map((a) => `- ${a}`).join("\n")}`,
    metadata: { section: "achievements" },
  });

  // Career goals
  chunks.push({
    text: `I am currently ${portfolio.openToWork ? "open to new opportunities" : "not actively looking"}. Preferred roles: ${portfolio.preferredRoles.join(", ")}.`,
    metadata: { section: "career" },
  });

  return chunks;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function retrieveContext(
  queryEmbedding: number[],
  chunks: Chunk[],
  topK = 4
): string {
  const scored = chunks.map((chunk) => ({
    text: chunk.text,
    score: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored
    .slice(0, topK)
    .map((c) => c.text)
    .join("\n\n---\n\n");
}
