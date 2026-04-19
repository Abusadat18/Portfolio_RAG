"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "@/components/ui/TerminalWindow";
import MessageBubble, { Message } from "./MessageBubble";
import SuggestedQuestions from "./SuggestedQuestions";

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hello! I'm Abu Sadat's AI assistant. Ask me anything about his skills, projects, experience, or how to get in touch. What would you like to know?",
};

export default function ChatWindow({ messagesClassName }: { messagesClassName?: string } = {}) {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  async function send(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "", streaming: true },
    ]);

    setTimeout(scrollToBottom, 50);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() }),
      });

      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: full,
            streaming: true,
          };
          return updated;
        });
        scrollToBottom();
      }

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: full };
        return updated;
      });
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
    >
      <TerminalWindow title="chat.exe" animate={false}>
        {/* Messages */}
        <div className={`${messagesClassName || "h-[380px] sm:h-[420px]"} overflow-y-auto px-4 sm:px-6 pt-5 scrollbar-thin scrollbar-track-transparent`}>
          {messages.map((msg, i) => (
            <MessageBubble key={i} {...msg} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Suggested questions */}
        <div className="border-t border-[var(--border)] pt-3">
          <SuggestedQuestions onSelect={(q) => send(q)} disabled={loading} />
        </div>

        {/* Input */}
        <div className="border-t border-[var(--border)] px-4 sm:px-6 py-4 flex items-center gap-3">
          <span className="text-[#33ff66] font-code text-lg shrink-0 opacity-60">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Type your question..."
            disabled={loading}
            className="flex-1 bg-transparent text-[var(--text-primary)] text-base sm:text-lg outline-none
                       placeholder:text-[var(--text-secondary)]/40 disabled:opacity-50 caret-[#33ff66]"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(51,255,102,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
            className="px-5 py-2.5 rounded-xl bg-[#33ff66]/10 border border-[#33ff66]/25
                       text-[#33ff66] font-semibold text-sm sm:text-base
                       hover:bg-[#33ff66]/15 hover:border-[#33ff66]/40 transition-colors
                       disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {loading ? "..." : "Send"}
          </motion.button>
        </div>
      </TerminalWindow>
    </motion.div>
  );
}
