"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { useMedia } from "react-use";
import { cn } from "@/lib/cn";
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
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div
        className={cn(
          "site-container flex min-h-14 items-center justify-between gap-3",
        )}
      >
        <NavBrand />
        <DesktopNav />
        <MobileMenuButton
          menuOpen={menuOpen}
          panelId={panelId}
          onToggle={() => setMenuOpen((o) => !o)}
        />
      </div>

      <MobileNavPanel
        open={menuOpen}
        panelId={panelId}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
