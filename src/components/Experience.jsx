import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Burmester & Vogel",
      location: "Cambridge, MA",
      period: "Jan 2024 - Aug 2024",
      points: [
        "Implemented over 5 API integrations and 10 UI components using PHP, Laravel, MySQL, and Vue.js",
        "Engineered seamless API integrations between HubSpot, Salesforce, QuickBooks, ESRI",
        "Developed a scalable BI app using Salesforce CLI, Apex, and REST APIs",
        "Integrated Microsoft Graph API and created a Slack app with Bolt framework",
      ],
    },
    {
      title: "Solutions Developer and Analyst",
      company: "Essence Global",
      location: "Gurgaon, India",
      period: "Jan 2021 - Jun 2022",
      points: [
        "Analyzed large-scale media advertising datasets for clients including Google and Scoot",
        "Deployed machine learning models improving data integrity efficiency by 30%",
        "Streamlined bug resolution by 50% using Jira with Scrum methodologies",
        "Established a Confluence-based knowledge repository",
      ],
    },
    {
      title: "Data Solutions Intern",
      company: "Delhivery Logistics",
      location: "Gurgaon, India",
      period: "Dec 2019 - Apr 2020",
      points: [
        "Conducted supply chain data analysis using SQL on 10,000+ records",
        "Created custom dashboards using Google Maps API",
        "Designed trend dashboards for data-driven insights",
        "Reduced pricing model errors by 15%",
      ],
    },
    {
      title: "Summer Intern",
      company: "Delhivery Logistics",
      location: "Gurgaon, India",
      period: "May 2019 - Jul 2019",
      points: [
        "Led automation of partner payment interface",
        "Managed supply pricing database",
        "Supervised intern team and ensured project delivery",
      ],
    },
    {
      title: "Research Intern",
      company: "Georgia Tech",
      location: "Atlanta, GA",
      period: "Jun 2018 - Jul 2018",
      points: [
        "Designed database system with optimized indexing",
        "Integrated IoT tracking with RFID tags and Bluetooth",
        "Built RESTful API for secure data input from IoT devices",
        "Conducted machine learning experiments for predictive maintenance",
      ],
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
