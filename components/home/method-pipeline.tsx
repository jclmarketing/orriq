import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Radar, Search, Zap, Network, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  letter: string;
  word: string;
  body: string;
  Icon: LucideIcon;
};

const steps: Step[] = [
  {
    letter: "O",
    word: "Observe",
    body: "Map every workflow, tool, and data trail your business actually runs on.",
    Icon: Radar,
  },
  {
    letter: "R",
    word: "Reveal",
    body: "Expose the leaks, bottlenecks, and disconnected data hiding inside.",
    Icon: Search,
  },
  {
    letter: "R",
    word: "Reactivate",
    body: "Wake dormant leads and cold pipeline using AI-driven sequences.",
    Icon: Zap,
  },
  {
    letter: "I",
    word: "Integrate",
    body: "Stitch the entire stack into one operating layer you actually own.",
    Icon: Network,
  },
  {
    letter: "Q",
    word: "Quantify",
    body: "Trace every hour, lead, and pound back to a workflow you can measure.",
    Icon: LineChart,
  },
];

export function MethodPipeline() {
  return (
    <Section className="py-24 md:py-36" id="method">
      <div className="max-w-[60ch] mx-auto text-center mb-16 md:mb-20">
        <MonoLabel tone="accent" className="justify-center">
          The ORRIQ Method
        </MonoLabel>
        <h2 className="mt-5 font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.04] tracking-[-0.03em]">
          A repeatable system,{" "}
          <span className="italic text-fog/80">end to end.</span>
        </h2>
        <p className="mt-5 text-[15.5px] leading-[1.6] text-cream/70">
          Five steps that take a business from "we run on duct tape" to
          "we own a measurable operating system" — without restarting your
          tooling tomorrow.
        </p>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="hidden md:block absolute top-[42px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />
        <div
          aria-hidden
          className="hidden md:block absolute top-[42px] left-[8%] right-[8%] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.6) 20%, rgba(6,182,212,0.6) 80%, transparent 100%)",
            filter: "blur(6px)",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-3 relative">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center px-2">
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-30 blur-lg scale-125" />
                <div className="relative flex h-[84px] w-[84px] items-center justify-center rounded-full hairline-strong bg-obsidian-2">
                  <div className="absolute inset-1 rounded-full hairline" />
                  <s.Icon className="relative h-[26px] w-[26px] text-cream" strokeWidth={1.4} />
                </div>
              </div>

              <div className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.24em] text-fog-2">
                Step 0{i + 1}
              </div>
              <h3 className="mt-2 font-sans font-semibold tracking-tight text-[22px] leading-tight tracking-[-0.02em] flex items-baseline gap-2">
                <span className="text-gradient-accent text-[28px] leading-none">
                  {s.letter}
                </span>
                <span>{s.word}</span>
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.5] text-cream/65 max-w-[28ch]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
