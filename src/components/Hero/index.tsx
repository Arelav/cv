import { person } from "@/lib/cv-data";

export default function Hero() {
  return (
    <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {person.name}
          </h1>
          <p className="mt-1 text-lg text-zinc-500 dark:text-zinc-400">
            {person.title}
          </p>
        </div>
        {person.openToWork && (
          <span className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20 dark:bg-emerald-950 dark:text-emerald-400 dark:ring-emerald-400/20">
            Open to work
          </span>
        )}
      </div>

      <p className="text-prose mt-4 max-w-2xl">{person.bio}</p>

      <nav
        aria-label="Contact links"
        className="mt-5 flex flex-wrap gap-4 text-sm"
      >
        <a
          href={`mailto:${person.contact.email}`}
          className="link-subtle"
        >
          {person.contact.email}
        </a>
        <span className="text-zinc-300 dark:text-zinc-600" aria-hidden="true">
          ·
        </span>
        <span className="text-zinc-500 dark:text-zinc-400">
          {person.location}
        </span>
        <span className="text-zinc-300 dark:text-zinc-600" aria-hidden="true">
          ·
        </span>
        <a
          href={person.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-subtle"
        >
          LinkedIn
        </a>
        <span className="text-zinc-300 dark:text-zinc-600" aria-hidden="true">
          ·
        </span>
        <a
          href={person.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-subtle"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
