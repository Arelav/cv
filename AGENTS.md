<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Where to find Next.js docs (use these, not training data)

**Local (matches installed `next` version):**

- `node_modules/next/dist/docs/` — full doc tree; App Router lives under `01-app/`.
- Common files:
  - `node_modules/next/dist/docs/01-app/01-getting-started/06-fetching-data.md` — Server Components `fetch` / streaming
  - `node_modules/next/dist/docs/01-app/01-getting-started/10-error-handling.md` — Server Component `fetch`: `res` → `data` → `!res.ok`
  - `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/fetch.md` — extended `fetch` options (cache, `next.revalidate`, tags)

**Canonical URLs (same content as local; good for search or when `node_modules` is missing):**

- [Fetching data](https://nextjs.org/docs/app/getting-started/fetching-data)
- [Error handling](https://nextjs.org/docs/app/getting-started/error-handling)
- [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch)

**Also:** follow `.agents/skills/nextjs/SKILL.md` (Context7) when you need API details or are unsure of syntax.
<!-- END:nextjs-agent-rules -->

> [!CAUTION]
> Always use the right tool for the job — MCPs, skills, subagents, whatever fits best.

Do **not** change Biome/ESLint/tsconfig/next config, **disable linter rules**, or add **`biome-ignore` / `eslint-disable` / `@ts-expect-error`** (or any in-file suppression) without explicit user permission (see `.agents/rules.md`). Do not rip out or replace the original app scaffold unless the user asked for that.

When you add **project-wide** instructions, put them in `AGENTS.md` and/or `.agents/` (not only in a single chat) so every agent loads the same context via the includes below.

**React Compiler** is enabled (`reactCompiler: true` in `next.config.ts`). Do not pile on `useMemo`, `useCallback`, or `React.memo` “for performance” — see `.agents/stack.md` and `.agents/rules.md`.

@.agents/stack.md
@.agents/rules.md
@.agents/components.md
@.agents/workflow.md
