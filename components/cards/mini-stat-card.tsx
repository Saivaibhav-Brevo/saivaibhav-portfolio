"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { BentoCard } from "@/components/bento-card";

interface MiniStatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

export function MiniStatCard({ value, label, icon }: MiniStatCardProps) {
  return (
    <BentoCard className="p-4 md:p-5" cursorLabel={label} tilt={false}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5 }}
        className="flex h-full flex-col justify-between gap-2"
      >
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold tracking-[-0.04em] text-gradient md:text-4xl">
            {value}
          </span>
          <span className="text-2xl font-semibold text-[#818cf8]">+</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-white/45">
          {icon && <span className="text-[#818cf8]">{icon}</span>}
          {label}
        </div>
      </motion.div>
    </BentoCard>
  );
}
