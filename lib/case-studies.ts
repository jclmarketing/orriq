export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  image: string;
  uiMockup?: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  outcomes: string[];
  featureGroups: { title: string; items: string[] }[];
  stack: string[];
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mighty-structural",
    client: "Mighty Structural",
    industry: "Made-to-measure manufacturing · Trade",
    headline: "A route-planned, quote-to-cash platform for a manufacturing firm.",
    summary:
      "Routes, runs, deliveries, made-to-measure quotes, PDF work orders, invoicing, Sage posting, Vapi phone agent, and an IMAP sweep that reconciles invoices without anyone touching a spreadsheet.",
    image: "/assets/work/mighty.png",
    uiMockup: "/assets/ui/mighty-route.png",
    metrics: [
      { label: "Entities replaced", value: "9" },
      { label: "Route optimiser", value: "Nearest-neighbour" },
      { label: "VAT cycle", value: "Hours, not days" },
    ],
    challenge:
      "A made-to-measure manufacturer running on Sage for books, a spreadsheet for quotes, paper-printed route sheets for drivers, WhatsApp for delivery status, and IMAP for invoice capture. Five systems, none talking to each other. Every VAT cycle took a week of reconciliation. Nobody could see a whole job from survey to paid invoice.",
    solution:
      "A single platform with a real relational model — leads become customers, customers have quotes, quotes become jobs, jobs become runs, runs ship via deliveries, deliveries bill via invoices, invoices post to Sage. A visual route planner with drag-and-drop reordering and a nearest-neighbour optimiser. Embedded quote widget for the WooCommerce product catalogue. Vapi AI voice agent handling inbound calls, capturing structured quote intent. n8n IMAP sweep reading sales@ and reconciling invoices to Sage nightly.",
    outcomes: [
      "One operating picture from first call to paid invoice",
      "Driver route sheets printable straight from the optimised run",
      "AI phone agent books quotes out-of-hours",
      "VAT return compressed from a week to a morning",
    ],
    featureGroups: [
      {
        title: "Route & run management",
        items: [
          "Visual route planner with drag-and-drop stop reordering",
          "Nearest-neighbour route optimiser + printable driver sheets",
          "Runs, collections, deliveries with per-stop status (To be made → Being made → Completed)",
          "Vehicle assignment, capacity tracking, meter readings",
        ],
      },
      {
        title: "Quote-to-cash",
        items: [
          "Quote builder with product variations (size, colour, finish, per-metre)",
          "PDF work orders with dimensioned layouts for made-to-measure",
          "Status workflow: Draft → Pending → Approved → Invoiced → Paid",
          "Invoices with pro-forma, overdue flags, payment gateway",
        ],
      },
      {
        title: "AI & automation",
        items: [
          "Vapi AI voice agent for inbound calls + structured quote capture",
          "n8n IMAP sweep — sales@ inbox reconciled to Sage nightly",
          "Zapier/webhook settings exposed to ops",
          "Workflow engine with triggered automations",
        ],
      },
      {
        title: "Integrations & platform",
        items: [
          "Sage bookkeeping + VAT posting",
          "WooCommerce product sync + embeddable quote widget",
          "iOS native app via Capacitor + push tokens",
          "Multi-entity contacts (leads, customers, suppliers)",
        ],
      },
    ],
    stack: ["Next.js", "Supabase", "Capacitor", "Vapi", "n8n", "Sage", "Google Maps"],
    year: "2026",
  },
  {
    slug: "jcl-crm",
    client: "JCL Marketing",
    industry: "Agency · Internal platform",
    headline: "The internal platform we refused to buy.",
    summary:
      "Pipeline, projects, uptime monitors, call logs, LinkedIn prospecting, email warmup, SEO audits, and a full suite of Paperclip AI agents — one multi-tenant operating system for an agency that runs on its own medicine.",
    image: "/assets/work/jcl-crm.png",
    uiMockup: "/assets/ui/jcl-pipeline.png",
    metrics: [
      { label: "Tools replaced", value: "11" },
      { label: "Uptime monitors", value: "37" },
      { label: "Tenancy model", value: "Multi" },
    ],
    challenge:
      "The agency was running on HubSpot, Monday, ClickUp, Pipedrive, a spreadsheet for invoices, Uptime Robot, a separate LinkedIn automation tool, and three Zapier chains holding it together. Context was scattered across nine SaaS tabs. Data was rented. Nothing connected. Every new client meant configuring nine tools again.",
    solution:
      "A self-hosted multi-tenant platform on Supabase — one core with isolated per-division schemas. Pipeline and projects native. 37 uptime monitors pulled from Uptime Kuma into a live dashboard. Paperclip — our internal orchestration agent — wired across the stack. 8x8 call logs sync every 15 minutes. Built-in LinkedIn prospecting with daily summaries. Email warmup domain config. SEO audits running in-platform, not syndicated to third-party dashboards.",
    outcomes: [
      "Nine tools collapsed into one operating interface",
      "Agent-driven status updates replace standup meetings",
      "Every new client is a new tenant, live in hours",
      "Zero vendor lock-in — runs on our own infrastructure",
    ],
    featureGroups: [
      {
        title: "Sales & delivery",
        items: [
          "Pipeline with Companies, Contacts, Projects, Proposals",
          "Project hub with documents, invoices, and detail pages",
          "Recurring invoice templates + expense tracking",
          "Client portal per tenant",
        ],
      },
      {
        title: "Monitoring & intelligence",
        items: [
          "Uptime monitors (37) with live status + response times",
          "Google Analytics, GSC, Google Ads metrics sync",
          "Backlinks & SEO audits with opportunity detection",
          "Whiteboards + documentation modules",
        ],
      },
      {
        title: "AI agents",
        items: [
          "Paperclip — autonomous orchestration agent via service-ctl",
          "OpenClaw embedded chat widget",
          "Voice agents module for call handling",
          "AI call analysis on every logged call",
        ],
      },
      {
        title: "Outbound & comms",
        items: [
          "LinkedIn prospecting agent with daily summaries",
          "Email warmup domain configuration",
          "8x8 telephony call log sync (15-min cadence)",
          "Multi-channel activity feed",
        ],
      },
    ],
    stack: [
      "Next.js",
      "Supabase",
      "Paperclip",
      "Uptime Kuma",
      "8x8",
      "Google APIs",
      "n8n",
    ],
    year: "2026",
  },
  {
    slug: "sidekick-crm",
    client: "Sidekick",
    industry: "SaaS · Generic CRM",
    headline: "A CRM with an AI co-pilot built into the bones.",
    summary:
      "Contact and job management, AI-transcribed call logging, an automation engine you can actually see running, customer surveys, stock tracking, and a custom report builder — all in one.",
    image: "/assets/work/sidekick.png",
    uiMockup: "/assets/ui/sidekick-calls.png",
    metrics: [
      { label: "Modules", value: "12" },
      { label: "AI calls", value: "Auto-analysed" },
      { label: "Automation", value: "Visual engine" },
    ],
    challenge:
      "An SMB operator stitching HubSpot (CRM), Aircall (calls), Zapier (automation), Typeform (surveys), and Google Sheets (stock) with brittle integrations. The cost of running the stack was higher than their rent. Worse, no single system owned the truth — and every vendor had their own opinion about the data model.",
    solution:
      "A unified CRM with a proper job-and-contact relational core, AI call logging with automatic summaries and transcripts, a visual automation engine showing every execution in real time, and domain-specific modules for surveys, stock, and reporting. The AI widget sits in the corner and actually does work — drafts replies, pulls numbers, summarises threads.",
    outcomes: [
      "Stack collapsed from five SaaS products into one",
      "Every call automatically summarised and linked to contact",
      "Automation engine is visible and auditable — no black boxes",
      "Stock and survey data in the same database as customers",
    ],
    featureGroups: [
      {
        title: "Core CRM",
        items: [
          "Contacts, companies, jobs, members with hierarchical relationships",
          "Activity timeline and notification queue",
          "Task and assignment management",
          "Archive system with recoverable entities",
        ],
      },
      {
        title: "AI & automation",
        items: [
          "AI call logging with automatic analysis and transcription",
          "Embedded AI chat widget with context awareness",
          "Visual automation engine with per-execution logs",
          "Workflow builder with triggers, conditions, actions",
        ],
      },
      {
        title: "Commerce & ops",
        items: [
          "Quote and invoice line-item tracking",
          "Stock/inventory module",
          "Per-job surveys + public survey forms",
          "Bulk actions on surveys, stock, and jobs",
        ],
      },
      {
        title: "Reporting",
        items: [
          "Custom report builder with widget library",
          "Dashboards assembled from module data",
          "Exportable CSV and PDF outputs",
          "Auditable execution history",
        ],
      },
    ],
    stack: ["React", "Supabase", "shadcn/ui", "OpenAI", "Claude", "n8n"],
    year: "2026",
  },
  {
    slug: "apsweeperhire",
    client: "AP Sweeper Hire",
    industry: "Plant & vehicle hire",
    headline: "Fleet ops for a road sweeper hire company.",
    summary:
      "Daily vehicle scheduling, defect logs, license and compliance tracking, SMS/email comms templates, and a custom form builder for site-specific inspections — all wired into one operator dashboard.",
    image: "/assets/work/apsweeper.png",
    uiMockup: "/assets/ui/apsweeper-schedule.png",
    metrics: [
      { label: "Compliance tracks", value: "Live" },
      { label: "Comms", value: "SMS + email" },
      { label: "Form builder", value: "Dynamic" },
    ],
    challenge:
      "A plant hire business keeping compliance paperwork in a folder, booking schedules on a whiteboard, and chasing defect reports by phone. Licences expiring silently. Drivers turning up without the paperwork. PMI inspections being missed. A clear audit risk that insurers were starting to notice.",
    solution:
      "A fleet operations platform with a day/week/month scheduling calendar by vehicle, a daily defect log with photo capture, and a compliance dashboard tracking license expiries, PMI inspections, standpipe readings, and driver training dates. A dynamic form builder lets the team create site-specific inspection forms without engineering. SMS and email templates sent straight from the job record.",
    outcomes: [
      "Zero expired licences reaching a live job since go-live",
      "Defect log photographic and timestamped, automatically",
      "Schedulers see the whole fleet in one view",
      "Custom inspection forms built in minutes, not weeks",
    ],
    featureGroups: [
      {
        title: "Fleet & scheduling",
        items: [
          "Day/week/month vehicle scheduling calendar",
          "Multi-stop job scheduler with driver assignment",
          "Meter readings + service history per vehicle",
          "Vehicle defect reports with photo capture",
        ],
      },
      {
        title: "Compliance",
        items: [
          "Daily defects log with severity",
          "License expiry tracking with proactive alerts",
          "PMI inspection schedule + reminders",
          "Standpipe readings, tachograph, driver training dates",
        ],
      },
      {
        title: "Comms & forms",
        items: [
          "SMS and email templates sent from the job record",
          "Dynamic form builder for site-specific inspections",
          "Dashboard builder with customisable widgets",
          "IMAP email ingest into customer records",
        ],
      },
      {
        title: "HR & office",
        items: [
          "Personnel training records",
          "Office leave & availability",
          "Admin check-ins",
          "Role-based permissions",
        ],
      },
    ],
    stack: ["React", "Supabase", "Twilio", "n8n", "Google Maps"],
    year: "2026",
  },
  {
    slug: "rr-access",
    client: "RR Access",
    industry: "Access & compliance management",
    headline: "Access management for a business Salesforce wouldn't fit.",
    summary:
      "Dynamic form builder, employee activity map, vehicle defects, qualification tracking, scaffold + PPE checklists, a weight calculator, and a separate customer portal — shipped in three weeks against a nine-month enterprise quote.",
    image: "/assets/work/rr-access.png",
    uiMockup: "/assets/ui/rr-access-formbuilder.png",
    metrics: [
      { label: "Time to live", value: "3 weeks" },
      { label: "Quote replaced", value: "Salesforce" },
      { label: "Custom modules", value: "11" },
    ],
    challenge:
      "A specialist access contractor with a nine-month Salesforce implementation quote to automate workflows three people understood end-to-end. Salesforce's object model didn't fit how they categorise access requests, how they manage scaffold teams, or how they track qualifications. Implementation consultants wanted to rewrite their process.",
    solution:
      "A bespoke platform with a real form builder (draggable fields, conditional logic, JSON schema preview), a calendar module for shifts, an employee activity map with live geolocation, a scaffold + PPE checklist module, and a weight calculator for vehicle load limits. A separate customer portal with its own access control. Their process preserved, not redesigned by a vendor.",
    outcomes: [
      "Live in three weeks against a nine-month Salesforce quote",
      "Their workflow preserved — we shaped the software to it",
      "Separate customer portal without the pricing tier tax",
      "Predictable monthly retainer instead of per-seat scaling",
    ],
    featureGroups: [
      {
        title: "Form & workflow",
        items: [
          "Dynamic form builder with conditional logic",
          "Custom entity builder with schema-driven CRUD pages",
          "Shift + appointment scheduler",
          "Custom approval workflows",
        ],
      },
      {
        title: "Compliance",
        items: [
          "Employee qualifications and certification tracking",
          "Health & safety records",
          "Vehicle defect reports with photos",
          "Scaffold dismantling + PPE checklists",
        ],
      },
      {
        title: "Tools",
        items: [
          "Weight calculator for vehicle load limits",
          "Live employee activity map",
          "Admin check-ins",
          "HR dashboard with payroll integration",
        ],
      },
      {
        title: "Customer portal",
        items: [
          "Separate public portal with its own access controls",
          "Public forms for quotes and requests",
          "Status tracking without user seats",
          "Branded experience",
        ],
      },
    ],
    stack: ["Next.js", "Supabase", "Google Maps", "n8n"],
    year: "2026",
  },
  {
    slug: "garage-roof",
    client: "Garage Roof Company",
    industry: "Roofing & construction",
    headline: "Survey-to-installation CRM for a roofing specialist.",
    summary:
      "A survey capture tool with property photos and sketched dimensions, a product configurator with pricing rules and VAT, route-optimised crew scheduling, and an instant quote engine — all shaped to how roofers actually sell and deliver.",
    image: "/assets/work/garage-roof.png",
    uiMockup: "/assets/ui/garage-roof-survey.png",
    metrics: [
      { label: "Quote turnaround", value: "Hours" },
      { label: "HubSpot saved", value: "£4.8k/yr" },
      { label: "Views", value: "Calendar + map + list" },
    ],
    challenge:
      "Generic CRMs force tradespeople into 'deals' and 'stages' that don't reflect how roofing jobs actually flow — survey, quote, booking, delivery, handover. Lead data was getting lost in HubSpot's opinionated object model. Photos of job sites lived in WhatsApp. Quotes lived in Word. Nothing joined up.",
    solution:
      "A purpose-built CRM modelled around surveys → quotes → installations. Survey capture on-site with property photos and dimensional sketches. Product configurator with pricing rules, VAT handling, and instant quote generation. Route-optimised scheduling for crew assignments. Google Maps geocoding on every record. A public customer portal for surveys and quotes.",
    outcomes: [
      "Quote turnaround down from days to hours",
      "Photographic timestamped job records, automatically",
      "Crew schedules route-optimised, not manually ordered",
      "Monthly cost below the previous HubSpot seat bill",
    ],
    featureGroups: [
      {
        title: "Survey & quote",
        items: [
          "Field survey capture with property photo gallery",
          "Dimensioned sketch tool for roof measurements",
          "Product configurator with pricing + VAT rules",
          "Instant PDF quote generation with branding",
        ],
      },
      {
        title: "Scheduling & delivery",
        items: [
          "Route-optimised crew scheduling",
          "Multi-view calendar, list, grid, map",
          "Delivery + collection management",
          "Job status tracking with photo handover",
        ],
      },
      {
        title: "Customer-facing",
        items: [
          "Public customer portal for quotes and surveys",
          "Branded quote approval flow",
          "Automated email notifications",
          "Customer feedback capture",
        ],
      },
      {
        title: "Integrations",
        items: [
          "Google Maps geocoding",
          "Invoice generation from jobs",
          "Payment tracking",
          "Stripe (optional)",
        ],
      },
    ],
    stack: ["Next.js", "Supabase", "Google Maps", "Stripe"],
    year: "2026",
  },
  {
    slug: "applyflow",
    client: "ApplyFlow",
    industry: "Careers SaaS · AI",
    headline: "An AI CV platform shipped on shared infrastructure.",
    summary:
      "A structured CV builder with Claude-powered rewriting, a job feed aggregator, auto-apply workflows, and subscription-gated AI — all delivered as a tenant on the Orriq core in weeks rather than quarters.",
    image: "/assets/work/applyflow.png",
    uiMockup: "/assets/ui/applyflow-cv.png",
    metrics: [
      { label: "Auth & billing", value: "Shared core" },
      { label: "AI providers", value: "Claude + Gemini" },
      { label: "Time to launch", value: "Weeks" },
    ],
    challenge:
      "ApplyFlow wanted to launch quickly, but off-the-shelf SaaS starters locked them into rigid data models and templated auth flows. They needed structured CV entities (experience, education, skills), AI rewriting that respected job-specific context, and auto-apply capability — none of which fit a generic starter.",
    solution:
      "Spun up as a tenant on the Orriq core, inheriting auth, billing, analytics, and observability. Structured CV entities with AI-assisted content generation. Claude API for context-aware rewriting. Job listing aggregator with multi-source feeds. Auto-apply workflow matching profiles to opportunities. Subscription-tier gating on application limits.",
    outcomes: [
      "From concept to live product in weeks, not quarters",
      "Shared infrastructure cost amortised across the Orriq platform",
      "AI costs predictable and observable per-user",
      "Candidate data owned, never syndicated",
    ],
    featureGroups: [
      {
        title: "CV builder",
        items: [
          "Structured Experience, Education, Skills entities",
          "AI-suggested rewrites per section",
          "Live A4-style preview",
          "Multiple CV profiles per user",
        ],
      },
      {
        title: "AI",
        items: [
          "Claude API for context-aware content rewriting",
          "Gemini for visual asset generation",
          "Token usage metering per user",
          "Per-job CV tailoring",
        ],
      },
      {
        title: "Job feed",
        items: [
          "Multi-source job aggregator",
          "Match scoring to user profile",
          "Public job detail pages",
          "Application initiation flow",
        ],
      },
      {
        title: "Platform",
        items: [
          "Subscription tier gating",
          "Application tracking dashboard",
          "Shared Orriq auth + billing",
          "Vercel edge deployment",
        ],
      },
    ],
    stack: ["Next.js", "Supabase", "Claude API", "Gemini", "Vercel"],
    year: "2026",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
