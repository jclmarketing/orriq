import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";

export function Thesis() {
  return (
    <Section className="py-28 md:py-36">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Eyebrow>The thesis</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.02] tracking-[-0.03em]">
            Generic tools <br />
            produce <span className="italic text-fog">generic</span> <br />
            businesses.
          </h2>
        </div>
        <div className="md:col-span-8 md:col-start-6 space-y-8 text-[17px] leading-[1.6] text-cream/75 max-w-[62ch]">
          <p>
            Every SaaS platform worth billions was built by a company solving
            its own problem. Salesforce for inside sales. HubSpot for inbound
            marketing. Monday for a specific flavour of project board. They
            work — for someone.
          </p>
          <p>
            Then the rest of us pay to bend our companies into the shape of
            their product. We adopt their language, their objects, their
            workflows, their opinions about how work should happen. We restructure
            around the tool, and call it best practice.
          </p>
          <p>
            <span className="text-cream">
              Orriq is the opposite proposition.
            </span>{" "}
            We build the platform around how your business actually runs —
            using the same modern infrastructure (Supabase, Next.js, Vercel,
            AI, agent workflows) that the big SaaS companies use, but in the
            shape of <em className="text-cream/90">you</em>.
          </p>
          <p className="text-cream">
            You should own your operating system. Not lease it.
          </p>
        </div>
      </div>
    </Section>
  );
}
