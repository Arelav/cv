<!-- BEGIN:nextjs-agent-rules -->
# Next.js in this repo

Installed **Next.js** differs from older training data — APIs and file layout can change. **Do not guess.**

**How to look things up:** follow **`.agents/skills/nextjs/SKILL.md`** — Context7 MCP library **`/vercel/next.js`** first, then bundled `node_modules/next/dist/docs/01-app/` if needed.

**Also:** `.agents/rules.md`, `.agents/stack.md`, `.agents/components.md`, `.agents/workflow.md`.
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
