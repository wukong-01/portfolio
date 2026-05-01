import sendoLogo from "@/images/sendo.png";
import techxLogo from "@/images/techx.jpeg";
import ugeLogo from "@/images/uge.jpeg";
import type { ExperienceItem, PersonalProject, SkillGroup } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    slug: "techx-vietnam",
    company: "TechX Vietnam",
    role: "Frontend Engineer",
    period: "07/2025 - Present",
    logo: techxLogo,
    projectUrl: "https://easier.jp/",
    highlight:
      "Built a WYSIWYG landing-page builder and multi-channel ad campaign features on Easier, an all-in-one ad automation platform for SMEs.",
    description:
      "Worked on Easier (イージア), TechX's all-in-one ad automation platform that lets SMEs manage campaigns across Google, Meta, Yahoo! Japan, LINE, and X from a single interface — without deep technical expertise. TechX is a 3× AWS Partner of the Year in Vietnam and the country's first partner to hold all three AWS competencies: Generative AI, Data & Analytics, and Cloud Operations.",
    gallery: [
      "/img/easier/easier_banner.png",
      "/img/easier/easier_cert.webp",
      "/img/easier/easier_project.webp",
      "/img/easier/easier_info.png",
      "/img/easier/easier.png",
    ],
    responsibilities: [
      "Built dynamic landing page creation features, enabling non-technical users to launch campaigns without developer support.",
      "Wrote unit tests using Jest and React Testing Library, and end-to-end tests using Playwright to ensure reliability of critical features and prevent regressions.",
      "Investigated and fixed critical bugs in the application, reducing system errors and improving reliability.",
      "Collaborated with cross-functional teams to deliver scalable and maintainable frontend solutions.",
    ],
    stack: [
      "Next.js",
      "WebSockets",
      "React Query",
      "Jest",
      "Playwright",
      "Golang",
    ],
  },
  {
    slug: "sendo",
    company: "SENDO",
    role: "Frontend Engineer",
    period: "07/2024 - 07/2025",
    logo: sendoLogo,
    projectUrl: "https://www.sendo.vn/sendofarm",
    highlight:
      "Built buyer-facing features with React microfrontend architecture; developed CMS tools and async backend APIs with Golang + RabbitMQ.",
    description:
      "Worked on Sendo Farm, FPT Group's community group-buying grocery platform — users order fresh produce online and collect from neighborhood pickup points, cutting last-mile delivery costs while ensuring daily freshness.",
    gallery: [
      "/img/sendo/sendo_ldp.png",
      "/img/sendo/sendo_ldp_partner.png",
      "/img/sendo/sendo_checkout.jpg",
      "/img/sendo/sendo_products.jpg",
      "/img/sendo/sendo_orders.jpg",
    ],
    galleryLayout: "landscape-portrait",
    responsibilities: [
      "Developed and maintained buyer-facing features for the Sendo Farm app using React and a microfrontend architecture with Webpack module federation.",
      "Built internal CMS tools with React and Vite to streamline product listing, content, and partner management workflows.",
      "Integrated Google Tag Manager (GTM) on landing pages to enable marketing tracking and campaign analytics.",
      "Supported backend development by implementing APIs in Golang with RabbitMQ for asynchronous, event-driven processing.",
      "Collaborated with cross-functional teams across product, design, and infrastructure to ship features through CI/CD pipelines.",
    ],
    impact: [
      "Platform processed 300+ tons of goods in a single 12/12 campaign day, generating ₫10 billion in revenue.",
      "Scaled to 5,000+ individual neighborhood pickup partners across Hanoi and Ho Chi Minh City.",
      "Awarded the Sao Khue Prize for digital transformation contribution in Vietnamese agriculture.",
    ],
    stack: [
      "React",
      "Micro-frontend",
      "Webpack",
      "Vite",
      "React Query",
      "Golang",
      "RabbitMQ",
      "GTM",
      "CI/CD",
    ],
  },
  {
    slug: "ugesports",
    company: "UGESPORTS",
    role: "Frontend Developer",
    period: "07/2023 - 07/2024",
    logo: ugeLogo,
    highlight:
      "Built tournament and community features for a Web3 esports platform that grew to 44,000 gamers and 1,100 campaigns by 2024.",
    description:
      "Built product features for UGEsports (Underground Esports), a Web3 esports platform that democratizes competition by recording every match result on-chain for trustless fairness. The platform connects organizers, gamers, fans, guilds, and sponsors in a single ecosystem — backed by $200,000 from Web3 venture funds.",
    gallery: [
      "/img/uge/UGE_tournament.png",
      "/img/uge/UGE_management.png",
      "/img/uge/UGE_ldp.png",
    ],
    responsibilities: [
      "Developed responsive tournament creation and management interfaces for organizers using Next.js and Ant Design.",
      "Built gamer-facing participation flows — bracket views, match scheduling, and result feeds — backed by React Query for consistent data sync.",
      "Implemented fan engagement and SocialFi features including team support, leaderboards, and community reward flows.",
      "Integrated sponsor-facing campaign and analytics pages, enabling brands to reach verified gamer audiences with trackable data.",
      "Worked closely with backend engineers to integrate blockchain-sourced match data and maintain stable API contracts.",
    ],
    impact: [
      "Platform reached 44,000 registered gamers and 200 organizer communities by 2024.",
      "Hosted 1,100 campaigns and 17,200 matches since launch in December 2022.",
      "Raised $200,000 from Web3 venture funds, including a Hackathon prize win.",
    ],
    stack: ["Next.js", "Ant Design", "Tailwind CSS", "Zustand", "React Query"],
  },
  // {
  //   slug: "vnpt-telecom",
  //   company: "VNPT Telecom",
  //   role: "Frontend Developer",
  //   period: "06/2022 - 05/2023",
  //   logo: vnptLogo,
  //   highlight:
  //     "Implemented user interfaces for information systems and collaborated with backend teams to integrate APIs and solve frontend issues.",
  //   description:
  //     "Delivered frontend features for internal and customer-facing information systems with focus on responsiveness and maintainability.",
  //   responsibilities: [
  //     "Implemented UI features across multiple information systems using React.",
  //     "Worked with backend developers to integrate APIs and resolve frontend defects quickly.",
  //     "Improved user experience consistency across modules with reusable UI patterns.",
  //   ],
  //   stack: ["React", "Redux", "Bootstrap"],
  // },
];

