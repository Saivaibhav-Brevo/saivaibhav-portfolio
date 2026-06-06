"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { skills } from "@/data/portfolio";

const groupColor: Record<string, string> = {
  core: "from-emerald-400 to-emerald-600",
  state: "from-sky-400 to-sky-600",
  tooling: "from-violet-400 to-violet-600",
  test: "from-amber-400 to-amber-600",
  runtime: "from-rose-400 to-rose-600",
};

export function StackCard() {
  return (
    <BentoCard className="p-6" cursorLabel="Stack">
      <div className="flex h-full flex-col gap-6">
        <div className="flex items-center justify-between">
          <SectionLabel icon={<Layers className="h-3 w-3" />}>Tech Arsenal</SectionLabel>
          <span className="text-[11px] text-white/40">12 tools</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="group/skill relative flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div
                className={`h-8 w-8 rounded-lg bg-gradient-to-br ${groupColor[s.group]} opacity-90 shadow-[0_6px_20px_-6px] shadow-current`}
              />
              <span className="text-[11px] font-medium text-white/75">{s.name}</span>
              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/90 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70 opacity-0 transition-opacity group-hover/skill:opacity-100">
                {s.group}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
