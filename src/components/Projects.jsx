import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-500 p-2 rounded-full shadow-md hover:bg-slate-400"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 z-10 top-1/2 -translate-y-1/2 translate-x-1/2 bg-slate-500 p-2 rounded-full shadow-md hover:bg-slate-400"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
};

const Projects = () => {
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
    },
    {
      title: "Business Intelligence Dashboard",
      description:
        "Implemented a robust BI dashboard using Power BI, Salesforce CLI, and REST APIs to streamline data reporting.",
      extendedDescription:
        "This dashboard consolidates data from multiple sources into dynamic visualizations, enhancing client engagement and reducing reporting hours. Its integration of custom API calls provides real-time insights for strategic decision-making.",
      tags: [
        "Power BI",
        "Salesforce CLI",
        "REST APIs",
        "Dashboard",
        "Business Intelligence",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/bi-dash.jpg",
      link: "#", // Add your external link here
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
      link: "#", // Add your external link here
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
    },
    {
      title: "Uber Clone App",
      description:
        "Developed a ride-sharing application clone with React Native, replicating Uber’s core functionalities.",
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
    },
    {
      title: "Swift ToDo Manager",
      description:
        "A cross-platform to-do list application for iOS, iPad, and Apple Watch developed in Swift.",
      extendedDescription:
        "Utilizing Swift and Realm for persistent storage along with iCloud sync, this task manager supports custom reminders and notifications across Apple devices, ensuring seamless task management and organization.",
      tags: ["Swift", "iOS", "Apple Watch", "Realm", "Task Management"],
      image: import.meta.env.BASE_URL + "images/project-img/todo.jpg",
      link: "https://github.com/laks08/Swift-Project-ToDo",
    },
    {
      title: "React Meetups Organizer",
      description:
        "A React-based event management platform for organizing meetups with real-time Firebase integration.",
      extendedDescription:
        "This tool allows users to create, join, and manage events with real-time updates. Its backend is powered by Firebase, ensuring robust authentication and data management while offering an intuitive, responsive interface.",
      tags: [
        "React",
        "Firebase",
        "Event Management",
        "Real-time",
        "JavaScript",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/meetups.jpg",
      link: "https://github.com/laks08/react-meetups",
    },
    {
      title: "Currency Converter",
      description:
        "A real-time currency conversion app built with React, TypeScript, and Bootstrap.",
      extendedDescription:
        "Fetching live exchange rates via API, this application supports over 150 currencies. Built with Axios for API calls and Moment.js for date handling, it offers a clean, responsive interface ideal for quick financial calculations.",
      tags: [
        "React",
        "TypeScript",
        "Bootstrap",
        "Axios",
        "Currency Conversion",
      ],
      image: import.meta.env.BASE_URL + "images/project-img/currency.jpg",
      link: "https://github.com/laks08/React-CurrencyConverter",
    },
    {
      title: "Flashcards App",
      description:
        "An interactive flashcard application built with React to aid in exam preparation.",
      extendedDescription:
        "This application allows users to create, edit, and practice with flashcards. With a dedicated quiz mode and dynamic review features, it supports effective study sessions using a simple interface styled with Bootstrap and custom CSS.",
      tags: ["React", "JavaScript", "Bootstrap", "Flashcards", "Study App"],
      image: import.meta.env.BASE_URL + "images/project-img/flash-card.jpg",
      link: "https://github.com/laks08/React-Flashcard",
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
    },
  ];

  const settings = {
    dots: false,
    infinite: true, // Changed to false to avoid issues with overflow at the edges
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="pt-6 pb-6 w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">
          Projects
        </h2>
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <div className="project-card bg-white rounded-lg shadow-md overflow-hidden h-[550px] relative">
                  {/* Normal View */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 line-clamp-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Extended View (Shown on Hover) */}
                  <div className="project-card-extended min-h-[550px]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors z-20"
                    >
                      View Project
                    </a>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-600 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {project.extendedDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
