import { cn } from "@repo/ui";
import { PulseMark } from "@/components/logo";

export { PulseMark };

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
