"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Compass,
  FileText,
  Layers,
  Mail,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/brand-icons";
import { useEffect, useMemo, useState } from "react";
import { profile } from "@/data/portfolio";

type Item = {
  id: string;
  label: string;
  group: "Navigate" | "Links" | "Contact";
  icon: React.ReactNode;
  action: () => void;
  hint?: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const items: Item[] = useMemo(
    () => [
      {
        id: "about",
        label: "About",
        group: "Navigate",
        icon: <User className="h-4 w-4" />,
        action: () => scrollTo("about"),
      },
      {
        id: "projects",
        label: "Featured projects",
        group: "Navigate",
        icon: <Briefcase className="h-4 w-4" />,
        action: () => scrollTo("projects"),
      },
      {
        id: "stack",
        label: "Tech stack",
        group: "Navigate",
        icon: <Layers className="h-4 w-4" />,
        action: () => scrollTo("stack"),
      },
      {
        id: "experience",
        label: "Experience",
        group: "Navigate",
        icon: <Sparkles className="h-4 w-4" />,
        action: () => scrollTo("experience"),
      },
      {
        id: "exploring",
        label: "Currently exploring",
        group: "Navigate",
        icon: <Compass className="h-4 w-4" />,
        action: () => scrollTo("exploring"),
      },
      {
        id: "writing",
        label: "Writing",
        group: "Navigate",
        icon: <BookOpen className="h-4 w-4" />,
        action: () => scrollTo("writing"),
      },
      {
        id: "github",
        label: "Open GitHub",
        group: "Links",
        icon: <Github className="h-4 w-4" />,
        action: () => window.open(profile.github, "_blank"),
        hint: "↗",
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        group: "Links",
        icon: <Linkedin className="h-4 w-4" />,
        action: () => window.open(profile.linkedin, "_blank"),
        hint: "↗",
      },
      {
        id: "resume",
        label: "Download résumé",
        group: "Links",
        icon: <FileText className="h-4 w-4" />,
        action: () => window.open(profile.resume, "_blank"),
        hint: "↗",
      },
      {
        id: "email",
        label: "Send email",
        group: "Contact",
        icon: <Mail className="h-4 w-4" />,
        action: () => (window.location.href = `mailto:${profile.email}`),
        hint: "@",
      },
    ],
    [],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase()),
  );

  const groups = filtered.reduce<Record<string, Item[]>>((acc, item) => {
    (acc[item.group] ||= []).push(item);
    return acc;
  }, {});

  function runActive() {
    const item = filtered[active];
    if (item) {
      item.action();
      setOpen(false);
      setQuery("");
    }
  }

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runActive();
    }
  }

  return (
    <>
      {/* Trigger pill (fixed bottom-right) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="⌘K"
        className="fixed bottom-5 right-5 z-[80] hidden items-center gap-2 rounded-full border border-white/[0.1] bg-[#0a0a0a]/80 px-4 py-2.5 text-xs text-white/70 shadow-lg backdrop-blur-xl transition-colors hover:border-white/25 hover:text-white md:inline-flex"
      >
        <Search className="h-3.5 w-3.5" />
        Quick nav
        <kbd className="ml-1 rounded border border-white/15 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-white/60">
          ⌘ K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[120] flex items-start justify-center bg-black/60 p-4 pt-[14vh] backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={onListKey}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0a0a]/95 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.06] px-4">
                <Search className="h-4 w-4 text-white/40" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the portfolio…"
                  className="h-12 flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
                <kbd className="rounded border border-white/15 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-white/50">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[50vh] overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <div className="px-3 py-8 text-center text-sm text-white/40">
                    Nothing matches “{query}”.
                  </div>
                )}
                {Object.entries(groups).map(([group, list]) => (
                  <div key={group} className="mb-2 last:mb-0">
                    <div className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-wider text-white/40">
                      {group}
                    </div>
                    {list.map((item) => {
                      const idx = filtered.indexOf(item);
                      const isActive = idx === active;
                      return (
                        <button
                          key={item.id}
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => {
                            item.action();
                            setOpen(false);
                            setQuery("");
                          }}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            isActive
                              ? "bg-white/[0.06] text-white"
                              : "text-white/70 hover:bg-white/[0.03]"
                          }`}
                        >
                          <span className="text-white/60">{item.icon}</span>
                          <span className="flex-1 text-left">{item.label}</span>
                          {item.hint ? (
                            <ArrowUpRight className="h-3.5 w-3.5 text-white/30" />
                          ) : (
                            <span className="text-[10px] text-white/30">↵</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2 text-[10px] text-white/35">
                <span>↑ ↓ to navigate</span>
                <span>⏎ to select</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
