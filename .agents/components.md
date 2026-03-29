# Component Conventions

- Co-locate components: if a component is only used by one parent, put it in the parent's folder (e.g. `GitHub/StarCount.tsx`)
- Conditional rendering: use `condition && <Element />` inline, not early `return null`
- Extract child components for complex rendering logic rather than inline hacks
- No prop renaming: if the data field is `stars`, the prop must also be `stars`
- Destructure in the props signature: `{ repo: { name, stars } }` — no spreading
- `interface Props` for all component props — no inline types
