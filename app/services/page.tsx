import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { Reveal } from "@/components/shared/reveal";
import { ServiceIcon } from "@/components/shared/service-icon";
import { services } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, hosting, Orriq CRM, bespoke platforms, custom automation, app development, AI agents and search marketing. Everything a business runs on, built and run by one team.",
};

const pairs = [
  { k: "Start small", v: "A website, a hosting move, a single automation. Most clients begin with one thing." },
  { k: "Grow into it", v: "Add the CRM, the field app, the phone agent. Each piece runs on the same platform." },
  { k: "One team", v: "The people who built the site also run the server and wrote the CRM. No hand-offs." },
  { k: "Own it all", v: "Code, database, domain, DNS. Everything is yours and documented." },
];

export default function ServicesIndex() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb
          variant="mixed"
          className="h-[520px] w-[520px] -top-24 right-0 opacity-40"
        />
        <Section>
          <Eyebrow tone="accent">Services</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[18ch]">
            Everything a business runs on,{" "}
            <span className="italic text-gradient-accent">built by one team.</span>
          </h1>
          <p className="mt-8 max-w-[62ch] text-[17px] md:text-[19px] leading-[1.6] text-cream/75">
            We started as a marketing agency building websites. We ended up
            building the CRMs, hosting the servers, writing the apps and
            wiring the automations too, because clients kept asking who else
            could. Eight services, one platform underneath, no juniors and no
            subcontractors.
          </p>
        </Section>
      </section>

      <Section className="pb-24">
        <Reveal>
          <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative bg-obsidian p-8 md:p-10 hover:bg-obsidian-2 transition-colors flex flex-col min-h-[320px]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-lg bg-gradient-accent opacity-25 blur-md" />
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-lg hairline-strong bg-obsidian-3">
                        <ServiceIcon icon={s.icon} className="h-[18px] w-[18px] text-cream" />
                      </div>
                    </div>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-2">
                      Service 0{i + 1}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-cream/40 group-hover:text-cream transition-colors" />
                </div>
                <h2 className="mt-8 font-sans font-semibold tracking-tight text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.05] tracking-[-0.02em]">
                  {s.name}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-cream/70 max-w-[52ch]">
                  {s.summary}
                </p>
                <div className="mt-auto pt-8 flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <span
                      key={b}
                      className="hairline rounded-full px-3 py-1.5 text-[12px] text-cream/75 bg-white/[0.02]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      <Reveal>
        <Section className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-4 max-w-[1100px]">
            {pairs.map((c) => (
              <div key={c.k} className="flex flex-col gap-2">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-cyan/80">{c.k}</div>
                <div className="text-[14px] leading-[1.55] text-cream/70">{c.v}</div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      <Reveal intensity="strong">
        <Section className="py-20">
          <div className="relative overflow-hidden rounded-3xl hairline-strong bg-obsidian-2 p-12 md:p-20">
            <GradientOrb
              variant="mixed"
              className="h-[400px] w-[400px] -bottom-20 -right-10 opacity-60"
            />
            <div className="relative">
              <h2 className="font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em] max-w-[18ch]">
                Not sure which one you need?
              </h2>
              <p className="mt-6 max-w-[52ch] text-[16px] text-cream/75 leading-relaxed">
                Most people arrive with a symptom, not a service. Tell us what is
                slow, leaking or annoying and we will tell you what would fix it,
                and whether it is us.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/get-started" size="lg" trailingArrow>
                  Book a 30-minute call
                </Button>
                <Button href="/work" variant="secondary" size="lg">
                  See the work
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </Reveal>
    </>
  );
}
