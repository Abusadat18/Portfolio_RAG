"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolio } from "@/data/portfolio";

const ALL_SKILLS = [
  ...portfolio.skills.languages,
  ...portfolio.skills.frameworks,
  ...portfolio.skills.ai_ml.slice(0, 4),
  ...portfolio.skills.databases.slice(0, 3),
  ...portfolio.skills.tools.slice(0, 4),
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

export default function SkillsGrid() {
  return (
    <section className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <SectionHeader
        tag="Tech Stack"
        title="Skills & Technologies"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4"
      >
        {ALL_SKILLS.map((skill) => (
          <motion.div
            key={skill}
            variants={item}
            whileHover={{
              scale: 1.1,
              borderColor: "rgba(51,255,102,0.4)",
              boxShadow: "0 0 25px rgba(51,255,102,0.12)",
              y: -4,
            }}
            className="glass-card flex flex-col items-center justify-center p-3 sm:p-4 aspect-square cursor-default"
          >
            <span className="text-[#33ff66] text-2xl sm:text-3xl font-bold font-code leading-none mb-1.5">
              {getSkillIcon(skill)}
            </span>
            <span className="text-[var(--text-secondary)] text-[10px] sm:text-xs text-center leading-tight">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function getSkillIcon(skill: string): string {
  const icons: Record<string, string> = {
    TypeScript: "TS",
    JavaScript: "JS",
    Python: "Py",
    SQL: "DB",
    HTML: "<>",
    CSS: "#",
    "Next.js": "N",
    React: "Re",
    "Node.js": "No",
    Express: "Ex",
    FastAPI: "Fa",
    TailwindCSS: "Tw",
    LangChain: "LC",
    "RAG Pipelines": "RG",
    "OpenAI API": "AI",
    "Gemini API": "Gm",
    PostgreSQL: "Pg",
    MongoDB: "Mg",
    Redis: "Rd",
    Git: "Gt",
    Docker: "Dk",
    "GitHub Actions": "GA",
    Vercel: "Vc",
  };
  return icons[skill] || skill.slice(0, 2).toUpperCase();
}
