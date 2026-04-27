"use client";

import { unstable_catchError as catchError, type ErrorInfo } from "next/error";

function SectionErrorFallback(
  _props: Record<string, unknown>,
  { unstable_retry: retry }: ErrorInfo,
) {
  return (
    <p className="text-zinc-600 dark:text-zinc-300 text-sm">
      Unavailable —{" "}
      <button
        type="button"
        onClick={() => retry()}
        className="underline hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-sm"
      >
        retry
      </button>
    </p>
  );
}

export default catchError(SectionErrorFallback);
