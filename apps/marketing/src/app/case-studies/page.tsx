import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How independent practices run on Code201 — outcomes from the clinics using our platform every day.",
};

const caseStudies = [
  {
    quote:
      "We went from three disconnected systems to one. Our front desk closes the books 90 minutes earlier every day, and claim denials have dropped noticeably.",
    name: "Dr. Amara Osei, MD",
    title: "Medical Director",
    clinic: "Bayview Family Health",
    initials: "AO",
    outcome: "90 min faster close-out, fewer denials",
  },
  {
    quote:
      "No-shows are down about 40% since we switched. The scheduling and automated reminder flows alone paid for our subscription.",
    name: "Dr. Luis Herrera, DO",
    title: "Owner & Lead Physician",
    clinic: "Herrera Pediatrics",
    initials: "LH",
    outcome: "40% fewer no-shows",
  },
];

export default function CaseStudiesPage() {
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
        Case studies
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        Outcomes from independent practices running their schedules, charts,
        and revenue cycle on Code201.
      </p>

      <div className="mt-12 space-y-6">
        {caseStudies.map((study) => (
          <article
            key={study.name}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <p className="text-base leading-relaxed text-foreground">
              &ldquo;{study.quote}&rdquo;
            </p>
            <p className="mt-4 inline-block rounded-button border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground">
              {study.outcome}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                {study.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {study.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {study.title}, {study.clinic}
                </p>
              </div>
              <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-foreground">
                5.0 <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              </span>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
        This is a placeholder page for the demo — these quotes are fictional.
        Want yours here?{" "}
        <Link
          href="/contact"
          className="font-medium text-accent hover:underline"
        >
          Talk to our team
        </Link>
        .
      </p>
    </main>
  );
}
