"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { highlights } from "@/data/portfolio";

export function HighlightsCard() {
  return (
    <BentoCard className="p-6 md:p-7" cursorLabel="Highlights">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <SectionLabel icon={<Crown className="h-3 w-3" />}>By the Numbers</SectionLabel>
          <span className="text-[11px] text-white/40">Updated 2026</span>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group/h relative"
            >
              <div className="relative">
                <div className="text-5xl font-semibold tracking-[-0.04em] text-gradient md:text-6xl">
                  {h.value}
                </div>
                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-[#6366f1]/0 blur-2xl transition-colors duration-500 group-hover/h:bg-[#6366f1]/20" />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                {h.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
