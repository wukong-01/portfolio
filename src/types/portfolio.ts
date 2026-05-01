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
  gallery?: (StaticImageData | string)[];
  galleryLayout?: "default" | "portrait-mix" | "landscape-portrait";
  projectUrl?: string;
  impact?: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type PersonalProject = {
  slug: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
  stack: string[];
  projectUrl?: string;
  gallery?: (StaticImageData | string)[];
  galleryLayout?: "default" | "portrait-mix" | "landscape-portrait";
};
