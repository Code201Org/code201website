import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";

import { Button } from "@repo/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Code201 team about bringing your clinic onto the platform — demos, pricing, and migrations.",
};

export default function ContactPage() {
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
        Talk to our team
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        Demos, pricing, migrations — tell us about your practice and we&apos;ll
        show you what Code201 looks like with your workflow in it.
      </p>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-button bg-accent/10 text-accent">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold text-foreground">Email us</p>
            <p className="text-sm text-muted-foreground">
              We reply within one business day.
            </p>
          </div>
        </div>
        <a
          href="mailto:hello@code201.health"
          className="mt-4 inline-block text-lg font-medium text-accent hover:underline"
        >
          hello@code201.health
        </a>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
          <Link href="/#pricing">
            <Button>
              See pricing
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline">Read case studies</Button>
          </Link>
        </div>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Existing customer? Reach support from the help drawer inside the app —
        it routes straight to your onboarding specialist.
      </p>
    </main>
  );
}
