"use client";

import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { useMedia } from "react-use";
import type { Person } from "@/lib/content";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavPanel from "./MobileNavPanel";
import NavBrand from "./NavBrand";

interface Props {
  person: Person;
}

export default function Nav({ person }: Props) {
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
          className={cx(
            "frosted-glass",
            "rounded-none border-x-0",
            "md:rounded-2xl md:border-x",
          )}
        >
          <div className="flex min-h-16 items-center justify-between gap-3 py-2 px-5">
            <NavBrand person={person} />
            <DesktopNav person={person} />
            <MobileMenuButton
              menuOpen={menuOpen}
              panelId={panelId}
              onToggle={() => setMenuOpen((o) => !o)}
            />
          </div>

          <div
            className={cx(
              "md:hidden",
              menuOpen && "border-t border-white/45 dark:border-white/10",
            )}
          >
            <MobileNavPanel
              person={person}
              open={menuOpen}
              panelId={panelId}
              action={() => setMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
