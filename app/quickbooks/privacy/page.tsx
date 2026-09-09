import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "QuickBooks Assistant, Privacy Policy",
  description:
    "How the Orriq QuickBooks Assistant collects, uses, stores and protects data accessed from QuickBooks Online.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="Privacy Policy"
      title="Privacy Policy for the Orriq QuickBooks Assistant"
      updated="20 July 2026"
      intro="This policy explains what data the Orriq QuickBooks Assistant (the “Application”) accesses when connected to QuickBooks Online, how that data is used and protected, and the choices available to you."
    >
      <p>
        The Application is operated by <strong>Orriq</strong> (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;our&rdquo;) on behalf of Greenland Services. It
        integrates with Intuit QuickBooks Online to help authorised staff create
        estimates and invoices. This policy applies specifically to the
        Application and its use of QuickBooks data.
      </p>

      <h2>Information we access</h2>
      <p>
        When you authorise the Application, Intuit grants it access to your
        QuickBooks Online company data under the <em>Accounting</em> scope. Using
        this access, the Application may read and, where you instruct it, create
        the following:
      </p>
      <ul>
        <li>Company profile information (company name, address, fiscal settings).</li>
        <li>Customers and their contact details.</li>
        <li>Products, services and VAT/tax codes.</li>
        <li>Estimates and invoices, including line items and totals.</li>
      </ul>
      <p>
        The Application <strong>does not</strong> access your Intuit sign-in
        credentials, payroll data, banking credentials, or payment card details,
        and it cannot move money or take payments.
      </p>

      <h2>How we use the information</h2>
      <p>
        Data accessed from QuickBooks is used solely to provide the Application&rsquo;s
        functionality, matching customers, building line items with correct VAT,
        and creating or retrieving estimates and invoices at the request of an
        authorised user. We do not use your QuickBooks data for advertising, and
        we do not sell it or share it with third parties for their own purposes.
      </p>

      <h2>Authentication and tokens</h2>
      <p>
        Authorisation uses Intuit&rsquo;s OAuth 2.0. We store the access and
        refresh tokens Intuit issues, together with your QuickBooks company
        (realm) identifier, so the Application can operate on your behalf. These
        credentials are held securely on access-controlled infrastructure and are
        used only to call the QuickBooks API.
      </p>

      <h2>Data storage and retention</h2>
      <p>
        The Application is designed to work with your live QuickBooks data rather
        than to copy it. We do not maintain a standing duplicate of your
        accounting records. Operational records (such as a log of documents
        created) and OAuth tokens are retained only for as long as the
        integration is in use, and are deleted when you disconnect the
        Application or on request.
      </p>

      <h2>Sub-processors</h2>
      <p>
        The Application relies on Intuit (QuickBooks Online) as the source system,
        and on reputable cloud hosting providers to run the service. These parties
        process data only to the extent necessary to deliver the integration.
      </p>

      <h2>Security</h2>
      <p>
        We apply reasonable technical and organisational measures to protect the
        data the Application handles, including encrypted transport (HTTPS/TLS),
        restricted access to credentials, and least-privilege API scopes. No
        method of transmission or storage is completely secure, but we work to
        protect your information using industry-standard practices.
      </p>

      <h2>Your choices and disconnection</h2>
      <p>
        You may revoke the Application&rsquo;s access at any time from within
        QuickBooks Online (Settings → Apps → Connected apps → Disconnect), or by
        contacting us. On disconnection, the stored tokens are invalidated and
        removed. See our{" "}
        <a href="/quickbooks/disconnect">disconnection guide</a> for details.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be
        reflected by updating the &ldquo;Last updated&rdquo; date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or the Application can be sent to{" "}
        <a href="mailto:jon@orriq.com">jon@orriq.com</a>.
      </p>
    </LegalDoc>
  );
}
