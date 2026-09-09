import Link from "next/link";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/shared/button";
import { services } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <Section className="py-24 md:py-32" id="services">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
        <div className="max-w-[58ch]">
          <MonoLabel tone="accent" withDot>
            What we do
          </MonoLabel>
          <h2 className="mt-5 font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em]">
            Everything your business runs on.{" "}
            <span className="italic text-fog/80">One team.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.6] text-cream/70 max-w-[58ch]">
            Website, hosting, CRM, the bespoke platform behind it, the apps in
            the field and the automations in between. Built and run by the
            same people, on infrastructure we own.
          </p>
        </div>
        <Button href="/services" variant="secondary" size="md" trailingArrow>
          All services
        </Button>
      </div>

      <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group relative bg-obsidian p-7 md:p-8 transition-colors hover:bg-obsidian-2 overflow-hidden flex flex-col"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  i % 2 === 0
                    ? "radial-gradient(60% 50% at 0% 0%, rgba(45,212,191,0.10) 0%, transparent 70%)"
                    : "radial-gradient(60% 50% at 0% 0%, rgba(168,85,247,0.10) 0%, transparent 70%)",
              }}
            />
            <div className="relative flex items-start justify-between mb-7">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-accent opacity-25 blur-md" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg hairline-strong bg-obsidian-3">
                  <ServiceIcon icon={s.icon} />
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-fog group-hover:text-cream transition-colors" />
            </div>
            <div className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-fog-2">
              0{i + 1}
            </div>
            <h3 className="relative mt-2 font-sans font-semibold tracking-tight text-[20px] leading-[1.1] tracking-[-0.02em]">
              {s.name}
            </h3>
            <p className="relative mt-2 text-[14px] text-cream/65 leading-snug">
              {s.tagline}
            </p>
            <ul className="relative mt-6 space-y-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-[12.5px] leading-[1.5] text-cream/70"
                >
                  <span className="mt-1.5 shrink-0 h-1 w-1 rounded-full bg-cyan/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </Section>
  );
}
