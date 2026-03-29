import { getGitHubStats } from "@/lib/api";

export default async function GitHub() {
  const stats = await getGitHubStats();
  const topRepos = stats.top_repos ?? [];
  const topLanguages = stats.top_languages ?? [];

  return (
    <section aria-labelledby="github-heading">
      <h2 id="github-heading" className="text-xl font-semibold tracking-tight">
        GitHub
      </h2>

      <dl className="mt-5 grid grid-cols-3 gap-4">
        <div>
          <dt className="text-sm text-zinc-500 dark:text-zinc-400">Repos</dt>
          <dd className="mt-1 text-2xl font-semibold tabular-nums">
            {stats.public_repos}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-zinc-500 dark:text-zinc-400">Stars</dt>
          <dd className="mt-1 text-2xl font-semibold tabular-nums">
            {stats.total_stars}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-zinc-500 dark:text-zinc-400">
            Followers
          </dt>
          <dd className="mt-1 text-2xl font-semibold tabular-nums">
            {stats.followers}
          </dd>
        </div>
      </dl>

      {topRepos.length > 0 && (
        <ul
          className="mt-6 grid gap-3 sm:grid-cols-2"
          aria-label="Top repositories"
        >
          {topRepos.map((repo) => (
            <li key={repo.name}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-1 rounded-lg border border-zinc-200 p-4 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              >
                <span className="font-medium">{repo.name}</span>
                {repo.description && (
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {repo.description}
                  </span>
                )}
                <div className="mt-auto flex items-center gap-3 pt-3 text-xs text-zinc-400 dark:text-zinc-500">
                  {repo.language && <span>{repo.language}</span>}
                  {repo.stars > 0 && (
                    <>
                      <span aria-hidden="true">★ {repo.stars}</span>
                      <span className="sr-only">{repo.stars} stars</span>
                    </>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}

      {topLanguages.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Top languages
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Top languages">
            {topLanguages.map((lang) => (
              <li
                key={lang.name}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800"
              >
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
