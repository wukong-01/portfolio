import { BackgroundEffects } from "@/components/portfolio/background-effects";
import { ChatbotSection } from "@/components/portfolio/chatbot-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { Header } from "@/components/portfolio/header";
import { HeroSection } from "@/components/portfolio/hero-section";
import { IntroSection } from "@/components/portfolio/intro-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { experience, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <BackgroundEffects>
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-24 px-4 pb-24 sm:px-6 md:px-10">
        <HeroSection />
        <IntroSection />
        <ExperienceSection experience={experience} />
        <EducationSection />
        <SkillsSection skillGroups={skillGroups} />
        <ChatbotSection />
        <ContactSection />
      </main>
    </BackgroundEffects>
  );
}
