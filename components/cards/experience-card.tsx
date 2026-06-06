"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useRef } from "react";
import { BentoCard } from "@/components/bento-card";
import { SectionLabel } from "@/components/section-label";
import { experience } from "@/data/portfolio";

export function ExperienceCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <BentoCard
      className="col-span-12 md:col-span-6 p-8"
      cursorLabel="Journey"
      tilt={false}
    >
      <div className="flex h-full flex-col gap-6">
        <SectionLabel icon={<Briefcase className="h-3 w-3" />}>Professional Journey</SectionLabel>

        <div ref={ref} className="relative pl-7">
          {/* Track */}
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-white/[0.07]" />
          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-1 w-px bg-gradient-to-b from-[#6366f1] via-[#6366f1]/60 to-transparent"
          />

          <div className="flex flex-col gap-6">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Glow dot */}
                <span className="absolute -left-[27px] top-1 flex h-3.5 w-3.5 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#6366f1]/40" />
                  <span className="relative h-2 w-2 rounded-full bg-[#6366f1] shadow-[0_0_10px] shadow-[#6366f1]" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-sm font-semibold text-white">{exp.company}</h4>
                  <span className="text-[10px] uppercase tracking-wider text-white/40">
                    {exp.period}
                  </span>
                </div>
                <div className="mt-0.5 text-xs text-white/55">{exp.role}</div>
                <ul className="mt-2 space-y-1">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-white/50"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
