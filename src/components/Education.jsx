import React from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import DisplayHeading from "./ui/DisplayHeading";
import TagList from "./ui/TagList";

const education = [
  {
    school: "Northeastern University",
    degree: "Master of Science, Information Systems",
    date: "Dec 2024",
    location: "Boston, Massachusetts",
    courses: [
      "Application Engineering Development",
      "Web Design and User Experience",
      "Data Science Engineering",
      "Network Structures and Cloud Computing",
    ],
    logo: import.meta.env.BASE_URL + "images/northeastern-logo.svg",
  },
  {
    school: "Bennett University",
    degree: "Bachelor of Technology, Computer Science Engineering",
    date: "Jun 2020",
    location: "Greater Noida, India",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Engineering",
    ],
    logo: import.meta.env.BASE_URL + "images/bennett-logo.png",
  },
];

const Education = () => (
  <Section id="education" label="education" ringPosition="left">
    <DisplayHeading
      lines={[{ text: "Education" }]}
      size="text-[clamp(2.5rem,9vw,5.5rem)]"
      className="mb-12"
    />

    <div className="border-t border-line">
      {education.map((edu, index) => (
        <motion.div
          key={edu.school}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
          className="group border-b border-line transition-colors duration-200 hover:bg-paper hover:text-paper-ink"
        >
          <div className="grid grid-cols-1 gap-3 px-1 py-6 md:grid-cols-[140px_1.6fr_1fr] md:items-start md:gap-6 md:px-4">
            <p className="font-mono text-xs text-muted group-hover:text-paper-ink/70">
              {edu.date}
            </p>

            <div className="flex items-start gap-3">
              <img
                src={edu.logo}
                alt=""
                className="h-12 w-12 shrink-0 rounded-md bg-white object-contain p-1.5"
              />
              <div>
                <p className="font-mono text-sm font-bold">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-muted group-hover:text-paper-ink/70">
                  {edu.degree}
                </p>
                <TagList
                  items={edu.courses}
                  className="mt-2 group-hover:!text-paper-ink/70"
                />
              </div>
            </div>

            <p className="font-mono text-xs text-muted group-hover:text-paper-ink/70">
              {edu.location}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Education;
