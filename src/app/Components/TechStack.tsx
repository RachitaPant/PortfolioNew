"use client";

import React from "react";
import { motion } from "framer-motion";
import { seededRotation } from "@/lib/rotation";

type Skill = { name: string; core?: boolean };

// `core` marks the daily drivers: drawn as solid chalk pills so a recruiter
// scanning the board picks them out first.
const categories: {
  title: string;
  icon: string;
  hook: string;
  chalk: string;
  skills: Skill[];
}[] = [
  {
    title: "AI & Agents",
    icon: "🤖",
    hook: "LLMs that call tools, remember context and get evaluated.",
    chalk: "#f9a8d4",
    skills: [
      { name: "Agentic workflows", core: true },
      { name: "Tool-calling", core: true },
      { name: "RAG", core: true },
      { name: "LangChain", core: true },
      { name: "smolagents" },
      { name: "LiveKit Agents" },
      { name: "Pinecone" },
      { name: "LLM evals" },
      { name: "Custom model endpoints" },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    hook: "Fast, accessible interfaces on web and mobile.",
    chalk: "#93c5fd",
    skills: [
      { name: "React", core: true },
      { name: "Next.js", core: true },
      { name: "React Native", core: true },
      { name: "TypeScript", core: true },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "Zustand" },
      { name: "TanStack Query" },
      { name: "Framer Motion" },
      { name: "Expo", core: true },
    ],
  },
  {
    title: "Backend & Data",
    icon: "⚙️",
    hook: "APIs and data layers that hold up in production.",
    chalk: "#fde047",
    skills: [
      { name: "Node.js", core: true },
      { name: "Spring Boot", core: true },
      { name: "FastAPI", core: true },
      { name: "PostgreSQL", core: true },
      { name: "Express.js", core: true },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Prisma", core: true },
      { name: "REST API design", core: true },
    ],
  },
  {
    title: "Cloud, DevOps & Testing",
    icon: "🚀",
    hook: "From pull request to deployed, with tests in between.",
    chalk: "#86efac",
    skills: [
      { name: "Docker", core: true },
      { name: "GitHub Actions CI/CD", core: true },
      { name: "Vercel", core: true },
      { name: "GCP" },
      { name: "Jest" },
      { name: "React Testing Library" },
      { name: "Postman", core: true },
      { name: "Git", core: true },
    ],
  },
  {
    title: "Languages",
    icon: "💬",
    hook: "What I think in.",
    chalk: "#fdba74",
    skills: [
      { name: "TypeScript", core: true },
      { name: "Python", core: true },
      { name: "Java", core: true },
      { name: "JavaScript (ES6+)", core: true },
      { name: "C++" },
      { name: "SQL" },
      { name: "HTML/CSS" },
    ],
  },
  {
    title: "AI-Assisted Dev",
    icon: "✨",
    hook: "Shipping faster, and still reviewing every line.",
    chalk: "#c4b5fd",
    skills: [
      { name: "Claude Code", core: true },
      { name: "Cursor", core: true },
      { name: "GitHub Copilot" },
      { name: "VS Code", core: true },
      { name: "IntelliJ IDEA" },
      { name: "Android Studio", core: true },
    ],
  },
];

// Hoisted so the ~50 pills don't each get a fresh object every render.
const pillHover = { scale: 1.08, rotate: 0, y: -2 };
const pillTransition = { type: "spring", stiffness: 300, damping: 15 } as const;

const TechStack = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="scroll-mt-16 px-4 sm:px-8 py-16 w-full bg-[#2e4a3b] bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url('/chalkboard-texture.webp')" }}
    >
      <h2 className="text-5xl font-handwritten font-bold text-center text-white text-shadow-chalk">
        My Toolbox
      </h2>
      <p className="mt-3 text-center text-lg text-white/90 font-marker5">
        Everything I reach for, from prompt to production.
      </p>

      {/* Legend */}
      <p className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
        <span className="rounded-full bg-[#fef9c3] px-3 py-1 font-semibold text-[#1f2f26]">
          Daily driver
        </span>
        <span className="rounded-full border-2 border-dashed border-white/80 px-3 py-1 text-white">
          Comfortable with
        </span>
      </p>

      <div className="mt-10 max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            className="rounded-xl border-2 border-dashed bg-black/25 p-5"
            style={{
              borderColor: cat.chalk,
              rotate: `${seededRotation(idx, 1)}deg`,
            }}
          >
            <h3
              className="flex items-center gap-2 text-2xl font-marker5 font-bold"
              style={{ color: cat.chalk }}
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.title}
            </h3>
            <p className="mt-1 text-sm text-white/85">{cat.hook}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  whileHover={pillHover}
                  transition={pillTransition}
                  className={`cursor-default select-none rounded-full px-3 py-1 font-marker5 text-base ${
                    skill.core
                      ? "font-bold text-[#1f2f26]"
                      : "border-2 border-dashed border-white/70 text-white"
                  }`}
                  style={skill.core ? { background: cat.chalk } : undefined}
                >
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
