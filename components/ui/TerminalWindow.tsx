"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function TerminalWindow({
  title = "PORTFOLIO.EXE",
  children,
  className = "",
  animate = true,
}: Props) {
  const wrapper = animate
    ? {
        initial: { opacity: 0, y: 30, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  return (
    <motion.div
      {...wrapper}
      className={`glass-card overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--border)]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-[var(--text-secondary)] text-sm tracking-wider font-code">
          {title}
        </span>
      </div>

      <div className="relative">{children}</div>
    </motion.div>
  );
}
