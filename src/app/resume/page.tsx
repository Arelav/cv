import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { cn } from "@/lib/cn";

export default function Resume() {
  return (
    <main className={cn("site-container py-12 sm:py-16")}>
      <div className="space-y-14">
        <Experience />
        <Skills />
        <Education />
      </div>
    </main>
  );
}
