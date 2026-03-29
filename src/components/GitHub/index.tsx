import ApiUnavailable from "@/components/ApiUnavailable";
import { getGitHubStats } from "@/lib/api";
import RepoCard from "./RepoCard";
import Stats from "./Stats";
import TopLanguages from "./TopLanguages";

export default async function GitHub() {
  const result = await getGitHubStats();

  if (!result.ok) {
    return (
      <section aria-labelledby="github-heading">
        <h2
          id="github-heading"
          className="text-xl font-semibold tracking-tight"
        >
          GitHub
        </h2>
        <ApiUnavailable>
          <p>
            Could not load GitHub stats{" "}
            {result.status > 0 ? `(HTTP ${result.status})` : ""}.
          </p>
          {process.env.NODE_ENV === "development" ? (
            <p className="mt-2 font-mono text-xs text-zinc-500 dark:text-zinc-500">
              {result.message}
            </p>
          ) : null}
        </ApiUnavailable>
      </section>
    );
  }

  const stats = result.data;
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
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </ul>
      )}

      {topLanguages.length > 0 && <TopLanguages languages={topLanguages} />}
    </section>
  );
}
