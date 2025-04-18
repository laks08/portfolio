import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const profilePic = import.meta.env.BASE_URL + "images/profilepic.jpeg";

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/lakshyagupta-/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaGithub,
      url: "https://github.com/laks08",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: FaEnvelope,
      url: "mailto:lakshyagupta997@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gray-900"
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-64 sm:h-64 lg:w-96 lg:h-96 mx-auto">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  },
                  scale: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-blue-400/20"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  rotate: {
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                  },
                  scale: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 0.5,
                  },
                }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-blue-300/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  rotate: {
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  },
                  scale: {
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 1,
                  },
                }}
              />
              {/* Profile picture */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <img
                  src={profilePic}
                  alt="Lakshya Gupta"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Name and Title */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="text-blue-400 font-medium mb-2 block">
                  👋 Hi, I'm
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
                  Lakshya Gupta
                </h1>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-400"
              >
                Software Engineer | AI & Data Analyst
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              A passionate professional with expertise in full-stack
              development, data analysis, machine learning, and business
              intelligence tools. Skilled in building scalable applications,
              custom dashboards, and predictive analytics solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 inline-flex items-center group"
              >
                Get in Touch
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-medium hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
