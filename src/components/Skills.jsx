import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 200; // Adjust this value based on your needs
      const newScrollPosition =
        container.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

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
      className="py-20 bg-slate-200 dark:bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="skills"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 0l25 25-25 25-25-25z'/%3E%3Cpath d='M0 50l25 25-25 25v-50z'/%3E%3Cpath d='M100 50l-25 25 25 25v-50z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Click on a category to explore my skills in detail
          </motion.p>
        </div>

        {/* Navigation Buttons - Only visible on mobile */}
        <div className="flex justify-between items-center mb-8 lg:hidden">
          <motion.button
            onClick={() => handleScroll("left")}
            className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={() => handleScroll("right")}
            className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight size={24} />
          </motion.button>
        </div>

        <motion.div
          ref={scrollContainerRef}
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
              className="mt-16 bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700/50 shadow-lg"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{selectedCategory.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedCategory.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <span className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                          {skill.years} {skill.years === 1 ? "year" : "years"}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
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
          justify-content: center;
          align-items: center;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 2rem;
          scroll-behavior: smooth;
        }

        .hexagon-grid::-webkit-scrollbar {
          display: none;
        }

        .hexagon-wrapper {
          flex: 0 0 200px;
          width: 200px;
          padding-top: 230px;
          position: relative;
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
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .hexagon-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
          padding: 1rem;
          color: white;
        }

        .even,
        .odd {
          transform: none;
        }

        @media (max-width: 1200px) {
          .hexagon-wrapper {
            flex: 0 0 180px;
            width: 180px;
            padding-top: 207px;
          }
        }

        @media (max-width: 768px) {
          .hexagon-grid {
            justify-content: flex-start;
            padding-left: 1rem;
            scroll-padding-left: 1rem;
            scroll-snap-type: x mandatory;
          }

          .hexagon-wrapper {
            flex: 0 0 150px;
            width: 150px;
            padding-top: 173px;
            scroll-snap-align: start;
          }

          .hexagon-content {
            padding: 0.5rem;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Skills;
