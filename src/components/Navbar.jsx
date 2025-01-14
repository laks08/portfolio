import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white z-50">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="top"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 text-xl font-bold cursor-pointer"
            >
              Lakshya Gupta
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 hover:bg-slate-800 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 hover:bg-slate-800 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 hover:bg-slate-800 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 hover:bg-slate-800 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 hover:bg-slate-800 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
