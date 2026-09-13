import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
];

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <Section
      id="contact"
      label="contacts"
      labelAlign="right"
      ringPosition="right"
    >
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

      <div className="mt-20 border-t border-line pt-6">
        <p className="font-mono text-xs text-muted">
          © {year} Lakshya Gupta. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Contact;
