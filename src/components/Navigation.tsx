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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Only track sections on homepage
      if (pathname === "/") {
        const sections = document.querySelectorAll("section[id]");
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < 200) {
            current = section.getAttribute("id") || "";
          }
        });

        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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

        {/* Section dots - only on homepage */}
        {pathname === "/" && (
          <div className="nav-dots">
            {["currently", "projects", "experience", "honors", "music", "connect"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-dot ${activeSection === section ? "nav-dot-active" : ""}`}
                title={section.charAt(0).toUpperCase() + section.slice(1)}
              />
            ))}
          </div>
        )}
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

