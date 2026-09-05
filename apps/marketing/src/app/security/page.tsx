import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck2, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@repo/ui";

export const metadata: Metadata = {
  title: "Security & Compliance Architecture | Code201",
  description:
    "How Code201 engineers secure, HIPAA-compliant healthcare systems: Business Associate Agreements, RBAC controls, and HL7/FHIR interoperability.",
};

const points = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance & Signed BAAs",
    description:
      "Full HIPAA administrative, physical, and technical safeguards. We execute a comprehensive Business Associate Agreement (BAA) with every client.",
  },
  {
    icon: FileCheck2,
    title: "Continuous Audit & Governance",
    description:
      "Code-level security controls, automated infrastructure vulnerability monitoring, and continuous dependency vulnerability scanning.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption & Data Isolation",
    description:
      "All clinical data and PHI are encrypted in transit via TLS 1.3 and at rest using AES-256 with dedicated tenant key rotation.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access (RBAC) & Audit Logging",
    description:
      "Granular access permissions scoped to provider roles and physical locations, backed by immutable audit trails for every API call and chart access.",
  },
];

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </Link>

      <h1 className="mt-8 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
        Security & Infrastructure Architecture
      </h1>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
        Code201 builds forward-deployed healthcare systems on enterprise-grade infrastructure designed for health systems, MSOs, and clinical groups.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {points.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-semibold text-foreground text-lg">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-2.5 pt-6 border-t border-border/60">
        {["HIPAA ARCHITECTURE", "HL7 / FHIR INTEROPERABLE", "AES-256 ENCRYPTED", "BAA EXECUTION GUARANTEE", "IMMUTABLE AUDIT LOGS"].map(
          (badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-mono font-semibold tracking-wide text-muted-foreground"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              {badge}
            </span>
          )
        )}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-left sm:p-10 shadow-sm">
        <h3 className="text-xl font-semibold text-foreground">Need Security Architecture Documentation?</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Our security architecture specification, encryption overview, and Business Associate Agreement template are available for your technical review team.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <a href="mailto:security@code201.in">
            <Button size="lg" className="px-6">
              Request BAA & Security Spec
            </Button>
          </a>
          <span className="text-xs text-muted-foreground font-mono">security@code201.in</span>
        </div>
      </div>
    </main>
  );
}
