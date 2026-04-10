"use client";

import { motion } from "framer-motion";

export interface Message {
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
}

export default function MessageBubble({ role, content, streaming }: Message) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      {!isUser && (
        <div className="mr-3 mt-1 w-7 h-7 rounded-lg bg-[#33ff66]/10 border border-[#33ff66]/20 flex items-center justify-center shrink-0">
          <span className="text-[#33ff66] font-code text-xs font-bold">AI</span>
        </div>
      )}
      <div
        className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl text-[15px] sm:text-base leading-relaxed ${
          isUser
            ? "bg-[#33ff66]/10 border border-[#33ff66]/20 text-[var(--text-primary)] rounded-br-sm"
            : "bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] rounded-bl-sm"
        }`}
      >
        {content}
        {streaming && (
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-[#33ff66] ml-1 rounded-sm align-middle"
          />
        )}
      </div>
    </motion.div>
  );
}
