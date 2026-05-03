import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "btn-cta tracking-tight font-medium",
  secondary:
    "glass text-cream hover:bg-white/[0.08] transition-colors font-medium",
  ghost:
    "text-cream/80 hover:text-cream transition-colors font-medium",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  trailingArrow?: boolean;
};

type LinkBtn = CommonProps & { href: string; type?: never };
type ButtonBtn = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkBtn | ButtonBtn) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    trailingArrow,
    ...rest
  } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 rounded-full whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {trailingArrow && <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />}
    </>
  );
  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
