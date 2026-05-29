"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { homeSectionNavItems, navItems } from "@/content";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const stored = localStorage.getItem("theme") as "dark" | "light" | null;
      const newTheme = stored || "light";
      setTheme(newTheme);
      setMounted(true);
      document.documentElement.classList.toggle("light", newTheme === "light");
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      if (pathname !== "/") return;

      const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
      const markerY = window.scrollY + 200;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= markerY) current = section.id;
      }

      if (atBottom && sections.length > 0) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <nav className={`nav-container ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Page navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          {pathname === "/" && (
            <div className="nav-dots">
              {homeSectionNavItems.map((section) => {
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`nav-dot ${activeSection === section.id ? "nav-dot-active" : ""}`}
                    title={section.label}
                  />
                );
              })}
            </div>
          )}

          {mounted && (
            <button
              onClick={toggleTheme}
              className="nav-theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? "☀" : "☽"}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
