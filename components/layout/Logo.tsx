import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Brand mark: compact turtle silhouette with two-line wordmark.
 * "BATU HIU" primary, "CONSERVATION" secondary line below.
 */
export function Logo({ tone = "dark", className }: LogoProps) {
  const textPrimary =
    tone === "dark" ? "text-ocean-deep" : "text-sand";
  const textSecondary =
    tone === "dark" ? "text-ocean-mid/80" : "text-sand/70";
  const iconColor = tone === "dark" ? "var(--color-ocean-deep)" : "var(--color-sand)";

  return (
    <Link
      href="/"
      aria-label={`${"Batu Hiu Conservation"} — Beranda`}
      className={cn(
        "group inline-flex items-center gap-3",
        className,
      )}
    >
      <span
        aria-hidden
        className="relative grid h-11 w-11 place-items-center rounded-full border border-current/10 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[8deg]"
        style={{ color: iconColor }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <ellipse cx="60" cy="62" rx="30" ry="24" />
            <path d="M60 38 L60 86" opacity="0.45" />
            <path d="M34 54 Q60 48 86 54" opacity="0.45" />
            <path d="M34 70 Q60 76 86 70" opacity="0.45" />
            <circle cx="90" cy="58" r="5.5" fill={iconColor} />
            <path
              d="M34 44 Q24 34 20 42 Q24 50 36 50"
              fill={iconColor}
              fillOpacity="0.2"
            />
            <path
              d="M34 80 Q24 90 20 82 Q24 74 36 74"
              fill={iconColor}
              fillOpacity="0.2"
            />
          </g>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-ui text-[15px] font-semibold tracking-[0.18em]",
            textPrimary,
          )}
        >
          BATU HIU
        </span>
        <span
          className={cn(
            "text-ui mt-1 text-[10px] font-medium tracking-[0.32em]",
            textSecondary,
          )}
        >
          CONSERVATION
        </span>
      </span>
    </Link>
  );
}
