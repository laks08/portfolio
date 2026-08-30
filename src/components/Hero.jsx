import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import BackgroundRings from "./ui/BackgroundRings";
import DisplayHeading from "./ui/DisplayHeading";
import PillButton from "./ui/PillButton";
import Chip from "./ui/Chip";
import SectionLabel from "./ui/SectionLabel";

const socialLinks = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/lakshyagupta-/",
    label: "linkedin",
  },
  { icon: FaGithub, url: "https://github.com/laks08", label: "github" },
  { icon: FaEnvelope, url: "mailto:lakshyagupta997@gmail.com", label: "email" },
];

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i },
  }),
};

const Hero = () => {
  const profilePic = import.meta.env.BASE_URL + "images/profilepic.jpeg";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <BackgroundRings position="right" />

      <div className="relative z-10 mx-auto grid w-full max-w-content grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
        {/* Left accent bar — sits at the content's left edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-10 h-40 w-px bg-text"
        />

        <div>
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <SectionLabel slash className="mb-6">
              About me
            </SectionLabel>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <DisplayHeading
              as="h1"
              size="text-[clamp(2rem,5.4vw,4.25rem)]"
              lines={[
                { text: "AI Software" },
                { text: "Engineer" },
                {
                  text: "& Product Owner",
                  muted: true,
                  indent: 0,
                  className: "md:whitespace-nowrap",
                },
              ]}
            />
          </motion.div>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted"
          >
            I build <em>LLM and RAG systems</em>, agentic workflows, and the
            services around them &mdash; and I <em>own them end to end</em>, from
            product decisions through deployment. Currently at Aerocode as sole
            technical owner on client AI SaaS builds. 5+ years combined across
            engineering and product/program work, focused now on GenAI.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <PillButton
              href="#projects"
              label="projects"
              icon={<FiArrowRight size={16} />}
              variant="solid"
            />
            <PillButton href="#contact" label="get in touch" variant="outline" />
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap gap-3"
          >
            {socialLinks.map((s) => (
              <Chip key={s.label} href={s.url} icon={s.icon} label={s.label} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="justify-self-start lg:justify-self-end"
        >
          <div className="h-60 w-60 overflow-hidden rounded-card border border-line sm:h-72 sm:w-72 xl:h-80 xl:w-80">
            <img
              src={profilePic}
              alt="Lakshya Gupta"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
