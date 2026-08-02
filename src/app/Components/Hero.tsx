"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/*
 * The three paper planes and the two idle wobbles used to be framer-motion
 * `repeat: Infinity` animations, driven by a main-thread rAF loop for the
 * lifetime of the page. On top of that a 4s setInterval flipped a `direction`
 * state, re-rendering the whole hero (and all four <Image>s) fifteen times a
 * minute purely to reverse the animations.
 *
 * All of that ambient motion is now pure CSS `infinite alternate` keyframes on
 * transform only (see globals.css). The compositor runs them, the browser
 * throttles them while off-screen, and this component renders exactly once.
 */
const PLANES = [
  {
    animation: "anim-plane-lg",
    box: "w-12 h-12",
    opacity: "",
    position: { top: 0, left: 0 },
    size: 48,
  },
  {
    animation: "anim-plane-sm1",
    box: "w-8 h-8",
    opacity: "opacity-80",
    position: { top: "40%", left: "5%" },
    size: 32,
  },
  {
    animation: "anim-plane-sm2",
    box: "w-6 h-6",
    opacity: "opacity-60",
    position: { top: "25%", left: "20%" },
    size: 24,
  },
];

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="notebook-lines relative flex flex-col items-center justify-center py-20 px-6 text-center bg-[url('/paper-texture.webp')] bg-cover w-full overflow-hidden torn-edge z-[40] mt-[-40]"
    >
      {/* Paper planes — decorative, so hidden from assistive tech. */}
      {PLANES.map((plane) => (
        <div
          key={plane.animation}
          className={`${plane.animation} absolute z-0 ${plane.box} ${plane.opacity}`}
          style={plane.position}
          aria-hidden="true"
        >
          {/*
            Two composed transforms, as in the original: the wrapper carries the
            flight path and its tilt, the image carries the nose direction,
            which flips when the plane turns around.
          */}
          <Image
            src="/plane.webp"
            alt=""
            width={plane.size}
            height={plane.size}
            className={`${plane.animation}-nose object-contain drop-shadow-md`}
          />
        </div>
      ))}

      {/* Title */}
      <h1 className="relative font-handwritten text-5xl sm:text-6xl font-bold text-[#2b2b2b] z-10">
        Career Journal ~ Rachita
      </h1>

      {/* Subtitle */}
      <p className="relative mt-4 text-lg sm:text-xl text-gray-700 max-w-xl z-10">
        A notebook of my growth, projects, and ideas — where every page tells a
        story.
      </p>

      {/* Profile Image - Sticky Note Style */}
      <div className="anim-sticky-wobble relative mt-10 p-4 bg-yellow-200 rounded-lg shadow-lg inline-block z-10">
        <Image
          src="/Me.webp"
          alt="Portrait of Rachita Pant"
          width={150}
          height={150}
          priority
          sizes="150px"
          className="rounded-md shadow-md"
        />
        <span
          className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full shadow"
          aria-hidden="true"
        />
      </div>

      {/* Scroll Hint */}
      <div
        className="anim-scroll-hint absolute bottom-6 text-gray-500 z-10"
        aria-hidden="true"
      >
        ↓ Scroll to Explore
      </div>
    </motion.section>
  );
};

export default Hero;
