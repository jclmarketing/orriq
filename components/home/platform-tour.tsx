"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  title: string;
  body: string;
  image: string;
  bullets: string[];
};

const tabs: Tab[] = [
  {
    id: "crm",
    label: "CRM",
    title: "A CRM modelled to your business — not Monday's idea of one.",
    body: "Per-tenant Supabase schemas. Custom entities, relationships, and views. Row-level security on day one.",
    image: "/assets/ui/jcl-pipeline.png",
    bullets: [
      "Custom entities, custom hierarchies",
      "Row-level security by role",
      "Audit trail on every write",
    ],
  },
  {
    id: "workflows",
    label: "Workflows",
    title: "Automation that's visible, auditable, and yours.",
    body: "Visual n8n orchestration on the integration layer. Server-side TypeScript for the precise stuff. Every execution logged and replayable.",
    image: "/assets/ui/apsweeper-schedule.png",
    bullets: [
      "Triggers, conditions, retries — all visible",
      "n8n + bespoke TS handlers",
      "Per-execution audit history",
    ],
  },
  {
    id: "ai",
    label: "AI agents",
    title: "Agents that do work — not summarise it.",
    body: "Claude, GPT, and Gemini wired into your data. Voice agents on Vapi. Inbound calls captured, transcribed, and structured.",
    image: "/assets/ui/sidekick-calls.png",
    bullets: [
      "Embedded chat with full record context",
      "Vapi voice agents for inbound",
      "Structured outputs into your schema",
    ],
  },
  {
    id: "forms",
    label: "Forms & surveys",
    title: "No-code form builder, properly engineered underneath.",
    body: "Draggable fields, conditional logic, JSON schema. Public-facing forms, customer portals, internal capture tools — all on one builder.",
    image: "/assets/ui/rr-access-formbuilder.png",
    bullets: [
      "Conditional logic + validation",
      "Public + internal forms",
      "Live JSON schema preview",
    ],
  },
  {
    id: "quotes",
    label: "Quotes",
    title: "Quote-to-cash, with the moving parts wired in.",
    body: "Made-to-measure pricing, product configurators, instant PDF generation, status workflows, and clean handoff to your accounts package.",
    image: "/assets/ui/mighty-quote.png",
    bullets: [
      "Configurable pricing rules",
      "Status workflow: Draft → Approved → Paid",
      "Sage / Stripe handoff",
    ],
  },
  {
    id: "routes",
    label: "Routes & jobs",
    title: "Field operations that don't live on a clipboard.",
    body: "Visual route planning, drag-and-drop reordering, vehicle assignment, on-the-job photo capture, mobile-native via Capacitor.",
    image: "/assets/ui/mighty-route.png",
    bullets: [
      "Nearest-neighbour route optimiser",
      "Per-stop status flow",
      "iOS native via Capacitor",
    ],
  },
];

export function PlatformTour() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId)!;

  return (
    <Section className="py-24 md:py-32" id="tour">
      <div className="max-w-[58ch] mb-12 md:mb-16">
        <MonoLabel tone="accent">A tour of the platform</MonoLabel>
        <h2 className="mt-5 font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em]">
          Six surfaces.{" "}
          <span className="italic text-fog/80">Every one of them yours.</span>
        </h2>
        <p className="mt-5 text-[15.5px] leading-[1.6] text-cream/70">
          Click between the modules below — these are real screens from
          operating systems we've shipped.
        </p>
      </div>

      <div className="hairline rounded-2xl overflow-hidden bg-obsidian-2">
        <div className="flex overflow-x-auto hairline-b">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={cn(
                "relative px-5 md:px-7 py-4 md:py-5 font-mono text-[11.5px] uppercase tracking-[0.18em] whitespace-nowrap transition-colors",
                t.id === activeId
                  ? "text-cream"
                  : "text-fog hover:text-cream/80",
              )}
            >
              {t.label}
              {t.id === activeId && (
                <span
                  aria-hidden
                  className="absolute inset-x-3 -bottom-px h-px bg-gradient-accent"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] overflow-hidden lg:hairline-strong lg:border-t-0 lg:border-l-0 lg:border-b-0 hairline-b lg:hairline-b-0 bg-obsidian-3 order-2 lg:order-1">
            <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-px bg-white/10" />
            {tabs.map((t) => (
              <div
                key={t.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  t.id === activeId ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
              >
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12 flex flex-col gap-7 order-1 lg:order-2">
            <div>
              <MonoLabel tone="accent">{active.label}</MonoLabel>
              <h3 className="mt-4 font-sans font-semibold tracking-tight text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.08] tracking-[-0.02em] max-w-[26ch]">
                {active.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.6] text-cream/70 max-w-[52ch]">
                {active.body}
              </p>
            </div>
            <ul className="space-y-3 hairline-t pt-6">
              {active.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[13.5px] text-cream/80">
                  <span className="mt-2 shrink-0 h-1 w-3 bg-gradient-accent rounded-full" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
