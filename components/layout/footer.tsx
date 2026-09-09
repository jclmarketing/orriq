import Link from "next/link";
import { Logo } from "@/components/shared/logo";

const groups = [
  {
    title: "Services",
    items: [
      { href: "/services/websites", label: "Websites" },
      { href: "/services/hosting", label: "Hosting & care" },
      { href: "/services/crm", label: "Orriq CRM" },
      { href: "/services/bespoke-crm", label: "Bespoke platforms" },
      { href: "/services/custom-solutions", label: "Automation" },
      { href: "/services/app-development", label: "App development" },
      { href: "/services/ai-agents", label: "AI agents & voice" },
      { href: "/services/seo-and-ads", label: "SEO, ads & tracking" },
    ],
  },
  {
    title: "Company",
    items: [
      { href: "/platform", label: "Platform" },
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/get-started", label: "Get started" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Compare",
    items: [
      { href: "/vs/monday", label: "vs Monday" },
      { href: "/vs/hubspot", label: "vs HubSpot" },
      { href: "/vs/salesforce", label: "vs Salesforce" },
      { href: "/vs/notion", label: "vs Notion" },
      { href: "/vs/asana", label: "vs Asana" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative hairline-t mt-32 bg-obsidian">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-14 pt-20 pb-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-fog">
              Orriq builds and runs everything a business runs on: the
              website, the hosting, the CRM, the apps in the field and the
              automation and AI in between. One team, on infrastructure you
              own. Formerly JCL Marketing.
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-fog-2">
              Built on Orriq.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog-2">
                  {g.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {g.items.map((i) => (
                    <li key={i.href}>
                      <Link
                        href={i.href}
                        className="text-[14px] text-cream/75 hover:text-cream transition-colors"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 hairline-t flex flex-col md:flex-row justify-between gap-4 text-[12px] text-fog">
          <div>© {new Date().getFullYear()} Orriq. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Registered in England.</span>
            <a
              href="mailto:jon@orriq.com"
              className="hover:text-cream transition-colors"
            >
              jon@orriq.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
