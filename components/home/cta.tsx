import Image from "next/image";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { Section } from "@/components/shared/section";

export function CTA() {
  return (
    <Section className="py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl hairline-strong bg-obsidian-2">
        <Image
          src="/assets/cta-bg.png"
          alt=""
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-obsidian/70 to-transparent" />
        <GradientOrb
          variant="mixed"
          className="h-[500px] w-[500px] -top-20 -right-20 opacity-60"
        />

        <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 lg:py-32 grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
              Let's build the <span className="italic text-gradient-accent">shape</span> your business deserves.
            </h2>
            <p className="mt-6 max-w-[56ch] text-[16px] md:text-[17px] leading-[1.6] text-cream/75">
              Book a 30-minute discovery call. We'll map your current tools,
              find the hidden leaks, and show you what your Orriq operating
              system could look like — no pitch deck, no sales rep, no junior
              hand-off.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <div className="flex flex-col gap-3">
              <Button href="/get-started" size="lg" trailingArrow>
                Book a discovery call
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Send a message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
