"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
const experiences = [
  {
    title: "Software Development Intern",
    company: "SiteGuide",
    location: "Remote",
    duration: "July 2025 – Aug 2026",
    tech: ["LiveKit", "LangChain", "Pinecone", "Redis", "Node.js", "Spring Boot", "PostgreSQL", "Next.js", "React Native"],
    details: [
      "Built Jarvis, a RAG-based agentic voice agent spanning the full software ecosystem of a trading and content platform, with tool-calling, LLM integrations and custom model endpoints for real-time conversations.",
      "Added backend features to a trading platform serving ~50K users, and engineered a Udemy-style edtech platform with live courses and Mux video streaming.",
      "Shipped 5+ production full-stack apps (web & mobile; legal-tech, e-commerce, B2B SaaS), owning design through deployment, testing and code review.",
      "Automated lead capture and WhatsApp/email follow-ups with Pabbly and SendFox, with Google Sheets analytics.",
    ],
    highlight: "Shipped 5+ production apps and an agentic voice agent.",
  },
  {
    title: "Software Development Intern",
    company: "BetterMyStay",
    location: "Remote",
    duration: "April 2024 – August 2024",
    tech: ["React Native", "React", "Cashfree", "Figma"],
    details: [
      "Built a React Native CLI module integrating the Cashfree payment gateway end-to-end (transaction flow, error handling, callbacks), delivering plug-and-play payments and cutting developer onboarding time.",
      "Defined API contracts with the backend team for transaction-status callbacks, ensuring reliable handling of payment success and failure across the client.",
      "Designed subscription and media UIs in Figma and shipped a responsive React landing page, improving accessibility and page load time.",
    ],
    highlight: "Plug-and-play payment integration in React Native.",
  },
  {
    title: "Software Development Intern",
    company: "FuelCab India",
    location: "Remote",
    duration: "Oct 2023 – Jan 2024",
    tech: ["React.js", "Tailwind CSS"],
    details: [
      "Built React.js/Tailwind CSS web solutions focused on maintainability and customer experience; streamlined delivery workflows, cutting release time by 15%.",
    ],
    highlight: "Cut release time by 15%.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotate: -1 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const techTagVariants = {
  hover: { scale: 1.05, rotate: 2 },
};

// Hoisted so the ~9 tech tags don't each get a fresh object every render.
const techTagTransition = { type: "spring", stiffness: 300 } as const;

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 notebook-lines px-4 sm:px-8 py-16 w-full bg-[url('/paper-texture3.webp')] bg-cover bg-repeat relative z-10 ">
      <h2 className="text-4xl font-marker5 font-bold text-center text-[#2b2b2b] mb-12 text-shadow-note mt-16">
        Work Experience :
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/*
          A backdrop blur was removed from these cards. It makes the compositor
          re-sample and blur everything behind each card on every scroll frame,
          and behind an 80%-opaque white fill only about a fifth of that blurred
          backdrop was ever visible — a near-invisible effect paid for with a
          per-frame backdrop pass directly on the scroll path.

          (Deliberately not naming the utility class here: Tailwind scans source
          files for bare strings, so writing it in a comment is enough to
          regenerate the dead rule in the stylesheet.)
        */}
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 bg-white/80 shadow-md rounded-lg transform relative torn-edge-card"
          >
            {/* Highlight Quote Bubble */}
            <div className="absolute  -top-10 md:-top-5 lg:-top-4 right-1  md:right-4 p-3 bg-yellow-100 rounded-full shadow-md transform rotate-3 text-xs font-marker3 text-[#2b2b2b] max-w-xs text-center">
              &quot;{exp.highlight}&quot;
            </div>

            <h3 className="text-2xl font-handwritten font-bold text-[#2b2b2b]">
              {exp.title}
            </h3>
            <p className="text-gray-700 font-semibold">
              {exp.company} — {exp.location}
            </p>
            <p className="text-sm text-gray-500 italic">{exp.duration}</p>

            {/* Tech Stack Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium transform rotate-1"
                  variants={techTagVariants}
                  whileHover="hover"
                  transition={techTagTransition}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Details List */}
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              {exp.details.map((point) => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
