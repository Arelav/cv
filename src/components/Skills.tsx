import { skills } from "@/lib/cv-data";

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <h2
        id="skills-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Skills
      </h2>

      <dl className="mt-5 space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <dt className="w-44 shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
              {category}
            </dt>
            <dd className="text-sm text-zinc-700 dark:text-zinc-300">
              {items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
