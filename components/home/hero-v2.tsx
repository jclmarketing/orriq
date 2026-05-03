import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shared/button";
import { DotGrid } from "@/components/shared/dot-grid";
import { MonoLabel } from "@/components/shared/mono-label";
import { ArrowUpRight } from "lucide-react";

export function HeroV2() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-0">
      <DotGrid className="opacity-50" />

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[1100px] rounded-full glow-cyan opacity-60 anim-pulse-slow" />
        <div className="absolute top-40 -right-40 h-[500px] w-[500px] rounded-full glow-violet opacity-50 anim-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center gap-7 max-w-[60ch] mx-auto pt-8 pb-10 md:pt-10 md:pb-14">
          <Link
            href="/work/jcl-crm"
            className="group inline-flex items-center gap-3 rounded-full glass px-3.5 py-1.5 anim-fade-up"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-cream/85">
              v0.7 · JCL CRM multi-tenant core shipped
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-cream/60 group-hover:text-cream transition-colors" />
          </Link>

          <h1
            className="anim-fade-up text-[clamp(2.5rem,6.5vw,5.75rem)] leading-[0.95] tracking-[-0.04em] text-cream font-semibold"
            style={{ animationDelay: "60ms" }}
          >
            The{" "}
            <span className="text-gradient-cyan">operating system</span>{" "}
            your business{" "}
            <span className="text-fog">should already be running.</span>
          </h1>

          <p
            className="anim-fade-up max-w-[58ch] text-[16.5px] md:text-[18px] leading-[1.55] text-cream/70 font-normal"
            style={{ animationDelay: "140ms" }}
          >
            Orriq is the bespoke CRM, AI, and automation layer that replaces
            the patchwork of generic SaaS your business is duct-taped together
            with. One platform. Your schema. Your data.
          </p>

          <div
            className="anim-fade-up flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "220ms" }}
          >
            <Button href="/get-started" size="lg" trailingArrow>
              Book a 30-min scope call
            </Button>
            <Button href="#tour" variant="secondary" size="lg">
              See the platform
            </Button>
          </div>

          <div
            className="anim-fade-up flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-3 text-fog font-mono text-[10.5px] uppercase tracking-[0.18em]"
            style={{ animationDelay: "300ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              7 systems shipped
            </span>
            <span className="text-fog-2">·</span>
            <span>30-day live, or you don't pay</span>
            <span className="text-fog-2">·</span>
            <span>You own the code</span>
          </div>
        </div>

        <div
          className="relative mx-auto max-w-[1100px] anim-fade-up"
          style={{ animationDelay: "380ms" }}
        >
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[40px] opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(34,211,238,0.5) 0%, rgba(167,139,250,0.25) 40%, transparent 75%)",
            }}
          />
          <div className="relative rounded-2xl md:rounded-3xl glass-strong overflow-hidden shadow-glow-soft">
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
              className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent pointer-events-none"
            />
          </div>

          <div className="absolute -bottom-3 left-6 md:left-10">
            <div className="glass rounded-full px-3 py-1.5">
              <MonoLabel withDot tone="live">Live operator dashboard · demo data</MonoLabel>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 pb-14">
          <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-2 mb-7">
            Operating systems live for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
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
                className="glass rounded-full px-4 py-2 text-[13px] font-medium text-cream/80"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
