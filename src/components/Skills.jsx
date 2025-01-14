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
        "Google Analytics, Microsoft Power BI, Python (Pandas, Matplotlib), Salesforce Analytics, MS Fabric",
    },
    {
      title: "Tools",
      skills:
        "Git, NetBeans, Jupyter Notebook, VS Code, Postman, Xcode, JIRA, Confluence, Excel, Salesforce CLI",
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-700">{category.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
