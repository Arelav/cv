"use client";

import { unstable_catchError as catchError, type ErrorInfo } from "next/error";

function SectionErrorFallback(
  _props: Record<string, unknown>,
  { unstable_retry: retry }: ErrorInfo,
) {
  return (
    <p className="text-sm text-zinc-500 dark:text-zinc-400">
      Unavailable —{" "}
      <button
        type="button"
        onClick={() => retry()}
        className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        retry
      </button>
    </p>
  );
}

export default catchError(SectionErrorFallback);
