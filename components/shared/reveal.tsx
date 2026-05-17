"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type RevealIntensity = "subtle" | "default" | "strong";

const INTENSITY: Record<
  RevealIntensity,
  { y: number; startOffset: string; endOffset: string }
> = {
  // Tiny lift, finishes quickly — for fine-grain UI bits (eyebrows, badges).
  subtle: { y: 12, startOffset: "start 95%", endOffset: "start 60%" },
  // Standard reveal — section headings, paragraphs, card grids.
  default: { y: 28, startOffset: "start 92%", endOffset: "start 45%" },
  // Larger lift — hero-style blocks, feature panels, full-bleed cards.
  strong: { y: 48, startOffset: "start 95%", endOffset: "start 35%" },
};

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: RevealIntensity;
  /**
   * Override the y translate distance. When provided, takes precedence over
   * the intensity preset.
   */
  y?: number;
  /**
   * If true, the element fades back out as it leaves the top of the viewport
   * (symmetric fade tied to scroll). Default false — element holds visible
   * once revealed, until you scroll back past it.
   */
  symmetric?: boolean;
  /**
   * Render as a different element. Default is a div.
   */
  as?: "div" | "section" | "article" | "header" | "li";
};

/**
 * Scroll-linked reveal wrapper. Opacity and y-translate are bound to scroll
 * progress through the viewport — animation is "fixed to the scroll" and
 * reverses naturally when scrolling back up.
 *
 * Respects prefers-reduced-motion: renders a plain wrapper with no motion.
 */
export function Reveal({
  children,
  className,
  intensity = "default",
  y,
  symmetric = false,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const preset = INTENSITY[intensity];
  const yDistance = y ?? preset.y;

  const { scrollYProgress } = useScroll({
    target: ref,
    // Cast to MotionValue offset tuple — Framer accepts any progress-string
    // pair, the type just narrows to known values.
    offset: symmetric
      ? ["start end", "end start"]
      : [preset.startOffset as never, preset.endOffset as never],
  });

  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    symmetric ? [0, 0.18, 0.82, 1] : [0, 1],
    symmetric ? [0, 1, 1, 0] : [0, 1],
  );

  const translateY: MotionValue<number> = useTransform(
    scrollYProgress,
    symmetric ? [0, 0.18, 0.82, 1] : [0, 1],
    symmetric ? [yDistance, 0, 0, -yDistance / 2] : [yDistance, 0],
  );

  if (prefersReducedMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ opacity, y: translateY }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
