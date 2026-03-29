import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Resume() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="space-y-14">
        <Experience />
        <Skills />
        <Education />
      </div>
    </main>
  );
}
