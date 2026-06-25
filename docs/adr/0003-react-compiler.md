# 0005 — React Compiler

Date: 2026-06-23

## Status

Accepted

## Context

Next.js 16 supports the experimental React Compiler via `babel-plugin-react-compiler`. The compiler automatically applies memoization optimizations that previously required manual `useMemo`, `useCallback`, and `React.memo` calls.

## Decision

Opt in to the React Compiler at project initialization. Next.js surfaces this as a prompt during `create-next-app` and it is enabled via `babel-plugin-react-compiler` in `devDependencies`.

## Consequences

- The compiler is still experimental — breaking changes are possible in future React/Next.js releases
- Manual memoization (`useMemo`, `useCallback`) should be avoided unless the compiler cannot infer the optimization
- If the compiler causes issues with a specific component, it can be opted out per-file with `"use no memo"`
