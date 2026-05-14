import type { SVGProps } from "react";

/**
 * Custom brand SVG icons.
 * Lucide React removed brand marks for trademark reasons, so we inline
 * a minimal Instagram glyph that matches lucide's stroke style.
 */
export function InstagramIcon({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      {...rest}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-12.6 7.2L3 21l2.4-5.1A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M9 9.5c.3 1.3 1.2 2.5 2.4 3.4 1.3.9 2.6 1.2 3.8.9l.9-1.4-2-1-1 .7c-.6-.2-1.2-.6-1.7-1.1s-.9-1.1-1.1-1.7l.7-1-1-2-1.4.9a3 3 0 0 0 0 2.3z" />
    </svg>
  );
}
