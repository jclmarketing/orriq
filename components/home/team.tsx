import Image from "next/image";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";

type Member = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
};

const members: Member[] = [
  {
    name: "Jonathan Lawson",
    role: "Founder · Systems Architect",
    bio: "Jon leads Orriq's strategy, CRM architecture, automation design, client systems, and commercial direction. He brings together sales, operations, AI, automation, web, CRM, and business process thinking to build systems that fit how companies actually work.",
    image: "/team/jon.png",
    initials: "JL",
  },
  {
    name: "Jake Whitehead",
    role: "Automation · AI Systems",
    bio: "Jake builds and ships the AI-powered workflows, integrations, and operational systems that turn business processes into reliable automations. The technical engine room of every Orriq build.",
    image: "/team/jake.png",
    initials: "JW",
  },
];

export function Team() {
  return (
    <Section className="py-28 md:py-36" id="team">
      <div className="max-w-[58ch] mb-14 md:mb-20">
        <Eyebrow>Meet the team</Eyebrow>
        <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em]">
          Built by operators,{" "}
          <span className="italic text-fog/80">not account managers.</span>
        </h2>
        <p className="mt-6 text-[16px] md:text-[17px] leading-[1.6] text-cream/70">
          Orriq is led by people who build, sell, automate, and operate real
          business systems. No bloated agency layers. No hand-off to juniors.
          Just practical execution from people who understand the work.
        </p>
      </div>

      <div className="grid gap-6 md:gap-10 md:grid-cols-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="group relative overflow-hidden rounded-2xl hairline bg-obsidian-2 transition-colors hover:border-white/15"
          >
            <div className="relative aspect-[5/4] overflow-hidden bg-obsidian-3">
              {m.image ? (
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top scale-[1.02] group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-sans font-semibold tracking-tight text-[120px] tracking-[-0.04em] text-cream/10">
                    {m.initials}
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian to-transparent"
              />
            </div>
            <div className="relative -mt-20 p-7 md:p-9">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan/80">
                {m.role}
              </div>
              <h3 className="mt-3 font-sans font-semibold tracking-tight text-[clamp(1.6rem,2.4vw,2.25rem)] leading-[1.05] tracking-[-0.02em]">
                {m.name}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-cream/70 max-w-[48ch]">
                {m.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
