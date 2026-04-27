import type { GitHubStats } from "@/types/api";
import GitHubFetchError from "./GitHubFetchError";
import GitHubLoaded from "./GitHubLoaded";

export default async function GitHub() {
  const res = await fetch(`${process.env.API_URL}/github/stats`);

  if (!res.ok) {
    return <GitHubFetchError />;
  }

  const data: GitHubStats = await res.json();
  return <GitHubLoaded stats={data} />;
}
