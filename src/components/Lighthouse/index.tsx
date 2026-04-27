import type { LighthouseResult } from "@/types/api";
import LighthouseFetchError from "./LighthouseFetchError";
import LighthouseIntro from "./LighthouseIntro";
import LighthouseScores from "./LighthouseScores";

export default async function Lighthouse() {
  const res = await fetch(`${process.env.API_URL}/lighthouse`);

  if (!res.ok) {
    return <LighthouseFetchError />;
  }

  const data: LighthouseResult = await res.json();
  return (
    <section aria-labelledby="lighthouse-heading">
      <LighthouseIntro />
      <LighthouseScores data={data} />
    </section>
  );
}
