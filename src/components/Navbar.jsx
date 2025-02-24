import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ["home", "projects", "skills", "education", "experience"];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="mx-auto px-4">
        <div className="relative flex items-center justify-center h-16">
          {/* Pill-Shaped Menu */}
          <div
            className="hidden md:flex items-center relative bg-slate-800 rounded-full backdrop-filter backdrop-blur-md bg-opacity-50 shadow-md p-1"
            style={{ minWidth: "600px" }}
          >
            {/* Sliding Pill Indicator */}
            <div
              className="absolute top-0 h-full bg-white rounded-full transition-all duration-300 z-1 shadow-sm"
              style={{
                left: `calc(${activeIndex} * (100% / ${navItems.length}))`,
                width: `calc(100% / ${navItems.length})`,
              }}
            />
            <div className="relative flex justify-between w-full z-10">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setActiveIndex(index)}
                  onSetActive={() => setActiveIndex(index)}
                  className={`flex-1 text-center cursor-pointer p-2 transition-colors duration-300 text-lg mix-blend-difference ${
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

          {/* Mobile Menu Button positioned at top-right */}
          <div className="absolute right-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-full shadow hover:bg-opacity-75 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Updated Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden fixed top-0 left-0 right-0 z-40 backdrop-filter backdrop-blur-md bg-white bg-opacity-50 rounded-b-2xl transition-transform duration-300"
            style={{ animation: "slideDown 300ms ease-out forwards" }}
          >
            {/* Close button inside mobile menu */}
            <div className="absolute top-2 right-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="pt-16 px-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsOpen(false);
                  }}
                  onSetActive={() => setActiveIndex(index)}
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-200 rounded cursor-pointer text-lg transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
