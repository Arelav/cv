# Rules

- Prefer Server Components; use `"use client"` only when necessary
- No `useEffect` for data fetching
- All API calls go to the Go backend (`cv-api`)
- Never ignore explicit instructions from the user
- Mobile-first: write base styles for mobile, use `sm:` / `md:` / `lg:` to scale up
- Use semantic HTML: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<h1>`–`<h6>` in correct hierarchy
- Accessibility: meaningful `alt` text, `aria-label` where needed, keyboard-navigable interactive elements, sufficient color contrast, no `<div>` for interactive elements
