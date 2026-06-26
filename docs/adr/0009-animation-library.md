# 0008 — Animation Library

Date: 2026-06-25

## Status

Accepted

## Context

Interactive UI elements like the mobile navigation hamburger button require smooth state-based animations (icon morphing, transitions). Marketing pages
planned for Phase 4 will also benefit from scroll-triggered reveals, hover effects, and page transitions.

## Decision

Use Motion (`motion`, formerly Framer Motion) as the animation library. Components requiring animation use `motion.div`, `motion.button`, etc. with
`variants` for state-based animations (e.g. `HamburgerMenuButton`'s open/closed states).

## Consequences

- Adds a moderate-sized dependency to the client bundle — animated components must be client components (`"use client"`)
- Keep animation logic colocated within the component that needs it; avoid global animation orchestration unless a clear pattern emerges
- Prefer CSS transitions/animations for simple cases (hover, color changes) where Motion's JS-driven animation isn't necessary — reserve Motion for
  state-based variants, gestures, and layout animations
