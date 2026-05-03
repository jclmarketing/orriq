import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { competitors, getCompetitor } from "@/lib/competitors";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { Check, X } from "lucide-react";

export async function generateStaticParams() {
  return competitors.map((c) => ({ competitor: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>;
}): Promise<Metadata> {
  const { competitor } = await params;
  const c = getCompetitor(competitor);
  if (!c) return {};
  return {
    title: `Orriq vs ${c.name}`,
    description: c.hook,
  };
}

export default async function VsPage({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  const { competitor } = await params;
  const c = getCompetitor(competitor);
  if (!c) notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb variant="violet" className="h-[520px] w-[520px] -top-20 -left-10 opacity-40" />
        <GradientOrb variant="cyan" className="h-[420px] w-[420px] top-40 right-0 opacity-30" />
        <Section>
          <Link href="/vs" className="text-[13px] text-fog hover:text-cream transition-colors">
            ← All comparisons
          </Link>
          <div className="mt-10">
            <Eyebrow tone="accent">Compare</Eyebrow>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <h1 className="font-sans font-semibold tracking-tight text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.035em]">
                <span className="text-gradient-accent italic">Orriq</span>{" "}
                <span className="text-fog">vs</span> {c.name}
              </h1>
            </div>
            <p className="mt-10 max-w-[62ch] text-[19px] md:text-[22px] leading-[1.5] text-cream/85 font-sans font-semibold tracking-tight tracking-[-0.015em]">
              {c.hook}
            </p>
          </div>
        </Section>
      </section>

      <Section className="py-20 md:py-28">
        <div className="rounded-2xl hairline overflow-hidden">
          <div className="grid grid-cols-[1.3fr_1fr_1fr] bg-obsidian-2">
            <div className="p-5 md:p-6 font-mono text-[11px] uppercase tracking-[0.18em] text-fog-2">
              Dimension
            </div>
            <div className="p-5 md:p-6 font-mono text-[11px] uppercase tracking-[0.18em] text-fog hairline-strong border-t-0 border-b-0 border-r-0">
              {c.name}
            </div>
            <div className="p-5 md:p-6 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan flex items-center gap-2">
              Orriq
            </div>
          </div>
          {c.comparison.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.3fr_1fr_1fr] ${
                i % 2 === 0 ? "bg-obsidian" : "bg-obsidian/60"
              } hairline-t`}
            >
              <div className="p-5 md:p-6 text-[14px] text-cream/75 font-mono tracking-[-0.01em]">
                {row.label}
              </div>
              <div className="p-5 md:p-6 text-[14.5px] text-cream/70 leading-[1.55] flex items-start gap-3">
                <X className="h-4 w-4 text-fog-2 mt-1 shrink-0" strokeWidth={2} />
                <span>{row.them}</span>
              </div>
              <div className="p-5 md:p-6 text-[14.5px] text-cream leading-[1.55] flex items-start gap-3">
                <Check className="h-4 w-4 text-cyan mt-1 shrink-0" strokeWidth={2} />
                <span>{row.us}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Our verdict</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-[18px] md:text-[20px] leading-[1.55] text-cream/85 font-sans font-semibold tracking-tight tracking-[-0.01em] max-w-[58ch]">
              {c.verdict}
            </p>
          </div>
        </div>
      </Section>

      {c.notes.length > 0 && (
        <Section className="py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Notes</Eyebrow>
            </div>
            <div className="md:col-span-8 space-y-6">
              {c.notes.map((n, i) => (
                <div key={i} className="flex gap-5 pb-6 hairline-b last:hairline-b-0">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fog-2 mt-1.5 shrink-0 w-8">
                    0{i + 1}
                  </div>
                  <p className="text-[16px] leading-[1.6] text-cream/75">{n}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section className="py-20">
        <div className="relative overflow-hidden rounded-3xl hairline-strong bg-obsidian-2 p-10 md:p-16">
          <GradientOrb variant="mixed" className="h-[400px] w-[400px] -top-20 -right-20 opacity-60" />
          <div className="relative">
            <h2 className="font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em] max-w-[22ch]">
              Already on {c.name}? <br />
              We do migrations.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[16px] text-cream/75 leading-relaxed">
              We've replaced this platform before. We'll map what you have,
              what you need, and what to leave behind — no pitch deck
              required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-started" size="lg" trailingArrow>
                Book a discovery call
              </Button>
              <Button href="/vs" variant="secondary" size="lg">
                All comparisons
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
