"use client";

import "./BackgroundStripes.css";

let el: HTMLDivElement | null = null;
let raf = 0;

function update() {
  if (!el) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  el.style.setProperty("--bg-y", `${progress * window.innerHeight * 0.3}px`);
}

function onScroll() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(update);
}

export default function BackgroundStripes() {
  return (
    <div
      ref={(node) => {
        if (node) {
          el = node;
          window.addEventListener("scroll", onScroll, { passive: true });
          update();
        } else {
          window.removeEventListener("scroll", onScroll);
          cancelAnimationFrame(raf);
          el = null;
        }
      }}
      className="bg-stripes"
      aria-hidden="true"
    />
  );
}
