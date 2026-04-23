import { Hero } from "@/components/home/hero";
import { Thesis } from "@/components/home/thesis";
import { PlatformPreview } from "@/components/home/platform-preview";
import { ProofStrip } from "@/components/home/proof-strip";
import { Showcase } from "@/components/home/showcase";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { VsPreview } from "@/components/home/vs-preview";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Thesis />
      <PlatformPreview />
      <ProofStrip />
      <Showcase />
      <CaseStudiesPreview />
      <VsPreview />
      <CTA />
    </>
  );
}
