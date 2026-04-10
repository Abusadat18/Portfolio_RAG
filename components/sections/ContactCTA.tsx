"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, UserCircle } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { portfolio } from "@/data/portfolio";

export default function ContactCTA() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <GradientOrbs variant="section" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          className="space-y-4"
        >
          <ContactCard icon={Mail} label="Email" value={portfolio.personal.email} href={`mailto:${portfolio.personal.email}`} />
          <ContactCard icon={SiGithub} label="GitHub" value={portfolio.personal.github.replace("https://", "")} href={portfolio.personal.github} external />
          <ContactCard icon={UserCircle} label="LinkedIn" value={portfolio.personal.linkedin.replace("https://", "")} href={portfolio.personal.linkedin} external />
          <ContactCard icon={MapPin} label="Location" value={portfolio.personal.location} href={portfolio.personal.website} external />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href, external }: {
  icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string; external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.02, borderColor: "rgba(51,255,102,0.4)" }}
      whileTap={{ scale: 0.98 }}
      className="glass-card flex items-center gap-4 px-6 py-5 group"
    >
      <div className="w-10 h-10 rounded-xl bg-[#33ff66]/10 border border-[#33ff66]/15 flex items-center justify-center shrink-0 group-hover:bg-[#33ff66]/15 transition-colors">
        <Icon className="w-5 h-5 text-[#33ff66]" />
      </div>
      <div>
        <p className="text-[var(--text-secondary)] text-sm mb-0.5">{label}</p>
        <p className="text-[var(--text-primary)] text-lg font-medium group-hover:text-[#33ff66] transition-colors">
          {value}
        </p>
      </div>
    </motion.a>
  );
}
