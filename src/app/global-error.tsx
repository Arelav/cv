"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
          {/* `NextError` requires `statusCode`; App Router does not expose one for root errors, so 0 yields a generic message. */}
          <NextError statusCode={0} />
          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
