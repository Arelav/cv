import { Suspense } from "react";
import GitHub from "@/components/GitHub";
import Lighthouse from "@/components/Lighthouse";
import { person } from "@/lib/cv-data";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {person.name}
      </h1>
      <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
        {person.title}
      </p>

      <div className="mt-8 max-w-xl space-y-4 text-zinc-600 dark:text-zinc-300">
        <p>
          Senior frontend engineer with over a decade of building web products —
          mostly React and TypeScript, leading teams, reviewing code, and caring
          too much about the details that make a codebase enjoyable to work in.
        </p>
        <p>
          Lately I've been learning Go. Something I've been curious about for a
          long time — simple syntax, tiny binaries, type-safe with no manual memory management. The backend for
          this site is written in Go.
        </p>
        <p>
          At work I care about three things: good people to build with, problems
          worth solving, and a codebase you actually enjoy opening in the
          morning.
        </p>
        <p>
          Outside of work I'm a husband and father of two daughters. Four Maine Coon cats and a Maremmano Abruzzese dog run the house. We just pay
          the bills. I
          have a Dingwall bass I saved up for — played folk-rock and then a
          cover band until COVID ended that. Now in a new city and looking for
          the next one.
        </p>
      </div>

      <div className="mt-16 space-y-14">
        <Suspense>
          <Lighthouse />
        </Suspense>
        <Suspense>
          <GitHub />
        </Suspense>
      </div>
    </main>
  );
}
