import type { ExperienceItem, SkillGroup } from "@/types/portfolio";
import sendoLogo from "@/images/sendo.png";
import techxLogo from "@/images/techx.jpeg";
import ugeLogo from "@/images/uge.jpeg";
import vnptLogo from "@/images/vnpt.jpeg";

export const experience: ExperienceItem[] = [
  {
    slug: "techx-vietnam",
    company: "TechX Vietnam",
    role: "Frontend Engineer",
    period: "07/2025 - Present",
    logo: techxLogo,
    highlight:
      "Built dynamic landing page creation features for non-technical users and improved reliability through testing and bug fixing.",
    description:
      "Contributed to Easier, an all-in-one customer acquisition platform that unifies search and social channels while helping teams launch campaigns without deep technical setup.",
    responsibilities: [
      "Built dynamic landing-page creation flows so non-technical users can launch marketing campaigns independently.",
      "Wrote unit tests with Jest and React Testing Library, plus end-to-end tests with Playwright for critical user journeys.",
      "Investigated and fixed production issues to reduce errors and improve feature reliability.",
      "Collaborated with cross-functional teams to deliver scalable and maintainable frontend capabilities.",
    ],
    stack: ["Next.js", "WebSockets", "React Query", "Jest", "Playwright", "Golang"],
  },
  {
    slug: "sendo",
    company: "SENDO",
    role: "Frontend Engineer",
    period: "07/2024 - 07/2025",
    logo: sendoLogo,
    highlight:
      "Developed and maintained Sendo Farm features with microfrontend architecture, and supported backend APIs with Golang + RabbitMQ.",
    description:
      "Worked on Sendo Farm, a modern grocery platform where users order online and pick up from nearby collection points with flexible pickup and payment options.",
    responsibilities: [
      "Developed and maintained buyer-facing Sendo Farm features using React and a microfrontend architecture.",
      "Built internal CMS tools with React and Vite to improve product and content operations.",
      "Supported backend implementation with Golang and RabbitMQ for asynchronous processing.",
      "Partnered with cross-functional teams to keep delivery quality high through CI/CD workflows.",
    ],
    stack: ["React", "Micro-frontend", "Webpack", "Vite", "React Query", "CI/CD"],
  },
  {
    slug: "ugesports",
    company: "UGESPORTS",
    role: "Frontend Developer",
    period: "07/2023 - 07/2024",
    logo: ugeLogo,
    highlight:
      "Built responsive interfaces for an esports platform and integrated APIs with strong data flow using React Query.",
    description:
      "Built product features for an esports competition platform covering tournament creation, participation, engagement, and sponsorship workflows.",
    responsibilities: [
      "Developed and maintained responsive interfaces with Next.js and Ant Design.",
      "Implemented efficient data fetching and caching flows with React Query.",
      "Collaborated closely with backend engineers to integrate APIs and maintain stable data flow.",
    ],
    stack: ["Next.js", "Ant Design", "Tailwind CSS", "Zustand", "React Query"],
  },
  {
    slug: "vnpt-telecom",
    company: "VNPT Telecom",
    role: "Frontend Developer",
    period: "06/2022 - 05/2023",
    logo: vnptLogo,
    highlight:
      "Implemented user interfaces for information systems and collaborated with backend teams to integrate APIs and solve frontend issues.",
    description:
      "Delivered frontend features for internal and customer-facing information systems with focus on responsiveness and maintainability.",
    responsibilities: [
      "Implemented UI features across multiple information systems using React.",
      "Worked with backend developers to integrate APIs and resolve frontend defects quickly.",
      "Improved user experience consistency across modules with reusable UI patterns.",
    ],
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
    items: ["Figma", "Agile", "OOP", "Claude Code", "Cursor", "Github Copilot"],
  },
];
