import Image from "next/image";
import Link from "next/link";
import { person } from "@/lib/cv-data";

const linkClass =
  "text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav
        aria-label="Site navigation"
        className="mx-auto flex h-14 w-full max-w-3xl items-center gap-6 px-4 sm:px-6"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/avatar.jpg"
            alt={person.name}
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className={linkClass}>Home</span>
        </Link>

        <div className="ml-auto flex items-center gap-6">
          <a
            href={person.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a
            href={person.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a href={`mailto:${person.contact.email}`} className={linkClass}>
            {person.contact.email}
          </a>
          <Link href="/resume" className={linkClass}>
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
