import { getGitHubStats } from "@/lib/api";
import RepoCard from "./RepoCard";
import Stats from "./Stats";
import TopLanguages from "./TopLanguages";

export default async function GitHub() {
  const stats = await getGitHubStats();
  const topRepos = stats.top_repos ?? [];
  const topLanguages = stats.top_languages ?? [];

  return (
    <section aria-labelledby="github-heading">
      <h2 id="github-heading" className="text-xl font-semibold tracking-tight">
        GitHub
      </h2>

      <Stats
        repos={stats.public_repos}
        stars={stats.total_stars}
        followers={stats.followers}
      />

      {topRepos.length > 0 && (
        <ul
          className="mt-6 grid gap-3 sm:grid-cols-2"
          aria-label="Top repositories"
        >
          {topRepos.map((repo) => (
            <RepoCard
              key={repo.name}
              name={repo.name}
              description={repo.description}
              stars={repo.stars}
              url={repo.url}
              language={repo.language}
            />
          ))}
        </ul>
      )}

      {topLanguages.length > 0 && <TopLanguages languages={topLanguages} />}
    </section>
  );
}
