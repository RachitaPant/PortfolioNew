"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const aboutMeContent = {
  intro:
    "Think of this as the doodle-filled back pages of my notebook—the part where I scribble dreams, lists, and the occasional existential crisis.",
  hobbies: [
    "Collecting pretty stationery I swear I’ll “use someday”",
    "Reading manga at ungodly hours (One Piece supremacy 🏴‍☠️)",
    "Learning new tech stacks just to make side projects I may abandon halfway",
    "Long coffee dates with… myself",
    "Making playlists that match oddly specific moods (“coding in a café with light rain outside”)",
  ],
  ethics: [
    "Do good work, even if no one is watching – The small details matter.",
    "Be kind, but not a doormat – Boundaries are self-respect.",
    "Curiosity > Comfort – The best ideas come from asking “what if?”",
    "Share knowledge freely – Tech grows when people do.",
  ],
  whoAmI: [
    "The developer who accidentally breaks things just to learn how to fix them",
    "The person who will always choose a book over a party (unless it’s a book party)",
    "The developer who actually reads documentation (and occasionally yells at it)",
    "The friend who will hype you up like it’s my full-time job",
    "An introvert with extrovert moments (only when coffee is involved)",
  ],
};

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-16 w-full  mx-auto bg-[url('/paper-bg3.jpg')] bg-cover bg-repeat relative"
    >
      <div className="flex flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 mx-auto p-6 shadow-md transform -rotate-2 max-w-3xl relative torn-edge"
          style={{}}
        >
          <p className="font-marker text-lg text-[#2b2b2b] leading-relaxed">
            {aboutMeContent.intro}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex flex-row"
      >
        <h3 className="text-3xl font-marker text-center text-[#2b2b2b] mb-6 text-shadow-note">
          Hobbies & Little Joys 🎨
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {aboutMeContent.hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              className="p-4 shadow-md transform max-w-xs torn-edge"
              style={{
                rotate: i % 2 === 0 ? 3 : -3,
                backgroundImage: "url('/paper4.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <span className="font-marker3 text-xs text-[#2b2b2b]">
                {hobby}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] sm:h-[600px] md:h-[500px] flex items-center justify-center"
      >
        {/* Center heading */}
        <h3 className="absolute text-3xl sm:text-4xl md:text-5xl font-marker1 text-center text-[#000] px-4">
          My Ethics & Principles
        </h3>

        {/* Ethics scattered */}
        {aboutMeContent.ethics.map((ethic, i) => {
          const fontClass = `max-w-[150px] sm:max-w-[180px] md:max-w-[200px] font-marker${
            (i % 5) + 1
          }`;
          const positions = [
            { top: "10%", left: "10%" },
            { top: "25%", right: "8%" },
            { bottom: "20%", left: "5%" },
            { bottom: "15%", right: "12%" },
            { top: "55%", left: "3%" },
            { bottom: "40%", right: "5%" },
          ];

          // Mobile-friendly positions (stack more vertically)
          const mobilePositions = [
            { top: "10%", left: "5%" },
            { top: "20%", right: "5%" },
            { top: "60%", left: "5%" },
            { top: "65%", right: "5%" },
            { top: "80%", left: "5%" },
            { top: "95%", right: "5%" },
          ];
          const pos = isMobile
            ? mobilePositions[i % mobilePositions.length]
            : positions[i % positions.length];

          return (
            <motion.div
              key={i}
              className={`absolute bg-white/80 shadow-md p-2 sm:p-3 rounded torn-edge text-sm sm:text-base ${fontClass}`}
              style={{
                ...pos,

                rotate: i % 2 === 0 ? -4 : 3,
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {ethic}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 px-8"
      >
        <h3 className="text-4xl font-marker3 text-center text-[#2b2b2b] mb-10 text-shadow-note">
          Summation of Me
        </h3>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Side */}
          <motion.div
            className="p-4 shadow-lg torn-edge relative"
            style={{
              backgroundImage: "url('/paper5.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Image
              src="/Me2.jpg"
              alt="Me"
              width={220}
              height={160}
              className="rounded shadow-lg transform rotate-3"
            />
            <span className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full shadow" />
          </motion.div>

          {/* Notes Side */}
          <div
            className="flex flex-col gap-4 p-6 bg-white/70 rounded-lg shadow-md"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 28px, rgba(0,0,0,0.05) 29px)",
            }}
          >
            {aboutMeContent.whoAmI.map((trait, i) => (
              <motion.div
                key={i}
                className={`relative flex items-start gap-2 font-marker${
                  (i % 3) + 1
                }`}
                style={{ rotate: i % 2 === 0 ? 1 : 0 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <span className="text-pink-400 z-10">✦</span>

                <span className="relative text-[#2b2b2b] text-lg z-10">
                  <motion.span
                    className="absolute left-0 bottom-0 h-3 bg-yellow-100 rounded-sm -z-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ rotate: i % 2 === 0 ? 1 : -1 }}
                  />
                  {trait}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.section>
  );
};

export default AboutMe;
