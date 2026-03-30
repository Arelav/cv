"use client";

import { useEffect } from "react";

export default function AppError({
  error,
  unstable_retry: retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-2xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300 mt-3">
        Please try again later.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-6 underline hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        Retry
      </button>
    </main>
  );
}
