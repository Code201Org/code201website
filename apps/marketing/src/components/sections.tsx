"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  CircleCheck,
  Clock,
  DollarSign,
  FileCheck2,
  FileHeart,
  KeyRound,
  NotebookPen,
  PhoneCall,
  Pill,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Video,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Badge, Button, Card, CardContent } from "@repo/ui";

import { LogoIcon } from "@/components/logo";
import { EcgLine } from "@/components/pulse-mark";
import { Reveal } from "@/components/reveal";

// ---- Hero ----
// Cursor/Devin-style: one massive sentence, two CTAs, large product visual —
// wrapped in clinical trust signals and an ECG pulse motif.

export function Hero() {
  return (
    <section className="relative flex w-full flex-col overflow-x-hidden bg-background">
      {/* Full window width landing hero banner */}
      <div className="relative flex min-h-0 sm:min-h-[calc(100vh-4rem)] sm:min-h-[calc(100svh-4rem)] w-full flex-col justify-center overflow-hidden border-b border-border">
        {/* Full-bleed background texture pattern */}
        <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* Ambient radial glow highlights */}
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[250px] sm:h-[350px] w-[350px] sm:w-[600px] rounded-full bg-accent/15 blur-[80px] sm:blur-[120px] dark:bg-accent/20" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[180px] sm:h-[250px] w-[280px] sm:w-[450px] rounded-full bg-primary/5 blur-[60px] sm:blur-[90px] dark:bg-primary/10" />

          {/* SVG Dot & Line Texture Pattern */}
          <svg
            className="absolute inset-0 h-full w-full stroke-foreground/10 text-foreground/20 [mask-image:radial-gradient(100%_100%_at_top_center,white_30%,transparent_90%)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-grid-pattern"
                width="32"
                height="32"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 32V.5H32" fill="none" strokeWidth="0.5" strokeOpacity="0.3" />
                <circle cx="16" cy="16" r="1.2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid-pattern)" />
          </svg>

          {/* Bottom subtle fade into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Compact on mobile, spacious on desktop */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-8 sm:py-16 lg:py-24 text-center sm:px-6">
          <Badge variant="outline" className="mb-4 gap-1.5 border-accent/40 bg-accent/10 text-accent hover:bg-accent/15 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5" />
            Forward-Deployed Healthcare Engineering
          </Badge>
          <h1 className="mx-auto max-w-4xl text-balance text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Healthcare operations, engineered properly.
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
            Code201 works alongside ambitious healthcare teams to build CRMs,
            automation, analytics and AI systems that reduce operational chaos
            and revenue leakage.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <Link href="/contact">
              <Button size="lg" className="h-10 sm:h-11 px-5 sm:px-7 text-sm sm:text-base font-medium">
                Book a discovery call
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="ghost" className="h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base">
                See our work
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="mt-6 sm:mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <TrustChip icon={ShieldCheck} label="HIPAA Architecture" />
            <TrustChip icon={FileCheck2} label="Signed BAA Guarantee" />
            <TrustChip icon={Activity} label="HL7 / FHIR Native" />
            <TrustChip icon={Stethoscope} label="EHR Agnostic" />
          </div>
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm text-muted-foreground font-mono">
            Forward-Deployed Teams · Custom Architecture · Zero Vendor Lock-in
          </p>
        </div>
      </div>

      {/* Product visual area */}
      <div className="relative w-full overflow-hidden border-b border-border bg-muted/40 py-6 sm:py-16">
        <EcgLine className="mx-auto mb-4 sm:mb-8 h-8 sm:h-10 w-full max-w-5xl px-4 text-accent/50 sm:px-6" />
        <div className="mx-auto max-w-5xl px-2 sm:px-6">
          <HeroCallVisual />
        </div>
      </div>
    </section>
  );
}

function TrustChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-button border border-border bg-card px-2.5 py-1 sm:px-3 text-xs font-medium text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-accent" />
      {label}
    </span>
  );
}

function AudioWaveform({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 12" fill="currentColor" className={className} aria-hidden="true">
      <rect x="0" y="3" width="2" height="6" rx="1" />
      <rect x="4" y="1" width="2" height="10" rx="1" />
      <rect x="8" y="4" width="2" height="4" rx="1" />
      <rect x="12" y="0" width="2" height="12" rx="1" />
      <rect x="16" y="2" width="2" height="8" rx="1" />
      <rect x="20" y="5" width="2" height="2" rx="1" />
      <rect x="24" y="1" width="2" height="10" rx="1" />
      <rect x="28" y="3" width="2" height="6" rx="1" />
      <rect x="32" y="0" width="2" height="12" rx="1" />
      <rect x="36" y="4" width="2" height="4" rx="1" />
    </svg>
  );
}

