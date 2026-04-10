import Hero from "@/components/sections/Hero";
import ChatSection from "@/components/sections/ChatSection";
import SkillsGrid from "@/components/sections/SkillsGrid";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <SectionDivider />
      <ChatSection />
      <SectionDivider />
      <SkillsGrid />
      <SectionDivider />
      <ContactCTA />
      <SectionDivider />
      <Footer />
    </main>
  );
}
