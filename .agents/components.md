# Component Conventions

- Co-locate components: if a component is only used by one parent, put it in the parent's folder (e.g. `GitHub/StarCount.tsx`)
- Conditional rendering: use `condition && <Element />` inline, not early `return null`
- Extract child components for complex rendering logic rather than inline hacks
- No prop renaming: if the data field is `stars`, the prop must also be `stars`
- Backend fetch errors: shared UI in `FetchError.tsx` casts `body` as `HttpError` from `@/types/api`. Response status is the `status` prop. `LighthouseFetchError` / `GitHubFetchError` only set `headingId`, `resource`, `ending`, and the intro/heading child.
- Nested objects: `{ repo: { name, stars } }` — no prop spreading for the outer props object
- `interface Props` for all component props — no inline types
