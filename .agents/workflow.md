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
- Use Context7 MCP for library docs — do not guess from training data
- Use WebSearch MCP for troubleshooting issues not covered by Context7
