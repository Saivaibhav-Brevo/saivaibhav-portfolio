"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Layered ambient background:
 *  - Pure black base
 *  - Faded grid
 *  - Aurora gradient blobs (animated)
 *  - Floating particles (deterministic seeded positions)
 *  - Subtle noise overlay
 */
export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <Aurora />
      <Particles count={36} />
      <div className="absolute inset-0 noise opacity-[0.04] mix-blend-overlay" />
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}

function Aurora() {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute -top-1/3 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,197,94,0.30), rgba(34,197,94,0) 70%)",
        }}
        animate={{ y: [0, 18, 0], x: ["-50%", "-48%", "-50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[55vh] w-[55vw] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.25), rgba(59,130,246,0) 70%)",
        }}
        animate={{ y: [0, -24, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-10%] bottom-[10%] h-[55vh] w-[55vw] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,85,247,0.22), rgba(168,85,247,0) 70%)",
        }}
        animate={{ y: [0, 20, 0], x: [0, 14, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/** Mulberry32-style deterministic PRNG so SSR + CSR produce identical particles. */
function makeParticles(count: number) {
  const out: { id: number; left: number; top: number; size: number; delay: number; duration: number; opacity: number }[] = [];
  for (let i = 0; i < count; i++) {
    const seed = (1337 + i * 0x6d2b79f5) >>> 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    const r1 = ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    let u = Math.imul(t ^ (t >>> 14), 2243 | t);
    u = (u + Math.imul(u ^ (u >>> 5), 121 | u)) ^ u;
    const r2 = ((u ^ (u >>> 16)) >>> 0) / 4294967296;
    let v = Math.imul(u ^ (u >>> 9), 9929 | u);
    v = (v + Math.imul(v ^ (v >>> 3), 31 | v)) ^ v;
    const r3 = ((v ^ (v >>> 11)) >>> 0) / 4294967296;
    out.push({
      id: i,
      left: r1 * 100,
      top: r2 * 100,
      size: 1 + r3 * 2,
      delay: r1 * 6,
      duration: 8 + r2 * 10,
      opacity: 0.15 + r3 * 0.5,
    });
  }
  return out;
}

function Particles({ count = 30 }: { count?: number }) {
  // Particles are seeded deterministically so SSR and CSR produce identical output.
  const items = useMemo(() => makeParticles(count), [count]);

  return (
    <div className="absolute inset-0">
      {items.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [-6, 6, -6], opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
