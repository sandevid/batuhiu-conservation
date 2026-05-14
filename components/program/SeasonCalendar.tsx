"use client";

import { motion } from "motion/react";
import { Egg, Heart, Sprout, Waves } from "lucide-react";
import { CONSERVATION_CALENDAR } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  defaultViewport,
  fadeUpSmall,
  staggerFast,
} from "@/lib/animations";

const TAG_STYLE: Record<
  string,
  {
    label: string;
    className: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  bertelur: {
    label: "Musim Bertelur",
    className: "border-seafoam/60 bg-seafoam/15 text-seafoam",
    icon: Egg,
  },
  pelepasan: {
    label: "Pelepasan Tukik",
    className: "border-coral/60 bg-coral/15 text-coral",
    icon: Heart,
  },
  "bertelur-pelepasan": {
    label: "Bertelur & Pelepasan",
    className: "border-coral/60 bg-coral/15 text-coral",
    icon: Sprout,
  },
  kawin: {
    label: "Musim Kawin",
    className: "border-ocean-light/60 bg-ocean-light/15 text-ocean-light",
    icon: Waves,
  },
};

export function SeasonCalendar() {
  return (
    <div className="flex flex-col gap-10">
      <motion.ul
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {CONSERVATION_CALENDAR.map((month) => {
          const style = month.tag ? TAG_STYLE[month.tag] : null;
          const Icon = style?.icon;
          return (
            <motion.li
              key={month.month}
              variants={fadeUpSmall}
              className={cn(
                "relative flex flex-col gap-3 overflow-hidden rounded-2xl border p-5 transition-all hover:-translate-y-0.5",
                month.tag
                  ? "border-sand-dark/60 bg-shell"
                  : "border-sand-dark/40 bg-sand/40",
              )}
            >
              <p className="text-ui text-xs uppercase tracking-[0.24em] text-text-muted">
                {month.month}
              </p>
              <p
                className={cn(
                  "text-heading text-xl",
                  month.tag ? "text-ocean-deep" : "text-text-secondary",
                )}
              >
                {month.label}
              </p>
              {style ? (
                <span
                  className={cn(
                    "text-ui inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]",
                    style.className,
                  )}
                >
                  {Icon ? <Icon className="h-3 w-3" /> : null}
                  {style.label}
                </span>
              ) : null}
            </motion.li>
          );
        })}
      </motion.ul>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-sand-dark/40 bg-sand/60 p-5">
        <p className="text-ui text-xs uppercase tracking-[0.24em] text-text-secondary">
          Legenda:
        </p>
        {Object.values(TAG_STYLE).map((style, i) => (
          <span
            key={i}
            className={cn(
              "text-ui inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]",
              style.className,
            )}
          >
            <style.icon className="h-3 w-3" />
            {style.label}
          </span>
        ))}
      </div>
    </div>
  );
}
