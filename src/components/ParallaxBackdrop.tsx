"use client";

import { useEffect, useRef, useState } from "react";

/** Strong enough to read against subtle gradients; tune down if it feels loud. */
const PARALLAX = [
  // Far → near (smaller → larger motion).
  { y: -0.28, x: 0.1 },
  { y: 0.62, x: -0.18 },
  { y: -1.05, x: 0.34 },
] as const;

function readScrollY(): number {
  if (typeof window === "undefined") return 0;

  const n = (v: unknown): number =>
    typeof v === "number" && Number.isFinite(v) ? v : 0;

  const w = n(window.scrollY);
  const p = n(window.pageYOffset);
  const de = document.documentElement;
  const b = document.body;
  const se = document.scrollingElement;

  return Math.max(w, p, n(de?.scrollTop), n(b?.scrollTop), n(se?.scrollTop));
}

function _layerTransform(scrollY: number, i: 0 | 1 | 2): string {
  const { x: kx, y: ky } = PARALLAX[i];
  // Non-linear depth curve + tiny rotation makes it feel less “flat”.
  const s = Math.max(0, scrollY);
  const curved = s ** 0.92;
  const rot = ((i === 0 ? 0.35 : i === 1 ? -0.55 : 0.85) * curved) / 2600;
  // Slight scale prevents revealing edges during translation.
  return `translate3d(${curved * kx}px, ${curved * ky}px, 0) rotate(${rot}deg) scale(1.12)`;
}

/**
 * Transforms are applied only via ref.style (never React `style` prop) so
 * reconciliation cannot reset them. Wheel/touch bursts catch scroll when the
 * `scroll` event is missing (some embedded previews / odd scroll containers).
 */
export default function ParallaxBackdrop() {
  const [debug, setDebug] = useState(false);
  const [debugText, setDebugText] = useState("");
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const c = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const debugEnabled = sp.has("parallaxDebug");
    setDebug(debugEnabled);

    const layers = [a, b, c] as const;

    // Freeze parallax (no motion). Keep a stable transform so layers still render crisply.
    for (let i = 0; i < 3; i++) {
      const el = layers[i].current;
      if (el) el.style.transform = "translate3d(0, 0, 0) scale(1.12)";
    }

    if (debugEnabled) {
      const t0 = layers[0].current
        ? getComputedStyle(layers[0].current).transform
        : "(missing)";
      setDebugText(`scrollY=${Math.round(readScrollY())}\nlayer0=${t0}`);
    }

    return;
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-sky-50 dark:bg-black"
    >
      {debug ? (
        <div className="pointer-events-none fixed left-3 top-3 z-[9999] whitespace-pre rounded-md bg-black/70 px-3 py-2 font-mono text-xs text-white">
          {debugText || "parallaxDebug on"}
        </div>
      ) : null}
      <div
        ref={a}
        className="absolute -inset-[85%] origin-center"
        style={{ filter: "blur(6px)" }}
      >
        {/* Layer A: base sky-blue background */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            background: `
              linear-gradient(
                150deg,
                rgb(240 249 255 / 0.92) 0%,
                rgb(186 230 253 / 0.56) 34%,
                rgb(241 245 249 / 0.72) 62%,
                rgb(203 213 225 / 0.54) 100%
              )
            `,
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `
              linear-gradient(
                150deg,
                rgb(5 18 42 / 0.84) 0%,
                rgb(14 45 86 / 0.62) 38%,
                rgb(7 28 58 / 0.78) 68%,
                rgb(18 64 120 / 0.7) 100%
              )
            `,
          }}
        />
      </div>

      <div
        ref={b}
        className="absolute -inset-[85%] origin-center"
        style={{ filter: "blur(2px)" }}
      >
        {/* Layer B: bold diagnostic stripes (we'll tune colors later) */}
        <div
          className="absolute inset-0 opacity-90 dark:opacity-80"
          style={{
            background: `
              repeating-linear-gradient(
                125deg,
                rgb(37 99 235 / 0.35) 0px,
                rgb(37 99 235 / 0.35) 60px,
                transparent 60px,
                transparent 360px,
                rgb(14 165 233 / 0.28) 360px,
                rgb(14 165 233 / 0.28) 440px,
                transparent 440px,
                transparent 520px
              )
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-80 mix-blend-screen dark:opacity-60 dark:mix-blend-soft-light"
          style={{
            background: `
              linear-gradient(217deg, transparent 52%, rgb(147 197 253 / 0.22) 100%),
              linear-gradient(12deg, rgb(186 230 253 / 0.16) 0%, transparent 44%),
              linear-gradient(110deg, transparent 42%, rgb(191 219 254 / 0.12) 82%, transparent 96%)
            `,
          }}
        />

        {/*
          Layer B radials are currently disabled for KISS.
          Uncomment if/when you want more depth:

          <div className="absolute inset-0 dark:hidden" style={{ background: `radial-gradient(...)` }} />
          <div className="absolute inset-0 hidden dark:block" style={{ background: `radial-gradient(...)` }} />
        */}
      </div>

      <div
        ref={c}
        className="absolute -inset-[85%] origin-center"
        style={{ filter: "blur(14px)" }}
      >
        {/*
          Layer C is disabled for KISS. Uncomment when you want a 3rd layer:

          <div className="absolute inset-0" style={{ background: `linear-gradient(...)` }} />
          <div className="absolute inset-0 dark:hidden" style={{ background: `radial-gradient(...)` }} />
          <div className="absolute inset-0 hidden dark:block" style={{ background: `radial-gradient(...)` }} />
        */}
      </div>

      {/* Final vignette hides any remaining layer edges. */}
      {/*
        Vignette is enabled by default (for borderless edges).
        Comment out this block if you want to troubleshoot without it.
      */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 140% 120% at 50% 45%, transparent 58%, rgb(0 0 0 / 0.14) 86%, rgb(0 0 0 / 0.24) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 140% 120% at 50% 45%, transparent 44%, rgb(0 0 0 / 0.32) 86%, rgb(0 0 0 / 0.55) 100%)",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
