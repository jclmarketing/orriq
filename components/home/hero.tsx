import Link from "next/link";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex items-center">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <GradientOrb
          variant="violet"
          className="h-[680px] w-[680px] -top-40 -left-40 opacity-50"
        />
        <GradientOrb
          variant="cyan"
          className="h-[560px] w-[560px] top-60 -right-40 opacity-40"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-14 pt-24 pb-24">
        <div className="flex flex-col items-start gap-10 md:gap-12">
          <Link
            href="/work/jcl-crm"
            className="group inline-flex items-center gap-3 rounded-full hairline bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm hover:bg-white/[0.06] transition-colors anim-fade-up"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            <span className="text-[12px] text-cream/80 font-mono tracking-[0.06em]">
              New case study — JCL CRM multi-tenant core
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-cream/60 group-hover:text-cream transition-colors" />
          </Link>

          <h1
            className="font-display max-w-[16ch] text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.035em] text-cream anim-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Software built around{" "}
            <span className="italic text-gradient-accent">your business.</span>
            <span className="block text-fog/90 italic font-normal text-[0.8em] mt-3">
              Not the other way around.
            </span>
          </h1>

          <p
            className="max-w-[56ch] text-[17px] md:text-[19px] leading-[1.55] text-cream/75 anim-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Orriq is the operational layer for companies that refuse to squeeze
            themselves into generic SaaS. Bespoke CRM, AI, and automation —
            built to fit how you actually work. Owned by you. Built on modern
            infrastructure. Shipped in weeks.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 anim-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/get-started" size="lg" trailingArrow>
              Start a build
            </Button>
            <Button href="/platform" variant="secondary" size="lg">
              See the platform
            </Button>
          </div>

          <div
            className="grid grid-cols-3 gap-8 md:gap-14 pt-8 anim-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {[
              { k: "Bespoke", v: "Every schema, every flow — shaped to your business." },
              { k: "Owned", v: "Your Supabase. Your code. No per-seat vendor tax." },
              { k: "Shipped", v: "Live in weeks, not the six-month SaaS rollout." },
            ].map((item) => (
              <div key={item.k} className="max-w-xs">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan/80">
                  {item.k}
                </div>
                <div className="mt-2 text-[14px] leading-relaxed text-cream/70">
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-obsidian" />
    </section>
  );
}
