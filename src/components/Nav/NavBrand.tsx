import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import type { Person } from "@/lib/content";

interface Props {
  person: Person;
}

export default function NavBrand({ person }: Props) {
  return (
    <Link
      href="/"
      aria-label={`${person.name} — home`}
      className="flex min-w-0 shrink items-center gap-1 rounded-lg outline-offset-2 focus-visible:outline focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
    >
      <Image
        src="/avatar.jpg"
        alt=""
        width={36}
        height={36}
        className="size-9 shrink-0 rounded-full object-cover"
        priority
        loading="eager"
      />
      <span
        className="inline-flex size-10 items-center justify-center rounded-lg text-zinc-700 transition-[background-color,color] hover:bg-white/80 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
        aria-hidden
      >
        <FontAwesomeIcon icon={faHouse} className="size-5" />
      </span>
    </Link>
  );
}
