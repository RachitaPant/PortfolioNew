"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";
const Hero = () => {
  const planeVariants: Variants = {
    leftToRight: {
      x: [-100, 200, 500, 900], // Crashing path across horizontally
      y: [-100, 50, 300, 600], // Downward crash
      rotate: [0, 15, -20, 10], // Tilts
      scale: [1, 1.1, 0.95, 1], // Slight depth
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
    rightToLeft: {
      x: [900, 500, 200, -100],
      y: [-100, 30, 280, 600],
      rotate: [0, -15, 20, -10],
      scale: [1, 1.1, 0.95, 1],
      transition: {
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  const smallPlaneVariants: Variants = {
    leftToRight: {
      x: ["-10vw", "30vw", "40vw", "50vw", "60vw", "80vw", "90vw"], // Zig-zag across full screen
      y: ["-10vh", "40vh", "80vh", "40vh", "30vh", "10vh", "-10vh"], // Curved, jagged vertical path
      rotate: [0, 0, 90, 80, 70, 15, 0], // Playful tilting
      scale: [1, 1.05, 1, 1.1, 1, 1.05, 1], // Subtle depth
      transition: {
        duration: 4, // Slower for playful effect
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse", // Back-and-forth zig-zag
      },
    },
    rightToLeft: {
      x: ["90vw", "80vw", "50vw", "20vw", "0vw", "-10vw", "-20vw"],
      y: ["-10vh", "10vh", "20vh", "50vh", "40vh", "60vh", "80vh"],
      rotate: [0, -10, 15, -20, 10, -15, 0],
      scale: [1, 1.05, 1, 1.1, 1, 1.05, 1],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const smallPlaneVariants2: Variants = {
    leftToRight: {
      x: ["-30vw", "40vw", "80vw", "100vw", "120vw", "80vw", "90vw"], // Zig-zag across full screen
      y: ["-10vh", "50vh", "30vh", "40vh", "30vh", "50vh", "80vh"], // Curved, jagged vertical path
      rotate: [0, 10, 25, 35, -10, 15, 0], // Playful tilting
      scale: [1, 1.05, 1, 1.1, 1, 1.05, 1], // Subtle depth
      transition: {
        duration: 6, // Slower for playful effect
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    rightToLeft: {
      x: ["90vw", "120vw", "80vw", "20vw", "0vw", "-10vw", "-20vw"],
      y: ["-20vh", "40vh", "30vh", "50vh", "40vh", "60vh", "80vh"],
      rotate: [0, -10, 15, -20, 10, -15, 0],
      scale: [1, 1.05, 1, 1.1, 1, 1.05, 1],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const [direction, setDirection] = useState<"leftToRight" | "rightToLeft">(
    "leftToRight"
  );
  const [direction2, setDirection2] = useState<"leftToRight" | "rightToLeft">(
    "rightToLeft"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) =>
        prev === "leftToRight" ? "rightToLeft" : "leftToRight"
      );
      setDirection2((prev) =>
        prev === "leftToRight" ? "rightToLeft" : "leftToRight"
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center py-20 px-6 text-center bg-[url('/paper-texture.jpg')] bg-cover w-full overflow-hidden torn-edge z-[40] mt-[-40]"
    >
      {/* Notebook Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:100%_2.5rem] pointer-events-none" />

      {/* Big Paper Plane */}
      <motion.div
        className="absolute w-12 h-12 z-0"
        variants={planeVariants}
        animate={direction}
        style={{ top: 0, left: 0 }}
      >
        <Image
          src="/plane.png"
          alt="Big Paper Plane"
          width={48}
          height={48}
          style={{
            transform:
              direction === "leftToRight" ? "rotate(90deg)" : "rotate(180deg)",
          }}
          className="object-contain drop-shadow-md"
        />
      </motion.div>

      {/* Smaller Paper Plane 1 */}
      <motion.div
        className="absolute w-8 h-8 z-0 opacity-80"
        variants={smallPlaneVariants}
        animate={direction}
        transition={{ delay: 0.3 }}
        style={{ top: "40%", left: "5%" }}
      >
        <Image
          src="/plane.png"
          alt="Small Paper Plane 1"
          width={32}
          height={32}
          style={{
            transform:
              direction === "leftToRight" ? "rotate(70deg)" : "rotate(190deg)",
          }}
          className="object-contain drop-shadow-md"
        />
      </motion.div>

      {/* Smaller Paper Plane 2 */}
      <motion.div
        className="absolute w-6 h-6 z-0 opacity-60"
        variants={smallPlaneVariants2}
        animate={direction2}
        transition={{ delay: 0.6 }}
        style={{ top: "25%", left: "20%" }}
      >
        <Image
          src="/plane.png"
          alt="Small Paper Plane 2"
          width={24}
          height={24}
          style={{
            transform:
              direction === "leftToRight" ? "rotate(60deg)" : "rotate(190deg)",
          }}
          className="object-contain drop-shadow-md"
        />
      </motion.div>

      {/* Title */}
      <h1 className="relative font-handwritten text-5xl sm:text-6xl font-bold font-[cursive] text-[#2b2b2b] z-10">
        Career Journal ~ Rachita
      </h1>

      {/* Subtitle */}
      <p className="relative mt-4 text-lg sm:text-xl text-gray-700 max-w-xl z-10">
        A notebook of my growth, projects, and ideas — where every page tells a
        story.
      </p>

      {/* Profile Image - Sticky Note Style */}
      <motion.div
        className="relative mt-10 p-4 bg-yellow-200 rounded-lg shadow-lg rotate-[-3deg] inline-block z-10"
        animate={{ rotate: [-3, 0, -3] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <Image
          src="/Me.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-md shadow-md"
        />
        <span className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full shadow" />
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-6 text-gray-500 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓ Scroll to Explore
      </motion.div>
    </motion.section>
  );
};

export default Hero;
