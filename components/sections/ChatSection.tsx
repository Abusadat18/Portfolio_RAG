"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatSection() {
  return (
    <section id="chat" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeader
        tag="Curious about me?"
        title="Go ahead, ask my AI anything"
        description="It knows my skills, projects, and experience inside out — powered by RAG so every answer comes straight from my portfolio."
      />
      <ChatWindow />
    </section>
  );
}
