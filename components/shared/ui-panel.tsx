import { cn } from "@/lib/utils";

type Props = {
  src: string;
  poster: string;
  alt: string;
  /** Browser-chrome label (e.g. "jcl-marketing.app/deals"). Optional. */
  url?: string;
  /** Tailwind classes to position/transform the panel. */
  className?: string;
  /** Disable autoplay (e.g. for lazy off-screen panels). */
  paused?: boolean;
  /** Render priority — main panel gets higher quality preload. */
  priority?: boolean;
};

/**
 * Browser-chrome framed video card. Default rounded with soft glass shadow.
 * Compose multiple at different `className` transforms for an Asana-style stack.
 */
export function UiPanel({ src, poster, alt, url, className, paused, priority }: Props) {
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
        <video
          src={src}
          poster={poster}
          autoPlay={!paused}
          muted
          loop
          playsInline
          preload={priority ? "metadata" : "none"}
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
