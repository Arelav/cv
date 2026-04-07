---
name: nextjs
description: Next.js App Router — use Context7 MCP for official docs, then bundled docs
---

## 1. Context7 MCP (primary)

Use **Context7** for Next.js API syntax, App Router behavior, `fetch`, caching, and migrations — not training-data guesses.

1. `resolve-library-id` with library name **Next.js** (or use ID **`/vercel/next.js`** directly).
2. `query-docs` with that library ID and your **full question** (e.g. “Server Component fetch error handling pattern”, `fetch` `cache` option).

Vercel publishes Next.js docs to Context7 under **`/vercel/next.js`** — treat that as the live reference.

## 2. Bundled docs (offline / version match)

If MCP is unavailable or you need text that matches **this repo’s installed `next`**:

- `node_modules/next/dist/docs/01-app/` — App Router
- Start with `01-getting-started/06-fetching-data.md` and `10-error-handling.md`

Canonical URLs (same content): [Fetching data](https://nextjs.org/docs/app/getting-started/fetching-data), [Error handling](https://nextjs.org/docs/app/getting-started/error-handling), [`fetch`](https://nextjs.org/docs/app/api-reference/functions/fetch).

## 3. Server Components + `fetch` (this app)

Match [error handling → Server Components](https://nextjs.org/docs/app/getting-started/error-handling):

`const res = await fetch(url)` → `const data = await res.json()` → `if (!res.ok) { return … }` — no `try/catch` unless the user explicitly asks. Backend GETs use `API_URL`; on failure render `*FetchError` (generic copy — no status/body passthrough).

## 4. Project shape

- App Router only (`app/`), no `pages/` for app code
- Prefer Server Components; `"use client"` only when needed
- No `useEffect` for data fetching
- See also `.agents/stack.md` (React Compiler)
