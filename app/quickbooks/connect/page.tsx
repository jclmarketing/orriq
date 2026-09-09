import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { GradientOrb } from "@/components/shared/gradient-orb";

export const metadata: Metadata = {
  title: "QuickBooks Assistant, Connect",
  description:
    "Connect or reconnect the Orriq QuickBooks Assistant to your QuickBooks Online company.",
};

// The Intuit OAuth client id is provided at build/run time. Falls back to the
// current app client id so the link is always well-formed.
const CLIENT_ID =
  process.env.NEXT_PUBLIC_QBO_CLIENT_ID ??
  "AB9LX1TJp49dG98vr7a6pVUHY913HavpWifFgSdHSwLUgCbFIQ"; // Greenland production client id
const REDIRECT_URI = "https://www.orriq.com/quickbooks/callback";

const authorizeUrl =
  "https://appcenter.intuit.com/connect/oauth2?" +
  new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    scope: "com.intuit.quickbooks.accounting",
    redirect_uri: REDIRECT_URI,
    state: "orriq-greenland-qbo",
  }).toString();

export default function ConnectPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <GradientOrb variant="mixed" className="h-[460px] w-[460px] -top-16 right-0 opacity-40" />
        <Section>
          <Eyebrow>Connect / Reconnect</Eyebrow>
          <h1 className="mt-6 font-sans font-semibold tracking-tight text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] max-w-[22ch]">
            Connect the Assistant to QuickBooks.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.6] text-cream/80">
            Authorise the Orriq QuickBooks Assistant to work with your QuickBooks
            Online company. You&rsquo;ll be taken to Intuit&rsquo;s secure sign-in
            to review the permissions and choose the company to connect.
          </p>
          <div className="mt-9">
            <a
              href={authorizeUrl}
              className="btn-cta inline-flex items-center justify-center gap-1.5 rounded-full h-12 px-6 text-[15px] font-medium tracking-tight"
            >
              Connect to QuickBooks
            </a>
          </div>
          <p className="mt-6 text-[14px] text-fog">
            By connecting you agree to our{" "}
            <a href="/quickbooks/eula" className="text-cyan underline decoration-cyan/30 hover:decoration-cyan">
              terms of use
            </a>{" "}
            and{" "}
            <a href="/quickbooks/privacy" className="text-cyan underline decoration-cyan/30 hover:decoration-cyan">
              privacy policy
            </a>
            . You can{" "}
            <a href="/quickbooks/disconnect" className="text-cyan underline decoration-cyan/30 hover:decoration-cyan">
              disconnect
            </a>{" "}
            at any time.
          </p>
        </Section>
      </section>

      <Section className="pb-24">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow tone="accent">What you&rsquo;ll approve</Eyebrow>
          </div>
          <div className="md:col-span-8 max-w-[60ch] space-y-4 text-[16px] leading-[1.7] text-cream/80">
            <p>
              Intuit will ask you to grant the QuickBooks{" "}
              <strong>Accounting</strong> permission. This lets the Assistant read
              your customers, items and tax codes and create estimates and
              invoices. It cannot access your password, move money, or take
              payments.
            </p>
            <p className="text-[14px] text-fog">
              Trouble connecting?{" "}
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
