"use client";

import { useState } from "react";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export function ServiceFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.06] tracking-[-0.02em]">
            Asked before{" "}
            <span className="italic text-fog/80">most engagements.</span>
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="hairline rounded-2xl overflow-hidden bg-obsidian">
            {faqs.map((qa, i) => {
              const isOpen = open === i;
              return (
                <div key={qa.q} className={cn(i > 0 && "hairline-t")}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-6 md:px-8 py-5 flex items-center justify-between gap-6 group"
                  >
                    <span className="font-sans font-semibold tracking-tight text-[16px] md:text-[17px] leading-[1.35] tracking-[-0.01em] text-cream">
                      {qa.q}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 flex h-8 w-8 items-center justify-center rounded-full hairline transition-all",
                        isOpen ? "bg-cyan/20 hairline-strong rotate-45" : "bg-white/[0.02]",
                      )}
                    >
                      <Plus className="h-3.5 w-3.5 text-cream" strokeWidth={2} />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-[grid-template-rows] grid duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-6 text-[14px] leading-[1.6] text-cream/70 max-w-[64ch]">
                        {qa.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
