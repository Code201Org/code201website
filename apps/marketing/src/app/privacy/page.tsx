import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Code201",
  description:
    "Code201 Privacy Policy: How we collect, handle, and protect personal and operational information across our services.",
};

export default function PrivacyPage() {
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
        Legal & Data Governance
      </div>

      <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-xs font-mono text-muted-foreground">
        Last Updated: September 5, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground border-t border-border pt-8">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
          <p>
            Code201 (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides forward-deployed healthcare engineering, operational CRMs, automation pipelines, and analytics systems for healthcare organizations. We are committed to protecting the privacy and security of all personal data and protected health information (PHI) processed through our services and website (`https://code201.in`).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
          <p>We collect information in two distinct contexts:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-foreground">Website Inquiries & Contact Forms:</strong> Name, professional email address, organization name, phone number, and engineering project scope details submitted voluntarily via our contact forms.
            </li>
            <li>
              <strong className="text-foreground">Client Technical Engagements:</strong> Operational data, system logs, and integration telemetry processed strictly under signed Business Associate Agreements (BAAs) and client service contracts.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">3. How We Use Information</h2>
          <p>We process collected information solely for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Responding to technical inquiries and scheduling engineering consultations.</li>
            <li>Architecting, deploying, and maintaining custom healthcare software pipelines.</li>
            <li>Monitoring production telemetry, system reliability, and error prevention.</li>
            <li>Complying with applicable legal, regulatory, and HIPAA compliance obligations.</li>
          </ul>
          <p className="pt-2 font-medium text-foreground">
            We never sell, rent, or monetize personal information, client telemetry, or healthcare data to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">4. HIPAA & Protected Health Information (PHI)</h2>
          <p>
            When acting as a Business Associate for covered entities, all Protected Health Information (PHI) handled during forward-deployed engineering engagements is governed by signed Business Associate Agreements (BAAs), strict role-based access controls, AES-256 encryption at rest, and TLS 1.3 encryption in transit.
          </p>
          <p>
            For detailed information on our clinical data safeguards, please visit our{" "}
            <Link href="/data-policy" className="font-semibold text-accent hover:underline">
              Healthcare Data Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">5. Data Retention & Security</h2>
          <p>
            We enforce strict data retention schedules aligned with client governance requirements. All stored operational data is encrypted using enterprise-grade AES-256 encryption with dedicated tenant key rotation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">6. Contact & Privacy Inquiries</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to exercise data subject rights, please contact our privacy officer at:
          </p>
          <p className="font-mono text-foreground font-semibold pt-1">
            privacy@code201.in
          </p>
        </section>
      </div>
    </main>
  );
}
