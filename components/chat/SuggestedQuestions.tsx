"use client";

import { motion } from "framer-motion";

const QUESTIONS = [
  "What technologies do you work with?",
  "Tell me about your work experience",
  "What projects have you built?",
  "What's your educational background?",
  "How can I reach you?",
  "What makes you a great hire?",
];

interface Props {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

export default function SuggestedQuestions({ onSelect, disabled }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap gap-2 px-4 sm:px-6 pb-3"
    >
      {QUESTIONS.map((q, i) => (
        <motion.button
          key={q}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 * i, duration: 0.3 }}
          whileHover={{
            scale: 1.04,
            borderColor: "rgba(51,255,102,0.4)",
            backgroundColor: "rgba(51,255,102,0.08)",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={() => !disabled && onSelect(q)}
          disabled={disabled}
          className="px-3.5 py-2 text-xs sm:text-sm border border-[var(--border)] text-[var(--text-secondary)]
                     rounded-full transition-colors cursor-pointer
                     hover:text-[#33ff66]
                     disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {q}
        </motion.button>
      ))}
    </motion.div>
  );
}
