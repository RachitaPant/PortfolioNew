"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPaperclip } from "react-icons/fa";
import { seededRotation } from "@/lib/rotation";

type ProjectItem = {
  title: string;
  duration: string;
  location: string;
  tech: string;
  details: string[];
  link: string;
};

const fullstackProjects: ProjectItem[] = [
  {
    title: "ProofLoop Digital Approval System",
    duration: "2026",
    location: "",
    tech: "Java | Spring Boot | Next.js | MongoDB | Docker",
    details: [
      "Built a workflow-based approval platform replacing email approvals with role-based actions, configurable multi-stage workflows, and full audit history, backed by a Spring Boot REST API and Next.js frontend.",
      "Containerized the backend with Docker and deployed backend/frontend independently (Render, Vercel) — end-to-end deployment and DevOps ownership.",
    ],
    link: "https://github.com/RachitaPant",
  },
  {
    title: "Web Performance Resource Analyzer",
    duration: "2025",
    location: "",
    tech: "Next.js | Lighthouse | Puppeteer | GCP",
    details: [
      "Built a performance-auditing tool on GCP measuring Core Web Vitals (LCP, FID, CLS) and resource usage via Lighthouse/Puppeteer in a stable Chrome environment.",
      "Visualized results in Chart.js for reliable, repeatable audits at scale.",
    ],
    link: "https://github.com/RachitaPant/Web-Performance-Analyzer",
  },
  {
    title: "Gramodyan",
    duration: "2026",
    location: "",
    tech: "React | Vite | React Router | QR Code | Vercel",
    details: [
      "Ideathon prototype of a marketplace for a village incubation centre in Pauri Garhwal: producers (SHGs, farmers) list products and buyers discover and order them.",
      "Each product batch carries a QR code linking to a public verification page, with a 4-step seller onboarding flow and dashboard.",
    ],
    link: "https://gramodyan.vercel.app/",
  },
];

const multiAgentProjects: ProjectItem[] = [
  {
    title: "Lean Agents",
    duration: "2026",
    location: "",
    tech: "Python | smolagents | Next.js | Upstash Redis | Groq | Gemini",
    details: [
      "Building reliable, token-efficient tool-using agents on free-tier LLMs: top-k tool retrieval, schema validate-and-repair for tool calls, and plan caching across similar tasks.",
      "Compares planner/executor/verifier agents against a single agent at equal token budget, with a quota-aware router failing over Groq → Gemini → GitHub Models, evaluated on the BFCL benchmark.",
    ],
    link: "https://github.com/RachitaPant/Lean-Agents",
  },
  {
    title: "Voice-Guided AI Tutor",
    duration: "2025",
    location: "",
    tech: "Next.js | FastAPI | LiveKit | Tavus | Deepgram | OpenAI",
    details: [
      "Built a real-time voice-interactive tutoring system using LiveKit Agents and Tavus AI avatars, with an async FastAPI backend handling concurrent voice sessions.",
      "Integrated Deepgram for speech-to-text, ElevenLabs for speech synthesis, and OpenAI for contextual response generation — a full end-to-end AI voice pipeline.",
    ],
    link: "https://github.com/RachitaPant",
  },
];

const genAiProjects: ProjectItem[] = [];

const mlProjects: ProjectItem[] = [
  {
    title: "Hybrid AI-NWP Forecast Blending",
    duration: "2026",
    location: "",
    tech: "Python | Convex Optimization | Ensemble Forecasting",
    details: [
      "Built an extremity-conditioned ensemble that blends AI and numerical weather prediction models, with weights trained by convex optimization on a tail objective (threshold-weighted CRPS for heavy rain ≥64.5 mm/24h).",
      "Used hierarchical spatial pooling (36 subdivisions → 5 regions → national) to learn stable weights despite sparse extreme-rainfall events.",
    ],
    link: "https://github.com/RachitaPant/Hybrid-AI-NWP-Multi-Model-Forecast-Blending-System",
  },
];

// Sections with no projects yet are skipped when rendering.
const sections = [
  { title: "Fullstack Showcase", projects: fullstackProjects },
  { title: "Multi-Agent Showcase", projects: multiAgentProjects },
  { title: "Generative AI Showcase", projects: genAiProjects },
  { title: "ML Showcase", projects: mlProjects },
];

const pinVariants = {
  hover: { scale: 1.05, rotate: 2 },
  tap: { scale: 0.95, rotate: 0 },
};

const pinTransition = { type: "spring", stiffness: 250, damping: 20 } as const;

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-16 bg-[url('/workstation.webp')] bg-cover w-full min-h-screen"
    >
      <h2 className="text-4xl font-[cursive] font-bold text-center text-[#fff] mb-12 select-none">
        My Pinboard 📌
      </h2>

      <div className="space-y-16">
        {sections
          .filter((section) => section.projects.length > 0)
          .map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-[cursive] font-bold text-center text-[#fff] mb-8 select-none">
                {section.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                {section.projects.map((project, i) => (
                  <a
                    key={project.title}
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — open the source on GitHub`}
                    className="rounded-lg"
                  >
                    <motion.div
                      className="relative bg-yellow-50 rounded-lg shadow-lg w-80 p-6 cursor-pointer select-text"
                      style={{
                        // Was `Math.random()`, recomputed on every render and different
                        // between server and client. Stable per project now.
                        rotate: `${seededRotation(i, 6)}deg`,
                      }}
                      whileHover="hover"
                      whileTap="tap"
                      variants={pinVariants}
                      transition={pinTransition}
                    >
                      {/* Paperclip icon top-left */}
                      <FaPaperclip
                        className="absolute top-3 left-3 text-yellow-400 text-xl rotate-[-15deg] drop-shadow-md"
                        aria-hidden="true"
                      />

                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-600 italic mb-3">
                        {project.duration}{" "}
                        {project.location && `| ${project.location}`}
                      </p>
                      <p className="text-sm text-gray-700 mb-3 font-mono">
                        {project.tech}
                      </p>

                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm leading-snug">
                        {project.details.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      {/* Fake tape on bottom right */}
                      <div
                        className="absolute bottom-2 right-3 w-12 h-4 bg-yellow-300 rounded rotate-[-12deg] shadow-inner"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          ))}
      </div>
    </motion.section>
  );
};

export default Project;
