"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  /** Add a 3D tilt on mouse move. Subtle. */
  tilt?: boolean;
  /** Add a cursor-following radial glow. */
  spotlight?: boolean;
  /** Custom data-cursor label for the custom cursor when hovering. */
  cursorLabel?: string;
}

export function BentoCard({
  children,
  className,
  tilt = true,
  spotlight = true,
  cursorLabel,
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20, mass: 0.4 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20, mass: 0.4 });

  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(34, 197, 94, 0.12), transparent 60%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    if (tilt) {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      ry.set(dx * 4);
      rx.set(-dy * 4);
    }
  }

  function handleLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
    if (tilt) {
      rx.set(0);
      ry.set(0);
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor={cursorLabel}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={cn(
        "group relative overflow-hidden rounded-[24px] border border-white/[0.08]",
        "bg-[#0a0a0a]/80 backdrop-blur-xl",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_0_0_1px_rgba(255,255,255,0.02)_inset,0_30px_60px_-20px_rgba(0,0,0,0.5)]",
        "transition-[border-color,transform] duration-300 ease-out",
        "hover:border-white/[0.14]",
        className,
      )}
    >
      {/* Top inner highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      {/* Spotlight glow that follows the cursor */}
      {spotlight && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      {/* Subtle noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay noise"
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
