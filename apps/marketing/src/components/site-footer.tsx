import Link from "next/link";

import { AppLogo } from "@/components/logo";

const productLinks = [
  { label: "EHR & Charting", href: "/#features" },
  { label: "Scheduling", href: "/#workflow" },
  { label: "Medical Billing", href: "/#features" },
  { label: "Telehealth", href: "/#features" },
  { label: "Patient Portal", href: "/#features" },
  { label: "Analytics", href: "/#roi-calculator" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Help Center", href: "/help-center" },
  { label: "API Documentation", href: "/api-documentation" },
  { label: "Security", href: "/security" },
  { label: "HIPAA Compliance", href: "/security" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "System Status", href: "/system-status" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/">
              <AppLogo textSize="text-lg" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The all-in-one clinical platform for independent practices —
              charting, scheduling, billing, and telehealth in one place.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              © 2026 Code201 Health, Inc. All rights reserved.
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>HIPAA Compliant</span>
          <span>SOC 2 Type II</span>
          <span>ONC Certified</span>
          <span>HL7 / FHIR Interoperability</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
