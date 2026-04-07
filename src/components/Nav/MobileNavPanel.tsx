"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import type { Person } from "@/lib/content";

const mobileSheetRowClass =
  "flex min-h-12 items-center rounded-lg px-4 text-base font-medium text-zinc-900 transition-[background-color,color,box-shadow] active:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-100 dark:active:bg-white/15 dark:focus-visible:ring-zinc-500";

const panel = cva(
  "overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out will-change-[max-height,opacity,transform]",
  {
    variants: {
      open: {
        true: "pointer-events-auto max-h-[520px] opacity-100 translate-y-0",
        false: "pointer-events-none max-h-0 opacity-0 -translate-y-2",
      },
    },
  },
);

interface Props {
  person: Person;
  open: boolean;
  panelId: string;
  onClose: () => void;
}

export default function MobileNavPanel({
  person,
  open,
  panelId,
  onClose,
}: Props) {
  return (
    <div id={panelId} className="md:hidden">
      <div className="w-full">
        <div inert={!open} className={panel({ open })}>
          <div className="p-2">
            <ul className="grid gap-1">
              <li>
                <Link
                  href="/"
                  className={mobileSheetRowClass}
                  onClick={onClose}
                >
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
        </div>
      </div>
    </div>
  );
}
