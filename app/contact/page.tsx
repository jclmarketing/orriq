import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { GradientOrb } from "@/components/shared/gradient-orb";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to us about a build. Email, form, or phone — we respond within a working day.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "jon@jclmarketing.co.uk",
    href: "mailto:jon@jclmarketing.co.uk",
  },
  {
    icon: MessageSquare,
    label: "Form",
    value: "Send the message below",
    href: "#form",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 121 295 3160",
    href: "tel:+441212953160",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb variant="cyan" className="h-[480px] w-[480px] -top-20 right-10 opacity-30" />
        <Section>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[18ch]">
            Tell us what you want <span className="italic text-gradient-accent">built.</span>
          </h1>
          <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.6] text-cream/75">
            One message, one working-day response. We'll either set up a
            discovery call or tell you honestly we're not the right fit.
          </p>
        </Section>
      </section>

      <Section className="pb-10">
        <div className="grid gap-px hairline rounded-2xl overflow-hidden bg-white/[0.06] md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group bg-obsidian p-7 flex items-center gap-4 hover:bg-obsidian-2 transition-colors"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg hairline-strong bg-obsidian-3 shrink-0">
                <c.icon className="h-4 w-4 text-cream" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog-2">
                  {c.label}
                </div>
                <div className="mt-1 text-[15px] text-cream/90 group-hover:text-cream transition-colors">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="form" className="py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="accent">Message</Eyebrow>
            <h2 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.04] tracking-[-0.025em] max-w-[22ch]">
              Tell us a little about what you run today.
            </h2>
            <p className="mt-5 text-[14.5px] text-cream/65 leading-relaxed max-w-[42ch]">
              Anything you'd share on a first call works here — don't overthink
              it. One sentence or ten, either is fine.
            </p>
          </div>
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
