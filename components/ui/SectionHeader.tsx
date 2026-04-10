"use client";

import { motion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ tag, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-14"
    >
      <p className="text-[#33ff66] font-code text-sm tracking-[0.2em] uppercase mb-3">
        {tag}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
