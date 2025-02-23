import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: "Java, JavaScript, Python, C, Swift, Apex, PHP",
    },
    {
      title: "Database",
      skills: "MongoDB, MySQL",
    },
    {
      title: "Web Technologies",
      skills:
        "MERN Stack, HTML, CSS, ReactJS, Redux, React Native, Spring Boot, Spring MVC, Vue.js",
    },
    {
      title: "Analytics",
      skills:
        "Google Analytics, Microsoft Power BI, Pandas, Matplotlib, Salesforce Analytics, MS Fabric",
    },
    {
      title: "Tools",
      skills:
        "Git, NetBeans, Jupyter Notebook, VS Code, Postman, Xcode, JIRA, Confluence, Excel, Salesforce CLI",
    },
  ];

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="pt-6 w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md transition transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap">
                {category.skills.split(",").map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold mr-2 mb-2"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
