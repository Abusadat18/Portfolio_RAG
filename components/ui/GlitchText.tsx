"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: Props) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const schedule = () => {
      const delay = 4000 + Math.random() * 6000;
      return setTimeout(() => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 150);
        schedule();
      }, delay);
    };
    const t = schedule();
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.h1
      className={`relative inline-block select-none ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <span
        className="relative z-10"
        style={{
          textShadow: glitching
            ? "3px 0 #ff00c8, -3px 0 #00f5ff"
            : "0 0 40px rgba(51,255,102,0.2)",
        }}
      >
        {glitching && (
          <>
            <span
              className="absolute inset-0 text-[#ff00c8] opacity-50"
              style={{ clipPath: "polygon(0 20%, 100% 20%, 100% 35%, 0 35%)", transform: "translateX(4px)" }}
              aria-hidden
            >
              {text}
            </span>
            <span
              className="absolute inset-0 text-[#00f5ff] opacity-50"
              style={{ clipPath: "polygon(0 65%, 100% 65%, 100% 80%, 0 80%)", transform: "translateX(-4px)" }}
              aria-hidden
            >
              {text}
            </span>
          </>
        )}
        {text}
      </span>
    </motion.h1>
  );
}
