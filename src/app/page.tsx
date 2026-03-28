import { getGitHubStats } from "@/lib/api";

export default async function Home() {
  const stats = await getGitHubStats();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header>
        <h1 className="text-2xl font-semibold sm:text-3xl">{stats.name}</h1>
      </header>

      <section aria-labelledby="github-heading" className="mt-10">
        <h2 id="github-heading" className="text-lg font-medium">
          GitHub
        </h2>
        <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
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

        <h3 className="mt-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Top languages
        </h3>
        <ul className="mt-2 flex flex-wrap gap-2" aria-label="Top languages">
          {stats.top_languages.map((lang) => (
            <li
              key={lang.name}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800"
            >
              {lang.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