export const personalProjects: PersonalProject[] = [
  {
    slug: "cherub",
    title: "Cherub",
    highlight:
      "A patient management tool that lets doctors build custom questionnaire reports for patients — with template support for fast, reusable workflows.",
    description:
      "Cherub is a healthcare platform built for doctors to streamline patient engagement. Doctors get a unified patient list and a flexible report builder — think Google Forms, but medical — that they send directly to patients to fill out. To save time, doctors can pick from a curated template library for quick creation, or design and save their own templates for repeated use across consultations.",
    features: [
      "Patient list dashboard for doctors to manage and track all patients in one place.",
      "Custom report builder with a question-and-answer format (similar to Google Forms) that patients complete digitally.",
      "Template library for quick report creation from pre-built structures.",
      "Save-as-template flow so doctors can persist their own report designs for future reuse.",
    ],
    gallery: [
      "/img/cherub/cherub_patients.png",
      "/img/cherub/cherub_patient_report.png",
      "/img/cherub/cherub_create_template.png",
      "/img/cherub/cherub_template_gallery.png",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    projectUrl: "https://cherub-e2mvapoid-ctbinhs-projects.vercel.app/profiles",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    items: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "HTML",
      "CSS",
      "SASS",
      "Tailwind CSS",
    ],
  },
  {
    title: "UI + State",
    items: [
      "Shadcn UI",
      "Radix UI",
      "Ant Design",
      "Redux",
      "Zustand",
      "React Hook Form",
      "React Query",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Golang",
      "Git",
      "Webpack",
      "Babel",
      "CI/CD Pipeline",
      "Microfrontend Architecture",
    ],
  },
  {
    title: "Workflow",
    items: ["Figma", "Agile", "OOP", "Claude Code", "Cursor", "Github Copilot"],
  },
];
