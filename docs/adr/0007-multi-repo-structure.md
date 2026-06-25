# 0007 - Multi-Repo Structure

Date: 2026-06-24

## Status

Accepted

## Context

HopDuck is hosted under the `hopduck` GitHub organization. A decision was needed on how to structure the codebase across the organization — either as a single monorepo containing all code, or as multiple focused repositories each owning a distinct part of the project.

**Monorepo** — all code (web app, docs, workers, infra) lives in a single repository. Simplifies dependency sharing and atomic cross-cutting changes but reduces the practical value of having a GitHub organization, as the org would essentially just be a namespace for one repository. A monorepo of this nature would be better suited to a personal GitHub account.

**Multi-repo** — each distinct part of the project lives in its own repository under the `hopduck` org. Repositories have clear, single responsibilities and the organization structure meaningfully reflects the architecture of the product.

## Decision

A multi-repo structure under the `hopduck` GitHub organization was adopted, with repositories scoped by responsibility:

- `hopduck/.github` — org profile, issue templates, PR templates, and org-wide contribution guidelines
- `hopduck/web` — the Next.js web application
- `hopduck/docs` — documentation site _(planned)_
- Additional repositories introduced as the project grows (e.g. `workers`, `infra`)

## Consequences

- Each repository has a clear, single responsibility — contributors and visitors immediately understand what a repository contains.
- The `hopduck` organization structure reflects the product architecture rather than being a vanity namespace over a single repo.
- Org-level defaults (issue templates, PR templates, code of conduct) defined in `hopduck/.github` apply automatically across all repositories without duplication.
- Cross-cutting changes that span multiple repositories require coordinated PRs rather than a single atomic commit — an acceptable tradeoff at HopDuck's current scale.
- Shared utilities or types that need to span repositories would eventually warrant a dedicated package — this is deferred until the need arises organically.
