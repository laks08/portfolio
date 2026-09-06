import React from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";

const skillCategories = [
  {
    title: "Languages & Core Engineering",
    skills: [
      { name: "Java", keywords: ["Spring Boot", "Microservices", "REST"] },
      { name: "Python", keywords: ["FastAPI", "Data Ops", "Automation"] },
      { name: "JavaScript & TypeScript", keywords: ["React", "Node.js", "Tooling"] },
      { name: "Go", keywords: ["Services", "Concurrency", "CLIs"] },
      { name: "SQL", keywords: ["Query tuning", "Analytics", "ETL"] },
      { name: "HTML & CSS", keywords: ["Responsive", "Accessibility", "Tailwind"] },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React", keywords: ["Hooks", "State mgmt", "Testing"] },
      { name: "Next.js", keywords: ["SSR", "Routing", "Optimizations"] },
      { name: "Vue", keywords: ["Dashboards", "TypeScript", "Animations"] },
      { name: "Redux", keywords: ["State", "Tooling", "Async"] },
      { name: "React Native", keywords: ["Mobile UI", "Expo", "Auth"] },
      { name: "Vite", keywords: ["HMR", "Build tools", "DX"] },
      { name: "Tailwind CSS", keywords: ["Utility-first", "Responsive", "Design systems"] },
      { name: "Chakra UI", keywords: ["Components", "Accessibility", "Themes"] },
      { name: "Firebase", keywords: ["Auth", "Hosting", "Realtime"] },
    ],
  },
  {
    title: "Backend & API Platforms",
    skills: [
      { name: "Node.js", keywords: ["REST APIs", "Tooling", "Workers"] },
      { name: "Express.js", keywords: ["Routing", "Middleware", "Auth"] },
      { name: "FastAPI", keywords: ["Async IO", "Validation", "Docs"] },
      { name: "Spring Boot", keywords: ["JPA", "Batch jobs", "Resilience"] },
      { name: "LangChain Services", keywords: ["Tools", "RAG", "Agents"] },
      { name: "REST Integrations", keywords: ["Salesforce", "HubSpot", "QuickBooks"] },
      { name: "MCP Servers", keywords: ["JSON-RPC", "Tool registry", "Automation"] },
      { name: "Authentication", keywords: ["JWT", "OAuth", "Role policies"] },
    ],
  },
  {
    title: "Cloud, DevOps & Observability",
    skills: [
      { name: "AWS", keywords: ["EC2", "S3", "Lambda"] },
      { name: "Azure", keywords: ["App Service", "AI Studio", "Functions"] },
      { name: "Docker", keywords: ["Images", "Compose", "Hardening"] },
      { name: "Kubernetes", keywords: ["Workloads", "Helm", "Autoscale"] },
      { name: "GitHub Actions", keywords: ["CI/CD", "Caching", "Deploy"] },
      { name: "GitLab CI", keywords: ["Pipelines", "Security", "Reviews"] },
      { name: "Terraform", keywords: ["IaC", "Modules", "Environments"] },
      { name: "Ansible", keywords: ["Playbooks", "Provisioning", "Config"] },
      { name: "Dagster", keywords: ["Asset graph", "Orchestration", "Recoveries"] },
      { name: "Datadog & OpenTelemetry", keywords: ["Tracing", "Dashboards", "Alerts"] },
    ],
  },
  {
    title: "AI, ML & Analytics Enablement",
    skills: [
      { name: "LangChain", keywords: ["Agents", "Tools", "Pipelines"] },
      { name: "LangGraph", keywords: ["Workflow", "Retries", "Routing"] },
      { name: "DeepAgents", keywords: ["Planner", "Subagents", "Task graphs"] },
      { name: "kagent & kmcp", keywords: ["Agent-to-agent", "Orchestration", "Kubernetes"] },
      { name: "vLLM & Ollama", keywords: ["Serving", "Batching", "Deploy"] },
      { name: "OpenAI API", keywords: ["Function calling", "Guardrails", "Eval"] },
      { name: "Sentence Transformers", keywords: ["Fine-tuning", "Embeddings", "Benchmarking"] },
      { name: "pgvector & Chroma", keywords: ["Embeddings", "Ranking", "Hybrid search"] },
      { name: "FAISS & ElasticSearch", keywords: ["Semantic search", "Scale", "Sharding"] },
      { name: "Scikit-learn", keywords: ["Modeling", "Metrics", "Pipelines"] },
      { name: "XGBoost", keywords: ["Structured data", "Features", "Optimization"] },
      { name: "Power BI", keywords: ["KPI modeling", "Row security", "Refresh"] },
      { name: "Tableau & Looker", keywords: ["Visuals", "Dashboards", "Stories"] },
    ],
  },
  {
    title: "Data Engineering & Storage",
    skills: [
      { name: "Snowflake", keywords: ["Marts", "Snowpipe", "Streams"] },
      { name: "PostgreSQL", keywords: ["Modeling", "Indexes", "Views"] },
      { name: "MySQL", keywords: ["Procedures", "Reporting", "Tuning"] },
      { name: "MongoDB", keywords: ["Schemas", "Aggregations", "Ops"] },
      { name: "dbt", keywords: ["Models", "Tests", "Docs"] },
      { name: "Airflow", keywords: ["Scheduling", "Sensors", "Recovery"] },
      { name: "Spark & PySpark", keywords: ["Batch", "Streaming", "ETL"] },
      { name: "Kafka", keywords: ["Ingest", "Consumers", "Streams"] },
      { name: "DuckDB", keywords: ["Analytics", "Parquet", "Local runs"] },
      { name: "Great Expectations", keywords: ["Validation", "Data SLAs", "Alerting"] },
    ],
  },
];

const Skills = () => (
  <Section id="skills" label="skills" ringPosition="left">
    <p className="mb-14 max-w-2xl font-sans text-base leading-relaxed text-muted">
      The stack I <em>build production systems with</em>, grouped by where it
      sits in the pipeline, from language fundamentals through AI enablement and
      data platforms.
    </p>

    <div className="border-t border-line">
      {skillCategories.map((category, i) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: Math.min(i, 4) * 0.05 }}
          className="group grid grid-cols-1 gap-2 border-b border-line px-1 py-7 transition-colors duration-200 hover:bg-paper hover:text-paper-ink md:grid-cols-[240px_1fr] md:gap-10 md:px-4"
        >
          <h3 className="font-mono text-sm font-bold">{category.title}</h3>
          <p className="font-mono text-sm leading-relaxed text-muted group-hover:text-paper-ink/70">
            {category.skills.map((s) => s.name).join("  /  ")}
          </p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Skills;
