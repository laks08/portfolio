import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const navItems = ["home", "projects", "skills", "education", "experience"];
  const menuRef = useRef(null);

  // Handle click outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 600);
  };

  const handleSetActive = (index) => {
    if (!isScrolling) {
      setActiveIndex(index);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="relative flex items-center justify-between md:justify-center">
          {/* Logo or Brand Name (optional) */}
          <div className="flex-1 md:hidden"></div>

          {/* Pill-Shaped Menu */}
          <div
            className="hidden md:flex items-center relative bg-slate-800 rounded-full backdrop-filter backdrop-blur-md bg-opacity-50 shadow-md"
            style={{ width: "min(800px, 90vw)" }}
          >
            {/* Sliding Pill Indicator */}
            <div
              className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 z-1 shadow-sm"
              style={{
                left: `calc(${activeIndex} * (100% / ${navItems.length}) + 4px)`,
                width: `calc((100% / ${navItems.length}) - 8px)`,
              }}
            />
            <div className="relative flex justify-between w-full z-10 px-2">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavClick(index)}
                  onSetActive={() => handleSetActive(index)}
                  className={`flex-1 text-center cursor-pointer py-3 px-4 transition-colors duration-300 text-lg font-medium mix-blend-difference ${
                    activeIndex === index
                      ? "text-slate-900"
                      : "text-slate-300 hover:text-slate-100"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-slate-800 text-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-full shadow hover:bg-opacity-75 transition-all duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={20} className="text-gray-200" />
              ) : (
                <Menu size={20} className="text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Smooth Closing Transition */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-0 left-0 right-0 z-40 backdrop-filter backdrop-blur-lg bg-slate-900/95 shadow-lg min-h-screen"
            >
              <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
                {navItems.map((item, index) => (
                  <Link
                    key={item}
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => {
                      handleNavClick(index);
                      setIsOpen(false);
                    }}
                    onSetActive={() => handleSetActive(index)}
                    className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-all duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
