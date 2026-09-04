import { cn } from "@repo/ui";

/**
 * Code201 brand mark: an ECG pulse trace on an inverted tile.
 * Color adapts to context via currentColor / tokens.
 */
export function PulseMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M2 12h4l2-5 3 10 2.5-7.5L15 13h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** A thin ECG trace used as a section motif. Decorative. */
export function EcgLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-10 w-full", className)}
    >
      <path
        d="M0 30h180l12-18 14 34 12-24 10 8h90l14-30 16 52 14-38 10 8h220l12-18 14 34 12-24 10 8h180l14-30 16 52 14-38 10 8h194"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-line"
      />
    </svg>
  );
}
