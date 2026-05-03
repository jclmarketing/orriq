import { UiPanel } from "@/components/shared/ui-panel";

/**
 * Asana-style layered hero composition.
 *
 * Layout (desktop):
 *   - Main panel centred, slight forward tilt
 *   - Top-right satellite tilts away (route map)
 *   - Bottom-left satellite tilts toward viewer (calls)
 *   - Bottom-right satellite tucked behind (schedule)
 *
 * Mobile collapses satellites — only the main panel renders to keep the LCP fast.
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
            "radial-gradient(60% 50% at 50% 45%, rgba(34,211,238,0.55) 0%, rgba(167,139,250,0.28) 40%, transparent 78%)",
        }}
      />

      {/* Main panel — JCL pipeline */}
      <UiPanel
        priority
        src="/assets/ui-video/jcl-pipeline.mp4"
        poster="/assets/ui/jcl-pipeline.png"
        alt="JCL CRM pipeline dashboard"
        url="jcl.orriq.app / deals"
        className="relative z-20 mx-auto w-[88%] md:w-[78%] origin-center [transform:rotateX(6deg)_rotateY(-2deg)]"
      />

      {/* Top-right satellite — Mighty route planner */}
      <UiPanel
        src="/assets/ui-video/mighty-route.mp4"
        poster="/assets/ui/mighty-route.png"
        alt="Mighty CRM route planner"
        url="mighty.orriq.app / routes"
        className="hidden md:block absolute top-[-4%] right-[-4%] z-30 w-[34%] origin-bottom-left [transform:rotateX(8deg)_rotateY(-14deg)_rotateZ(2.5deg)]"
      />

      {/* Bottom-left satellite — Sidekick calls */}
      <UiPanel
        src="/assets/ui-video/sidekick-calls.mp4"
        poster="/assets/ui/sidekick-calls.png"
        alt="Sidekick call logs"
        url="sidekick.orriq.app / calls"
        className="hidden md:block absolute bottom-[-10%] left-[-3%] z-30 w-[34%] origin-top-right [transform:rotateX(-6deg)_rotateY(12deg)_rotateZ(-3deg)]"
      />

      {/* Bottom-right satellite — AP Sweeper schedule (tucked behind, smaller) */}
      <UiPanel
        src="/assets/ui-video/apsweeper-schedule.mp4"
        poster="/assets/ui/apsweeper-schedule.png"
        alt="AP Sweeper schedule"
        url="apsweeper.orriq.app / scheduler"
        className="hidden lg:block absolute bottom-[-14%] right-[-2%] z-10 w-[28%] origin-top-left [transform:rotateX(-4deg)_rotateY(-10deg)_rotateZ(2deg)] opacity-95"
      />
    </div>
  );
}
