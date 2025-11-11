import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const proficiencyStyles = {
  Expert:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
  Advanced: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200",
  Intermediate:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
};

const skillCategories = [
  {
    title: "Languages & Core Engineering",
    icon: "💻",
    color: "from-indigo-400 to-blue-600",
    shadowColor: "shadow-indigo-500/20",
    tags: ["APIs", "Automation", "Testing", "Microservices"],
    skills: [
      {
        name: "Java",
        strength: "Expert",
        keywords: ["Spring Boot", "Microservices", "REST"],
      },
      {
        name: "Python",
        strength: "Advanced",
        keywords: ["FastAPI", "Data Ops", "Automation"],
      },
      {
        name: "JavaScript & TypeScript",
        strength: "Advanced",
        keywords: ["React", "Node.js", "Tooling"],
      },
      {
        name: "Go",
        strength: "Intermediate",
        keywords: ["Services", "Concurrency", "CLIs"],
      },
      {
        name: "SQL",
        strength: "Expert",
        keywords: ["Query tuning", "Analytics", "ETL"],
      },
      {
        name: "HTML & CSS",
        strength: "Advanced",
        keywords: ["Responsive", "Accessibility", "Tailwind"],
      },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: "🎨",
    color: "from-pink-400 to-rose-600",
    shadowColor: "shadow-rose-500/20",
    tags: ["Design systems", "Performance", "UX flows", "Animations"],
    skills: [
      {
        name: "React",
        strength: "Expert",
        keywords: ["Hooks", "State mgmt", "Testing"],
      },
      {
        name: "Next.js",
        strength: "Advanced",
        keywords: ["SSR", "Routing", "Optimizations"],
      },
      {
        name: "Vue",
        strength: "Intermediate",
        keywords: ["Dashboards", "TypeScript", "Animations"],
      },
      {
        name: "Redux",
        strength: "Advanced",
        keywords: ["State", "Tooling", "Async"],
      },
      {
        name: "React Native",
        strength: "Intermediate",
        keywords: ["Mobile UI", "Expo", "Auth"],
      },
      {
        name: "Vite",
        strength: "Advanced",
        keywords: ["HMR", "Build tools", "DX"],
      },
      {
        name: "Tailwind CSS",
        strength: "Advanced",
        keywords: ["Utility-first", "Responsive", "Design systems"],
      },
      {
        name: "Chakra UI",
        strength: "Advanced",
        keywords: ["Components", "Accessibility", "Themes"],
      },
      {
        name: "Firebase",
        strength: "Intermediate",
        keywords: ["Auth", "Hosting", "Realtime"],
      },
    ],
  },
  {
    title: "Backend & API Platforms",
    icon: "🧩",
    color: "from-violet-400 to-purple-600",
    shadowColor: "shadow-purple-500/20",
    tags: ["Microservices", "CI/CD", "Security", "Integrations"],
    skills: [
      {
        name: "Node.js",
        strength: "Advanced",
        keywords: ["REST APIs", "Tooling", "Workers"],
      },
      {
        name: "Express.js",
        strength: "Advanced",
        keywords: ["Routing", "Middleware", "Auth"],
      },
      {
        name: "FastAPI",
        strength: "Advanced",
        keywords: ["Async IO", "Validation", "Docs"],
      },
      {
        name: "Spring Boot",
        strength: "Advanced",
        keywords: ["JPA", "Batch jobs", "Resilience"],
      },
      {
        name: "LangChain Services",
        strength: "Advanced",
        keywords: ["Tools", "RAG", "Agents"],
      },
      {
        name: "REST Integrations",
        strength: "Expert",
        keywords: ["Salesforce", "HubSpot", "QuickBooks"],
      },
      {
        name: "MCP Servers",
        strength: "Intermediate",
        keywords: ["JSON-RPC", "Tool registry", "Automation"],
      },
      {
        name: "Authentication",
        strength: "Advanced",
        keywords: ["JWT", "OAuth", "Role policies"],
      },
    ],
  },
  {
    title: "Cloud, DevOps & Observability",
    icon: "☁️",
    color: "from-emerald-400 to-teal-600",
    shadowColor: "shadow-teal-500/20",
    tags: ["AWS", "Azure", "Containers", "Monitoring"],
    skills: [
      {
        name: "AWS",
        strength: "Advanced",
        keywords: ["EC2", "S3", "Lambda"],
      },
      {
        name: "Azure",
        strength: "Advanced",
        keywords: ["App Service", "AI Studio", "Functions"],
      },
      {
        name: "Docker",
        strength: "Expert",
        keywords: ["Images", "Compose", "Hardening"],
      },
      {
        name: "Kubernetes",
        strength: "Advanced",
        keywords: ["Workloads", "Helm", "Autoscale"],
      },
      {
        name: "GitHub Actions",
        strength: "Advanced",
        keywords: ["CI/CD", "Caching", "Deploy"],
      },
      {
        name: "GitLab CI",
        strength: "Advanced",
        keywords: ["Pipelines", "Security", "Reviews"],
      },
      {
        name: "Terraform",
        strength: "Intermediate",
        keywords: ["IaC", "Modules", "Environments"],
      },
      {
        name: "Ansible",
        strength: "Intermediate",
        keywords: ["Playbooks", "Provisioning", "Config"],
      },
      {
        name: "Dagster",
        strength: "Intermediate",
        keywords: ["Asset graph", "Orchestration", "Recoveries"],
      },
      {
        name: "Datadog & OpenTelemetry",
        strength: "Advanced",
        keywords: ["Tracing", "Dashboards", "Alerts"],
      },
    ],
  },
  {
    title: "AI, ML & Analytics Enablement",
    icon: "🤖",
    color: "from-blue-400 to-cyan-600",
    shadowColor: "shadow-cyan-500/20",
    tags: ["RAG", "Eval", "Dashboards", "Insights"],
    skills: [
      {
        name: "LangChain",
        strength: "Advanced",
        keywords: ["Agents", "Tools", "Pipelines"],
      },
      {
        name: "LangGraph",
        strength: "Advanced",
        keywords: ["Workflow", "Retries", "Routing"],
      },
      {
        name: "vLLM & Ollama",
        strength: "Intermediate",
        keywords: ["Serving", "Batching", "Deploy"],
      },
      {
        name: "OpenAI API",
        strength: "Advanced",
        keywords: ["Function calling", "Guardrails", "Eval"],
      },
      {
        name: "pgvector & Chroma",
        strength: "Advanced",
        keywords: ["Embeddings", "Ranking", "Hybrid search"],
      },
      {
        name: "FAISS & ElasticSearch",
        strength: "Intermediate",
        keywords: ["Semantic search", "Scale", "Sharding"],
      },
      {
        name: "Scikit-learn",
        strength: "Advanced",
        keywords: ["Modeling", "Metrics", "Pipelines"],
      },
      {
        name: "XGBoost",
        strength: "Advanced",
        keywords: ["Structured data", "Features", "Optimization"],
      },
      {
        name: "Power BI",
        strength: "Advanced",
        keywords: ["KPI modeling", "Row security", "Refresh"],
      },
      {
        name: "Tableau & Looker",
        strength: "Advanced",
        keywords: ["Visuals", "Dashboards", "Stories"],
      },
    ],
  },
  {
    title: "Data Engineering & Storage",
    icon: "🗄️",
    color: "from-amber-400 to-orange-600",
    shadowColor: "shadow-amber-500/20",
    tags: ["ETL", "Warehousing", "Quality", "Lineage"],
    skills: [
      {
        name: "Snowflake",
        strength: "Advanced",
        keywords: ["Marts", "Snowpipe", "Streams"],
      },
      {
        name: "PostgreSQL",
        strength: "Advanced",
        keywords: ["Modeling", "Indexes", "Views"],
      },
      {
        name: "MySQL",
        strength: "Advanced",
        keywords: ["Procedures", "Reporting", "Tuning"],
      },
      {
        name: "MongoDB",
        strength: "Advanced",
        keywords: ["Schemas", "Aggregations", "Ops"],
      },
      {
        name: "dbt",
        strength: "Advanced",
        keywords: ["Models", "Tests", "Docs"],
      },
      {
        name: "Airflow",
        strength: "Advanced",
        keywords: ["Scheduling", "Sensors", "Recovery"],
      },
      {
        name: "Spark & PySpark",
        strength: "Intermediate",
        keywords: ["Batch", "Streaming", "ETL"],
      },
      {
        name: "Kafka",
        strength: "Intermediate",
        keywords: ["Ingest", "Consumers", "Streams"],
      },
      {
        name: "DuckDB",
        strength: "Intermediate",
        keywords: ["Analytics", "Parquet", "Local runs"],
      },
      {
        name: "Great Expectations",
        strength: "Advanced",
        keywords: ["Validation", "Data SLAs", "Alerting"],
      },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  const [showScrollHint, setShowScrollHint] = useState(true);
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

      // Hide scroll hint after user interaction
      setShowScrollHint(false);
    }
  };

  // Handle scroll to hide hint
  const handleContainerScroll = () => {
    setShowScrollHint(false);
  };

  const HexagonCard = ({ category, index }) => {
    const isSelected = selectedCategory?.title === category.title;

    const handleKeyPress = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setSelectedCategory(isSelected ? null : category);
      }
    };

    return (
      <div className={`hexagon-wrapper ${index % 2 === 0 ? "even" : "odd"}`}>
        <div
          className={`hexagon cursor-pointer transform hover:scale-105 transition-all duration-300
            bg-gradient-to-br ${category.color} ${
            category.shadowColor
          } shadow-lg
            ${isSelected ? "ring-2 ring-white/20 scale-105" : ""}
            focus:outline-none focus:ring-2 focus:ring-white/40`}
          onClick={() => setSelectedCategory(isSelected ? null : category)}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          role="button"
          aria-pressed={isSelected}
          aria-label={`${category.title} skills category. ${category.skills.length} skills available.`}
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

        {/* Navigation Buttons and Scroll Hint - Only visible on mobile */}
        <div className="lg:hidden mb-8">
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => handleScroll("left")}
              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll skills left"
            >
              <FiChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={() => handleScroll("right")}
              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll skills right"
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>

          {/* Scroll hint */}
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mt-4"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ← Swipe or use arrows to explore skills →
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          ref={scrollContainerRef}
          className="hexagon-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onScroll={handleContainerScroll}
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
              {selectedCategory?.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedCategory.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-gray-100/70 dark:bg-gray-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedCategory.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700/60 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </p>
                      <span
                        className={`text-xs font-semibold tracking-wide px-3 py-1 rounded-full ${
                          proficiencyStyles[skill.strength] ||
                          proficiencyStyles.Advanced
                        }`}
                      >
                        {skill.strength}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                        >
                          {keyword}
                        </span>
                      ))}
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
          scroll-snap-type: x mandatory;
        }

        .hexagon-grid::-webkit-scrollbar {
          display: none;
        }

        .hexagon-wrapper {
          flex: 0 0 200px;
          width: 200px;
          padding-top: 230px;
          position: relative;
          scroll-snap-align: center;
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
