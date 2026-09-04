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
  MessageSquareText,
  NotebookPen,
  Pause,
  PhoneCall,
  Pill,
  Play,
  Plus,
  Quote,
  RefreshCw,
  Search,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  Stethoscope,
  UserRound,
  Video,
  Volume2,
} from "lucide-react";

import { Badge, Button, Card, CardContent } from "@repo/ui";

import { LogoIcon } from "@/components/logo";
import { EcgLine } from "@/components/pulse-mark";

// ---- Hero ----
// Cursor/Devin-style: one massive sentence, two CTAs, large product visual —
// wrapped in clinical trust signals and an ECG pulse motif.

export function Hero() {
  return (
    <section className="relative flex w-full flex-col bg-background">
      {/* Full window width & 100% full viewport height landing hero banner */}
      <div className="relative flex min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] w-full flex-col justify-center overflow-hidden border-b border-border">
        {/* Full-bleed background texture pattern */}
        <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* Ambient radial glow highlights */}
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[600px] rounded-full bg-accent/15 blur-[120px] dark:bg-accent/20" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] w-[450px] rounded-full bg-primary/5 blur-[90px] dark:bg-primary/10" />

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
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
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

      {/* Product visual area */}
      <div className="relative w-full border-b border-border bg-muted/40 py-12 sm:py-16">
        <EcgLine className="mx-auto mb-8 h-10 w-full max-w-5xl px-4 text-accent/50 sm:px-6" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
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
    <span className="inline-flex items-center gap-1.5 rounded-button border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
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
    <div className="relative mx-auto max-w-5xl py-6 px-4 sm:px-12 md:px-20 lg:px-24">
      {/* Background Image Container */}
      <div className="relative h-[380px] sm:h-[460px] md:h-[500px] w-full sm:w-[82%] md:w-[78%] ml-auto overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1600&q=80"
          alt="Patient on call with Code201 Concierge AI"
          className="h-full w-full object-cover object-[center_20%]"
        />
        {/* Soft Left Side Gradient Overlay for Dialogue Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent pointer-events-none" />
      </div>

      {/* Floating Dialogue Card 1 (Top Left - Extends Far Outside Image Border) */}
      <div className="absolute top-3 -left-2 sm:top-6 sm:-left-8 md:-left-16 lg:-left-20 z-20 flex items-start gap-2.5 max-w-[270px] sm:max-w-[340px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg ring-4 ring-background">
          <LogoIcon unstyled className="h-4.5 w-4.5 text-accent-foreground" />
        </div>
        <div className="rounded-2xl border border-border/80 bg-card/95 p-3.5 sm:p-4 shadow-2xl backdrop-blur text-left">
          <AudioWaveform className="h-3 w-14 text-accent mb-1.5" />
          <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
            Hello, Rebecca! How can we help you today?
          </p>
        </div>
      </div>

      {/* Floating Dialogue Card 2 (Middle Left - Offset Outside Image Border) */}
      <div className="absolute top-[38%] left-2 sm:left-4 md:-left-4 lg:-left-8 z-20 flex items-start gap-2.5 max-w-[250px] sm:max-w-[320px]">
        <div className="rounded-2xl border border-border/80 bg-card/95 p-3.5 sm:p-4 shadow-2xl backdrop-blur text-left">
          <AudioWaveform className="h-3 w-14 text-muted-foreground mb-1.5" />
          <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
            I had a question about a balance on my account.
          </p>
        </div>
      </div>

      {/* Floating Dialogue Card 3 (Bottom Left - Extends Far Outside Image Border) */}
      <div className="absolute bottom-3 -left-2 sm:bottom-6 sm:-left-8 md:-left-16 lg:-left-20 z-20 flex items-start gap-2.5 max-w-[280px] sm:max-w-[360px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg ring-4 ring-background">
          <LogoIcon unstyled className="h-4.5 w-4.5 text-accent-foreground" />
        </div>
        <div className="rounded-2xl border border-border/80 bg-card/95 p-3.5 sm:p-4 shadow-2xl backdrop-blur text-left">
          <AudioWaveform className="h-3 w-14 text-accent mb-1.5" />
          <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
            I see there's a $38 charge from January 11th. Let me investigate.
          </p>
        </div>
      </div>

      {/* Floating EHR Status Badge (Extends Outside Top Right Image Border) */}
      <div className="absolute top-4 -right-1 sm:top-8 sm:-right-4 md:-right-8 z-20 flex items-center gap-2 rounded-full border border-border/80 bg-card/95 px-3.5 py-2 shadow-xl backdrop-blur text-xs font-semibold text-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span>24/7 EHR Sync</span>
      </div>

      {/* Floating Intake Action Badge (Extends Outside Bottom Right Image Border) */}
      <div className="absolute bottom-4 -right-1 sm:bottom-8 sm:-right-4 md:-right-8 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-border/80 bg-card/95 p-3 shadow-2xl backdrop-blur">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
          <CircleCheck className="h-4 w-4" />
        </div>
        <div className="text-left text-xs">
          <p className="font-semibold text-foreground">Appointment Booked</p>
          <p className="text-[11px] text-muted-foreground">Tuesday • 9:30 AM</p>
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

// ---- Patient Call Workflow Scroll Timeline Stepper ----

const workflowSteps = [
  {
    step: "Step 1",
    title: "Call Answered, Instantly.",
    description:
      "The Concierge agent answers the patient’s call immediately to help the patient schedule an appointment.",
    icon: PhoneCall,
  },
  {
    step: "Step 2",
    title: "Patient Information Captured.",
    description:
      "The agent asks the right questions to capture necessary patient information, pulls up their chart, and writes new information directly into the EHR.",
    icon: Search,
  },
  {
    step: "Step 3",
    title: "Request Detected & Understood.",
    description:
      "The agent identifies the request to schedule an appointment and refill a prescription, and prepares to handle both in a single conversation.",
    icon: Sparkles,
  },
  {
    step: "Step 4",
    title: "Appointment Booked.",
    description:
      "Concierge checks real-time availability, applies specialty-specific scheduling logic and provider rules, and books the appointment directly in the EHR.",
    icon: CalendarCheck,
  },
  {
    step: "Step 5",
    title: "Prescription Refill Submitted",
    description:
      "The agent generates an EHR-native task for the provider to review and action the prescription refill. No staff involvement required.",
    icon: Pill,
  },
  {
    step: "Step 6",
    title: "Appointment Confirmed, Loop Closed.",
    description:
      "The patient receives an immediate text confirmation for the appointment. The refill task is queued in the EHR, and ready for the team to action.",
    icon: MessageSquareText,
  },
];

export function Specialties() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Center point calculation: timeline progress as center of screen moves through timeline
      const centerPos = windowHeight / 2 - rect.top;
      const totalDist = rect.height;

      const rawProgress = totalDist > 0 ? centerPos / totalDist : 0;
      const progress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(progress);

      const stepIdx = Math.min(
        workflowSteps.length - 1,
        Math.max(0, Math.floor(progress * workflowSteps.length))
      );
      setActiveStep(stepIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
            HOW IT WORKS
          </p>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Here's What Happens When Patients Call into Your Practice.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            One call. Multiple needs. No hold time. No staff required. See how
            Code201's Concierge AI agent handles the full interaction from first
            ring to EHR sync.
          </p>
        </div>

        {/* Vertical Timeline Stepper Container */}
        <div
          ref={timelineRef}
          className="relative mt-16 sm:mt-24 flex gap-6 sm:gap-12 md:gap-16"
        >
          {/* Sticky Left Line & Indicator Column */}
          <div className="relative flex flex-col items-center w-10 sm:w-12">
            {/* Background Line Track */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-border/60" />

            {/* Filled Animated Scroll Line */}
            <div
              className="absolute top-0 w-0.5 bg-foreground rounded-full transition-all duration-75 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
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
                  className={`group relative flex flex-col items-start gap-3 transition-all duration-500 ${
                    isCurrent
                      ? "opacity-100 scale-[1.02] translate-x-0"
                      : isActive
                      ? "opacity-80 translate-x-0"
                      : "opacity-35 translate-x-1"
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

// ---- Testimonials: 3-column client layout with left rating badge & quote cards ----

const clientTestimonials = [
  {
    quote:
      "We went from three disconnected systems to one. Our front desk closes the books 90 minutes earlier every day, and claim denials have dropped noticeably.",
    name: "Dr. Amara Osei, MD",
    title: "Medical Director",
    clinic: "Bayview Family Health",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    rating: "5.0",
    clinicLogo: "BAYVIEW HEALTH",
  },
  {
    quote:
      "No-shows are down about 40% since we switched. The scheduling and automated reminder flows alone paid for our subscription.",
    name: "Dr. Luis Herrera, DO",
    title: "Owner & Lead Physician",
    clinic: "Herrera Pediatrics",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
    rating: "5.0",
    clinicLogo: "HERRERA PEDIATRICS",
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
              TESTIMONIALS
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              What our clients say
            </h2>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            All testimonials (61)
          </a>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {/* Left Column: Summary & Rating Trust Badge */}
          <div className="flex flex-col justify-between space-y-8 pr-2">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Clinical teams trust Code201 because we treat their practice workflow like our own. We focus on clinical outcomes, reducing administrative burden so providers can focus on care.
            </p>

            {/* Rating trust badge */}
            <div className="pt-6 border-t border-border/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                REVIEWED ON
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xl font-bold text-foreground">5.0</span>
                <div className="flex items-center text-accent">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <Star className="h-4 w-4 fill-accent text-accent" />
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                120+ VERIFIED CLINICAL REVIEWS
              </p>
            </div>
          </div>

          {/* Middle & Right Columns: Testimonial Cards */}
          {clientTestimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all hover:border-accent/40"
            >
              <div>
                {/* Red/Accent Quote Mark Icon */}
                <div className="mb-4 text-accent">
                  <Quote className="h-8 w-8 fill-accent/15 stroke-accent" />
                </div>

                {/* Quote Text */}
                <p className="text-base leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author Info & Clinic Badge */}
                <div className="mt-8 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover border border-border"
                    />
                    <div>
                      <p className="text-base font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.title}, {t.clinic}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground/80 border border-border/80 rounded px-2 py-0.5">
                    {t.clinicLogo}
                  </span>
                </div>
              </div>

              {/* Bottom Footer inside Card */}
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                <div className="flex items-center gap-1 font-semibold text-foreground">
                  <span>{t.rating}</span>
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                </div>
                <div className="flex items-center gap-3 font-medium text-accent">
                  <a href="#pricing" className="hover:underline">Full text</a>
                  <span>·</span>
                  <a href="#features" className="hover:underline">Case study</a>
                </div>
              </div>
            </div>
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
      className="relative flex min-h-0 sm:min-h-[90vh] flex-col justify-center overflow-hidden border-b border-t border-border py-16 sm:py-28 lg:py-36"
    >
      {/* Cover image shown as background, transition to opaque background dynamically on scroll */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2400&q=80"
          alt="Clinical security infrastructure"
          style={{
            opacity: imageOpacity,
            transform: `scale(${1 + overlayProgress * 0.04})`,
          }}
          className="h-full w-full object-cover object-[center_35%] sm:object-center transition-all duration-500 ease-out"
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
            opacity: Math.min(1, Math.max(0.35, overlayProgress * 2.5)),
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
            Calculate your clinic's monthly staff & time savings
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
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-accent" />
                  Number of Providers
                </label>
                <span className="text-base font-bold text-foreground bg-muted px-3 py-1 rounded-button">
                  {providers} {providers === 1 ? "Provider" : "Providers"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={providers}
                onChange={(e) => setProviders(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-accent" />
                  Daily Inbound Patient Calls
                </label>
                <span className="text-base font-bold text-foreground bg-muted px-3 py-1 rounded-button">
                  {dailyCalls} Calls/day
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="1000"
                step="25"
                value={dailyCalls}
                onChange={(e) => setDailyCalls(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 bg-muted/40 p-6 rounded-xl border border-border/80">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Staff Hours Saved</p>
                  <p className="text-2xl font-bold text-foreground">{hoursSavedPerMonth} hrs/mo</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Hold Time Reduction</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-{holdTimeReduction}%</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Estimated Monthly Revenue Recovered</p>
                  <p className="text-2xl font-bold text-foreground">${revenueRecovered.toLocaleString()}/mo</p>
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

export function SpecialtySwitcher() {
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
            Pre-built intake rules, appointment duration logic, and triage protocols for 40+ specialties.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {specialtyData.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSpecialtyId(s.id)}
              className={`rounded-button px-4 py-2 text-sm font-medium transition-all ${
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
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-medium text-foreground tracking-tight sm:text-3xl">
            {activeData.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {activeData.description}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {activeData.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-sm font-medium text-foreground bg-muted/40 p-3 rounded-xl border border-border/60">
                <Check className="h-4 w-4 text-accent shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
