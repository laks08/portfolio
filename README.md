# Lakshya Gupta Portfolio Website

Personal portfolio for **Lakshya Gupta**, AI Software Engineer & Product Owner. I build LLM and RAG systems, agentic workflows, and the services around them, and own them from product decisions through deployment. 5+ years combined across engineering and product/program work, focused now on GenAI.

## Live site

**[https://lakshyagupta.com](https://lakshyagupta.com)**

## Featured projects

- **StyleSync AI**: Multi-agent fashion recommendation backend. Five LangChain/LangGraph agents collaborate to assemble outfit recommendations, with agent-to-agent orchestration via kagent and kmcp. Docker/Kubernetes.
- **legal-rag**: Multi-agent legal RAG over federal securities filings. A LangGraph pipeline with a DeepAgents planner/subagent setup handles query rewriting, reranking, and cited synthesis over legal-domain embeddings in Chroma.
- **legal-embedder**: Fine-tuned sentence embeddings for legal semantic search, trained on US federal court opinions and benchmarked against all-MiniLM-L6-v2.
- **Video Atomization**: LLM pipeline that detects highlight moments in long-form video from transcripts and renders clips with FFmpeg off a Postgres-backed job queue.
- **DocQueryAI**: Local RAG chatbot for PDFs. LangChain + Ollama + ChromaDB, running fully offline.

More work, including earlier engineering and data projects, is on [GitHub](https://github.com/laks08).

## Experience

- **Aerocode**: AI Software Engineer & Product Owner, Contract (Apr 2026–Present), New Delhi
- **Ipser Lab**: Software Engineer, AI Systems (Mar 2025–Feb 2026), Boston
- **Burmester & Vogel**: Software Engineer (Jan 2024–Aug 2024), Cambridge, MA
- **Essence Global**: Solutions Developer (Jan 2021–Jun 2022), Gurgaon
- **Delhivery Logistics**: Web Developer (Dec 2019–Apr 2020), Gurgaon

## Education

- **M.S., Information Systems**: Northeastern University (2022–2024)
- **B.Tech, Computer Science Engineering**: Bennett University (2016–2020)

## Tech stack (this site)

- **React 18** with functional components and hooks
- **Vite** for development and builds
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **React Slick** for the project carousel
- **GitHub Pages** for deployment

## Local development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run deploy   # build and publish to GitHub Pages
```
