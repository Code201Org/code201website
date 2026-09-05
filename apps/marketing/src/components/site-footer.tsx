import Link from "next/link";

import { AppLogo } from "@/components/logo";

const capabilityLinks = [
  { label: "Healthcare CRM & Pipelines", href: "/#features" },
  { label: "Operational Automation", href: "/#workflow" },
  { label: "Revenue Telemetry & RCM", href: "/#features" },
  { label: "Custom AI Assistants", href: "/#features" },
  { label: "EHR Interoperability", href: "/#features" },
];

const companyLinks = [
  { label: "Engineering Methodology", href: "/#workflow" },
  { label: "Engagement Models", href: "/#pricing" },
  { label: "Deployment Case Studies", href: "/case-studies" },
  { label: "Security Architecture", href: "/security" },
  { label: "Contact Engineering", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Healthcare Data Policy", href: "/data-policy" },
  { label: "Security & BAA", href: "/security" },
  { label: "Technical Consultation", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 sm:pb-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/">
              <AppLogo textSize="text-lg" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Forward-deployed healthcare engineering — building CRMs, automation, analytics, and AI systems alongside ambitious healthcare teams.
            </p>
            <p className="mt-6 text-xs text-muted-foreground font-mono">
              © 2026 Code201. All rights reserved.
            </p>
          </div>

          <FooterColumn title="Capabilities" links={capabilityLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal & Compliance" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-y-4 border-t border-border pt-6 text-xs font-mono text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>HIPAA Architecture</span>
            <span>AES-256 Encrypted</span>
            <span>HL7 / FHIR Native</span>
            <span>EHR Agnostic Integrations</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/data-policy" className="hover:text-foreground transition-colors">Healthcare Data Policy</Link>
          </div>
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
