import type { GitHubRepoSummary } from "@/types/api";
import Language from "./Language";
import StarCount from "./StarCount";

interface Props {
  repo: GitHubRepoSummary;
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
        className="flex h-full flex-col gap-2 rounded-xl border border-white/45 bg-white/35 p-6 shadow-sm backdrop-blur-xl backdrop-saturate-150 transition-[border-color,background-color,box-shadow] hover:border-white/65 hover:bg-white/45 hover:shadow-md dark:border-white/[0.1] dark:bg-black/35 dark:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)] dark:hover:border-white/[0.16] dark:hover:bg-black/50"
      >
        <span className="font-medium">{name}</span>
        {description && (
          <span className="text-zinc-600 dark:text-zinc-300 text-sm">
            {description}
          </span>
        )}
        <div className="text-zinc-600 dark:text-zinc-300 mt-auto flex items-center gap-3 pt-5 text-xs">
          <Language language={language} />
          <StarCount stars={stars} />
        </div>
      </a>
    </li>
  );
}
