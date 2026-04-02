import type { GitHubLanguageStat } from "@/types/api";

interface Props {
  languages: GitHubLanguageStat[];
}

export default function TopLanguages({ languages }: Props) {
  return (
    <div className="mt-6">
      <h3 className="text-zinc-600 dark:text-zinc-300 text-sm font-medium">
        Top languages
      </h3>
      <ul className="mt-2 flex flex-wrap gap-2" aria-label="Top languages">
        {languages.map((lang) => (
          <li
            key={lang.name}
            className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm text-zinc-800 shadow-sm backdrop-blur-xl backdrop-saturate-150 dark:border-white/[0.12] dark:bg-black/25 dark:text-zinc-100"
          >
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
