import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Orriq is the studio formerly known as JCL Marketing: websites, hosting, CRMs, apps and automation for UK businesses, built and run by a small senior team.",
};

const principles = [
  {
    title: "Your business is not a template.",
    body: "We start with how your company actually operates: the objects, the flows, the edge cases. Then we build software that reflects it. Not the other way around.",
  },
  {
    title: "Modern infrastructure, calmly applied.",
    body: "We use what is best, from self-hosted Postgres and Next.js to the current frontier models, without chasing hype. Novelty is not a value. Good taste is.",
  },
  {
    title: "Own your operating system.",
    body: "Every build belongs to the client. The code, the database, the domain, the documentation. If we part ways, you keep running. That is the deal.",
  },
  {
    title: "British understatement.",
    body: "We do not do 'empower'. We do not do 'transform'. We build things, ship them, host them, and explain them in plain English.",
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
            An agency that got tired of renting software, so it built its own.
          </h1>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
            <Eyebrow tone="accent">The origin</Eyebrow>
          </div>
          <Reveal className="md:col-span-8 space-y-6 text-[17px] leading-[1.65] text-cream/80 max-w-[60ch]">
            <p>
              Orriq began life as JCL Marketing, a Birmingham studio founded in
              2021 that built and hosted websites for trades, manufacturers and
              local firms. Over ninety of those sites still run on servers we
              manage today.
            </p>
            <p>
              The agency itself was drowning in software. HubSpot for CRM,
              Monday for projects, Zapier to tape them together. Nine tools,
              three spreadsheets, two part-time admins. So we built what we
              actually needed: one multi-tenant platform on a self-hosted
              database that replaced all of it.
            </p>
            <p>
              Then a client asked for the same thing in the shape of their
              business. Then another. Then someone wanted the phone answered by
              an AI agent, someone else wanted their gym off TeamUp, and a
              scaffolding boss wanted to run his CRM from Telegram. Sixteen
              builds later the pattern was obvious: take modern infrastructure,
              shape it around the company in front of you, own the result, and
              run the whole estate for them. That is Orriq.
            </p>
          </Reveal>
        </div>
      </Section>

      <Reveal>
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
      </Reveal>

      <Section className="py-20">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
            <Eyebrow>The team</Eyebrow>
          </div>
          <Reveal className="md:col-span-8 space-y-6 text-[16px] leading-[1.65] text-cream/75 max-w-[58ch]">
            <p>
              Small, senior, deliberately so. The same two people you meet on
              the discovery call are the ones writing your schema, building
              your theme, shipping your deploys and answering the message at
              9pm when something needs a decision.
            </p>
            <p>
              Based in Solihull and Birmingham, working with clients across
              the UK. For larger builds we bring in trusted collaborators,
              never an offshore subcontractor pool you did not agree to.
            </p>
            <p>
              Jon Lawson founded JCL Marketing in 2021. Orriq is his answer to
              the question he kept getting from clients: &ldquo;can you just
              make it actually fit us?&rdquo; Jake Whitehead builds the
              automation and AI systems that make every platform run.
            </p>
          </Reveal>
        </div>
      </Section>

      <Reveal intensity="strong">
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
      </Reveal>
    </>
  );
}
