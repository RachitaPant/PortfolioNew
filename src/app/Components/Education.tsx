"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const COLLEGE_STATS = [
  { value: "7.98", label: "CGPA / 10" },
  { value: "AIR 8k", label: "GATE CSE '26" },
  { value: "400+", label: "DSA problems solved" },
];

const COLLEGE_HIGHLIGHTS = [
  "1st Prize, Manthan 2024 RoboSync (30+ teams)",
  "Top 10 finalist, Navdhara 2024",
  "Campus ambassador: GeeksforGeeks, AlgoZenith, IEEE",
  "Ran workshops and mentored juniors",
];

const SCHOOLS = [
  {
    name: "Doon Valley International School",
    board: "CBSE · Class XII, Science",
    score: "95.6%",
    note: "Topped my batch; first met MySQL and Python.",
    image: "/school2.webp",
    tape: "bg-blue-200",
  },
  {
    name: "The Montessori School, Dehradun",
    board: "ICSE · Class X",
    score: "95.4%",
    note: "All Rounder of the Year; a poem published in The Times of India; first Java program.",
    image: "/montessori.avif",
    tape: "bg-pink-200",
  },
];

const cardHover = { rotate: 0, y: -4 };
const cardTransition = { type: "spring", stiffness: 200, damping: 20 } as const;

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="px-4 sm:px-8 py-16 bg-[url('/paper-bg2.webp')] bg-cover w-full torn-edge z-20"
    >
      <h2 className="text-5xl font-handwritten font-bold text-center text-[#2b2b2b]">
        My Learning Chapters 📚
      </h2>

      {/* College: the main chapter */}
      <motion.article
        whileHover={cardHover}
        initial={{ rotate: -1 }}
        transition={cardTransition}
        className="relative mt-12 max-w-5xl mx-auto grid overflow-hidden rounded-xl bg-[#fffbea] shadow-xl md:grid-cols-[2fr_3fr]"
      >
        <span
          className="absolute -top-1 left-8 z-10 h-6 w-20 bg-yellow-300/80 rotate-[-6deg]"
          aria-hidden="true"
        />
        <div className="relative min-h-[220px]">
          <Image
            src="/college.webp"
            alt="G. B. Pant Institute of Engineering and Technology campus"
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#b45309]">
            Now · 2023 – 2027
          </p>
          <h3 className="mt-1 text-2xl font-bold text-[#2b2b2b]">
            G. B. Pant Institute of Engineering and Technology
          </h3>
          <p className="text-gray-700">B.Tech, Computer Science and Engineering · Pauri</p>

          <ul className="mt-4 grid grid-cols-3 gap-3">
            {COLLEGE_STATS.map((stat) => (
              <li key={stat.label} className="rounded-lg bg-white p-3 text-center shadow">
                <p className="text-2xl font-bold text-[#2b2b2b]">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-2">
            {COLLEGE_HIGHLIGHTS.map((h) => (
              <li
                key={h}
                className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-gray-800"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>

      {/* School: earlier chapters, kept compact */}
      <h3 className="mt-14 text-3xl font-handwritten font-bold text-center text-[#2b2b2b]">
        Earlier chapters
      </h3>
      <div className="mt-6 max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {SCHOOLS.map((school, i) => (
          <motion.article
            key={school.name}
            whileHover={cardHover}
            initial={{ rotate: i % 2 === 0 ? 1.5 : -1.5 }}
            transition={cardTransition}
            className="relative flex gap-4 rounded-lg bg-white p-4 shadow-lg"
          >
            <span
              className={`absolute -top-3 right-6 h-5 w-14 ${school.tape} rotate-[5deg] opacity-80`}
              aria-hidden="true"
            />
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md">
              <Image
                src={school.image}
                alt={school.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-[#2b2b2b] leading-tight">{school.name}</h4>
              <p className="text-sm text-gray-600">{school.board}</p>
              <p className="mt-1 text-2xl font-bold text-[#b45309]">{school.score}</p>
              <p className="text-sm text-gray-700">{school.note}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
