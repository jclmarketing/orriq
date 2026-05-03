"use client";

import { useState } from "react";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Can you really replace our SaaS stack in 30 days?",
    a: "For a defined first-build outcome — yes. We won't replace nine tools in a month. We will get a focused, useful operating layer live: pipeline, core records, the most painful workflow, and the integrations that matter. Then we keep going week-by-week.",
  },
  {
    q: "What if our setup is more complex than 30 days allows?",
    a: "We tell you upfront. Discovery is free, fast, and brutally honest. If a 30-day live target is unrealistic, we propose a different shape — but we still won't take work we don't believe we can ship.",
  },
  {
    q: "How is this different from hiring an agency or consultancy?",
    a: "Most agencies sell hours. We sell outcomes. There's no offshore subcontractor pool, no junior hand-off, and no escalation matrix. The two people on the discovery call are the two people who write your code.",
  },
  {
    q: "What happens to our existing tools — HubSpot, Sage, etc?",
    a: "We integrate the ones worth keeping (Sage and Stripe almost always stay) and replace the ones that are forcing your business into a generic shape (HubSpot, Monday, Salesforce, Notion-as-database). You decide; we recommend.",
  },
  {
    q: "Who owns the code and the data?",
    a: "You. Always. The code lives in a repo with you as owner. The database is your Supabase tenant. If we ever part ways, the lights stay on — no extraction project, no vendor lock-in, no hostage data.",
  },
  {
    q: "How do you handle security and compliance?",
    a: "Self-hosted Supabase, row-level security as default, audit-logged writes, encrypted at rest and in transit. We work with regulated clients (healthcare-adjacent, professional services). For SOC2, ISO, or HIPAA-style requirements, scope the audit work into the build.",
  },
  {
    q: "What does it cost?",
    a: "Builds start from £15k for a focused first-build, scaling with module count and integration depth. Retainers from £2k/month including hosting, support, and a monthly improvement budget. No per-seat tax — ever.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="py-24 md:py-32" id="faq">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <MonoLabel tone="accent">FAQ</MonoLabel>
          <h2 className="mt-5 font-sans font-semibold tracking-tight text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
            Questions we hear{" "}
            <span className="italic text-fog/80">before every build.</span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.6] text-cream/65 max-w-[40ch]">
            If yours isn't here, you can email{" "}
            <a className="text-cream hover:text-cyan transition-colors" href="mailto:jon@jclmarketing.co.uk">
              jon@jclmarketing.co.uk
            </a>{" "}
            directly — typical reply is same-day.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="hairline rounded-2xl overflow-hidden bg-obsidian">
            {faqs.map((qa, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={cn(i > 0 && "hairline-t")}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-6 group"
                  >
                    <span className="font-sans font-semibold tracking-tight text-[16.5px] md:text-[17.5px] leading-[1.35] tracking-[-0.01em] text-cream group-hover:text-cream">
                      {qa.q}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 flex h-8 w-8 items-center justify-center rounded-full hairline transition-all",
                        isOpen ? "bg-cyan/20 hairline-strong rotate-45" : "bg-white/[0.02]",
                      )}
                    >
                      <Plus className="h-3.5 w-3.5 text-cream" strokeWidth={2} />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-[grid-template-rows] grid duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-6 md:pb-7 text-[14px] leading-[1.6] text-cream/70 max-w-[64ch]">
                        {qa.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
