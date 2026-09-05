import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://code201.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Code201 — Healthcare Operations, Engineered Properly",
    template: "%s · Code201",
  },
  description:
    "Code201 works alongside ambitious healthcare teams to build CRMs, automation, analytics, and AI systems that reduce operational chaos and revenue leakage.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Code201",
    title: "Code201 — Healthcare Operations, Engineered Properly",
    description:
      "Code201 works alongside ambitious healthcare teams to build CRMs, automation, analytics, and AI systems that reduce operational chaos and revenue leakage.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code201 — Healthcare Operations, Engineered Properly",
    description:
      "Code201 works alongside ambitious healthcare teams to build CRMs, automation, analytics, and AI systems that reduce operational chaos and revenue leakage.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Code201",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Forward-deployed healthcare engineering — building CRMs, automation, analytics, and AI systems alongside ambitious healthcare teams.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased overflow-x-hidden max-w-full">
        {/* Image CDN hints for the Unsplash-hosted banner photos */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
