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
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguages: GitHubLanguageStat[] | null;
  topRepos: GitHubRepoSummary[] | null;
}

export interface LighthouseResult {
  performance: number;
  accessibility: number;
  bestPractices: number;
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
