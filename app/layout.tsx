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
    default: "Orriq — The operating system your business should be running on.",
    template: "%s · Orriq",
  },
  description:
    "Orriq is the bespoke CRM, AI, and automation layer that replaces the patchwork of generic SaaS your business is duct-taped together with. One platform. Your schema. Your data. Built for you, owned by you.",
  openGraph: {
    title: "Orriq — The operating system your business should be running on.",
    description:
      "Bespoke CRM, AI, and automation. One operating layer. Built for you, owned by you.",
    url: "https://orriq.com",
    siteName: "Orriq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orriq",
    description: "The operating system your business should be running on.",
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
