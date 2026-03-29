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

export interface LighthouseResult {
  performance: number;
  accessibility: number;
  best_practices: number;
  seo: number;
  metrics: {
    fcp: number;
    lcp: number;
    tbt: number;
    cls: number;
    tti: number;
  };
}

export async function getLighthouseResult(): Promise<LighthouseResult | null> {
  const res = await fetch(`${API_URL}/lighthouse`);
  if (!res.ok) return null;
  return res.json();
}

export async function getGitHubStats(): Promise<GitHubStats | null> {
  const res = await fetch(`${API_URL}/github/stats`);
  if (!res.ok) return null;
  return res.json();
}
