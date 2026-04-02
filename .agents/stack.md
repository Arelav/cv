# Frontend Stack

- Next.js App Router — no `pages/` directory
- **React Compiler** — enabled in `next.config.ts` (`reactCompiler: true`) with `babel-plugin-react-compiler`. The compiler memoizes and optimizes renders automatically. **Do not** add `useMemo`, `useCallback`, or `React.memo` “to help performance” unless you are following an official React Compiler escape hatch or the user asked for it — manual memoization is redundant, noisy, and can interact badly with compiler analysis. For very high‑frequency updates (e.g. scroll-linked transforms), prefer **refs + imperative DOM updates** in `requestAnimationFrame` over `setState` every frame.
- Biome for linting and formatting — do not add ESLint or Prettier
- Tailwind for styling — prefer utilities; inline `style` is fine for **dynamic** values (motion, generated gradients, etc.)
- TanStack Query for client-side data fetching

# Backend

Go REST API (`cv-api`) at `http://localhost:8080` in dev.
