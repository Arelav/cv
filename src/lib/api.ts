const API_URL = process.env.API_URL ?? "https://valerykh-cv-api.fly.dev";

export interface GitHubStats {
  username: string;
  name: string;
  public_repos: number;
  followers: number;
  total_stars: number;
  top_languages: { name: string; repos: number }[] | null;
  top_repos:
    | {
        name: string;
        description: string;
        stars: number;
        url: string;
        language: string;
      }[]
    | null;
}

export async function getGitHubStats(): Promise<GitHubStats> {
  const res = await fetch(`${API_URL}/github/stats`);
  if (!res.ok) throw new Error(`Failed to fetch GitHub stats: ${res.status}`);
  return res.json();
}
