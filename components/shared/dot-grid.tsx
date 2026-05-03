import { cn } from "@/lib/utils";

export function DotGrid({
  className,
  fade = "radial",
}: {
  className?: string;
  fade?: "radial" | "top" | "none";
}) {
  const mask =
    fade === "radial"
      ? "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      : fade === "top"
        ? "[mask-image:linear-gradient(to_bottom,black,transparent)]"
        : "";
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        mask,
        className,
      )}
      style={{
        backgroundImage:
          "radial-gradient(rgba(245, 245, 243, 0.07) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}

export function DotGridFine({
  className,
  fade = "radial",
}: {
  className?: string;
  fade?: "radial" | "top" | "none";
}) {
  const mask =
    fade === "radial"
      ? "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      : fade === "top"
        ? "[mask-image:linear-gradient(to_bottom,black,transparent)]"
        : "";
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", mask, className)}
      style={{
        backgroundImage:
          "radial-gradient(rgba(245, 245, 243, 0.05) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    />
  );
}
