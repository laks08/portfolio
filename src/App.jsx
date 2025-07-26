import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import FloatingContactButton from "./components/FloatingContactButton";
import ErrorBoundary from "./components/ErrorBoundary";

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
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-slate-200">
          <Navbar />
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
          <ErrorBoundary>
            <Skills />
          </ErrorBoundary>
          <ErrorBoundary>
            <Education />
          </ErrorBoundary>
          <ErrorBoundary>
            <Experience />
          </ErrorBoundary>
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
          <FloatingContactButton />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
