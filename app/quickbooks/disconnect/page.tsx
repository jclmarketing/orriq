import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "QuickBooks Assistant — Disconnect",
  description:
    "How to disconnect the Orriq QuickBooks Assistant from your QuickBooks Online company.",
};

export default function DisconnectPage() {
  return (
    <LegalDoc
      eyebrow="Disconnect"
      title="Disconnecting the QuickBooks Assistant"
      intro="You can disconnect the Orriq QuickBooks Assistant from your QuickBooks Online company at any time. Disconnecting immediately revokes the Application’s access."
    >
      <h2>Disconnect from QuickBooks Online</h2>
      <ul>
        <li>Sign in to QuickBooks Online as an administrator.</li>
        <li>
          Go to <strong>Settings (⚙)</strong> → <strong>Apps</strong> (or visit{" "}
          <a href="https://qbo.intuit.com/app/apphome" rel="noopener noreferrer">
            your connected apps
          </a>
          ).
        </li>
        <li>
          Find <strong>Orriq QuickBooks Assistant</strong> in your connected
          apps.
        </li>
        <li>
          Choose <strong>Disconnect</strong> and confirm.
        </li>
      </ul>

      <h2>What happens when you disconnect</h2>
      <p>
        Intuit revokes the Application&rsquo;s authorisation, and the access and
        refresh tokens we hold for your company are invalidated and removed. The
        Application can no longer read from or write to your QuickBooks company
        until it is reconnected. Any estimates or invoices already created in
        QuickBooks remain in your account and are unaffected.
      </p>

      <h2>Reconnect later</h2>
      <p>
        If you disconnect and later want to use the Application again, you can{" "}
        <a href="/quickbooks/connect">reconnect it here</a>.
      </p>

      <h2>Need help?</h2>
      <p>
        If you have any trouble disconnecting, contact us at{" "}
        <a href="mailto:jon@orriq.com">jon@orriq.com</a> and we will remove the
        connection for you.
      </p>
    </LegalDoc>
  );
}
