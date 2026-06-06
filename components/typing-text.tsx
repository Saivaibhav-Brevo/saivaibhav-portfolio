"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  /** ms per character when typing */
  typeSpeed?: number;
  /** ms per character when deleting */
  deleteSpeed?: number;
  /** pause when a word is fully typed */
  holdMs?: number;
  className?: string;
}

type Phase = "type" | "hold" | "delete";

export function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 35,
  holdMs = 1400,
  className,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState("");
  const [phase, setPhase] = useState<Phase>("type");

  useEffect(() => {
    const word = words[index % words.length];
    let cancelled = false;

    function schedule(fn: () => void, ms: number) {
      const t = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      return t;
    }

    let timer: ReturnType<typeof setTimeout>;

    if (phase === "type") {
      if (shown.length < word.length) {
        timer = schedule(() => setShown(word.slice(0, shown.length + 1)), typeSpeed);
      } else {
        timer = schedule(() => setPhase("delete"), holdMs);
      }
    } else if (phase === "delete") {
      if (shown.length > 0) {
        timer = schedule(() => setShown(word.slice(0, shown.length - 1)), deleteSpeed);
      } else {
        // Defer state transitions to the next tick so they happen in an
        // async callback (not synchronously inside the effect body).
        timer = schedule(() => {
          setIndex((i) => i + 1);
          setPhase("type");
        }, 0);
      }
    }

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [shown, phase, index, words, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className={className}>
      {shown}
      <span className="ml-[2px] inline-block h-[1em] w-[2px] translate-y-[2px] bg-[#22c55e] align-middle animate-blink" />
    </span>
  );
}
