import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";

export const metadata: Metadata = {
  title: "About",
  description:
    "Orriq is built by JCL Marketing — a boutique studio that got tired of bending clients around generic SaaS.",
};

const principles = [
  {
    title: "Your business is not a template.",
    body: "We start with how your company actually operates — the objects, the flows, the edge cases — and build software that reflects it. Not the other way around.",
  },
  {
    title: "Modern infrastructure, calmly applied.",
    body: "We use what's best — Supabase, Next.js, Vercel, the current frontier LLMs — without chasing hype. Novelty is not a value; good taste is.",
  },
  {
    title: "Own your operating system.",
    body: "Every build belongs to the client. The code, the database, the documentation. If we part ways, you keep running. That's the deal.",
  },
  {
    title: "British understatement.",
    body: "We don't do 'empower'. We don't do 'transform'. We build things, ship them, and explain them in plain English.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb variant="mixed" className="h-[500px] w-[500px] -top-20 right-0 opacity-40" />
        <Section>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[22ch]">
            Built by an agency that got tired of renting software.
          </h1>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="accent">The origin</Eyebrow>
          </div>
          <div className="md:col-span-8 space-y-6 text-[17px] leading-[1.65] text-cream/80 max-w-[60ch]">
            <p>
              Orriq started as an internal build. JCL Marketing — a British
              boutique studio — was drowning in SaaS subscriptions. HubSpot for
              CRM. Monday for projects. Zapier to duct-tape them together. Nine
              tools, three spreadsheets, two part-time admins keeping it
              running.
            </p>
            <p>
              So we built what we actually needed — a single multi-tenant
              platform on Supabase that replaced all of it. Then a client
              asked for the same thing, in the shape of their business. Then
              another.
            </p>
            <p>
              Five builds later, we realised the thing we'd made was a
              repeatable approach: take modern infrastructure, shape it around
              the company in front of you, own the result. That's Orriq.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-28">
        <div className="mb-14">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.02] tracking-[-0.03em] max-w-[18ch]">
            Four principles. Non-negotiable.
          </h2>
        </div>
        <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="bg-obsidian p-8 md:p-10">
              <h3 className="font-sans font-semibold tracking-tight text-[22px] leading-tight tracking-[-0.02em]">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-cream/70 max-w-[46ch]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <Eyebrow>The team</Eyebrow>
          </div>
          <div className="md:col-span-8 space-y-6 text-[16px] leading-[1.65] text-cream/75 max-w-[58ch]">
            <p>
              Small, senior, deliberately so. The same two engineers you meet
              on the discovery call are the ones writing your schema, shipping
              your deploys, and answering your Slack at 9pm when something
              needs a decision.
            </p>
            <p>
              Based between Birmingham and remote — we work with clients
              across the UK and Europe. For larger builds we bring in trusted
              collaborators, never an offshore subcontractor pool you didn't
              agree to.
            </p>
            <p>
              Jon Lawson founded JCL Marketing in 2021. Orriq is his answer to
              the question he kept getting from clients: "can you just make it
              actually fit us?"
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="text-center max-w-[52ch] mx-auto">
          <h2 className="font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
            Want to work together?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/get-started" size="lg" trailingArrow>
              Start a build
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Send a message
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
