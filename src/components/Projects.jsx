import React, { useCallback, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiPause,
  FiPlay,
  FiExternalLink,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiX,
} from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import Section from "./ui/Section";
import TagPill from "./ui/TagPill";
import CircleButton from "./ui/CircleButton";

const PROJECTS = [
  {
    title: "StyleSync AI",
    description:
      "Multi-agent fashion recommendation backend where five LangChain/LangGraph agents collaborate to assemble outfit recommendations.",
    extendedDescription:
      "Five specialized agents hand work off to each other to build a recommendation, with agent-to-agent orchestration running through kagent and kmcp. Packaged for Docker and Kubernetes.",
    tags: [
      "Python",
      "LangChain",
      "LangGraph",
      "Multi-agent",
      "kagent",
      "kmcp",
      "Docker",
      "Kubernetes",
    ],
    image: import.meta.env.BASE_URL + "images/project-img/stylesync-ai.jpg",
    link: "https://github.com/laks08/style-sync-ai",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "legal-rag",
    description:
      "Multi-agent legal RAG system that answers questions over federal securities filings with traceable citations.",
    extendedDescription:
      "A LangGraph pipeline with a DeepAgents planner/subagent setup handles query rewriting, reranking, and cited synthesis over legal-domain embeddings stored in Chroma, so every answer traces back to primary-source filings.",
    tags: ["Python", "LangGraph", "DeepAgents", "RAG", "Reranking", "Chroma"],
    image: import.meta.env.BASE_URL + "images/project-img/legal-rag.jpg",
    link: "https://github.com/laks08/legal-rag",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "legal-embedder",
    description:
      "Fine-tuned sentence-embedding model for legal semantic search, trained on US federal court opinions.",
    extendedDescription:
      "Sentence embeddings fine-tuned on US federal court opinions and benchmarked against all-MiniLM-L6-v2 to measure retrieval gains on legal text.",
    tags: [
      "Python",
      "Sentence Transformers",
      "Fine-tuning",
      "Embeddings",
      "Legal NLP",
      "Benchmarking",
    ],
    image: import.meta.env.BASE_URL + "images/project-img/legal-embedder.jpg",
    link: "https://github.com/laks08/legal-embedder",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Video Atomization",
    description:
      "LLM-driven pipeline that detects highlight moments in long-form video from transcripts and renders the clips.",
    extendedDescription:
      "Works from transcripts to detect candidate highlight moments, then renders clips with FFmpeg off a Postgres-backed job queue.",
    tags: ["Python", "LLM", "FFmpeg", "PostgreSQL", "Job Queue"],
    image: import.meta.env.BASE_URL + "images/project-img/video-atomization.jpg",
    link: "https://github.com/laks08/video-atomization",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Boston Weather Data ETL Pipeline",
    description:
      "A comprehensive weather data pipeline using the 4D Stack (DuckDB, DBT, Dagster, Docker) that fetches Boston weather data from the National Weather Service API.",
    extendedDescription:
      "Built with modern data engineering practices, this pipeline orchestrates real-time weather data collection, processing, and transformation. Features automated scheduling with Dagster, efficient analytical storage with DuckDB, data transformation with DBT, and full containerization with Docker for seamless deployment.",
    tags: [
      "Python",
      "DuckDB",
      "DBT",
      "Dagster",
      "Docker",
      "ETL",
      "Data Engineering",
      "Weather API",
    ],
    image: import.meta.env.BASE_URL + "images/project-img/boston-weather-etl.jpg",
    link: "https://github.com/laks08/weather-pipeline",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "AI-Powered Job Application Manager",
    description:
      "Built a Java-based Job Application Manager with JavaFX and Scene Builder, featuring advanced search and ChatGPT integration for resume optimization.",
    extendedDescription:
      "Designed to streamline the job application process, this tool leverages the OpenAI API to extract key job description keywords and provide tailored resume enhancements, significantly improving candidate matching.",
    tags: ["Java", "JavaFX", "ChatGPT", "OpenAI API", "Resume Optimization"],
    image: import.meta.env.BASE_URL + "images/project-img/job-app.jpeg",
    link: "https://github.com/laks08/ai-job-app-manager",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Community Food Ordering Platform",
    description:
      "Developed a React-based platform using the MERN stack with RESTful API integration for efficient food ordering.",
    extendedDescription:
      "This application offers a seamless food ordering experience by integrating Express, MongoDB, and Node.js with a modern React UI enhanced by Tailwind CSS, SASS, and Chakra UI components. Its design prioritizes scalability and user-centric features.",
    tags: ["Next.js", "MERN", "Express", "MongoDB", "Tailwind CSS", "Chakra UI"],
    image: import.meta.env.BASE_URL + "images/project-img/mealtrain.jpg",
    link: "https://github.com/laks08/Meal-Train-Food-Platform",
    showProjectLink: true,
    showDemoLink: false,
    demoLink: "https://mealtrain-demo.com",
  },
  {
    title: "Business Intelligence Dashboard",
    description:
      "Implemented a robust BI dashboard using Power BI, Salesforce API, and REST APIs to streamline data reporting.",
    extendedDescription:
      "This dashboard consolidates data from multiple sources into dynamic visualizations, enhancing client engagement and reducing reporting hours. Its integration of custom API calls provides real-time insights for strategic decision-making.",
    tags: [
      "Power BI",
      "Salesforce API",
      "REST APIs",
      "Dashboard",
      "Business Intelligence",
    ],
    image: import.meta.env.BASE_URL + "images/project-img/bi-dash.jpg",
    link: "https://github.com",
    showProjectLink: false,
    showDemoLink: false,
  },
  {
    title: "Predictive Analytics Engine",
    description:
      "Developed a machine learning tool using Python libraries to forecast trends and optimize data integrity.",
    extendedDescription:
      "Leveraging Scikit-learn, Pandas, and Matplotlib, this engine analyzes large datasets to predict trends and identify anomalies, thereby supporting data-driven decision-making and operational efficiency.",
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Machine Learning",
      "Predictive Analytics",
    ],
    image: import.meta.env.BASE_URL + "images/project-img/pre-analysis.jpg",
    link: "https://github.com",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Async File Parser with Redis & Postgres",
    description:
      "FastAPI microservice that ingests CSV, PDF, and image uploads asynchronously using Redis queues and background workers.",
    extendedDescription:
      "The service offloads heavy parsing tasks to RQ workers, tracks job metadata in PostgreSQL, and exposes REST endpoints for status polling and JSON result retrieval, all packaged in Docker for easy deployment.",
    tags: ["FastAPI", "Redis", "PostgreSQL", "RQ", "Async Processing", "Docker"],
    image: import.meta.env.BASE_URL + "images/project-img/async-parser.jpg",
    link: "https://github.com/laks08/async-file-parser-with-redis-and-postgres",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Password Generator MCP Server",
    description:
      "Claude MCP server that delivers cryptographically strong passwords, passphrases, API keys, and PINs on demand.",
    extendedDescription:
      "Implements seven secure tools, including batch generation and entropy analysis, runs entirely inside Docker, and integrates seamlessly with Claude Desktop while keeping every credential offline.",
    tags: ["Python", "Claude MCP", "Security", "Docker", "CLI", "Password Generation"],
    image: import.meta.env.BASE_URL + "images/project-img/password-mcp.jpg",
    link: "https://github.com/laks08/password-generator-mcp-server",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "DocQueryAI",
    description:
      "Local RAG chatbot for PDFs. Chat with your documents entirely offline.",
    extendedDescription:
      "Built on LangChain, Ollama, and ChromaDB. Embedding generation and vector search run locally, so documents and queries never leave the machine.",
    tags: ["Python", "LangChain", "Ollama", "ChromaDB", "RAG", "Local"],
    image: import.meta.env.BASE_URL + "images/project-img/docquery-ai.jpg",
    link: "https://github.com/laks08/DocQueryAI",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Signal Clone App",
    description:
      "A fully functional clone of the Signal messaging platform built with React Native and Expo.",
    extendedDescription:
      "This mobile app emulates core Signal functionalities including one-click OAuth login, real-time messaging, and integration of multiple social logins. It serves as a strong demonstration of mobile app development using modern frameworks.",
    tags: ["React Native", "Expo", "OAuth", "Firebase", "Mobile App"],
    image: import.meta.env.BASE_URL + "images/project-img/signal.jpg",
    link: "https://github.com/laks08/Signal-Clone-React-Native",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Uber Clone App",
    description:
      "Developed a ride-sharing application clone with React Native, replicating Uber's core functionalities.",
    extendedDescription:
      "Featuring ride booking, real-time tracking, and payment processing, this app is built with React Native, Tailwind CSS, and React Native Navigation. The integration with the Google Maps API adds precise location-based services for an authentic ride-sharing experience.",
    tags: [
      "React Native",
      "Tailwind CSS",
      "React Native Navigation",
      "Google Maps API",
      "Ride-sharing",
    ],
    image: import.meta.env.BASE_URL + "images/project-img/uber.jpg",
    link: "https://github.com/laks08/Uber-Clone-React-Native",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Swift ToDo Manager",
    description:
      "A cross-platform to-do list application for iOS developed in Swift.",
    extendedDescription:
      "Utilizing Swift for persistent storage, this task manager supports custom reminders and notifications, ensuring seamless task management and organization.",
    tags: ["Swift", "iOS", "Task Management"],
    image: import.meta.env.BASE_URL + "images/project-img/todo.jpg",
    link: "https://github.com/laks08/Swift-Project-ToDo",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "React Meetups Organizer",
    description: "A React-based event management platform for organizing meetups.",
    extendedDescription:
      "This tool allows users to create, join, and manage events with real-time updates. Its intuitive and has responsive interface. Simple but effective, it showcases the power of React for dynamic web applications.",
    tags: ["React", "Event Management", "Real-time", "JavaScript"],
    image: import.meta.env.BASE_URL + "images/project-img/meetups.jpg",
    link: "https://github.com/laks08/react-meetups",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Currency Converter",
    description:
      "A real-time currency conversion app built with React, TypeScript, and Chakra UI components library.",
    extendedDescription:
      "Fetching live exchange rates via API, this application supports over 150 currencies. Offers a clean, responsive interface ideal for quick financial calculations.",
    tags: ["React", "TypeScript", "Chakra UI", "API Integration", "Currency Conversion"],
    image: import.meta.env.BASE_URL + "images/project-img/currency.jpg",
    link: "https://github.com/laks08/React-CurrencyConverter",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Flashcards App",
    description:
      "An interactive flashcard application built with React to aid in exam preparation.",
    extendedDescription:
      "This application allows users to create, edit, and practice with flashcards. With a dedicated quiz mode and dynamic review features, it supports effective study sessions using a simple interface styled with Bootstrap and custom CSS.",
    tags: ["React", "JavaScript", "Bootstrap", "Flashcards", "Study App", "Axios"],
    image: import.meta.env.BASE_URL + "images/project-img/flash-card.jpg",
    link: "https://github.com/laks08/React-Flashcard",
    showProjectLink: true,
    showDemoLink: false,
  },
  {
    title: "Grocery Shopping Platform",
    description:
      "A Spring Boot based backend system for a grocery shopping platform connecting local shopkeepers and customers.",
    extendedDescription:
      "Built on a service-oriented architecture with Spring Boot, Spring JPA, and RESTful APIs, this project supports multiple sub-applications for admins, shop owners, and end-users. It demonstrates a scalable e-commerce solution with robust backend integration.",
    tags: ["Spring Boot", "Spring JPA", "REST API", "Grocery", "Backend"],
    image: import.meta.env.BASE_URL + "images/project-img/shopping.jpg",
    link: "https://github.com/laks08/SpringBoot-Project-Grocery",
    showProjectLink: true,
    showDemoLink: false,
  },
];

