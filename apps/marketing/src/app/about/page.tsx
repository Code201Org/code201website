import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Users, Wrench } from "lucide-react";

import { Button } from "@repo/ui";

export const metadata: Metadata = {
  title: "About | Code201",
  description:
    "Code201 is a forward-deployed healthcare engineering firm building custom CRMs, operational automation, real-time analytics, and AI overlays alongside ambitious healthcare organizations.",
};

const principles = [
  {
    icon: Users,
    title: "Forward-Deployed Model",
    description:
      "We don't ship generic software and leave. Our engineers deploy directly alongside your clinical and operations teams to understand bottlenecks and build exact solutions.",
  },
  {
    icon: Wrench,
    title: "Custom Operational Tools",
    description:
      "Every clinic has unique workflows. We build tailored CRMs, automated patient pipelines, and revenue telemetry systems fitted precisely to your operations.",
  },
  {
    icon: Shield,
    title: "HIPAA-Grade Engineering",
    description:
      "Security and compliance are baked into every line of code. We implement AES-256 encryption, zero-trust access controls, and HL7/FHIR standards from day one.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </Link>

      {/* Hero Section */}
      <div className="max-w-3xl">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent">
          FORWARD-DEPLOYED HEALTHCARE ENGINEERING
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
          Healthcare operations, engineered properly.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Code201 works alongside ambitious healthcare teams to build custom CRMs, operational automation, revenue telemetry, and AI systems that eliminate revenue leakage and administrative chaos.
        </p>
      </div>

      {/* Embedded Engineering Philosophy */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Track Record & Proof */}
      <div className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-sm">
        <div className="max-w-2xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
            ENGINEERED SYSTEMS IN PRODUCTION
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Real software solving real clinical friction
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            From multi-location aesthetic clinic CRMs like <strong>Dolce CRM</strong> to advanced laser procedure management systems like <strong>MedLounges (Lypo)</strong>, our engineers build purpose-driven software that scales practices without adding administrative overhead.
          </p>

          <div className="mt-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
              <span>Custom intake pipelines & automated follow-up sequences</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
              <span>Real-time CPT code validation & revenue leakage telemetry</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
              <span>Bi-directional EHR connectors & clinician-in-the-loop AI overlays</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button className="font-medium">
                Book a discovery call
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" className="font-medium">
                See our work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
