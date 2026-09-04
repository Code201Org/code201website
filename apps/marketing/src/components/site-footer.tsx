import Link from "next/link";

import { PulseMark } from "@/components/pulse-mark";

const productLinks = [
  "EHR & Charting",
  "Scheduling",
  "Medical Billing",
  "Telehealth",
  "Patient Portal",
  "Analytics",
];

const companyLinks = ["About", "Careers", "Blog", "Press", "Contact"];
const resourceLinks = [
  "Help Center",
  "API Documentation",
  "Security",
  "HIPAA Compliance",
  "System Status",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <PulseMark />
              <span className="text-lg font-semibold tracking-tight">
                Code201
              </span>
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
  links: string[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
