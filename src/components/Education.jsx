import React from "react";

const Education = () => {
  const education = [
    {
      school: "Northeastern University",
      degree: "Master of Science, Information Systems",
      date: "Expected Dec 2024",
    },
    {
      school: "Bennett University",
      degree: "Bachelor of Technology, Computer Science Engineering",
      date: "Jun 2020",
    },
  ];

  return (
    <section id="education" className="py-12 bg-white">
      <div className="pt-6 w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600">{edu.school}</h3>
              <p className="text-gray-700">{edu.degree}</p>
              <p className="text-gray-500">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
