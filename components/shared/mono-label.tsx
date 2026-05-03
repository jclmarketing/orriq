import { cn } from "@/lib/utils";

export function MonoLabel({
  children,
  className,
  tone = "neutral",
  withDot = false,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent" | "live";
  withDot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em]",
        tone === "neutral" && "text-fog",
        tone === "accent" && "text-cyan",
        tone === "live" && "text-cyan",
        className,
      )}
    >
      {withDot && (
        <span className="relative flex h-1.5 w-1.5">
          {tone === "live" && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60 animate-ping" />
          )}
          <span
            className={cn(
              "relative inline-flex h-1.5 w-1.5 rounded-full",
              tone === "accent" && "bg-cyan",
              tone === "live" && "bg-cyan",
              tone === "neutral" && "bg-fog/60",
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
