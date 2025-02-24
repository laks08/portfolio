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
      title: "Meal Train",
      description:
        "Developed a React-based Community Food Ordering Platform with RESTful API routes, Express, and MongoDB. Enhanced UX with Tailwind, SASS, and Chakra UI components.",
      image: import.meta.env.BASE_URL + "images/project-img/mealtrain.jpg",
    },
    {
      title: "Job Application Manager",
      description:
        "Built a Java-based Job Application Manager using JavaFX and Scene Builder. Implemented advanced search features and integrated ChatGPT through OpenAI API.",
      image: import.meta.env.BASE_URL + "images/project-img/job-app.jpeg",
    },
    {
      title: "Meal Train",
      description:
        "Developed a React-based Community Food Ordering Platform with RESTful API routes, Express, and MongoDB. Enhanced UX with Tailwind, SASS, and Chakra UI components.",
      image: import.meta.env.BASE_URL + "images/project-img/mealtrain.jpg",
    },
    {
      title: "Job Application Manager",
      description:
        "Built a Java-based Job Application Manager using JavaFX and Scene Builder. Implemented advanced search features and integrated ChatGPT through OpenAI API.",
      image: import.meta.env.BASE_URL + "images/project-img/job-app.jpeg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700">{project.description}</p>
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
