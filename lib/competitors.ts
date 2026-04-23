export type Competitor = {
  slug: string;
  name: string;
  pitch: string;
  hook: string;
  verdict: string;
  comparison: {
    label: string;
    them: string;
    us: string;
  }[];
  notes: string[];
};

const row = (label: string, them: string, us: string) => ({ label, them, us });

export const competitors: Competitor[] = [
  {
    slug: "monday",
    name: "Monday",
    pitch:
      "A colourful work-OS built for everyone — which means built for no-one in particular.",
    hook: "Monday is software you build your business around. Orriq is software built around your business.",
    verdict:
      "If your operation fits into boards, columns and items, Monday is fine. If it doesn't — and most real businesses don't — you'll spend years trying to bend it. We'd rather build the shape that fits.",
    comparison: [
      row("Data model", "Generic boards & items", "Modelled to your actual operation"),
      row("Customisation ceiling", "Templates, automations, limited objects", "Unlimited — your schema is first-class"),
      row("AI depth", "Feature add-ons layered on top", "Native — agents and LLMs wired through the data"),
      row("Where your data lives", "Monday's multi-tenant cloud", "Your tenant, your Supabase, your rules"),
      row("Pricing model", "Per-seat, per-tier, per-feature", "Fixed monthly retainer — no per-seat tax"),
      row("Exit cost", "CSV export + rebuild everywhere", "Your code, your database — you just keep it"),
    ],
    notes: [
      "Monday is fundamentally a presentation of rows and boards. You can stretch it — but you can't make it look like your business. We start from your business and generate the software from there.",
      "The moment you want two tightly-coupled workflows (say, a call logged into 8x8 triggering a quote draft in Sage), Monday's automation surface starts to fray. Orriq writes that as code, once.",
    ],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    pitch:
      "A sales & marketing suite designed to upsell you into its marketing machine forever.",
    hook: "HubSpot wants to be your CRM, your CMS, your help desk, and your marketing automation — as long as you pay for every hub.",
    verdict:
      "HubSpot is excellent if your business genuinely is 'marketing → sales → support, in that order'. If it's anything else — fabrication, professional services, compliance-heavy ops — you'll pay premium prices for a shape that doesn't fit you.",
    comparison: [
      row("Core assumption", "You sell like HubSpot expects", "We build around your actual sales motion"),
      row("Add-on costs", "Marketing, Sales, Service, Ops — separate hubs", "One integrated platform, one retainer"),
      row("Custom objects", "Enterprise-only, rate-limited", "Unlimited, native, written in TypeScript"),
      row("AI", "Templated prompts on top of HubSpot's UI", "Agents integrated with your stack and data"),
      row("Marketing tools", "Strong, but captive in the ecosystem", "We integrate the right tools — you own the data"),
      row("Exit cost", "CRM migration project + marketing rebuild", "Take the code and the database — done"),
    ],
    notes: [
      "HubSpot's business model is to start cheap and charge more as you lean in. Orriq's model is to build what you need, then stop.",
      "If HubSpot's marketing tools are genuinely essential for you, we'll integrate them as the marketing layer. We just won't make them the centre of gravity.",
    ],
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    pitch:
      "Enterprise CRM that requires an admin team, a consultancy, and a five-year plan.",
    hook: "Salesforce is powerful. But its power is organised around Salesforce — not around your business.",
    verdict:
      "If you're a 5,000-seat enterprise with regulated audit trails and a dedicated CoE, Salesforce is still reasonable. For most SMB and mid-market businesses, you'll pay enterprise prices for features you'll never touch and customisations that will outlive the admin who wrote them.",
    comparison: [
      row("Time to live", "6-18 months + implementation partner", "Weeks — we are the implementation partner"),
      row("Admin dependency", "Salesforce admin required forever", "Self-explanatory UI, maintained by us"),
      row("Customisation language", "Apex, Flow, proprietary everything", "TypeScript, SQL, open standards"),
      row("Cost trajectory", "Licences + implementation + consultants", "Fixed retainer, predictable scaling"),
      row("AI (Einstein)", "Opaque, bolted-on, expensive per-use", "Open — use Claude, GPT, Gemini, whatever serves you"),
      row("Data ownership", "Multi-tenant cloud, subject to their terms", "Yours, in your Supabase, always"),
    ],
    notes: [
      "Salesforce has a business reason for every dollar of its list price. It doesn't mean those dollars are being spent on your business.",
      "Apex is a moat. Orriq is the opposite — your platform should be maintainable by any modern engineer, not a Salesforce specialist.",
    ],
  },
  {
    slug: "notion",
    name: "Notion",
    pitch:
      "A beautifully flexible docs-and-databases workspace — that stops being software the moment you need logic.",
    hook: "Notion is a great document. It's not a great system of record.",
    verdict:
      "Notion shines for wikis, project notes, and lightweight databases. It starts to buckle when you need proper business logic, multi-role permissions, external integrations, or an audit trail. Don't ship a business on it.",
    comparison: [
      row("Data model", "Page-and-database, semi-structured", "Proper relational schema, typed, versioned"),
      row("Logic & automation", "Buttons, basic formulas, API stitching", "Real server-side code and workflows"),
      row("Permissions", "Page and database-level", "Row-level, role-based, auditable"),
      row("Integrations", "External apps push into pages", "Natively integrated with n8n, Vapi, Sage, etc"),
      row("Performance at scale", "Slows with large databases", "Built to Supabase's performance envelope"),
      row("Exit cost", "Export to CSV / Markdown", "Your code, your database"),
    ],
    notes: [
      "Keep Notion for docs and internal wikis — it's excellent for that. Move the operational core of your business somewhere it belongs.",
      "We frequently build Orriq platforms alongside a Notion workspace. The two coexist happily; they just shouldn't be the same thing.",
    ],
  },
  {
    slug: "asana",
    name: "Asana",
    pitch:
      "A task-and-project tracker from an era when 'project management software' meant lists of tasks.",
    hook: "Asana is for tracking tasks. Your business is not a list of tasks.",
    verdict:
      "Asana is fine for project tracking on teams that fundamentally do discrete, linear projects — and even there, modern teams are moving on. It was never a system of record for a real business, and it was never trying to be.",
    comparison: [
      row("Scope", "Tasks, projects, milestones", "Every operational surface in the business"),
      row("Data model", "Fixed hierarchy (project → task → subtask)", "Any hierarchy, any relationship"),
      row("Reporting", "Templated dashboards", "Custom analytics on your real data"),
      row("Integrations", "Third-party marketplace", "Engineered integrations, owned by you"),
      row("AI", "Summarisation features", "Agents that do the work, not just summarise it"),
      row("Cost model", "Per-seat", "Fixed monthly retainer"),
    ],
    notes: [
      "If your team's work genuinely is discrete tasks, Asana is fine. Use it.",
      "If your business is customer records, orders, jobs, invoices, calls, assets — the actual stuff of operating — Asana isn't even trying to be the answer.",
    ],
  },
];

export function getCompetitor(slug: string) {
  return competitors.find((c) => c.slug === slug);
}
