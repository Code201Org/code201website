import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@repo/ui";

export const metadata: Metadata = {
  title: "Engineering Deployment Studies | Code201",
  description:
    "How Code201 forward-deploys custom CRMs, revenue telemetry, and AI systems alongside ambitious healthcare organizations.",
};

const caseStudies = [
  {
    title: "Multi-Site MSO Intake & Telemetry Overhaul",
    organization: "Regional Ambulatory Care Network",
    summary:
      "Engineered a centralized patient CRM and AI voice receptionist pipeline directly integrated into AthenaHealth EHR via FHIR endpoints.",
    outcomes: [
      "Eliminated phone intake backlog & missed calls",
      "Bi-directional FHIR EHR synchronization",
      "Automated patient triage & scheduling workflow",
    ],
    architecture: ["AthenaHealth FHIR API", "HL7 v2 Listener", "Custom Node/TypeScript Engine", "AES-256 Storage"],
  },
  {
    title: "Real-Time Revenue Leakage Engine",
    organization: "High-Volume Cardiology Specialty Group",
    summary:
      "Built a custom telemetry dashboard that detects missing CPT charge codes and pre-screens claims before clearinghouse submission.",
    outcomes: [
      "Pre-submission claim error validation",
      "Real-time missing CPT code detection",
      "Automated billing audit logging & alerts",
    ],
    architecture: ["Epic Interconnect API", "Real-Time Telemetry Pipeline", "PostgreSQL Audit Trail", "HIPAA Audit Framework"],
  },
];

export default function CaseStudiesPage() {
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
        Engineering Deployment Studies
      </h1>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
        A look at how Code201 forward-deploys alongside healthcare organizations to eliminate operational chaos and revenue leakage.
      </p>

      <div className="mt-12 space-y-8">
        {caseStudies.map((study) => (
          <article
            key={study.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
                {study.organization}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-mono">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" /> HIPAA Compliant Architecture
              </span>
            </div>

            <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground">
              {study.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {study.summary}
            </p>

            <div className="mt-6">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground/80 mb-3">
                OPERATIONAL OUTCOMES
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {study.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-2 rounded-lg border border-border/80 bg-muted/30 p-3 text-xs text-foreground font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-muted-foreground mr-2">TECH STACK:</span>
              {study.architecture.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-8 text-center sm:p-10">
        <h3 className="text-xl font-semibold text-foreground">Ready to discuss your healthcare engineering needs?</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
          Schedule a technical consultation with our engineering leads to review your architecture and operational bottlenecks.
        </p>
        <Link href="/contact" className="mt-6 inline-block">
          <Button size="lg" className="px-6">
            Schedule Engineering Consultation
          </Button>
        </Link>
      </div>
    </main>
  );
}
