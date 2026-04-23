import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/shared/button";
import { Database, Workflow, Bot, Lock } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Your data, your schema.",
    body: "Self-hosted Supabase, per-tenant isolation, row-level security. Every table modelled on your actual business — not a CRM's opinion of it.",
  },
  {
    icon: Bot,
    title: "AI and agents, native.",
    body: "Claude, Gemini, and bespoke agents wired directly into your data. Not a chat sidebar — automation that does the work.",
  },
  {
    icon: Workflow,
    title: "Workflows that fit.",
    body: "n8n orchestration, Vapi voice agents, integrations to Sage, 8x8, Stripe — engineered to your process, maintained by us.",
  },
  {
    icon: Lock,
    title: "You own all of it.",
    body: "The code is yours. The database is yours. The infrastructure is documented. Walk away any time — the lights stay on.",
  },
];

export function PlatformPreview() {
  return (
    <Section className="py-28 md:py-36">
      <div className="flex flex-col gap-4 mb-16 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow tone="accent">The platform</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.03em] max-w-[18ch]">
            Modern infrastructure, assembled for <span className="italic">your</span> business.
          </h2>
        </div>
        <Button href="/platform" variant="secondary" size="md" trailingArrow>
          How Orriq is built
        </Button>
      </div>

      <div className="grid gap-px bg-white/[0.06] hairline rounded-2xl overflow-hidden md:grid-cols-2">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="group relative bg-obsidian p-8 md:p-10 transition-colors hover:bg-obsidian-2"
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-accent opacity-20 blur-md" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg hairline-strong bg-obsidian-3">
                  <p.icon className="h-[18px] w-[18px] text-cream" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-[22px] leading-tight tracking-[-0.02em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-cream/70 max-w-[46ch]">
                  {p.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
