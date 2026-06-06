"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 1200, damping: 50, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 50, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });

  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Disable on touch devices
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const cursorEl = target.closest<HTMLElement>("[data-cursor]");
      if (cursorEl) {
        setHovering(true);
        const val = cursorEl.getAttribute("data-cursor");
        setLabel(val && val.length > 0 ? val : null);
      } else if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true);
        setLabel(null);
      } else {
        setHovering(false);
        setLabel(null);
      }
    }

    function leave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22c55e] md:block"
        style={{ x: dotX, y: dotY, opacity: visible ? 1 : 0 }}
      />
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 backdrop-blur-[2px] md:flex"
        style={{
          x: ringX,
          y: ringY,
          opacity: visible ? 1 : 0,
          width: hovering ? (label ? 78 : 44) : 28,
          height: hovering ? (label ? 78 : 44) : 28,
        }}
        transition={{ width: { duration: 0.18 }, height: { duration: 0.18 } }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.12 }}
              className="m-auto select-none text-[10px] font-medium uppercase tracking-wider text-white"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
