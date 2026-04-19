import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import SkillsGrid from "@/components/sections/SkillsGrid";
import Projects from "@/components/sections/Projects";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <SkillsGrid />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <ContactCTA />
      <SectionDivider />
      <Footer />
    </main>
  );
}
