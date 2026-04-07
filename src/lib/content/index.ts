/**
 * Velite generates `.velite/` from `content/` (`velite.config.ts`). Official usage is
 * `import { … } from './.velite'`; this barrel exposes one `@/lib/content` entry plus `./types` aliases.
 *
 * Build: `prebuild` runs `velite build` before `next build`. Dev: `pnpm dev` runs `velite dev` and
 * `next dev` in parallel (Velite npm-scripts pattern).
 *
 * https://github.com/zce/velite/blob/main/docs/guide/with-nextjs.md
 */
import { home } from "../../../.velite";

export {
  education,
  experience,
  person,
  skills,
  spokenLanguages,
} from "../../../.velite";

export const introMarkdown = home.introMarkdown;

export type {
  EducationItem,
  ExperienceJob,
  LanguageItem,
  Person,
  SkillsByCategory,
} from "./types";
