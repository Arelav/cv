export interface GitHubLanguageStat {
  name: string;
  repos: number;
}

export interface GitHubRepoSummary {
  name: string;
  description: string;
  stars: number;
  url: string;
  language: string;
}

export interface GitHubStats {
  username: string;
  name: string;
  public_repos: number;
  followers: number;
  total_stars: number;
  top_languages: GitHubLanguageStat[] | null;
  top_repos: GitHubRepoSummary[] | null;
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

export type HttpError = {
  error: string;
  message: string;
  detail?: string;
};
