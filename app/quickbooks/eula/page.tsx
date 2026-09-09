import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "QuickBooks Assistant, End User License Agreement",
  description:
    "The terms governing use of the Orriq QuickBooks Assistant integration.",
};

export default function EulaPage() {
  return (
    <LegalDoc
      eyebrow="End User License Agreement"
      title="End User License Agreement"
      updated="20 July 2026"
      intro="This End User License Agreement (“Agreement”) governs your use of the Orriq QuickBooks Assistant (the “Application”). By connecting the Application to QuickBooks Online or using it, you agree to these terms."
    >
      <h2>1. Licence</h2>
      <p>
        Subject to this Agreement, Orriq (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
        grants you a limited, non-exclusive, non-transferable, revocable licence
        to use the Application for its intended purpose: creating and managing
        estimates and invoices within the QuickBooks Online company you have
        authorised.
      </p>

      <h2>2. Permitted use</h2>
      <p>
        The Application is provided for use by authorised personnel of Greenland
        Services. You agree to use it only for lawful business purposes and in
        accordance with your agreements with Intuit and any applicable law.
      </p>

      <h2>3. Restrictions</h2>
      <p>You agree not to:</p>
      <ul>
        <li>copy, modify, reverse-engineer, or create derivative works of the Application;</li>
        <li>use the Application to access data you are not authorised to access;</li>
        <li>resell, sublicense, or make the Application available to third parties; or</li>
        <li>use the Application in any way that could damage, disable, or impair it or interfere with any other party&rsquo;s use.</li>
      </ul>

      <h2>4. Intuit and third-party services</h2>
      <p>
        The Application connects to Intuit QuickBooks Online. Your use of
        QuickBooks remains subject to Intuit&rsquo;s own terms and policies. We
        are not responsible for the availability, accuracy, or operation of
        QuickBooks or other third-party services.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The Application, and all associated intellectual property, remains the
        property of Orriq. This Agreement does not transfer any ownership rights
        to you. Your QuickBooks data remains yours.
      </p>

      <h2>6. Disclaimer of warranties</h2>
      <p>
        The Application is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, whether express or
        implied, including fitness for a particular purpose and non-infringement.
        You are responsible for reviewing any estimate or invoice it produces
        before it is issued.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Orriq will not be liable for any
        indirect, incidental, special, or consequential damages, or for any loss
        of profits, data, or goodwill, arising from your use of the Application.
      </p>

      <h2>8. Termination</h2>
      <p>
        You may stop using the Application and disconnect it from QuickBooks at
        any time. We may suspend or terminate access if these terms are breached
        or where necessary to protect the service or its users.
      </p>

      <h2>9. Governing law</h2>
      <p>
        This Agreement is governed by the laws of England and Wales, and the
        courts of England and Wales have exclusive jurisdiction over any dispute
        arising from it.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this Agreement can be sent to{" "}
        <a href="mailto:jon@orriq.com">jon@orriq.com</a>.
      </p>
    </LegalDoc>
  );
}
