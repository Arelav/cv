import { getGitHubStats } from "@/lib/api";
import GitHubFetchError from "./GitHubFetchError";
import GitHubLoaded from "./GitHubLoaded";

export default async function GitHub() {
  const result = await getGitHubStats();

  if (!result.ok) {
    return <GitHubFetchError status={result.status} message={result.message} />;
  }

  return <GitHubLoaded stats={result.data} />;
}
