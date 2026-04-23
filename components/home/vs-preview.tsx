import Link from "next/link";
import { competitors } from "@/lib/competitors";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";
import { ArrowUpRight } from "lucide-react";

export function VsPreview() {
  return (
    <Section className="py-28 md:py-36">
      <div className="max-w-[52ch] mb-14 md:mb-20">
        <Eyebrow tone="accent">Compare</Eyebrow>
        <h2 className="mt-6 font-display text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.03em]">
          Already using{" "}
          <span className="italic text-gradient-accent">something generic</span>?
        </h2>
        <p className="mt-6 text-[16px] text-cream/70 leading-relaxed">
          We've written the comparison so you don't have to. Honest reads on why
          bespoke infrastructure beats templated SaaS — and, candidly, where it
          doesn't.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06]">
        {competitors.map((c) => (
          <Link
            key={c.slug}
            href={`/vs/${c.slug}`}
            className="group relative bg-obsidian p-6 md:p-8 flex flex-col justify-between aspect-[4/5] hover:bg-obsidian-2 transition-colors"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog-2">
                vs
              </div>
              <div className="mt-2 font-display text-[clamp(1.4rem,2.2vw,2rem)] tracking-[-0.02em]">
                {c.name}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-cream/60 group-hover:text-cream transition-colors">
                Read comparison
              </span>
              <ArrowUpRight className="h-4 w-4 text-cream/40 group-hover:text-cream transition-colors" />
            </div>
            <div aria-hidden className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-[radial-gradient(closest-side,_rgba(124,58,237,0.12),_transparent_70%)]" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
