import { cn } from "@/lib/utils";

type WaveDividerProps = {
  /** Color applied to the wave path (CSS color or var). */
  color?: string;
  /** Flip the wave upside-down. */
  flip?: boolean;
  className?: string;
};

/**
 * Decorative SVG wave divider between sections.
 * Uses a repeated path that slides via CSS animation (see keyframes.wave).
 */
export function WaveDivider({
  color = "var(--color-sand)",
  flip = false,
  className,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none w-full overflow-hidden leading-[0]",
        flip && "rotate-180",
        className,
      )}
    >
      <svg
        className="h-16 w-[200%] animate-[wave_18s_linear_infinite] md:h-24"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 C1680,110 1920,10 2160,60 C2400,110 2640,10 2880,60 L2880,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
