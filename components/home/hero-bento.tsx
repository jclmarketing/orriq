import Link from "next/link";
import {
  Globe,
  Database,
  Smartphone,
  Workflow,
  Bot,
  Server,
  ArrowUpRight,
  Check,
} from "lucide-react";

/**
 * Branded hero composition: six glass tiles, one per part of the offering,
 * each with an abstract illustration built from CSS and SVG. No screenshots,
 * no customer data. Everything shown is decorative placeholder.
 */

function Tile({
  href,
  icon: Icon,
  label,
  stat,
  className,
  children,
}: {
  href: string;
  icon: typeof Globe;
  label: string;
  stat: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl glass hover:border-white/20 transition-colors flex flex-col ${className ?? ""}`}
    >
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md hairline-strong bg-obsidian-3">
            <Icon className="h-3.5 w-3.5 text-cream" strokeWidth={1.6} />
          </div>
          <span className="text-[13px] font-medium text-cream/90">{label}</span>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 text-fog group-hover:text-cream transition-colors" />
      </div>
      <div className="relative flex-1 px-5 pt-4 pb-2 min-h-0 overflow-hidden">{children}</div>
      <div className="relative z-10 px-5 pb-4 pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog-2 bg-gradient-to-t from-obsidian/60 to-transparent">
        {stat}
      </div>
    </Link>
  );
}

function Bar({ w, tone = "cream" }: { w: string; tone?: "cream" | "accent" | "dim" }) {
  const cls =
    tone === "accent"
      ? "bg-gradient-accent opacity-80"
      : tone === "dim"
        ? "bg-white/10"
        : "bg-white/25";
  return <div className={`h-1.5 rounded-full ${cls}`} style={{ width: w }} />;
}

export function HeroBento() {
  return (
    <div className="relative mx-auto w-full max-w-[1180px]">
      <div
        aria-hidden
        className="absolute -inset-10 rounded-[48px] opacity-60 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(45,212,191,0.35) 0%, rgba(168,85,247,0.22) 45%, transparent 78%)",
        }}
      />

      <div className="relative grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-6 auto-rows-[190px] md:auto-rows-[220px]">
        {/* Website: browser frame with hero skeleton */}
        <Tile
          href="/services/websites"
          icon={Globe}
          label="Websites"
          stat="Ranking · under 300ms"
          className="col-span-2 md:col-span-3 md:row-span-2"
        >
          <div className="h-full rounded-xl hairline bg-obsidian/70 overflow-hidden flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="ml-2 h-1.5 w-24 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 p-4 md:p-5 grid md:grid-cols-5 gap-4">
              <div className="md:col-span-3 flex flex-col gap-2.5 justify-center">
                <Bar w="30%" tone="accent" />
                <div className="h-3 w-[85%] rounded bg-white/30" />
                <div className="h-3 w-[65%] rounded bg-white/30" />
                <div className="mt-1 space-y-1.5">
                  <Bar w="90%" tone="dim" />
                  <Bar w="75%" tone="dim" />
                </div>
                <div className="mt-2 flex gap-2">
                  <span className="h-6 w-20 rounded-full bg-gradient-accent opacity-90" />
                  <span className="h-6 w-16 rounded-full hairline-strong" />
                </div>
              </div>
              <div className="hidden md:block md:col-span-2 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 via-obsidian-3 to-violet/30" />
                <div className="absolute inset-0 bg-grid-fine opacity-60" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 px-4 pb-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-9 rounded-md hairline bg-white/[0.03] px-2 py-1.5 space-y-1">
                  <Bar w="60%" tone="cream" />
                  <Bar w="85%" tone="dim" />
                </div>
              ))}
            </div>
          </div>
        </Tile>

        {/* CRM: pipeline columns */}
        <Tile
          href="/services/crm"
          icon={Database}
          label="CRM"
          stat="Pipeline · quotes · invoices"
          className="col-span-2 md:col-span-3"
        >
          <div className="grid grid-cols-3 gap-2 h-full">
            {[
              { t: "Lead", n: 2, tone: "cyan" },
              { t: "Quoted", n: 2, tone: "violet" },
              { t: "Won", n: 1, tone: "cream" },
            ].map((c) => (
              <div key={c.t} className="rounded-lg hairline bg-obsidian/60 p-2 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-fog">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      c.tone === "cyan" ? "bg-cyan" : c.tone === "violet" ? "bg-violet" : "bg-cream/70"
                    }`}
                  />
                  {c.t}
                </div>
                {Array.from({ length: c.n }).map((_, i) => (
                  <div key={i} className="rounded-md bg-white/[0.05] hairline p-1.5 space-y-1">
                    <Bar w={`${70 - i * 12}%`} tone="cream" />
                    <div className="flex items-center justify-between">
                      <Bar w="35%" tone="dim" />
                      <span className="h-3.5 w-3.5 rounded-full bg-gradient-accent opacity-70" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Tile>

        {/* Apps: phone with widgets */}
        <Tile
          href="/services/app-development"
          icon={Smartphone}
          label="Apps"
          stat="iOS · watch"
          className="md:col-span-1 md:row-span-1"
        >
          <div className="mx-auto h-full max-w-[96px] rounded-[18px] hairline-strong bg-obsidian/70 p-2 flex flex-col gap-1.5">
            <div className="mx-auto h-1 w-8 rounded-full bg-white/15" />
            <div className="grid grid-cols-2 gap-1.5 mt-1">
              <div className="aspect-square rounded-md bg-gradient-accent opacity-80" />
              <div className="aspect-square rounded-md hairline bg-white/[0.04]" />
              <div className="col-span-2 h-8 rounded-md hairline bg-white/[0.04] p-1.5 space-y-1">
                <Bar w="70%" tone="cream" />
                <Bar w="45%" tone="dim" />
              </div>
            </div>
          </div>
        </Tile>

        {/* Automation: node graph */}
        <Tile
          href="/services/custom-solutions"
          icon={Workflow}
          label="Automation"
          stat="Runs while you sleep"
          className="md:col-span-2"
        >
          <svg viewBox="0 0 240 90" className="h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="hb-line" x1="0" x2="1">
                <stop offset="0" stopColor="#2DD4BF" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
            <path d="M28 45 C70 45, 70 20, 112 20 S154 45, 196 45" fill="none" stroke="url(#hb-line)" strokeWidth="1.5" opacity="0.7" />
            <path d="M28 45 C70 45, 70 70, 112 70 S154 45, 196 45" fill="none" stroke="url(#hb-line)" strokeWidth="1.5" opacity="0.4" />
            {[
              [28, 45],
              [112, 20],
              [112, 70],
              [196, 45],
            ].map(([x, y], i) => (
              <g key={i}>
                <rect x={x - 16} y={y - 10} width="32" height="20" rx="6" fill="#0F1014" stroke="rgba(255,255,255,0.14)" />
                <rect x={x - 9} y={y - 2} width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.35)" />
              </g>
            ))}
            <circle cx="196" cy="45" r="3" fill="#2DD4BF" />
          </svg>
        </Tile>

        {/* AI & voice: waveform + reply */}
        <Tile
          href="/services/ai-agents"
          icon={Bot}
          label="AI & voice"
          stat="Answers · quotes · books"
          className="md:col-span-3"
        >
          <div className="h-full flex flex-col justify-center gap-3">
            <div className="flex items-end gap-[3px] h-8">
              {[3, 6, 10, 16, 22, 14, 8, 18, 26, 20, 12, 6, 9, 15, 24, 17, 10, 5, 8, 12, 6, 3].map((h, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-gradient-accent opacity-80"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="rounded-lg hairline bg-obsidian/60 p-2.5 space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan">
                <Check className="h-3 w-3" strokeWidth={2} /> Quote captured
              </div>
              <Bar w="88%" tone="cream" />
              <Bar w="55%" tone="dim" />
            </div>
          </div>
        </Tile>

        {/* Hosting: uptime bars */}
        <Tile
          href="/services/hosting"
          icon={Server}
          label="Hosting"
          stat="Monitored · backed up"
          className="md:col-span-3"
        >
          <div className="h-full flex flex-col justify-center gap-2.5 max-w-[420px]">
            {[100, 100, 99.9, 100].map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex-1 flex gap-[2px]">
                  {Array.from({ length: 14 }).map((_, j) => (
                    <span
                      key={j}
                      className={`h-3 flex-1 rounded-[2px] ${
                        i === 2 && j === 9 ? "bg-violet/70" : "bg-cyan/60"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-mono text-[9px] text-fog w-9 text-right">{v}%</span>
              </div>
            ))}
          </div>
        </Tile>
      </div>
    </div>
  );
}
