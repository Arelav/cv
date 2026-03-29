"use client";

import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function ApiUnavailable({ children }: Props) {
  const router = useRouter();
  return (
    <div className="mt-4 rounded-xl border border-zinc-200/90 bg-zinc-50/90 p-4 shadow-sm dark:border-zinc-700/80 dark:bg-zinc-900/50">
      <div className="text-sm text-zinc-600 dark:text-zinc-400">{children}</div>
      <button
        type="button"
        onClick={() => router.refresh()}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-sm font-medium text-zinc-900 shadow-sm transition-[background-color,box-shadow,transform] hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-900"
      >
        <FontAwesomeIcon
          icon={faRotateRight}
          className="size-3.5 opacity-80"
          aria-hidden
        />
        Try again
      </button>
    </div>
  );
}
