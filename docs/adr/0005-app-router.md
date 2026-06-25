# 0006 — Next.js App Router

Date: 2026-06-24

## Status

Accepted

## Context

Next.js offers two routing paradigms: the legacy Pages Router and the modern App Router introduced in Next.js 13. The App Router is now the recommended default and aligns with React's direction toward Server Components.

## Decision

Use the App Router exclusively. All routes live under `src/app/`. React Server Components are the default — client components are opted in with `"use client"` only where interactivity or browser APIs are required. Route groups are used to separate layout contexts (e.g. marketing layout vs. app layout) without affecting URL structure.

## Consequences

- No Pages Router files should be added to the project
- Data fetching happens via async Server Components and `fetch` with Next.js cache semantics — no `getServerSideProps` or `getStaticProps`
- Third-party libraries that don't support RSC yet require `"use client"` boundary wrappers
