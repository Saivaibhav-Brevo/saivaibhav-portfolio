import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function SectionLabel({
  icon,
  children,
  className,
}: {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50",
        className,
      )}
    >
      {icon && <span className="text-[#6366f1]">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
