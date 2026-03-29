---
name: nextjs
description: Look up Next.js App Router docs via context7 before writing any Next.js code
---

Before writing or modifying any Next.js code, use context7 to fetch up-to-date docs.

Library ID: `/vercel/next.js`

This project uses **Next.js App Router**:
- No `pages/` directory — everything is in `app/`
- Prefer Server Components; `"use client"` only when necessary
- No `useEffect` for data fetching
- `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx` conventions

APIs and conventions may differ from training data — always check docs first.
