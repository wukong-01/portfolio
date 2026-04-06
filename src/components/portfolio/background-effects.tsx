"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useMemo } from "react";

type BackgroundEffectsProps = {
  children: ReactNode;
};

export function BackgroundEffects({ children }: BackgroundEffectsProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const haloX = useSpring(mouseX, { stiffness: 110, damping: 20 });
  const haloY = useSpring(mouseY, { stiffness: 110, damping: 20 });

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        size: 2 + ((i * 3) % 6),
        left: `${(i * 17) % 100}%`,
        top: `${(i * 29) % 100}%`,
        duration: 8 + (i % 6),
        delay: (i % 5) * 0.4,
      })),
    [],
  );

  const spotlight = useTransform(
    [haloX, haloY],
    ([x, y]) =>
      `radial-gradient(320px circle at ${x}px ${y}px, rgba(129, 140, 248, 0.20), rgba(99, 102, 241, 0.02) 50%, transparent 72%)`,
  );

  return (
    <div
      suppressHydrationWarning
      className="relative min-h-screen overflow-hidden bg-[#05050a] text-slate-100"
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    >
      <motion.div className="pointer-events-none fixed inset-0 z-20" style={{ background: spotlight }} />

      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="grid-bg h-full w-full" />
      </div>

      <div className="pointer-events-none absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-700/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="pointer-events-none absolute rounded-full bg-white/60"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {children}
    </div>
  );
}
