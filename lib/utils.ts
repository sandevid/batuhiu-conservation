import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with proper conflict resolution.
 * Uses clsx for conditionals and tailwind-merge for dedupe.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Masks a name for public display on the feedback wall.
 * "Andreas Saputra" -> "Andr** S."
 */
export function maskName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "Anonim";
  const parts = trimmed.split(/\s+/);
  const first = parts[0];
  const firstMasked =
    first.length <= 4
      ? first + "**"
      : first.slice(0, 4) + "*".repeat(Math.max(first.length - 4, 2));
  if (parts.length === 1) return firstMasked;
  const lastInitial = parts[parts.length - 1]?.[0] ?? "";
  return `${firstMasked} ${lastInitial}.`;
}

/**
 * Format a date string or Date to Indonesian short form.
 */
export function formatDateID(input: string | Date): string {
  const date = typeof input === "string" ? new Date(input) : input;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
