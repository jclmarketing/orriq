import Link from "next/link";
import { Button } from "@/components/shared/button";
import { DotGrid } from "@/components/shared/dot-grid";
import { MonoLabel } from "@/components/shared/mono-label";
import { BrandLogo } from "@/components/shared/brand-logo";
import { HeroStack } from "@/components/home/hero-stack";

const HERO_PROOF_BRANDS = [
  "McDonald's",
  "Jaguar Land Rover",
  "Starbucks",
  "Amazon",
  "Johnson & Johnson",
];

const SERVICE_PILLS = [
  { label: "Websites", href: "/services/websites" },
  { label: "Hosting & care", href: "/services/hosting" },
  { label: "Orriq CRM", href: "/services/crm" },
  { label: "Bespoke platforms", href: "/services/bespoke-crm" },
  { label: "Automation", href: "/services/custom-solutions" },
  { label: "Apps", href: "/services/app-development" },
  { label: "AI & voice", href: "/services/ai-agents" },
  { label: "SEO & ads", href: "/services/seo-and-ads" },
];

export function HeroV2() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-0">
      <DotGrid className="opacity-50" />

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[1100px] rounded-full glow-cyan opacity-60 anim-pulse-slow" />
        <div className="absolute top-40 -right-40 h-[500px] w-[500px] rounded-full glow-violet opacity-50 anim-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center gap-7 max-w-[62ch] mx-auto pt-8 pb-10 md:pt-10 md:pb-14">
          <MonoLabel tone="accent" withDot className="anim-fade-up">
            Websites · Hosting · CRM · Apps · Automation · AI
          </MonoLabel>

          <h1
            className="anim-fade-up text-[clamp(2.5rem,6.5vw,5.75rem)] leading-[0.95] tracking-[-0.04em] text-cream font-semibold"
            style={{ animationDelay: "60ms" }}
          >
            Everything your business{" "}
            <span className="text-gradient-cyan">runs on,</span>{" "}
            <span className="text-fog">built by one team.</span>
          </h1>

          <p
            className="anim-fade-up max-w-[58ch] text-[16.5px] md:text-[18px] leading-[1.55] text-cream/70 font-normal"
            style={{ animationDelay: "140ms" }}
          >
            Orriq builds and runs the website that brings the work in, the CRM
            that manages it, the apps your crews use in the field and the
            automations and AI agents in between. Shaped to your business, on
            infrastructure you own.
          </p>

          <div
            className="anim-fade-up flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "220ms" }}
          >
            <Button href="/get-started" size="lg" trailingArrow>
              Book a 30-min scope call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See what we do
            </Button>
          </div>

          <div
            className="anim-fade-up flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-3 text-fog font-mono text-[10.5px] uppercase tracking-[0.18em]"
            style={{ animationDelay: "300ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              90+ sites hosted
            </span>
            <span className="text-fog-2">·</span>
            <span>7 operating systems live</span>
            <span className="text-fog-2">·</span>
            <span>You own the code</span>
          </div>

          <div
            className="anim-fade-up flex flex-col items-center gap-4 pt-6 w-full"
            style={{ animationDelay: "380ms" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-2">
              Founders&apos; delivery experience inside enterprise environments at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-70">
              {HERO_PROOF_BRANDS.map((b) => (
                <BrandLogo key={b} name={b} size="h-5 md:h-6" iconOnly />
              ))}
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto pt-6 pb-24 md:pb-32 anim-fade-up"
          style={{ animationDelay: "380ms" }}
        >
          <HeroStack />

          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-40">
            <div className="glass rounded-full px-3 py-1.5">
              <MonoLabel withDot tone="live">Live operator dashboards · mockup data</MonoLabel>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 pb-14">
          <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-2 mb-7">
            Pick the thing you need first
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SERVICE_PILLS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="glass rounded-full px-4 py-2 text-[13px] font-medium text-cream/80 hover:text-cream hover:bg-white/[0.08] transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
