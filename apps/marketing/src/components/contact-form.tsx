"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";

import { Button, Input } from "@repo/ui";

const TOPICS = [
  "Operational CRM",
  "Workflow automation",
  "Analytics & dashboards",
  "AI systems",
  "Something else",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactFormValues = {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    organization: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "opening" | "opened">("idle");

  const opening = status === "opening";

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: ContactFormErrors = {};
    if (!values.name.trim()) {
      nextErrors.name = "Please tell us your name.";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Please add your work email.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      nextErrors.email = "That email address doesn't look right.";
    }
    if (!values.message.trim()) {
      nextErrors.message = "A few lines about the project is all we need.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("opening");

    const subject = `Consultation request: ${values.topic || "General inquiry"} — ${values.name.trim()}`;
    const body = [
      `Name: ${values.name.trim()}`,
      `Work email: ${values.email.trim()}`,
      `Organization: ${values.organization.trim() || "—"}`,
      `Looking to build: ${values.topic || "Not specified"}`,
      "",
      "Project details:",
      values.message.trim(),
    ].join("\r\n");

    window.location.href = `mailto:engineering@code201.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      setStatus("opened");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
            Full name <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <Input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Dr. Ada Lokko"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            disabled={opening}
          />
          {errors.name ? (
            <p className="text-sm font-medium text-foreground">{errors.name}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
            Work email <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@clinic.com"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            disabled={opening}
          />
          {errors.email ? (
            <p className="text-sm font-medium text-foreground">{errors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-organization" className="block text-sm font-medium text-foreground">
            Organization
          </label>
          <Input
            id="contact-organization"
            type="text"
            autoComplete="organization"
            placeholder="Clinic, network, or health system"
            value={values.organization}
            onChange={(event) => updateField("organization", event.target.value)}
            disabled={opening}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-topic" className="block text-sm font-medium text-foreground">
            What are you looking to build?
          </label>
          <select
            id="contact-topic"
            value={values.topic}
            onChange={(event) => updateField("topic", event.target.value)}
            disabled={opening}
            className="flex w-full appearance-none rounded-button border border-border bg-card px-3 py-2 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select a focus area</option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
          Project details <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          placeholder="What's slow or breaking today, what data you already have, and where you want to be in a quarter."
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          disabled={opening}
          className="flex min-h-32 w-full resize-y rounded-button border border-border bg-card px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
        {errors.message ? (
          <p className="text-sm font-medium text-foreground">{errors.message}</p>
        ) : null}
      </div>

      <div className="space-y-3 pt-2">
        <Button type="submit" size="lg" disabled={opening}>
          <Mail className="h-4 w-4" />
          {opening ? "Opening your email app…" : "Open email draft"}
        </Button>
        <p className="text-xs text-muted-foreground">
          This opens your email app with a draft to engineering@code201.in — nothing is sent from this page until you press send.
        </p>
      </div>

      {status === "opened" ? (
        <p
          role="status"
          className="rounded-button border border-border bg-muted px-4 py-3 text-sm text-foreground"
        >
          Your email app should have opened with the details — press send and we&apos;ll reply within one business day.
        </p>
      ) : null}
    </form>
  );
}
