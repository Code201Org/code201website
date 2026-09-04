"use client";

import * as React from "react";

import { cn } from "@repo/ui";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms before the transition starts. */
  delay?: number;
}

/**
 * Fades + rises content in the first time it scrolls into view.
 *
 * - Server renders content visible, so no-JS visitors and crawlers never
 *   lose content.
 * - Elements already in the first viewport are never hidden.
 * - Honors `prefers-reduced-motion` (content simply stays visible).
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = React.useState(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only hide elements that start below the fold — above-fold content
    // must not flash.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setRevealed(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
