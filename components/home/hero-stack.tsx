import { UiPanel } from "@/components/shared/ui-panel";

/**
 * Layered hero composition of real product screenshots.
 *
 * Layout (desktop):
 *   - Main panel centred, slight forward tilt (JCL CRM pipeline)
 *   - Top-right satellite tilts away (Mighty route planner)
 *   - Bottom-left satellite tilts toward viewer (Garage Roof Company call logs)
 *   - Bottom-right satellite tucked behind (AP Sweeper Hire scheduler)
 *
 * Mobile collapses satellites: only the main panel renders to keep the LCP fast.
 */
export function HeroStack() {
  return (
    <div
      className="relative mx-auto w-full max-w-[1180px]"
      style={{ perspective: "1800px" }}
    >
      {/* Glow halo behind the stack */}
      <div
        aria-hidden
        className="absolute -inset-12 rounded-[48px] opacity-60 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 45%, rgba(45,212,191,0.55) 0%, rgba(168,85,247,0.28) 40%, transparent 78%)",
        }}
      />

      <UiPanel
        priority
        image="/assets/ui/jcl-pipeline.png"
        alt="Orriq CRM pipeline board"
        url="crm.orriq.com / deals"
        className="relative z-20 mx-auto w-[88%] md:w-[78%] origin-center [transform:rotateX(6deg)_rotateY(-2deg)]"
      />

      <UiPanel
        image="/assets/ui/mighty-route.png"
        alt="Mighty CRM route planner"
        url="crm.mightystructural.com / routes"
        className="hidden md:block absolute top-[-4%] right-[-4%] z-30 w-[34%] origin-bottom-left [transform:rotateX(8deg)_rotateY(-14deg)_rotateZ(2.5deg)]"
      />

      <UiPanel
        image="/assets/ui/sidekick-calls.png"
        alt="Garage Roof Company CRM AI call logs"
        url="crm.garageroofcompany.co.uk / calls"
        className="hidden md:block absolute bottom-[-10%] left-[-3%] z-30 w-[34%] origin-top-right [transform:rotateX(-6deg)_rotateY(12deg)_rotateZ(-3deg)]"
      />

      <UiPanel
        image="/assets/ui/apsweeper-schedule.png"
        alt="AP Sweeper Hire job scheduler"
        url="crm.apsweeperhire.co.uk / scheduler"
        className="hidden lg:block absolute bottom-[-14%] right-[-2%] z-10 w-[28%] origin-top-left [transform:rotateX(-4deg)_rotateY(-10deg)_rotateZ(2deg)] opacity-95"
      />
    </div>
  );
}
