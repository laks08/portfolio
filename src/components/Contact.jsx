import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import DisplayHeading from "./ui/DisplayHeading";
import PillButton from "./ui/PillButton";
import Chip from "./ui/Chip";

const socialLinks = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/lakshyagupta-/",
    label: "linkedin",
  },
  { icon: FaGithub, url: "https://github.com/laks08", label: "github" },
  { icon: FaEnvelope, url: "mailto:lakshyagupta997@gmail.com", label: "email" },
];

const jumpLinks = ["projects", "skills", "education", "experience"];

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <Section
      id="contact"
      label="contacts"
      labelAlign="right"
      ringPosition="right"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <DisplayHeading
            lines={[{ text: "Lakshya" }, { text: "Gupta" }]}
            size="text-[clamp(3rem,13vw,8rem)]"
          />
          <p className="mt-4 font-mono text-xs tracking-label text-muted">
            ai software engineer &amp; product owner
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <Chip key={s.label} href={s.url} icon={s.icon} label={s.label} />
            ))}
          </div>

          <div className="mt-8">
            <PillButton
              href="mailto:lakshyagupta997@gmail.com"
              label="email me"
              icon={<FiArrowRight size={16} />}
              variant="solid"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-10 lg:items-end lg:text-right">
          <nav className="flex flex-col gap-2">
            {jumpLinks.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-mono text-sm text-muted transition-colors hover:text-text"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="font-mono text-xs leading-relaxed text-muted">
            <p className="text-text">Site</p>
            <p>designed &amp; built by Lakshya Gupta</p>
            <p>{year}</p>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-6">
        <p className="font-mono text-xs text-muted">
          © {year} Lakshya Gupta. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Contact;
