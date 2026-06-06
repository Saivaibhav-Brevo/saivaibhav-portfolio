"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { exploring } from "@/data/portfolio";

export function ExploringCard() {
  return (
    <BentoCard className="p-6" cursorLabel="Exploring">
      <div className="flex h-full flex-col gap-6">
        <SectionLabel icon={<Compass className="h-3 w-3" />}>Currently Exploring</SectionLabel>

        <div className="flex flex-col gap-3">
          {exploring.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group/expl flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#6366f1]/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
              </span>
              <span className="font-medium tracking-tight">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
