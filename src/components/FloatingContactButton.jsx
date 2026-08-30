import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail } from "react-icons/fi";

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
        setIsVisible(
          scrollPosition > heroBottom && scrollPosition < contactTop - 100
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#contact"
          aria-label="Jump to contact"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="group fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-bg text-text transition-colors hover:bg-paper hover:text-paper-ink md:bottom-8 md:right-8"
        >
          <FiMail size={18} />
          <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100 md:block">
            get in touch
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
