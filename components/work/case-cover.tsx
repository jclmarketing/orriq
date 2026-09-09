import { Fragment } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

/**
 * Branded, code-drawn cover for a case study. Fills its parent (position the
 * parent relative with an aspect ratio). Nothing here is a screenshot and
 * nothing is real data: every bar, pin and bubble is decorative.
 */

type Kind = CaseStudy["cover"];
type Hue = CaseStudy["hue"];

const HUE_BG: Record<Hue, string> = {
  cyan: "radial-gradient(70% 60% at 85% 10%, rgba(45,212,191,0.30), transparent 65%), radial-gradient(60% 50% at 10% 100%, rgba(168,85,247,0.14), transparent 65%)",
  violet:
    "radial-gradient(70% 60% at 85% 10%, rgba(168,85,247,0.30), transparent 65%), radial-gradient(60% 50% at 10% 100%, rgba(45,212,191,0.14), transparent 65%)",
  mixed:
    "radial-gradient(60% 50% at 100% 0%, rgba(45,212,191,0.28), transparent 65%), radial-gradient(60% 50% at 0% 100%, rgba(168,85,247,0.26), transparent 65%)",
};

function Bar({ w, tone = "cream", h = "h-1.5" }: { w: string; tone?: "cream" | "accent" | "dim" | "strong"; h?: string }) {
  const cls =
    tone === "accent"
      ? "bg-gradient-accent opacity-85"
      : tone === "dim"
        ? "bg-white/10"
        : tone === "strong"
          ? "bg-white/40"
          : "bg-white/22";
  return <div className={cn(h, "rounded-full", cls)} style={{ width: w }} />;
}

function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-xl hairline-strong bg-obsidian/75 backdrop-blur-sm overflow-hidden", className)}>
      {children}
    </div>
  );
}

function Chrome({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      {label && <span className="ml-2 font-mono text-[9px] text-cream/40 tracking-tight">{label}</span>}
    </div>
  );
}

/* ---------- illustrations ---------- */

