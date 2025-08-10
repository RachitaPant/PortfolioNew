"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Load 3D model only on client
const ThreeDScene = dynamic(() => import("@/app/Components/Model"), {
  ssr: false,
});

export default function Intro() {
  const [mounted, setMounted] = useState(false);

  // Ensure animations & 3D model only start after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-16 px-6 bg-[url('/paper-texture3.jpg')] torn-edge bg-cover w-full mt-[-60] z-30 overflow-hidden">
      <div className="section-divider-dashed w-full " />

      {/* Notebook lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:100%_2.5rem] pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        {mounted ? (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-handwritten sm:text-5xl font-[cursive] font-bold text-[#2b2b2b]"
          >
            Let&apos;s get started with the intro ?
          </motion.h2>
        ) : (
          <h2 className="text-3xl font-handwritten sm:text-5xl font-[cursive] font-bold text-[#2b2b2b]">
            Let&apos;s get started with the intro ?
          </h2>
        )}

        {/* Sticky note */}
        {mounted ? (
          <motion.div
            className="mt-8 bg-pink-200 px-6 py-4 rounded-lg shadow-md max-w-sm"
            style={{ rotate: "-2deg" }} // fixed rotation for SSR
            whileHover={{ rotate: 0 }}
          >
            <p className="font-[cursive] text-lg text-[#3a3a3a]">
              “I turn coffee ☕ into code 💻… and bugs 🐛 into slightly more
              confusing bugs.”
            </p>
          </motion.div>
        ) : (
          <div
            className="mt-8 bg-pink-200 px-6 py-4 rounded-lg shadow-md max-w-sm"
            style={{ rotate: "-2deg" }}
          >
            <p className="font-[cursive] text-lg text-[#3a3a3a]">
              “I turn coffee ☕ into code 💻… and bugs 🐛 into slightly more
              confusing bugs.”
            </p>
          </div>
        )}

        {/* Main text */}
        {mounted ? (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl"
          >
            Hey there! I’m Rachita — part-time coder, full-time anime
            enthusiast, and occasional plant whisperer 🌿. My portfolio is
            basically a scrapbook of cool things I’ve built, weird ideas I’ve
            tried, and a few things I’ll pretend worked on the first try.
          </motion.p>
        ) : (
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
            Hey there! I’m Rachita — part-time coder, full-time anime
            enthusiast, and occasional plant whisperer 🌿. My portfolio is
            basically a scrapbook of cool things I’ve built, weird ideas I’ve
            tried, and a few things I’ll pretend worked on the first try.
          </p>
        )}

        {/* 3D Model */}
        <div className="fle flex-col lg:flex-row mt-10 h-[600px] w-full justify-center items-center overflow-visible">
          {mounted && <ThreeDScene />}

          {/* Decorative doodles */}
          <div className="mt-10 flex gap-6">
            {mounted ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-yellow-200 px-4 py-2 rounded-md shadow-md"
                  style={{ rotate: "2deg" }}
                >
                  <span className="font-[cursive]">💡 Big Ideas</span>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                  className="bg-blue-200 px-4 py-2 rounded-md shadow-md"
                  style={{ rotate: "-2deg" }}
                >
                  <span className="font-[cursive]">✨ Creative Chaos</span>
                </motion.div>
              </>
            ) : (
              <>
                <div
                  className="bg-yellow-200 px-4 py-2 rounded-md shadow-md items-center justify-center"
                  style={{ rotate: "2deg" }}
                >
                  <span className="font-[cursive] mt-10">💡 Big Ideas</span>
                </div>
                <div
                  className="bg-blue-200 px-4 py-2 rounded-md shadow-md"
                  style={{ rotate: "-2deg" }}
                >
                  <span className="font-[cursive] mt-10">
                    ✨ Creative Chaos
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
