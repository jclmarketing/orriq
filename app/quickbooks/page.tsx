import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/shared/button";
import { GradientOrb } from "@/components/shared/gradient-orb";

export const metadata: Metadata = {
  title: "QuickBooks Assistant",
  description:
    "The Orriq QuickBooks Assistant lets authorised Greenland Services staff raise QuickBooks estimates and invoices through a secure, private messaging assistant.",
};

const capabilities = [
  {
    title: "Estimates & invoices from a message",
    body: "Authorised staff describe the customer and the work in plain English; the assistant drafts the matching estimate or invoice directly in QuickBooks Online.",
  },
  {
    title: "Draft-first, never automatic",
    body: "Documents are created as drafts for review. Nothing is emailed to a customer unless a person explicitly instructs it.",
  },
  {
    title: "Accurate UK VAT",
    body: "Lines are created with the correct VAT treatment (standard, reduced, zero-rated or exempt) so figures reconcile cleanly.",
  },
  {
    title: "Access controlled",
    body: "Only named, pre-authorised individuals can use the assistant. Every action runs against your own QuickBooks company.",
  },
];

export default function QuickBooksLandingPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb variant="mixed" className="h-[500px] w-[500px] -top-20 right-0 opacity-40" />
        <Section>
          <Eyebrow>Orriq × QuickBooks</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.99] tracking-[-0.03em] max-w-[20ch]">
            The QuickBooks Assistant for Greenland Services.
          </h1>
          <p className="mt-7 max-w-[60ch] text-[18px] leading-[1.6] text-cream/80">
            A private integration built by Orriq that turns everyday messages
            into estimates and invoices inside Greenland Services&rsquo;
            QuickBooks Online account — with human review and correct UK VAT
            built in.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/quickbooks/connect" trailingArrow>
              Connect to QuickBooks
            </Button>
            <Button href="/quickbooks/privacy" variant="secondary">
              Privacy policy
            </Button>
            <Button href="/quickbooks/eula" variant="ghost">
              Terms of use
            </Button>
          </div>
        </Section>
      </section>

      <Section className="py-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="glass rounded-2xl p-6 md:p-7"
            >
              <h2 className="font-sans text-[18px] font-semibold tracking-tight text-cream">
                {c.title}
              </h2>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-cream/70">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="accent">What it accesses</Eyebrow>
          </div>
          <div className="md:col-span-8 max-w-[60ch] space-y-4 text-[16px] leading-[1.7] text-cream/80">
            <p>
              The assistant connects to QuickBooks Online using Intuit&rsquo;s
              secure OAuth 2.0 authorisation. It uses the QuickBooks Accounting
              scope to read customers, products and services, tax codes and
              existing transactions, and to create estimates and invoices on
              your behalf.
            </p>
            <p>
              It never has access to your Intuit password, and it cannot move
              money, take payments, or change your QuickBooks settings. You can
              disconnect it at any time from within QuickBooks. See our{" "}
              <Link href="/quickbooks/privacy" className="text-cyan underline decoration-cyan/30 hover:decoration-cyan">
                privacy policy
              </Link>{" "}
              and{" "}
              <Link href="/quickbooks/disconnect" className="text-cyan underline decoration-cyan/30 hover:decoration-cyan">
                how to disconnect
              </Link>
              .
            </p>
            <p className="text-[14px] text-fog">
              Support:{" "}
              <a href="mailto:jon@orriq.com" className="text-cyan underline decoration-cyan/30 hover:decoration-cyan">
                jon@orriq.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
