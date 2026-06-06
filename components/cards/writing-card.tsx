"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { articles } from "@/data/portfolio";

export function WritingCard() {
  return (
    <BentoCard className="col-span-12 md:col-span-3 p-8" cursorLabel="Read">
      <div className="flex h-full flex-col gap-6">
        <SectionLabel icon={<BookOpen className="h-3 w-3" />}>Latest Articles</SectionLabel>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href="#"
              data-cursor="Read"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group/art flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0"
            >
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-[#6366f1]">
                  {a.topic}
                </div>
                <div className="mt-1 text-sm font-medium text-white/85 group-hover/art:text-white">
                  {a.title}
                </div>
                <div className="mt-1 text-[11px] text-white/40">{a.readingTime}</div>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/30 transition-transform duration-300 group-hover/art:rotate-45 group-hover/art:text-[#6366f1]" />
            </motion.a>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
