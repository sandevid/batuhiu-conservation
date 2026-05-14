"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  defaultViewport,
  fadeUpVariants,
  staggerContainer,
} from "@/lib/animations";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h2" | "h3";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;
  const alignClass = align === "center" ? "items-center text-center" : "items-start";
  const accentColor = tone === "dark" ? "bg-seafoam" : "bg-coral";
  const eyebrowClass =
    tone === "dark"
      ? "text-seafoam/90"
      : "text-coral";
  const titleClass =
    tone === "dark" ? "text-sand" : "text-ocean-deep";
  const descClass =
    tone === "dark" ? "text-sand/80" : "text-text-secondary";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn("flex max-w-3xl flex-col gap-5", alignClass, className)}
    >
      {eyebrow ? (
        <motion.div
          variants={fadeUpVariants}
          className={cn(
            "text-ui flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em]",
            eyebrowClass,
          )}
        >
          <span className={cn("h-px w-8", accentColor)} aria-hidden />
          {eyebrow}
        </motion.div>
      ) : null}
      <motion.div variants={fadeUpVariants}>
        <Heading
          className={cn(
            "text-heading text-balance text-4xl leading-[1.1] md:text-5xl lg:text-6xl",
            titleClass,
          )}
        >
          {title}
        </Heading>
      </motion.div>
      {description ? (
        <motion.p
          variants={fadeUpVariants}
          className={cn(
            "text-editorial max-w-2xl text-lg leading-relaxed md:text-xl",
            descClass,
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
