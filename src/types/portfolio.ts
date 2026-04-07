import type { StaticImageData } from "next/image";

export type ExperienceItem = {
  slug: string;
  company: string;
  role: string;
  period: string;
  highlight: string;
  description: string;
  responsibilities: string[];
  stack: string[];
  logo: StaticImageData;
};

export type SkillGroup = {
  title: string;
  items: string[];
};
