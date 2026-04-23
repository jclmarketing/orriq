export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  image: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "jcl-crm",
    client: "JCL Marketing",
    industry: "Agency · Internal tooling",
    headline: "The CRM we refused to buy.",
    summary:
      "A multi-tenant platform replacing nine disconnected tools — pipeline, projects, call logs, uptime, support — with one interface we actually own.",
    image: "/assets/work/jcl-crm.png",
    metrics: [
      { label: "Tools replaced", value: "9" },
      { label: "Tenant model", value: "Multi" },
      { label: "Uptime monitors", value: "37" },
    ],
    challenge:
      "The agency was running on HubSpot, Monday, ClickUp, Pipedrive, a spreadsheet for invoicing, and three Zapier chains. Context was scattered, data was rented, nothing connected.",
    solution:
      "A self-hosted Supabase multi-tenant architecture where every agency division — marketing, dev, ops — runs as an isolated schema with shared auth. Paperclip agents orchestrate routine ops. 8x8 call logs sync every 15 minutes. 37 uptime monitors surface directly in the dashboard.",
    outcomes: [
      "Nine tools collapsed into one interface",
      "Agent-driven project updates replace status meetings",
      "Zero SaaS vendor lock-in — data lives on our own infra",
    ],
    stack: ["Next.js", "Supabase", "n8n", "Paperclip", "8x8", "Uptime Kuma"],
    year: "2026",
  },
  {
    slug: "applyflow",
    client: "ApplyFlow",
    industry: "AI · Careers SaaS",
    headline: "An AI CV platform built on bespoke infrastructure.",
    summary:
      "Orriq tenant replacing the templated SaaS boilerplate — every candidate CV regenerated through a Claude + Gemini pipeline, backed by our shared auth and billing core.",
    image: "/assets/work/applyflow.png",
    metrics: [
      { label: "Tenancy model", value: "Orriq" },
      { label: "AI providers", value: "Claude + Gemini" },
      { label: "Deploy edge", value: "Vercel" },
    ],
    challenge:
      "ApplyFlow wanted to launch fast, but off-the-shelf SaaS starters locked them into rigid data models and generic auth flows that didn't reflect their candidate journey.",
    solution:
      "Spun up as a tenant on the Orriq core — inheriting auth, billing, analytics, observability — with domain-specific tables and AI pipelines bolted on top. Gemini for image generation, Claude for structured CV rewriting.",
    outcomes: [
      "From concept to live product in weeks, not quarters",
      "Shared infrastructure cost amortised across the platform",
      "Candidate data owned, never syndicated",
    ],
    stack: ["Next.js", "Supabase", "Claude API", "Gemini", "Vercel"],
    year: "2026",
  },
  {
    slug: "rr-access",
    client: "RR Access",
    industry: "Enterprise · Access management",
    headline: "Access management without the enterprise suite.",
    summary:
      "Form builder, calendar, custom detail pages, and a bespoke approval workflow — shipped in three weeks, built around how their ops team actually works.",
    image: "/assets/work/rr-access.png",
    metrics: [
      { label: "Time to live", value: "3 weeks" },
      { label: "Custom modules", value: "6" },
      { label: "Replaced", value: "Salesforce quote" },
    ],
    challenge:
      "A Salesforce quote for £80k/yr plus implementation, for a workflow three people understood end-to-end. The templated object model didn't fit the way RR Access categorise access requests.",
    solution:
      "A bespoke build matching their actual process — dynamic form builder, calendar events tied directly to access windows, detail pages designed around their decision points. Deployed to an Orriq tenant, maintained by us.",
    outcomes: [
      "Delivered in three weeks against a nine-month enterprise quote",
      "Workflow shaped to the business, not the other way around",
      "Predictable monthly retainer, no per-seat scaling tax",
    ],
    stack: ["Next.js", "Supabase", "Orriq Core", "Vercel"],
    year: "2026",
  },
  {
    slug: "garage-roof",
    client: "Garage Roof Company",
    industry: "Construction · Trades",
    headline: "A CRM shaped like a roofing business.",
    summary:
      "Quoting, scheduling, and job tracking modelled on how roofers actually estimate, book, and complete work — not how HubSpot thinks they should.",
    image: "/assets/work/garage-roof.png",
    metrics: [
      { label: "Industry-native", value: "100%" },
      { label: "Forms + stages", value: "Bespoke" },
      { label: "HubSpot saved", value: "£4.8k/yr" },
    ],
    challenge:
      "Generic CRMs force tradespeople into 'deals' and 'stages' that don't reflect how jobs flow — survey, quote, booking, delivery, handover. Lead quality was getting lost in the template.",
    solution:
      "A purpose-built CRM around surveys → quotes → installations, with photographic job records, automated quote PDFs, and a scheduling calendar built for two-person crews. Runs as its own tenant on Orriq.",
    outcomes: [
      "Quote turnaround down from days to hours",
      "Job records photographic and timestamped, automatically",
      "Monthly cost below their previous HubSpot seat bill",
    ],
    stack: ["Next.js", "Supabase", "Orriq Core", "Stripe"],
    year: "2026",
  },
  {
    slug: "mighty-structural",
    client: "Mighty Structural",
    industry: "Engineering · Professional services",
    headline: "End-to-end ops for a structural engineering firm.",
    summary:
      "Quoting, VAT returns, Sage invoicing, an AI phone bot on Vapi, 8x8 call log sync, and IMAP invoice sweep — one platform, one data model.",
    image: "/assets/work/mighty.png",
    metrics: [
      { label: "Integrations", value: "7" },
      { label: "Phone bot", value: "Vapi" },
      { label: "VAT cycle", value: "Automated" },
    ],
    challenge:
      "The firm was running on five disconnected systems — Sage for accounts, a spreadsheet for quotes, IMAP for invoices, 8x8 for calls, nothing talking to anything. VAT cycles took a week.",
    solution:
      "An Orriq tenant tying together Sage, Vapi, 8x8, and IMAP. Inbound calls handled by an AI voice agent with structured quote capture. Invoices swept automatically from sales@, reconciled to Sage. VAT return reduced to a morning's work.",
    outcomes: [
      "VAT cycle compressed from days to hours",
      "AI phone agent captures leads out-of-hours",
      "Single audit trail from call → quote → invoice → ledger",
    ],
    stack: ["Next.js", "Supabase", "Vapi", "8x8", "Sage", "n8n"],
    year: "2026",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
