<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# CV Frontend

Next.js App Router, TypeScript, Tailwind, Biome.

## Stack
- Next.js App Router — no `pages/` directory
- Biome for linting and formatting — do not add ESLint or Prettier
- Tailwind for all styling — no CSS modules, no inline styles
- TanStack Query for client-side data fetching

## Version Control
- Use `jj` — do not use `git` commands
- All automated `jj` commands must include `--no-pager`

## Rules
- Prefer Server Components; use `"use client"` only when necessary
- No `useEffect` for data fetching
- All API calls go to the Go backend (`cv-api`)
- Never ignore explicit instructions from the user

## Backend
Go REST API at `http://localhost:8080` in dev.
