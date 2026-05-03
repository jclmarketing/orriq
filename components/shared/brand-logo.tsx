/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

/**
 * Map of brand display name → simple-icons slug (vendored at /public/assets/logos/<slug>.svg).
 * If a name isn't here, BrandLogo renders the name as a wordmark fallback.
 */
const SLUGS: Record<string, string> = {
  // Tech stack
  Supabase: "supabase",
  "Next.js": "nextdotjs",
  Vercel: "vercel",
  n8n: "n8n",
  OpenAI: "openai",
  Claude: "claude",
  Gemini: "googlegemini",
  Stripe: "stripe",
  Sage: "sage",
  Cloudflare: "cloudflare",
  GitHub: "github",
  Docker: "docker",

  // Enterprise proof
  "McDonald's": "mcdonalds",
  Jaguar: "jaguar",
  "Land Rover": "landrover",
  "Jaguar Land Rover": "jaguar", // composite — show jaguar mark
  Starbucks: "starbucks",
  Amazon: "amazon",

  // VS competitors
  HubSpot: "hubspot",
  Salesforce: "salesforce",
  Notion: "notion",
  Asana: "asana",
};

type Props = {
  name: string;
  /** Tailwind size class — defaults to h-5. */
  size?: string;
  /** Hide the name when icon is shown. */
  iconOnly?: boolean;
  /** Force wordmark only (no icon). */
  wordmarkOnly?: boolean;
  className?: string;
};

/**
 * Renders a brand logo as a monochrome SVG icon next to its wordmark.
 * Uses CSS filter to tint the simple-icons black SVG to cream/85.
 * If no SVG is vendored, falls back to plain wordmark text.
 */
export function BrandLogo({ name, size = "h-5", iconOnly, wordmarkOnly, className }: Props) {
  const slug = SLUGS[name];
  const showIcon = slug && !wordmarkOnly;
  // Force-show wordmark when there's no icon at all, regardless of iconOnly flag.
  const showWord = !iconOnly || !slug;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showIcon && (
        <img
          src={`/assets/logos/${slug}.svg`}
          alt=""
          aria-hidden
          loading="lazy"
          className={cn(
            size,
            "w-auto select-none",
            // simple-icons SVGs are pure black — invert to cream-tinted white
            "[filter:brightness(0)_invert(1)] opacity-80",
          )}
        />
      )}
      {showWord && (
        <span className="font-sans font-semibold tracking-tight text-[15px] tracking-[-0.01em] text-cream/90 whitespace-nowrap">
          {name}
        </span>
      )}
    </span>
  );
}
