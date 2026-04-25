import { BackgroundEffects } from "@/components/portfolio/background-effects";
import { ChatbotSection } from "@/components/portfolio/chatbot-section";
import { ContactSection } from "@/components/portfolio/contact-section";
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
      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <HeroSection />
        <IntroSection />
        <ExperienceSection experience={experience} />
        <div className="flex min-h-screen flex-col justify-center py-16">
          <SkillsSection skillGroups={skillGroups} />
        </div>
        <div className="flex min-h-screen flex-col justify-center py-16">
          <ContactSection />
        </div>
      </main>
      <ChatbotSection />
    </BackgroundEffects>
  );
}
