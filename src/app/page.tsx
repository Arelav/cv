import { Suspense } from "react";
import ReactMarkdown from "react-markdown";
import ErrorBoundary from "@/components/ErrorBoundary";
import GitHub from "@/components/GitHub";
import Lighthouse from "@/components/Lighthouse";
import { introMarkdown, person } from "@/lib/content";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-8 pt-9 pb-20 sm:pt-12 sm:pb-28">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {person.name}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300 mt-3 text-lg">
        {person.title}
      </p>

      <div className="mt-10 max-w-xl space-y-5 text-zinc-700 dark:text-zinc-300">
        <ReactMarkdown>{introMarkdown}</ReactMarkdown>
      </div>

      <div className="mt-20 space-y-16">
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="h-48 animate-pulse rounded-2xl bg-white/20" />
            }
          >
            <Lighthouse />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="h-64 animate-pulse rounded-2xl bg-white/20" />
            }
          >
            <GitHub />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
}
