import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms on which Orriq supplies websites, hosting, CRMs, apps, automation and related services to business clients in the UK.",
};

/**
 * Version 2026-09. This string is recorded against every signed proposal in the
 * CRM, so a signature points at the wording that was in force on the day.
 * Bump it here AND in jcl-crm src/lib/orriqTerms.ts whenever the terms change.
 */
export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms and Conditions"
      updated="23 September 2026"
      intro={
        <>
          These terms apply to every proposal, quote and order we accept. Version 2026-09.
          If you have signed a proposal, the version recorded against your signature is the
          one that governs your agreement, not necessarily this one.
        </>
      }
    >
      <h2>1. Who you are contracting with</h2>
      <p>
        Orriq is a trading name of Jonathan Lawson, a sole trader, of 72 Victoria Crescent,
        Shirley, B90 2FG, United Kingdom. In these terms, &quot;we&quot;, &quot;us&quot; and
        &quot;Orriq&quot; mean that trader, and &quot;you&quot; means the business named on the
        proposal. Orriq is not registered for VAT, so no VAT is charged on our fees.
      </p>
      <p>
        If we later incorporate and trade through a limited company, we will tell you in
        writing, and your agreement may be transferred to that company on the same terms.
      </p>

      <h2>2. How an agreement is formed</h2>
      <p>
        We issue a proposal describing the work, the fees and the timescales. An agreement is
        formed when you accept that proposal, either by signing it electronically through the
        link we send you, or by confirming acceptance in writing and asking us to begin.
      </p>
      <p>
        The signed proposal and these terms together form the whole agreement. Where the
        proposal and these terms conflict, the proposal wins. Anything discussed but not
        written into the proposal is not part of the agreement.
      </p>
      <p>
        An electronic signature has the same effect as a signature on paper. When you sign, we
        record your name, the date and time, your IP address, and the version of these terms
        shown to you.
      </p>

      <h2>3. Fees and payment</h2>
      <ul>
        <li>Build work is invoiced 20 per cent on acceptance and 80 per cent on handover, unless the proposal says otherwise.</li>
        <li>Recurring fees, such as hosting, support and retainers, are invoiced monthly in advance.</li>
        <li>Invoices are payable within 7 days of the invoice date.</li>
        <li>Fees are exclusive of third party costs such as domains, licences, paid media spend and hardware, which are either recharged at cost or paid by you directly.</li>
      </ul>
      <p>
        Late payments may incur statutory interest under the Late Payment of Commercial Debts
        (Interest) Act 1998. If an invoice is more than 30 days overdue we may suspend the
        services, including hosting, after giving you 7 days written notice.
      </p>

      <h2>4. Recurring services and notice</h2>
      <p>
        Monthly services continue until either of us ends them with 30 days written notice,
        expiring at the end of a billing month. Fees already paid for the current month are not
        refunded. We will give you a reasonable export of your data on request when a recurring
        service ends.
      </p>

      <h2>5. What we need from you</h2>
      <p>
        Timescales in a proposal assume we receive what we need without significant delay. That
        usually means content, brand assets, access to systems and accounts, and decisions from
        someone empowered to make them.
      </p>
      <p>
        Where the proposal sets a number of revisions or a defined scope, work beyond it is
        chargeable at our then current rate, quoted and agreed before we start it. We will tell
        you when a request falls outside scope rather than quietly absorbing or quietly billing
        it.
      </p>

      <h2>6. Timescales</h2>
      <p>
        Dates in a proposal are estimates made in good faith, not fixed deadlines, unless the
        proposal expressly states otherwise. If a date is critical to you, say so before you
        sign and we will either commit to it in writing or tell you we cannot.
      </p>

      <h2>7. Ownership of what we build</h2>
      <p>
        On payment in full for the relevant work, all intellectual property rights in the
        deliverables we create specifically for you transfer to you. That includes the code we
        write for you, the database schema, and the designs and documentation produced for the
        project. If we part ways, you keep running.
      </p>
      <p>
        Two exceptions. First, we keep ownership of our own pre-existing tools, libraries,
        frameworks and general know how, and grant you a perpetual, non-exclusive licence to use
        them as part of your deliverables. Second, third party components stay with their
        owners and are supplied to you under their own licences.
      </p>
      <p>
        Until payment in full, any licence to use the deliverables is temporary and revocable.
      </p>

      <h2>8. Third party services</h2>
      <p>
        Our work commonly depends on services we do not control, including hosting providers,
        payment processors, email providers, AI model providers and social platforms. We choose
        them carefully and will tell you which ones a build depends on, but we are not
        responsible for their outages, pricing changes, or decisions to withdraw a feature. Where
        a third party charges a fee, that fee is yours.
      </p>

      <h2>9. Hosting, backups and security</h2>
      <p>
        Where we host for you, we take reasonable care to keep services available, patched and
        backed up, but we do not offer a guaranteed uptime figure unless the proposal says so
        explicitly. No system is perfectly secure. We will tell you promptly if we become aware
        of a security incident affecting your data.
      </p>

      <h2>10. Data protection</h2>
      <p>
        Each of us will comply with the UK GDPR and the Data Protection Act 2018. Where we
        process personal data on your behalf, you are the controller and we are the processor,
        and we will process that data only on your documented instructions, keep it
        confidential, apply appropriate security measures, and assist you with data subject
        requests and breach notification so far as is reasonable.
      </p>
      <p>
        We use sub-processors, including hosting and AI providers, to deliver the services. We
        will tell you who they are on request and give you notice of a material change. On
        termination we will return or delete personal data at your choice, except where we must
        keep it by law.
      </p>

      <h2>11. Confidentiality</h2>
      <p>
        Neither of us will disclose the other&apos;s confidential information, and each of us
        will use it only to perform the agreement. This does not apply to information that is
        already public, that was already known without obligation, or that must be disclosed by
        law. We may name you as a client and describe the work in general terms unless you ask
        us in writing not to.
      </p>

      <h2>12. Putting things right</h2>
      <p>
        We warrant that we will carry out the services with reasonable care and skill. If a
        deliverable does not do what the proposal said it would, tell us within 30 days of
        handover and we will fix it at no cost. That is your primary remedy for defective work.
      </p>
      <p>
        This warranty does not cover faults caused by changes made by you or a third party,
        problems in third party services, or use outside what was agreed.
      </p>

      <h2>13. Liability</h2>
      <p>
        Nothing in these terms limits liability for death or personal injury caused by
        negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot
        be limited by law.
      </p>
      <p>
        Subject to that, neither of us is liable for loss of profit, loss of revenue, loss of
        anticipated savings, loss of data, or any indirect or consequential loss. Our total
        liability arising out of the agreement is limited to the fees you have paid us under it
        in the 12 months before the claim arose.
      </p>
      <p>
        You are responsible for the accuracy and legality of the content and data you give us,
        and for holding the rights to it.
      </p>

      <h2>14. Ending the agreement</h2>
      <p>
        Either of us may end the agreement immediately in writing if the other commits a
        material breach and does not put it right within 14 days of being asked, or becomes
        insolvent. If work ends early for any reason, you pay for work properly done up to that
        point.
      </p>

      <h2>15. Events outside our control</h2>
      <p>
        Neither of us is liable for failing to perform because of something genuinely outside
        our reasonable control. If that situation lasts more than 30 days, either of us may end
        the affected services with written notice.
      </p>

      <h2>16. Changes to these terms</h2>
      <p>
        We may update these terms. Each version carries a version number, and the version
        recorded against your signed proposal is the one that governs that agreement. A new
        version applies to recurring services from the start of the next billing month after we
        tell you about it. If you do not accept a change to recurring services, you may end
        them under clause 4.
      </p>

      <h2>17. General</h2>
      <p>
        Neither of us may transfer the agreement without the other&apos;s written consent, except
        that we may transfer it to a company we incorporate to carry on the Orriq business. No
        one other than you and us has any rights under the agreement. If a clause is found to be
        unenforceable, the rest stands. A delay in enforcing a right is not a waiver of it. We
        are independent contractors, not partners, and neither of us may bind the other.
      </p>

      <h2>18. Law and disputes</h2>
      <p>
        The agreement is governed by the law of England and Wales, and the courts of England and
        Wales have exclusive jurisdiction. Before starting proceedings, each of us will try in
        good faith to resolve a dispute by discussion.
      </p>

      <h2>19. Contact</h2>
      <p>
        Questions about these terms go to{" "}
        <a href="mailto:jon@orriq.com">jon@orriq.com</a>, or write to Orriq, 72 Victoria Crescent,
        Shirley, B90 2FG.
      </p>
    </LegalDoc>
  );
}
