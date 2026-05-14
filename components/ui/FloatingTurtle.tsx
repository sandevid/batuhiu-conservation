import { cn } from "@/lib/utils";

type FloatingTurtleProps = {
  className?: string;
  size?: number;
  color?: string;
};

/**
 * Stylized line-art turtle SVG with a gentle float animation.
 * Decorative — marked aria-hidden.
 */
export function FloatingTurtle({
  className,
  size = 72,
  color = "currentColor",
}: FloatingTurtleProps) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("animate-[float_6s_ease-in-out_infinite]", className)}
    >
      <g stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Shell */}
        <ellipse cx="60" cy="60" rx="32" ry="26" fill="none" />
        {/* Shell pattern */}
        <path d="M60 34 L60 86" opacity="0.5" />
        <path d="M32 54 Q60 48 88 54" opacity="0.5" />
        <path d="M32 66 Q60 72 88 66" opacity="0.5" />
        <path d="M45 40 Q50 58 45 80" opacity="0.35" />
        <path d="M75 40 Q70 58 75 80" opacity="0.35" />
        {/* Head */}
        <circle cx="94" cy="56" r="7" fill={color} opacity="0.85" />
        <circle cx="97" cy="54" r="1" fill="var(--color-shell)" />
        {/* Flippers */}
        <path d="M32 42 Q22 32 18 40 Q22 48 34 48" fill={color} fillOpacity="0.18" />
        <path d="M32 78 Q22 88 18 80 Q22 72 34 72" fill={color} fillOpacity="0.18" />
        <path d="M84 78 Q92 86 88 92 Q80 90 80 80" fill={color} fillOpacity="0.18" />
        <path d="M84 42 Q92 34 88 28 Q80 30 80 40" fill={color} fillOpacity="0.18" />
        {/* Tail */}
        <path d="M28 60 L22 60" />
      </g>
    </svg>
  );
}
