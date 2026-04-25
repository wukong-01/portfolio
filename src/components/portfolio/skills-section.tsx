"use client";

import type { SkillGroup } from "@/types/portfolio";
import type { IconType } from "react-icons";
import {
  SiAntdesign,
  SiBabel,
  SiClaude,
  SiCss,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGithubcopilot,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMicrodotblog,
  SiNextdotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiZend,
} from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
import { TbBrandRadixUi } from "react-icons/tb";
import { GoCodeOfConduct } from "react-icons/go";
import { LuRefreshCw } from "react-icons/lu";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  ReactJS: SiReact,
  NextJS: SiNextdotjs,
  HTML: SiHtml5,
  CSS: SiCss,
  SASS: SiSass,
  "Tailwind CSS": SiTailwindcss,
  "Shadcn UI": SiShadcnui,
  "Radix UI": TbBrandRadixUi,
  "Ant Design": SiAntdesign,
  Redux: SiRedux,
  "React Hook Form": SiReacthookform,
  "React Query": SiReactquery,
  Golang: SiGo,
  Git: SiGit,
  Webpack: SiWebpack,
  Babel: SiBabel,
  Figma: SiFigma,
  Cursor: BsCursorFill,
  "Claude Code": SiClaude,
  "Github Copilot": SiGithubcopilot,
  "Microfrontend Architecture": SiMicrodotblog,
  "CI/CD Pipeline": SiGithubactions,
  Zustand: SiZend,
  OOP: GoCodeOfConduct,
  Agile: LuRefreshCw,
};

const skillAccent: Record<string, string> = {
  JavaScript: "text-amber-500",
  TypeScript: "text-blue-600",
  ReactJS: "text-sky-500",
  NextJS: "text-slate-900",
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  SASS: "text-pink-500",
  "Tailwind CSS": "text-cyan-500",
  "Shadcn UI": "text-slate-900",
  "Radix UI": "text-slate-700",
  "Ant Design": "text-red-500",
  Redux: "text-violet-600",
  "React Hook Form": "text-pink-600",
  "React Query": "text-rose-500",
  Golang: "text-cyan-600",
  Git: "text-orange-600",
  Webpack: "text-sky-600",
  Babel: "text-yellow-500",
  Figma: "text-pink-500",
  Cursor: "text-slate-900",
  "Claude Code": "text-orange-500",
  "Github Copilot": "text-slate-900",
  "Microfrontend Architecture": "text-emerald-500",
  "CI/CD Pipeline": "text-slate-900",
  Zustand: "text-amber-700",
  OOP: "text-indigo-500",
  Agile: "text-emerald-600",
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  const skills = Array.from(new Set(skillGroups.flatMap((g) => g.items)));
  const loop = [...skills, ...skills];

  return (
    <div id="skills" className="mt-14 w-full pt-2">
      <div className="marquee-container marquee-mask-x relative w-full overflow-hidden py-3">
        <div className="marquee-left flex w-max items-center gap-4 pr-4">
          {loop.map((skill, idx) => {
            const Icon = skillIcons[skill];
            const accent = skillAccent[skill] ?? "text-slate-700";
            return (
              <div
                key={`${skill}-${idx}`}
                className="flex h-10 shrink-0 items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 shadow-[0_8px_22px_-18px_rgba(15,23,42,0.3)]"
              >
                {Icon ? (
                  <Icon className={`text-base ${accent}`} />
                ) : (
                  <div className="h-4 w-4 rounded-md bg-slate-200" />
                )}
                <span className="whitespace-nowrap text-xs font-medium text-slate-700">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
