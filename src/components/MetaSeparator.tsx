import clsx from "clsx";

interface Props {
  /**
   * `inline` — spaces around the dot for tight text runs (e.g. role · company).
   * `nav` — dot only; use with flex `gap-*` (e.g. contact row).
   */
  variant?: "inline" | "nav";
  className?: string;
}

export function MetaSeparator({ variant = "inline", className }: Props) {
  const nav = variant === "nav";
  return (
    <span
      className={clsx(
        nav
          ? "text-zinc-300 dark:text-zinc-600"
          : "text-zinc-600 dark:text-zinc-300",
        className,
      )}
      aria-hidden="true"
    >
      {nav ? "·" : " · "}
    </span>
  );
}
