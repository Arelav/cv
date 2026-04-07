import Link from "next/link";
import type { Person } from "@/lib/content";

const navLinkClass =
  "inline-flex items-center rounded-lg px-3 py-2 text-sm text-zinc-700 transition-[background-color,color] hover:bg-white/80 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white";

export default function DesktopNav({ person }: { person: Person }) {
  return (
    <nav
      aria-label="Site navigation"
      className="hidden md:flex md:items-center md:gap-2"
    >
      <Link href="/resume" className={navLinkClass}>
        Resume
      </Link>
      <a
        href={person.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className={navLinkClass}
      >
        GitHub
      </a>
      <a
        href={person.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={navLinkClass}
      >
        LinkedIn
      </a>
      <a
        href={`mailto:${person.contact.email}`}
        className={navLinkClass}
        title={person.contact.email}
      >
        Email
      </a>
    </nav>
  );
}
