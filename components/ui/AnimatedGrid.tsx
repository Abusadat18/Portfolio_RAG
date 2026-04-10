"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  const cols = 7;
  const rows = 5;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gridFadeH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(51,255,102,0)" />
            <stop offset="20%" stopColor="rgba(51,255,102,0.08)" />
            <stop offset="80%" stopColor="rgba(51,255,102,0.08)" />
            <stop offset="100%" stopColor="rgba(51,255,102,0)" />
          </linearGradient>
          <linearGradient id="gridFadeV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(51,255,102,0)" />
            <stop offset="20%" stopColor="rgba(51,255,102,0.08)" />
            <stop offset="80%" stopColor="rgba(51,255,102,0.08)" />
            <stop offset="100%" stopColor="rgba(51,255,102,0)" />
          </linearGradient>
        </defs>

        {/* Horizontal lines */}
        {Array.from({ length: rows + 1 }).map((_, i) => {
          const y = `${(i / rows) * 100}%`;
          return (
            <motion.line
              key={`h-${i}`}
              x1="0%"
              y1={y}
              x2="100%"
              y2={y}
              stroke="url(#gridFadeH)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i, duration: 1 }}
            />
          );
        })}

        {/* Vertical lines */}
        {Array.from({ length: cols + 1 }).map((_, i) => {
          const x = `${(i / cols) * 100}%`;
          return (
            <motion.line
              key={`v-${i}`}
              x1={x}
              y1="0%"
              x2={x}
              y2="100%"
              stroke="url(#gridFadeV)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i, duration: 1 }}
            />
          );
        })}
      </svg>

      {/* Intersection dots */}
      {Array.from({ length: rows + 1 }).map((_, row) =>
        Array.from({ length: cols + 1 }).map((_, col) => {
          const isEdge = row === 0 || row === rows || col === 0 || col === cols;
          if (isEdge) return null;

          return (
            <motion.div
              key={`dot-${row}-${col}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#33ff66]"
              style={{
                left: `${(col / cols) * 100}%`,
                top: `${(row / rows) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{
                delay: 0.5 + (row + col) * 0.08,
                duration: 0.5,
                type: "spring" as const,
                stiffness: 300,
              }}
            />
          );
        })
      )}

      {/* Corner accents — X marks like the Dribbble design */}
      <CornerMark position="top-left" />
      <CornerMark position="top-right" />
    </div>
  );
}

function CornerMark({ position }: { position: "top-left" | "top-right" }) {
  const isLeft = position === "top-left";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className={`absolute top-[20%] ${isLeft ? "left-[8%]" : "right-[8%]"} hidden lg:block`}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="5" x2="35" y2="35" stroke="#33ff66" strokeWidth="2" />
        <line x1="35" y1="5" x2="5" y2="35" stroke="#33ff66" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}
