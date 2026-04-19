import type { Metadata } from "next";
import ChatWindow from "@/components/chat/ChatWindow";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientOrbs from "@/components/ui/GradientOrbs";

export const metadata: Metadata = {
  title: "Chat with AI | Abu Sadat Ansari",
  description:
    "Ask my AI assistant anything about my skills, projects, and experience.",
};

export default function ChatPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 sm:py-28">
      <GradientOrbs variant="hero" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <SectionHeader
          tag="Curious about me?"
          title="Go ahead, ask my AI anything"
          description="It knows my skills, projects, and experience inside out — powered by RAG so every answer comes straight from my portfolio."
        />
        <ChatWindow messagesClassName="h-[35vh] sm:h-[55vh]" />
      </div>
    </main>
  );
}
