import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Code201",
  description:
    "Code201 Terms of Service: Terms and conditions governing engineering consultations, forward-deployed technical engagements, and platform services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </Link>

      <div className="mt-8 flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent">
        <ShieldCheck className="h-4 w-4" />
        Legal & Service Terms
      </div>

      <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-xs font-mono text-muted-foreground">
        Last Updated: September 5, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground border-t border-border pt-8">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">1. Agreement to Terms</h2>
          <p>
            By accessing our website (`https://code201.in`) or engaging Code201 for forward-deployed healthcare engineering services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">2. Engineering Engagements & Statements of Work</h2>
          <p>
            All custom software development, healthcare CRM architecture, automated pipelines, and EHR integration projects are executed under master service agreements (MSAs) and specific Statements of Work (SOWs). Project timelines, deliverables, SLAs, and technical specifications are defined in writing prior to deployment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">3. Intellectual Property & System Ownership</h2>
          <p>
            Code201 builds custom solutions with a commitment to zero vendor lock-in. Deliverables, custom code modules, and data schemas built for client organizations are owned according to the terms specified in the governing Master Services Agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">4. Business Associate Agreements (BAAs)</h2>
          <p>
            Code201 requires a signed Business Associate Agreement (BAA) before processing any Protected Health Information (PHI) on behalf of covered entities. No clinical production data will be accessed or integrated until a BAA is fully executed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">5. Limitation of Liability</h2>
          <p>
            Code201 provides forward-deployed engineering and telemetry tools designed to assist healthcare workflows. Final clinical decisions, medical treatment authorizations, and billing submissions remain the sole responsibility of licensed healthcare providers and authorized client personnel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">6. Legal Contacts</h2>
          <p>
            For legal inquiries or master service agreement reviews, please contact our legal team at:
          </p>
          <p className="font-mono text-foreground font-semibold pt-1">
            legal@code201.in
          </p>
        </section>
      </div>
    </main>
  );
}
