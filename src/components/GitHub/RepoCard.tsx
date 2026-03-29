import type { GitHubStats } from "@/lib/api";
import Language from "./Language";
import StarCount from "./StarCount";

type Repo = NonNullable<GitHubStats["top_repos"]>[number];

interface Props {
  repo: Repo;
}

export default function RepoCard({
  repo: { name, description, stars, url, language },
}: Props) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col gap-1 rounded-lg border border-zinc-200 p-4 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
      >
        <span className="font-medium">{name}</span>
        {description && (
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </span>
        )}
        <div className="mt-auto flex items-center gap-3 pt-3 text-xs text-zinc-400 dark:text-zinc-500">
          <Language language={language} />
          <StarCount stars={stars} />
        </div>
      </a>
    </li>
  );
}
