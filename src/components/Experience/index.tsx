import { MetaSeparator } from "@/components/MetaSeparator";
import { experience } from "@/lib/cv-data";

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Experience
      </h2>

      <ol className="mt-6 space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-medium">{job.role}</span>
                <MetaSeparator />
                <span className="text-zinc-700 dark:text-zinc-300">
                  {job.company}
                </span>
              </div>
              <div className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-right">
                <span>{job.period}</span>
                {job.location && (
                  <>
                    <MetaSeparator />
                    <span>{job.location}</span>
                  </>
                )}
              </div>
            </div>

            <ul className="text-zinc-700 dark:text-zinc-300 mt-3 space-y-1.5 text-sm">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
