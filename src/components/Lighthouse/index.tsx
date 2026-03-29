import { getLighthouseResult } from "@/lib/api";
import LighthouseFetchError from "./LighthouseFetchError";
import LighthouseIntro from "./LighthouseIntro";
import LighthouseScores from "./LighthouseScores";

export default async function Lighthouse() {
  const result = await getLighthouseResult();

  if (!result.ok) {
    return (
      <LighthouseFetchError
        status={result.status}
        message={result.message}
        detail={result.detail}
      />
    );
  }

  return (
    <section aria-labelledby="lighthouse-heading">
      <LighthouseIntro />
      <LighthouseScores data={result.data} />
    </section>
  );
}
