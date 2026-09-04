import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Code201 — EHR, Practice Management & Billing for Modern Clinics",
    template: "%s · Code201",
  },
  description:
    "Code201 unifies charting, scheduling, telehealth, and medical billing in one HIPAA-compliant platform for independent practices and clinics.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Code201",
    title: "Code201 — EHR, Practice Management & Billing for Modern Clinics",
    description:
      "Scheduling, charting, billing, and telehealth — unified in one HIPAA-compliant workspace, built by clinicians for clinical teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code201 — EHR, Practice Management & Billing for Modern Clinics",
    description:
      "Scheduling, charting, billing, and telehealth — unified in one HIPAA-compliant workspace, built by clinicians for clinical teams.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Code201 Health, Inc.",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Code201 is the operating system for modern clinics — scheduling, charting, billing, and telehealth in one HIPAA-compliant platform.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased">
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
