import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Button } from "@/components/shared/button";

const phases = [
  {
    when: "Pre-engagement",
    title: "Discovery & outcome definition",
    body: "We map your tools, data, and processes. We define the live-by-day-30 outcome. If we can't deliver it, we tell you before we engage.",
  },
  {
    when: "Week 1",
    title: "Schema, access, environment",
    body: "Tenant spun up. Database modelled. Auth, roles, integrations wired. By Friday you log into a working shell.",
  },
  {
    when: "Week 2",
    title: "Core build & integration",
    body: "Your defined modules — pipeline, jobs, quotes, automations — built and tested in your tenant against real data structures.",
  },
  {
    when: "Week 3",
    title: "AI, automation, validation",
    body: "Agents wired in. Workflows orchestrated. Your team validates against the actual operation, not a sandbox.",
  },
  {
    when: "Week 4",
    title: "Cutover, training, live",
    body: "Production cutover. Team trained. Documentation handed over. Day 30 ends with the system live and owned by you.",
  },
];

export function Promise() {
  return (
    <Section className="py-28 md:py-36" id="promise">
      <div className="max-w-[60ch] mb-16">
        <MonoLabel tone="accent" withDot>
          The promise
        </MonoLabel>
        <h2 className="mt-5 font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em]">
          Live in 30 days.{" "}
          <span className="italic text-gradient-accent">Or you don't pay.</span>
        </h2>
        <p className="mt-5 text-[15.5px] leading-[1.6] text-cream/70">
          We agree the outcome before we engage. If your operating system isn't
          live within 30 days, the build is on us. No partial credit. No
          renegotiated scope. No exceptions.
        </p>
      </div>

      <div className="relative grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-5">
        {phases.map((p, i) => (
          <div
            key={i}
            className="relative bg-obsidian p-6 md:p-7 flex flex-col gap-3 min-h-[260px]"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-cyan/80">
              {p.when}
            </div>
            <div className="font-sans font-semibold tracking-tight text-[18px] leading-[1.15] tracking-[-0.015em] mt-1">
              {p.title}
            </div>
            <p className="text-[13px] leading-[1.55] text-cream/65 mt-1">
              {p.body}
            </p>
            <div className="mt-auto pt-4 hairline-t flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-2">
                Phase 0{i + 1}
              </span>
              <span className="h-1 w-1 rounded-full bg-cyan/70" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-4 max-w-[1100px]">
        {[
          { k: "Single team", v: "No offshore handoffs, no agency layer-cake. The two people on the call are the two people who build it." },
          { k: "Fixed scope", v: "Outcomes defined, written down, signed off. Scope creep is our problem, not yours." },
          { k: "Visible weekly", v: "Working software every Friday. No deck-driven status updates." },
          { k: "Owned at handover", v: "Code, database, documentation. Yours forever — we just keep building." },
        ].map((c) => (
          <div key={c.k} className="flex flex-col gap-2">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-cyan/80">{c.k}</div>
            <div className="text-[13.5px] leading-[1.55] text-cream/70">{c.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button href="/get-started" size="lg" trailingArrow>
          Book a 30-minute scope call
        </Button>
        <Button href="/work" variant="secondary" size="lg">
          See what we've shipped
        </Button>
      </div>
    </Section>
  );
}
