import type { SkillsByCategory } from "@/lib/content";

export default function Skills({ skills }: { skills: SkillsByCategory }) {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-xl font-semibold tracking-tight">
        Skills
      </h2>

      <dl className="mt-5 space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col gap-1 sm:flex-row sm:gap-6"
          >
            <dt className="text-zinc-600 dark:text-zinc-300 w-44 shrink-0 text-sm">
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
