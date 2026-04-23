import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14.5" className="stroke-current opacity-40" />
      <circle cx="16" cy="16" r="9.5" className="stroke-current opacity-70" />
      <circle cx="16" cy="16" r="3.5" className="fill-current" />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-5 w-5 text-cream" />
      {!compact && (
        <span className="font-sans text-[15px] font-medium tracking-[-0.01em] text-cream lowercase">
          orriq
        </span>
      )}
    </div>
  );
}
