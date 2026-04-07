/** Extract `-` / `*` list lines from markdown body (leading bullets only). */
export function parseBulletListMarkdown(markdown: string): string[] {
  const bullets: string[] = [];
  for (const line of markdown.trim().split(/\r?\n/)) {
    const t = line.trim();
    if (t.startsWith("- ")) {
      bullets.push(t.slice(2).trim());
    } else if (t.startsWith("* ")) {
      bullets.push(t.slice(2).trim());
    }
  }
  return bullets;
}
