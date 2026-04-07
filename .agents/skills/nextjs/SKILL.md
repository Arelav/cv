---
name: nextjs
description: Look up Next.js App Router docs via context7 before writing any Next.js code
---

Before writing or modifying any Next.js code:

1. Read the **bundled App Router docs** in this repo: `node_modules/next/dist/docs/01-app/` (paths and APIs differ from older Next — do not guess). Start with `01-getting-started/06-fetching-data.md` and `10-error-handling.md`. Quick links: [fetching data](https://nextjs.org/docs/app/getting-started/fetching-data), [error handling](https://nextjs.org/docs/app/getting-started/error-handling), [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch).
2. **Server Components that `fetch`:** Use the same names and order as [error handling → Server Components](https://nextjs.org/docs/app/getting-started/error-handling): `const res = await fetch(url)`, `const data = await res.json()`, `if (!res.ok) { return … }`, then success UI. Do not add `try/catch` unless the user explicitly asks.
3. Use **context7** when you need fresher or fuller reference: Library ID `/vercel/next.js`.

This project uses **Next.js App Router**:
- No `pages/` directory — everything is in `app/`
- Prefer Server Components; `"use client"` only when necessary
- No `useEffect` for data fetching
- `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx` conventions

APIs and conventions may differ from training data — always check docs first.
