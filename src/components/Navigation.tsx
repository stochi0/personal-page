"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("light", stored === "light");
    } else {
      // Set light theme as default
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Only track sections on homepage
      if (pathname === "/") {
        const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
        const markerY = window.scrollY + 200;
        let current = "";

        for (const section of sections) {
          if (section.offsetTop <= markerY) {
            current = section.id;
          }
        }

        // If we're at the bottom, ensure the last section is marked active.
        if (sections.length > 0) {
          const atBottom =
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
          if (atBottom) current = sections[sections.length - 1]!.id;
        }

        setActiveSection(current);
      }
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

        {/* Right side: dots + theme toggle */}
        <div className="nav-right">
          {/* Section dots - only on homepage */}
          {pathname === "/" && (
            <div className="nav-dots">
              {["now", "explore", "accolades", "piano", "connect"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`nav-dot ${activeSection === section ? "nav-dot-active" : ""}`}
                  title={section === "piano" ? "Off the Keys" : section.charAt(0).toUpperCase() + section.slice(1)}
                />
              ))}
            </div>
          )}
          
          {/* Theme toggle */}
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
