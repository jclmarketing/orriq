import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orriq.com"),
  title: {
    default: "Orriq · Websites, hosting, CRM, apps and automation for UK businesses",
    template: "%s · Orriq",
  },
  description:
    "Orriq builds and runs everything a business runs on: websites, managed hosting, Orriq CRM, bespoke platforms, custom automation, iOS and web apps, AI agents and search marketing. One team, infrastructure you own.",
  openGraph: {
    title: "Orriq · Websites, hosting, CRM, apps and automation",
    description:
      "Everything your business runs on, built by one team. Websites, hosting, CRM, bespoke platforms, apps, automation and AI.",
    url: "https://orriq.com",
    siteName: "Orriq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orriq",
    description: "Everything your business runs on, built by one team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-obsidian text-cream antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
