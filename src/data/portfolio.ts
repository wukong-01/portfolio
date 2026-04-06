import type { ExperienceItem, SkillGroup } from "@/types/portfolio";
import sendoLogo from "@/images/sendo.png";
import techxLogo from "@/images/techx.jpeg";
import ugeLogo from "@/images/uge.jpeg";
import vnptLogo from "@/images/vnpt.jpeg";

export const experience: ExperienceItem[] = [
  {
    company: "TechX Vietnam",
    role: "Frontend Engineer",
    period: "07/2025 - Present",
    logo: techxLogo,
    highlight:
      "Built dynamic landing page creation features for non-technical users and improved reliability through testing and bug fixing.",
    stack: ["Next.js", "WebSockets", "React Query", "Jest", "Playwright", "Golang"],
  },
  {
    company: "SENDO",
    role: "Frontend Engineer",
    period: "07/2024 - 07/2025",
    logo: sendoLogo,
    highlight:
      "Developed and maintained Sendo Farm features with microfrontend architecture, and supported backend APIs with Golang + RabbitMQ.",
    stack: ["React", "Micro-frontend", "Webpack", "Vite", "React Query", "CI/CD"],
  },
  {
    company: "UGESPORTS",
    role: "Frontend Developer",
    period: "07/2023 - 07/2024",
    logo: ugeLogo,
    highlight:
      "Built responsive interfaces for an esports platform and integrated APIs with strong data flow using React Query.",
    stack: ["Next.js", "Ant Design", "Tailwind CSS", "Zustand", "React Query"],
  },
  {
    company: "VNPT Telecom",
    role: "Frontend Developer",
    period: "06/2022 - 05/2023",
    logo: vnptLogo,
    highlight:
      "Implemented user interfaces for information systems and collaborated with backend teams to integrate APIs and solve frontend issues.",
    stack: ["React", "Redux", "Bootstrap"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    items: ["JavaScript", "TypeScript", "ReactJS", "NextJS", "HTML", "CSS", "SASS", "Tailwind CSS"],
  },
  {
    title: "UI + State",
    items: ["Shadcn UI", "Radix UI", "Ant Design", "Redux", "Zustand", "React Hook Form", "React Query"],
  },
  {
    title: "Engineering",
    items: ["Golang", "Git", "Webpack", "Babel", "CI/CD Pipeline", "Microfrontend Architecture"],
  },
  {
    title: "Workflow",
    items: ["Figma", "Agile", "OOP", "AI-assisted development with Copilot, Claude Code, and Cursor"],
  },
];
