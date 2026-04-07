import { cx } from "class-variance-authority";

interface Props {
  className?: string;
}

export function MetaSeparator({ className }: Props) {
  return (
    <span
      className={cx("text-zinc-600 dark:text-zinc-300", className)}
      aria-hidden="true"
    >
      {" · "}
    </span>
  );
}
