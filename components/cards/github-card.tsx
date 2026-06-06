"use client";

import { motion, useInView } from "framer-motion";
import { Github } from "lucide-react";
import { useMemo, useRef } from "react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { AnimatedCounter } from "@/components/animated-counter";
import { githubStats } from "@/data/portfolio";

/** 7x13 contribution grid generated deterministically. */
function useGrid() {
  return useMemo(() => {
    let s = 7919;
    const rand = () => {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      return s / 0x7fffffff;
    };
    return Array.from({ length: 7 * 13 }, () => {
      const r = rand();
      if (r > 0.85) return 4;
      if (r > 0.65) return 3;
      if (r > 0.4) return 2;
      if (r > 0.2) return 1;
      return 0;
    });
  }, []);
}

const heat = ["bg-white/[0.04]", "bg-[#0e3a22]", "bg-[#155e30]", "bg-[#1d8845]", "bg-[#22c55e]"];

export function GithubCard() {
  const grid = useGrid();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <BentoCard className="col-span-12 md:col-span-6 p-8" cursorLabel="GitHub">
      <div ref={ref} className="flex h-full flex-col gap-6">
        <div className="flex items-center justify-between">
          <SectionLabel icon={<Github className="h-3 w-3" />}>Github Activity</SectionLabel>
          <span className="text-[11px] text-white/40">Last 13 weeks</span>
        </div>

        <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
          {grid.map((level, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.005, duration: 0.25 }}
              className={`h-3 w-3 rounded-[3px] ${heat[level]}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {githubStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
            >
              <div className="text-lg font-semibold text-white">
                <AnimatedCounter value={s.value} />
                <span className="text-[#22c55e]">+</span>
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-white/40">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
