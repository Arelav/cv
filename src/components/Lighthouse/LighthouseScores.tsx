import type { LighthouseResult } from "@/types/api";
import { formatMilliseconds } from "./format";
import Gauge from "./Gauge";

interface Props {
  data: LighthouseResult;
}

export default function LighthouseScores({ data }: Props) {
  const {
    performance,
    accessibility,
    bestPractices,
    seo,
    metrics: { fcp, lcp, tbt, cls, tti },
  } = data;

  const metricRows = [
    ["First Contentful Paint", formatMilliseconds(fcp)],
    ["Largest Contentful Paint", formatMilliseconds(lcp)],
    ["Total Blocking Time", formatMilliseconds(tbt)],
    ["Layout Shift", cls.toFixed(3)],
    ["Time to Interactive", formatMilliseconds(tti)],
  ] as const;

  return (
    <>
      <div className="mt-8 grid grid-cols-4 gap-5 sm:gap-7">
        <Gauge label="Performance" score={performance} />
        <Gauge label="Accessibility" score={accessibility} />
        <Gauge label="Best Practices" score={bestPractices} />
        <Gauge label="SEO" score={seo} />
      </div>

      <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-14">
        {metricRows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-zinc-100 py-2 text-sm last:border-0 dark:border-zinc-800"
          >
            <dt className="text-zinc-600 dark:text-zinc-300">{label}</dt>
            <dd className="font-medium tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
