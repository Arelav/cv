import { education, languages } from "@/lib/cv-data";

export default function Education() {
  return (
    <section aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Education
      </h2>

      <ul className="mt-5 space-y-4">
        {education.map((item) => (
          <li key={item.degree}>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="font-medium">{item.degree}</span>
              <span className="text-sm text-zinc-400 dark:text-zinc-500">
                {item.year}
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {item.institution}
              {item.note && ` · ${item.note}`}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Languages
        </h3>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {languages.map((lang) => (
            <li key={lang.name}>
              <span className="font-medium">{lang.name}</span>
              <span className="text-zinc-400 dark:text-zinc-500">
                {" "}— {lang.level}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
