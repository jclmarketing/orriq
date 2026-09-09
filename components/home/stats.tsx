import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  { value: "90+", label: "Websites hosted and maintained", detail: "On servers we run, monitored around the clock, backed up nightly" },
  { value: "7", label: "Operating systems shipped", detail: "Manufacturing, scaffolding, plant hire, roofing, agency, careers, gym" },
  { value: "12+", label: "Live integrations", detail: "Sage, QuickBooks, Stripe, Vapi, 8x8, Google, Microsoft, WhatsApp, n8n" },
  { value: "100%", label: "Owned by the client", detail: "Self-hosted database, your repository, your domain, your DNS" },
];

export function Stats() {
  return (
    <Section className="py-20 md:py-28" id="stats">
      <div className="max-w-[60ch] mb-12">
        <MonoLabel withDot tone="live">
          Live · production
        </MonoLabel>
        <h2 className="mt-5 font-sans font-semibold tracking-tight text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
          Real numbers from{" "}
          <span className="italic text-fog/80">real builds.</span>
        </h2>
      </div>

      <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-obsidian p-7 md:p-8 flex flex-col gap-3"
          >
            <div className="font-sans font-semibold tracking-tight text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-[-0.025em] text-gradient-accent">
              {s.value}
            </div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-cyan/80">
              {s.label}
            </div>
            <div className="text-[13px] leading-[1.55] text-cream/60">
              {s.detail}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
