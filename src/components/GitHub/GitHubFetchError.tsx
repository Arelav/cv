import ApiUnavailable from "@/components/ApiUnavailable";
import GitHubHeading from "./GitHubHeading";

type Props = {
  status: number;
  message: string;
};

export default function GitHubFetchError({ status, message }: Props) {
  return (
    <section aria-labelledby="github-heading">
      <GitHubHeading />
      <ApiUnavailable>
        <p>
          Could not load GitHub stats {status > 0 ? `(HTTP ${status})` : ""}.
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