/** Shared image element so it morphs between the two states. */
const ProjectImage = ({ project, loading, errored, onLoad, onError, className = "" }) => (
  <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
    {loading && !errored && (
      <div className="absolute inset-0 animate-pulse bg-surface-2" />
    )}
    {errored ? (
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-mono text-xs text-muted">image unavailable</span>
      </div>
    ) : (
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        onLoad={onLoad}
        onError={onError}
        className="h-full w-full object-cover"
      />
    )}
  </div>
);

/**
 * Collapsed carousel card — the reference layout: image on the left,
 * copy + "Read more" pill and circular arrow on the right.
 */
const ProjectCardCollapsed = ({ project, onExpand, imageProps }) => (
  <article className="pc-card relative h-[420px] overflow-hidden sm:h-[340px]">
    {/* Full-bleed photo — only revealed on the centred slide. */}
    <div className="pc-media absolute inset-0">
      <ProjectImage project={project} className="h-full w-full" {...imageProps} />
    </div>

    {/* Hard-edged translucent scrim the copy sits on. */}
    <div className="pc-scrim absolute inset-y-0 right-0" aria-hidden="true" />

    <div className="pc-body relative z-10 ml-auto flex h-full flex-col justify-center p-6 sm:p-12">
      <h3 className="pc-title font-mono text-xl font-bold leading-snug sm:text-2xl">
        {project.title}
      </h3>

      <p className="pc-desc mt-4 line-clamp-3 font-sans text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mt-7 flex items-center gap-3">
        <button
          type="button"
          onClick={onExpand}
          className="pc-pill rounded-full px-6 py-3 font-sans text-sm italic transition-opacity hover:opacity-90"
        >
          Read more
        </button>
        <CircleButton
          onClick={onExpand}
          label={`Read more about ${project.title}`}
          className="pc-arrow"
        >
          <FiArrowRight size={16} />
        </CircleButton>
      </div>
    </div>
  </article>
);

