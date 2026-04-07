"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  menuOpen: boolean;
  panelId: string;
  onToggle: () => void;
}

export default function MobileMenuButton({
  menuOpen,
  panelId,
  onToggle,
}: Props) {
  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-lg text-zinc-800 outline-offset-2 transition-[background-color,color] hover:bg-white/80 focus-visible:outline focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-200 dark:hover:bg-white/10 dark:focus-visible:ring-zinc-500"
        aria-expanded={menuOpen}
        aria-controls={panelId}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={onToggle}
      >
        <FontAwesomeIcon
          icon={menuOpen ? faXmark : faBars}
          className="size-5"
          aria-hidden
        />
      </button>
    </div>
  );
}
