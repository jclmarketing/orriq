import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  bleed = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        !bleed && "px-6 md:px-10 lg:px-14",
        className,
      )}
    >
      <div className={cn("mx-auto w-full", !bleed && "max-w-[1240px]")}>
        {children}
      </div>
    </section>
  );
}
