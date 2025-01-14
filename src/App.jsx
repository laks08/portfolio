import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
