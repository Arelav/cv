# Workflow

## Version Control
- Use `jj` — never `git`
- All automated `jj` commands must include `--no-pager`

## Commits
- Never commit without asking first
- Ask at natural checkpoints, not after every change

## Scripts
- Format: `npm run format`
- Lint: `npm run lint`
- Dev: `npm run dev`

## API Testing
- Use REST Client (`.http` files) — never curl
- Environment switching via `.vscode/settings.json`

## Docs & Research
- Use the right tool for the job — MCPs, skills, subagents, whatever fits best
- context7 MCP for library docs
- WebSearch MCP for troubleshooting
- Skills: `/tailwind`, `/nextjs`, `/biome`, `/typescript`, `/tanstack-query`, `/fontawesome`, `/jj`, `/agent-setup`
