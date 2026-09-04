import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const stubs: Record<string, { title: string; blurb: string }> = {
  about: {
    title: "About Code201",
    blurb:
      "We're a clinical software team building the operating system for modern, independent practices — so providers can spend their time on care, not administration.",
  },
  careers: {
    title: "Careers at Code201",
    blurb:
      "We're hiring across engineering, clinical informatics, design, and customer success. Help us give time back to clinical teams.",
  },
  blog: {
    title: "The Code201 Blog",
    blurb: "Product updates, clinical workflow deep-dives, and practice operations guides.",
  },
  press: {
    title: "Press",
    blurb: "For press inquiries, brand assets, and media resources, contact press@code201.health.",
  },
  "help-center": {
    title: "Help Center",
    blurb: "Guides and answers for every part of the Code201 platform — from your first patient to your first payroll.",
  },
  "api-documentation": {
    title: "API Documentation",
    blurb: "HL7/FHIR endpoints, webhooks, and integration guides for connecting Code201 to your stack.",
  },
  "system-status": {
    title: "System Status",
    blurb: "Live uptime and incident history for the Code201 platform.",
  },
};

export function generateStaticParams() {
  return Object.keys(stubs).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stub = stubs[slug];
  if (!stub) return {};
  return { title: stub.title, description: stub.blurb };
}

export default async function StubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stub = stubs[slug];
  if (!stub) notFound();

  return (
    <main className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Coming soon
      </p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {stub.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        {stub.blurb}
      </p>
      <p className="mt-10 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
        This page is part of the demo scaffold. Questions in the meantime?{" "}
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
