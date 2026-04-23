import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
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

const displaySerif = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orriq.com"),
  title: {
    default: "Orriq — Software built around your business.",
    template: "%s · Orriq",
  },
  description:
    "Orriq builds bespoke operational infrastructure for companies that refuse to bend themselves around generic SaaS. Custom CRM, AI, automation — owned by you.",
  openGraph: {
    title: "Orriq — Software built around your business.",
    description:
      "Bespoke operational infrastructure. Custom CRM, AI, automation — owned by you.",
    url: "https://orriq.com",
    siteName: "Orriq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orriq",
    description: "Software built around your business.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable}`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-obsidian text-cream">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
