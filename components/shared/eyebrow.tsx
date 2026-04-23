import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]",
        tone === "accent" ? "text-cyan" : "text-fog",
        className,
      )}
    >
      <span
        className={cn(
          "h-[1px] w-5",
          tone === "accent" ? "bg-cyan/60" : "bg-fog/50",
        )}
      />
      {children}
    </span>
  );
}