/** Expanded detail — full container, image plus links below. */
const ProjectCardExpanded = ({ project, onClose, imageProps }) => (
  <motion.article
    initial={{ opacity: 0, scale: 0.94, y: 12 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.94, y: 12 }}
    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden rounded-card border border-line bg-bg p-6 sm:p-10"
  >
    <button
      type="button"
      onClick={onClose}
      aria-label="Close project details"
      className="absolute right-5 top-5 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-transparent hover:bg-paper hover:text-paper-ink"
    >
      <FiX size={15} />
    </button>

    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
      <div>
        <h3 className="pr-12 font-mono text-2xl font-bold leading-snug text-text md:text-3xl">
          {project.title}
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.3 }}
        >
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>

          <p className="mt-7 font-sans text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
            {project.extendedDescription}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.08, duration: 0.32 }}
      >
        <ProjectImage
          project={project}
          className="aspect-[16/10] rounded-card border border-line"
          {...imageProps}
        />
      </motion.div>
    </div>

    {/* Links below */}
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.24, duration: 0.3 }}
      className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-8"
    >
      {project.showProjectLink && (
        <CircleButton
          href={project.link}
          label={`${project.title} source on GitHub`}
        >
          <FiGithub size={16} />
        </CircleButton>
      )}
      {project.showDemoLink && (
        <CircleButton
          href={project.demoLink}
          label={`${project.title} live demo`}
        >
          <FiExternalLink size={16} />
        </CircleButton>
      )}
      {(project.showProjectLink || project.showDemoLink) && (
        <CircleButton
          href={project.showDemoLink ? project.demoLink : project.link}
          label={`Open ${project.title}`}
          variant="solid"
        >
          <FiArrowUpRight size={18} />
        </CircleButton>
      )}
      <button
        type="button"
        onClick={onClose}
        className="ml-auto font-mono text-xs text-muted transition-colors hover:text-text"
      >
        close
      </button>
    </motion.div>
  </motion.article>
);

