# 0003 — Component Library

Date: 2026-06-25

## Status

Accepted

## Context

The project needed a UI component library that supported full customization, worked well with Tailwind CSS v4, and didn't lock us into a third-party design system we couldn't override.

## Decision

Use shadcn/ui with the Nova style preset, Zinc base color, and Lucide React as the icon library. Components are copied into `src/components/ui/` and owned by the project — they are not imported from a package. This gives full control over markup, styling, and behavior. CSS variables are used for theming via `src/styles/globals.css`.

Tailwind v4 is configured entirely via CSS imports in `src/styles/globals.css` — there is no `tailwind.config.ts`. Theme extensions and custom tokens are defined using `@theme` blocks directly in CSS.

## Consequences

- Component updates from shadcn require manual re-running of `npx shadcn add` and reviewing diffs
- The `src/components/ui/` directory should only contain shadcn primitives — custom components live in `src/components/shared/` or `src/components/layout/`
- The Zinc base color will be overridden with a custom `--primary` HSL value in Phase 3 to match the HopDuck brand color