function Board() {
  const cols = [
    { t: "Lead", n: 3, dot: "bg-cyan" },
    { t: "Quoted", n: 2, dot: "bg-violet" },
    { t: "Scheduled", n: 2, dot: "bg-cream/70" },
    { t: "Invoiced", n: 1, dot: "bg-cyan" },
  ];
  return (
    <Panel className="absolute left-[8%] right-[8%] top-[12%] bottom-[12%] flex flex-col">
      <Chrome label="pipeline" />
      <div className="flex-1 grid grid-cols-4 gap-2 p-3">
        {cols.map((c) => (
          <div key={c.t} className="rounded-lg hairline bg-white/[0.02] p-2 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-fog">
              <span className={cn("h-1.5 w-1.5 rounded-full", c.dot)} />
              {c.t}
            </div>
            {Array.from({ length: c.n }).map((_, i) => (
              <div key={i} className="rounded-md bg-white/[0.05] hairline p-1.5 space-y-1">
                <Bar w={`${72 - i * 14}%`} />
                <div className="flex items-center justify-between">
                  <Bar w="34%" tone="dim" />
                  <span className="h-3 w-3 rounded-full bg-gradient-accent opacity-70" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Routes() {
  const pins = [
    [38, 30], [52, 26], [61, 40], [47, 48], [70, 56], [58, 66], [42, 62], [66, 34],
  ];
  return (
    <Panel className="absolute left-[8%] right-[8%] top-[12%] bottom-[12%]">
      <Chrome label="routes · week 22" />
      <svg viewBox="0 0 100 60" className="absolute inset-x-0 bottom-0 top-8 w-full h-[calc(100%-2rem)]" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="cc-route" x1="0" x2="1">
            <stop offset="0" stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.3">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" x2="100" y1={i * 7.5} y2={i * 7.5} />
          ))}
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} y1="0" y2="60" x1={i * 8.3} x2={i * 8.3} />
          ))}
        </g>
        <path d="M38 30 C45 22, 58 22, 61 40 S50 52, 47 48 S66 60, 70 56 S60 70, 58 66 S44 66, 42 62" fill="none" stroke="url(#cc-route)" strokeWidth="0.9" strokeLinecap="round" opacity="0.9" />
        {pins.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="2.6" fill="#0F1014" stroke={i % 3 === 0 ? "#A855F7" : "#2DD4BF"} strokeWidth="0.7" />
            <circle cx={x} cy={y} r="0.9" fill={i % 3 === 0 ? "#A855F7" : "#2DD4BF"} />
          </g>
        ))}
      </svg>
      <div className="absolute right-3 top-11 w-[30%] space-y-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md hairline bg-obsidian/80 p-2 space-y-1">
            <div className="flex items-center gap-1.5">
              <span className={cn("h-1.5 w-1.5 rounded-full", i === 1 ? "bg-violet" : "bg-cyan")} />
              <Bar w="55%" tone="strong" />
            </div>
            <Bar w="80%" tone="dim" />
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Browser({ dark = false }: { dark?: boolean }) {
  return (
    <Panel className="absolute left-[8%] right-[8%] top-[12%] bottom-[12%] flex flex-col">
      <Chrome label="www" />
      <div className={cn("flex-1 flex flex-col", dark ? "bg-obsidian-3" : "bg-white/[0.03]")}>
        <div className="flex items-center justify-between px-4 py-2">
          <Bar w="16%" tone="strong" h="h-2" />
          <div className="flex gap-2">
            <Bar w="28px" tone="dim" />
            <Bar w="28px" tone="dim" />
            <Bar w="28px" tone="dim" />
            <span className="h-3 w-12 rounded-full bg-gradient-accent opacity-85" />
          </div>
        </div>
        <div className="flex-1 grid grid-cols-5 gap-3 px-4 py-2">
          <div className="col-span-3 flex flex-col justify-center gap-2">
            <Bar w="28%" tone="accent" />
            <div className="h-3 w-[88%] rounded bg-white/35" />
            <div className="h-3 w-[62%] rounded bg-white/35" />
            <Bar w="80%" tone="dim" />
            <Bar w="70%" tone="dim" />
            <div className="mt-1 flex gap-2">
              <span className="h-5 w-16 rounded-full bg-gradient-accent opacity-90" />
              <span className="h-5 w-14 rounded-full hairline-strong" />
            </div>
          </div>
          <div className="col-span-2 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/35 via-obsidian-3 to-violet/35" />
            <div className="absolute inset-0 bg-grid-fine opacity-70" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 px-4 pb-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-8 rounded-md hairline bg-white/[0.03] px-2 py-1.5 space-y-1">
              <Bar w="60%" />
              <Bar w="85%" tone="dim" />
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function Storefront() {
  return (
    <Panel className="absolute left-[8%] right-[8%] top-[12%] bottom-[12%] flex flex-col">
      <Chrome label="shop · made to measure" />
      <div className="flex-1 grid grid-cols-3 gap-3 p-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg hairline bg-white/[0.03] p-2 flex flex-col gap-2">
            <div className="relative h-[46%] rounded-md overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    i === 1
                      ? "linear-gradient(135deg, rgba(168,85,247,0.45), rgba(15,16,20,1))"
                      : "linear-gradient(135deg, rgba(45,212,191,0.45), rgba(15,16,20,1))",
                }}
              />
              <div className="absolute inset-x-2 bottom-2 space-y-[3px]">
                {[0, 1, 2, 3].map((j) => (
                  <div key={j} className="h-[3px] rounded-full bg-white/20" />
                ))}
              </div>
            </div>
            <Bar w="70%" tone="strong" />
            <Bar w="45%" tone="dim" />
            <div className="mt-auto flex items-center justify-between">
              <Bar w="30%" tone="accent" h="h-2" />
              <span className="h-4 w-10 rounded-full hairline-strong" />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Chat() {
  return (
    <div className="absolute left-[14%] right-[14%] top-[10%] bottom-[10%] flex flex-col justify-center gap-2.5">
      <div className="self-end max-w-[70%] rounded-2xl rounded-br-md px-3.5 py-2.5 space-y-1.5 hairline" style={{ background: "linear-gradient(135deg, rgba(45,212,191,0.28), rgba(168,85,247,0.28))" }}>
        <Bar w="160px" tone="strong" />
        <Bar w="110px" />
      </div>
      <div className="self-start max-w-[78%] rounded-2xl rounded-bl-md px-3.5 py-2.5 space-y-1.5 hairline bg-obsidian/85">
        <div className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-cyan">Draft invoice</div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center justify-between gap-6 border-t border-white/5 pt-1">
            <Bar w={`${90 - i * 20}px`} />
            <Bar w="34px" tone="dim" />
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-white/10 pt-1">
          <Bar w="40px" tone="strong" />
          <Bar w="44px" tone="strong" />
        </div>
      </div>
      <div className="self-end rounded-2xl rounded-br-md px-3.5 py-2 hairline" style={{ background: "linear-gradient(135deg, rgba(45,212,191,0.28), rgba(168,85,247,0.28))" }}>
        <Bar w="36px" tone="strong" />
      </div>
      <div className="self-start rounded-2xl rounded-bl-md px-3.5 py-2 hairline bg-obsidian/85 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
        <Bar w="150px" />
      </div>
    </div>
  );
}

function Schedule() {
  const rows = 4;
  const cols = 5;
  const blocks: Record<string, "c" | "v" | "n"> = {
    "0-0": "c", "0-2": "c", "1-1": "v", "1-2": "v", "1-3": "v", "2-0": "c", "2-4": "c", "3-1": "v", "3-3": "c",
  };
  return (
    <Panel className="absolute left-[8%] right-[8%] top-[12%] bottom-[12%] flex flex-col">
      <Chrome label="scheduler · week" />
      <div className="flex-1 p-3 grid" style={{ gridTemplateColumns: `1.2fr repeat(${cols}, 1fr)`, gridTemplateRows: `auto repeat(${rows}, 1fr)`, gap: "4px" }}>
        <div />
        {Array.from({ length: cols }).map((_, c) => (
          <div key={`h${c}`} className="font-mono text-[8px] uppercase tracking-[0.16em] text-fog text-center pb-1">
            {["Mon", "Tue", "Wed", "Thu", "Fri"][c]}
          </div>
        ))}
        {Array.from({ length: rows }).map((_, r) => (
          <Fragment key={r}>
            <div className="flex items-center gap-1.5 pr-2">
              <span className={cn("h-1.5 w-1.5 rounded-full", r % 2 ? "bg-violet" : "bg-cyan")} />
              <Bar w="70%" />
            </div>
            {Array.from({ length: cols }).map((_, c) => {
              const k = blocks[`${r}-${c}`];
              return (
                <div key={`${r}-${c}`} className="rounded-md hairline bg-white/[0.02] p-1">
                  {k && (
                    <div
                      className={cn(
                        "h-full rounded-[4px] p-1 space-y-[3px]",
                        k === "c" ? "bg-cyan/20 border-l-2 border-cyan" : "bg-violet/20 border-l-2 border-violet",
                      )}
                    >
                      <Bar w="80%" tone="strong" h="h-1" />
                      <Bar w="50%" tone="dim" h="h-1" />
                    </div>
                  )}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </Panel>
  );
}

function Forms() {
  return (
    <Panel className="absolute left-[8%] right-[8%] top-[12%] bottom-[12%] flex">
      <div className="w-[34%] border-r border-white/5 p-3 space-y-2">
        <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-fog">Fields</div>
        {["Text", "Photo", "Signature", "Checklist", "Date", "Yes / No"].map((f, i) => (
          <div key={f} className="flex items-center gap-2 rounded-md hairline bg-white/[0.03] px-2 py-1.5">
            <span className={cn("h-2 w-2 rounded-[3px]", i % 3 === 0 ? "bg-cyan/70" : i % 3 === 1 ? "bg-violet/70" : "bg-white/30")} />
            <span className="text-[9.5px] text-cream/70">{f}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-[45%] rounded bg-white/35" />
          <span className="h-4 w-14 rounded-full bg-gradient-accent opacity-85" />
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg hairline bg-white/[0.03] p-2 space-y-1.5">
            <div className="flex items-center justify-between">
              <Bar w={`${55 - i * 8}%`} tone="strong" />
              <span className="h-3 w-6 rounded-full bg-cyan/40 relative">
                <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-cyan" />
              </span>
            </div>
            <div className="h-5 rounded-md hairline bg-obsidian/70" />
          </div>
        ))}
        <div className="rounded-lg hairline bg-white/[0.03] p-2 flex items-center gap-2">
          <svg viewBox="0 0 120 24" className="h-5 w-24" aria-hidden>
            <path d="M4 18 C20 2, 30 26, 44 12 S70 4, 84 16 S104 8, 116 14" fill="none" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-fog">Signed</span>
        </div>
      </div>
    </Panel>
  );
}

function Wallet() {
  return (
    <div className="absolute left-[10%] right-[10%] top-[12%] bottom-[12%] grid grid-cols-5 gap-3">
      <Panel className="col-span-3 p-3 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-fog">Competitions</div>
          <Bar w="40px" tone="dim" />
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 flex-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg hairline bg-white/[0.03] p-1.5 flex flex-col gap-1.5">
              <div
                className="flex-1 rounded-md"
                style={{ background: i === 1 ? "linear-gradient(160deg, rgba(168,85,247,0.5), #0F1014)" : "linear-gradient(160deg, rgba(45,212,191,0.5), #0F1014)" }}
              />
              <Bar w="70%" tone="strong" />
              <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-accent" style={{ width: `${40 + i * 22}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <div className="col-span-2 flex flex-col gap-3">
        <Panel className="p-3 flex-1">
          <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-fog">Wallet</div>
          <div className="mt-2 h-4 w-[60%] rounded bg-white/40" />
          <div className="mt-2 space-y-1.5">
            <Bar w="80%" tone="dim" />
            <Bar w="65%" tone="dim" />
          </div>
        </Panel>
        <Panel className="p-3 flex-1 relative overflow-hidden">
          <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-cyan">Instant win</div>
          <div className="mt-2 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className={cn("h-7 w-7 rounded-md", i === 1 ? "bg-gradient-accent" : "hairline-strong bg-white/[0.04]")} />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Nodes() {
  const nodes: [number, number, string][] = [
    [18, 45, "Inbox"], [50, 22, "Match"], [50, 68, "Extract"], [82, 45, "Ledger"], [116, 45, "Notify"],
  ];
  return (
    <div className="absolute inset-[10%]">
      <svg viewBox="0 0 134 90" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="cc-nodes" x1="0" x2="1">
            <stop offset="0" stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <path d="M30 45 C40 45, 40 22, 50 22 M30 45 C40 45, 40 68, 50 68 M62 22 C72 22, 72 45, 82 45 M62 68 C72 68, 72 45, 82 45 M94 45 L104 45" fill="none" stroke="url(#cc-nodes)" strokeWidth="1.2" opacity="0.8" />
        {nodes.map(([x, y, t], i) => (
          <g key={t}>
            <rect x={x - 12} y={y - 8} width="24" height="16" rx="4" fill="#0F1014" stroke={i === 3 ? "#A855F7" : "rgba(255,255,255,0.16)"} strokeWidth="0.8" />
            <text x={x} y={y + 1.8} textAnchor="middle" fontSize="4.2" fill="rgba(245,245,247,0.85)" fontFamily="ui-monospace, monospace" letterSpacing="0.3">
              {t.toUpperCase()}
            </text>
          </g>
        ))}
        <circle cx="116" cy="45" r="14" fill="none" stroke="#2DD4BF" strokeWidth="0.6" opacity="0.5" />
      </svg>
    </div>
  );
}

function Cv() {
  return (
    <div className="absolute left-[12%] right-[12%] top-[12%] bottom-[12%] grid grid-cols-5 gap-3">
      <Panel className="col-span-3 p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-gradient-accent opacity-80" />
          <div className="space-y-1">
            <Bar w="90px" tone="strong" />
            <Bar w="60px" tone="dim" />
          </div>
        </div>
        {[0, 1, 2, 3, 4].map((i) => (
          <Bar key={i} w={`${92 - (i % 3) * 14}%`} tone={i === 0 ? "cream" : "dim"} />
        ))}
        <div className="pt-1 grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-6 rounded-md hairline bg-white/[0.03] px-2 py-1">
              <Bar w="70%" />
            </div>
          ))}
        </div>
      </Panel>
      <div className="col-span-2 flex flex-col gap-2">
        {[92, 81, 68].map((v, i) => (
          <Panel key={v} className="p-3 flex items-center justify-between">
            <div className="space-y-1">
              <Bar w="60px" tone="strong" />
              <Bar w="40px" tone="dim" />
            </div>
            <span
              className={cn(
                "font-mono text-[9px] px-1.5 py-0.5 rounded-full",
                i === 0 ? "bg-cyan/20 text-cyan" : "bg-white/[0.06] text-cream/70",
              )}
            >
              {v}%
            </span>
          </Panel>
        ))}
      </div>
    </div>
  );
}

function Portal() {
  return (
    <div className="absolute left-[10%] right-[10%] top-[12%] bottom-[12%] grid grid-cols-5 gap-3">
      <Panel className="col-span-2 p-4 flex flex-col justify-center gap-2">
        <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-violet">Members</div>
        <div className="h-3 w-[80%] rounded bg-white/35" />
        <div className="h-3 w-[55%] rounded bg-white/35" />
        <Bar w="90%" tone="dim" />
        <span className="mt-1 h-5 w-24 rounded-full bg-gradient-accent opacity-90" />
      </Panel>
      <div className="col-span-3 grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Panel key={i} className="p-2 flex flex-col gap-1.5">
            <span
              className="h-8 w-8 rounded-full"
              style={{ background: i % 2 ? "linear-gradient(135deg,#A855F7,#0F1014)" : "linear-gradient(135deg,#2DD4BF,#0F1014)" }}
            />
            <Bar w="80%" tone="strong" />
            <Bar w="55%" tone="dim" />
          </Panel>
        ))}
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-8">
      <div className="hidden sm:flex flex-col gap-2 w-[32%]">
        <Bar w="30%" tone="accent" />
        <div className="h-3 w-[90%] rounded bg-white/35" />
        <div className="h-3 w-[70%] rounded bg-white/35" />
        <Bar w="85%" tone="dim" />
        <Bar w="60%" tone="dim" />
        <div className="mt-1 flex gap-2">
          <span className="h-5 w-16 rounded-full bg-gradient-accent opacity-90" />
          <span className="h-5 w-16 rounded-full hairline-strong" />
        </div>
      </div>
      <div className="h-[78%] aspect-[9/17] rounded-[22px] hairline-strong bg-obsidian/85 p-2.5 flex flex-col gap-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="mx-auto h-1 w-10 rounded-full bg-white/15" />
        <div className="rounded-lg h-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/40 via-obsidian-3 to-violet/40" />
        </div>
        <Bar w="70%" tone="strong" />
        <Bar w="50%" tone="dim" />
        <div className="grid grid-cols-2 gap-1.5 mt-1">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-md hairline bg-white/[0.04] p-1.5 flex flex-col justify-end gap-1">
              <Bar w="70%" />
              <Bar w="40%" tone="dim" />
            </div>
          ))}
        </div>
        <span className="mt-auto h-6 w-full rounded-full bg-gradient-accent opacity-90" />
      </div>
    </div>
  );
}

const ART: Record<Kind, () => React.ReactElement> = {
  board: Board,
  routes: Routes,
  browser: () => <Browser />,
  storefront: Storefront,
  chat: Chat,
  schedule: Schedule,
  forms: Forms,
  wallet: Wallet,
  nodes: Nodes,
  cv: Cv,
  portal: Portal,
  phone: Phone,
};

export function CaseCover({
  study,
  className,
  showLabel = true,
}: {
  study: Pick<CaseStudy, "cover" | "hue" | "client">;
  className?: string;
  showLabel?: boolean;
}) {
  const Art = ART[study.cover];
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden bg-obsidian-2", className)}
      style={{ backgroundImage: HUE_BG[study.hue] }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <Art />
      {showLabel && (
        <div className="absolute left-4 bottom-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-cream/55">
          {study.client}
        </div>
      )}
    </div>
  );
}
