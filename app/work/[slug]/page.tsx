import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} — ${study.headline}`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-10 md:pt-40">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
        <GradientOrb
          variant="violet"
          className="h-[500px] w-[500px] -top-20 -left-10 opacity-40"
        />
        <Section>
          <Link
            href="/work"
            className="text-[13px] text-fog hover:text-cream transition-colors"
          >
            ← All case studies
          </Link>
          <div className="mt-10 max-w-[58ch]">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan/80">
              {study.industry} · {study.year}
            </div>
            <div className="mt-4 text-[15px] text-cream/70 font-mono tracking-[-0.01em]">
              {study.client}
            </div>
            <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.035em]">
              {study.headline}
            </h1>
            <p className="mt-8 text-[17px] leading-[1.6] text-cream/75">
              {study.summary}
            </p>
          </div>
        </Section>
      </section>

      <Section className="pb-16">
        <div className="relative overflow-hidden rounded-2xl hairline bg-obsidian-2 aspect-[16/9]">
          <Image
            src={study.image}
            alt={study.client}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {study.metrics.map((m) => (
            <div key={m.label} className="border-l border-white/10 pl-5">
              <div className="font-sans font-semibold tracking-tight text-[clamp(2rem,3vw,2.5rem)] tracking-[-0.02em]">
                {m.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>The challenge</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-[18px] md:text-[20px] leading-[1.55] text-cream/85 font-sans font-semibold tracking-tight tracking-[-0.01em] max-w-[58ch]">
              {study.challenge}
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="accent">The build</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-[18px] md:text-[20px] leading-[1.55] text-cream/85 font-sans font-semibold tracking-tight tracking-[-0.01em] max-w-[58ch]">
              {study.solution}
            </p>
          </div>
        </div>
      </Section>

      {study.uiMockup && (
        <Section className="py-10 md:py-20">
          <div className="relative overflow-hidden rounded-2xl hairline bg-obsidian-2">
            <Image
              src={study.uiMockup}
              alt={`${study.client} UI screen`}
              width={2240}
              height={1260}
              className="w-full h-auto"
            />
            <div aria-hidden className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-obsidian/20 via-transparent to-transparent" />
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-fog-2 text-center">
            Platform screenshot · demo data
          </p>
        </Section>
      )}

      {study.featureGroups?.length > 0 && (
        <Section className="py-16 md:py-28">
          <div className="mb-14">
            <Eyebrow>Inside the build</Eyebrow>
            <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em] max-w-[22ch]">
              Every feature shipped, line by line.
            </h2>
          </div>
          <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2">
            {study.featureGroups.map((group) => (
              <div key={group.title} className="bg-obsidian p-8 md:p-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan/80">
                  {group.title}
                </div>
                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 text-[14.5px] leading-[1.55] text-cream/85"
                    >
                      <span className="shrink-0 mt-2 h-1 w-5 bg-gradient-accent rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Outcomes</Eyebrow>
          </div>
          <div className="md:col-span-8 space-y-5">
            {study.outcomes.map((o, i) => (
              <div
                key={o}
                className="flex items-start gap-5 pb-5 hairline-b last:hairline-b-0"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fog-2 mt-1.5 shrink-0 w-8">
                  0{i + 1}
                </div>
                <div className="text-[17px] leading-[1.55] text-cream/85">
                  {o}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="flex flex-wrap gap-3">
          {study.stack.map((s) => (
            <div
              key={s}
              className="hairline rounded-full px-4 py-2 text-[13px] text-cream/80 bg-white/[0.02]"
            >
              {s}
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <Link
          href={`/work/${next.slug}`}
          className="group block relative overflow-hidden rounded-2xl hairline bg-obsidian-2 hover:border-white/20 transition-colors"
        >
          <div className="relative aspect-[24/7] md:aspect-[24/7]">
            <Image
              src={next.image}
              alt={next.client}
              fill
              sizes="100vw"
              className="object-cover opacity-55 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center p-8 md:p-14">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                Next case study
              </div>
              <div className="mt-3 font-sans font-semibold tracking-tight text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
                {next.headline}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-[14px] text-cream/80 group-hover:text-cream transition-colors">
                <span>Read the build</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Link>
      </Section>

      <Section className="py-20">
        <div className="text-center max-w-[52ch] mx-auto">
          <h2 className="font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.5vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
            Want something like this, shaped around your business?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/get-started" size="lg" trailingArrow>
              Start a build
            </Button>
            <Button href="/platform" variant="secondary" size="lg">
              See the platform
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
