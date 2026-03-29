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

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number; message: string };
