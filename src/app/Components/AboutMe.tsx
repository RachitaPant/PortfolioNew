"use client";

import Image from "next/image";
import React from "react";
import { motion, type MotionStyle } from "framer-motion";

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

/*
 * Both of these arrays used to be declared *inside* the .map() callback, so a
 * fresh copy of each was allocated for every note on every render. They are
 * static data — they belong at module scope.
 *
 * They are now emitted as CSS custom properties and switched by a media query
 * (see .ethic-note in globals.css) rather than by a JS `isMobile` flag.
 */
const NOTE_POSITIONS = [
  { "--n-top": "10%", "--n-left": "10%" },
  { "--n-top": "25%", "--n-right": "8%" },
  { "--n-bottom": "20%", "--n-left": "5%" },
  { "--n-bottom": "15%", "--n-right": "12%" },
  { "--n-top": "55%", "--n-left": "3%" },
  { "--n-bottom": "40%", "--n-right": "5%" },
];

const NOTE_POSITIONS_MOBILE = [
  { "--m-top": "10%", "--m-left": "5%" },
  { "--m-top": "20%", "--m-right": "5%" },
  { "--m-top": "60%", "--m-left": "5%" },
  { "--m-top": "65%", "--m-right": "5%" },
  { "--m-top": "80%", "--m-left": "5%" },
  { "--m-top": "95%", "--m-right": "5%" },
];

// Hoisted animation objects — previously new literals on every render.
const noteHover = { scale: 1.05, rotate: 0 };
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 15,
} as const;

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-16 w-full  mx-auto bg-[url('/paper-bg3.webp')] bg-cover bg-repeat relative"
    >
      <div className="flex flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 mx-auto p-6 shadow-md transform -rotate-2 max-w-3xl relative torn-edge"
        >
          <p className="font-marker text-lg text-[#2b2b2b] leading-relaxed">
            {aboutMeContent.intro}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex flex-row"
      >
        <h3 className="text-3xl font-marker text-center text-[#2b2b2b] mb-6 text-shadow-note">
          Hobbies & Little Joys 🎨
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {aboutMeContent.hobbies.map((hobby, i) => (
            <motion.div
              key={hobby}
              className="p-4 shadow-md transform max-w-xs torn-edge bg-[url('/paper4.webp')] bg-cover bg-no-repeat"
              style={{ rotate: i % 2 === 0 ? 3 : -3 }}
              whileHover={noteHover}
              transition={springTransition}
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] sm:h-[600px] md:h-[500px] flex items-center justify-center"
      >
        {/* Center heading */}
        <h3 className="absolute text-3xl sm:text-4xl md:text-5xl font-marker1 text-center text-[#000] px-4">
          My Ethics & Principles
        </h3>

        {/* Ethics scattered */}
        {aboutMeContent.ethics.map((ethic, i) => (
          <motion.div
            key={ethic}
            className={`ethic-note absolute bg-white/80 shadow-md p-2 sm:p-3 rounded torn-edge text-sm sm:text-base max-w-[150px] sm:max-w-[180px] md:max-w-[200px] font-marker${
              (i % 5) + 1
            }`}
            style={
              {
                ...NOTE_POSITIONS[i % NOTE_POSITIONS.length],
                ...NOTE_POSITIONS_MOBILE[i % NOTE_POSITIONS_MOBILE.length],
                rotate: i % 2 === 0 ? -4 : 3,
              } as MotionStyle
            }
            whileHover={noteHover}
            transition={springTransition}
          >
            {ethic}
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 px-8"
      >
        <h3 className="text-4xl font-marker3 text-center text-[#2b2b2b] mb-10 text-shadow-note">
          Summation of Me
        </h3>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Side */}
          <div className="anim-photo-wobble p-4 shadow-lg torn-edge relative bg-[url('/paper5.webp')] bg-cover bg-no-repeat">
            <Image
              src="/Me2.webp"
              alt="Rachita Pant"
              width={220}
              height={160}
              sizes="220px"
              className="rounded shadow-lg transform rotate-3"
            />
            <span
              className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full shadow"
              aria-hidden="true"
            />
          </div>

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
                key={trait}
                className={`relative flex items-start gap-2 font-marker${
                  (i % 3) + 1
                }`}
                style={{ rotate: i % 2 === 0 ? 1 : 0 }}
                whileHover={noteHover}
                transition={springTransition}
              >
                <span className="text-pink-400 z-10" aria-hidden="true">
                  ✦
                </span>

                <span className="relative text-[#2b2b2b] text-lg z-10">
                  {/*
                    This highlighter sweep animated `width` from 0 to 100%,
                    which forces a layout pass on every frame for all five
                    lines. scaleX from a left origin is visually identical and
                    runs entirely on the compositor.
                  */}
                  <motion.span
                    className="absolute left-0 bottom-0 h-3 w-full origin-left bg-yellow-100 rounded-sm -z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ rotate: i % 2 === 0 ? 1 : -1 }}
                    aria-hidden="true"
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
