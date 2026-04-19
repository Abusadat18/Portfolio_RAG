"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { portfolio } from "@/data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 150, damping: 22 },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <GradientOrbs variant="section" />

      <div className="relative z-10">
        <SectionHeader tag="Projects" title="Things I've Built" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {portfolio.projects.map((project, idx) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(51,255,102,0.4)",
                boxShadow: "0 0 30px rgba(51,255,102,0.1)",
                y: -4,
              }}
              className={`glass-card p-6 sm:p-8 flex flex-col group relative overflow-hidden ${
                idx === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Featured badge for first project */}
              {idx === 0 && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#33ff66]/10 border border-[#33ff66]/20 text-[#33ff66] text-xs font-code">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                </div>
              )}

              {/* Project number */}
              <span className="font-code text-[#33ff66]/20 text-6xl sm:text-7xl font-bold absolute -top-2 -right-1 sm:right-4 select-none pointer-events-none">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="flex items-start gap-3 mb-3 relative">
                <h3 className="text-xl sm:text-2xl font-bold text-[#33ff66]">
                  {project.name}
                </h3>
              </div>

              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-5 flex-1 relative">
                {project.description}
              </p>

              <div className="flex items-end justify-between gap-4 relative">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-code text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-secondary)] bg-[#33ff66]/5 group-hover:border-[#33ff66]/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)] group-hover:text-[#33ff66] transition-colors shrink-0">
                  <span className="text-xs font-code hidden sm:inline">View</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
