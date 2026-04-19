"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { portfolio } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 22 },
  },
};

export default function Education() {
  const edu = portfolio.education;

  return (
    <section
      id="education"
      className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <GradientOrbs variant="section" />

      <div className="relative z-10">
        <SectionHeader tag="Education" title="Academic Background" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="glass-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#33ff66] flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 shrink-0" />
                  {edu.degree}
                </h3>
                <p className="text-[var(--text-primary)] text-lg font-medium mt-1.5">
                  {edu.university}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[#33ff66]/5 text-[var(--text-secondary)] text-sm font-code">
                  <BookOpen className="w-3.5 h-3.5" />
                  {edu.year}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#33ff66]/20 bg-[#33ff66]/10 text-[#33ff66] text-sm font-code font-medium">
                  <Award className="w-3.5 h-3.5" />
                  GPA: {edu.gpa}
                </span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {edu.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed"
                >
                  <span className="text-[#33ff66]/60 mt-1.5 shrink-0">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Achievements */}
        {portfolio.achievements.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#33ff66]" />
              Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolio.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{
                    borderColor: "rgba(51,255,102,0.3)",
                  }}
                  className="glass-card px-5 py-4 text-sm text-[var(--text-secondary)] leading-relaxed"
                >
                  <span className="text-[#33ff66] mr-2">&#9670;</span>
                  {achievement}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
