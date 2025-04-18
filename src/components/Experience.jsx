import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Burmester & Vogel",
      location: "Cambridge, MA",
      period: "Jan 2024 - Aug 2024",
      type: "Internship",
      logo: import.meta.env.BASE_URL + "images/bv.jpg",
      color: "from-blue-400 to-blue-600",
      points: [
        "Developing and maintaining cloud-based software solutions",
        "Collaborating with cross-functional teams on system architecture",
        "Implementing new features and optimizing existing codebase",
        "Working with modern tech stack including cloud technologies",
      ],
      technologies: ["AWS", "React", "Node.js", "TypeScript", "Docker"],
    },
    {
      title: "Solutions Developer and Analyst",
      company: "Essence Global",
      location: "Gurgaon, India",
      period: "Jan 2021 - Jun 2022",
      type: "Full-time",
      logo: import.meta.env.BASE_URL + "images/essence.jpg",
      color: "from-purple-400 to-purple-600",
      points: [
        "Led development of data analytics solutions for major clients",
        "Optimized reporting workflows saving 20+ hours weekly",
        "Managed end-to-end implementation of automation projects",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["Python", "SQL", "Power BI", "Azure", "JavaScript"],
    },
    {
      title: "Web Dev and Data Solutions Internship",
      company: "Delhivery Logistics",
      location: "Gurgaon, India",
      period: "Dec 2019 - Apr 2020",
      type: "Internship",
      logo: import.meta.env.BASE_URL + "images/delhivery.jpg",
      color: "from-green-400 to-green-600",
      points: [
        "Developed web applications for logistics management",
        "Implemented data analysis solutions for delivery optimization",
        "Created dashboards for real-time performance monitoring",
        "Collaborated with logistics teams to improve systems",
      ],
      technologies: ["React", "Python", "MongoDB", "Express", "Node.js"],
    },
    {
      title: "Web Dev and Data Solutions (Summer Intern)",
      company: "Delhivery Logistics",
      location: "Gurgaon, India",
      period: "May 2019 - Jul 2019",
      type: "Internship",
      logo: import.meta.env.BASE_URL + "images/delhivery.jpg",
      color: "from-teal-400 to-teal-600",
      points: [
        "Built data visualization tools for logistics operations",
        "Automated reporting processes using Python scripts",
        "Developed web interfaces for data management",
        "Participated in agile development processes",
      ],
      technologies: ["Python", "D3.js", "SQL", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Research (Equipment & Lab Automation)",
      company: "Georgia Tech",
      location: "Atlanta, GA",
      period: "Jun 2018 - Jul 2018",
      type: "Research",
      logo: import.meta.env.BASE_URL + "images/gt.jpg",
      color: "from-yellow-400 to-yellow-600",
      points: [
        "Automated laboratory equipment using Python",
        "Developed data collection and analysis tools",
        "Created documentation for lab procedures",
        "Collaborated with research team on experiments",
      ],
      technologies: ["Python", "LabVIEW", "MATLAB", "Arduino", "Raspberry Pi"],
    },
  ];

  return (
    <section
      id="experience"
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
            Professional Journey
          </h2>
          <p className="text-gray-400 text-lg">
            Building impactful solutions across different domains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, shown on lg screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-8 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative z-10 mb-16 last:mb-0 
                lg:w-[calc(50%-2rem)] 
                ${index % 2 === 0 ? "lg:ml-auto lg:pl-8" : "lg:mr-auto lg:pr-8"}
                ml-12 lg:ml-[unset]
                px-4 lg:px-0
              `}
            >
              {/* Timeline Dot - Desktop */}
              <div
                className={`hidden lg:block absolute top-0 lg:top-1/2 transform
                ${
                  index % 2 === 0
                    ? "left-0 lg:-translate-x-[1.65rem]"
                    : "right-0 lg:translate-x-[1.65rem]"
                } 
                lg:-translate-y-1/2 z-20`}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Timeline Dot - Mobile */}
              <div className="lg:hidden absolute top-0 left-0 transform -translate-x-[2.65rem] translate-y-1/2 z-20">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl group">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10"
                      />
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-1">
                      {exp.company} • {exp.location}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-gray-500">{exp.period}</span>
                      <span className="text-gray-600">•</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1">▹</span>
                        <p className="text-gray-300">{point}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 text-white`}
                        >
                          {tech}
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

export default Experience;
