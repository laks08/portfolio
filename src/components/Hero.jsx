import React from "react";

const Hero = () => {
  return (
    <section
      id="top"
      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <img
          src="src/assets/profilepic.jpeg" // Placeholder for your photo link
          alt="Lakshya Gupta"
          className="w-72 h-72 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Lakshya Gupta</h1>
        <p className="text-xl md:text-2xl mb-8">
          Software Engineer & Data Analyst
        </p>
        <p className="text-lg max-w-2xl mx-auto">
          A passionate professional with expertise in full-stack development,
          data analysis, and machine learning. Currently pursuing a Master's in
          Information Systems at Northeastern University.
        </p>
      </div>
    </section>
  );
};

export default Hero;
