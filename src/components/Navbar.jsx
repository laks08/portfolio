import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

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
      className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-text hover:text-text ${className}`}
    >
      {isDark ? <FiSun size={14} /> : <FiMoon size={14} />}
      <span>{isDark ? "light" : "dark"}</span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
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
        <Link
          to="home"
          spy
          smooth
          duration={500}
          className="cursor-pointer font-mono text-sm font-bold lowercase tracking-tightest text-text"
        >
          lakshya gupta
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item}
              to={item}
              spy
              smooth
              duration={500}
              onSetActive={() => setActiveItem(item)}
              className={`cursor-pointer font-mono text-sm transition-colors ${
                activeItem === item ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {activeItem === item ? "/" : ""}
              {item}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
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
                <Link
                  key={item}
                  to={item}
                  spy
                  smooth
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer py-5 font-mono text-2xl lowercase text-text"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
