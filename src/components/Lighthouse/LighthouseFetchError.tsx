import ApiUnavailable from "@/components/ApiUnavailable";
import LighthouseIntro from "./LighthouseIntro";

type Props = {
  status: number;
  message: string;
};

export default function LighthouseFetchError({ status, message }: Props) {
  return (
    <section aria-labelledby="lighthouse-heading">
      <LighthouseIntro />
      <ApiUnavailable>
        <p>
          Could not load PageSpeed scores {status > 0 ? `(HTTP ${status})` : ""}
          . The upstream service may be busy or unreachable.
        </p>
        {process.env.NODE_ENV === "development" ? (
          <p className="mt-2 font-mono text-xs text-zinc-500 dark:text-zinc-500">
            {message}
          </p>
        ) : null}
      </ApiUnavailable>
    </section>
  );
}
