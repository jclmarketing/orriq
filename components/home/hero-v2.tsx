import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { DotGrid } from "@/components/shared/dot-grid";
import { MonoLabel } from "@/components/shared/mono-label";
import { ArrowUpRight } from "lucide-react";

export function HeroV2() {
  return (
    <section className="relative overflow-hidden pt-28 pb-0 md:pt-32">
      <DotGrid className="opacity-60" />

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <GradientOrb
          variant="violet"
          className="h-[700px] w-[700px] -top-40 -left-20 opacity-40"
        />
        <GradientOrb
          variant="cyan"
          className="h-[600px] w-[600px] top-40 -right-32 opacity-35"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center gap-7 max-w-[58ch] mx-auto pt-12 pb-12 md:pt-14 md:pb-16">
          <Link
            href="/work/jcl-crm"
            className="group inline-flex items-center gap-3 rounded-full hairline bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm hover:bg-white/[0.06] transition-colors anim-fade-up"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/80">
              v0.7 — JCL CRM multi-tenant core shipped
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-cream/60 group-hover:text-cream transition-colors" />
          </Link>

          <h1
            className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.035em] text-cream anim-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            The operating system{" "}
            <span className="block italic text-gradient-accent">
              your business
            </span>
            <span className="block">should already be running.</span>
          </h1>

          <p
            className="max-w-[60ch] text-[16px] md:text-[18px] leading-[1.55] text-cream/75 anim-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            Orriq is the bespoke CRM, AI, and automation layer that replaces
            the patchwork of generic SaaS your business is duct-taped together
            with. One platform. Your schema. Your data. Built for you, owned
            by you.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-3 anim-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <Button href="/get-started" size="lg" trailingArrow>
              Start a build
            </Button>
            <Button href="#tour" variant="secondary" size="lg">
              See the platform
            </Button>
          </div>

          <div
            className="anim-fade-up flex items-center justify-center gap-x-2 gap-y-2 flex-wrap pt-2"
            style={{ animationDelay: "300ms" }}
          >
            {[
              { l: "O", w: "Observe" },
              { l: "R", w: "Reveal" },
              { l: "R", w: "Reactivate" },
              { l: "I", w: "Integrate" },
              { l: "Q", w: "Quantify" },
            ].map((s, i, a) => (
              <span key={i} className="inline-flex items-center gap-2">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
                  <span className="text-cyan">{s.l}</span>
                  <span className="text-fog/80">{s.w.slice(1)}</span>
                </span>
                {i < a.length - 1 && (
                  <span className="text-fog-2 font-mono text-[10px]">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-[1100px] anim-fade-up" style={{ animationDelay: "380ms" }}>
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-violet/20 via-transparent to-cyan/20 blur-md" />
          <div className="relative rounded-3xl hairline-strong overflow-hidden bg-obsidian-2 shadow-[0_30px_120px_-30px_rgba(124,58,237,0.4)]">
            <Image
              src="/assets/hero-dashboard.png"
              alt="Orriq operating system dashboard"
              width={2240}
              height={1260}
              className="w-full h-auto"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent pointer-events-none"
            />
          </div>

          <div className="absolute -bottom-3 left-6 md:left-10">
            <MonoLabel withDot tone="live">Live operator dashboard · demo data</MonoLabel>
          </div>
        </div>

        <div className="mt-24 md:mt-32 pb-12">
          <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-2 mb-8">
            Operating systems live for
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-y-6 gap-x-4 items-center justify-items-center opacity-70">
            {[
              "Manufacturing",
              "Trades",
              "Engineering",
              "Plant hire",
              "Roofing",
              "Agencies",
              "Careers SaaS",
            ].map((label) => (
              <div
                key={label}
                className="font-display text-[14px] md:text-[15px] text-cream/70 tracking-[-0.01em]"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-obsidian pointer-events-none" />
    </section>
  );
}
