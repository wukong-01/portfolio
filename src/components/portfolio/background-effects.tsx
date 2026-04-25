"use client";

import type { ReactNode } from "react";

type BackgroundEffectsProps = {
  children: ReactNode;
};

export function BackgroundEffects({ children }: BackgroundEffectsProps) {
  return (
    <div className="relative min-h-screen bg-[#f5f5f7] text-slate-900">
      <div className="dot-grid dot-grid-fade pointer-events-none fixed inset-0" />
      {children}
    </div>
  );
}
