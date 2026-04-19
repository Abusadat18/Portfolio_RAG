"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail, UserCircle, ArrowDown } from "lucide-react";
import GlitchText from "@/components/ui/GlitchText";
import Typewriter from "@/components/ui/Typewriter";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { portfolio } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: portfolio.personal.github, icon: SiGithub },
  { label: "LinkedIn", href: portfolio.personal.linkedin, icon: UserCircle },
  { label: "Email", href: `mailto:${portfolio.personal.email}`, icon: Mail },
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
    <section className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-20 relative overflow-hidden">
      <GradientOrbs variant="hero" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.09] pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
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
          className="flex items-center justify-center gap-4 mb-10 sm:mb-12"
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
              <s.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={0.9}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/chat">
            <motion.span
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(51,255,102,0.25), 0 0 60px rgba(51,255,102,0.1)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                         bg-[#33ff66]/10 border border-[#33ff66]/30
                         text-[#33ff66] font-semibold 
                         hover:bg-[#33ff66]/15 hover:border-[#33ff66]/50
                         transition-colors text-base"
            >
              <span className="font-code">{">"}_</span>
              Ask My AI
            </motion.span>
          </Link>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                       border border-[var(--border)] text-[var(--text-secondary)]
                       hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]
                       transition-colors text-base font-semibold"
          >
            <ArrowDown className="w-4 h-4" />
            View My Work
          </motion.a>
        </motion.div>
      </div>

    </section>
  );
}
