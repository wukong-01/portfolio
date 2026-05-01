import { BackgroundEffects } from "@/components/portfolio/background-effects";
import { ChatbotSection } from "@/components/portfolio/chatbot-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { Header } from "@/components/portfolio/header";
import { HeroSection } from "@/components/portfolio/hero-section";
import { IntroSection } from "@/components/portfolio/intro-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { experience, personalProjects, skillGroups } from "@/data/portfolio";

const PORTRAIT_IMAGES = new Set([
  "/img/sendo/sendo_checkout.jpg",
  "/img/sendo/sendo_products.jpg",
  "/img/sendo/sendo_orders.jpg",
]);

const allGalleryImages = [
  ...experience.flatMap((e) => e.gallery ?? []),
  ...personalProjects.flatMap((p) => p.gallery ?? []),
].map((src) => ({
  src: src as string,
  portrait: typeof src === "string" && PORTRAIT_IMAGES.has(src),
}));

export default function Home() {
  return (
    <BackgroundEffects>
      <Header />
      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <HeroSection />
        <IntroSection />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={personalProjects} />
        <div className="flex min-h-screen flex-col justify-center py-12 sm:py-16">
          <ContactSection skillGroups={skillGroups} images={allGalleryImages} />
        </div>
      </main>
      <footer className="relative z-10 pb-8 pt-4 text-center text-sm text-slate-500">
        &copy; Binh, 2026. Built with <span aria-hidden="true">♥</span>
        <span className="sr-only">love</span> &amp; Next.js
      </footer>
      <ChatbotSection />
    </BackgroundEffects>
  );
}
