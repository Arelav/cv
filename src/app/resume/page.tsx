import ReactMarkdown from "react-markdown";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ResumeDownloadLinks from "./ResumeDownloadLinks";
import Skills from "@/components/Skills";
import {
  certifications,
  education,
  experience,
  person,
  resume,
  skills,
  spokenLanguages,
} from "@/lib/content";

export default function Resume() {
  const headline = resume.headline ?? person.title;

  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
      <ResumeDownloadLinks placement="top" />

      <header className="mt-8 space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {person.name}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">{headline}</p>
      </header>

      {resume.summaryMarkdown ? (
        <div className="mt-8 max-w-xl space-y-5 text-zinc-700 dark:text-zinc-300 [&_a]:font-medium [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-blue-400 [&_strong]:font-semibold">
          <ReactMarkdown>{resume.summaryMarkdown}</ReactMarkdown>
        </div>
      ) : null}

      <div className="mt-12 space-y-16">
        <Experience jobs={experience} />
        <Skills skills={skills} />
        <Education
          education={education}
          languages={spokenLanguages}
          certifications={certifications}
        />
        <ResumeDownloadLinks placement="bottom" />
      </div>
    </main>
  );
}
