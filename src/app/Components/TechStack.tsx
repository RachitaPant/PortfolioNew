"use client";

import React from "react";
import { motion } from "framer-motion";
import { seededRotation } from "@/lib/rotation";

const categories = [
  {
    title: "Languages",
    skills: [
      "C++",
      "Java",
      "Python",
      "SQL",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Zustand",
      "Redux",
      "Context API",
      "Framer Motion",
      "Tailwind CSS",
      "Bootstrap",
      "Axios",
      "Express.js",
      "Node.js",
      "Pandas",
      "NumPy",
      "Jest",
      "React Testing Library",
      "Expo Router",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Android Studio",
      "Visual Studio Code",
      "Jupyter Notebook",
      "Git",
      "GitHub",
      "ClickUp",
      "Expo EAS",
      "Postman",
      "Intellij Idea",
      "ChatGPT",
    ],
  },
  {
    title: "Operating Systems",
    skills: ["Ubuntu (Linux)", "Windows"],
  },
];

// Hoisted out of render: a new object literal here would be a fresh reference
// on every render for all ~40 spans.
const skillHover = {
  scale: 1.05,
  rotate: 0,
  textShadow: "0 0 4px rgba(255,255,255,0.8)",
};

const skillTransition = { type: "spring", stiffness: 300, damping: 15 } as const;

const TechStack = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-16 w-full  mx-auto bg-[#2e4a3b] bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url('/chalkboard-texture.webp')",
      }}
    >
      <h2 className="text-4xl font-handwritten font-bold text-center text-white mb-12 text-shadow-chalk">
        Technical Skills
      </h2>

      <div className="space-y-12">
        {categories.map(({ title, skills }, idx) => (
          <div key={title} className="p-6">
            <h3 className="text-3xl font-handwritten text-white mb-4 border-b border-white/50 pb-2 text-shadow-chalk">
              {title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 text-white font-handwritten text-xl cursor-default select-none"
                  style={{
                    // Was `Math.random()` — a hydration mismatch on every span.
                    rotate: seededRotation(idx * 100 + i, 2),
                    textShadow: "0 0 2px rgba(255,255,255,0.5)",
                  }}
                  whileHover={skillHover}
                  transition={skillTransition}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
