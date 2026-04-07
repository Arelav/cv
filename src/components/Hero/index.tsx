import { MetaSeparator } from "@/components/MetaSeparator";
import type { Person } from "@/lib/content";

interface Props {
  person: Person;
}

export default function Hero({ person }: Props) {
  return (
    <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {person.name}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 mt-1 text-lg">
            {person.title}
          </p>
        </div>
        {person.openToWork && (
          <span className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20 dark:bg-emerald-950 dark:text-emerald-400 dark:ring-emerald-400/20">
            Open to work
          </span>
        )}
      </div>

      <p className="text-zinc-700 dark:text-zinc-300 mt-4 max-w-2xl">
        {person.bio}
      </p>

      <nav
        aria-label="Contact links"
        className="mt-5 flex flex-wrap gap-4 text-sm"
      >
        <a
          href={`mailto:${person.contact.email}`}
          className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          {person.contact.email}
        </a>
        <MetaSeparator />
        <span className="text-zinc-600 dark:text-zinc-300">
          {person.location}
        </span>
        <MetaSeparator />
        <a
          href={person.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          LinkedIn
        </a>
        <MetaSeparator />
        <a
          href={person.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
