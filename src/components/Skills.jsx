import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      color: "from-indigo-400 to-blue-600",
      shadowColor: "shadow-indigo-500/20",
      skills: [
        { name: "Java", level: 90, years: 4 },
        { name: "JavaScript", level: 85, years: 3 },
        { name: "Python", level: 80, years: 3 },
        { name: "C", level: 75, years: 2 },
        { name: "Swift", level: 70, years: 2 },
        { name: "Apex", level: 75, years: 2 },
        { name: "PHP", level: 70, years: 2 },
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      color: "from-emerald-400 to-teal-600",
      shadowColor: "shadow-emerald-500/20",
      skills: [
        { name: "MongoDB", level: 85, years: 3 },
        { name: "MySQL", level: 80, years: 3 },
      ],
    },
    {
      title: "Web",
      icon: "🌐",
      color: "from-violet-400 to-purple-600",
      shadowColor: "shadow-violet-500/20",
      skills: [
        { name: "MERN Stack", level: 85, years: 3 },
        { name: "HTML/CSS", level: 90, years: 4 },
        { name: "ReactJS", level: 85, years: 3 },
        { name: "Redux", level: 80, years: 2 },
        { name: "React Native", level: 75, years: 2 },
        { name: "Spring Boot", level: 80, years: 2 },
        { name: "Spring MVC", level: 75, years: 2 },
        { name: "Vue.js", level: 70, years: 1 },
      ],
    },
    {
      title: "Analytics",
      icon: "📊",
      color: "from-rose-400 to-pink-600",
      shadowColor: "shadow-rose-500/20",
      skills: [
        { name: "Google Analytics", level: 80, years: 2 },
        { name: "Power BI", level: 85, years: 2 },
        { name: "Pandas", level: 80, years: 2 },
        { name: "Matplotlib", level: 75, years: 2 },
        { name: "Salesforce Analytics", level: 75, years: 2 },
        { name: "MS Fabric", level: 70, years: 1 },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      color: "from-amber-400 to-orange-600",
      shadowColor: "shadow-amber-500/20",
      skills: [
        { name: "Git", level: 90, years: 4 },
        { name: "VS Code", level: 90, years: 4 },
        { name: "Jupyter", level: 85, years: 3 },
        { name: "Postman", level: 85, years: 3 },
        { name: "JIRA", level: 80, years: 2 },
        { name: "Confluence", level: 80, years: 2 },
        { name: "Salesforce CLI", level: 75, years: 2 },
      ],
    },
  ];

  const HexagonCard = ({ category, index }) => {
    const isSelected = selectedCategory?.title === category.title;

    return (
      <div className={`hexagon-wrapper ${index % 2 === 0 ? "even" : "odd"}`}>
        <div
          className={`hexagon cursor-pointer transform hover:scale-105 transition-all duration-300
            bg-gradient-to-br ${category.color} ${
            category.shadowColor
          } shadow-lg
            ${isSelected ? "ring-2 ring-white/20 scale-105" : ""}`}
          onClick={() => setSelectedCategory(isSelected ? null : category)}
        >
          <div className="hexagon-content">
            <span className="text-4xl mb-2">{category.icon}</span>
            <h3 className="text-white font-bold text-lg">{category.title}</h3>
            <p className="text-white/80 text-sm">
              {category.skills.length} Skills
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.section
      className="py-20 bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="skills"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0l25 25-25 25-25-25z'/%3E%3Cpath d='M0 50l25 25-25 25v-50z'/%3E%3Cpath d='M100 50l-25 25 25 25v-50z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Click on a category to explore my skills in detail
          </motion.p>
        </div>

        <motion.div
          className="hexagon-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <HexagonCard category={category} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 lg:mt-16 mx-4 lg:mx-auto max-w-4xl bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center">
                  <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">
                    {selectedCategory.icon}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedCategory.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-400 hover:text-white transition-colors ml-auto sm:ml-0"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {selectedCategory.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="text-sm sm:text-base text-white font-medium group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 ml-2">
                          {skill.years} {skill.years === 1 ? "year" : "years"}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${selectedCategory.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .hexagon-grid {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
          max-width: 100%;
          margin: 0 auto;
          padding: 1rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          scroll-padding: 1rem;
        }

        .hexagon-grid::-webkit-scrollbar {
          display: none;
        }

        .hexagon-wrapper {
          flex: 0 0 auto;
          width: 160px;
          padding-top: 184px;
          position: relative;
          scroll-snap-align: start;
        }

        @media (min-width: 640px) {
          .hexagon-grid {
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .hexagon-wrapper {
            width: 180px;
            padding-top: 207px;
          }
        }

        @media (min-width: 1024px) {
          .hexagon-grid {
            justify-content: center;
            gap: 2rem;
            padding: 2rem;
            max-width: 1400px;
          }

          .hexagon-wrapper {
            width: 200px;
            padding-top: 230px;
          }
        }

        .hexagon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }

        .hexagon-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
          padding: 0.5rem;
        }

        @media (min-width: 640px) {
          .hexagon-content {
            padding: 1rem;
          }
        }

        .even,
        .odd {
          transform: none;
        }
      `}</style>
    </motion.section>
  );
};

export default Skills;
