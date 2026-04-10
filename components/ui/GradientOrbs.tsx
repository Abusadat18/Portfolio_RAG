"use client";

import { motion } from "framer-motion";

interface Orb {
  color: string;
  size: string;
  position: string;
  delay?: number;
}

interface Props {
  variant?: "hero" | "section";
}

const heroOrbs: Orb[] = [
  { color: "rgba(16, 185, 80, 0.18)", size: "60vw", position: "top-[-20%] left-[-15%]", delay: 0 },
  { color: "rgba(51, 255, 102, 0.10)", size: "45vw", position: "top-[10%] right-[-10%]", delay: 0.3 },
  { color: "rgba(20, 184, 166, 0.12)", size: "50vw", position: "bottom-[-25%] left-[20%]", delay: 0.6 },
  { color: "rgba(139, 92, 246, 0.06)", size: "35vw", position: "top-[30%] right-[10%]", delay: 0.9 },
];

const sectionOrbs: Orb[] = [
  { color: "rgba(51, 255, 102, 0.06)", size: "40vw", position: "top-[-20%] right-[-10%]", delay: 0 },
  { color: "rgba(20, 184, 166, 0.05)", size: "35vw", position: "bottom-[-15%] left-[-5%]", delay: 0.3 },
];

export default function GradientOrbs({ variant = "hero" }: Props) {
  const orbs = variant === "hero" ? heroOrbs : sectionOrbs;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: orb.delay, ease: "easeOut" }}
          className={`absolute ${orb.position} rounded-full`}
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
      ))}
    </div>
  );
}
