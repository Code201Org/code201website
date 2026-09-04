import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck2, KeyRound, RefreshCw, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Code201 protects clinical data: HIPAA and signed BAAs, SOC 2 Type II, role-based access, and configurable retention.",
};

const points = [
  {
    icon: ShieldCheck,
    title: "HIPAA & signed BAAs",
    description:
      "Encryption in transit and at rest, with a signed Business Associate Agreement for every organization.",
  },
  {
    icon: FileCheck2,
    title: "SOC 2 Type II",
    description:
      "Independently audited security controls, renewed annually and monitored continuously.",
  },
  {
    icon: KeyRound,
    title: "Role-based access",
    description:
      "Granular permissions by role and location, with a full audit trail on every chart view.",
  },
  {
    icon: RefreshCw,
    title: "Configurable retention",
    description:
      "Data retention policies tuned to your governance requirements, exportable anytime.",
  },
];

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <h1 className="mt-8 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        Security at Code201
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        Code201 runs on clinical-grade infrastructure with the controls health
        systems require — encryption everywhere, audited access, and governance
        policies that adapt to your organization.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {points.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-button bg-accent/10 text-accent">
              <Icon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-semibold text-foreground">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {["HIPAA", "SOC 2 TYPE II", "ONC CERTIFIED", "HL7 / FHIR"].map(
          (badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-button border border-border bg-card px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              {badge}
            </span>
          )
        )}
      </div>

      <p className="mt-12 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
        This is a placeholder page for the demo. Full security documentation,
        penetration test summaries, and our latest SOC 2 report are available
        on request at{" "}
        <a
          href="mailto:security@code201.health"
          className="font-medium text-accent hover:underline"
        >
          security@code201.health
        </a>
        .
      </p>
    </main>
  );
}
