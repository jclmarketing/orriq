import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { integrations } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "How Orriq is built: self-hosted Supabase, Next.js, n8n, AI agents, and bespoke code — assembled into the shape of your business.",
};

const layers = [
  {
    idx: "01",
    name: "Data layer",
    heading: "A database that models you, not a generic CRM.",
    description:
      "Self-hosted Postgres via Supabase. Per-client tenant schemas with row-level security. Every table designed around your actual entities — jobs, quotes, patients, tenants, fleets, whatever your business genuinely contains.",
    features: [
      "Self-hosted Supabase — yours to keep",
      "Per-tenant isolation, shared auth core",
      "Typed schemas generated to TypeScript",
      "Backed up hourly, versioned migrations",
    ],
  },
  {
    idx: "02",
    name: "Logic layer",
    heading: "Business rules, not workflow templates.",
    description:
      "TypeScript on the server, running close to the database. Bespoke endpoints for your actual operations — not a drag-and-drop automation that falls over when your process gets interesting.",
    features: [
      "Next.js server actions + route handlers",
      "n8n for integration workflows",
      "Edge functions for latency-sensitive work",
      "Audit-logged writes, idempotent by default",
    ],
  },
  {
    idx: "03",
    name: "AI & agents",
    heading: "Models that do the work, not narrate it.",
    description:
      "Claude, Gemini, and specialised agents wired directly into the data. Voice agents on Vapi for inbound calls. Paperclip for internal orchestration. Not a chat sidebar — work gets done.",
    features: [
      "Claude for structured reasoning",
      "Gemini for vision, image, and CV work",
      "Vapi agents for phone workflows",
      "Paperclip for multi-step orchestration",
    ],
  },
  {
    idx: "04",
    name: "Integrations",
    heading: "Native ties to the tools you already use.",
    description:
      "Sage, Stripe, 8x8, Microsoft 365, Google Workspace, HubSpot (if we're replacing it gradually), WhatsApp, email — whatever you run, we integrate as first-class citizens.",
    features: [
      "Sage — bookkeeping & VAT",
      "Stripe — payments",
      "8x8 / Vapi — telephony",
      "IMAP, API, webhook-first design",
    ],
  },
  {
    idx: "05",
    name: "Interface",
    heading: "An interface shaped to your operators.",
    description:
      "Not a default Salesforce-lightning shell. A considered product design — typography, motion, information density — built for the specific people who'll live in it every day.",
    features: [
      "Next.js + React, designed from scratch",
      "Dark mode, considered motion, fast",
      "Role-based views for each team",
      "Mobile & desktop, first-class",
    ],
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb
          variant="violet"
          className="h-[500px] w-[500px] -top-40 left-1/3 opacity-40"
        />
        <Section>
          <Eyebrow tone="accent">Platform</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[18ch]">
            A modern infrastructure stack, in the{" "}
            <span className="italic text-gradient-accent">shape of you.</span>
          </h1>
          <p className="mt-8 max-w-[62ch] text-[17px] md:text-[19px] leading-[1.6] text-cream/75">
            We don't ship a product. We ship your platform. Five layers —
            data, logic, AI, integrations, and interface — assembled from
            best-in-class primitives and moulded to how your business
            genuinely operates.
          </p>
        </Section>
      </section>

      <Section className="pb-16">
        <div className="relative overflow-hidden rounded-2xl hairline bg-obsidian-2">
          <Image
            src="/assets/platform-diagram.png"
            alt="Orriq platform layered architecture"
            width={2240}
            height={1260}
            className="w-full h-auto opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
        </div>
      </Section>

      {layers.map((l, i) => (
        <Section key={l.idx} className="py-20 md:py-28">
          <div
            className={`grid gap-12 md:grid-cols-12 items-start ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:col-span-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog-2">
                Layer {l.idx}
              </div>
              <div className="mt-3 font-sans font-semibold tracking-tight text-[20px] tracking-[-0.01em] text-cream/90">
                {l.name}
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.2vw,2.75rem)] leading-[1.04] tracking-[-0.025em] max-w-[22ch]">
                {l.heading}
              </h2>
              <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.6] text-cream/70">
                {l.description}
              </p>
              <div className="mt-10 grid gap-px hairline rounded-xl overflow-hidden bg-white/[0.06] sm:grid-cols-2">
                {l.features.map((f) => (
                  <div key={f} className="bg-obsidian p-5 text-[14px] text-cream/80">
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <Eyebrow>Stack</Eyebrow>
            <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2rem,3.6vw,3rem)] leading-[1.02] tracking-[-0.03em] max-w-[20ch]">
              Fourteen primitives. One coherent platform.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-px hairline rounded-xl overflow-hidden bg-white/[0.06]">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="bg-obsidian p-5 aspect-[5/3] flex flex-col items-center justify-center text-center"
            >
              <span className="font-sans font-semibold tracking-tight text-[15px] tracking-[-0.01em] text-cream/90">
                {i.name}
              </span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fog-2">
                {i.role}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <div className="relative overflow-hidden rounded-3xl hairline-strong bg-obsidian-2 p-12 md:p-20">
          <GradientOrb
            variant="mixed"
            className="h-[400px] w-[400px] -bottom-20 -right-10 opacity-60"
          />
          <div className="relative">
            <h2 className="font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em] max-w-[18ch]">
              Want to see it running?
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] text-cream/75 leading-relaxed">
              Book a 30-minute walkthrough. We'll show you the actual tenant
              dashboards, the agent infrastructure, and the deploy pipeline —
              on live, working systems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/get-started" size="lg" trailingArrow>
                Book a walkthrough
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                See what we've built
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
