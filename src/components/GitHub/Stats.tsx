interface Props {
  repos: number;
  stars: number;
  followers: number;
}

export default function Stats({ repos, stars, followers }: Props) {
  return (
    <dl className="mt-5 grid grid-cols-3 gap-4">
      <div>
        <dt className="text-zinc-600 dark:text-zinc-300 text-sm">Repos</dt>
        <dd className="mt-1 text-2xl font-semibold tabular-nums">{repos}</dd>
      </div>
      <div>
        <dt className="text-zinc-600 dark:text-zinc-300 text-sm">Stars</dt>
        <dd className="mt-1 text-2xl font-semibold tabular-nums">{stars}</dd>
      </div>
      <div>
        <dt className="text-zinc-600 dark:text-zinc-300 text-sm">Followers</dt>
        <dd className="mt-1 text-2xl font-semibold tabular-nums">
          {followers}
        </dd>
      </div>
    </dl>
  );
}
