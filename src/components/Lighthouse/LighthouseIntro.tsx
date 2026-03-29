export default function LighthouseIntro() {
  return (
    <>
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
    </>
  );
}
