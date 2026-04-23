import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { competitors } from "@/lib/competitors";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Honest comparisons against Monday, HubSpot, Salesforce, Notion, and Asana. Where bespoke infrastructure wins, and where it doesn't.",
};

export default function VsIndex() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb variant="violet" className="h-[500px] w-[500px] -top-20 left-1/2 opacity-30" />
        <Section>
          <Eyebrow tone="accent">Compare</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
            Honest reads on <span className="italic text-gradient-accent">every alternative.</span>
          </h1>
          <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.6] text-cream/75">
            We tell you where Orriq wins. We also tell you when the other
            tool is the right answer. Pick the comparison that matters to
            you.
          </p>
        </Section>
      </section>

      <Section className="pb-32">
        <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2">
          {competitors.map((c) => (
            <Link
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="group relative bg-obsidian p-8 md:p-10 flex flex-col justify-between hover:bg-obsidian-2 transition-colors min-h-[260px]"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog-2">vs</span>
                  <span className="font-display text-[clamp(1.8rem,3vw,2.5rem)] tracking-[-0.02em]">{c.name}</span>
                </div>
                <p className="mt-5 text-[15px] text-cream/70 leading-[1.6] max-w-[46ch]">
                  {c.pitch}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-[13px] text-cream/60 group-hover:text-cream transition-colors">Read full comparison</span>
                <ArrowUpRight className="h-4 w-4 text-cream/40 group-hover:text-cream transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
