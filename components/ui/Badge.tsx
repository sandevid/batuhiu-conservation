import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "seafoam" | "coral" | "sand" | "ocean";

const variants: Record<BadgeVariant, string> = {
  default:
    "border-sand-dark/40 bg-shell/70 text-ocean-deep backdrop-blur",
  seafoam: "border-seafoam/40 bg-seafoam/15 text-seafoam",
  coral: "border-coral/40 bg-coral/15 text-coral",
  sand: "border-sand-dark/50 bg-sand/70 text-earth",
  ocean: "border-ocean-light/40 bg-ocean-deep/80 text-sand",
};

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: ReactNode;
};

export function Badge({
  children,
  variant = "default",
  className,
  icon,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "text-ui inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em]",
        variants[variant],
        className,
      )}
    >
      {icon ? <span className="h-3.5 w-3.5 shrink-0">{icon}</span> : null}
      {children}
    </span>
  );
}
