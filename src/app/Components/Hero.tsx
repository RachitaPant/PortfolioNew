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
const TETRIS_COLORS: Record<string, string> = {
  i: "#31c7ef",
  o: "#f7d308",
  t: "#ad4d9c",
  s: "#42b642",
  z: "#ef2029",
  j: "#5a65ad",
  l: "#ef7921",
};

const TETRIS_PIECES = [
  { shape: "i", left: "6%", land: "48vh", duration: "7s", delay: "0s" },
  { shape: "o", left: "18%", land: "58vh", duration: "6s", delay: "1.2s" },
  { shape: "t", left: "30%", land: "42vh", duration: "8s", delay: "2.4s" },
  { shape: "s", left: "44%", land: "60vh", duration: "6.5s", delay: "0.6s" },
  { shape: "z", left: "58%", land: "50vh", duration: "7.5s", delay: "3s" },
  { shape: "j", left: "70%", land: "45vh", duration: "9s", delay: "1.8s" },
  { shape: "l", left: "82%", land: "56vh", duration: "6s", delay: "4s" },
] as const;

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

// What the "Currently working on" panel shows.
const NOW = [
  {
    title: "Lean Agents",
    tag: "Multi-agent",
    text: "Cutting the tokens tool-using agents burn on free-tier LLMs, proven on the BFCL benchmark. Next up: the evaluation harness.",
    href: "https://lean-agents-brown.vercel.app",
    linkLabel: "Try the live demo",
  },
  {
    title: "ODAS",
    tag: "Research",
    text: "Making computer-use agents act reliably: detecting uncertain outcomes and preventing duplicate side effects. Building the test desktop and scenarios now.",
    href: undefined,
    linkLabel: "",
  },
];

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="top"
      className="notebook-lines relative flex flex-col items-center justify-center py-20 px-6 text-center bg-[#fdf6e3] w-full overflow-hidden torn-edge z-[40] mt-[-40]"
    >
      {/* Tetris board — decorative, CSS-only, hidden from assistive tech. */}
      <div className="tetris-board" aria-hidden="true">
        {TETRIS_PIECES.map((piece) => (
          <div
            key={piece.shape}
            className={`tetris-piece tetris-${piece.shape}`}
            style={
              {
                left: piece.left,
                "--land": piece.land,
                animationDuration: piece.duration,
                animationDelay: piece.delay,
              } as React.CSSProperties
            }
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="tetris-block"
                style={{ background: TETRIS_COLORS[piece.shape] }}
              />
            ))}
          </div>
        ))}
      </div>

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

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-gray-700 shadow">
            <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
            Open to SDE &amp; AI Engineer roles · 2026
          </p>

          <h1 className="mt-5 text-4xl sm:text-6xl font-bold text-[#2b2b2b] leading-tight">
            Rachita Pant
            <span className="block font-handwritten text-5xl sm:text-7xl text-[#b45309]">
              Full-stack &amp; AI Engineer
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-xl">
            I build production web apps and reliable AI agents, from Spring
            Boot APIs to multi-agent LLM systems. 5+ apps shipped across
            three internships.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="#work"
              className="rounded-md bg-[#2b2b2b] px-6 py-3 font-semibold text-white shadow hover:bg-black"
            >
              View my work ↓
            </a>
            <a
              href="/Rachita_Pant_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-[#2b2b2b] bg-white/80 px-6 py-3 font-semibold text-[#2b2b2b] hover:bg-white"
            >
              Résumé (PDF)
            </a>
            <a
              href="#contact"
              className="rounded-md px-6 py-3 font-semibold text-[#2b2b2b] underline underline-offset-4"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 shrink-0">
          {/* Profile Image - Sticky Note Style */}
          <div className="anim-sticky-wobble relative p-4 bg-yellow-200 rounded-lg shadow-lg shrink-0">
            <Image
              src="/me-hero.webp"
              alt="Portrait of Rachita Pant"
              width={180}
              height={180}
              priority
              sizes="180px"
              className="rounded-md shadow-md"
            />
            <span
              className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full shadow"
              aria-hidden="true"
            />
          </div>

          {/* Currently building */}
          <aside
            aria-labelledby="now-heading"
            className="w-full max-w-sm rounded-lg bg-white/90 p-5 text-left shadow-lg border-2 border-dashed border-[#2b2b2b]/30 rotate-1"
          >
            <h2
              id="now-heading"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600"
            >
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Currently working on
            </h2>
            <ul className="mt-3 space-y-4">
              {NOW.map((item) => (
                <li key={item.title}>
                  <p className="font-bold text-[#2b2b2b]">
                    {item.title}
                    <span className="ml-2 rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-semibold">
                      {item.tag}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-gray-700 leading-snug">{item.text}</p>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-semibold text-[#b45309] underline underline-offset-2"
                    >
                      {item.linkLabel} →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
