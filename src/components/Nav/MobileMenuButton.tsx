import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  menuOpen: boolean;
  panelId: string;
  onToggle: () => void;
};

export default function MobileMenuButton({
  menuOpen,
  panelId,
  onToggle,
}: Props) {
  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-lg text-zinc-700 outline-offset-2 hover:bg-zinc-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-500"
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
