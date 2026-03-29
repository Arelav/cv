import Link from "next/link";
import { cn } from "@/lib/cn";
import { person } from "@/lib/cv-data";

const navLinkClass = cn("text-sm", "link-subtle");

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
