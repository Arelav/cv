import type { GitHubStats } from "@/types/api";
import GitHubFetchError from "./GitHubFetchError";
import GitHubLoaded from "./GitHubLoaded";

export default async function GitHub() {
  const response = await fetch(`${process.env.API_URL}/github/stats`);
  const data = await response.json();

  if (!response.ok) {
    return <GitHubFetchError />;
  }

  return <GitHubLoaded stats={data as GitHubStats} />;
}
