import { integrations } from "@/lib/integrations";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";

export function ProofStrip() {
  return (
    <Section className="py-20 md:py-28">
      <div className="text-center mb-12">
        <Eyebrow className="justify-center">Built on modern infrastructure</Eyebrow>
        <p className="mt-5 max-w-[52ch] mx-auto text-[15px] text-fog">
          We assemble best-in-class primitives into one coherent platform, then
          shape it around your business. No lock-in. No rebuilt wheels.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-px hairline rounded-xl overflow-hidden bg-white/[0.06]">
        {integrations.slice(0, 14).map((i) => (
          <div
            key={i.name}
            className="group relative aspect-[5/3] bg-obsidian flex flex-col items-center justify-center p-4 hover:bg-obsidian-2 transition-colors"
          >
            <span className="font-sans font-semibold tracking-tight text-[15px] tracking-[-0.01em] text-cream/90">
              {i.name}
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fog-2">
              {i.role}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
