import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  { value: "7", label: "Operating systems shipped", detail: "Across manufacturing, trades, engineering, agency, careers" },
  { value: "12", label: "Live integrations", detail: "Sage, Stripe, Vapi, 8x8, Google, Microsoft, n8n, more" },
  { value: "37", label: "Uptime monitors live", detail: "Every tenant watched, around the clock" },
  { value: "100%", label: "Data ownership", detail: "Self-hosted Supabase. Your tenant. Your code." },
];

export function Stats() {
  return (
    <Section className="py-20 md:py-28" id="stats">
      <div className="max-w-[60ch] mb-12">
        <MonoLabel withDot tone="live">
          Live · production
        </MonoLabel>
        <h2 className="mt-5 font-display text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.025em]">
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
            <div className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-[-0.025em] text-gradient-accent">
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
