import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { education, experience, skills, spokenLanguages } from "@/lib/content";

export default function Resume() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
      <div className="space-y-16">
        <Experience jobs={experience} />
        <Skills skills={skills} />
        <Education education={education} languages={spokenLanguages} />
      </div>
    </main>
  );
}
