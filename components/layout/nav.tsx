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
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background,backdrop-filter,border-color] duration-300",
        scrolled
          ? "bg-obsidian/70 backdrop-blur-xl hairline-b"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-6 md:px-10 lg:px-14">
        <Link href="/" aria-label="Orriq home" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-[13.5px] text-cream/70 hover:text-cream transition-colors"
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
            Get started
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
      {open && (
        <div className="md:hidden bg-obsidian/95 backdrop-blur-xl hairline-t">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-cream/80 text-lg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button href="/contact" variant="secondary" size="md" className="flex-1">
                Contact
              </Button>
              <Button href="/get-started" size="md" className="flex-1" trailingArrow>
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
