"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Experience = {
  title: string;
  company: string;
  domain: string;
  location: string;
  duration: string;
  accent: string;
  // Big numbers shown on the card; the first thing a recruiter reads.
  impact: { value: string; label: string }[];
  tech: string[];
  // `**text**` is rendered as a highlighter mark.
  details: string[];
};

const experiences: Experience[] = [
  {
    title: "Software Development Intern",
    company: "SiteGuide",
    domain: "Trading, edtech, legal-tech & B2B SaaS",
    location: "Remote",
    duration: "July 2025 – Aug 2026",
    accent: "#f9a8d4",
    impact: [
      { value: "5+", label: "production apps shipped" },
      { value: "~50K", label: "users on the trading platform" },
      { value: "1", label: "agentic voice agent (Jarvis)" },
    ],
    tech: ["LiveKit", "LangChain", "Pinecone", "Redis", "Node.js", "Spring Boot", "PostgreSQL", "Next.js", "React Native"],
    details: [
      "Built **Jarvis, a RAG-based agentic voice agent** spanning a trading and content platform's whole ecosystem, with tool-calling, LLM integrations and custom model endpoints for real-time conversations.",
      "Added backend features to a **trading platform serving ~50K users**, and engineered a Udemy-style edtech platform with live courses and Mux video streaming.",
      "Shipped **5+ production full-stack apps** (web & mobile; legal-tech, e-commerce, B2B SaaS), owning design through deployment, testing and code review.",
      "Automated lead capture and WhatsApp/email follow-ups with Pabbly and SendFox, with Google Sheets analytics.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "BetterMyStay",
    domain: "Hospitality booking",
    location: "Remote",
    duration: "Apr 2024 – Aug 2024",
    accent: "#93c5fd",
    impact: [
      { value: "End-to-end", label: "Cashfree payments in React Native" },
      { value: "Plug & play", label: "payment module for other developers" },
    ],
    tech: ["React Native", "React", "Cashfree", "Figma"],
    details: [
      "Built a React Native CLI module integrating the **Cashfree payment gateway end-to-end** (transaction flow, error handling, callbacks), cutting developer onboarding time.",
      "Defined API contracts with the backend team for transaction-status callbacks, so payment success and failure were handled reliably.",
      "Designed subscription and media UIs in Figma and shipped a **responsive React landing page**, improving accessibility and load time.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "FuelCab India",
    domain: "Mobility",
    location: "Remote",
    duration: "Oct 2023 – Jan 2024",
    accent: "#fde047",
    impact: [{ value: "15%", label: "faster releases" }],
    tech: ["React.js", "Tailwind CSS"],
    details: [
      "Built React.js/Tailwind CSS web solutions focused on maintainability and customer experience; streamlined delivery workflows, **cutting release time by 15%**.",
    ],
  },
];

function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/).map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="bg-yellow-200 px-1 rounded-sm font-semibold text-[#2b2b2b]">
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 notebook-lines px-4 sm:px-8 py-16 w-full bg-[url('/paper-texture3.webp')] bg-cover bg-repeat relative z-10"
    >
      <h2 className="text-5xl font-handwritten font-bold text-center text-[#2b2b2b]">
        Where I&apos;ve worked
      </h2>
      <p className="mt-2 text-center text-gray-700">
        3 internships · web, mobile &amp; AI, all shipped to real users
      </p>

      {/* Timeline: a vertical line with one dot per role. */}
      <ol className="relative mt-12 max-w-4xl mx-auto border-l-4 border-dashed border-[#2b2b2b]/30 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp) => (
          <motion.li
            key={exp.company}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <span
              className="absolute -left-[38px] sm:-left-[54px] top-6 h-6 w-6 rounded-full border-4 border-[#fdf6e3] shadow"
              style={{ background: exp.accent }}
              aria-hidden="true"
            />

            <article className="overflow-hidden rounded-xl bg-white shadow-lg">
              <header
                className="flex flex-wrap items-start justify-between gap-3 px-6 py-4"
                style={{ background: exp.accent }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#2b2b2b]">{exp.company}</h3>
                  <p className="text-sm font-semibold text-[#2b2b2b]/80">
                    {exp.title} · {exp.domain}
                  </p>
                </div>
                <p className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-[#2b2b2b]">
                  {exp.duration} · {exp.location}
                </p>
              </header>

              <div className="p-6">
                <ul className="grid gap-3 sm:grid-cols-3">
                  {exp.impact.map((item) => (
                    <li
                      key={item.label}
                      className="rounded-lg border-2 border-dashed p-3"
                      style={{ borderColor: exp.accent }}
                    >
                      <p className="text-2xl font-bold text-[#b45309]">{item.value}</p>
                      <p className="text-sm text-gray-700 leading-snug">{item.label}</p>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
                  {exp.details.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#b45309]" aria-hidden="true">▸</span>
                      <span>
                        <Highlighted text={point} />
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
                  {exp.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded bg-gray-100 px-2 py-1 font-mono text-xs text-gray-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
