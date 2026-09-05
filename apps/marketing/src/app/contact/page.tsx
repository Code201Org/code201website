import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Book Engineering Consultation | Code201",
  description:
    "Schedule a technical consultation with Code201 forward-deployed engineering leads to discuss healthcare CRMs, operational automation, and real-time analytics.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </Link>

      <h1 className="mt-8 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
        Book an Engineering Consultation
      </h1>
      <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
        Tell us about your healthcare operations, data architecture, and integration bottlenecks. Our engineering leads will review your workflow and scope out a target solution architecture.
      </p>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Talk to our team</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Share a few details and we&apos;ll draft the email for you — it goes straight to the engineers who would work on your system, not a queue.
        </p>

        <div className="mt-6">
          <ContactForm />
        </div>

        <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          Prefer email? Write to us directly at{" "}
          <a
            href="mailto:engineering@code201.in"
            className="font-medium text-accent hover:underline"
          >
            engineering@code201.in
          </a>
          .
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Calendar className="h-5 w-5" />
        </span>
        <div>
          <p className="font-semibold text-foreground">15-Minute Architecture Review</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            Discuss EHR integration points (Epic, Athena, Cerner, Elation), custom CRMs, and revenue leakage telemetry.
          </p>
        </div>
      </div>
    </main>
  );
}
