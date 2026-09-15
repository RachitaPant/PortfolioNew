"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
const experiences = [
  {
    title: "Software Development Intern",
    company: "SiteGuide",
    location: "Remote",
    duration: "July 2025 – Present",
    tech: ["Node.js", "Express", "Spring Boot", "PostgreSQL", "Next.js", "React Native"],
    details: [
      "Shipped 5+ production full-stack applications (web & mobile) across edtech, legal-tech, e-commerce, and B2B SaaS — owning design through deployment, writing tests, and participating in code review with senior engineers.",
      "Built a Udemy-style edtech platform (live courses, Mux video, instructor/admin dashboards), a legal-tech platform with multi-role lawyer/claimant workflows, and a B2B SaaS director-appointment and due-diligence system.",
      "Implemented SEO-optimized e-commerce with SSR and ISR in Next.js; built a RAG-based AI voice agent (LiveKit, LangChain, Pinecone, Redis); contributed backend features to a trading/analytics platform serving 50K users.",
      "Built an end-to-end lead-management automation system: custom Pabbly Chatflow bots for WhatsApp/email capture, Pabbly Connect workflows for multi-step follow-ups, and SendFox campaigns, with activity piped into Google Sheets for real-time analytics.",
    ],
    highlight:
      "Shipped 5+ production full-stack apps across edtech, legal-tech, e-commerce, and B2B SaaS.",
  },
  {
    title: "Software Development Intern",
    company: "BetterMyStay",
    location: "Remote",
    duration: "April 2024 – August 2024",
    tech: ["React", "React Native", "UI/UX - Figma"],
    details: [
      "Integrated Cashfree payment gateway in React Native CLI application, overcoming limited documentation and tackling complex transaction flows.",
      "Designed a subscription model workflow, focusing on streamlining onboarding and improving retention.",
      "Proper payment gateway integration ensureing secure transactions and builing user trust.",
    ],
    highlight:
      "Tackled Cashfree integration despite scarce documentation , learnt more about responsive development in web",
  },
  {
    title: "Frontend Intern",
    company: "FuelCab India",
    location: "Remote",
    duration: " Oct 2023 - Jan 2024",
    tech: ["React.js", "Tailwind CSS"],
    details: [
      "Enhanced app usability by implementing modern accessibility standards and best practices.",
      "Optimized project workflows, reducing development time by 15% through better collaboration.",
    ],
    highlight:
      "Reduced development time by 15% through workflow optimizations.",
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
    <section className="notebook-lines px-4 sm:px-8 py-16 w-full bg-[url('/paper-texture3.webp')] bg-cover bg-repeat relative mt-[-100px] z-10 ">
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
