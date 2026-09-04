import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@repo/ui";

import { PulseMark } from "@/components/pulse-mark";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#customers", label: "Customers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <PulseMark />
          <span className="text-base font-semibold tracking-tight">
            Code201
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <a href="#pricing">
            <Button size="sm">
              Book a demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
