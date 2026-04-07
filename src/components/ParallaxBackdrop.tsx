"use client";

import { cx } from "class-variance-authority";
import { useEffect } from "react";

const layers = [
  {
    blur: "blur-[7px]",
    light: "parallax-bg-a-light",
    dark: "parallax-bg-a-dark",
    cls: "parallax-layer-0",
  },
  {
    blur: "blur-[3px]",
    light: "parallax-bg-b-stripes",
    extra: "opacity-90 dark:opacity-80",
    cls: "parallax-layer-1",
  },
  {
    blur: "blur-[3px]",
    light: "parallax-bg-b-wash",
    extra:
      "opacity-80 mix-blend-screen dark:opacity-60 dark:mix-blend-soft-light",
    cls: "parallax-layer-2",
  },
  {
    blur: "blur-lg",
    light: "parallax-bg-c-light",
    dark: "parallax-bg-c-dark",
    cls: "parallax-layer-3",
  },
  {
    blur: "blur-md",
    light: "parallax-bg-d-light",
    dark: "parallax-bg-d-dark",
    cls: "parallax-layer-4",
  },
  {
    blur: "blur-sm",
    light: "parallax-bg-e-light",
    dark: "parallax-bg-e-dark",
    cls: "parallax-layer-5",
  },
];

interface LayerProps {
  blur: string;
  light: string;
  dark?: string;
  extra?: string;
  cls: string;
}

function Layer({ blur, light, dark, extra, cls }: LayerProps) {
  return (
    <div className={cx("parallax-layer", cls)}>
      <div className={cx("absolute inset-0", blur)}>
        <div
          className={cx("absolute inset-0", extra ?? "dark:hidden", light)}
        />
        {dark && (
          <div className={cx("absolute inset-0 hidden dark:block", dark)} />
        )}
      </div>
    </div>
  );
}

export default function ParallaxBackdrop() {
  useEffect(() => {
    const onScroll = () =>
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY.toFixed(1)}px`,
      );
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-clip"
    >
      {layers.map(({ blur, light, dark, extra, cls }) => (
        <Layer
          key={light}
          blur={blur}
          light={light}
          dark={dark}
          extra={extra}
          cls={cls}
        />
      ))}
      <div className="parallax-vignette-light absolute inset-0 mix-blend-multiply" />
      <div className="parallax-vignette-dark absolute inset-0 hidden dark:block mix-blend-multiply" />
    </div>
  );
}
