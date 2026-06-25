# 0005 - Next.js

Date: 2026-06-24

## Status

Accepted

## Context

HopDuck requires a React-based web framework capable of handling both the marketing/landing experience and the application UI. The redirect path for shortened URLs also demands server-side logic, making a purely client-side setup insufficient. Three options were evaluated:

**Next.js** — a full-stack React framework with file-based routing, server components, API routes, and first-class Vercel deployment support.

**TanStack Start** — an emerging full-stack framework built around TanStack Router, offering fine-grained control over server functions and a type-safe routing model. Still in early stages with a smaller ecosystem.

**Vite + Express monorepo** — a custom setup pairing a Vite-powered React frontend with an Express API. Maximum flexibility but requires significant manual configuration for SSR, routing, and deployment.

## Decision

Next.js was chosen as the web framework for HopDuck.

The decision was primarily driven by:

- **Deployment simplicity** — HopDuck is hosted on Vercel, where Next.js is a first-class citizen. Zero additional configuration is needed for deployments, preview URLs, or environment variables.
- **Server components** — the App Router's React Server Components model is well-suited to HopDuck's read-heavy workload, allowing data fetching at the component level without client-side waterfalls.
- **API routes** — the redirect logic, link creation, and analytics endpoints can live within the same codebase without standing up a separate server.
- **Ecosystem maturity** — Next.js has a large, stable ecosystem with well-maintained third-party integrations for auth, database clients, and UI libraries.
- **Reduced configuration overhead** — compared to the Vite + Express monorepo approach, Next.js eliminates the need to manually wire up SSR, build tooling, and deployment pipelines.

TanStack Start was promising but too early in its maturity curve for a project intended to be production-ready. The Vite + Express approach was dismissed as unnecessary complexity for a project deliberately scoped to remain manageable.

## Consequences

- The project is coupled to the Next.js release cycle and its conventions around the App Router.
- Vercel remains the natural deployment target; migrating to another host would require additional configuration.
- TanStack Start remains worth revisiting for future projects as its ecosystem matures.
- The monorepo approach is deferred — if HopDuck's backend needs grow significantly, extracting an API layer remains an option.
