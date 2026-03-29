interface Props {
  languages: { name: string; repos: number }[];
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
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800"
          >
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
