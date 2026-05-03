import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";
import {
  Radar,
  Search,
  Zap,
  Network,
  LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  letter: "O" | "R" | "R" | "I" | "Q";
  word: string;
  body: string;
  Icon: LucideIcon;
  micro: string[];
};

const steps: Step[] = [
  {
    letter: "O",
    word: "Observe",
    body: "We map how your business actually works — leads, calls, customers, quotes, jobs, invoices, follow-ups, tools, and data — before we touch a single line of code.",
    Icon: Radar,
    micro: ["System map", "Process audit", "Data trace"],
  },
  {
    letter: "R",
    word: "Reveal",
    body: "We expose the revenue leaks, manual bottlenecks, missed enquiries, duplicated work, and disconnected data hiding inside your operation.",
    Icon: Search,
    micro: ["Leakage map", "Bottleneck index", "Hidden value"],
  },
  {
    letter: "R",
    word: "Reactivate",
    body: "We wake up dormant leads, old customers, missed enquiries, abandoned quotes, and cold pipeline using AI-driven workflows.",
    Icon: Zap,
    micro: ["AI sequences", "Pipeline rescue", "Trigger flows"],
  },
  {
    letter: "I",
    word: "Integrate",
    body: "We connect your CRM, website, phones, email, forms, payments, accounting, AI agents, and automation tools into a single operating layer.",
    Icon: Network,
    micro: ["Unified stack", "Single source of truth", "API everywhere"],
  },
  {
    letter: "Q",
    word: "Quantify",
    body: "We measure what matters: leads captured, calls handled, quotes sent, revenue recovered, hours saved — every won pound, traced.",
    Icon: LineChart,
    micro: ["Live KPIs", "Revenue recovered", "ROI by workflow"],
  },
];

export function OrriqMethod() {
  return (
    <Section className="py-28 md:py-36" id="method">
      <div className="max-w-[60ch] mb-16 md:mb-20">
        <Eyebrow tone="accent">The ORRIQ Method</Eyebrow>
        <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.75rem)] leading-[1.02] tracking-[-0.03em]">
          Observe.{" "}
          <span className="italic text-fog/80">Reveal.</span>{" "}
          Reactivate.{" "}
          <span className="italic text-fog/80">Integrate.</span>{" "}
          <span className="text-gradient-accent">Quantify.</span>
        </h2>
        <p className="mt-6 text-[16px] md:text-[17px] leading-[1.6] text-cream/70">
          A practical system for finding the gaps in your business, turning
          hidden data into action, and building the infrastructure that keeps
          growth measurable.
        </p>
      </div>

      <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative bg-obsidian p-7 md:p-8 transition-colors hover:bg-obsidian-2 overflow-hidden flex flex-col min-h-[420px]"
          >
            <div
              aria-hidden
              className="absolute -top-4 right-2 font-sans font-semibold tracking-tight text-[160px] leading-none tracking-[-0.05em] text-cream/[0.04] select-none pointer-events-none group-hover:text-cream/[0.07] transition-colors"
            >
              {step.letter}
            </div>

            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-lg bg-gradient-accent opacity-30 blur-md" />
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-lg hairline-strong bg-obsidian-3">
                    <step.Icon className="h-[16px] w-[16px] text-cream" strokeWidth={1.6} />
                  </div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/80">
                  Step 0{i + 1}
                </div>
              </div>

              <h3 className="mt-7 font-sans font-semibold tracking-tight text-[26px] leading-[1.05] tracking-[-0.02em]">
                {step.word}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.6] text-cream/70 max-w-[40ch]">
                {step.body}
              </p>
            </div>

            <div className="relative mt-auto pt-8 space-y-1.5">
              {step.micro.map((m) => (
                <div
                  key={m}
                  className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog flex items-center gap-2"
                >
                  <span className="h-px w-3 bg-cyan/40" />
                  {m}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
