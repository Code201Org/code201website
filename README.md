# Code201 — Clinical SaaS Marketing Site

Marketing website for **Code201**, a clinical SaaS product (EHR / practice
management / billing). Built with Next.js (Turbopack) in a
[Turborepo](https://turbo.build/repo) workspace, styled with Tailwind CSS v4
and shadcn-style components, and managed with **Bun**.

## Structure

```
apps/
  marketing/  Marketing site (Next.js, port 3000)
              → Hero, features, stats, testimonials, pricing, FAQ
packages/
  ui/                 Shared UI components (shadcn-style) + theme tokens
  eslint-config/      Shared ESLint flat config
  typescript-config/  Shared tsconfig presets
```

## Getting started

```bash
bun install
bun dev          # → http://localhost:3000
```

Requires Bun 1.2+ (repo pins `bun@1.3.14` via the `packageManager` field).

## Scripts

| Command            | What it does                       |
| ------------------ | ---------------------------------- |
| `bun dev`          | Dev server at localhost:3000       |
| `bun run build`    | Production build (all workspaces)  |
| `bun run lint`     | ESLint across all packages         |
| `bun run typecheck`| `tsc --noEmit` across all packages |

## Theming

The site ships with two themes built as CSS variables in
`packages/ui/src/styles/theme.css`, toggled from the header (choice is
persisted in localStorage):

- **Light (default)** — modeled on the Devin site palette: warm paper
  background `#F7F6F5`, white cards with hairline borders, near-black
  inverted buttons with square corners, blue accent `#3291ff`.
- **Dark** — modeled on the Cursor site palette: warm near-black background
  `#14120B`, lifted card surfaces `#1B1913`, off-white text `#EDECEC`,
  inverted pill buttons, monochrome.

Components consume semantic tokens (`bg-background`, `text-foreground`,
`bg-primary`, `border-border`, …) defined via Tailwind v4 `@theme inline`,
so both palettes work without any `dark:` variant classes. Status colors
(success / warning / danger / info) are also tokenized for future clinical
UI (appointments, claims).

## Notes

- All marketing content (stats, testimonials, pricing) is placeholder copy.
- The dashboard/EHR app was removed; the clinical service layer
  (`@repo/api`) went with it and can be restored from session history or
  rebuilt when the product app work begins.
