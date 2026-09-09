import { HeroV2 } from "@/components/home/hero-v2";
import { ServicesGrid } from "@/components/home/services-grid";
import { MethodPipeline } from "@/components/home/method-pipeline";
import { Stats } from "@/components/home/stats";
import { PlatformTour } from "@/components/home/platform-tour";
import { Industries } from "@/components/home/industries";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { TechCarousel } from "@/components/home/tech-carousel";
import { Promise } from "@/components/home/promise";
import { Team } from "@/components/home/team";
import { VsPreview } from "@/components/home/vs-preview";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";
import { Reveal } from "@/components/shared/reveal";

export default function HomePage() {
  return (
    <>
      {/* Hero stays time-based — it animates on initial load, no scroll context. */}
      <HeroV2 />

      {/* Below-the-fold sections are scroll-linked: opacity + y tied to scroll
          progress through the viewport, naturally reversing on the way up. */}
      <Reveal>
        <ServicesGrid />
      </Reveal>
      <Reveal>
        <MethodPipeline />
      </Reveal>
      <Reveal intensity="subtle">
        <Stats />
      </Reveal>
      <Reveal>
        <PlatformTour />
      </Reveal>
      <Reveal>
        <Industries />
      </Reveal>
      <Reveal>
        <CaseStudiesPreview />
      </Reveal>
      <Reveal intensity="subtle">
        <TechCarousel />
      </Reveal>
      <Reveal>
        <Promise />
      </Reveal>
      <Reveal>
        <Team />
      </Reveal>
      <Reveal>
        <VsPreview />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal intensity="strong">
        <CTA />
      </Reveal>
    </>
  );
}