function HeroCallVisual() {
  return (
    <div className="relative mx-auto max-w-5xl py-4 sm:py-6 px-4 sm:px-12 md:px-20 lg:px-24">
      {/* Background Image Container */}
      <div className="relative h-[310px] sm:h-[460px] md:h-[500px] w-[88%] sm:w-[82%] md:w-[78%] ml-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1600&q=80"
          alt="Patient intake automation visual"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 70vw, 100vw"
          className="object-cover object-[center_20%]"
        />
        {/* Soft Left Side Gradient Overlay for Dialogue Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent pointer-events-none" />
      </div>

      {/* Floating Dialogue Card 1 (Top Left - Extends Outside Image Border) */}
      <div className="absolute top-2 -left-1 sm:top-6 sm:-left-8 md:-left-16 lg:-left-20 z-10 flex items-start gap-2 sm:gap-2.5 max-w-[240px] xs:max-w-[270px] sm:max-w-[340px]">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background shadow-lg ring-2 sm:ring-4 ring-background">
          <LogoIcon unstyled className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 text-background" />
        </div>
        <div className="rounded-xl sm:rounded-2xl border border-border/80 bg-card/95 p-2.5 sm:p-4 shadow-2xl backdrop-blur text-left">
          <AudioWaveform className="h-2.5 sm:h-3 w-10 sm:w-14 text-foreground mb-1 sm:mb-1.5" />
          <p className="text-[11px] sm:text-sm font-medium text-foreground leading-snug">
            Hello! How can we assist your appointment scheduling today?
          </p>
        </div>
      </div>

      {/* Floating Dialogue Card 2 (Middle Left - Offset Outside Image Border) */}
      <div className="absolute top-[36%] left-1 sm:left-4 md:-left-4 lg:-left-8 z-10 flex items-start gap-2 sm:gap-2.5 max-w-[220px] xs:max-w-[250px] sm:max-w-[320px]">
        <div className="rounded-xl sm:rounded-2xl border border-border/80 bg-card/95 p-2.5 sm:p-4 shadow-2xl backdrop-blur text-left">
          <AudioWaveform className="h-2.5 sm:h-3 w-10 sm:w-14 text-muted-foreground mb-1 sm:mb-1.5" />
          <p className="text-[11px] sm:text-sm font-medium text-foreground leading-snug">
            I need to update my insurance details before my appointment.
          </p>
        </div>
      </div>

      {/* Floating Dialogue Card 3 (Bottom Left - Extends Outside Image Border) */}
      <div className="absolute bottom-2 -left-1 sm:bottom-6 sm:-left-8 md:-left-16 lg:-left-20 z-10 flex items-start gap-2 sm:gap-2.5 max-w-[245px] xs:max-w-[280px] sm:max-w-[360px]">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background shadow-lg ring-2 sm:ring-4 ring-background">
          <LogoIcon unstyled className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 text-background" />
        </div>
        <div className="rounded-xl sm:rounded-2xl border border-border/80 bg-card/95 p-2.5 sm:p-4 shadow-2xl backdrop-blur text-left">
          <AudioWaveform className="h-2.5 sm:h-3 w-10 sm:w-14 text-foreground mb-1 sm:mb-1.5" />
          <p className="text-[11px] sm:text-sm font-medium text-foreground leading-snug">
            Verified and synced into your EHR chart. You are all set.
          </p>
        </div>
      </div>

      {/* Floating EHR Status Badge (Extends Outside Top Right Image Border) */}
      <div className="absolute top-3 -right-1 sm:top-8 sm:-right-4 md:-right-8 z-10 flex items-center gap-1.5 sm:gap-2 rounded-full border border-border/80 bg-card/95 px-2.5 py-1.5 sm:px-3.5 sm:py-2 shadow-xl backdrop-blur text-[11px] sm:text-xs font-semibold text-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-50"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground"></span>
        </span>
        <span>Bi-directional EHR Sync</span>
      </div>

      {/* Floating Intake Action Badge (Extends Outside Bottom Right Image Border) */}
      <div className="absolute bottom-3 -right-1 sm:bottom-8 sm:-right-4 md:-right-8 z-10 hidden sm:flex items-center gap-2.5 rounded-2xl border border-border/80 bg-card/95 p-3 shadow-2xl backdrop-blur">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-muted/40 text-foreground">
          <CircleCheck className="h-4 w-4" />
        </div>
        <div className="text-left text-xs">
          <p className="font-semibold text-foreground">Workflow Action Complete</p>
          <p className="text-[11px] text-muted-foreground font-mono">Real-time EHR Telemetry</p>
        </div>
      </div>
    </div>
  );
}

// ---- Engineering Architecture & Capabilities Pillars ----

const engineeringPillars = [
  { title: "Bi-Directional EHR Sync", description: "Real-time HL7/FHIR pipeline integration with major health records" },
  { title: "Zero Vendor Lock-In", description: "Modular codebases, open standards & fully exportable data schemas" },
  { title: "HIPAA Security", description: "Granular audit logging, role-based access & AES-256 encryption" },
  { title: "Production Telemetry", description: "Continuous system telemetry, error monitoring & latency alerting" },
];

const deploymentEnvironments = [
  "Multi-Specialty MSOs",
  "High-Volume Ambulatory Networks",
  "Enterprise Health Systems",
  "Specialty Practice Groups",
  "Clinical AI Platforms",
];

