import clsx from "clsx";

interface Props {
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
