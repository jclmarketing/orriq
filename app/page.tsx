import { HeroV2 } from "@/components/home/hero-v2";
import { ProductsGrid } from "@/components/home/products-grid";
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

export default function HomePage() {
  return (
    <>
      <HeroV2 />
      <ProductsGrid />
      <MethodPipeline />
      <Stats />
      <PlatformTour />
      <Industries />
      <CaseStudiesPreview />
      <TechCarousel />
      <Promise />
      <Team />
      <VsPreview />
      <FAQ />
      <CTA />
    </>
  );
}
