import { defineCollection, defineConfig, s } from "velite";
import { parseBulletListMarkdown } from "./src/lib/content/parse-bullet-list";

export default defineConfig({
  root: "content",
  strict: true,
  collections: {
    person: defineCollection({
      name: "Person",
      pattern: "person.md",
      single: true,
      schema: s
        .object({
          name: s.string(),
          title: s.string(),
          bio: s.string(),
          location: s.string(),
          openToWork: s.boolean(),
          contact: s.object({
            email: s.string(),
            phone: s.string(),
            linkedin: s.string(),
            github: s.string(),
          }),
        })
        .strict(),
    }),
    home: defineCollection({
      name: "Home",
      pattern: "pages/home.md",
      single: true,
      schema: s
        .object({
          introMarkdown: s.raw(),
        })
        .transform((data) => ({
          introMarkdown: (data.introMarkdown ?? "").trim(),
        })),
    }),
    skills: defineCollection({
      name: "Skills",
      pattern: "skills.md",
      single: true,
      schema: s
        .object({
          skills: s.record(s.array(s.string())),
        })
        .strict()
        .transform((data) => data.skills),
    }),
    spokenLanguages: defineCollection({
      name: "Language",
      pattern: "languages/**/*.md",
      schema: s
        .object({
          name: s.string(),
          level: s.string(),
        })
        .strict(),
    }),
    education: defineCollection({
      name: "Education",
      pattern: "education/**/*.md",
      schema: s
        .object({
          degree: s.string(),
          institution: s.string(),
          year: s.string(),
          note: s.string().nullable().optional(),
        })
        .transform((data) => ({
          ...data,
          note: data.note ?? null,
        })),
    }),
    experience: defineCollection({
      name: "Experience",
      pattern: "experience/**/*.md",
      schema: s
        .object({
          role: s.string(),
          company: s.string(),
          period: s.string(),
          location: s.string().nullable().optional(),
          content: s.raw(),
        })
        .transform((data) => ({
          role: data.role,
          company: data.company,
          period: data.period,
          location: data.location ?? null,
          bullets: parseBulletListMarkdown(data.content ?? ""),
        })),
    }),
  },
});