const Projects = () => {
  const projects = PROJECTS;
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [current, setCurrent] = useState(0);
  const [expandedTitle, setExpandedTitle] = useState(null);
  const [imageLoading, setImageLoading] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const sliderRef = useRef(null);

  // Slide to restore to after the expanded card closes and <Slider> remounts.
  const restoreIndexRef = useRef(0);
  // Stable indirection so `settings.beforeChange` identity never changes.
  const onBeforeChange = useRef(() => {});
  onBeforeChange.current = (_, next) => {
    restoreIndexRef.current = next;
    setCurrent(next);
  };

  const expanded = projects.find((p) => p.title === expandedTitle) || null;

  const imagePropsFor = useCallback(
    (project) => ({
      loading: imageLoading[project.title] !== false,
      errored: !!imageErrors[project.title],
      onLoad: () => setImageLoading((p) => ({ ...p, [project.title]: false })),
      onError: () => {
        setImageErrors((p) => ({ ...p, [project.title]: true }));
        setImageLoading((p) => ({ ...p, [project.title]: false }));
      },
    }),
    [imageLoading, imageErrors]
  );

  // Rebuilt only when image load/error state changes — NOT when `current`
  // changes, so a slide never churns the <Slider>'s children.
  const slides = useMemo(
    () =>
      projects.map((project) => (
        <div key={project.title} className="px-3">
          <ProjectCardCollapsed
            project={project}
            onExpand={() => setExpandedTitle(project.title)}
            imageProps={imagePropsFor(project)}
          />
        </div>
      )),
    [projects, imagePropsFor]
  );

  // Close the expanded card with Escape.
  React.useEffect(() => {
    if (!expandedTitle) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && setExpandedTitle(null);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [expandedTitle]);

  // Created once. `initialSlide` and `autoplay` are frozen primitives so
  // InnerSlider.didPropsChange() never fires on a slide-driven re-render —
  // that re-measure is what clobbers the in-flight track animation and makes
  // the last->first wrap look broken. Autoplay is controlled imperatively.
  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      initialSlide: 0,
      speed: 500,
      cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "140px",
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      pauseOnHover: false,
      // NOTE: never set slick's `lazyLoad` — with centerMode + infinite it
      // renders the mid-wrap centred clone as an empty div.
      beforeChange: (a, b) => onBeforeChange.current(a, b),
      responsive: [
        { breakpoint: 1024, settings: { centerPadding: "60px" } },
        {
          breakpoint: 640,
          settings: { centerMode: false, centerPadding: "0px" },
        },
      ],
    }),
    []
  );

  // Restore the slide after the expanded card closes and <Slider> re-mounts.
  const handleSliderInit = () => {
    const idx = restoreIndexRef.current;
    if (idx > 0) sliderRef.current?.slickGoTo(idx, true); // instant jump
  };

  const handlePlayPause = () => {
    setIsAutoPlaying((prev) => {
      const next = !prev;
      if (next) sliderRef.current?.slickPlay();
      else sliderRef.current?.slickPause();
      return next;
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isAutoPlaying) sliderRef.current?.slickPause();
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isAutoPlaying) sliderRef.current?.slickPlay();
  };

  const playing = isAutoPlaying && !isHovered;

  return (
    <Section id="projects" label="projects" ringPosition="right">
      <p className="mb-10 max-w-xl font-sans text-base leading-relaxed text-muted">
        A rolling selection of what I&apos;ve built &mdash; AI systems, data
        pipelines, backends, and apps.
      </p>

      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handlePlayPause}
            disabled={!!expanded}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-text hover:text-text disabled:opacity-40 disabled:hover:border-line disabled:hover:text-muted"
            aria-label={playing ? "Pause carousel" : "Play carousel"}
          >
            {playing ? <FiPause size={14} /> : <FiPlay size={14} />}
            <span>{playing ? "pause" : "play"}</span>
          </button>
          <p className="font-mono text-xs text-muted">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>

      </div>

      {/* `layout` animates the container's own height as the card grows.
          It sits OUTSIDE the slick track — framer's layout projection and
          slick's transformed track do not mix. */}
      <motion.div
        layout
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className="projects-carousel-nav relative"
      >
        {/* Nav arrows overlap the peeking side cards, as in the reference. */}
        {!expanded && (
          <>
            <CircleButton
              label="Previous project"
              onClick={() => sliderRef.current?.slickPrev()}
              className="pc-nav pc-nav--prev"
            >
              <FiArrowLeft size={20} />
            </CircleButton>
            <CircleButton
              label="Next project"
              onClick={() => sliderRef.current?.slickNext()}
              className="pc-nav pc-nav--next"
            >
              <FiArrowRight size={20} />
            </CircleButton>
          </>
        )}

        <AnimatePresence mode="wait" initial={false}>
          {expanded ? (
            <ProjectCardExpanded
              key="expanded"
              project={expanded}
              onClose={() => setExpandedTitle(null)}
              imageProps={imagePropsFor(expanded)}
            />
          ) : (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              className="projects-carousel"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Slider
                ref={sliderRef}
                onInit={handleSliderInit}
                {...settings}
              >
                {slides}
              </Slider>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects;
