import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";
import { BrandLogo } from "@/components/shared/brand-logo";

const stack = [
  { name: "Supabase", note: "Database & auth" },
  { name: "Next.js", note: "Application framework" },
  { name: "Vercel", note: "Edge deployment" },
  { name: "n8n", note: "Workflow automation" },
  { name: "OpenAI", note: "LLM reasoning" },
  { name: "Claude", note: "LLM reasoning" },
  { name: "Gemini", note: "Multimodal AI" },
  { name: "Vapi", note: "Voice agents" },
  { name: "Stripe", note: "Payments" },
  { name: "Sage", note: "Accounting" },
  { name: "Cloudflare", note: "Network & DNS" },
  { name: "GitHub", note: "Source of truth" },
  { name: "Docker", note: "Self-hosted infra" },
];

const loop = [...stack, ...stack];

export function TechCarousel() {
  return (
    <Section className="py-24 md:py-28" bleed={false}>
      <div className="text-center max-w-[60ch] mx-auto mb-12">
        <Eyebrow className="justify-center">Built with modern infrastructure</Eyebrow>
        <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.6rem,2.6vw,2.5rem)] leading-[1.06] tracking-[-0.025em]">
          The tools behind serious business systems.
        </h2>
        <p className="mt-5 text-[15px] leading-[1.6] text-cream/65">
          We assemble proven technologies into one coherent operating system,
          shaped around your business instead of forcing you into generic
          SaaS.
        </p>
      </div>

      <div className="relative -mx-6 md:-mx-10 lg:-mx-14 overflow-hidden">
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-obsidian to-transparent pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-obsidian to-transparent pointer-events-none"
        />
        <div className="overflow-hidden">
          <div className="orriq-marquee flex gap-3 py-2">
            {loop.map((s, i) => (
              <div
                key={`${s.name}-${i}`}
                className="shrink-0 hairline rounded-full px-5 py-3 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center gap-3"
              >
                <BrandLogo name={s.name} size="h-[18px]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-fog-2">
                  {s.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-2">
        Built with — not affiliated with or endorsed by these vendors
      </p>
    </Section>
  );
}
