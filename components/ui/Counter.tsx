"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";

type CounterProps = {
  target: number;
  duration?: number;
  /** Formatter applied to the animated integer value. */
  format?: (value: number) => string;
  className?: string;
};

/**
 * Animated counter that counts up from 0 to target on viewport entry.
 * Respects `once` viewport to avoid retriggers on subsequent scrolls.
 */
export function Counter({
  target,
  duration = 2,
  format,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const n = Math.round(latest);
    return format ? format(n) : n.toLocaleString("id-ID");
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, target, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
