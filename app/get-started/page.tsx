import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Start a build. 30-minute discovery call, no pitch deck, no sales rep.",
};

const phases = [
  {
    idx: "01",
    title: "Discovery",
    duration: "Week 1",
    body: "A 30-minute intro, then a deeper working session mapping your current tools, workflows, data, and the three things that are genuinely costing you. You leave with a written architecture sketch — yours to keep, whatever you decide.",
  },
  {
    idx: "02",
    title: "Scope",
    duration: "Week 1-2",
    body: "We write a fixed-scope proposal. Clear deliverables, a weekly demo schedule, and a monthly retainer — not a per-seat contract. You approve, or you don't. No negotiation theatre.",
  },
  {
    idx: "03",
    title: "Build",
    duration: "Weeks 2-8",
    body: "Your tenant spins up inside week one. You see working software every Friday. We iterate with you in the loop. Most builds hit 'usable' around week 4, 'live' between week 6 and 10.",
  },
  {
    idx: "04",
    title: "Run",
    duration: "Ongoing",
    body: "Fixed monthly retainer for maintenance, support, and a roadmap of improvements you set. If you ever want to take the code in-house, we hand it over cleanly — no lock-in, no drama.",
  },
];

const fits = [
  "You're outgrowing HubSpot, Salesforce, Monday, or similar — and the next tier of their pricing is absurd.",
  "Your business has a specific shape — trades, regulated, multi-role, non-standard — that templates can't model.",
  "You want AI integrated into your operations, not bolted on top as a chat sidebar.",
  "You care about owning your data and your code.",
  "You're willing to pay for a build now to stop paying forever for software that doesn't fit.",
];

const wontFit = [
  "You need something off-the-shelf, live this week, for £29/user.",
  "Your business genuinely is a linear sales pipeline with ten stages and nothing else.",
  "You don't have an internal person who can own the relationship and make decisions.",
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
            A 30-minute discovery call. No pitch deck, no sales rep, no
            Calendly-into-the-void. You get straight to one of the two people
            who will build your platform.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              href="mailto:jon@jclmarketing.co.uk?subject=Orriq%20discovery%20call"
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

      <Section className="py-20">
        <div className="text-center max-w-[52ch] mx-auto">
          <Eyebrow className="justify-center" tone="accent">Pricing, briefly</Eyebrow>
          <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
            Fixed-scope builds. Fixed monthly retainers. No per-seat tax.
          </h2>
          <p className="mt-6 max-w-[52ch] mx-auto text-[16px] leading-relaxed text-cream/70">
            Builds start from £15k. Retainers from £2k/month including
            hosting, maintenance, and a set roadmap of monthly improvements.
            We'll scope your exact number in the discovery call.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg" trailingArrow>
              Book a discovery call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
