import React from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import DisplayHeading from "./ui/DisplayHeading";
import TagList from "./ui/TagList";

const experiences = [
  {
    title: "AI Software Engineer & Product Owner",
    company: "Aerocode",
    location: "New Delhi, India",
    period: "Apr 2026 – Present",
    logo: import.meta.env.BASE_URL + "images/aerocode_logo.jpeg",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "RAG",
      "Multi-agent",
      "FastAPI",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Software Engineer, AI Systems",
    company: "Ipser Lab",
    location: "Boston, MA",
    period: "Mar 2025 – Feb 2026",
    logo: import.meta.env.BASE_URL + "images/ipserlab.jpeg",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Vite",
      "OpenAI",
      "RAG",
      "Jest",
      "Playwright",
      "GitHub Actions",
    ],
  },
  {
    title: "Software Engineer",
    company: "Burmester & Vogel",
    location: "Cambridge, MA",
    period: "Jan 2024 – Aug 2024",
    logo: import.meta.env.BASE_URL + "images/bv.jpg",
    technologies: ["AWS", "React", "Node.js", "TypeScript", "Docker"],
  },
  {
    title: "Solutions Developer and Analyst",
    company: "Essence Global",
    location: "Gurgaon, India",
    period: "Jan 2021 – Jun 2022",
    logo: import.meta.env.BASE_URL + "images/essence.jpg",
    technologies: ["Python", "SQL", "Power BI", "Azure", "JavaScript"],
  },
  {
    title: "Web Dev and Data Solutions Internship",
    company: "Delhivery Logistics",
    location: "Gurgaon, India",
    period: "Dec 2019 – Apr 2020",
    logo: import.meta.env.BASE_URL + "images/delhivery.jpg",
    technologies: ["React", "Python", "MongoDB", "Express", "Node.js"],
  },
  {
    title: "Web Dev and Data Solutions (Summer Intern)",
    company: "Delhivery Logistics",
    location: "Gurgaon, India",
    period: "May 2019 – Jul 2019",
    logo: import.meta.env.BASE_URL + "images/delhivery.jpg",
    technologies: ["Python", "D3.js", "SQL", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Research (Equipment & Lab Automation)",
    company: "Georgia Tech",
    location: "Atlanta, GA",
    period: "Jun 2018 – Jul 2018",
    logo: import.meta.env.BASE_URL + "images/gt.jpg",
    technologies: ["Python", "LabVIEW", "MATLAB", "Arduino", "Raspberry Pi"],
  },
];

const Experience = () => (
  <Section id="experience" label="experience" ringPosition="right">
    <div className="mb-12 flex items-end justify-between gap-6">
      <DisplayHeading lines={[{ text: "Work" }]} size="text-[clamp(3rem,12vw,7rem)]" />
      <p className="hidden shrink-0 pb-3 text-right font-mono text-xs text-muted sm:block">
        experience
        <br />
        5+ years
      </p>
    </div>

    <div className="border-t border-line">
      {experiences.map((exp, index) => {
        const highlighted = index === 0;
        return (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: Math.min(index, 4) * 0.05 }}
            className={`border-b border-line ${
              highlighted ? "bg-paper text-paper-ink" : ""
            }`}
          >
            <div className="grid grid-cols-1 gap-3 px-1 py-6 md:grid-cols-[140px_1.1fr_1.3fr_1.4fr] md:items-baseline md:gap-6 md:px-4">
              <p
                className={`font-mono text-xs ${
                  highlighted ? "text-paper-ink/70" : "text-muted"
                }`}
              >
                {exp.period}
              </p>

              <div className="flex items-center gap-2">
                <img
                  src={exp.logo}
                  alt=""
                  className={`h-5 w-5 shrink-0 rounded object-contain ${
                    highlighted ? "" : "grayscale"
                  }`}
                />
                <p className="font-mono text-sm font-bold">{exp.company}</p>
              </div>

              <p className="font-mono text-sm">{exp.title}</p>

              <TagList
                items={exp.technologies}
                className={highlighted ? "!text-paper-ink/70" : ""}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);

export default Experience;
