"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { SiPrisma } from "@icons-pack/react-simple-icons";
import { BrainCircuit, Sparkles, Database, MessageSquareCode, Layers, Phone, Plug } from "lucide-react";


interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }> | string;
}

const SKILLS: Skill[] = [
  // Languages
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "C++", icon: "/icons/cplusplus.svg" },
  // Frameworks / Libraries
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "NestJS", icon: "/icons/nestjs.svg" },
  { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
  { name: "Prisma", icon: SiPrisma },
  // AI / ML
  { name: "Agentic AI", icon: BrainCircuit },
  { name: "RAG", icon: Sparkles },
  { name: "Vector DBs", icon: Database },
  { name: "Prompt Eng.", icon: MessageSquareCode },
  { name: "MCP", icon: Plug },
  // Developer Tools
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "Redis", icon: "/icons/redis.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Photoshop", icon: "/icons/photoshop.svg" },
  // Databases
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
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
    <section id="skills" className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
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
              {typeof Icon === "string" ? (
                <div
                  className="w-6 h-6 sm:w-8 sm:h-8 mb-2"
                  style={{
                    backgroundColor: "#33ff66",
                    maskImage: `url(${Icon})`,
                    WebkitMaskImage: `url(${Icon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              ) : (
                <Icon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#33ff66] mb-2"
                  size={32}
                />
              )}
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
