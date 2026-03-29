import FetchError from "@/components/FetchError";
import GitHubHeading from "./GitHubHeading";

export default function GitHubFetchError() {
  return (
    <FetchError headingId="github-heading">
      <GitHubHeading />
    </FetchError>
  );
}
