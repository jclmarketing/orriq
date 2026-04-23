import Link from "next/link";
import { Logo } from "@/components/shared/logo";

const groups = [
  {
    title: "Product",
    items: [
      { href: "/platform", label: "Platform" },
      { href: "/work", label: "Case studies" },
      { href: "/get-started", label: "Get started" },
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
  {
    title: "Company",
    items: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
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
              Orriq is a bespoke operational infrastructure, built by{" "}
              <a
                href="https://jclmarketing.co.uk"
                className="text-cream/80 hover:text-cream transition-colors"
              >
                JCL Marketing
              </a>
              . For companies that refuse to run on generic SaaS.
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
              href="mailto:jon@jclmarketing.co.uk"
              className="hover:text-cream transition-colors"
            >
              jon@jclmarketing.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
