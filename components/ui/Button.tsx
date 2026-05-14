import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "coral";
type Size = "sm" | "md" | "lg";

const base =
  "text-ui inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-300 ease-out will-change-transform " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral " +
  "hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary:
    "bg-ocean-deep text-sand hover:bg-ocean-mid shadow-lg shadow-ocean-deep/20 hover:shadow-xl",
  coral:
    "bg-coral text-sand hover:bg-coral/90 shadow-lg shadow-coral/30 hover:shadow-xl",
  secondary:
    "bg-sand text-ocean-deep hover:bg-sand-dark/70 shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-sand hover:bg-sand/10 border border-sand/30 hover:border-sand/60",
  outline:
    "bg-transparent text-ocean-deep border border-ocean-deep/30 hover:border-ocean-deep hover:bg-ocean-deep/5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-base",
  lg: "h-14 px-9 text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    as: "link";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "link") {
    const { as: _as, href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _as;
    void _v;
    void _s;
    void _c;
    void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  void _as;
  void _v;
  void _s;
  void _c;
  void _ch;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
