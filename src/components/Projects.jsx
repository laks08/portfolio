import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FiGithub, FiPause, FiPlay, FiExternalLink } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <motion.button
      className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </motion.button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <motion.button
      className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </motion.button>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  // Check if device is mobile on component mount
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const projects = [
    {
      title: "AI-Powered Job Application Manager",
      description:
        "Built a Java-based Job Application Manager with JavaFX and Scene Builder, featuring advanced search and ChatGPT integration for resume optimization.",
      extendedDescription:
        "Designed to streamline the job application process, this tool leverages the OpenAI API to extract key job description keywords and provide tailored resume enhancements, significantly improving candidate matching.",
      tags: ["Java", "JavaFX", "ChatGPT", "OpenAI API", "Resume Optimization"],
      image: import.meta.env.BASE_URL + "images/project-img/job-app.jpeg",
      link: "https://github.com/laks08/ai-job-app-manager",
      showProjectLink: true,
      showDemoLink: false,
    },
    {
      title: "Community Food Ordering Platform",
      description:
        "Developed a React-based platform using the MERN stack with RESTful API integration for efficient food ordering.",
      extendedDescription:
        "This application offers a seamless food ordering experience by integrating Express, MongoDB, and Node.js with a modern React UI enhanced by Tailwind CSS, SASS, and Chakra UI components. Its design prioritizes scalability and user-centric features.",
      tags: [
        "Next.js",
        "MERN",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Chakra UI",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/mealtrain.jpg",
      link: "https://github.com/laks08/Meal-Train-Food-Platform",
      showProjectLink: true,
      showDemoLink: false,
      demoLink: "https://mealtrain-demo.com",
    },
    {
      title: "Business Intelligence Dashboard",
      description:
        "Implemented a robust BI dashboard using Power BI, Salesforce API, and REST APIs to streamline data reporting.",
      extendedDescription:
        "This dashboard consolidates data from multiple sources into dynamic visualizations, enhancing client engagement and reducing reporting hours. Its integration of custom API calls provides real-time insights for strategic decision-making.",
      tags: [
        "Power BI",
        "Salesforce API",
        "REST APIs",
        "Dashboard",
        "Business Intelligence",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/bi-dash.jpg",
      link: "https://github.com",
      showProjectLink: false,
      showDemoLink: false,
    },
    {
      title: "Predictive Analytics Engine",
      description:
        "Developed a machine learning tool using Python libraries to forecast trends and optimize data integrity.",
      extendedDescription:
        "Leveraging Scikit-learn, Pandas, and Matplotlib, this engine analyzes large datasets to predict trends and identify anomalies, thereby supporting data-driven decision-making and operational efficiency.",
      tags: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Matplotlib",
        "Machine Learning",
        "Predictive Analytics",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/pre-analysis.jpg",
      link: "https://github.com",
      showProjectLink: true,
      showDemoLink: false,
    },
    {
      title: "Signal Clone App",
      description:
        "A fully functional clone of the Signal messaging platform built with React Native and Expo.",
      extendedDescription:
        "This mobile app emulates core Signal functionalities including one-click OAuth login, real-time messaging, and integration of multiple social logins. It serves as a strong demonstration of mobile app development using modern frameworks.",
      tags: ["React Native", "Expo", "OAuth", "Firebase", "Mobile App"],
      image: import.meta.env.BASE_URL + "images/project-img/signal.jpg",
      link: "https://github.com/laks08/Signal-Clone-React-Native",
      showProjectLink: true,
      showDemoLink: false,
    },
    {
      title: "Uber Clone App",
      description:
        "Developed a ride-sharing application clone with React Native, replicating Uber's core functionalities.",
      extendedDescription:
        "Featuring ride booking, real-time tracking, and payment processing, this app is built with React Native, Tailwind CSS, and React Native Navigation. The integration with the Google Maps API adds precise location-based services for an authentic ride-sharing experience.",
      tags: [
        "React Native",
        "Tailwind CSS",
        "React Native Navigation",
        "Google Maps API",
        "Ride-sharing",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/uber.jpg",
      link: "https://github.com/laks08/Uber-Clone-React-Native",
      showProjectLink: true,
      showDemoLink: false,
    },
    {
      title: "Swift ToDo Manager",
      description:
        "A cross-platform to-do list application for iOS developed in Swift.",
      extendedDescription:
        "Utilizing Swift for persistent storage, this task manager supports custom reminders and notifications, ensuring seamless task management and organization.",
      tags: ["Swift", "iOS", "Task Management"],
      image: import.meta.env.BASE_URL + "images/project-img/todo.jpg",
      link: "https://github.com/laks08/Swift-Project-ToDo",
      showProjectLink: true,
      showDemoLink: false,
    },
    {
      title: "React Meetups Organizer",
      description:
        "A React-based event management platform for organizing meetups.",
      extendedDescription:
        "This tool allows users to create, join, and manage events with real-time updates. Its intuitive and has responsive interface. Simple but effective, it showcases the power of React for dynamic web applications.",
      tags: ["React", "Event Management", "Real-time", "JavaScript"],
      image: import.meta.env.BASE_URL + "images/project-img/meetups.jpg",
      link: "https://github.com/laks08/react-meetups",
      showProjectLink: true,
      showDemoLink: false,
    },
    {
      title: "Currency Converter",
      description:
        "A real-time currency conversion app built with React, TypeScript, and Chakra UI components library.",
      extendedDescription:
        "Fetching live exchange rates via API, this application supports over 150 currencies. Offers a clean, responsive interface ideal for quick financial calculations.",
      tags: [
        "React",
        "TypeScript",
        "Chakra UI",
        "API Integration",
        "Currency Conversion",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/currency.jpg",
      link: "https://github.com/laks08/React-CurrencyConverter",
      showProjectLink: true,
      showDemoLink: false,
    },
    {
      title: "Flashcards App",
      description:
        "An interactive flashcard application built with React to aid in exam preparation.",
      extendedDescription:
        "This application allows users to create, edit, and practice with flashcards. With a dedicated quiz mode and dynamic review features, it supports effective study sessions using a simple interface styled with Bootstrap and custom CSS.",
      tags: [
        "React",
        "JavaScript",
        "Bootstrap",
        "Flashcards",
        "Study App",
        "Axios",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/flash-card.jpg",
      link: "https://github.com/laks08/React-Flashcard",
      showProjectLink: true,
      showDemoLink: false,
    },
    {
      title: "Grocery Shopping Platform",
      description:
        "A Spring Boot based backend system for a grocery shopping platform connecting local shopkeepers and customers.",
      extendedDescription:
        "Built on a service-oriented architecture with Spring Boot, Spring JPA, and RESTful APIs, this project supports multiple sub-applications for admins, shop owners, and end-users. It demonstrates a scalable e-commerce solution with robust backend integration.",
      tags: ["Spring Boot", "Spring JPA", "REST API", "Grocery", "Backend"],
      image: import.meta.env.BASE_URL + "images/project-img/shopping.jpg",
      link: "https://github.com/laks08/SpringBoot-Project-Grocery",
      showProjectLink: true,
      showDemoLink: false,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isAutoPlaying && !isHovered,
    autoplaySpeed: 3000,
    prevArrow: <></>,
    nextArrow: <></>,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePlayPause = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      sliderRef.current?.slickPlay();
    } else {
      sliderRef.current?.slickPause();
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isAutoPlaying) {
      sliderRef.current?.slickPause();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isAutoPlaying) {
      sliderRef.current?.slickPlay();
    }
  };

  // Handle card click/tap for mobile devices
  const handleCardClick = (index) => {
    if (isMobile) {
      setHoveredIndex(hoveredIndex === index ? null : index);
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      id="projects"
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
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my passion for building
            innovative solutions
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <motion.button
            onClick={handlePlayPause}
            className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying && !isHovered ? (
              <FiPause size={16} />
            ) : (
              <FiPlay size={16} />
            )}
            <span>{isAutoPlaying && !isHovered ? "Pause" : "Play"}</span>
          </motion.button>

          <div className="flex items-center gap-4">
            <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>

        <div
          className="projects-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <motion.div
                  className={`group relative overflow-visible transition-all duration-300 ${
                    hoveredIndex === index ? "z-20" : "z-10"
                  }`}
                  onHoverStart={() => !isMobile && setHoveredIndex(index)}
                  onHoverEnd={() => !isMobile && setHoveredIndex(null)}
                  onClick={() => handleCardClick(index)}
                >
                  <motion.div
                    layout
                    className="relative rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 h-[550px]"
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-60" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <motion.div layout className="p-6">
                      <motion.h3
                        layout
                        className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p layout className="text-gray-400 text-sm mb-4">
                        {hoveredIndex === index
                          ? project.extendedDescription
                          : project.description}
                      </motion.p>

                      {/* Tags */}
                      <motion.div layout className="flex flex-wrap gap-2 mb-4">
                        {(hoveredIndex === index
                          ? project.tags
                          : project.tags.slice(0, 4)
                        ).map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            layout
                            className="px-2 py-1 text-xs rounded-full text-blue-300 bg-blue-900/30 border border-blue-800/50"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                        {hoveredIndex !== index && project.tags.length > 4 && (
                          <span className="text-gray-400 text-xs">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </motion.div>

                      {/* Links */}
                      <motion.div layout className="flex items-center gap-2">
                        {project.showProjectLink && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/30 transition-colors text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
                          >
                            <FiGithub size={16} />
                            <span>View Project</span>
                          </motion.a>
                        )}
                        {project.showDemoLink && (
                          <motion.a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 bg-rose-600/20 text-rose-400 rounded-full hover:bg-rose-600/30 transition-colors text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
                          >
                            <FiExternalLink size={16} />
                            <span>Demo</span>
                          </motion.a>
                        )}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .projects-carousel .slick-list {
          overflow: visible !important;
          margin: 0 -1rem;
        }
        .projects-carousel .slick-track {
          display: flex !important;
          gap: 1rem;
        }
        .projects-carousel .slick-slide {
          opacity: 0.5;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }
        .projects-carousel .slick-slide.slick-active {
          opacity: 1;
          transform: scale(1);
        }
        .projects-carousel .slick-slide > div {
          height: 100%;
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .projects-carousel .slick-slide {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
