"use client";

import type { IconType } from "react-icons";
import {
  SiAntdesign,
  SiBootstrap,
  SiGithubactions,
  SiGo,
  SiGoogletagmanager,
  SiJest,
  SiMicrodotblog,
  SiNextdotjs,
  SiRabbitmq,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiZend,
} from "react-icons/si";
import { GoWorkflow } from "react-icons/go";

const iconMap: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Golang: SiGo,
  "React Query": SiReactquery,
  Webpack: SiWebpack,
  Vite: SiVite,
  "Micro-frontend": SiMicrodotblog,
  RabbitMQ: SiRabbitmq,
  GTM: SiGoogletagmanager,
  "CI/CD": SiGithubactions,
  "Ant Design": SiAntdesign,
  "Tailwind CSS": SiTailwindcss,
  Zustand: SiZend,
  Redux: SiRedux,
  Bootstrap: SiBootstrap,
  WebSockets: SiSocketdotio,
  Jest: SiJest,
  Playwright: GoWorkflow,
};

const accentMap: Record<string, string> = {
  React: "text-sky-500",
  "Next.js": "text-slate-900",
  TypeScript: "text-blue-600",
  Golang: "text-cyan-600",
  "React Query": "text-rose-500",
  Webpack: "text-sky-600",
  Vite: "text-violet-500",
  "Micro-frontend": "text-emerald-500",
  RabbitMQ: "text-orange-500",
  GTM: "text-blue-500",
  "CI/CD": "text-slate-700",
  "Ant Design": "text-red-500",
  "Tailwind CSS": "text-cyan-500",
  Zustand: "text-amber-700",
  Redux: "text-violet-600",
  Bootstrap: "text-violet-700",
  WebSockets: "text-slate-700",
  Jest: "text-rose-600",
  Playwright: "text-emerald-600",
};

type StackMarqueeProps = {
  tags: string[];
};

export function StackMarquee({ tags }: StackMarqueeProps) {
  const loop = [...tags, ...tags];
  return (
    <div className="marquee-container marquee-mask-x relative w-full overflow-hidden py-3">
      <div className="marquee-left flex w-max items-center gap-3 pr-3">
        {loop.map((tag, idx) => {
          const Icon = iconMap[tag];
          const accent = accentMap[tag] ?? "text-slate-500";
          return (
            <div
              key={`${tag}-${idx}`}
              className="flex h-10 shrink-0 items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 shadow-[0_8px_22px_-18px_rgba(15,23,42,0.3)]"
            >
              {Icon ? (
                <Icon className={`shrink-0 text-base ${accent}`} />
              ) : (
                <div className="h-3.5 w-3.5 shrink-0 rounded-md bg-slate-200" />
              )}
              <span className="whitespace-nowrap text-xs font-medium text-slate-700">{tag}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
