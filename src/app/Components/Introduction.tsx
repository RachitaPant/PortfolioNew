"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// three.js + drei + the 4 MB GLB are a large, entirely optional payload, so
// they are split out and never server-rendered.
const ThreeDScene = dynamic(() => import("@/app/Components/Model"), {
  ssr: false,
});

export default function Intro() {
  /*
   * Previously the whole section was rendered twice — once as plain markup and
   * again as motion elements once `mounted` flipped — which shipped duplicate
   * JSX, forced a full re-render on hydration, and flashed the content in at
   * full opacity before fading it back to 0.
   *
   * Now the section renders once. The only thing gated on the viewport is the
   * 3D scene: mounting it eagerly pulled ~4 MB of GLB plus the three.js chunk
   * onto the network while the page above the fold was still settling. The
   * container reserves its height either way, so nothing shifts when it loads.
   */
  const { ref: sceneRef, inView: sceneNearViewport } = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px",
  });

  return (
    <section className="notebook-lines relative py-16 px-6 bg-[url('/paper-texture3.webp')] torn-edge bg-cover w-full mt-[-60] z-30 overflow-hidden">
      <div className="section-divider-dashed w-full " />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-handwritten sm:text-5xl font-bold text-[#2b2b2b]"
        >
          Let&apos;s get started with the intro ?
        </motion.h2>

        {/* Sticky note */}
        <motion.div
          className="mt-8 bg-pink-200 px-6 py-4 rounded-lg shadow-md max-w-sm"
          style={{ rotate: "-2deg" }}
          whileHover={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <p className="font-[cursive] text-lg text-[#3a3a3a]">
            “I turn coffee ☕ into code 💻… and bugs 🐛 into slightly more
            confusing bugs.”
          </p>
        </motion.div>

        {/* Main text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl"
        >
          Hey there! I’m Rachita — part-time coder, full-time anime enthusiast,
          and occasional plant whisperer 🌿. My portfolio is basically a
          scrapbook of cool things I’ve built, weird ideas I’ve tried, and a few
          things I’ll pretend worked on the first try.
        </motion.p>

        {/* 3D Model */}
        <div
          ref={sceneRef}
          className="flex flex-col md:flex-row mt-10 h-[600px] w-full justify-center items-center overflow-visible"
        >
          {sceneNearViewport && <ThreeDScene />}

          {/* Decorative doodles */}
          <div className="mt-10 flex gap-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-yellow-200 px-4 py-2 rounded-md shadow-md"
              style={{ rotate: "2deg" }}
            >
              <span className="font-[cursive]">💡 Big Ideas</span>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="bg-blue-200 px-4 py-2 rounded-md shadow-md"
              style={{ rotate: "-2deg" }}
            >
              <span className="font-[cursive]">✨ Creative Chaos</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
