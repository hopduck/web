# 0002 — Linter and Formatter

Date: 2026-06-23

## Status

Accepted

## Context

ESLint and Prettier were the default toolchain for Next.js projects but caused significant performance issues in VS Code — slow formatting on save and sluggish linting feedback made the development experience noticeably worse, especially as the codebase grew.

## Decision

Replace ESLint and Prettier entirely with Oxlint and Oxfmt, configured via Ultracite v7. Ultracite provides a zero-configuration preset with opinionated defaults for React, Next.js, TypeScript, and Vitest. The `--type-aware` flag enables stricter type-level lint rules. Husky and lint-staged run `ultracite fix` on staged files at commit time.

## Consequences

- Linting and formatting are 50-100x faster than ESLint/Prettier
- Some ESLint plugins have no Oxlint equivalent yet — this is an acceptable tradeoff given the bug-focused rule coverage Oxlint provides
- All contributors must install the OXC VS Code extension for editor integration
- Stylelint is not included — CSS linting relies on Oxlint's CSS rules and Tailwind's own tooling
