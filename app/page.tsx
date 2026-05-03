import { Hero } from "@/components/home/hero";
import { OrriqMethod } from "@/components/home/orriq-method";
import { TechCarousel } from "@/components/home/tech-carousel";
import { Thesis } from "@/components/home/thesis";
import { PlatformPreview } from "@/components/home/platform-preview";
import { Showcase } from "@/components/home/showcase";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { VsPreview } from "@/components/home/vs-preview";
import { Team } from "@/components/home/team";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OrriqMethod />
      <TechCarousel />
      <Thesis />
      <PlatformPreview />
      <Showcase />
      <CaseStudiesPreview />
      <VsPreview />
      <Team />
      <CTA />
    </>
  );
}
