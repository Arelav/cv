import ErrorBoundary from "@/components/ErrorBoundary";
import GitHub from "@/components/GitHub";
import Lighthouse from "@/components/Lighthouse";
import { person } from "@/lib/cv-data";

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
        <p>
          Senior frontend engineer with over a decade of building web products —
          mostly React and TypeScript, leading teams, reviewing code, and caring
          too much about the details that make a codebase enjoyable to work in.
        </p>
        <p>
          Lately I've been learning Go. Something I've been curious about for a
          long time — simple syntax, tiny binaries, type-safe with no manual
          memory management. The backend for this site is written in Go.
        </p>
        <p>
          At work I care about three things: good people to build with, problems
          worth solving, and a codebase you actually enjoy opening in the
          morning.
        </p>
        <p>
          Outside of work I'm a husband and father of two daughters. Four Maine
          Coon cats and a Maremmano Abruzzese dog run the house. We just pay the
          bills. I have a Dingwall bass I saved up for — played folk-rock and
          then a cover band until COVID ended that. Now in a new city and
          looking for the next one.
        </p>
      </div>

      <div className="mt-20 space-y-16">
        <ErrorBoundary>
          <Lighthouse />
        </ErrorBoundary>
        <ErrorBoundary>
          <GitHub />
        </ErrorBoundary>
      </div>
    </main>
  );
}
