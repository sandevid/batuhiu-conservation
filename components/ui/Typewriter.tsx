"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
};

/**
 * Rotates through a list of phrases with a typing / erasing effect.
 * Used in the hero section for the subtitle.
 */
export function Typewriter({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 38,
  pause = 1800,
  className,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 0);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? current.slice(0, Math.max(0, prev.length - 1))
              : current.slice(0, prev.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={cn("inline-flex items-center", className)} aria-live="polite">
      <span>{text}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-current align-middle"
      />
    </span>
  );
}
