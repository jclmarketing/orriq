"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/shared/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/work", label: "Work" },
  { href: "/vs", label: "Compare" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "py-2"
          : "py-3",
      )}
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div
          className={cn(
            "flex h-12 md:h-14 items-center justify-between rounded-full px-4 md:px-5 transition-all",
            scrolled ? "glass-strong" : "glass",
          )}
        >
          <Link href="/" aria-label="Orriq home" className="shrink-0">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[13.5px] font-medium text-cream/75 hover:text-cream transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button href="/contact" variant="ghost" size="sm">
              Contact
            </Button>
            <Button href="/get-started" size="sm" trailingArrow>
              Start a build
            </Button>
          </div>
          <button
            className="md:hidden text-cream/80 p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-2 mx-4">
          <div className="glass-strong rounded-2xl p-5">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-cream/85 text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-2 pt-3 mt-3 hairline-t">
              <Button href="/contact" variant="secondary" size="md" className="flex-1">
                Contact
              </Button>
              <Button href="/get-started" size="md" className="flex-1" trailingArrow>
                Start a build
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
