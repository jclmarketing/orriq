import { cn } from "@/lib/utils";

export function GradientOrb({
  className,
  variant = "violet",
}: {
  className?: string;
  variant?: "violet" | "cyan" | "mixed";
}) {
  const palette =
    variant === "violet"
      ? "bg-[radial-gradient(closest-side,_rgba(168,85,247,0.55),_transparent_70%)]"
      : variant === "cyan"
        ? "bg-[radial-gradient(closest-side,_rgba(45,212,191,0.45),_transparent_70%)]"
        : "bg-[radial-gradient(closest-side,_rgba(168,85,247,0.45),_rgba(45,212,191,0.35)_45%,_transparent_72%)]";
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl anim-pulse-slow",
        palette,
        className,
      )}
    />
  );
}
