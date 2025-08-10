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
    tech: ["Next.js", "React Native", "Zustand", "Axios"],
    details: [
      "Developed and integrated real-time community features (polling, voice notes ) for a production app with existing userbase, optimizing audio processing to eliminate buffering.",
      " Worked on Redesigning of production-level applications with modular code.",
      "Contributed to agile debugging sprints in ClickUp, resolving critical bugs for robust functionality.",
    ],
    highlight:
      "Optimized audio processing to eliminate buffering in real-time community features.",
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

export default function Experience() {
  return (
    <section className="px-4 sm:px-8 py-16 w-full bg-[url('/paper-texture3.jpg')] bg-cover bg-repeat relative mt-[-100px] z-10 ">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:100%_2.5rem] pointer-events-none" />

      <h2 className="text-4xl font-marker5 font-bold text-center text-[#2b2b2b] mb-12 text-shadow-note mt-16">
        Work Experience :
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 bg-white/80 backdrop-blur-sm shadow-md rounded-lg transform relative torn-edge-card"
          >
            {/* Highlight Quote Bubble */}
            <div className="absolute -top-4 right-4 p-3 bg-yellow-100 rounded-full shadow-md transform rotate-3 text-xs font-marker3 text-[#2b2b2b] max-w-xs text-center">
              "{exp.highlight}"
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
              {exp.tech.map((tech, j) => (
                <motion.span
                  key={j}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium transform rotate-1"
                  variants={techTagVariants}
                  whileHover="hover"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Details List */}
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              {exp.details.map((point, idx) => (
                <li key={idx} className="leading-relaxed">
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
