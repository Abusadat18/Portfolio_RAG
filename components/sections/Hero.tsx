"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";
import Typewriter from "@/components/ui/Typewriter";
import { portfolio } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: portfolio.personal.github, icon: "GH" },
  { label: "LinkedIn", href: portfolio.personal.linkedin, icon: "IN" },
  { label: "Email", href: `mailto:${portfolio.personal.email}`, icon: "@" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 relative overflow-hidden">
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(51,255,102,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(51,255,102,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#33ff66]/20 bg-[#33ff66]/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#33ff66] animate-pulse" />
          <span className="text-[#33ff66] font-code text-sm">
            {portfolio.openToWork ? "Available for work" : "Not actively looking"}
          </span>
        </motion.div>

        {/* Name */}
        <GlitchText
          text={portfolio.personal.name}
          className="text-[var(--text-primary)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight block mb-4 sm:mb-6"
        />

        {/* Typewriter */}
        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex justify-center mb-8 sm:mb-10"
        >
          <Typewriter />
        </motion.div>

        {/* About excerpt */}
        <motion.p
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-[var(--text-secondary)] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          {portfolio.about.split("\n\n")[0]}
        </motion.p>

        {/* Social icons row */}
        <motion.div
          custom={0.7}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-4 mb-12 sm:mb-14"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.15,
                borderColor: "rgba(51,255,102,0.5)",
                boxShadow: "0 0 20px rgba(51,255,102,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass-card flex items-center justify-center
                         text-[var(--text-secondary)] hover:text-[#33ff66] transition-colors"
              title={s.label}
            >
              <span className="font-code text-sm font-bold">{s.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={0.9}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="#chat"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(51,255,102,0.25), 0 0 60px rgba(51,255,102,0.1)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                       bg-[#33ff66]/10 border border-[#33ff66]/30
                       text-[#33ff66] font-semibold text-lg
                       hover:bg-[#33ff66]/15 hover:border-[#33ff66]/50
                       transition-colors"
          >
            <span className="font-code text-base">{">"}_</span>
            Ask My AI
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[var(--text-secondary)]/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-[#33ff66]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
