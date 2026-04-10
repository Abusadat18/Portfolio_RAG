"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function ContactCTA() {
  return (
    <section className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Bold text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Feel free to
            <br />
            <span className="text-[#33ff66]">reach out</span>,
            <br />
            I&apos;d love to
            <br />
            connect
            <span className="text-[#33ff66]">.</span>
          </h2>
        </motion.div>

        {/* Right — Contact cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          className="space-y-4"
        >
          <ContactCard label="Email" value={portfolio.personal.email} href={`mailto:${portfolio.personal.email}`} />
          <ContactCard label="GitHub" value={portfolio.personal.github.replace("https://", "")} href={portfolio.personal.github} external />
          <ContactCard label="LinkedIn" value={portfolio.personal.linkedin.replace("https://", "")} href={portfolio.personal.linkedin} external />
          <ContactCard label="Location" value={portfolio.personal.location} href={portfolio.personal.website} external />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href, external }: { label: string; value: string; href: string; external?: boolean }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.02, borderColor: "rgba(51,255,102,0.4)" }}
      whileTap={{ scale: 0.98 }}
      className="glass-card block px-6 py-5 group"
    >
      <p className="text-[var(--text-secondary)] text-sm mb-1">{label}</p>
      <p className="text-[var(--text-primary)] text-lg font-medium group-hover:text-[#33ff66] transition-colors">
        {value}
      </p>
    </motion.a>
  );
}
