export default function LighthouseIntro() {
  return (
    <>
      <h2
        id="lighthouse-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Site Performance
      </h2>
      <p className="text-zinc-600 dark:text-zinc-300 mt-2 text-sm">
        Live scores for this page — measured by Google PageSpeed Insights via a
        Go backend, cached for 24h.
      </p>
    </>
  );
}
