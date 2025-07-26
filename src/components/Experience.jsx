import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Project Lead / AI & Software Engineer",
      company: "Ipser Lab",
      location: "Boston, MA",
      period: "Mar 2025 – Present",
      logo: import.meta.env.BASE_URL + "images/ipserlab.jpeg",
      color: "from-indigo-400 to-indigo-600",

      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "Vite",
        "OpenAI",
        "RAG",
        "Jest",
        "Playwright",
        "GitHub Actions",
      ],
    },
    {
      title: "Software Engineer",
      company: "Burmester & Vogel",
      location: "Cambridge, MA",
      period: "Jan 2024 - Aug 2024",
      logo: import.meta.env.BASE_URL + "images/bv.jpg",
      color: "from-blue-400 to-blue-600",

      technologies: ["AWS", "React", "Node.js", "TypeScript", "Docker"],
    },
    {
      title: "Solutions Developer and Analyst",
      company: "Essence Global",
      location: "Gurgaon, India",
      period: "Jan 2021 - Jun 2022",
      logo: import.meta.env.BASE_URL + "images/essence.jpg",
      color: "from-purple-400 to-purple-600",

      technologies: ["Python", "SQL", "Power BI", "Azure", "JavaScript"],
    },
    {
      title: "Web Dev and Data Solutions Internship",
      company: "Delhivery Logistics",
      location: "Gurgaon, India",
      period: "Dec 2019 - Apr 2020",
      logo: import.meta.env.BASE_URL + "images/delhivery.jpg",
      color: "from-green-400 to-green-600",

      technologies: ["React", "Python", "MongoDB", "Express", "Node.js"],
    },
    {
      title: "Web Dev and Data Solutions (Summer Intern)",
      company: "Delhivery Logistics",
      location: "Gurgaon, India",
      period: "May 2019 - Jul 2019",
      logo: import.meta.env.BASE_URL + "images/delhivery.jpg",
      color: "from-teal-400 to-teal-600",

      technologies: ["Python", "D3.js", "SQL", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Research (Equipment & Lab Automation)",
      company: "Georgia Tech",
      location: "Atlanta, GA",
      period: "Jun 2018 - Jul 2018",
      logo: import.meta.env.BASE_URL + "images/gt.jpg",
      color: "from-yellow-400 to-yellow-600",
      technologies: ["Python", "LabVIEW", "MATLAB", "Arduino", "Raspberry Pi"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-slate-200 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto px-4">
            Building innovative solutions and leading technical initiatives
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
                lg:-translate-y-1/2`}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-200 dark:border-gray-900" />
              </div>

              {/* Timeline Dot - Mobile */}
              <div className="lg:hidden absolute top-0 left-0 transform -translate-x-[2.65rem] translate-y-1/2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-200 dark:border-gray-900" />
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
                      {exp.location}
                    </p>
                  </div>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg bg-white dark:bg-gray-700/50 p-2"
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1 text-sm sm:text-base">
                      <span className="text-gray-600 dark:text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="pt-4">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full"
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
