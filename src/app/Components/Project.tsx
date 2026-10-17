"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Category = "Fullstack" | "Multi-Agent" | "Generative AI" | "ML";

type ProjectItem = {
  title: string;
  category: Category;
  featured?: boolean;
  duration: string;
  // One plain-language line a recruiter can read in five seconds.
  outcome: string;
  tech: string[];
  details: string[];
  image?: string;
  // Shown in place of a screenshot when there is none yet.
  diagram?: string[];
  live?: string;
  source?: string;
};

const projects: ProjectItem[] = [
  {
    title: "Lean Agents",
    category: "Multi-Agent",
    featured: true,
    duration: "2026",
    outcome:
      "Tool-using AI agents that finish the same tasks on fewer tokens, measured on the BFCL benchmark.",
    tech: ["Python", "smolagents", "Next.js", "Upstash Redis", "Groq", "Gemini"],
    details: [
      "Top-k tool retrieval, schema validate-and-repair for tool calls, and plan caching across similar tasks.",
      "Planner/executor/verifier agents vs. a single agent at equal token budget, with a quota-aware router failing over Groq → Gemini → GitHub Models.",
    ],
    image: "/projects/lean-agents.png",
    live: "https://lean-agents-brown.vercel.app",
    source: "https://github.com/RachitaPant/Lean-Agents",
  },
  {
    title: "Voice-Guided AI Tutor",
    category: "Multi-Agent",
    duration: "Oct 2025",
    outcome:
      "A real-time voice tutor with a talking AI avatar that explains design concepts.",
    tech: ["Next.js", "FastAPI", "LiveKit", "Tavus", "Deepgram", "ElevenLabs", "OpenAI"],
    details: [
      "LiveKit Agents and Tavus avatars on an async FastAPI backend handling concurrent voice sessions.",
      "End-to-end voice pipeline: Deepgram speech-to-text → OpenAI → ElevenLabs speech synthesis.",
    ],
    image: "/projects/voice-tutor.png",
    source: "https://github.com/RachitaPant",
  },
  {
    title: "ProofLoop",
    category: "Fullstack",
    featured: true,
    duration: "Feb 2026",
    outcome:
      "Replaces email approvals with multi-stage workflows and a tamper-evident audit trail.",
    tech: ["Java", "Spring Boot", "Next.js", "MongoDB", "Docker", "GitHub Actions"],
    details: [
      "Conditional routing, parallel stages, SLA escalation, delegation and a SHA-256 hash-chained audit trail.",
      "Hardened auth (httpOnly sessions, rotating refresh tokens, CSRF, RBAC), fixed IDOR and privilege-escalation bugs; 60+ tests in CI.",
    ],
    image: "/projects/proofloop.png",
    live: "https://proofloop-frontend.vercel.app/",
    source: "https://github.com/RachitaPant/proofloop-backend",
  },
  {
    title: "Gramodyan",
    category: "Fullstack",
    duration: "2026",
    outcome:
      "A marketplace helping village producers in Pauri Garhwal sell beyond their doorstep.",
    tech: ["React", "Vite", "React Router", "QR codes", "Vercel"],
    details: [
      "Producers list products and buyers discover and order them, in English, Hindi and Garhwali.",
      "Every batch carries a QR code that opens a public verification page.",
    ],
    image: "/projects/gramodyan.png",
    live: "https://gramodyan.vercel.app/",
  },
  {
    title: "SitePulse",
    category: "Generative AI",
    featured: true,
    duration: "Mar 2025 – Present",
    outcome:
      "An AI web performance auditor that explains why a site is slow and how to fix it.",
    tech: ["Next.js", "TypeScript", "Zod", "Groq LLMs", "GitHub Actions", "Vercel"],
    details: [
      "Merges Lighthouse 13, real-user Core Web Vitals and security grades into one validated report.",
      "Provider-agnostic LLM layer with model fallback; its eval suite passes 24/24 checks with 100% grounding. A GitHub Actions gate audits every preview and posts AI-explained PR comments.",
    ],
    image: "/projects/sitepulse.png",
    live: "https://hardware-resource-usage-analyzer.vercel.app/",
    source: "https://github.com/RachitaPant/Web-Performance-Analyzer",
  },
  {
    title: "Hybrid AI-NWP Forecast Blending",
    category: "ML",
    featured: true,
    duration: "2026",
    outcome:
      "Blends AI and numerical weather models to forecast extreme rainfall more reliably.",
    tech: ["Python", "Convex Optimization", "Ensemble Forecasting"],
    details: [
      "Weights trained by convex optimization on a tail objective (threshold-weighted CRPS for heavy rain ≥64.5 mm/24h).",
      "Hierarchical spatial pooling learns stable weights despite sparse extreme events.",
    ],
    diagram: ["36 subdivisions", "5 regions", "India"],
    source:
      "https://github.com/RachitaPant/Hybrid-AI-NWP-Multi-Model-Forecast-Blending-System",
  },
];

const FILTERS: ("All" | Category)[] = [
  "All",
  "Fullstack",
  "Multi-Agent",
  "Generative AI",
  "ML",
];

function Visual({ project }: { project: ProjectItem }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 border-b border-gray-200">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }
  if (project.diagram) {
    return (
      <div
        className="flex aspect-[16/9] w-full flex-wrap items-center justify-center gap-2 bg-[#2e4a3b] p-4 text-white"
        role="img"
        aria-label={`Diagram: ${project.diagram.join(" to ")}`}
      >
        {project.diagram.map((step, i) => (
          <React.Fragment key={step}>
            {i > 0 && <span aria-hidden="true">→</span>}
            <span className="rounded-md border border-white/40 bg-white/10 px-3 py-2 text-center text-sm font-semibold">
              {step}
            </span>
          </React.Fragment>
        ))}
      </div>
    );
  }
  return null;
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-[#fffbea] shadow-lg">
      <Visual project={project} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full bg-[#2b2b2b] px-3 py-1 text-white">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full bg-yellow-300 px-3 py-1 text-[#2b2b2b]">
              ★ Featured
            </span>
          )}
          <span className="text-gray-600">{project.duration}</span>
        </div>

        <h3 className="mt-3 text-2xl font-bold text-[#2b2b2b]">{project.title}</h3>
        <p className="mt-1 text-gray-800 font-medium">{project.outcome}</p>

        <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1 leading-snug">
          {project.details.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded bg-white px-2 py-1 font-mono text-xs text-gray-700 border border-gray-200"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-5 text-sm font-semibold">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-2 rounded-md bg-[#2b2b2b] px-4 py-2 text-white hover:bg-black"
            >
              <FaExternalLinkAlt aria-hidden="true" /> Live demo
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              className="inline-flex items-center gap-2 rounded-md border-2 border-[#2b2b2b] px-4 py-2 text-[#2b2b2b] hover:bg-white"
            >
              <FaGithub aria-hidden="true" /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const Project = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shown = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-16 px-4 sm:px-8 py-16 bg-[url('/workstation.webp')] bg-cover w-full"
    >
      <h2
        id="work-heading"
        className="text-5xl font-handwritten font-bold text-center text-white"
      >
        What I build
      </h2>
      <p className="mt-2 text-center text-white/90">
        Full-stack products, multi-agent systems, generative AI and ML.
      </p>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-8 flex flex-wrap justify-center gap-2"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full px-4 py-2 text-sm font-semibold shadow ${
              filter === f
                ? "bg-yellow-300 text-[#2b2b2b]"
                : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid max-w-6xl mx-auto gap-8 md:grid-cols-2">
        {shown.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
