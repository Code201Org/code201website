"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { Button, Input } from "@repo/ui";

const WHATSAPP_NUMBER = "917994445071";
const WHATSAPP_DISPLAY = "+91 79944 45071";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaFormValues = {
  name: string;
  email: string;
  phone: string;
  requirement: string;
};

type WaFormErrors = Partial<Record<keyof WaFormValues, string>>;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<WaFormValues>({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });
  const [errors, setErrors] = useState<WaFormErrors>({});
  const [sent, setSent] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    document.getElementById("wa-name")?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  function updateField(field: keyof WaFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: WaFormErrors = {};
    if (!values.name.trim()) {
      nextErrors.name = "Please tell us your name.";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Please add your email.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      nextErrors.email = "That email address doesn't look right.";
    }
    if (!values.requirement.trim()) {
      nextErrors.requirement = "A line or two about what you need.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = [
      "*New enquiry — code201.in*",
      "",
      `*Name:* ${values.name.trim()}`,
      `*Email:* ${values.email.trim()}`,
    ];
    if (values.phone.trim()) {
      lines.push(`*Phone:* ${values.phone.trim()}`);
    }
    lines.push("", `*Requirement:*`, values.requirement.trim());

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-30 sm:bottom-6 sm:right-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {open ? (
        <div
          id="whatsapp-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Send a WhatsApp message"
          className="fixed inset-x-4 bottom-24 z-30 rounded-2xl border border-border bg-card p-5 shadow-2xl sm:static sm:inset-auto sm:mb-4 sm:w-[380px] motion-reduce:transition-none"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Send us a WhatsApp message
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Opens a chat with {WHATSAPP_DISPLAY}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp form"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {sent ? (
            <div className="mt-4 space-y-3">
              <p
                role="status"
                className="rounded-button border border-border bg-muted px-4 py-3 text-sm text-foreground"
              >
                WhatsApp should have opened with your message prefilled — press
                send there and we&apos;ll reply shortly.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSent(false);
                  setValues({ name: "", email: "", phone: "", requirement: "" });
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-3.5">
              <div className="space-y-1.5">
                <label htmlFor="wa-name" className="block text-xs font-medium text-foreground">
                  Name <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <Input
                  id="wa-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  aria-required="true"
                  aria-invalid={errors.name ? true : undefined}
                  className="h-9"
                />
                {errors.name ? (
                  <p className="text-xs font-medium text-foreground">{errors.name}</p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="wa-email" className="block text-xs font-medium text-foreground">
                  Email <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <Input
                  id="wa-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  aria-required="true"
                  aria-invalid={errors.email ? true : undefined}
                  className="h-9"
                />
                {errors.email ? (
                  <p className="text-xs font-medium text-foreground">{errors.email}</p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="wa-phone" className="block text-xs font-medium text-foreground">
                  Phone <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="wa-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 …"
                  value={values.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="h-9"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="wa-requirement" className="block text-xs font-medium text-foreground">
                  Message / requirement <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="wa-requirement"
                  placeholder="What are you looking to build?"
                  value={values.requirement}
                  onChange={(event) => updateField("requirement", event.target.value)}
                  aria-required="true"
                  aria-invalid={errors.requirement ? true : undefined}
                  className="flex min-h-20 w-full resize-y rounded-button border border-border bg-card px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                {errors.requirement ? (
                  <p className="text-xs font-medium text-foreground">{errors.requirement}</p>
                ) : null}
              </div>

              <Button type="submit" className="w-full bg-[#25D366] text-white hover:bg-[#1eb85a]">
                <WhatsAppIcon className="h-4 w-4" />
                Send on WhatsApp
              </Button>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Opens WhatsApp with your message prefilled to {WHATSAPP_DISPLAY} — nothing is sent until you press send there.
              </p>
            </form>
          )}
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
          setSent(false);
        }}
        aria-expanded={open}
        aria-controls="whatsapp-chat-panel"
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/15 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
