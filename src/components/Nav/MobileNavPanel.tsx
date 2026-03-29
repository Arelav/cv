import Link from "next/link";
import { person } from "@/lib/cv-data";

const mobileSheetRowClass =
  "flex min-h-12 items-center px-4 text-base font-medium text-zinc-900 active:bg-zinc-100 dark:text-zinc-100 dark:active:bg-zinc-800";

type Props = {
  open: boolean;
  panelId: string;
  onClose: () => void;
};

export default function MobileNavPanel({ open, panelId, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      id={panelId}
      className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
    >
      <ul className="mx-auto w-full max-w-3xl px-4 sm:px-6 divide-y divide-zinc-100 pb-3 dark:divide-zinc-800">
        <li>
          <Link href="/" className={mobileSheetRowClass} onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className={mobileSheetRowClass}
            onClick={onClose}
          >
            Resume
          </Link>
        </li>
        <li>
          <a
            href={person.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={mobileSheetRowClass}
            onClick={onClose}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={person.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={mobileSheetRowClass}
            onClick={onClose}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={`mailto:${person.contact.email}`}
            className={mobileSheetRowClass}
            onClick={onClose}
          >
            Email
          </a>
        </li>
      </ul>
    </div>
  );
}
