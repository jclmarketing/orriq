import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { WorkList } from "@/components/work/work-list";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Platforms, websites, apps and automations we have shipped for manufacturers, trades, gyms, dealers, communities and agencies. Real builds, real numbers.",
};

export default function WorkIndex() {
  const platforms = caseStudies.filter((c) => c.type === "platform").length;
  const websites = caseStudies.filter((c) => c.type === "website").length;

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb
          variant="cyan"
          className="h-[500px] w-[500px] top-10 right-0 opacity-30"
        />
        <Section>
          <Eyebrow>Work</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
            {caseStudies.length} builds. <br />
            {caseStudies.length}{" "}
            <span className="italic text-gradient-accent">different shapes.</span>
          </h1>
          <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.6] text-cream/75">
            {platforms} operating platforms, {websites} websites, and the
            automations in between, all live and in daily use. A made-to-measure
            manufacturer, a roofing company, a scaffolding firm, a sweeper hire
            fleet, a micropub group and a competition site have almost nothing
            in common under the hood, because the businesses do not either.
            Same team, same infrastructure, very different answers.
          </p>
        </Section>
      </section>

      <Section className="pb-32">
        <WorkList studies={caseStudies} />
      </Section>
    </>
  );
}
