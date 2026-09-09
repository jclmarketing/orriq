import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Start a website, a hosting move, a CRM or a full platform build. A 30-minute call, no pitch deck, no sales rep.",
};

const phases = [
  {
    idx: "01",
    title: "Discovery",
    duration: "Week 1",
    body: "A 30-minute intro, then a deeper working session mapping your current site, tools, workflows and data, and the three things that are genuinely costing you. You leave with a written sketch of what we would build, yours to keep whatever you decide.",
  },
  {
    idx: "02",
    title: "Scope",
    duration: "Week 1-2",
    body: "We write a fixed-scope proposal. Clear deliverables, a staging link you can check every week, and a monthly plan for hosting and care rather than a per-seat contract. You approve, or you do not. No negotiation theatre.",
  },
  {
    idx: "03",
    title: "Build",
    duration: "Weeks 2-8",
    body: "Websites are usually live in two to three weeks. Platform builds spin up your tenant in week one, show working software every Friday, and are live inside 30 days for a defined first build. Apps follow on TestFlight within the first fortnight.",
  },
  {
    idx: "04",
    title: "Run",
    duration: "Ongoing",
    body: "Hosting, monitoring, backups, updates and support on one monthly plan, with a roadmap of improvements you set. If you ever want to take it in-house, we hand it over cleanly. No lock-in, no drama.",
  },
];

const fits = [
  "Your website is slow, on a page builder nobody dares update, and you cannot tell where the enquiries go.",
  "You are outgrowing HubSpot, Salesforce, Monday or similar, and the next tier of their pricing is absurd.",
  "Your business has a specific shape, such as trades, manufacturing, regulated or multi-role, that templates cannot model.",
  "You want AI answering the phone or doing the admin, not bolted on top as a chat sidebar.",
  "You want one team for the site, the hosting, the CRM and the apps, and you care about owning all of it.",
];

const wontFit = [
  "You need something off-the-shelf, live this week, for £29 a user.",
  "You want a five-page brochure site for the lowest possible price and never intend to touch it again.",
  "You do not have an internal person who can own the relationship and make decisions.",
];

export default function GetStartedPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb variant="violet" className="h-[480px] w-[480px] -top-20 left-1/3 opacity-40" />
        <Section>
          <Eyebrow tone="accent">Get started</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[18ch]">
            Start a build.
          </h1>
          <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.6] text-cream/75">
            A 30-minute call about whatever you need first: a website, a
            hosting move, a CRM, an app, an automation, or the whole operating
            system. No pitch deck, no sales rep. You get straight to one of
            the two people who will build it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              href="mailto:jon@orriq.com?subject=Orriq%20discovery%20call"
              size="lg"
              trailingArrow
            >
              Email Jon directly
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Fill in a form instead
            </Button>
          </div>
        </Section>
      </section>

      <Reveal>
      <Section className="py-20 md:py-28">
        <div className="mb-14">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.02] tracking-[-0.03em] max-w-[20ch]">
            Four phases. No surprises.
          </h2>
        </div>
        <div className="space-y-5">
          {phases.map((p) => (
            <div
              key={p.idx}
              className="grid gap-6 md:grid-cols-12 hairline-b pb-10"
            >
              <div className="md:col-span-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog-2">
                  {p.idx} · {p.duration}
                </div>
                <div className="mt-2 font-sans font-semibold tracking-tight text-[28px] tracking-[-0.02em]">
                  {p.title}
                </div>
              </div>
              <div className="md:col-span-9">
                <p className="text-[17px] leading-[1.6] text-cream/80 max-w-[62ch]">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      </Reveal>

      <Reveal>
      <Section className="py-20 md:py-28">
        <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2">
          <div className="bg-obsidian p-10 md:p-12">
            <Eyebrow tone="accent">Orriq is right for you if</Eyebrow>
            <ul className="mt-8 space-y-5">
              {fits.map((f) => (
                <li key={f} className="flex gap-4 text-[15.5px] leading-[1.55] text-cream/80">
                  <span className="shrink-0 mt-2 h-1 w-5 bg-gradient-accent rounded-full" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-obsidian p-10 md:p-12">
            <Eyebrow>Orriq isn't right if</Eyebrow>
            <ul className="mt-8 space-y-5">
              {wontFit.map((f) => (
                <li key={f} className="flex gap-4 text-[15.5px] leading-[1.55] text-cream/70">
                  <span className="shrink-0 mt-2 h-1 w-5 bg-fog/40 rounded-full" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      </Reveal>

      <Reveal intensity="strong">
      <Section className="py-20">
        <div className="text-center max-w-[52ch] mx-auto">
          <Eyebrow className="justify-center" tone="accent">Pricing, briefly</Eyebrow>
          <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
            Fixed quotes. Flat monthly plans. No per-seat tax.
          </h2>
          <p className="mt-6 max-w-[52ch] mx-auto text-[16px] leading-relaxed text-cream/70">
            Websites, apps and single automations are a fixed quote from the
            brief. Platform builds start from £15k. Retainers from £2k a month
            include hosting, maintenance and a set roadmap of improvements.
            Orriq CRM tenants and hosting plans are a flat monthly fee. We
            scope your exact number on the call.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg" trailingArrow>
              Book a discovery call
            </Button>
          </div>
        </div>
      </Section>
      </Reveal>
    </>
  );
}
