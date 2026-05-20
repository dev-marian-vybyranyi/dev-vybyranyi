import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Employment", id: "employment" },
  { label: "Languages", id: "languages" },
];

const HEADER_HEIGHT = 56;

export function Header() {
  const [activeSection, setActiveSection] = useState("projects");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = NAV_ITEMS[0].id;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= HEADER_HEIGHT + 32) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        {/* Desktop nav */}
        <nav className="site-header__nav site-header__nav--desktop">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`site-header__link${activeSection === item.id ? " site-header__link--active" : ""}`}
            >
              {item.label}
              {activeSection === item.id && <span className="site-header__dot" />}
            </button>
          ))}
        </nav>

        {/* Mobile burger button */}
        <button
          className={`site-header__burger${menuOpen ? " site-header__burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="site-header__burger-bar" />
          <span className="site-header__burger-bar" />
          <span className="site-header__burger-bar" />
        </button>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`site-header__overlay${menuOpen ? " site-header__overlay--visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav className={`site-header__drawer${menuOpen ? " site-header__drawer--open" : ""}`}>
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`site-header__drawer-link${activeSection === item.id ? " site-header__drawer-link--active" : ""}`}
            style={{ "--i": i }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
