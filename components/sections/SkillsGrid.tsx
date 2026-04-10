"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientOrbs from "@/components/ui/GradientOrbs";
import {
  SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss,
  SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiFastapi, SiTailwindcss,
  SiLangchain, SiFastify,
  SiPostgresql, SiMongodb, SiRedis,
  SiGit, SiDocker, SiGithubactions, SiVercel,
} from "@icons-pack/react-simple-icons";
import { Database, BrainCircuit, Sparkles } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const SKILLS: Skill[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "LangChain", icon: SiLangchain },
  { name: "OpenAI", icon: BrainCircuit },
  { name: "Gemini", icon: Sparkles },
  { name: "SQL", icon: Database },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "GH Actions", icon: SiGithubactions },
  { name: "Vercel", icon: SiVercel },
  { name: "RAG", icon: SiFastify },
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
    <section className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <GradientOrbs variant="section" />

      <div className="relative z-10">
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
          {SKILLS.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={item}
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(51,255,102,0.4)",
                boxShadow: "0 0 25px rgba(51,255,102,0.12)",
                y: -4,
              }}
              className="glass-card flex flex-col items-center justify-center p-3 sm:p-4 aspect-square cursor-default"
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#33ff66] mb-2" size={32} />
              <span className="text-[var(--text-secondary)] text-[10px] sm:text-xs text-center leading-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
