import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-slate-200">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
