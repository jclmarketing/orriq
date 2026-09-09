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
  /** What kind of build this is. Drives the filter on /work. */
  type: "platform" | "website" | "app" | "automation";
  /** Live URL, when public. */
  url?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mighty-structural",
    client: "Mighty Structural",
    industry: "Made-to-measure manufacturing · Trade",
    headline: "A route-planned, quote-to-cash platform for a manufacturing firm.",
    summary:
      "Routes, runs, deliveries, made-to-measure quotes, PDF work orders, invoicing, Sage posting, Vapi phone agent, and an IMAP sweep that reconciles invoices without anyone touching a spreadsheet.",
    image: "/assets/ui/mighty-route.png",
    uiMockup: "/assets/ui/mighty-quote.png",
    url: "https://crm.mightystructural.com",
    metrics: [
      { label: "Entities replaced", value: "9" },
      { label: "Route optimiser", value: "Nearest-neighbour" },
      { label: "VAT cycle", value: "Hours, not days" },
    ],
    challenge:
      "A made-to-measure manufacturer running on Sage for books, a spreadsheet for quotes, paper-printed route sheets for drivers, WhatsApp for delivery status, and IMAP for invoice capture. Five systems, none talking to each other. Every VAT cycle took a week of reconciliation. Nobody could see a whole job from survey to paid invoice.",
    solution:
      "A single platform with a real relational model: leads become customers, customers have quotes, quotes become jobs, jobs become runs, runs ship via deliveries, deliveries bill via invoices, invoices post to Sage. A visual route planner with drag-and-drop reordering and a nearest-neighbour optimiser. Embedded quote widget for the WooCommerce product catalogue. Vapi AI voice agent handling inbound calls, capturing structured quote intent. n8n IMAP sweep reading sales@ and reconciling invoices to Sage nightly.",
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
          "n8n IMAP sweep: sales@ inbox reconciled to Sage nightly",
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
    type: "platform",
  },
  {
    slug: "mighty-website",
    client: "Mighty Structural Products",
    industry: "Manufacturing · E-commerce storefront",
    type: "website",
    url: "https://mightystructural.com",
    headline: "A made-to-measure roofing storefront with a live catalogue, a quote builder and three ways to pay.",
    summary:
      "The public site and shop for a Walsall roofing-sheet manufacturer: product catalogue driven from the CRM database, per-colour pricing, a multi-step made-to-measure quote builder, Stripe, PayPal and bank transfer at checkout, and a scroll-scrubbed video hero. Hosted and cached by us.",
    image: "/assets/work/mighty-website.jpg",
    metrics: [
      { label: "Payment methods", value: "3" },
      { label: "Quote builder steps", value: "10" },
      { label: "Backend", value: "CRM, not Woo" },
    ],
    challenge:
      "A manufacturer selling made-to-measure roofing sheets, flashings and accessories through WooCommerce, with prices that depended on profile, colour and length, and a quote process that lived in the sales team's heads. The shop and the CRM did not share a product, a price or a customer.",
    solution:
      "A custom WordPress theme with a WooCommerce replacement plugin: the catalogue, variations, stock and prices come from the same database as the CRM, so a price change in the office is a price change on the site. A multi-step quote builder handles dimensions, profile and colour, add-ons, barge and ridge configuration, rooflights, delivery and an itemised review. Checkout supports Stripe, PayPal and bank transfer, and every order lands on the CRM as a job. Server-side caching tuned so carts and checkouts never serve stale.",
    outcomes: [
      "One product catalogue shared by the shop, the CRM and the quote widget",
      "Per-colour pricing correct everywhere, including the product page",
      "Website orders and paid quotes become CRM jobs without re-keying",
      "Delivery charges, weights and cut-off rules maintained in one place",
    ],
    featureGroups: [
      {
        title: "Storefront",
        items: [
          "Catalogue, variations and stock driven from the CRM database",
          "Made-to-measure quote builder with itemised review",
          "Scroll-scrubbed video hero and unified brand cards",
          "Stripe, PayPal and bank transfer checkout",
        ],
      },
      {
        title: "Operations",
        items: [
          "Orders and paid quotes create CRM jobs and Sage invoices",
          "Delivery charges and product weights from the database",
          "Cache and nonce tuning so cart and checkout never go stale",
          "Bot filtering at the edge after a traffic spike",
        ],
      },
    ],
    stack: ["WordPress", "PHP", "Supabase", "Stripe", "PayPal", "LiteSpeed Cache", "Cloudflare"],
    year: "2026",
  },
  {
    slug: "garage-roof",
    client: "Garage Roof Company",
    industry: "Roofing & construction",
    headline: "Survey-to-installation CRM for a roofing specialist.",
    summary:
      "A survey capture tool with property photos and sketched dimensions, a product configurator with pricing rules and VAT, route-optimised crew scheduling, and an instant quote engine, all shaped to how roofers actually sell and deliver.",
    image: "/assets/ui/garage-roof-survey.png",
    uiMockup: "/assets/ui/sidekick-calls.png",
    url: "https://crm.garageroofcompany.co.uk",
    metrics: [
      { label: "Quote turnaround", value: "Hours" },
      { label: "HubSpot saved", value: "£4.8k/yr" },
      { label: "Views", value: "Calendar + map + list" },
    ],
    challenge:
      "Generic CRMs force tradespeople into 'deals' and 'stages' that don't reflect how roofing jobs actually flow, survey, quote, booking, delivery, handover. Lead data was getting lost in HubSpot's opinionated object model. Photos of job sites lived in WhatsApp. Quotes lived in Word. Nothing joined up.",
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
    type: "platform",
  },
  {
    slug: "garage-roof-website",
    client: "Garage Roof Company",
    industry: "Roofing · Website, SEO and lead capture",
    type: "website",
    url: "https://garageroofcompany.co.uk",
    headline: "The website, guides hub and lead capture behind a roofing CRM.",
    summary:
      "The public site for a roofing business whose CRM we also built: a theme optimised from staging, a guides section built for search, service-area pages, before-and-after video, cookie consent, and every form posting straight into their Supabase CRM.",
    image: "/assets/work/garage-roof-website.jpg",
    metrics: [
      { label: "Forms", value: "→ CRM" },
      { label: "Guides", value: "SEO hub" },
      { label: "Areas", value: "Custom post type" },
    ],
    challenge:
      "A roofing company generating leads online but losing them between the website, an inbox and a spreadsheet. The site needed to rank across service areas, show real transformations, and put each enquiry into the CRM as a lead the moment it was submitted.",
    solution:
      "Theme optimisation on a staging copy before pushing live, a service-area custom post type for local pages, a guides hub for search traffic, before-and-after transformation videos, Rank Math configured properly, and a consent banner. Website forms post into the same Supabase database as the CRM, so leads appear on the pipeline with no re-keying.",
    outcomes: [
      "Website enquiries land in the CRM pipeline automatically",
      "Local pages for every service area on a maintainable post type",
      "Guides hub bringing in informational search traffic",
      "Site, CRM and crew portal all under one roof",
    ],
    featureGroups: [
      {
        title: "Site",
        items: [
          "Theme optimisation from staging to live",
          "Service-area custom post type",
          "Guides SEO hub",
          "Before-and-after video pairs",
        ],
      },
      {
        title: "Lead capture",
        items: [
          "Forms posting into the Supabase CRM",
          "Rank Math SEO configuration",
          "Cookie consent with gated analytics",
          "Hosted and monitored on our servers",
        ],
      },
    ],
    stack: ["WordPress", "Breakdance", "Supabase", "OpenLiteSpeed", "Rank Math"],
    year: "2026",
  },
  {
    slug: "rr-access",
    client: "RR Access",
    industry: "Access & compliance management",
    headline: "Access management for a business Salesforce wouldn't fit.",
    summary:
      "Dynamic form builder, employee activity map, vehicle defects, qualification tracking, scaffold + PPE checklists, a weight calculator, and a separate customer portal, shipped in three weeks against a nine-month enterprise quote.",
    image: "/assets/ui/rr-access-formbuilder.png",
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
      "Their workflow preserved: we shaped the software to it",
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
    type: "platform",
  },
  {
    slug: "apsweeperhire",
    client: "AP Sweeper Hire",
    industry: "Plant & vehicle hire",
    headline: "Fleet ops for a road sweeper hire company.",
    summary:
      "Daily vehicle scheduling, defect logs, license and compliance tracking, SMS/email comms templates, and a custom form builder for site-specific inspections, all wired into one operator dashboard.",
    image: "/assets/ui/apsweeper-schedule.png",
    url: "https://crm.apsweeperhire.co.uk",
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
    type: "platform",
  },
  {
    slug: "apsweeper-website",
    client: "AP Sweeper Hire",
    industry: "Road sweeper hire · Website",
    type: "website",
    url: "https://www.apsweeperhire.co.uk",
    headline: "A page-builder site rebuilt as a hand-coded theme, with a video hero shot on their own machines.",
    summary:
      "The public site for a road sweeper hire company whose CRM we also run: Breakdance replaced with a custom theme, a hero video from a full-day shoot of their fleet, quote forms that email the office and store every lead, and every service and area page kept on its existing URL.",
    image: "/assets/work/apsweeper-website.jpg",
    metrics: [
      { label: "Page builder", value: "Removed" },
      { label: "Hero video", value: "Own fleet" },
      { label: "Leads", value: "Stored + emailed" },
    ],
    challenge:
      "A busy hire company with a Breakdance site that was slow to edit, slow to load and locked into a builder nobody wanted to maintain. It needed to keep every ranking URL, look like a serious fleet operator, and get quote requests to the office fast.",
    solution:
      "A hand-coded WordPress theme in the brand's lime and navy, keeping the post types and fields that hold the content and the reviews widget the client likes. A full-day shoot of the fleet produced the hero footage, optimised into three lazy-loaded variants that pause off-screen. Quote forms are part of the theme and both email the office and store the lead. Server caching was retuned after the builder's stale-CSS layer was removed.",
    outcomes: [
      "Every existing page and URL preserved, no ranking loss",
      "A hero that shows their actual sweepers on real sites",
      "Quote requests emailed and stored the moment they are sent",
      "Site, CRM, driver portal and Telegram run sheets under one roof",
    ],
    featureGroups: [
      {
        title: "Theme",
        items: [
          "Custom PHP theme replacing Breakdance entirely",
          "Optimised hero video with poster, lazy load and pause off-screen",
          "Services, areas and gallery on the original URLs",
          "Reviews and WhatsApp widgets retained",
        ],
      },
      {
        title: "Plumbing",
        items: [
          "Native quote forms with SMTP delivery and stored leads",
          "LiteSpeed cache retuned after removing the builder",
          "Hosted and monitored on our servers",
          "Linked to the AP Sweeper Hire CRM and driver portal",
        ],
      },
    ],
    stack: ["WordPress", "PHP", "OpenLiteSpeed", "LiteSpeed Cache", "Meta Box", "Cloudflare"],
    year: "2026",
  },
  {
    slug: "rawwins",
    client: "Raw Wins",
    industry: "Prize competitions · E-commerce platform",
    type: "platform",
    url: "https://www.rawwins.co.uk",
    headline: "A competition platform with wallets, instant wins, affiliates, campaigns and its own isolated database.",
    summary:
      "Ticketed competitions, free scratch-and-win, instant wins, a credit wallet, affiliate codes with sign-up tracking, abandoned-basket recovery, bulk email and SMS campaigns, and Meta conversion tracking that counts correctly. Running on its own self-hosted Supabase behind a Cloudflare tunnel.",
    image: "/assets/work/rawwins.jpg",
    metrics: [
      { label: "Tables", value: "24" },
      { label: "Campaign channels", value: "Email + SMS" },
      { label: "Database", value: "Isolated" },
    ],
    challenge:
      "A prize competition business needed a proper platform rather than a plugin: atomic ticket purchase so two people cannot buy the same number, instant-win logic, a wallet for credit, an affiliate programme, and marketing tools to bring entrants back. It also needed its customer data fully separated from anything else we run.",
    solution:
      "A Next.js application on a dedicated self-hosted Supabase instance with its own auth, storage and network. Atomic purchase RPCs, instant-win payouts, wallet ledger, affiliate codes with a live sign-up tracking card, abandoned-basket capture with a recovery cron, an admin campaign composer with resumable batch sending over email and SMS, unsubscribe and consent handling, an 18+ date-of-birth gate, and a Meta pixel with a double-count fix for credit-paid orders. Deployed on a VPS behind a Cloudflare tunnel with staging on a branded subdomain.",
    outcomes: [
      "Migrated to an isolated database with zero restore errors and full parity",
      "Affiliates see their own sign-ups and orders in real time",
      "Abandoned baskets recovered automatically every five minutes",
      "Ad attribution corrected so purchases and new customers are counted once",
    ],
    featureGroups: [
      {
        title: "Entrants",
        items: [
          "Competitions with ticket picking, galleries and countdowns",
          "Free scratch-and-win and instant wins with payouts",
          "Credit wallet, checkout, order history and entries",
          "Affiliate codes, winners page, community",
        ],
      },
      {
        title: "Operator",
        items: [
          "Admin composer for bulk email and SMS with resumable batches",
          "Abandoned-basket capture, recovery cron and reporting",
          "Consent-gated Meta pixel with corrected purchase events",
          "Archive-not-delete on competitions, with recovery tooling",
        ],
      },
    ],
    stack: ["Next.js", "Supabase", "Postgres", "Stripe", "Twilio", "EmailIt", "Cloudflare", "Docker"],
    year: "2026",
  },
  {
    slug: "alehub",
    client: "Ale Hub",
    industry: "Micropubs · Website, hosting and app launch",
    type: "website",
    url: "https://www.alehub.co.uk",
    headline: "The website and app launch campaign for a seven-location micropub group.",
    summary:
      "Locations, events, merchandise and franchise pages for a growing micropub brand, hosted and maintained by us, plus the app download campaign: a rotating header banner, a homepage section with a phone mockup walking through the app, and a launch popup styled to the brand.",
    image: "/assets/work/alehub.jpg",
    metrics: [
      { label: "Locations", value: "7" },
      { label: "App stores", value: "iOS + Android" },
      { label: "Hosted by", value: "Orriq" },
    ],
    challenge:
      "A micropub group with pubs across Solihull, Birmingham, Worcester and Warwick, a loyalty app about to launch, and a website that needed to sell events, merchandise and franchising while pushing every visitor towards the download.",
    solution:
      "The site runs on WordPress on our managed servers with staging on a branded subdomain. For the app launch we built a small plugin rather than more builder blocks: a gold header banner that rotates between newsletter and app messages, a homepage section with a dark phone mockup playing a deterministic walkthrough of the app screens, and a popup with App Store and Google Play buttons styled to match the site's cookie banner. Built and approved on staging, then ported to live with media re-imported and caches cleared.",
    outcomes: [
      "App download prompts on every page without touching the builder templates",
      "Homepage walkthrough video built from real app screenshots",
      "Staging-first workflow so the client signs off before anything goes live",
      "Hosted, cached and monitored alongside the rest of the estate",
    ],
    featureGroups: [
      {
        title: "Site",
        items: [
          "Locations, events, merchandise and franchise pages",
          "Table booking and event links",
          "Managed WordPress hosting with staging",
          "LiteSpeed caching and Cloudflare",
        ],
      },
      {
        title: "App launch",
        items: [
          "Rotating header banner with store icons",
          "Homepage phone mockup with app walkthrough video",
          "Launch popup matched to the brand's banner style",
          "Store links for iOS and Android",
        ],
      },
    ],
    stack: ["WordPress", "Breakdance", "PHP", "ffmpeg", "OpenLiteSpeed", "Cloudflare"],
    year: "2026",
  },
  {
    slug: "jcl-crm",
    client: "JCL Marketing",
    industry: "Agency · Internal platform",
    headline: "The internal platform we refused to buy.",
    summary:
      "Pipeline, projects, uptime monitors, call logs, LinkedIn prospecting, email warmup, SEO audits, and a full suite of Paperclip AI agents, one multi-tenant operating system for an agency that runs on its own medicine.",
    image: "/assets/ui/jcl-pipeline.png",
    metrics: [
      { label: "Tools replaced", value: "11" },
      { label: "Uptime monitors", value: "37" },
      { label: "Tenancy model", value: "Multi" },
    ],
    challenge:
      "The agency was running on HubSpot, Monday, ClickUp, Pipedrive, a spreadsheet for invoices, Uptime Robot, a separate LinkedIn automation tool, and three Zapier chains holding it together. Context was scattered across nine SaaS tabs. Data was rented. Nothing connected. Every new client meant configuring nine tools again.",
    solution:
      "A self-hosted multi-tenant platform on Supabase: one core with isolated per-division schemas. Pipeline and projects native. 37 uptime monitors pulled from Uptime Kuma into a live dashboard. Paperclip, our internal orchestration agent, wired across the stack. 8x8 call logs sync every 15 minutes. Built-in LinkedIn prospecting with daily summaries. Email warmup domain config. SEO audits running in-platform, not syndicated to third-party dashboards.",
    outcomes: [
      "Nine tools collapsed into one operating interface",
      "Agent-driven status updates replace standup meetings",
      "Every new client is a new tenant, live in hours",
      "Zero vendor lock-in: runs on our own infrastructure",
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
          "Paperclip: autonomous orchestration agent via service-ctl",
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
    type: "platform",
  },
  {
    slug: "halzak-elevate",
    client: "Halzak Elevate",
    industry: "Membership community · Women in tech",
    type: "platform",
    url: "https://elevate.halzak.com",
    headline: "A paid membership community that replaced a SharePoint volunteer centre.",
    summary:
      "Public community, a PRO tier with a £1 thirty-day trial rolling into monthly or annual plans, rich-text posts and events, real-time messaging and an admin that schedules content. Built on Supabase and Stripe with transactional email.",
    image: "/assets/work/halzak-elevate.jpg",
    metrics: [
      { label: "Trial to plan", value: "£1 → £10/mo" },
      { label: "Messaging", value: "Realtime" },
      { label: "Replaced", value: "SharePoint" },
    ],
    challenge:
      "A community for women in tech running on a SharePoint site that members struggled to use and the organisers could not monetise. They needed a public face, a paid tier with a low-friction trial, events and posts, and a way for members to talk to each other.",
    solution:
      "A Next.js application on a dedicated Supabase schema with cookie-based auth. Stripe subscriptions using schedules for a two-phase £1 trial that rolls into the chosen plan. TipTap rich-text editing for posts and events, scheduled publishing via a daily job, Supabase Realtime for conversations and messages, and transactional email through an API provider with a fallback.",
    outcomes: [
      "Live on the client's own domain with production Stripe from day one",
      "Trial and plan rollover handled by Stripe schedules, not custom billing code",
      "Members message in real time inside the platform",
      "Organisers schedule posts and events from an admin, no developer needed",
    ],
    featureGroups: [
      {
        title: "Members",
        items: [
          "Public community with join flow",
          "PRO tier: £1 for 30 days, then monthly or annual",
          "Realtime conversations and messages",
          "Events and posts with rich text",
        ],
      },
      {
        title: "Platform",
        items: [
          "Stripe Checkout in subscription mode with schedules",
          "Cookie-based Supabase auth with SSR",
          "Daily cron publishing scheduled content",
          "Transactional email with provider fallback",
        ],
      },
    ],
    stack: ["Next.js", "Supabase", "Stripe", "TipTap", "Vercel", "EmailIt"],
    year: "2026",
  },
  {
    slug: "onyx-moving",
    client: "Onyx Moving Services",
    industry: "Removals · West Midlands",
    type: "website",
    url: "https://www.onyxmovingservices.co.uk",
    headline: "From a leaflet to a 26-page removals site with enquiries flowing into a workflow.",
    summary:
      "Onyx had a leaflet and a phone number. We built the brand into a site with ten service pages, ten area pages, guides, reviews and FAQs, moved their email onto a proper host and routed every quote form through an n8n workflow to the inbox.",
    image: "/assets/work/onyx-moving.jpg",
    metrics: [
      { label: "Pages", value: "26" },
      { label: "Service pages", value: "10" },
      { label: "Area pages", value: "10" },
    ],
    challenge:
      "No website, no email hosting, no brand assets beyond a printed leaflet. The business needed to show up for removals searches across Solihull, Birmingham and the wider West Midlands, take quote requests around the clock, and look established from day one.",
    solution:
      "A static build generated from data arrays: home, about, reviews, contact, service and area hubs, ten service pages, ten area pages, six guides, FAQ and claims pages, plus a mega menu and WhatsApp float. Both quote forms post to an n8n webhook that emails the office with reply-to set to the enquirer. Email moved to Hostinger with SPF, DKIM and DMARC set. Cookie banner with consent-gated analytics. Domain attached through Cloudflare with apex redirecting to www.",
    outcomes: [
      "Live on their own domain within days of the brief",
      "Every enquiry lands in the inbox via a logged workflow, not a mailto link",
      "Email deliverability fixed with proper DNS records",
      "Content expanded from 5 services and 7 areas to 10 and 10 on the client's brief",
    ],
    featureGroups: [
      {
        title: "Pages and content",
        items: [
          "10 service pages from house removals to long-distance moves",
          "10 area pages across the West Midlands",
          "6 guides, FAQ, claims and reviews pages",
          "Mega menu, WhatsApp float, consent banner",
        ],
      },
      {
        title: "Plumbing",
        items: [
          "Quote forms to n8n webhook to SMTP, reply-to the enquirer",
          "Cloudflare DNS, apex to www redirect, Vercel hosting",
          "Hostinger email with SPF, DKIM and DMARC",
          "Registered in the JCL CRM as a monitored website",
        ],
      },
    ],
    stack: ["Static HTML", "Node", "Vercel", "n8n", "Cloudflare", "Hostinger"],
    year: "2026",
  },
  {
    slug: "trio-construction",
    client: "Trio Construction Group",
    industry: "Construction · Solihull",
    type: "website",
    url: "https://triocg.co.uk",
    headline: "A static site with 34 pages, real before-and-afters and an interactive trade explorer.",
    summary:
      "A Solihull builder with no web presence beyond Instagram. We rebuilt the logo as a vector, wrote twelve service and fourteen area pages, pulled genuine project photography from their CRM albums and shipped a fast static site on the edge.",
    image: "/assets/work/trio-construction.jpg",
    metrics: [
      { label: "Pages", value: "34" },
      { label: "Service pages", value: "12" },
      { label: "Area pages", value: "14" },
    ],
    challenge:
      "Trio had the work and the photos but nothing online to send a prospect to. The only logo was a 150 pixel Instagram avatar. Any site needed to rank for building work across Solihull and Birmingham without reading like every other builder template.",
    solution:
      "A static generator that builds every page from a single set of business, service, area and project data. Twelve service pages, fourteen area pages, four case studies with draggable before-and-after sliders using genuine matched pairs, and an interactive trade explorer on the home and services pages. Photography came from the Trio album in their CRM, with low-resolution social images replaced and customer names stripped from public copy.",
    outcomes: [
      "Vector logo lockup rebuilt from scratch and used across the site",
      "Four case studies with real before-and-after photography",
      "No dependencies, no CMS to patch, deployed to the edge on their own domain",
      "Google Ads plan produced against real Solihull search volume",
    ],
    featureGroups: [
      {
        title: "Pages and content",
        items: [
          "Home, services hub, 12 service pages, 14 area pages, 4 projects, about, contact",
          "Interactive trade explorer replacing the usual card grid",
          "Draggable before-and-after sliders on every project",
          "Contact details, socials and areas held in one data file",
        ],
      },
      {
        title: "Build and deploy",
        items: [
          "Node static generator, zero runtime dependencies",
          "Deployed to Vercel on apex and www with clean URLs",
          "Coming-soon gate for launch, lifted on the client's say-so",
          "Brand: ink, orange and amber with Montserrat and Inter",
        ],
      },
    ],
    stack: ["Static HTML", "Node", "Vercel", "Cloudflare"],
    year: "2026",
  },
  {
    slug: "greenland-qbo-bot",
    client: "Greenland Services",
    industry: "Grounds maintenance · Accounts automation",
    type: "automation",
    headline: "A Telegram assistant that raises QuickBooks estimates and invoices from a text message.",
    summary:
      "Message the bot with the customer, the work and the prices. It finds the customer, builds the document with the right UK VAT code on every line, shows you the draft, and sends it from QuickBooks when you say so. Live on production books.",
    image: "/assets/work/greenland-qbo-bot.jpg",
    metrics: [
      { label: "QuickBooks tools", value: "11" },
      { label: "VAT handling", value: "Per line" },
      { label: "Channel", value: "Telegram" },
    ],
    challenge:
      "A grounds maintenance company whose owner was raising estimates and invoices in QuickBooks Online from the van, on a phone, at the end of the day. Slow, error-prone, and UK VAT rules meant a missing tax code on any line would be rejected outright.",
    solution:
      "A self-hosted Hermes agent with a purpose-built QuickBooks integration: company info, queries, reports, customer lookup, item lookup, estimate and invoice creation, sending, and tax code listing. Every line gets a VAT code and the document is created tax-exclusive so QuickBooks accepts it first time. The agent is Telegram-only with an allowlist, and shows a draft before anything is sent. Taken from the Intuit sandbox through the production app review, with the legal and connection pages hosted on our own domain.",
    outcomes: [
      "Estimates and invoices raised from a chat message on the real company books",
      "UK VAT applied correctly on every line, no rejected documents",
      "Owner approves a draft before anything reaches a customer",
      "Single-use token handling done properly so the connection never breaks",
    ],
    featureGroups: [
      {
        title: "Agent",
        items: [
          "Telegram bot with per-user allowlist",
          "Draft, confirm, send flow for anything that reaches a customer",
          "Customer and item lookup before creating documents",
          "Reports and queries for a quick view of the books",
        ],
      },
      {
        title: "Integration",
        items: [
          "11-tool QuickBooks integration written from scratch",
          "TaxCodeRef per line, tax-exclusive totals",
          "Production Intuit app with hosted EULA, privacy and connect pages",
          "Rotating refresh token owned by one process",
        ],
      },
    ],
    stack: ["Hermes", "Python", "QuickBooks Online", "Telegram", "Docker"],
    year: "2026",
  },
  {
    slug: "applyflow",
    client: "ApplyFlow",
    industry: "Careers SaaS · AI",
    headline: "An AI CV platform shipped on shared infrastructure.",
    summary:
      "A structured CV builder with Claude-powered rewriting, a job feed aggregator, auto-apply workflows, and subscription-gated AI, all delivered as a tenant on the Orriq core in weeks rather than quarters.",
    image: "/assets/ui/applyflow-cv.png",
    metrics: [
      { label: "Auth & billing", value: "Shared core" },
      { label: "AI providers", value: "Claude + Gemini" },
      { label: "Time to launch", value: "Weeks" },
    ],
    challenge:
      "ApplyFlow wanted to launch quickly, but off-the-shelf SaaS starters locked them into rigid data models and templated auth flows. They needed structured CV entities (experience, education, skills), AI rewriting that respected job-specific context, and auto-apply capability, none of which fit a generic starter.",
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
    type: "platform",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
