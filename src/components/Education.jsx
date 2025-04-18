import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      school: "Northeastern University",
      degree: "Master of Science, Information Systems",
      date: "Dec 2024",
      location: "Boston, Massachusetts",
      gpa: "3.8/4.0",
      courses: [
        "Application Engineering Development",
        "Web Design and User Experience",
        "Data Science Engineering",
        "Network Structures and Cloud Computing",
      ],
      logo: import.meta.env.BASE_URL + "images/northeastern-logo.svg",
    },
    {
      school: "Bennett University",
      degree: "Bachelor of Technology, Computer Science Engineering",
      date: "Jun 2020",
      location: "Greater Noida, India",
      gpa: "3.7/4.0",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
      ],
      logo: import.meta.env.BASE_URL + "images/bennett-logo.png",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Educational Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
            Building a strong foundation in technology and innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, shown on lg screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-8 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative z-10 mb-16 last:mb-0 
                lg:w-[calc(50%-2rem)] 
                ${index % 2 === 0 ? "lg:ml-auto lg:pl-8" : "lg:mr-auto lg:pr-8"}
                ml-12 lg:ml-[unset]
                px-4 lg:px-0
              `}
            >
              {/* Timeline Dot - Desktop */}
              <div className="hidden lg:block absolute top-0 left-0 lg:top-1/2 lg:left-0 transform lg:-translate-x-[1.65rem] lg:-translate-y-1/2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900" />
              </div>

              {/* Timeline Dot - Mobile */}
              <div className="lg:hidden absolute top-0 left-0 transform -translate-x-[2.65rem] translate-y-1/2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900" />
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                      {edu.location}
                    </p>
                  </div>
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg bg-white/10 p-2"
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1 text-sm sm:text-base">
                      <span className="text-gray-400">{edu.date}</span>
                      <span className="text-gray-400 hidden sm:inline">|</span>
                      <span className="text-gray-400">GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Courses
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-500/10 text-blue-300 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
