"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  Check,
  CircleCheck,
  FileCheck2,
  FileHeart,
  KeyRound,
  NotebookPen,
  Pill,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Video,
} from "lucide-react";

import { Badge, Button, Card, CardContent } from "@repo/ui";

import { EcgLine } from "@/components/pulse-mark";

// ---- Hero ----
// Cursor/Devin-style: one massive sentence, two CTAs, large product visual —
// wrapped in clinical trust signals and an ECG pulse motif.

export function Hero() {
  return (
    <section className="relative flex w-full flex-col bg-background">
      {/* Full window width & 100% full viewport height landing hero banner */}
      <div className="relative flex min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] w-full flex-col justify-center overflow-hidden border-b border-border">
        {/* Full-bleed background clinical banner image */}
        <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern clinic environment background"
            loading="eager"
            className="h-full w-full object-cover object-center opacity-65 dark:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        </div>

        {/* Fills the entire viewport on load: headline, CTAs, trust chips */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:py-24">
          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Code201 is the operating system for modern clinics.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            Scheduling, charting, billing, and telehealth — unified in one
            HIPAA-compliant workspace, built by clinicians for clinical teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing">
              <Button size="lg">Start free trial</Button>
            </a>
            <a href="#features">
              <Button size="lg" variant="ghost">
                Book a demo
                <ArrowRight />
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <TrustChip icon={ShieldCheck} label="HIPAA compliant" />
            <TrustChip icon={FileCheck2} label="SOC 2 Type II" />
            <TrustChip icon={Stethoscope} label="ONC certified" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Free 14-day trial · No credit card required
          </p>
        </div>
      </div>

      {/* Product visual area: clean normal background without image */}
      <div className="relative w-full border-b border-border bg-muted/40 py-12 sm:py-16">
        <EcgLine className="mx-auto mb-8 h-10 w-full max-w-5xl px-4 text-accent/50 sm:px-6" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <DashboardMockup />
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
    <span className="inline-flex items-center gap-1.5 rounded-button border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-accent" />
      {label}
    </span>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-2xl">
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-danger" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning" />
          <span className="h-2.5 w-2.5 rounded-full bg-success" />
        </div>
        <span className="mx-auto rounded-button bg-muted px-3 py-0.5 text-[11px] text-muted-foreground">
          app.code201.health
        </span>
        <span className="w-10" />
      </div>

      <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[160px_1fr]">
        {/* mini sidebar */}
        <div className="flex flex-col gap-1 border-r border-border p-2.5 sm:p-3">
          {["Dashboard", "Patients", "Appointments", "Providers", "Billing"].map(
            (item, i) => (
              <span
                key={item}
                className={
                  i === 0
                    ? "rounded-button bg-muted px-2 py-1.5 text-[11px] font-medium text-foreground"
                    : "rounded-button px-2 py-1.5 text-[11px] text-muted-foreground"
                }
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* mini main panel */}
        <div className="p-4 text-left sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">
              Margaret Chen · MRN-482913
            </p>
            <Badge variant="info">F · 67y</Badge>
          </div>

          {/* vitals strip */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["BP 124/78", "HR 72", "SpO₂ 98%", "A1c 5.9%"].map((vital) => (
              <span
                key={vital}
                className="rounded-button border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {vital}
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              ["Appointments", "12"],
              ["Active patients", "11"],
              ["Pending claims", "4"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-background p-2.5"
              >
                <p className="text-base font-semibold text-foreground sm:text-lg">
                  {value}
                </p>
                <p className="text-[10px] text-muted-foreground sm:text-[11px]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            {[
              ["8:00 AM", "Henry Fitzgerald", "Dr. Okafor", "Completed", "success"],
              ["9:30 AM", "Thomas Brennan", "R. Goldstein", "In Progress", "warning"],
              ["10:00 AM", "Marcus Washington", "Dr. Raghavan", "Checked In", "info"],
              ["1:30 PM", "Sofia Nguyen", "Dr. Alvarez", "Scheduled", "secondary"],
            ].map(([time, patient, provider, status, variant]) => (
              <div
                key={patient}
                className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2"
              >
                <span className="hidden w-14 text-[11px] text-muted-foreground sm:block">
                  {time}
                </span>
                <span className="min-w-0 flex-1 truncate text-xs text-foreground">
                  {patient}
                  <span className="hidden text-muted-foreground sm:inline">
                    {" "}
                    · {provider}
                  </span>
                </span>
                <Badge variant={variant as never}>{status}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Proven at scale (clinical outcome metrics + practice logos) ----

const outcomes = [
  { value: "70%", label: "less documentation time" },
  { value: "2.1 hrs", label: "returned to clinical care, daily" },
  { value: "98.2%", label: "first-pass claim acceptance" },
  { value: "40+", label: "specialties supported" },
];

const clinics = [
  "Bayview Family Health",
  "Herrera Pediatrics",
  "Presidio Internal Medicine",
  "Mission Cardiology",
  "Northgate Orthopedics",
  "Cedar Women's Health",
];

export function ProvenAtScale() {
  return (
    <section className="border-b border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Proven at scale
        </p>

        <div className="mx-auto mt-5 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="text-center">
              <p className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {outcome.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {outcome.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-5">
          {clinics.map((name) => (
            <span
              key={name}
              className="flex items-center gap-2 text-sm font-semibold tracking-tight text-muted-foreground/80"
            >
              <Activity className="h-3.5 w-3.5" />
              {name}
            </span>
          ))}
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
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
          alt="Clinical reception and schedule management"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Bayview Family Health</p>
          <Badge variant="info">Live Schedule</Badge>
        </div>
      </div>
      <div className="p-4 pt-1">
        <div className="space-y-2">
          {[
            ["08:00", "Henry Fitzgerald", "Dr. Okafor · Rm 2", "Completed", "success"],
            ["09:30", "Thomas Brennan", "R. Goldstein · Rm 6", "In Progress", "warning"],
            ["10:00", "Marcus Washington", "Dr. Raghavan · Rm 3", "Checked In", "info"],
            ["13:30", "Margaret Chen", "Dr. Okafor · Rm 2", "Scheduled", "secondary"],
          ].map(([time, patient, provider, status, variant]) => (
            <div
              key={patient as string}
              className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2 text-xs"
            >
              <span className="font-medium text-muted-foreground">{time}</span>
              <span className="min-w-0 flex-1 truncate font-medium text-foreground">
                {patient}
                <span className="font-normal text-muted-foreground"> · {provider}</span>
              </span>
              <Badge variant={variant as never}>{status}</Badge>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Eligibility verified at booking · waitlist backfilled 2 slots this week
        </p>
      </div>
    </div>
  );
}

function BillingVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
          alt="Medical practice revenue cycle and billing management"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Claim Pipeline</p>
          <Badge variant="success">98.2% First-Pass Rate</Badge>
        </div>
      </div>
      <div className="p-4 pt-1">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            ["Submitted", "24", "info"],
            ["Adjudicating", "9", "warning"],
            ["Paid this week", "$18.4k", "success"],
          ].map(([label, value, variant]) => (
            <div
              key={label as string}
              className="rounded-lg border border-border bg-background p-2"
            >
              <Badge variant={variant as never}>{label}</Badge>
              <p className="mt-1 text-base font-semibold">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {[
            ["CLM-00837", "99213", "Margaret Chen", "$195.00", "Paid", "success"],
            ["CLM-00832", "99214", "Aisha Okafor", "$150.00", "Pending", "warning"],
          ].map(([claim, cpt, patient, amount, status, variant]) => (
            <div
              key={claim as string}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-background px-3 py-2 text-xs"
            >
              <span className="font-mono text-muted-foreground">{cpt}</span>
              <span className="min-w-0 flex-1 truncate font-medium">{patient}</span>
              <span className="font-medium">{amount}</span>
              <Badge variant={variant as never}>{status}</Badge>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          E/M levels suggested from documentation · ICD-10 mapping built in
        </p>
      </div>
    </div>
  );
}

function ChartingVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80"
          alt="Clinician creating SOAP charting note"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Visit Note — Margaret Chen</p>
          <Badge variant="success">Signed</Badge>
        </div>
      </div>
      <div className="p-4 pt-1">
        <div className="space-y-2 rounded-lg border border-border bg-background p-3">
          <p className="text-xs text-foreground">
            <span className="font-semibold text-accent">Subjective:</span> Improved exercise tolerance. No chest pain or shortness of breath.
          </p>
          <p className="text-xs text-foreground">
            <span className="font-semibold text-accent">Assessment:</span> Atrial fibrillation (I48.91), rate-controlled. Hypertension (I10).
          </p>
          <div className="flex items-center gap-2 rounded bg-muted/60 px-2.5 py-1.5 text-xs">
            <Pill className="h-3.5 w-3.5 shrink-0 text-accent" />
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
        One schedule for <span className="text-accent">the whole clinic</span>
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
        Billing that <span className="text-accent">closes itself out</span>
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
        <span className="text-accent">the conversation</span>
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
      className={`border-b border-border/60 py-16 lg:py-24 ${
        isAltBg ? "bg-muted/30" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          <div className={flip ? "lg:order-2" : undefined}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
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
                    <CircleCheck className="h-4 w-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className={flip ? "lg:order-1" : undefined}>{visual}</div>
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

// ---- Specialties ----

const specialties = [
  "Family Medicine",
  "Internal Medicine",
  "Pediatrics",
  "Cardiology",
  "Orthopedics",
  "OB/GYN",
  "Dermatology",
  "Behavioral Health",
  "Endocrinology",
  "Gastroenterology",
  "Urgent Care",
  "Telehealth",
];

export function Specialties() {
  return (
    <section className="border-b border-border bg-muted/40 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Specialty depth
            </p>
            <h2 className="mt-2 text-balance text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Built for 40+ specialties — from day one
            </h2>
            <p className="mt-2 text-muted-foreground">
              Templated workflows, order sets, and code presets tuned to how
              each specialty actually practices.
            </p>
          </div>
          <div className="flex max-w-2xl flex-wrap gap-2 lg:justify-end">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="inline-flex items-center gap-1.5 rounded-button border border-border bg-card px-3 py-1.5 text-sm text-foreground"
              >
                <Stethoscope className="h-3.5 w-3.5 text-accent" />
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Stats band (inverted monochrome statement) ----

const stats = [
  { value: "14,000+", label: "Providers on Code201" },
  { value: "9.2M", label: "Patient records managed" },
  { value: "1.4M", label: "Clinical notes signed yearly" },
  { value: "$310M", label: "Claims processed annually" },
];

export function StatsBand() {
  return (
    <section className="bg-foreground py-14 text-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-6 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-medium tracking-tight sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm opacity-70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- Workflow (intake → visit → after care) ----

const workflow = [
  {
    step: "01",
    title: "Before the visit",
    body: "Patients self-book with real-time eligibility checks. The chart arrives prepped — history, medications, allergies, and recent labs in one view.",
  },
  {
    step: "02",
    title: "During the visit",
    body: "Vitals flow straight into the note, the assessment and plan draft themselves as the conversation happens, and prescriptions are two taps away.",
  },
  {
    step: "03",
    title: "After the visit",
    body: "One tap signs the note. The claim goes out scrubbed with the right CPT and ICD-10 codes, and remittance is tracked to a zero balance.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="border-b border-border bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The clinical loop
          </p>
          <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            From intake to paid claim
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-8">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40"
            >
              <span className="font-mono text-sm font-semibold text-accent">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
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
          {moreFeatures.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="transition-colors hover:bg-muted/40">
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
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
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
        </div>
      </div>
    </section>
  );
}

// ---- Testimonials: one big pull quote + supporting cards ----

const heroQuote = {
  quote:
    "We went from three disconnected systems to one. Our front desk closes the books 90 minutes earlier every day, and claim denials have dropped noticeably.",
  name: "Dr. Amara Osei, MD",
  title: "Medical Director, Bayview Family Health",
  avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
};

const quotes = [
  {
    quote:
      "No-shows are down about 40% since we switched. The scheduling and reminder flows alone paid for the subscription.",
    name: "Dr. Luis Herrera, DO",
    title: "Owner, Herrera Pediatrics",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Charting used to follow me home every night. Now I'm done before I leave the exam room.",
    name: "Dr. Hannah Weiss, MD",
    title: "Internist, Presidio Internal Medicine",
    avatar: "https://images.unsplash.com/photo-1594824813572-c288d40733a1?auto=format&fit=crop&w=200&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="bg-background py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <figure className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-accent/40 shadow-sm">
            <img
              src={heroQuote.avatar}
              alt={heroQuote.name}
              className="h-full w-full object-cover"
            />
          </div>
          <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            &ldquo;{heroQuote.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {heroQuote.name}
            </span>{" "}
            · {heroQuote.title}
          </figcaption>
        </figure>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quotes.map((t) => (
            <Card key={t.name} className="transition-all hover:border-accent/40">
              <CardContent className="p-6">
                <p className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border border-border"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

const complianceBadges = ["HIPAA", "SOC 2 TYPE II", "ONC CERTIFIED", "HL7 / FHIR"];

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
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden border-b border-t border-border py-28 lg:py-36"
    >
      {/* Cover image shown as background, transition to opaque background dynamically on scroll */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2400&q=80"
          alt="Clinical security infrastructure"
          style={{
            opacity: imageOpacity,
            transform: `scale(${1 + overlayProgress * 0.04})`,
          }}
          className="h-full w-full object-cover object-center transition-all duration-500 ease-out"
        />
        {/* Opaque background transition layer */}
        <div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-background transition-opacity duration-500 ease-out"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div
          style={{
            opacity: Math.min(1, overlayProgress * 2.5),
            transform: `translateY(${
              (1 - Math.min(1, overlayProgress * 2.5)) * 28
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
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
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
                className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card/95 p-4 shadow-sm backdrop-blur transition-all duration-500 ease-out"
              >
                <ShieldCheck className="h-4.5 w-4.5 shrink-0 text-accent" />
                <span className="text-xs font-bold tracking-wider text-foreground">
                  {badge}
                </span>
              </div>
            );
          })}
        </div>

        {/* Staggered security feature cards (staggered & GUARANTEED 100% completion on scroll) */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-2xl border border-border bg-card p-6 shadow-sm backdrop-blur transition-all duration-500 ease-out hover:border-accent/40 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-button bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---- Pricing ----

const tiers = [
  {
    name: "Essentials",
    price: "$199",
    description: "For solo providers getting started.",
    features: [
      "Full EHR & charting",
      "Online scheduling & reminders",
      "e-Prescribing",
      "Patient portal",
      "Email support",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$399",
    description: "For growing practices and multi-provider clinics.",
    features: [
      "Everything in Essentials",
      "Integrated medical billing & RCM",
      "Telehealth visits",
      "Eligibility & denial workflows",
      "Advanced analytics & custom reports",
      "Priority support with dedicated onboarding",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For groups, MSOs, and health systems.",
    features: [
      "Everything in Professional",
      "HL7/FHIR integrations & API access",
      "SSO & advanced role controls",
      "Dedicated success manager",
      "99.9% uptime SLA",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-border bg-background py-12 lg:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Pricing
          </p>
          <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Simple pricing per provider
          </h2>
          <p className="mt-3 text-muted-foreground">
            Unlimited patients, unlimited claims, and free data migration on
            every plan. Billed annually.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.highlighted
                  ? "relative border-foreground shadow-lg ring-1 ring-foreground"
                  : undefined
              }
            >
              {tier.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-button bg-foreground px-3 py-1 text-xs font-medium text-background">
                  Most popular
                </span>
              ) : null}
              <CardContent className="p-7">
                <h3 className="font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <p className="mt-5">
                  <span className="text-4xl font-medium tracking-tight">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" ? (
                    <span className="text-sm text-muted-foreground"> /mo</span>
                  ) : null}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
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
    a: "Yes. All data is encrypted in transit and at rest, access is role-based and fully audited, and we sign BAAs with every customer. Code201 is SOC 2 Type II audited and ONC certified.",
  },
  {
    q: "Can you migrate data from our current EHR?",
    a: "Yes — migration from all major EHR and practice-management systems is included in every plan. Our onboarding team moves patients, schedules, and billing history with you validating at each step.",
  },
  {
    q: "Do you support our specialty?",
    a: "Code201 ships with templates for 30+ specialties including family medicine, pediatrics, internal medicine, cardiology, and orthopedics, plus a template builder for custom workflows.",
  },
  {
    q: "How does coding assistance work?",
    a: "E/M levels and ICD-10 codes are suggested directly from the clinical documentation, then confirmed by your coders before submission — every final decision stays with your team.",
  },
  {
    q: "What does billing support look like?",
    a: "Professional and Enterprise plans include claim scrubbing, eligibility checks, denial management workflows, and same-day support from our US-based revenue cycle team.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            FAQ
          </p>
          <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-8 divide-y divide-border rounded-xl border border-border">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground">
                {faq.q}
                <span className="text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
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
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
          alt="Clinical team background"
          className="h-full w-full object-cover object-center opacity-10 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <EcgLine className="h-10 w-full max-w-2xl text-accent/40" />
        <h2 className="max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Give your clinic its heartbeat back.
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Join 14,000+ providers running their practices on one clinical
          platform. Set up in days, not months.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#pricing">
            <Button size="lg">Start free trial</Button>
          </a>
          <a href="#pricing">
            <Button size="lg" variant="ghost">
              Book a demo
              <ArrowRight />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
