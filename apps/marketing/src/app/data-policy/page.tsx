import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@repo/ui";

export const metadata: Metadata = {
  title: "Healthcare Data Policy | Code201",
  description:
    "Code201 Healthcare Data & Compliance Policy: Business Associate Agreements, PHI safeguards, encryption standards, and provider supervision rules.",
};

const safeguards = [
  {
    title: "100% Mandatory BAA Execution",
    description:
      "We execute a formal Business Associate Agreement (BAA) with every healthcare client prior to any data ingestion, sandbox connection, or system integration.",
  },
  {
    title: "Data Encryption Standards",
    description:
      "All clinical data and PHI are encrypted in transit via TLS 1.3 and at rest using enterprise-grade AES-256 encryption with tenant-isolated key rotation.",
  },
  {
    title: "Human-in-the-Loop Supervision",
    description:
      "All automated intake drafts, chart notes, or task pre-populations require 1-click provider or staff authorization before committing to the primary EHR.",
  },
  {
    title: "Immutable Access & Audit Logs",
    description:
      "Every API call, database query, and user interaction is captured in an append-only audit trail available for security review and compliance verification.",
  },
];

export default function DataPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </Link>

      <div className="mt-8 flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent">
        <ShieldCheck className="h-4 w-4" />
        Clinical Governance & Compliance
      </div>

      <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
        Healthcare Data Handling Policy
      </h1>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
        How Code201 protects Protected Health Information (PHI) and enforces HIPAA safeguards across all forward-deployed engineering engagements.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {safeguards.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Lock className="h-4.5 w-4.5" />
            </div>
            <h2 className="mt-4 text-base font-semibold text-foreground">{item.title}</h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-8 text-left sm:p-10 space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Zero Data Monetization Guarantee</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Code201 does not train public AI models on client PHI. All clinical telemetry, data schemas, and pipeline logs remain strictly isolated within your organization’s security boundary.
        </p>
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a href="mailto:compliance@code201.in">
            <Button size="lg" className="px-6">
              Request BAA & Data Spec
            </Button>
          </a>
          <span className="text-xs text-muted-foreground font-mono">compliance@code201.in</span>
        </div>
      </div>
    </main>
  );
}
