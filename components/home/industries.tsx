import Image from "next/image";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";

const industries = [
  { name: "Manufacturing", note: "Made-to-measure quote-to-cash" },
  { name: "Construction", note: "Survey-to-installation CRMs" },
  { name: "Engineering", note: "Project ops + telephony AI" },
  { name: "Plant hire", note: "Fleet, compliance, scheduling" },
  { name: "Roofing", note: "Field surveys, route delivery" },
  { name: "Agencies", note: "Multi-tenant client ops" },
  { name: "Careers SaaS", note: "AI-first multi-user platform" },
];

const partners = [
  "Joe & The Juice",
  "Johnson & Johnson",
  "Kenvue",
  "McDonald's",
  "Jaguar Land Rover",
  "Starbucks",
  "Amazon",
];

export function Industries() {
  return (
    <Section className="relative py-28 md:py-36" id="industries">
      <div className="absolute inset-0 -z-0 overflow-hidden rounded-3xl">
        <Image
          src="/assets/industries-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/70 to-obsidian" />
      </div>

      <div className="relative">
        <div className="max-w-[60ch] mb-14 md:mb-16">
          <MonoLabel tone="accent">Industries</MonoLabel>
          <h2 className="mt-5 font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em]">
            Built where{" "}
            <span className="italic text-fog/80">complexity lives.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.6] text-cream/70">
            Sectors where SaaS templates fall apart — high data volume,
            multi-role teams, regulated processes, real-world field
            operations.
          </p>
        </div>

        <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-4 lg:grid-cols-7">
          {industries.map((s) => (
            <div
              key={s.name}
              className="bg-obsidian p-5 flex flex-col gap-2 aspect-square justify-between"
            >
              <div className="h-1.5 w-6 rounded-full bg-gradient-accent opacity-70" />
              <div>
                <div className="font-sans font-semibold tracking-tight text-[15px] leading-tight tracking-[-0.01em]">
                  {s.name}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-fog-2 leading-[1.4]">
                  {s.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-2 mb-6">
            Delivery experience inside enterprise environments at
          </p>
          <div className="overflow-hidden">
            <div className="orriq-marquee flex gap-12 items-center">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p}-${i}`}
                  className="shrink-0 font-sans font-semibold tracking-tight text-[18px] md:text-[20px] tracking-[-0.01em] text-cream/55 hover:text-cream/90 transition-colors"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-fog-2">
            Prior client engagements of the founding team — not a partnership claim
          </p>
        </div>
      </div>
    </Section>
  );
}
