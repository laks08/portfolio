import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Meal Train",
      description:
        "Developed a React-based Community Food Ordering Platform with RESTful API routes, Express, and MongoDB. Enhanced UX with Tailwind, SASS, and Chakra UI components.",
      image: "/api/placeholder/400/320",
    },
    {
      title: "Job Application Manager",
      description:
        "Built a Java-based Job Application Manager using JavaFX and Scene Builder. Implemented advanced search features and integrated ChatGPT through OpenAI API.",
      image: "/api/placeholder/400/320",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="pt-6 w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
