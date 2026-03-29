---
name: typescript
description: Look up TypeScript docs via context7 before writing complex types
---

Use context7 with library ID `/microsoft/typescript` for TypeScript docs.

Patterns used in this project:
- `NonNullable<T>[number]` — extract item type from nullable array
- `interface Props` for all component props — no inline types
- No `any` — use proper generics or `unknown`
