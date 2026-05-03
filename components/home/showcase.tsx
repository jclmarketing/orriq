"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/shared/eyebrow";
import { cn } from "@/lib/utils";

type Frame = {
  tag: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const frames: Frame[] = [
  {
    tag: "Mighty · Route planner",
    title: "Routes, runs, and deliveries in one visual canvas.",
    body: "Drag stops into order, let the nearest-neighbour optimiser do the rest, and print a driver sheet in one click. Per-stop status flows all the way back into the customer's job record.",
    image: "/assets/ui/mighty-route.png",
    alt: "Mighty CRM route planner with drag-and-drop stop list and map",
  },
  {
    tag: "Mighty · Quote builder",
    title: "Made-to-measure quoting with per-metre pricing.",
    body: "Product variations, size/colour/finish, VAT, pro-forma, approval workflow — all typed properly. Quote PDFs generated directly from the line items, no copy-pasting into Word.",
    image: "/assets/ui/mighty-quote.png",
    alt: "Mighty CRM quote builder with line items and status workflow",
  },
  {
    tag: "Sidekick · AI call logging",
    title: "Every call summarised. Every call linked.",
    body: "Inbound calls automatically transcribed, summarised, and tied to the contact record. The AI pulls key points into a structured block your sales team can actually skim.",
    image: "/assets/ui/sidekick-calls.png",
    alt: "Sidekick CRM AI call logging with transcript and summary",
  },
  {
    tag: "AP Sweeper · Fleet scheduling",
    title: "The whole fleet, the whole week, one screen.",
    body: "Vehicles down the side, days across the top, bookings stretched across them. Compliance defects stream down the right — expired licences surface before they hit a live job.",
    image: "/assets/ui/apsweeper-schedule.png",
    alt: "AP Sweeper fleet schedule with vehicles, bookings, and defect log",
  },
  {
    tag: "JCL · Agency operating system",
    title: "Pipeline, uptime, and agents on one pane.",
    body: "Deal pipeline on one side, 37 live uptime monitors on the other. Paperclip agents updating project statuses while you read this. This is the CRM we built for ourselves.",
    image: "/assets/ui/jcl-pipeline.png",
    alt: "JCL CRM pipeline and uptime dashboard",
  },
  {
    tag: "RR Access · Form builder",
    title: "No-code form builder with real engineering underneath.",
    body: "Draggable fields, conditional logic, validation rules, JSON schema preview. The ops team builds new workflows without raising tickets — and we keep the schema audit-clean.",
    image: "/assets/ui/rr-access-formbuilder.png",
    alt: "RR Access form builder with field palette and schema preview",
  },
  {
    tag: "Garage Roof · Site survey",
    title: "On-site survey to quoted job, in minutes.",
    body: "Property photos, dimensioned sketch, product config, instant estimate, send to customer. Everything about the job — before, during, after — lives on one record.",
    image: "/assets/ui/garage-roof-survey.png",
    alt: "Garage Roof survey capture with sketches and pricing estimate",
  },
  {
    tag: "ApplyFlow · AI CV editor",
    title: "Claude rewriting, rendered in real time.",
    body: "Structured CV entities, AI suggestions per section, live preview on the right. Token usage metered per user, so pricing is predictable — no surprise AI bill at month-end.",
    image: "/assets/ui/applyflow-cv.png",
    alt: "ApplyFlow AI CV editor with live preview",
  },
];

export function Showcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    frameRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/5"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-fine opacity-40" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none bg-gradient-to-b from-obsidian via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none bg-gradient-to-t from-obsidian via-transparent to-transparent"
      />

      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-14 pt-28 md:pt-36 pb-20">
        <div className="max-w-[60ch] mb-14">
          <Eyebrow tone="accent">Operating systems we've already shipped</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.75rem)] leading-[1.02] tracking-[-0.03em]">
            <span>Real CRM screens.</span>{" "}
            <span className="italic text-fog">Real workflows. Real business processes.</span>
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-cream/70">
            Eight screens from operating systems we've built and shipped — not
            concept shots. Every one is production software running for a
            paying operator right now.
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12 lg:gap-20 relative">
          <div className="md:col-span-5 md:sticky md:top-24 md:self-start h-auto md:h-[70vh] md:min-h-[500px] flex items-center">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl hairline bg-obsidian-2">
              {frames.map((f, i) => (
                <div
                  key={f.image}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-out",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                >
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-obsidian/30 via-transparent to-transparent" />
                </div>
              ))}
              <div aria-hidden className="absolute inset-0 pointer-events-none hairline-strong rounded-2xl" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-24 md:space-y-36 py-8 md:py-24">
            {frames.map((f, i) => (
              <div
                key={f.image}
                data-index={i}
                ref={(el) => {
                  frameRefs.current[i] = el;
                }}
                className={cn(
                  "transition-opacity duration-500",
                  i === active ? "opacity-100" : "opacity-40",
                )}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan/80">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        i === active ? "bg-cyan" : "bg-fog-2",
                      )}
                    />
                    {f.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.08] tracking-[-0.025em] max-w-[22ch]">
                  {f.title}
                </h3>
                <p className="mt-5 text-[15.5px] md:text-[16px] leading-[1.65] text-cream/70 max-w-[52ch]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex items-center gap-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog-2">
            {String(active + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
          </div>
          <div className="flex-1 h-[1px] bg-white/10">
            <div
              className="h-full bg-gradient-accent transition-[width] duration-500"
              style={{ width: `${((active + 1) / frames.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
