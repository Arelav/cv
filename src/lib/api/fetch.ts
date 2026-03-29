import type { ApiResult, GitHubStats, LighthouseResult } from "./types";

const API_URL = process.env.API_URL ?? "https://valerykh-cv-api.fly.dev";

async function fetchApiJson<T>(url: string): Promise<ApiResult<T>> {
  try {
    const res = await fetch(url);
    const raw = await res.text();
    if (!res.ok) {
      let message = res.statusText || `Request failed (${res.status})`;
      if (raw) {
        try {
          const j = JSON.parse(raw) as { message?: string; error?: string };
          if (typeof j.message === "string" && j.message.length > 0) {
            message = j.message;
          } else if (typeof j.error === "string" && j.error.length > 0) {
            message = j.error;
          } else {
            message = raw.slice(0, 300);
          }
        } catch {
          message = raw.slice(0, 300);
        }
      }
      return { ok: false, status: res.status, message };
    }
    try {
      const data = JSON.parse(raw) as T;
      return { ok: true, data };
    } catch {
      return {
        ok: false,
        status: res.status,
        message: "Invalid response from API",
      };
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Network error";
    return { ok: false, status: 0, message: msg };
  }
}

export async function getLighthouseResult(): Promise<
  ApiResult<LighthouseResult>
> {
  return fetchApiJson<LighthouseResult>(`${API_URL}/lighthouse`);
}

export async function getGitHubStats(): Promise<ApiResult<GitHubStats>> {
  return fetchApiJson<GitHubStats>(`${API_URL}/github/stats`);
}
