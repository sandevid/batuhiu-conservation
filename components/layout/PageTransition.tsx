"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT_CUBIC } from "@/lib/animations";

/**
 * Wraps the main content and animates route changes.
 * Uses usePathname as the unique key per route.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: EASE_OUT_CUBIC }}
        className="flex min-h-full flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
