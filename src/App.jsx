import React, { Suspense, lazy, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import FloatingContactButton from "./components/FloatingContactButton";
import ErrorBoundary from "./components/ErrorBoundary";

// react-slick + slick-carousel are the heaviest single dependency in the
// bundle and are only used here — split them into their own chunk instead
// of shipping them in the main bundle for a page that hasn't scrolled yet.
const Projects = lazy(() => import("./components/Projects"));

// Roughly matches the carousel's settled height so lazy-loading it doesn't
// cause a visible layout jump once the chunk arrives.
const ProjectsFallback = () => <div className="min-h-[560px]" aria-hidden="true" />;

const App = () => {
  useEffect(() => {
    const blockContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", blockContextMenu);
    return () => document.removeEventListener("contextmenu", blockContextMenu);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <div className="min-h-screen bg-bg font-sans text-text">
            <Navbar />
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<ProjectsFallback />}>
                <Projects />
              </Suspense>
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
        </MotionConfig>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
