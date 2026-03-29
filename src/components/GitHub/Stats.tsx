interface Props {
  repos: number;
  stars: number;
  followers: number;
}

export default function Stats({ repos, stars, followers }: Props) {
  return (
    <dl className="mt-5 grid grid-cols-3 gap-4">
      <div>
        <dt className="text-sm text-zinc-500 dark:text-zinc-400">Repos</dt>
        <dd className="mt-1 text-2xl font-semibold tabular-nums">{repos}</dd>
      </div>
      <div>
        <dt className="text-sm text-zinc-500 dark:text-zinc-400">Stars</dt>
        <dd className="mt-1 text-2xl font-semibold tabular-nums">{stars}</dd>
      </div>
      <div>
        <dt className="text-sm text-zinc-500 dark:text-zinc-400">Followers</dt>
        <dd className="mt-1 text-2xl font-semibold tabular-nums">
          {followers}
        </dd>
      </div>
    </dl>
  );
}
