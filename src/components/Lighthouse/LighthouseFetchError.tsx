import ApiUnavailable from "@/components/ApiUnavailable";
import LighthouseIntro from "./LighthouseIntro";

type Props = {
  status: number;
  message: string;
  detail?: string;
};

export default function LighthouseFetchError({
  status,
  message,
  detail: upstreamDetail,
}: Props) {
  const main =
    message.trim() ||
    `Could not load PageSpeed scores${status > 0 ? ` (HTTP ${status})` : ""}. Try again later.`;

  return (
    <section aria-labelledby="lighthouse-heading">
      <LighthouseIntro />
      <ApiUnavailable>
        <p>{main}</p>
        {upstreamDetail ? (
          <p className="text-zinc-600 dark:text-zinc-300 mt-2 break-words font-mono text-xs">
            {upstreamDetail}
          </p>
        ) : null}
        {process.env.NODE_ENV === "development" && status > 0 ? (
          <p className="text-zinc-600 dark:text-zinc-300 mt-2 font-mono text-xs">
            HTTP {status}
          </p>
        ) : null}
      </ApiUnavailable>
    </section>
  );
}
