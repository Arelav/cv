---
name: biome
description: Look up Biome docs via context7 before writing lint rules or config
---

Before modifying Biome config or investigating lint errors, use context7 to fetch up-to-date docs.

Library ID: `/biomejs/biome`

This project uses Biome for **both linting and formatting** — no ESLint, no Prettier.

- Config: `biome.json`
- Run: `npm run lint`
- Biome replaces both tools; do not suggest adding ESLint or Prettier
