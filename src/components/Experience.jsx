import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Burmester & Vogel",
      location: "Cambridge, MA",
      period: "Jan 2024 - Aug 2024",
      points: [],
    },
    {
      title: "Solutions Developer and Analyst",
      company: "Essence Global",
      location: "Gurgaon, India",
      period: "Jan 2021 - Jun 2022",
      points: [],
    },
    {
      title: "Web Dev and Data Solutions Internship",
      company: "Delhivery Logistics",
      location: "Gurgaon, India",
      period: "Dec 2019 - Apr 2020",
      points: [],
    },
    {
      title: "Web Dev and Data Solutions (Summer Intern)",
      company: "Delhivery Logistics",
      location: "Gurgaon, India",
      period: "May 2019 - Jul 2019",
      points: [],
    },
    {
      title: "Research (Equipment & Lab Automation)",
      company: "Georgia Tech",
      location: "Atlanta, GA",
      period: "Jun 2018 - Jul 2018",
      points: [],
    },
  ];

  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="pt-6 w-full mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">
          Experience
        </h2>
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-300" />

          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start">
              {/* Timeline circle */}
              <div className="relative flex-shrink-0 w-14 pt-3">
                <div className="absolute left-3.5 w-7 h-7 bg-blue-600 rounded-full border-4 border-white shadow z-10" />
              </div>

              {/* Experience card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex-grow -ml-2">
                <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                <p className="text-gray-600 mb-2">
                  {exp.company} - {exp.location}
                </p>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
