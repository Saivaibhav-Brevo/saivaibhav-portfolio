"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { TypingText } from "@/components/typing-text";
import { typingRoles } from "@/data/portfolio";

export function TaglineStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 backdrop-blur"
    >
      <div className="flex items-center gap-2 text-[12px] text-white/70">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6366f1]/[0.18]">
          <Sparkles className="h-3 w-3 text-[#818cf8]" />
        </span>
        Building things on the web —{" "}
        <span className="font-mono text-white/90">
          <TypingText words={typingRoles} />
        </span>
      </div>
      <div className="text-[11px] uppercase tracking-[0.16em] text-white/35">
        Press <kbd className="rounded border border-white/15 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-white/60">⌘ K</kbd> to navigate
      </div>
    </motion.div>
  );
}
