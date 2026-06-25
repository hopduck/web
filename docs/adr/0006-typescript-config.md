# 0006 - TypeScript Strict Configuration

Date: 2026-06-24

## Status

Accepted

## Context

`create-next-app` scaffolds a `tsconfig.json` with `strict: true` enabled by default, which covers a baseline set of TypeScript compiler checks. However, several additional strictness options exist outside of the `strict` flag that meaningfully improve type safety and catch classes of bugs at compile time rather than at runtime.

Three options were considered for inclusion beyond the default:

**`noFallthroughCasesInSwitch`** — errors when a `switch` case falls through to the next without a `break`, `return`, or `throw`. Prevents a common source of unintended logic bugs.

**`allowUnreachableCode: false`** — errors on code that can never be reached. Catches dead code left behind after refactors.

**`noUncheckedIndexedAccess`** — widens the return type of array and object index access from `T` to `T | undefined`, reflecting the reality that an index may not exist. This is the most impactful of the three but also the most likely to produce noise when retrofitted onto an existing codebase.

## Decision

All three options were enabled in `tsconfig.json` at project initialization:

```json
"noFallthroughCasesInSwitch": true,
"allowUnreachableCode": false,
"noUncheckedIndexedAccess": true
```

Enabling these on a greenfield project costs nothing — there is no existing code to retrofit and no accumulated type errors to resolve. The earlier these constraints are in place, the more naturally the codebase grows to accommodate them.

## Consequences

- Array and object index access throughout the codebase must account for `undefined`, producing safer but slightly more verbose access patterns.
- Switch statements must be explicit about fallthrough intent, reducing accidental logic errors.
- Dead code is surfaced immediately after refactors rather than silently accumulating.
- Contributors unfamiliar with `noUncheckedIndexedAccess` may initially find the `T | undefined` widening surprising — this is documented in the README.
- Retrofitting these options onto a mature codebase would be costly; the decision to enable them early avoids that future burden.
