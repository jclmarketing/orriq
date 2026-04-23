import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/shared/button";
import { ArrowUpRight } from "lucide-react";

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);
  return (
    <Section className="py-28 md:py-36">
      <div className="flex flex-col gap-4 mb-16 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>Proof</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.03em] max-w-[18ch]">
            Five builds. Five businesses we rebuilt around.
          </h2>
        </div>
        <Button href="/work" variant="secondary" size="md" trailingArrow>
          All case studies
        </Button>
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {featured.map((c, i) => (
          <Link
            key={c.slug}
            href={`/work/${c.slug}`}
            className={`group relative overflow-hidden rounded-2xl hairline bg-obsidian-2 transition-all hover:border-white/20 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className={`relative ${i === 0 ? "aspect-[24/10]" : "aspect-[4/3]"} overflow-hidden`}>
              <Image
                src={c.image}
                alt={c.client}
                fill
                sizes={i === 0 ? "(min-width: 768px) 100vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                className="object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
            </div>
            <div className="relative -mt-20 p-8 md:p-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
                    {c.industry}
                  </div>
                  <h3 className="mt-3 font-display text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
                    {c.headline}
                  </h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-cream/40 group-hover:text-cream transition-colors shrink-0" />
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-cream/65 max-w-[56ch]">
                {c.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:gap-8">
                {c.metrics.map((m) => (
                  <div key={m.label} className="border-l border-white/10 pl-3">
                    <div className="font-display text-[18px] tracking-[-0.01em]">
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-fog">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
