import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      const contactSection = document.getElementById("contact");
      const scrollPosition = window.scrollY;

      if (heroSection && contactSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const contactTop = contactSection.offsetTop;

        // Show button when scrolled past hero but before contact section
        setIsVisible(
          scrollPosition > heroBottom && scrollPosition < contactTop - 100
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 p-3 md:p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group"
        >
          <FaEnvelope
            size={20}
            className="group-hover:scale-110 transition-transform duration-300 md:text-2xl"
          />
          <span className="hidden md:block absolute right-full mr-4 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Get in Touch
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
