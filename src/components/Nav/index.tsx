"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { useMedia } from "react-use";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavPanel from "./MobileNavPanel";
import NavBrand from "./NavBrand";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const isMdUp = useMedia("(min-width: 768px)", false);

  useEffect(() => {
    if (pathname) setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMdUp) setMenuOpen(false);
  }, [isMdUp]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto w-full max-w-none px-0 py-0 md:max-w-3xl md:px-7 md:py-3 lg:px-8">
        <div
          className={[
            "frosted-glass",
            // Mobile: edge-to-edge, no rounding, no side borders.
            "rounded-none border-x-0",
            // Desktop+: card container again.
            "md:rounded-2xl md:border-x",
          ].join(" ")}
        >
          <div className="flex min-h-16 items-center justify-between gap-3 py-2 px-5">
            <NavBrand />
            <DesktopNav />
            <MobileMenuButton
              menuOpen={menuOpen}
              panelId={panelId}
              onToggle={() => setMenuOpen((o) => !o)}
            />
          </div>

          <div
            className={[
              "md:hidden",
              menuOpen
                ? "border-t border-white/45 dark:border-white/[0.1]"
                : "",
            ].join(" ")}
          >
            <MobileNavPanel
              open={menuOpen}
              panelId={panelId}
              onClose={() => setMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
