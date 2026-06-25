# 0001 — Package Manager

Date: 2026-06-23

## Status

Accepted

## Context

The project needed a package manager. pnpm and yarn offer performance and workspace benefits but require additional installation steps that aren't guaranteed on all contributor machines. The original developer's environment uses npm exclusively.

## Decision

Use npm as the sole package manager. The `engines` field in `package.json` enforces npm >=10 and Node >=20. An `.npmrc` with `engine-strict=true` turns version mismatches into hard errors. A `packageManager` field may be added in the future to further enforce this.

## Consequences

- Contributors must use npm — pnpm and yarn lockfiles will be rejected via `.gitattributes` and PR review
- No workspaces support if the project ever becomes a monorepo (would require revisiting this decision)
- Slightly slower installs compared to pnpm on large dependency trees
