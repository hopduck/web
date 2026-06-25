# 0008 - Turbopack for Development

Date: 2026-06-24

## Status

Accepted

## Context

Next.js ships with two bundler options for the development server: **Webpack** (the long-standing default) and **Turbopack** (the Rust-based successor, stable for development as of Next.js 15). A decision was needed on which bundler to use for local development.

**Webpack** — battle-tested, widely understood, and compatible with the full ecosystem of loaders and plugins. Slower cold start and HMR times as the codebase grows.

**Turbopack** — significantly faster cold starts and hot module replacement due to incremental, demand-driven compilation. Stable for development in Next.js 15. Production builds via Turbopack are available but not yet the recommended default.

Additionally, `turbopackFileSystemCacheForDev` was considered — an experimental option that persists Turbopack's build cache to disk between dev server restarts, further reducing cold start times after the first run.

## Decision

Turbopack was enabled for the development server via the `turbopack` option in `next.config.ts`. `turbopackFileSystemCacheForDev` was also enabled to persist the cache across dev server restarts.

Production builds continue to use the Next.js default (Webpack) until Turbopack's production build support matures and becomes the recommended path.

## Consequences

- Local development benefits from significantly faster cold starts and HMR, improving the development experience as the codebase grows.
- The disk-persisted cache means subsequent dev server starts after the first are meaningfully faster.
- Turbopack's production build support will be revisited as it matures — if it becomes the recommended default in a future Next.js release, the production build will be migrated at that point.
- In the unlikely event a dependency is incompatible with Turbopack, falling back to Webpack is a one-line config change.
