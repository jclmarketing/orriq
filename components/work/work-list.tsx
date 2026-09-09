"use client";

import { CaseCover } from "@/components/work/case-cover";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";
import { ArrowUpRight } from "lucide-react";

type Filter = "all" | CaseStudy["type"];

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "platform", label: "Platforms & CRMs" },
  { id: "website", label: "Websites" },
  { id: "automation", label: "Automation & AI" },
];

const TYPE_LABEL: Record<CaseStudy["type"], string> = {
  platform: "Platform",
  website: "Website",
  app: "App",
  automation: "Automation",
};

export function WorkList({ studies }: { studies: CaseStudy[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = studies.filter((c) => filter === "all" || c.type === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-16">
        {FILTERS.map((f) => {
          const count =
            f.id === "all" ? studies.length : studies.filter((c) => c.type === f.id).length;
          if (count === 0) return null;
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full px-4 py-2 text-[13px] font-medium transition-colors inline-flex items-center gap-2",
                active ? "glass-cyan text-cream" : "glass text-cream/70 hover:text-cream",
              )}
            >
              {f.label}
              <span className="font-mono text-[10px] text-fog-2">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-20">
        {visible.map((c, idx) => (
          <Reveal key={c.slug} intensity="strong">
            <Link href={`/work/${c.slug}`} className="group block">
              <div
                className={`grid gap-8 md:gap-14 md:grid-cols-12 items-center ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-7">
                  <div className="relative overflow-hidden rounded-2xl hairline bg-obsidian-2 aspect-[16/10]">
                    <div className="absolute inset-0 group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                      <CaseCover study={c} showLabel={false} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/85">
                      {TYPE_LABEL[c.type]}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                    {c.client} · {c.year}
                  </div>
                  <h2 className="mt-4 font-sans font-semibold tracking-tight text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.04] tracking-[-0.025em] max-w-[20ch] group-hover:text-cream">
                    {c.headline}
                  </h2>
                  <p className="mt-5 text-[15.5px] leading-[1.65] text-cream/70 max-w-[52ch]">
                    {c.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 md:gap-6">
                    {c.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="border-l border-white/10 pl-3">
                        <div className="font-sans font-semibold tracking-tight text-[16px] tracking-[-0.01em]">
                          {m.value}
                        </div>
                        <div className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-fog">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-[14px] text-cream/80 group-hover:text-cream transition-colors">
                    <span>Read the build</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
