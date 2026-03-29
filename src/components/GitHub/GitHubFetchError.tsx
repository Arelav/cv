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
          <p className="text-zinc-600 dark:text-zinc-300 mt-2 font-mono text-xs">
            {message}
          </p>
        ) : null}
      </ApiUnavailable>
    </section>
  );
}
