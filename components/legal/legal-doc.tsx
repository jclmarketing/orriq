import type { ReactNode } from "react";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";

export function LegalDoc({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-14">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
        <Section>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.03] max-w-[26ch]">
            {title}
          </h1>
          {updated && (
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.18em] text-fog-2">
              Last updated {updated}
            </p>
          )}
          {intro && (
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-cream/80">
              {intro}
            </p>
          )}
        </Section>
      </section>

      <Section className="pb-28">
        <div className="max-w-[72ch] text-[16px] leading-[1.72] text-cream/80 [&_h2]:mt-11 [&_h2]:mb-3 [&_h2]:font-sans [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-cream [&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:font-sans [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-cream [&_p]:mb-4 [&_ul]:mb-5 [&_ul]:mt-1 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:marker:text-cyan/60 [&_a]:text-cyan [&_a]:underline [&_a]:decoration-cyan/30 hover:[&_a]:decoration-cyan [&_strong]:text-cream">
          {children}
        </div>
      </Section>
    </>
  );
}