export function ProvenAtScale() {
  return (
    <section className="border-b border-border bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Engineering Architecture Standards
        </p>

        <Reveal className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringPillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 60} className="rounded-xl border border-border bg-card p-4 text-left shadow-sm">
              <p className="text-base font-semibold tracking-tight text-foreground">
                {pillar.title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </Reveal>

        <div className="mt-8 pt-6 border-t border-border/80 text-center">
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70 mb-3">
            TARGET DEPLOYMENT ENVIRONMENTS & ARCHITECTURE INTEGRATIONS
          </p>
          <Reveal className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {deploymentEnvironments.map((name) => (
              <span
                key={name}
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-tight text-foreground/80"
              >
                <Activity className="h-3.5 w-3.5 text-accent" />
                {name}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---- Feature sections (alternating rows with clinical visuals) ----

interface FeatureSection {
  eyebrow: string;
  title: React.ReactNode;
  paragraphs: string[];
  points?: string[];
  visual: React.ReactNode;
  flip?: boolean;
}

function ScheduleVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative h-28 sm:h-36 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
          alt="Clinical reception and schedule management"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
          <p className="text-xs sm:text-sm font-semibold text-foreground truncate max-w-[65%]">Bayview Family Health</p>
          <span className="shrink-0 rounded-full border border-border bg-background/90 backdrop-blur px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-mono font-medium text-foreground">
            Live Schedule
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4 pt-1">
        <div className="space-y-1.5 sm:space-y-2">
          {[
            ["08:00", "Henry Fitzgerald", "Dr. Okafor · Rm 2", "Completed"],
            ["09:30", "Thomas Brennan", "R. Goldstein · Rm 6", "In Progress"],
            ["10:00", "Marcus Washington", "Dr. Raghavan · Rm 3", "Checked In"],
            ["13:30", "Margaret Chen", "Dr. Okafor · Rm 2", "Scheduled"],
          ].map(([time, patient, provider, status]) => (
            <div
              key={patient as string}
              className="flex items-center gap-2 sm:gap-3 rounded-lg border border-border bg-background px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs"
            >
              <span className="font-mono text-muted-foreground shrink-0">{time}</span>
              <span className="min-w-0 flex-1 truncate font-medium text-foreground">
                {patient}
                <span className="font-normal text-muted-foreground"> · {provider}</span>
              </span>
              <span className="shrink-0 rounded-md border border-border bg-muted/40 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-medium text-foreground">
                {status}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-muted-foreground">
          Eligibility verified at booking · waitlist backfilled 2 slots this week
        </p>
      </div>
    </div>
  );
}

function BillingVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative h-28 sm:h-36 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
          alt="Medical practice revenue cycle and billing management"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
          <p className="text-xs sm:text-sm font-semibold text-foreground truncate max-w-[55%]">Claim Pipeline</p>
          <span className="shrink-0 rounded-full border border-border bg-background/90 backdrop-blur px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-mono font-medium text-foreground">
            Real-Time Claim Telemetry
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4 pt-1">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
          {[
            ["Submitted", "24"],
            ["Adjudicating", "9"],
            ["Paid this week", "$18.4k"],
          ].map(([label, value]) => (
            <div
              key={label as string}
              className="rounded-lg border border-border bg-background p-1.5 sm:p-2"
            >
              <span className="inline-block truncate max-w-full rounded-md border border-border bg-muted/40 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium text-foreground">
                {label}
              </span>
              <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2">
          {[
            ["CLM-00837", "99213", "Margaret Chen", "$195.00", "Paid"],
            ["CLM-00832", "99214", "Aisha Okafor", "$150.00", "Pending"],
          ].map(([claim, cpt, patient, amount, status]) => (
            <div
              key={claim as string}
              className="flex items-center gap-1.5 sm:gap-2.5 rounded-lg border border-border bg-background px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs"
            >
              <span className="font-mono text-muted-foreground shrink-0">{cpt}</span>
              <span className="min-w-0 flex-1 truncate font-medium text-foreground">{patient}</span>
              <span className="font-mono font-medium text-foreground shrink-0">{amount}</span>
              <span className="shrink-0 rounded-md border border-border bg-muted/40 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-medium text-foreground">
                {status}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-muted-foreground">
          E/M levels suggested from documentation · ICD-10 mapping built in
        </p>
      </div>
    </div>
  );
}

function ChartingVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative h-28 sm:h-36 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80"
          alt="Clinician creating SOAP charting note"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
          <p className="text-xs sm:text-sm font-semibold text-foreground truncate max-w-[70%]">Visit Note — Margaret Chen</p>
          <span className="shrink-0 rounded-full border border-border bg-background/90 backdrop-blur px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-mono font-medium text-foreground">
            Signed
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4 pt-1">
        <div className="space-y-1.5 sm:space-y-2 rounded-lg border border-border bg-background p-2.5 sm:p-3">
          <p className="text-[11px] sm:text-xs text-foreground">
            <span className="font-mono font-semibold text-foreground">Subjective:</span> Improved exercise tolerance. No chest pain or shortness of breath.
          </p>
          <p className="text-[11px] sm:text-xs text-foreground">
            <span className="font-mono font-semibold text-foreground">Assessment:</span> Atrial fibrillation (I48.91), rate-controlled. Hypertension (I10).
          </p>
          <div className="flex items-center gap-2 rounded border border-border bg-muted/40 px-2 sm:px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs">
            <Pill className="h-3.5 w-3.5 shrink-0 text-foreground" />
            <span className="text-muted-foreground"><strong className="text-foreground">Rx:</strong> Metformin 500 mg PO BID sent to pharmacy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const featureSections: FeatureSection[] = [
  {
    eyebrow: "Command center",
    title: (
      <>
        One schedule for <span className="font-semibold text-foreground">the whole clinic</span>
      </>
    ),
    paragraphs: [
      "Providers, rooms, and the front desk stay in sync automatically. Patients self-book online, eligibility is verified at booking, and reminders cut no-shows by up to 40%.",
      "Waitlist backfill fills late cancellations, and every provider walks in knowing exactly what the day holds.",
    ],
    points: [
      "Self-booking with eligibility checks",
      "SMS & email reminders",
      "Waitlist backfill",
    ],
    visual: <ScheduleVisual />,
  },
  {
    eyebrow: "Revenue cycle",
    title: (
      <>
        Billing that <span className="font-semibold text-foreground">closes itself out</span>
      </>
    ),
    paragraphs: [
      "Every encounter leaves with the right CPT and ICD-10 codes — suggested from the documentation, confirmed by your coders.",
      "Claims are scrubbed before submission, eligibility is re-checked, and denials route straight to a worklist with follow-up tasks.",
    ],
    points: [
      "E/M & ICD-10 code suggestions",
      "Claim scrubbing & eligibility",
      "Denial worklists",
    ],
    visual: <BillingVisual />,
    flip: true,
  },
  {
    eyebrow: "Clinical documentation",
    title: (
      <>
        Notes at the speed of{" "}
        <span className="font-semibold text-foreground">the conversation</span>
      </>
    ),
    paragraphs: [
      "Specialty-tuned templates, structured problem lists, and AI-drafted plans mean charting is finished before the patient leaves the room.",
      "Every note is versioned, audited, and signed with one tap — prescriptions go with it.",
    ],
    points: [
      "SOAP notes & AI-drafted plans",
      "30+ specialty templates",
      "e-Prescribing built in",
    ],
    visual: <ChartingVisual />,
  },
];

function FeatureSectionBlock({
  section,
  isAltBg,
}: {
  section: FeatureSection;
  isAltBg?: boolean;
}) {
  const { eyebrow, title, paragraphs, points, visual, flip } = section;
  return (
    <section
      className={`border-b border-border/60 py-10 sm:py-16 lg:py-24 ${
        isAltBg ? "bg-muted/30" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal
            className={flip ? "lg:order-2" : undefined}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-3.5 text-pretty text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            {points ? (
              <ul className="mt-5 space-y-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <CircleCheck className="h-4 w-4 shrink-0 text-foreground" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
          <Reveal className={flip ? "lg:order-1" : undefined} delay={100}>
            {visual}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FeatureSections() {
  return (
    <div id="features" className="w-full">
      {featureSections.map((section, idx) => (
        <FeatureSectionBlock
          key={section.eyebrow}
          section={section}
          isAltBg={idx % 2 === 1}
        />
      ))}
    </div>
  );
}

// ---- Forward-Deployed Engineering Methodology Timeline ----

const workflowSteps = [
  {
    step: "Phase 1",
    title: "Operational & Data Architecture Audit",
    description:
      "We embed with your ops team to audit existing data schemas, EHR API endpoints, manual bottlenecks, and revenue leakage points.",
    icon: Search,
  },
  {
    step: "Phase 2",
    title: "Custom System & Governance Architecture",
    description:
      "We architect tailored CRMs, automated patient pipelines, or AI engines with strict HIPAA boundaries and data security controls.",
    icon: ShieldCheck,
  },
  {
    step: "Phase 3",
    title: "Rapid Engineering Sprint",
    description:
      "Our forward-deployed engineers build custom software modules, ambient tools, and background automation engines built for your exact workflow.",
    icon: Sparkles,
  },
  {
    step: "Phase 4",
    title: "EHR Interoperability & Sandbox Testing",
    description:
      "We connect systems directly into your existing EHR (Epic, Athena, Cerner, Elation) using HL7/FHIR APIs and validate in live sandboxes.",
    icon: RefreshCw,
  },
  {
    step: "Phase 5",
    title: "Provider-Supervised Production Rollout",
    description:
      "Systems go live with clinician-in-the-loop guardrails, 1-click authorization flows, and complete audit logging for full operational trust.",
    icon: CircleCheck,
  },
  {
    step: "Phase 6",
    title: "Continuous Telemetry & Revenue Telemetry",
    description:
      "We monitor production telemetry 24/7, tracking system latency, throughput, and prevented revenue leakage as your practice expands.",
    icon: Activity,
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerLine = windowHeight / 2;

      // Fill line height relative to viewport center line
      const totalHeight = rect.height;
      const scrolled = centerLine - rect.top;
      const progress = Math.max(0, Math.min(1, totalHeight > 0 ? scrolled / totalHeight : 0));

      setScrollProgress(progress);

      // Dynamically detect which step is currently passing center of viewport
      const stepNodes = timelineRef.current.querySelectorAll<HTMLDivElement>("[data-step-index]");
      let currentStep = 0;

      stepNodes.forEach((node, index) => {
        const nodeRect = node.getBoundingClientRect();
        if (nodeRect.top <= centerLine + 100) {
          currentStep = index;
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative border-b border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            OUR ENGINEERING METHODOLOGY
          </p>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How Code201 Deploys With Your Healthcare Organization.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            From initial operational audit to live EHR integration, our engineers work alongside your clinical and ops leaders to ship custom production systems in weeks.
          </p>
        </div>

        {/* Vertical Timeline Stepper Container */}
        <div
          ref={timelineRef}
          className="relative mt-16 sm:mt-24 flex gap-6 sm:gap-12 md:gap-16 min-h-[600px]"
        >
          {/* Sticky Left Line & Indicator Column */}
          <div className="relative flex flex-col items-center w-10 sm:w-12 shrink-0">
            {/* Background Line Track */}
            <div className="absolute top-4 bottom-4 w-0.5 bg-border/60" />

            {/* Filled Animated Scroll Line */}
            <div
              className="absolute top-4 w-0.5 bg-foreground rounded-full transition-all duration-100 ease-out"
              style={{ height: `calc(${scrollProgress * 100}% - 2rem)` }}
            />

            {/* Sticky Center-Viewport Floating Indicator Node (Zero Lag) */}
            <div className="sticky top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground text-background shadow-xl ring-4 ring-background">
              <LogoIcon unstyled className="h-5 w-5 text-background" />
            </div>
          </div>

          {/* Steps Content List */}
          <div className="flex-1 space-y-16 sm:space-y-24 py-12">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <div
                  key={step.step}
                  data-step-index={idx}
                  className={`group relative flex flex-col items-start gap-3 transition-all duration-300 ${
                    isCurrent
                      ? "opacity-100 scale-[1.02] translate-x-0"
                      : isActive
                      ? "opacity-75 translate-x-0"
                      : "opacity-30 translate-x-1"
                  }`}
                >
                  {/* Black & White Monochrome Step Icon Box */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isCurrent
                        ? "border-foreground bg-foreground text-background shadow-md scale-105"
                        : isActive
                        ? "border-border bg-card text-foreground shadow-sm"
                        : "border-border/60 bg-muted/40 text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Step Text Block */}
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
                      {step.step}
                    </span>
                    <h3 className="mt-1 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Three Problems Code201 Solves ----

const threeProblems = [
  {
    title: "1. Operational Chaos & Fragmented Tools",
    friction: "Patient inquiries, scheduling, intake forms, and follow-ups are scattered across disconnected software, spreadsheets, and manual phone queues.",
    solution: "We build custom healthcare CRMs and automated patient pipelines tailored specifically to your practice's exact operational workflow.",
    tag: "CUSTOM HEALTHCARE CRM",
    icon: Building2,
  },
  {
    title: "2. Revenue Leakage & Billing Friction",
    friction: "Untracked patient balances, missed CPT codes, unbilled procedures, and delayed claim submissions quietly drain practice margins.",
    solution: "We engineer real-time revenue telemetry and pre-submission charge validation engines that catch leakage before claims leave the building.",
    tag: "REVENUE TELEMETRY ENGINE",
    icon: DollarSign,
  },
  {
    title: "3. EHR Rigidity & Manual Overhead",
    friction: "Standard off-the-shelf EHRs force clinical and front-desk teams into clunky, repetitive manual data entry, creating burnout and error risks.",
    solution: "We build bi-directional HL7/FHIR connectors and clinician-in-the-loop AI overlays that sync directly with your EHR without replacing it.",
    tag: "EHR INTEROPERABILITY OVERLAY",
    icon: Stethoscope,
  },
];

export function ThreeProblems() {
  return (
    <section id="solutions" className="border-b border-border bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            THE THREE OPERATIONAL BOTTLENECKS WE ELIMINATE
          </p>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Three Problems Code201 Solves
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Healthcare teams struggle with fragmented software, revenue leakage, and rigid off-the-shelf EHRs. We build forward-deployed systems to solve each.
          </p>
        </div>

        {/* 3-Column Problem & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {threeProblems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <Reveal
                key={prob.title}
                delay={idx * 80}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-accent border border-accent/30 bg-accent/5 rounded px-2.5 py-1">
                      {prob.tag}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {prob.title}
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-3.5">
                      <p className="text-xs font-mono uppercase tracking-wider text-destructive font-semibold mb-1">
                        THE FRICTION
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {prob.friction}
                      </p>
                    </div>

                    <div className="rounded-xl border border-accent/30 bg-accent/5 p-3.5">
                      <p className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-1">
                        HOW CODE201 SOLVES IT
                      </p>
                      <p className="text-xs text-foreground font-medium leading-relaxed">
                        {prob.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    Discuss your workflow bottleneck
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---- Platform Solutions (Strict Monochrome Asymmetric Tiled Grid) ----

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-border bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Core Capabilities
            </p>
            <h2 className="mt-1 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Platform solutions
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            Explore all solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3-Column Tiled Grid (Strict Black & White / Monochrome) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 - Left */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Front-Desk Call Triage */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-sm transition-all hover:border-foreground/40 hover:shadow-md h-[300px]">
              <div>
                <span className="inline-block rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-mono font-medium text-foreground">
                  Front-Desk Automation
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl font-medium tracking-tight text-foreground leading-snug">
                  24/7 Patient phone inquiries & instant hold-time elimination
                </h3>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-border/60 text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                <PhoneCall className="h-4 w-4" />
                Automated Call Triage
              </div>
            </div>

            {/* Card 2: Prior Authorization */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-sm transition-all hover:border-foreground/40 hover:shadow-md h-[260px]">
              <div>
                <span className="inline-block rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-mono font-medium text-foreground">
                  Insurance & Approvals
                </span>
                <h3 className="mt-3 text-lg sm:text-xl font-medium tracking-tight text-foreground leading-snug">
                  Automated prior authorization routing & real-time claims scrubbing
                </h3>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-border/60 text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                <FileCheck2 className="h-4 w-4" />
                Prior Authorization Engine
              </div>
            </div>
          </div>

          {/* Column 2 - Middle (Tall Featured Card with Monochrome Device Visual) */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-md transition-all hover:border-foreground/40 min-h-[580px] overflow-hidden">
            <div>
              <span className="inline-block rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-mono font-medium text-foreground">
                Patient Concierge AI
              </span>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground leading-snug">
                Autonomous voice assistant for 24/7 self-booking & urgent triage
              </h3>
            </div>

            {/* Monochrome Phone Mockup in Center */}
            <div className="my-6 mx-auto w-full max-w-[240px] rounded-[32px] border-2 border-border bg-background p-3 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center justify-between border-b border-border/60 pb-2 mb-3">
                <span className="text-[10px] font-mono text-muted-foreground">09:41 AM</span>
                <span className="flex h-2 w-2 rounded-full bg-foreground" />
              </div>
              <div className="space-y-2 text-xs">
                <div className="rounded-xl border border-border bg-muted/40 p-2.5 text-foreground">
                  <p className="font-mono text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider">Code201 AI</p>
                  &ldquo;Dr. Osei has an opening Tuesday at 9:15 AM. Shall I confirm?&rdquo;
                </div>
                <div className="rounded-xl border border-border bg-card p-2.5 text-foreground ml-4 text-right">
                  &ldquo;Yes please, Tuesday works great!&rdquo;
                </div>
                <div className="rounded-xl border border-border bg-foreground text-background p-2 text-[11px] font-mono font-medium text-center">
                  ✓ EHR Calendar Synced
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-border/60 text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
              <Activity className="h-4 w-4" />
              Concierge AI Suite
            </div>
          </div>

          {/* Column 3 - Right */}
          <div className="flex flex-col gap-6">
            {/* Card 3: RCM & Coding */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-sm transition-all hover:border-foreground/40 hover:shadow-md h-[300px]">
              <div>
                <span className="inline-block rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-mono font-medium text-foreground">
                  Revenue Cycle
                </span>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground leading-snug">
                  Real-time E/M level suggestions & ICD-10 code extraction
                </h3>
                <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-muted/30 px-3 py-2 text-xs font-mono">
                  <span className="text-muted-foreground">CPT: 99214</span>
                  <span className="font-semibold text-foreground">Status: Scrubbed</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-border/60 text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                RCM Intelligence
              </div>
            </div>

            {/* Card 4: Specialty Presets */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-sm transition-all hover:border-foreground/40 hover:shadow-md h-[260px]">
              <div>
                <span className="inline-block rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-mono font-medium text-foreground">
                  Specialty Presets
                </span>
                <h3 className="mt-3 text-lg sm:text-xl font-medium tracking-tight text-foreground leading-snug">
                  Pre-configured clinical workflows for 40+ medical specialties
                </h3>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-border/60 text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                <Stethoscope className="h-4 w-4" />
                Multi-Specialty Engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Compact feature grid ("everything else") ----

const moreFeatures = [
  {
    icon: Video,
    title: "Integrated telehealth",
    description:
      "Launch HIPAA-compliant video visits straight from the appointment — no downloads, no separate tool.",
  },
  {
    icon: Pill,
    title: "e-Prescribing (EPCS)",
    description:
      "Prescribe to any pharmacy with formulary checks, interaction alerts, and EPCS for controlled substances.",
  },
  {
    icon: UserRound,
    title: "Patient portal",
    description:
      "Secure messaging, intake forms, lab results, statements, and self-scheduling patients actually use.",
  },
  {
    icon: NotebookPen,
    title: "Smart documentation",
    description:
      "Problem lists, history, and exam findings structured automatically — no sticky notes, no re-typing.",
  },
  {
    icon: CalendarCheck,
    title: "Recall & follow-up",
    description:
      "Automatic recalls for annual physicals, labs, and chronic-care follow-ups keep the panel healthy.",
  },
  {
    icon: FileHeart,
    title: "Interoperability",
    description:
      "HL7/FHIR APIs and lab integrations mean results land in the chart without paper or manual entry.",
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-muted/40 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            And everything else
          </p>
          <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            The rest of the practice, handled
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreFeatures.map(({ icon: Icon, title, description }, idx) => (
            <Reveal key={title} delay={(idx % 3) * 70}>
              <Card className="h-full transition-colors hover:bg-muted/40">
                <CardContent className="p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-button bg-accent/10 text-accent">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Integrations ----

const integrations = [
  "Epic",
  "athenahealth",
  "eClinicalWorks",
  "Quest Diagnostics",
  "LabCorp",
  "DrChrono",
];

export function Integrations() {
  return (
    <section className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Integrations
            </p>
            <h2 className="mt-2 text-balance text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Plugs into the tools you already use
            </h2>
            <p className="mt-2 text-muted-foreground">
              Native connections for major EHRs and labs — plus HL7/FHIR APIs
              for everything else.
            </p>
          </div>
          <div className="flex max-w-xl flex-wrap gap-2 lg:justify-end">
            {integrations.map((name) => (
              <span
                key={name}
                className="rounded-button border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---- Testimonials: one big pull quote + supporting cards ----

// ---- Engineering Commitments & Client Collaboration ----

const engineeringPrinciples = [
  {
    title: "Embedded Engineering Collaboration",
    description:
      "We don't hand off documentation and leave. Our forward-deployed engineers embed directly with your operational team to understand data structures and clinical requirements before writing code.",
    tag: "FORWARD-DEPLOYED",
  },
  {
    title: "Open Standards & System Control",
    description:
      "We build modular healthcare platforms using open standards (HL7/FHIR, REST APIs) so your organization maintains 100% ownership and control of its codebase and data architecture.",
    tag: "ZERO VENDOR LOCK-IN",
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Header Row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              OUR ENGINEERING COMMITMENT
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              How We Build With Healthcare Partners
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            View Deployment Studies
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {/* Left Column: Summary */}
          <Reveal className="flex flex-col justify-between space-y-8 pr-2">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ambitious healthcare leaders partner with Code201 to eliminate operational chaos and revenue leakage through dedicated, forward-deployed engineering.
            </p>

            <div className="pt-6 border-t border-border/60">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                COLLABORATIVE ENGAGEMENT
              </p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Every system is custom-architected, security-reviewed, and deployed directly alongside your technical and clinical leadership.
              </p>
            </div>
          </Reveal>

          {/* Middle & Right Columns: Principle Cards */}
          {engineeringPrinciples.map((p, idx) => (
            <Reveal
              key={p.title}
              delay={idx * 90}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all hover:border-accent/40"
            >
              <div>
                <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-accent border border-accent/30 bg-accent/5 rounded px-2.5 py-1">
                  {p.tag}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>

              <div className="mt-8 border-t border-border/60 pt-4 text-xs">
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 font-medium text-accent hover:underline"
                >
                  Discuss your architecture
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Security (clinical-grade compliance) ----

const securityCards = [
  {
    icon: ShieldCheck,
    title: "HIPAA & Signed BAAs",
    description:
      "Encryption in transit and at rest, with a signed Business Associate Agreement executed for every client organization.",
  },
  {
    icon: FileCheck2,
    title: "Continuous Audit Logging",
    description:
      "Immutable access logging for every API transaction, chart view, and data sync event across your infrastructure.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access Control",
    description:
      "Granular permission scoping by provider role, location, and system component to prevent unauthorized data exposure.",
  },
  {
    icon: RefreshCw,
    title: "AES-256 Data Isolation",
    description:
      "Data retention policies tuned to your governance requirements with dedicated tenant encryption key management.",
  },
];

const complianceBadges = ["HIPAA SAFEGUARDS", "HL7 / FHIR NATIVE", "AES-256 ENCRYPTION", "SIGNED BAA GUARANTEE"];

export function Security() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Delayed scroll trigger in both directions: start transition when section top reaches 35% of viewport
      // Complete transition when section top reaches 0% (top of viewport)
      const start = windowHeight * 0.35;
      const end = 0;

      const progress = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, progress));
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Delayed overlay fade: remains 0% until scrollProgress reaches 0.2 in both directions
  const overlayProgress = Math.max(0, (scrollProgress - 0.2) / 0.8);
  const imageOpacity = 0.95 - overlayProgress * 0.8;
  const overlayOpacity = overlayProgress * 0.95;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-0 sm:min-h-[90vh] flex-col justify-center overflow-hidden border-b border-t border-border py-16 sm:py-28 lg:py-36"
    >
      {/* Cover image shown as background, transition to opaque background dynamically on scroll */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2400&q=80"
          alt="Clinical security infrastructure"
          fill
          sizes="100vw"
          style={{
            opacity: imageOpacity,
            transform: `scale(${1 + overlayProgress * 0.04})`,
          }}
          className="object-cover object-[center_35%] sm:object-center transition-all duration-500 ease-out"
        />
        {/* Subtle mobile backdrop gradient to guarantee crisp text contrast on small viewports */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90 sm:hidden" />
        {/* Opaque background transition layer */}
        <div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-background transition-opacity duration-500 ease-out"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div
          style={{
            opacity: Math.min(1, Math.max(0, overlayProgress * 2.5)),
            transform: `translateY(${
              (1 - Math.min(1, Math.max(0, overlayProgress * 2.5))) * 28
            }px)`,
          }}
          className="mx-auto max-w-3xl text-center transition-all duration-500 ease-out"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Security & compliance
          </p>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Secure by design. Trusted at scale.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Code201 runs on clinical-grade infrastructure with the controls
            health systems require — so compliance is part of the workflow,
            not a hurdle in it.
          </p>
        </div>

        {/* Linear row of 4 compliance badge boxes (staggered & GUARANTEED 100% completion on scroll) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {complianceBadges.map((badge, idx) => {
            const startThresh = 0.05 + idx * 0.07;
            const progress = Math.max(
              0,
              Math.min(1, (overlayProgress - startThresh) / 0.22)
            );
            return (
              <div
                key={badge}
                style={{
                  opacity: progress,
                  transform: `translateY(${(1 - progress) * 36}px)`,
                }}
                className="flex items-center justify-center gap-2 sm:gap-2.5 rounded-xl border border-border bg-card/95 p-3 sm:p-4 shadow-sm backdrop-blur transition-all duration-500 ease-out"
              >
                <ShieldCheck className="h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0 text-accent" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-foreground">
                  {badge}
                </span>
              </div>
            );
          })}
        </div>

        {/* Staggered security feature cards (compact 2-column mobile grid & GUARANTEED 100% completion on scroll) */}
        <div className="mt-4 sm:mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {securityCards.map(({ icon: Icon, title, description }, idx) => {
            const startThresh = 0.22 + idx * 0.07;
            const progress = Math.max(
              0,
              Math.min(1, (overlayProgress - startThresh) / 0.22)
            );
            return (
              <div
                key={title}
                style={{
                  opacity: progress,
                  transform: `translateY(${(1 - progress) * 44}px)`,
                }}
                className="flex flex-col justify-between rounded-xl sm:rounded-2xl border border-border bg-card p-3.5 sm:p-6 shadow-sm backdrop-blur transition-all duration-500 ease-out hover:border-accent/40 hover:shadow-md"
              >
                <div>
                  <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-button bg-accent/10 text-accent">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <h3 className="mt-3 text-xs sm:text-sm font-semibold text-foreground leading-snug">{title}</h3>
                  <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---- Pricing ----

// ---- Engagement Models ----

const tiers = [
  {
    name: "Focused Sprint",
    price: "Custom Scope",
    description: "Targeted engineering sprint for a specific operational bottleneck or AI integration.",
    features: [
      "Custom AI intake or EHR connector build",
      "HL7/FHIR endpoint development",
      "HIPAA security & audit log architecture",
      "Sandbox testing & provider UAT",
      "Dedicated post-launch engineering support",
    ],
    cta: "Discuss Project Scope",
    highlighted: false,
  },
  {
    name: "Forward-Deployed Team",
    price: "Custom Engagement",
    description: "Embedded engineering team building end-to-end custom CRMs, analytics & operational engines.",
    features: [
      "Dedicated forward-deployed engineers & tech lead",
      "Custom healthcare CRM & patient pipeline engine",
      "Real-time revenue telemetry & RCM analytics",
      "Bidirectional EHR integration (Epic / Athena / Cerner)",
      "Custom provider dashboard & workflow UI",
      "HIPAA compliance framework & signed BAA",
    ],
    cta: "Request Engagement Scope",
    highlighted: true,
  },
  {
    name: "Enterprise Architecture",
    price: "Enterprise Partner",
    description: "Long-term technical partnership for multi-site MSOs and health systems.",
    features: [
      "Multi-practice infrastructure & multi-tenant engine",
      "Dedicated 24/7 engineering SLA & telemetry monitoring",
      "Custom AI workflow orchestration & local tuning",
      "Continuous system scaling & performance optimization",
      "Executive architecture reviews & advisory",
    ],
    cta: "Contact Engineering Leads",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-border bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            ENGAGEMENT MODELS
          </p>
          <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Transparent Engineering Partnerships
          </h2>
          <p className="mt-3 text-muted-foreground">
            We structure forward-deployed engineering engagements around measurable operational outcomes, custom scope, and production reliability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <Reveal key={tier.name} delay={idx * 80}>
            <Card
              className={
                tier.highlighted
                  ? "relative border-foreground shadow-lg ring-1 ring-foreground h-full flex flex-col justify-between"
                  : "h-full flex flex-col justify-between"
              }
            >
              {tier.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-button bg-foreground px-3 py-1 text-xs font-medium text-background">
                  Recommended Engagement
                </span>
              ) : null}
              <CardContent className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{tier.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground min-h-[36px]">
                    {tier.description}
                  </p>
                  <div className="mt-4 pb-4 border-b border-border/60">
                    <span className="text-2xl font-bold tracking-tight text-foreground">
                      {tier.price}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/contact" className="mt-8 block w-full">
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- FAQ ----

const faqs = [
  {
    q: "Is Code201 HIPAA compliant?",
    a: "Yes. All clinical data is encrypted in transit (TLS 1.3) and at rest (AES-256), access is role-based and audited, and we execute signed Business Associate Agreements (BAAs) with every client.",
  },
  {
    q: "How do you connect with existing EHR systems?",
    a: "We integrate directly with your existing EHR system (Epic, AthenaHealth, Cerner, Elation, etc.) using HL7/FHIR APIs and custom bi-directional data connectors.",
  },
  {
    q: "What medical specialties or practice types do you support?",
    a: "Code201 builds custom systems for ambulatory groups, MSOs, specialty practices, and health systems across primary care, cardiology, pediatrics, orthopedics, and more.",
  },
  {
    q: "How does provider supervision work for AI workflows?",
    a: "All AI workflow actions — such as intake drafts, chart notes, or task pre-population — require 1-click provider or staff authorization before committing to the chart.",
  },
  {
    q: "What does an engineering engagement look like?",
    a: "Our forward-deployed engineers embed directly with your operational leads to audit requirements, build custom components, run sandbox testing, and provide ongoing telemetry support.",
  },
];

export function Faq() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="border-b border-border bg-background py-14 sm:py-20">
      {/* FAQ structured data for search-engine rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            FAQ
          </p>
          <h2 className="mt-2 text-balance text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion List with Horizontal Rule Dividers */}
        <div className="border-t border-border divide-y divide-border">
          {faqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);

            return (
              <div key={faq.q} className="py-4 sm:py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-start gap-3 sm:gap-4 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-foreground transition-transform duration-300">
                    <Plus
                      className={`h-4 w-4 stroke-[2] transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-accent" : "text-foreground group-hover:text-accent"
                      }`}
                    />
                  </span>
                  <span className="flex-1 text-base font-medium text-foreground sm:text-lg group-hover:text-accent/90 transition-colors">
                    {faq.q}
                  </span>
                </button>

                {/* Smooth Animated Height Dropdown */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden pl-8 sm:pl-9">
                    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---- Bottom CTA (big type ending with the pulse motif) ----

export function BottomCta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-16 lg:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
          alt="Clinical engineering background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <EcgLine className="h-10 w-full max-w-2xl text-accent/40" />
        <h2 className="max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Engineer your healthcare operations properly.
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Partner with Code201 forward-deployed engineers to build custom, reliable operational systems and AI pipelines.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/contact">
            <Button size="lg">Book Engineering Consultation</Button>
          </a>
          <a href="#features">
            <Button size="lg" variant="ghost">
              Explore Capabilities
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---- Practice ROI Calculator ----

export function RoiCalculator() {
  const [providers, setProviders] = useState(5);
  const [dailyCalls, setDailyCalls] = useState(150);

  // Calculations
  const hoursSavedPerMonth = Math.round((dailyCalls * 0.45 * 30) / 60);
  const revenueRecovered = Math.round(providers * dailyCalls * 18);
  const holdTimeReduction = 89;

  return (
    <section id="roi-calculator" className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            PRACTICE ROI CALCULATOR
          </p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Calculate your clinic&apos;s monthly staff & time savings
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            See how much front-desk capacity and recovered appointment revenue Code201 brings to your practice.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="roi-providers-input" className="text-sm font-semibold text-foreground flex items-center gap-2 cursor-pointer">
                  <UserRound className="h-4 w-4 text-accent" aria-hidden="true" />
                  Number of Providers
                </label>
                <span
                  aria-live="polite"
                  aria-atomic="true"
                  className="text-base font-bold text-foreground bg-muted px-3 py-1 rounded-button"
                >
                  {providers} {providers === 1 ? "Provider" : "Providers"}
                </span>
              </div>
              <input
                id="roi-providers-input"
                type="range"
                min="1"
                max="50"
                value={providers}
                onChange={(e) => setProviders(Number(e.target.value))}
                aria-label="Number of Providers"
                aria-valuemin={1}
                aria-valuemax={50}
                aria-valuenow={providers}
                aria-valuetext={`${providers} ${providers === 1 ? "Provider" : "Providers"}`}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="roi-calls-input" className="text-sm font-semibold text-foreground flex items-center gap-2 cursor-pointer">
                  <PhoneCall className="h-4 w-4 text-accent" aria-hidden="true" />
                  Daily Inbound Patient Calls
                </label>
                <span
                  aria-live="polite"
                  aria-atomic="true"
                  className="text-base font-bold text-foreground bg-muted px-3 py-1 rounded-button"
                >
                  {dailyCalls} Calls/day
                </span>
              </div>
              <input
                id="roi-calls-input"
                type="range"
                min="25"
                max="1000"
                step="25"
                value={dailyCalls}
                onChange={(e) => setDailyCalls(Number(e.target.value))}
                aria-label="Daily Inbound Patient Calls"
                aria-valuemin={25}
                aria-valuemax={1000}
                aria-valuenow={dailyCalls}
                aria-valuetext={`${dailyCalls} calls per day`}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 bg-muted/40 p-6 rounded-xl border border-border/80">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Staff Hours Saved</p>
                  <p className="text-2xl font-bold text-foreground" aria-live="polite">{hoursSavedPerMonth} hrs/mo</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Hold Time Reduction</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400" aria-live="polite">-{holdTimeReduction}%</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Estimated Monthly Revenue Recovered</p>
                  <p className="text-2xl font-bold text-foreground" aria-live="polite">${revenueRecovered.toLocaleString()}/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Specialty Switcher Tabbed Module ----

const specialtyData = [
  {
    id: "cardiology",
    label: "Cardiology",
    title: "Cardiology Triage & Test Ordering",
    description: "Automate EKG, Holter monitor, and echo appointment scheduling with specific pre-test preparation instructions.",
    features: ["Holter & Echo prep protocols", "Urgent chest pain triage routing", "Prior auth document collection"],
  },
  {
    id: "orthopedics",
    label: "Orthopedics",
    title: "Orthopedic Injury Intake & MRI Prep",
    description: "Routes joint-specific referrals directly to subspecialist schedules (Sports, Spine, Hand, Foot/Ankle).",
    features: ["Sub-specialty provider matching", "X-Ray/MRI authorization intake", "Post-op wound check scheduling"],
  },
  {
    id: "dermatology",
    label: "Dermatology",
    title: "Biopsy & Cosmetic Appointment Logic",
    description: "Differentiates medical dermatology urgent lesion checks from routine cosmetic consultations.",
    features: ["Lesion urgency screening", "Biopsy result callback tasks", "Cosmetic vs Medical scheduling"],
  },
  {
    id: "pediatrics",
    label: "Pediatrics",
    title: "Pediatric Vaccine & Sick Visit Rules",
    description: "Schedules well-child checkups matched to immunization schedules and same-day sick visits.",
    features: ["Age-based well visit intervals", "Parent guardian verification", "Same-day fever & sick triage"],
  },
  {
    id: "obgyn",
    label: "OB/GYN",
    title: "Prenatal & Gynecological Scheduling",
    description: "Handles gestational week milestone scheduling and annual preventive exam booking automatically.",
    features: ["Gestational milestone tracking", "Pap & Mammography recalls", "Urgent OB triage protocols"],
  },
];

export function SpecialtyPresets() {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState("cardiology");
  const activeData = specialtyData.find((s) => s.id === activeSpecialtyId) || specialtyData[0]!;

  return (
    <section id="specialty-depth" className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            SPECIALTY PRESETS
          </p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tuned to how your specialty actually practices
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Pre-built intake rules, appointment duration logic, and triage protocols for major healthcare specialties.
          </p>
        </div>

        {/* Tab Buttons */}
        <div role="tablist" aria-label="Medical specialty presets" className="flex flex-wrap justify-center gap-2 mb-10">
          {specialtyData.map((s) => (
            <button
              key={s.id}
              id={`tab-${s.id}`}
              type="button"
              role="tab"
              aria-selected={activeSpecialtyId === s.id}
              aria-controls={`panel-${s.id}`}
              tabIndex={activeSpecialtyId === s.id ? 0 : -1}
              onClick={() => setActiveSpecialtyId(s.id)}
              className={`rounded-button px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeSpecialtyId === s.id
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Active Content Card */}
        <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div id={`panel-${activeData.id}`} role="tabpanel" aria-labelledby={`tab-${activeData.id}`}>
            <h3 className="text-2xl font-medium text-foreground tracking-tight sm:text-3xl">
              {activeData.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {activeData.description}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {activeData.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-sm font-medium text-foreground bg-muted/40 p-3 rounded-xl border border-border/60">
                  <Check className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
