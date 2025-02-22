import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  // Added "home" as first item.
  const navItems = ["home", "education", "experience", "skills", "projects"];

  return (
    <nav className="fixed top-0 w-full text-white z-50">
      <div className="mx-auto px-4">
        <div className="relative flex items-center justify-center h-16">
          {/* Pill-Shaped Menu */}
          <div
            className="hidden md:flex items-center relative bg-gray-100 rounded-full backdrop-filter backdrop-blur-md bg-opacity-50 shadow-md p-1"
            style={{ minWidth: "800px" }}
          >
            {/* Sliding Pill Indicator */}
            <div
              className="absolute top-0 h-full bg-white rounded-full transition-all duration-300 z-1 shadow-md"
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
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button positioned at top-right */}
          <div className="absolute right-4 md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
                  className="block px-3 py-2 hover:bg-slate-800 cursor-pointer text-lg"
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
