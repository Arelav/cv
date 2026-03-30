---
name: nextjs
description: Look up Next.js App Router docs via context7 before writing any Next.js code
---

Before writing or modifying any Next.js code:

1. Read the **bundled App Router docs** in this repo: `node_modules/next/dist/docs/01-app/` (paths and APIs differ from older Next — do not guess). Start with `01-getting-started/06-fetching-data.md` and `10-error-handling.md`. Quick links on the web: [fetching data](https://nextjs.org/docs/app/getting-started/fetching-data), [error handling](https://nextjs.org/docs/app/getting-started/error-handling). For Server Components, follow the doc’s `fetch` → `json` → `if (!response.ok)` pattern — do not add `try/catch` unless the user explicitly asks.
2. Use **context7** when you need fresher or fuller reference: Library ID `/vercel/next.js`.

This project uses **Next.js App Router**:
- No `pages/` directory — everything is in `app/`
- Prefer Server Components; `"use client"` only when necessary
- No `useEffect` for data fetching
- `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx` conventions

APIs and conventions may differ from training data — always check docs first.
