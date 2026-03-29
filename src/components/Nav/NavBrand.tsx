import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { person } from "@/lib/cv-data";

export default function NavBrand() {
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
      />
      <span
        className="inline-flex size-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        aria-hidden
      >
        <FontAwesomeIcon icon={faHouse} className="size-5" />
      </span>
    </Link>
  );
}
