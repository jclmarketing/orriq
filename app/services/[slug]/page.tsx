import { CaseCover } from "@/components/work/case-cover";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { Reveal } from "@/components/shared/reveal";
import { ServiceIcon } from "@/components/shared/service-icon";
import { ServiceFaq } from "@/components/services/service-faq";
import { ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.name, description: s.summary };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.slug === slug);
  const next = services[(idx + 1) % services.length];
  const studies = service.caseStudies
    .map((cs) => caseStudies.find((c) => c.slug === cs))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
        <GradientOrb
          variant={idx % 2 === 0 ? "cyan" : "violet"}
          className="h-[520px] w-[520px] -top-24 -right-10 opacity-40"
        />
        <Section>
          <Link
            href="/services"
            className="text-[13px] text-fog hover:text-cream transition-colors"
          >
            ← All services
          </Link>
          <div className="mt-10 flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-accent opacity-30 blur-md" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-lg hairline-strong bg-obsidian-3">
                <ServiceIcon icon={service.icon} className="h-[18px] w-[18px] text-cream" />
              </div>
            </div>
            <Eyebrow tone="accent">Service 0{idx + 1}</Eyebrow>
          </div>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.035em] max-w-[16ch]">
            {service.name}
          </h1>
          <p className="mt-6 text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.3] tracking-[-0.015em] text-cream/85 max-w-[30ch] font-medium">
            {service.tagline}
          </p>
          <div className="mt-8 max-w-[62ch] space-y-5 text-[16.5px] md:text-[17.5px] leading-[1.6] text-cream/72">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/get-started" size="lg" trailingArrow>
              Talk to us about {service.name.toLowerCase()}
            </Button>
            <Button href="#deliverables" variant="secondary" size="lg">
              What you get
            </Button>
          </div>
        </Section>
      </section>

      <Reveal intensity="subtle">
        <Section className="py-10">
          <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-3">
            {service.proof.map((p) => (
              <div key={p.label} className="bg-obsidian p-7 md:p-8 flex flex-col gap-3">
                <div className="font-sans font-semibold tracking-tight text-[clamp(2rem,3.4vw,3rem)] leading-none tracking-[-0.025em] text-gradient-accent">
                  {p.value}
                </div>
                <div className="text-[13px] leading-[1.5] text-cream/65">{p.label}</div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <Section className="py-20 md:py-28" id="deliverables">
          <div className="mb-12 md:mb-14 max-w-[58ch]">
            <Eyebrow>What you get</Eyebrow>
            <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
              Included in every{" "}
              <span className="italic text-fog/80">{service.name.toLowerCase()} engagement.</span>
            </h2>
          </div>
          <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d, i) => (
              <div key={d.title} className="bg-obsidian p-7 md:p-8">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-2">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-sans font-semibold tracking-tight text-[18px] leading-[1.15] tracking-[-0.015em]">
                  {d.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.55] text-cream/65">{d.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <Section className="py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12 items-start">
            <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
              <Eyebrow tone="accent">How we do it</Eyebrow>
              <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.06] tracking-[-0.02em] max-w-[16ch]">
                {service.process.length} steps, no surprises.
              </h2>
            </div>
            <div className="md:col-span-8">
              {service.process.map((p, i) => (
                <div
                  key={p.step}
                  className="grid gap-4 md:grid-cols-12 py-6 hairline-b first:pt-0"
                >
                  <div className="md:col-span-4">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-cyan/80">
                      Step 0{i + 1}
                    </div>
                    <div className="mt-1.5 font-sans font-semibold tracking-tight text-[20px] tracking-[-0.015em]">
                      {p.step}
                    </div>
                  </div>
                  <p className="md:col-span-8 text-[15px] leading-[1.6] text-cream/72 max-w-[52ch]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </Reveal>

      {studies.length > 0 && (
        <Reveal>
          <Section className="py-16 md:py-24">
            <div className="flex flex-col gap-4 mb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>Proof</Eyebrow>
                <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em] max-w-[20ch]">
                  Where we have done this before.
                </h2>
              </div>
              <Button href="/work" variant="secondary" size="md" trailingArrow>
                All work
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {studies.map((c) => (
                <Link
                  key={c.slug}
                  href={`/work/${c.slug}`}
                  className="group relative overflow-hidden rounded-2xl hairline bg-obsidian-2 hover:border-white/20 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <CaseCover study={c} showLabel={false} />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                  </div>
                  <div className="relative -mt-10 p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
                      {c.client}
                    </div>
                    <div className="mt-2 font-sans font-semibold tracking-tight text-[17px] leading-[1.2] tracking-[-0.015em]">
                      {c.headline}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-[13px] text-cream/70 group-hover:text-cream transition-colors">
                      <span>Read the build</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        </Reveal>
      )}

      <Reveal>
        <Section className="py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow tone="accent">Engagement</Eyebrow>
              <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.06] tracking-[-0.02em] max-w-[16ch]">
                How it is priced.
              </h2>
              <p className="mt-4 text-[14px] leading-[1.6] text-cream/60 max-w-[38ch]">
                Exact numbers come from the scope call. No per-seat pricing on
                anything we build.
              </p>
            </div>
            <div className="md:col-span-8 grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] sm:grid-cols-2">
              {service.engagement.map((e) => (
                <div key={e.title} className="bg-obsidian p-7">
                  <div className="font-sans font-semibold tracking-tight text-[18px] tracking-[-0.015em]">
                    {e.title}
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.55] text-cream/65">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <Section className="py-10">
          <div className="flex flex-wrap gap-3">
            {service.stack.map((s) => (
              <div
                key={s}
                className="hairline rounded-full px-4 py-2 text-[13px] text-cream/80 bg-white/[0.02]"
              >
                {s}
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <ServiceFaq faqs={service.faqs} />
      </Reveal>

      <Reveal intensity="strong">
        <Section className="py-16 md:py-24">
          <Link
            href={`/services/${next.slug}`}
            className="group block relative overflow-hidden rounded-2xl hairline bg-obsidian-2 hover:border-white/20 transition-colors p-8 md:p-12"
          >
            <GradientOrb variant="mixed" className="h-[300px] w-[300px] -top-20 -right-10 opacity-40" />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                Next service
              </div>
              <div className="mt-3 font-sans font-semibold tracking-tight text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
                {next.name}
              </div>
              <p className="mt-3 text-[15px] text-cream/65 max-w-[52ch]">{next.tagline}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-[14px] text-cream/80 group-hover:text-cream transition-colors">
                <span>Read more</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </Section>
      </Reveal>

      <Reveal intensity="strong">
        <Section className="py-20">
          <div className="text-center max-w-[52ch] mx-auto">
            <h2 className="font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.5vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
              Want this for your business?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/get-started" size="lg" trailingArrow>
                Book a scope call
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Send a message
              </Button>
            </div>
          </div>
        </Section>
      </Reveal>
    </>
  );
}
