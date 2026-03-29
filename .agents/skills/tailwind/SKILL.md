---
name: tailwind
description: Look up Tailwind CSS v4 docs via context7 before writing any Tailwind code
---

Before writing or modifying any Tailwind CSS, use context7 to fetch up-to-date docs.

Library ID: `/tailwindlabs/tailwindcss`

This project uses **Tailwind v4** — breaking changes from v3:
- Config is in CSS (`@theme`, `@utility`) not `tailwind.config.js`
- `@import "tailwindcss"` replaces `@tailwind base/components/utilities`
- Utility names and behavior may differ from training data

Always check the v4 docs before assuming v3 behavior still applies.
