import Link from "next/link";
import { person } from "@/lib/cv-data";

const navLinkClass =
  "text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100";

export default function DesktopNav() {
  return (
    <nav
      aria-label="Site navigation"
      className="hidden md:flex md:items-center md:gap-6"
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
