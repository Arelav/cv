import type { GitHubStats } from "@/types/api";
import GitHubHeading from "./GitHubHeading";
import RepoCard from "./RepoCard";
import Stats from "./Stats";
import TopLanguages from "./TopLanguages";

type Props = { stats: GitHubStats };

export default function GitHubLoaded({ stats }: Props) {
  const topRepos = stats.topRepos ?? [];
  const topLanguages = stats.topLanguages ?? [];

  return (
    <section aria-labelledby="github-heading">
      <GitHubHeading />

      <Stats
        repos={stats.publicRepos}
        stars={stats.totalStars}
        followers={stats.followers}
      />

      {topRepos.length > 0 && (
        <ul
          className="mt-6 grid gap-3 sm:grid-cols-2"
          aria-label="Pinned repositories"
        >
          {topRepos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </ul>
      )}

      {topLanguages.length > 0 && <TopLanguages languages={topLanguages} />}
    </section>
  );
}
