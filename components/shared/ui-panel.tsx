import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  /** Real product screenshot, 16:9. */
  image: string;
  alt: string;
  /** Browser-chrome label (e.g. "crm.mightystructural.com / routes"). Optional. */
  url?: string;
  /** Tailwind classes to position/transform the panel. */
  className?: string;
  /** Main panel gets priority loading for LCP. */
  priority?: boolean;
};

/**
 * Browser-chrome framed screenshot card. Default rounded with soft glass shadow.
 * Compose multiple at different `className` transforms for a layered stack.
 */
export function UiPanel({ image, alt, url, className, priority }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl md:rounded-[20px] hairline-strong bg-obsidian-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55),0_8px_24px_-8px_rgba(0,0,0,0.4)]",
        className,
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/5 bg-obsidian/85 backdrop-blur-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" aria-hidden />
        {url && (
          <span className="ml-3 truncate font-mono text-[10.5px] text-cream/55 tracking-tight">
            {url}
          </span>
        )}
      </div>

      <div className="relative aspect-video">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
