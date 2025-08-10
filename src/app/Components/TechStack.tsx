import React from "react";
import { motion } from "framer-motion";

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

const TechStack = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-16 w-full  mx-auto bg-[#2e4a3b] bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url('/chalkboard-texture.jpg')",
      }}
    >
      <h2 className="text-4xl font-handwritten font-bold text-center text-white mb-12 text-shadow-chalk">
        Technical Skills
      </h2>

      <div className="space-y-12">
        {categories.map(({ title, skills }, idx) => (
          <div key={idx} className="p-6">
            <h3 className="text-3xl font-handwritten text-white mb-4 border-b border-white/50 pb-2 text-shadow-chalk">
              {title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 text-white font-handwritten text-xl cursor-default select-none"
                  style={{
                    rotate: Math.random() * 4 - 2,
                    textShadow: "0 0 2px rgba(255,255,255,0.5)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    textShadow: "0 0 4px rgba(255,255,255,0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
