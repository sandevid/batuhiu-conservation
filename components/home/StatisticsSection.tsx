"use client";

import { motion } from "motion/react";
import { Egg, TreePine, Users, Waves } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { STATISTICS } from "@/lib/constants";
import {
  defaultViewport,
  fadeUpVariants,
  staggerContainer,
} from "@/lib/animations";

const ICON_MAP = {
  Egg,
  Waves,
  Users,
  TreePine,
} as const;

export function StatisticsSection() {
  return (
    <section
      id="statistik"
      aria-label="Statistik konservasi"
      className="relative overflow-hidden bg-ocean-deep text-sand"
    >
      {/* Subtle turtle watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-8 text-sand/[0.04]"
      >
        <svg width="560" height="560" viewBox="0 0 120 120" fill="currentColor">
          <ellipse cx="60" cy="60" rx="32" ry="26" />
        </svg>
      </div>

      <div className="container-editorial section-spacing relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-14 max-w-2xl"
        >
          <motion.span
            variants={fadeUpVariants}
            className="text-ui flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-seafoam"
          >
            <span className="h-px w-8 bg-seafoam" /> Dampak Nyata
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-heading mt-4 text-4xl text-sand md:text-5xl"
          >
            Angka-angka yang lahir dari pasir dan ombak.
          </motion.h2>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {STATISTICS.map((stat) => {
            const Icon = ICON_MAP[stat.icon as keyof typeof ICON_MAP];
            return (
              <motion.li
                key={stat.label}
                variants={fadeUpVariants}
                className="group relative flex flex-col gap-4 rounded-2xl border border-sand/10 bg-ocean-mid/30 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-seafoam/40 hover:bg-ocean-mid/50"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-seafoam/15 text-seafoam">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-display text-5xl text-sand md:text-6xl">
                    <Counter target={stat.value} />
                  </span>
                  <span className="text-display text-3xl text-seafoam">
                    {stat.suffix}
                  </span>
                </div>
                <div>
                  <p className="text-ui text-sm font-semibold uppercase tracking-[0.2em] text-sand/90">
                    {stat.label}
                  </p>
                  <p className="text-editorial mt-1 text-sm text-sand/70">
                    {stat.sub}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
