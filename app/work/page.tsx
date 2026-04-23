import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { caseStudies } from "@/lib/case-studies";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Five bespoke platforms, five different businesses. Each one shaped around its operator — not around a template.",
};

export default function WorkIndex() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb
          variant="cyan"
          className="h-[500px] w-[500px] top-10 right-0 opacity-30"
        />
        <Section>
          <Eyebrow>Work</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
            Five businesses. <br />
            Five <span className="italic text-gradient-accent">different shapes.</span>
          </h1>
          <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.6] text-cream/75">
            We don't do templates. These five builds have barely anything in
            common under the hood — because the companies don't either. Same
            infrastructure, same team, five completely different operating
            systems.
          </p>
        </Section>
      </section>

      <Section className="pb-32 space-y-20">
        {caseStudies.map((c, idx) => (
          <Link
            href={`/work/${c.slug}`}
            key={c.slug}
            className="group block"
          >
            <div className={`grid gap-8 md:gap-14 md:grid-cols-12 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="md:col-span-7">
                <div className="relative overflow-hidden rounded-2xl hairline bg-obsidian-2 aspect-[16/10]">
                  <Image
                    src={c.image}
                    alt={c.client}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/60 via-transparent to-transparent" />
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                  {c.industry} · {c.year}
                </div>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.04] tracking-[-0.025em] max-w-[20ch] group-hover:text-cream">
                  {c.headline}
                </h2>
                <p className="mt-5 text-[15.5px] leading-[1.65] text-cream/70 max-w-[52ch]">
                  {c.summary}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-[14px] text-cream/80 group-hover:text-cream transition-colors">
                  <span>Read the build</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Section>
    </>
  );
}
