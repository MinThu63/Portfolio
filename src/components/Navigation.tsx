"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Portfolio",
    children: [
      { label: "Projects", href: "#projects" },
      { label: "Competitions", href: "#competitions" },
      { label: "Academics", href: "#academics" },
    ],
  },
  {
    label: "Credentials",
    children: [
      { label: "Certifications & Awards", href: "#certifications" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    label: "Involvement",
    children: [
      { label: "Activities", href: "#activities" },
      { label: "Documents", href: "#documents" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

function resolveHref(href: string, isHome: boolean): string {
  if (isHome) return href;
  // On non-home pages, prefix hash links with "/" to navigate back to homepage sections
  return href.startsWith("#") ? `/${href}` : href;
}

function DesktopDropdown({ item, isHome }: { item: NavItem; isHome: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={resolveHref(item.href!, isHome)}
        className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 min-w-[180px] rounded-lg border border-foreground/10 bg-background p-1.5 shadow-lg">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={resolveHref(child.href, isHome)}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {personalInfo.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <DesktopDropdown item={item} isHome={isHome} />
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground"
            >
              {mounted && theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground"
          >
            {mounted && theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-foreground/10 bg-background px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={resolveHref(item.href, isHome)}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <p className="pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-foreground/40">
                    {item.label}
                  </p>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={resolveHref(child.href, isHome)}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 pl-3 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
