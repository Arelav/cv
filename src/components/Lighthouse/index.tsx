import { getLighthouseResult } from "@/lib/api";
import Gauge from "./Gauge";

function formatMilliseconds(ms: number) {
  return ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${Math.round(ms)}ms`;
}

export default async function Lighthouse() {
  const result = await getLighthouseResult();
  if (!result) return null;

  const {
    performance,
    accessibility,
    best_practices,
    seo,
    metrics: { fcp, lcp, tbt, cls, tti },
  } = result;

  return (
    <section aria-labelledby="lighthouse-heading">
      <h2
        id="lighthouse-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Site Performance
      </h2>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Live scores for this page — measured by Google PageSpeed Insights via a
        Go backend, cached for 24h.
      </p>

      <div className="mt-6 grid grid-cols-4 gap-3 sm:gap-6">
        <Gauge label="Performance" score={performance} />
        <Gauge label="Accessibility" score={accessibility} />
        <Gauge label="Best Practices" score={best_practices} />
        <Gauge label="SEO" score={seo} />
      </div>

      <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12">
        {(
          [
            ["First Contentful Paint", formatMilliseconds(fcp)],
            ["Largest Contentful Paint", formatMilliseconds(lcp)],
            ["Total Blocking Time", formatMilliseconds(tbt)],
            ["Layout Shift", cls.toFixed(3)],
            ["Time to Interactive", formatMilliseconds(tti)],
          ] as const
        ).map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-zinc-100 py-1.5 text-sm last:border-0 dark:border-zinc-800"
          >
            <dt className="text-zinc-500 dark:text-zinc-400">{label}</dt>
            <dd className="font-medium tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
