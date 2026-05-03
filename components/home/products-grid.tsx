import Link from "next/link";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { MonoLabel } from "@/components/shared/mono-label";
import {
  Database,
  Bot,
  Workflow,
  Phone,
  Plug,
  LineChart,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  Icon: LucideIcon;
  name: string;
  tagline: string;
  bullets: string[];
  href: string;
};

const products: Product[] = [
  {
    Icon: Database,
    name: "CRM Records",
    tagline: "A relational core, modelled to your business.",
    bullets: [
      "Self-hosted Supabase, per-tenant isolation",
      "Custom entities, schemas, row-level security",
      "Full audit trail and versioned migrations",
    ],
    href: "/platform#data",
  },
  {
    Icon: Bot,
    name: "AI Agents",
    tagline: "Claude, GPT, Gemini wired through your data.",
    bullets: [
      "Embedded chat agents with full record context",
      "Document, email, call, and image reasoning",
      "Structured outputs straight into your schema",
    ],
    href: "/platform#ai",
  },
  {
    Icon: Workflow,
    name: "Automation Engine",
    tagline: "Workflows that run silently in the background.",
    bullets: [
      "n8n orchestration with visible execution logs",
      "Triggers, conditions, retries, audit history",
      "Server-side TypeScript for the gnarly stuff",
    ],
    href: "/platform#automation",
  },
  {
    Icon: Phone,
    name: "Voice & Calls",
    tagline: "AI phone agents and live call sync.",
    bullets: [
      "Vapi voice agents with structured intent capture",
      "8x8, Aircall, RingCentral call log ingestion",
      "Auto-transcribed, summarised, contact-linked",
    ],
    href: "/platform#voice",
  },
  {
    Icon: Plug,
    name: "Integrations",
    tagline: "Native ties to the tools you already run.",
    bullets: [
      "Sage, Stripe, Google, Microsoft, IMAP, webhooks",
      "First-class — not third-party glue you maintain",
      "Engineered, owned, documented",
    ],
    href: "/platform#integrations",
  },
  {
    Icon: LineChart,
    name: "Analytics",
    tagline: "Live dashboards traced to revenue.",
    bullets: [
      "Per-tenant KPIs, custom widgets, exportable",
      "Revenue recovery and ROI by automation",
      "Hours saved, calls handled, quotes won",
    ],
    href: "/platform#analytics",
  },
];

export function ProductsGrid() {
  return (
    <Section className="py-24 md:py-32" id="products">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
        <div className="max-w-[58ch]">
          <MonoLabel tone="accent" withDot>
            Products
          </MonoLabel>
          <h2 className="mt-5 font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em]">
            Six modules.{" "}
            <span className="italic text-fog/80">One operating layer.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.6] text-cream/70 max-w-[58ch]">
            We build platforms by composing six tightly-integrated capability
            domains — not by stitching SaaS subscriptions together with
            Zapier.
          </p>
        </div>
      </div>

      <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="group relative bg-obsidian p-7 md:p-8 transition-colors hover:bg-obsidian-2 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(60% 50% at 0% 0%, rgba(124,58,237,0.10) 0%, transparent 70%)",
              }}
            />
            <div className="relative flex items-start justify-between mb-7">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-accent opacity-25 blur-md" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg hairline-strong bg-obsidian-3">
                  <p.Icon className="h-[17px] w-[17px] text-cream" strokeWidth={1.6} />
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-fog group-hover:text-cream transition-colors" />
            </div>
            <h3 className="relative font-sans font-semibold tracking-tight text-[22px] leading-[1.1] tracking-[-0.02em]">
              {p.name}
            </h3>
            <p className="relative mt-2 text-[14.5px] text-cream/65 leading-snug max-w-[42ch]">
              {p.tagline}
            </p>
            <ul className="relative mt-6 space-y-2">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-[13px] leading-[1.5] text-cream/70"
                >
                  <span className="mt-1.5 shrink-0 h-1 w-1 rounded-full bg-cyan/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </Section>
  );
}
