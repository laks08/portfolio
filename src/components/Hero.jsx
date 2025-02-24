import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Added social media icons

const Hero = () => {
  const profilePic = import.meta.env.BASE_URL + "images/profilepic.jpeg";

  return (
    <section
      id="home"
      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Left: Text */}
        <div className="flex-1 md:text-left text-center mt-6 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lakshya Gupta</h1>
          <p className="text-xl md:text-2xl mb-8">
            Software Engineer &amp; Data Analyst
          </p>
          <p className="text-lg max-w-2xl">
            A passionate professional with expertise in full-stack development,
            data analysis, and machine learning. Graduated with a Master's in
            Information Systems from Northeastern University.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-start mt-4">
            <a
              href="https://www.linkedin.com/in/lakshyagupta-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="text-white" />
            </a>
            <a
              href="https://github.com/laks08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="text-white" />
            </a>
            <a href="mailto:lakshyagupta997@gmail.com">
              <FaEnvelope size={30} className="text-white" />
            </a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Lakshya Gupta"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full mx-auto mb-4 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
