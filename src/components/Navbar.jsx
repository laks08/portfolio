import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { scrollToSection } from "../lib/scroll";

const NAV_ITEMS = [
  "home",
  "projects",
  "skills",
  "education",
  "experience",
  "contact",
];

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex items-center gap-2 overflow-hidden rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-text hover:text-text ${className}`}
    >
      {/* Crossfade the icon+label instead of popping between them — the
          instant swap read as a jarring beat inside an otherwise-animated
          toggle. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.16 }}
          className="inline-flex items-center gap-2"
        >
          {isDark ? <FiSun size={14} /> : <FiMoon size={14} />}
          <span>{isDark ? "light" : "dark"}</span>
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const menuTriggerRef = useRef(null);
  const menuCloseRef = useRef(null);
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scrolling while the mobile drawer is open.
  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Move focus into the drawer on open, and back to the trigger that
  // opened it on close (never on initial mount, when it was never open).
  useEffect(() => {
    if (isOpen) {
      hasOpenedRef.current = true;
      menuCloseRef.current?.focus();
    } else if (hasOpenedRef.current) {
      menuTriggerRef.current?.focus();
    }
  }, [isOpen]);

  // Basic focus trap: keep Tab/Shift+Tab cycling within the open drawer.
  useEffect(() => {
    if (!isOpen) return undefined;
    const container = menuRef.current;
    if (!container) return undefined;

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const focusable = container.querySelectorAll("a[href], button:not([disabled])");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    container.addEventListener("keydown", onKeyDown);
    return () => container.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Active-link highlighting — one IntersectionObserver, no per-frame scroll math.
  useEffect(() => {
    const sections = NAV_ITEMS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const inBand = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (inBand[0]) setActiveItem(inBand[0].target.id);
      },
      // Push the band below the fixed navbar, then shrink it to the upper
      // ~45% of the viewport so exactly one section wins.
      { rootMargin: "-64px 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    // Make the last item light up at the very bottom of the page.
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        setActiveItem(NAV_ITEMS[NAV_ITEMS.length - 1]);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    scrollToSection(item);
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-colors duration-300 ${
        // The open drawer must outrank the floating contact button, and a
        // z-index inside <nav> can't escape <nav>'s own stacking context.
        isOpen ? "z-[70]" : "z-50"
      } ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="cursor-pointer font-mono text-sm font-bold lowercase tracking-tightest text-text"
        >
          lakshya gupta
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`cursor-pointer font-mono text-sm transition-colors ${
                activeItem === item ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {activeItem === item ? "/" : ""}
              {item}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            className="text-text"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — sits ABOVE the header bar so nothing shows through */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ backgroundColor: "rgb(var(--color-bg))" }}
            className="fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto px-5 pt-20 md:hidden"
          >
            <div className="absolute inset-x-5 top-4 flex items-center justify-between">
              <span className="font-mono text-sm font-bold lowercase tracking-tightest text-text">
                lakshya gupta
              </span>
              <button
                ref={menuCloseRef}
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="text-text"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {NAV_ITEMS.slice(1).map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    requestAnimationFrame(() => scrollToSection(item));
                  }}
                  className="block cursor-pointer py-5 font-mono text-2xl lowercase text-text"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
