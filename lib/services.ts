export type Service = {
  slug: string;
  name: string;
  /** Short line used on cards. */
  tagline: string;
  /** One-line summary used in hero + metadata. */
  summary: string;
  /** Lucide icon name key, resolved in the UI. */
  icon:
    | "globe"
    | "server"
    | "database"
    | "layers"
    | "workflow"
    | "smartphone"
    | "bot"
    | "search";
  /** Three card bullets. */
  bullets: string[];
  /** Longer intro paragraphs for the service page. */
  intro: string[];
  /** What you get: title + body. */
  deliverables: { title: string; body: string }[];
  /** How we build it: ordered steps. */
  process: { step: string; body: string }[];
  /** Proof points shown as stat tiles. */
  proof: { value: string; label: string }[];
  /** Case study slugs from lib/case-studies to feature. */
  caseStudies: string[];
  /** Stack / tools pills. */
  stack: string[];
  faqs: { q: string; a: string }[];
  /** Typical engagement shape and pricing note. */
  engagement: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "websites",
    name: "Websites",
    tagline: "Fast, search-ready sites that bring the work in.",
    summary:
      "Custom-built websites for trades, manufacturers, dealers and professional firms. No page builders, no templates, no plugin sprawl. Built to rank locally, load in under a second and hand every enquiry straight to your CRM.",
    icon: "globe",
    bullets: [
      "Custom WordPress themes or static Next.js builds",
      "Service, area and guide pages written to rank",
      "Enquiry forms wired into your CRM, not an inbox",
    ],
    intro: [
      "Most business websites are a page builder, thirty plugins and a theme someone bought in 2019. They load slowly, break on update, and nobody can tell you where the enquiries go. We build the opposite: a site written as code, with the content, structure and schema search engines actually reward.",
      "Every build ships with real service pages, real location pages and a guides section that answers the questions your customers type into Google. Forms post into your CRM or a workflow, so an enquiry becomes a lead the moment it lands.",
    ],
    deliverables: [
      {
        title: "Design that fits the business",
        body: "Brand colours, type and photography carried through, not a template with your logo dropped in. Dark, light, editorial or bold: whatever suits the trade and the customer.",
      },
      {
        title: "Custom theme or static build",
        body: "For WordPress we write a proper theme with custom post types and fields, editable through clear admin panels. For sites that rarely change we generate static pages and deploy to the edge.",
      },
      {
        title: "SEO content, written and structured",
        body: "Services, industries, location pages and guides. Title and description on every page, one H1, canonical, Open Graph, alt text, JSON-LD schema for LocalBusiness, Service, FAQ and Review.",
      },
      {
        title: "Forms that go somewhere",
        body: "Honeypot, nonce and validation on every form. Submissions land in your CRM, a Supabase table or an n8n workflow, with email notification via a proper SMTP relay.",
      },
      {
        title: "Speed and hygiene",
        body: "Server-side caching, image optimisation, no render-blocking junk. We remove the plugins you do not need and quarantine the ones that were a security risk.",
      },
      {
        title: "Launch done properly",
        body: "Staging on a branded subdomain, 301 map for changed URLs, robots and sitemap checked, Search Console and analytics carried over, then a post-launch crawl of every URL.",
      },
    ],
    process: [
      { step: "Brief and audit", body: "We crawl the current site, pull the search data, and agree the pages that need to exist." },
      { step: "Design", body: "Homepage and one inner page designed first. You see the real thing, in the browser, not a mockup." },
      { step: "Build and content", body: "Theme or static build, content written and loaded, forms wired, schema in place." },
      { step: "Staging review", body: "The whole site on a staging subdomain for you to click through. Changes turned around same day." },
      { step: "Launch and verify", body: "DNS, redirects, cache, indexing, then a full crawl. Zero broken links is the bar." },
    ],
    proof: [
      { value: "90+", label: "Sites we host and maintain" },
      { value: "0", label: "Broken links at launch, every build" },
      { value: "<300ms", label: "Typical server response time" },
    ],
    caseStudies: ["mighty-website", "apsweeper-website", "alehub", "onyx-moving"],
    stack: ["WordPress", "Next.js", "Vercel", "OpenLiteSpeed", "Cloudflare", "LiteSpeed Cache", "JSON-LD", "n8n"],
    faqs: [
      {
        q: "WordPress or something else?",
        a: "WordPress when you need to edit content regularly or run a blog. A static build when the site changes rarely and speed matters most. Either way you own the code and the content.",
      },
      {
        q: "Will you write the content?",
        a: "Yes. We write service, area and guide pages from your brief, your existing site and what people actually search for. You review everything before it goes live.",
      },
      {
        q: "Can you keep our existing URLs and rankings?",
        a: "That is the default. We map every old URL to a new one and 301 anything that has to change. Search Console and analytics carry over untouched.",
      },
      {
        q: "How long does a site take?",
        a: "A focused site with services and local pages is usually two to three weeks from brief to launch. Larger content builds and e-commerce take longer and we tell you upfront.",
      },
    ],
    engagement: [
      { title: "Fixed quote", body: "Scoped from the brief, written down, no hourly surprises. Half up front, half at launch." },
      { title: "Hosting and care", body: "Most clients move onto our hosting at launch so updates, backups, uptime and small changes are covered monthly." },
    ],
  },
  {
    slug: "hosting",
    name: "Hosting & care",
    tagline: "Managed hosting, monitoring and upkeep for the sites we build.",
    summary:
      "UK-managed hosting on servers we run ourselves, with uptime monitoring, offsite backups, SSL, security patching, Cloudflare DNS and a staging copy of every site. One monthly fee, one team to call.",
    icon: "server",
    bullets: [
      "OpenLiteSpeed servers we manage directly",
      "Uptime and SSL checks around the clock",
      "Nightly backups to offsite object storage",
    ],
    intro: [
      "A website is only as good as the server it sits on and the person who notices when it goes down. We host on high-spec servers we control, monitor every site from the outside, back everything up offsite and keep WordPress, themes and plugins patched.",
      "Because we also host the CRMs, workflows and databases behind your business, the whole estate sits under one roof. When something breaks at 9pm, you message the people who built it.",
    ],
    deliverables: [
      {
        title: "Managed servers",
        body: "OpenLiteSpeed with Redis and MySQL, tuned for WordPress. Sites isolated per user, PHP versions per site, firewall and fail2ban on every box.",
      },
      {
        title: "Monitoring",
        body: "External uptime and certificate checks on every site, with alerts to us. Response times tracked so slowdowns show up before customers notice.",
      },
      {
        title: "Backups",
        body: "Nightly database and file backups to offsite object storage, retained on a schedule. Restore tested, not assumed.",
      },
      {
        title: "DNS, SSL and email",
        body: "Cloudflare DNS with edge redirects and bot filtering, auto-renewing certificates, and transactional email routed through a proper SMTP relay so forms actually deliver.",
      },
      {
        title: "Updates and security",
        body: "Core, theme and plugin updates applied on a schedule with a staging check first. Vulnerability scans and the removal of anything that should not be in a webroot.",
      },
      {
        title: "Staging for every site",
        body: "A branded staging subdomain where changes are reviewed before they go live. No editing production on a Friday afternoon.",
      },
    ],
    process: [
      { step: "Audit", body: "We look at the current host, plugins, DNS and email before touching anything." },
      { step: "Migrate", body: "Files and database moved, DNS switched with zero downtime, redirects checked." },
      { step: "Harden", body: "Unused plugins gone, security scan run, backups and monitors added." },
      { step: "Run", body: "Monthly updates, monitoring, and a set allowance of small changes." },
    ],
    proof: [
      { value: "90+", label: "Sites under management" },
      { value: "24/7", label: "Uptime and certificate monitoring" },
      { value: "Nightly", label: "Offsite backups" },
    ],
    caseStudies: ["alehub", "apsweeper-website", "garage-roof-website"],
    stack: ["OpenLiteSpeed", "Cloudflare", "Uptime Kuma", "Vultr object storage", "Docker", "Vercel", "FluentSMTP"],
    faqs: [
      {
        q: "Do you host sites you did not build?",
        a: "Yes, after an audit. We will tell you honestly if the site needs work before it is safe to move.",
      },
      {
        q: "Where are the servers?",
        a: "UK and EU data centres, managed by us. Your data does not sit on a shared reseller account.",
      },
      {
        q: "What happens if we leave?",
        a: "We hand over a full export of files, database and DNS. No lock-in, no ransom.",
      },
    ],
    engagement: [
      { title: "Monthly plan", body: "Hosting, monitoring, backups and updates on one monthly fee, priced by site size and traffic." },
      { title: "Care allowance", body: "A block of small changes each month, so content tweaks and fixes never need a quote." },
    ],
  },
  {
    slug: "crm",
    name: "Orriq CRM",
    tagline: "A ready-built CRM platform you can be running in days.",
    summary:
      "Our multi-tenant CRM platform: pipeline, contacts, quotes, invoices, projects, calendar, inbox and bookkeeping, provisioned as your own isolated tenant with your branding. Live in days, then shaped further as you grow.",
    icon: "database",
    bullets: [
      "Pipeline, quotes, invoices, projects, calendar",
      "Your own isolated tenant with row-level security",
      "AI assistant, email and WhatsApp inbox built in",
    ],
    intro: [
      "Not every business needs a bespoke build on day one. Orriq CRM is the platform we run our own agency on, provisioned as a private tenant for you. Companies, contacts, pipeline, proposals, quotes, invoices, projects, calendar sync, unified inbox and a built-in AI assistant, with your logo and your domain.",
      "It sits on the same self-hosted infrastructure as our bespoke work, so when you outgrow the standard modules we extend your tenant rather than migrate you somewhere else.",
    ],
    deliverables: [
      {
        title: "Sales and delivery",
        body: "Companies, contacts, leads, pipeline stages, proposals and quotes with PDF output, projects with documents and tasks.",
      },
      {
        title: "Money",
        body: "Invoices, recurring templates, expenses, payment links and a bookkeeping view that reconciles against your accounts package.",
      },
      {
        title: "Communication",
        body: "Unified inbox for email and WhatsApp, call logs from your phone system, calendar sync with Google and Microsoft, a public booking page.",
      },
      {
        title: "AI assistant",
        body: "Ask questions across your records, draft replies, summarise calls. Voice mode on mobile. Runs against your data only.",
      },
      {
        title: "Mobile",
        body: "Installable iOS app with home-screen widgets for outstanding invoices, overdue items, calls and inbox.",
      },
      {
        title: "Your tenant, your data",
        body: "Isolated schema per client on self-hosted Postgres. Role-based access, audit trail, export at any time.",
      },
    ],
    process: [
      { step: "Provision", body: "Your tenant is created from a template in hours, branded and on your subdomain." },
      { step: "Import", body: "Contacts, companies and open deals brought in from spreadsheets or your old CRM." },
      { step: "Connect", body: "Email, calendar, phone system, accounts package and website forms wired in." },
      { step: "Train and go", body: "A working session with your team, then live. Changes and new modules added monthly." },
    ],
    proof: [
      { value: "Days", label: "From sign-off to live tenant" },
      { value: "0", label: "Per-seat fees" },
      { value: "100%", label: "Data ownership, exportable" },
    ],
    caseStudies: ["jcl-crm", "garage-roof", "apsweeperhire"],
    stack: ["Supabase", "Postgres", "Next.js", "Vercel", "n8n", "Claude", "Google Workspace", "Microsoft 365"],
    faqs: [
      {
        q: "How is this different from HubSpot or Pipedrive?",
        a: "No per-seat pricing, your data on your own database, and a team that will change the software when your process changes. Read the comparisons for the honest version.",
      },
      {
        q: "Can we start on Orriq CRM and go bespoke later?",
        a: "That is the intended path. Your tenant is extended in place; nothing is migrated.",
      },
      {
        q: "Is there a demo?",
        a: "Yes. Book a call and we will walk you through a live demo tenant with realistic data.",
      },
    ],
    engagement: [
      { title: "Monthly", body: "One flat monthly fee for the tenant, hosting, support and updates. Unlimited users." },
      { title: "Setup", body: "A one-off setup covering provisioning, import, integrations and training." },
    ],
  },
  {
    slug: "bespoke-crm",
    name: "Bespoke CRMs & platforms",
    tagline: "Operating systems modelled to how your business actually runs.",
    summary:
      "When your business has a shape no template can model, we build the platform around it: quote-to-cash, routes and jobs, field surveys, compliance, manufacturing boards, portals. Yours to own, live in weeks.",
    icon: "layers",
    bullets: [
      "Relational model built around your real entities",
      "Quotes, jobs, routes, forms, portals, accounts sync",
      "You own the code, the database and the docs",
    ],
    intro: [
      "A made-to-measure manufacturer, a scaffolding firm, a plant hire company and a roofing business do not run on the same ten pipeline stages. We model the business as it is: leads become customers, customers have quotes, quotes become jobs, jobs become runs, runs ship, deliveries bill, invoices post to Sage.",
      "Every build runs on the same proven stack, but the schema, the screens and the workflows are yours. We have shipped seven of these operating systems so far, from route-planned manufacturing to AI-first careers software.",
    ],
    deliverables: [
      {
        title: "Data model",
        body: "Self-hosted Postgres with your entities, relationships and row-level security. Typed end to end, versioned migrations, audit on every write.",
      },
      {
        title: "Operational screens",
        body: "Pipeline, jobs, quotes, scheduling, route planning, manufacturing boards, crew portals, customer portals. Designed for the people who use them all day.",
      },
      {
        title: "Quote-to-cash",
        body: "Configurable pricing, product options, PDF documents, status workflows, payment links, and clean posting into Sage, Xero or QuickBooks.",
      },
      {
        title: "Forms and field capture",
        body: "A no-code form builder with conditional logic for surveys, inspections and sign-offs. Photo capture on site from the mobile app.",
      },
      {
        title: "Integrations",
        body: "Telephony, email, WhatsApp, accounts, payments, e-commerce, Google and Microsoft. First-class, not Zapier glue.",
      },
      {
        title: "Automation and AI",
        body: "Workflows that run in the background with visible logs, and AI agents wired into your records rather than bolted on as a chat box.",
      },
    ],
    process: [
      { step: "Discovery", body: "We map every tool, workflow and data trail, and define the live-by-day-30 outcome." },
      { step: "Week 1", body: "Tenant spun up, schema modelled, auth and roles set. You log into a working shell by Friday." },
      { step: "Weeks 2 and 3", body: "Core modules built against real data. Integrations, automations and AI wired in. Weekly demos." },
      { step: "Week 4", body: "Cutover, training, documentation. Live and owned by you." },
      { step: "Ongoing", body: "Monthly retainer for hosting, support and a roadmap you set." },
    ],
    proof: [
      { value: "7", label: "Operating systems shipped" },
      { value: "30 days", label: "To live on a defined first build" },
      { value: "12+", label: "Live integrations across builds" },
    ],
    caseStudies: ["mighty-structural", "rr-access", "apsweeperhire", "garage-roof", "applyflow"],
    stack: ["Next.js", "Supabase", "Postgres", "n8n", "Capacitor", "Sage", "Stripe", "Vapi", "Claude"],
    faqs: [
      {
        q: "Live in 30 days, really?",
        a: "For a defined first-build outcome, yes, or you do not pay. We will not replace nine tools in a month, but we will get a useful operating layer live and keep building from there.",
      },
      {
        q: "What does it cost?",
        a: "Builds start from £15k for a focused first build and scale with module count and integration depth. Retainers from £2k a month including hosting, support and monthly improvements.",
      },
      {
        q: "Who owns it?",
        a: "You. The code lives in a repository you own, the database is your tenant. If we ever part ways, the lights stay on.",
      },
    ],
    engagement: [
      { title: "Fixed-scope build", body: "Outcome defined and written down before we start. 20% deposit, balance on handover." },
      { title: "Retainer", body: "Hosting, support and a monthly improvement budget. No per-seat pricing, ever." },
    ],
  },
  {
    slug: "custom-solutions",
    name: "Custom solutions & automation",
    tagline: "Bots, workflows and integrations for the jobs software never quite did.",
    summary:
      "Telegram and WhatsApp assistants that run your CRM, invoice bots for QuickBooks and Sage, booking and membership platforms, giveaway sites, inbox sweepers, statement reconciliation. If the process exists, we can automate it.",
    icon: "workflow",
    bullets: [
      "Telegram and WhatsApp assistants over your data",
      "Accounts automation: QuickBooks, Sage, Xero, Stripe",
      "Booking, membership and competition platforms",
    ],
    intro: [
      "Some of the most valuable things we build are not CRMs or websites. They are the odd-shaped jobs in between: a bot the scaffolding boss messages from the van to look up a job, an assistant that turns a text into a VAT-correct QuickBooks invoice, a nightly sweep that reconciles supplier invoices from an inbox into Sage.",
      "We have also built whole products this way: a competition platform handling wallets, instant wins, affiliates and campaigns, and a paid membership community for women in tech.",
    ],
    deliverables: [
      {
        title: "Messaging assistants",
        body: "Telegram and WhatsApp agents with tools over your CRM, calendar and accounts. Per-user permissions enforced in code, not in a prompt.",
      },
      {
        title: "Accounts automation",
        body: "Estimates and invoices from chat, remittance matching, statement reconciliation, VAT posting, Stripe and PayPal settlement into the ledger.",
      },
      {
        title: "Workflow engine",
        body: "n8n orchestration for email, webhooks, scheduling and notifications, with server-side TypeScript where the logic gets serious. Every run logged.",
      },
      {
        title: "Booking and membership",
        body: "Class schedules, credit packs, recurring memberships, Stripe subscriptions with trials, member portals and staff admin.",
      },
      {
        title: "Data migration",
        body: "Resumable pulls from the old system, transformed and loaded with reconciliation gates. We prove the numbers match to the penny before cutover.",
      },
      {
        title: "Integrations",
        body: "Phone systems, IMAP inboxes, WooCommerce, Google Search Console, Meta, Twilio, Cloudflare. Built once, documented, owned by you.",
      },
    ],
    process: [
      { step: "Map the job", body: "What triggers it, what data it touches, who needs to know when it runs." },
      { step: "Prototype", body: "A working version against real data within days, run in parallel with the manual process." },
      { step: "Harden", body: "Permissions, retries, logging, failure alerts. Adversarial review for anything touching money." },
      { step: "Hand over", body: "Documented, monitored, and yours." },
    ],
    proof: [
      { value: "24", label: "Tables behind one competition platform" },
      { value: "11", label: "QuickBooks tools in one Telegram assistant" },
      { value: "Nightly", label: "Inbox-to-ledger sweeps running unattended" },
    ],
    caseStudies: ["greenland-qbo-bot", "rawwins", "halzak-elevate"],
    stack: ["n8n", "Hermes agents", "Telegram", "WhatsApp", "QuickBooks", "Sage", "Stripe", "Supabase", "Docker"],
    faqs: [
      {
        q: "Can a bot really be trusted with our accounts?",
        a: "Only with the right guardrails. Read-only where read-only is right, VAT codes set in code, a draft you approve before anything is sent. We enforce limits in the tools, not in the prompt.",
      },
      {
        q: "Do you work with our existing tools?",
        a: "Almost always. Sage, QuickBooks, Xero, Stripe, Google, Microsoft, 8x8, WooCommerce and most things with an API or an inbox.",
      },
      {
        q: "How small a job will you take?",
        a: "If it saves a real person real hours every week, it is worth a conversation. Some of our best automations were a week's work.",
      },
    ],
    engagement: [
      { title: "Scoped piece of work", body: "A fixed quote for a defined automation or integration, usually days to a few weeks." },
      { title: "On retainer", body: "For clients on a monthly plan, automation work comes out of the improvement budget." },
    ],
  },
  {
    slug: "app-development",
    name: "App development",
    tagline: "iOS, Apple Watch and installable web apps on top of your platform.",
    summary:
      "Native iOS apps and home-screen widgets, an Apple Watch voice assistant, installable PWAs for crews and drivers, and App Store and TestFlight handled end to end. Every app talks to the same platform your office runs on.",
    icon: "smartphone",
    bullets: [
      "iOS apps via Capacitor with native Swift widgets",
      "Apple Watch voice assistant with hands-free replies",
      "Crew and driver PWAs with photo capture and routes",
    ],
    intro: [
      "The office runs the platform on a desktop. The people doing the work are on a phone in a van, on a roof or on a scaffold. We build the apps that put the same system in their pocket: job lists, route sheets, photo capture, sign-offs, and a voice assistant that answers from the wrist.",
      "For our own CRM we shipped an iOS app with nine native home-screen widgets and deep links, and an Apple Watch app with echo cancellation, barge-in and on-device speech. The same tooling is available for any platform we build.",
    ],
    deliverables: [
      {
        title: "iOS apps",
        body: "Capacitor-wrapped apps with native plugins for push, camera, location and secure storage. Signed, archived and uploaded to App Store Connect by us.",
      },
      {
        title: "Native widgets and deep links",
        body: "SwiftUI widgets for the figures that matter, each tapping through to the right screen via a validated URL scheme.",
      },
      {
        title: "Apple Watch",
        body: "A hands-free voice assistant on the wrist: voice processing, interruption, on-device speech synthesis, and a complication that launches straight into listening.",
      },
      {
        title: "PWAs for the field",
        body: "Installable web apps for crews and drivers that work offline-tolerant, capture photos on the job and sync back to the platform.",
      },
      {
        title: "Store and TestFlight",
        body: "Bundle IDs, provisioning, listing assets, privacy labels, review submission and TestFlight builds for your testers.",
      },
      {
        title: "Push and notifications",
        body: "Push tokens stored per device, notifications triggered from your workflows, delivered where the user actually is.",
      },
    ],
    process: [
      { step: "Decide the surface", body: "PWA, native wrapper or fully native, chosen by who uses it and where." },
      { step: "Build on the platform", body: "The app reads and writes the same database and auth as the web app. No second backend." },
      { step: "TestFlight", body: "Builds to your team's phones within the first week or two. Feedback turned around fast." },
      { step: "Ship and maintain", body: "Store submission handled. Updates ride the same release process as the web platform." },
    ],
    proof: [
      { value: "9", label: "Native widgets in the Orriq iOS app" },
      { value: "4", label: "Apps registered in App Store Connect" },
      { value: "1", label: "Backend shared by web, phone and watch" },
    ],
    caseStudies: ["mighty-structural", "rr-access", "garage-roof"],
    stack: ["Capacitor", "Swift", "SwiftUI", "WidgetKit", "watchOS", "Xcode", "App Store Connect", "PWA"],
    faqs: [
      {
        q: "Android too?",
        a: "Yes, through the same Capacitor project. Most of our clients are iPhone-first, so iOS ships first unless you tell us otherwise.",
      },
      {
        q: "Do we need our own Apple developer account?",
        a: "Ideally yes, so the app is published under your name. We set it up and manage it with you.",
      },
      {
        q: "Can the app work offline?",
        a: "Reads are cached and writes queue until there is signal. Full offline mode is scoped per app.",
      },
    ],
    engagement: [
      { title: "As part of a platform build", body: "Field apps are usually a module of the bespoke build, priced into the scope." },
      { title: "Standalone", body: "A fixed quote for an app on top of an existing platform, with store submission included." },
    ],
  },
  {
    slug: "ai-agents",
    name: "AI agents & voice",
    tagline: "Assistants that do the work, wired into your data.",
    summary:
      "AI phone agents that answer and quote out of hours, staff assistants that search every record and draft the reply, voice mode on mobile, transcription and summarisation of every call. Built on Claude, GPT and Gemini, running against your data only.",
    icon: "bot",
    bullets: [
      "AI phone agents that capture structured intent",
      "Staff assistants over CRM, calendar and accounts",
      "Call transcription, summaries and contact linking",
    ],
    intro: [
      "The useful version of AI in a business is not a chat box in the corner. It is the phone being answered at 7pm with a quote captured properly, the office manager asking one question and getting the answer from four systems, the sales call transcribed, summarised and linked to the contact before anyone has hung up.",
      "We run a fleet of these agents across our clients: voice agents on inbound lines, Telegram assistants with scoped permissions, staff assistants inside the CRM, and multi-agent setups where several assistants share one platform without sharing each other's memory.",
    ],
    deliverables: [
      {
        title: "Voice agents",
        body: "Inbound phone agents that greet, qualify, quote from your price list and book the follow-up, with structured output straight into the CRM.",
      },
      {
        title: "Staff assistants",
        body: "An assistant inside your platform that searches records, drafts emails and quotes, summarises history and acts within the permissions of the person asking.",
      },
      {
        title: "Messaging agents",
        body: "Telegram and WhatsApp assistants for owners and managers, with tools over jobs, contacts, vehicles, calendars and books.",
      },
      {
        title: "Call intelligence",
        body: "Recordings pulled from your phone system, transcribed, summarised, tagged and linked to the right contact and job.",
      },
      {
        title: "Document and image reasoning",
        body: "CV screening, invoice extraction, photo classification and survey reading with structured outputs into your schema.",
      },
      {
        title: "Guardrails",
        body: "Per-user allowlists, read-only tools where appropriate, approval steps before money moves, isolated memory per agent.",
      },
    ],
    process: [
      { step: "Pick the job", body: "One task with a clear input and output. Not 'add AI', but 'answer the phone and capture a quote'." },
      { step: "Wire the tools", body: "The agent gets exactly the functions it needs over your data, each one permission-checked." },
      { step: "Test with real traffic", body: "Shadow mode alongside the human process until the outputs are trusted." },
      { step: "Run and improve", body: "Logged, monitored, and tuned monthly from what it gets wrong." },
    ],
    proof: [
      { value: "3", label: "Parallel agents on one platform, isolated memory" },
      { value: "24/7", label: "Inbound quote capture by voice agent" },
      { value: "15 min", label: "Call log sync interval from telephony" },
    ],
    caseStudies: ["mighty-structural", "garage-roof", "greenland-qbo-bot"],
    stack: ["Claude", "OpenAI", "Gemini", "Vapi", "Hermes", "8x8", "Twilio", "Whisper", "n8n"],
    faqs: [
      {
        q: "Which models do you use?",
        a: "Whichever fits the task: Claude for structured reasoning and tool use, Gemini for vision, OpenAI where it wins on cost or speed. Local models where data must not leave the building.",
      },
      {
        q: "What about our data?",
        a: "Agents run against your tenant only, with tools that enforce who can see what. Prompts are not a security boundary, so we do not treat them as one.",
      },
      {
        q: "Will it replace staff?",
        a: "In our experience it removes the out-of-hours gap and the admin, and gives the team their afternoons back. The people stay.",
      },
    ],
    engagement: [
      { title: "Scoped agent", body: "A fixed quote for one agent with defined tools, tested and live in weeks." },
      { title: "Part of the platform", body: "AI modules are included in bespoke builds and available as add-ons to Orriq CRM tenants." },
    ],
  },
  {
    slug: "seo-and-ads",
    name: "SEO, ads & tracking",
    tagline: "Search rankings, paid campaigns and analytics you can trust.",
    summary:
      "Search Console-driven SEO with crawls, issue detection and automatic fixes, Google Ads planned and run against real search volume, and conversion tracking that counts what actually happened. All reported inside your CRM, not a third-party dashboard.",
    icon: "search",
    bullets: [
      "Rank tracking from Search Console, not scraped guesses",
      "Google and Meta campaigns with honest budgets",
      "Pixel and conversion tracking that counts correctly",
    ],
    intro: [
      "We came from marketing, and we still do it, but with engineering behind it. Rankings come from Google Search Console rather than a SERP scraper, sites are crawled for issues and the fixable ones are fixed automatically, and new pages are pushed to the index the day they publish.",
      "Paid campaigns get planned against real search volume for your area, and we will tell you when a budget cannot spend sensibly rather than spend it anyway. Tracking is checked end to end so a purchase is not counted twice and a lead is not lost.",
    ],
    deliverables: [
      {
        title: "SEO section in your CRM",
        body: "Keywords, ranks, crawl results, on-page audit, backlinks and analytics per site, with a task list of what to fix next.",
      },
      {
        title: "Crawls and auto-fixes",
        body: "Title, description, canonical, headings, alt text and schema checked on every page. Safe fixes applied automatically, the rest queued for review.",
      },
      {
        title: "Content that ranks",
        body: "Service, location and guide pages written for the queries your customers use, structured with FAQ and schema.",
      },
      {
        title: "Google Ads",
        body: "Campaign structure, keywords, negatives, ad copy and landing pages, planned from real search volume and run against a budget that can actually spend.",
      },
      {
        title: "Social and Meta",
        body: "Meta campaigns and organic content, with pixel and conversions API set up so results are attributable.",
      },
      {
        title: "Tracking and reporting",
        body: "GA4, Search Console, Ads and Meta pulled into your CRM dashboards. One place, real numbers.",
      },
    ],
    process: [
      { step: "Baseline", body: "Search Console, analytics and a full crawl. We show you where you actually stand." },
      { step: "Fix and build", body: "Technical issues resolved, content gaps filled, tracking verified." },
      { step: "Campaigns", body: "Paid activity planned with a written budget rationale and landing pages that convert." },
      { step: "Report monthly", body: "Ranks, traffic, leads and spend in one dashboard, with next month's actions." },
    ],
    proof: [
      { value: "GSC", label: "Source of truth for every rank we report" },
      { value: "Daily", label: "Search Console sync and issue detection" },
      { value: "Same day", label: "New pages submitted to the index" },
    ],
    caseStudies: ["apsweeper-website", "onyx-moving", "jcl-crm"],
    stack: ["Google Search Console", "GA4", "Google Ads", "Meta", "IndexNow", "Microsoft Clarity", "Supabase"],
    faqs: [
      {
        q: "Do you guarantee rankings?",
        a: "No, and be wary of anyone who does. We guarantee the technical foundation is right, the content exists, and you can see the real numbers.",
      },
      {
        q: "What is a sensible ad budget?",
        a: "It depends on search volume in your area. We check that first and tell you if the budget you had in mind cannot be spent well.",
      },
      {
        q: "Can you fix our tracking?",
        a: "Usually the first thing we do. Double-counted purchases and lost leads are more common than people think.",
      },
    ],
    engagement: [
      { title: "Monthly", body: "SEO and reporting on a monthly plan alongside hosting and care." },
      { title: "Campaign management", body: "A management fee on top of ad spend, with the plan and budget agreed in writing first." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
