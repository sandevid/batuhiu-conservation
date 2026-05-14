"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Top-of-page scroll progress indicator.
 * Uses Motion's useScroll + useSpring for smooth glide.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-coral via-seafoam to-ocean-light"
    />
  );
}
