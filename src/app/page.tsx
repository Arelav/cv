import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GitHub from "@/components/GitHub";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Hero />
      <div className="mt-12 space-y-14">
        <Experience />
        <GitHub />
        <Skills />
        <Education />
      </div>
    </main>
  );
}
