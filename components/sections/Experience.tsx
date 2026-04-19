"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { portfolio } from "@/data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 22 },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <GradientOrbs variant="section" />

      <div className="relative z-10">
        <SectionHeader tag="Career" title="Work Experience" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] sm:left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-[#33ff66]/40 via-[#33ff66]/15 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {portfolio.experience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={item}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] sm:left-[17px] top-8 w-[13px] h-[13px] rounded-full border-2 border-[#33ff66] bg-[var(--bg)] z-10 hidden sm:block">
                  <div className="w-full h-full rounded-full bg-[#33ff66]/30 animate-pulse" />
                </div>

                <motion.div
                  whileHover={{
                    borderColor: "rgba(51,255,102,0.35)",
                    boxShadow: "0 0 40px rgba(51,255,102,0.08)",
                  }}
                  className="glass-card p-6 sm:p-8"
                >
                  {/* Current role badge */}
                  {idx === 0 && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#33ff66]/10 border border-[#33ff66]/20 text-[#33ff66] text-xs font-code mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#33ff66] animate-pulse" />
                      Current
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#33ff66] flex items-center gap-2">
                        <Briefcase className="w-5 h-5 shrink-0" />
                        {exp.role}
                      </h3>
                      <p className="text-[var(--text-primary)] text-lg font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[var(--text-secondary)] text-sm font-code shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border)] bg-[#33ff66]/5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mt-4">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed"
                      >
                        <span className="text-[#33ff66]/60 mt-1.5 shrink-0">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
