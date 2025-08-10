"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPaperclip } from "react-icons/fa";

const projects = [
  {
    title: "Dynamic Anime Community App",
    duration: "Oct 2023 – Jan 2024",
    location: "Remote",
    tech: "React Native (Frontend) | Firebase (Backend)",
    details: [
      "Developed cross-platform mobile app with secure Firebase Authentication.",
      "Integrated Jikan API for real-time anime search with <0.8s response.",
      "Built community features for posts with Firebase Firestore & Storage.",
      "Customizable user profiles with profile pictures & avatars.",
    ],
    link: "https://github.com/RachitaPant/Strawhat",
  },
  {
    title: "Web Performance Resource Analyzer",
    duration: "2024 – 2025",
    location: "",
    tech: "Next.js | Lighthouse | Puppeteer",
    details: [
      "Automated web performance testing tool using Lighthouse & Puppeteer.",
      "Analyzed Core Web Vitals (LCP, FID, CLS) and visualized data with Chart.js.",
      "Provided actionable SEO & performance optimization insights.",
    ],
    link: "https://github.com/RachitaPant/Web-Performance-Analyzer",
  },
];

const pinVariants = {
  hover: { scale: 1.05, rotate: 2 },
  tap: { scale: 0.95, rotate: 0 },
};

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-16 bg-[url('/workstation.jpg')] bg-cover w-full min-h-screen"
    >
      <h2 className="text-4xl font-[cursive] font-bold text-center text-[#fff] mb-12 select-none">
        My Pinboard 📌
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => {
          // random rotation between -6 and +6 degrees for fun scatter effect
          const rotation = (Math.random() * 12 - 6).toFixed(2);

          return (
            <a key={i} href={project.link || "#"}>
              <motion.div
                className="relative bg-yellow-50 rounded-lg shadow-lg w-80 p-6 cursor-pointer select-text"
                style={{ rotate: `${rotation}deg` }}
                whileHover="hover"
                whileTap="tap"
                variants={pinVariants}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                {/* Paperclip icon top-left */}
                <FaPaperclip className="absolute top-3 left-3 text-yellow-400 text-xl rotate-[-15deg] drop-shadow-md" />

                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 italic mb-3">
                  {project.duration}{" "}
                  {project.location && `| ${project.location}`}
                </p>
                <p className="text-sm text-gray-700 mb-3 font-mono">
                  {project.tech}
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm leading-snug">
                  {project.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                {/* Fake tape on bottom right */}
                <div className="absolute bottom-2 right-3 w-12 h-4 bg-yellow-300 rounded rotate-[-12deg] shadow-inner"></div>
              </motion.div>
            </a>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Project;
