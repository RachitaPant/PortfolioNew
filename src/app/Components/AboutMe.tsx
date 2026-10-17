"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HOBBIES: { icon: string; title: string; image?: string; text: string }[] = [
  { icon: "🏴‍☠️", title: "Manga at midnight", image: "/about/manga.png", text: "One Piece supremacy, at ungodly hours." },
  { icon: "🖊️", title: "Stationery hoarder", image: "/about/stationery.webp", text: "Pretty notebooks I swear I'll use someday." },
  { icon: "🧪", title: "New-stack tinkering", image: "/about/tinkering.webp", text: "Learning a stack just to build a side project with it." },
  { icon: "☕", title: "Solo coffee dates", image: "/about/coffee.webp", text: "Long ones. With myself. Highly recommended." },
  { icon: "🎧", title: "Hyper-specific playlists", image: "/about/playlists.webp", text: "\"Coding in a café with light rain outside.\"" },
];

const PRINCIPLES = [
  { title: "Do good work, even unseen", text: "The small details matter.", color: "bg-yellow-200" },
  { title: "Kind, not a doormat", text: "Boundaries are self-respect.", color: "bg-pink-200" },
  { title: "Curiosity > comfort", text: "The best ideas start with \"what if?\"", color: "bg-blue-200" },
  { title: "Share knowledge freely", text: "Tech grows when people do.", color: "bg-green-200" },
];

const WHO_AM_I = [
  "The developer who breaks things on purpose to learn how to fix them",
  "The one who actually reads the documentation (and occasionally argues with it)",
  "The teammate who will hype you up like it's a full-time job",
  "A book over a party, unless it's a book party",
  "An introvert with extrovert moments, usually coffee-powered",
];

const noteHover = { scale: 1.04, rotate: 0, y: -4 };
const springTransition = { type: "spring", stiffness: 300, damping: 15 } as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const AboutMe = () => {
  return (
    <section className="px-4 sm:px-8 py-16 w-full bg-[url('/paper-bg3.webp')] bg-cover bg-repeat">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hobbies as polaroids */}
        <motion.div {...fadeUp}>
          <h3 className="text-4xl font-handwritten font-bold text-center text-[#2b2b2b]">
            Off the clock 🎨
          </h3>
          <ul className="mt-8 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {HOBBIES.map((hobby, i) => (
              <motion.li
                key={hobby.title}
                whileHover={noteHover}
                transition={springTransition}
                style={{ rotate: i % 2 === 0 ? -3 : 3 }}
                className="bg-white p-3 pb-4 shadow-lg"
              >
                {hobby.image ? (
                  <div className="relative aspect-square overflow-hidden bg-[#fdf6e3]">
                    <Image
                      src={hobby.image}
                      alt={hobby.title}
                      fill
                      sizes="(min-width: 1024px) 200px, 45vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="flex aspect-square items-center justify-center bg-[#fdf6e3] text-5xl"
                    aria-hidden="true"
                  >
                    {hobby.icon}
                  </div>
                )}
                <p className="mt-3 font-marker5 font-bold text-[#2b2b2b] leading-tight">
                  {hobby.title}
                </p>
                <p className="mt-1 text-sm text-gray-700 leading-snug">{hobby.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Principles as sticky notes */}
        <motion.div {...fadeUp}>
          <h3 className="text-4xl font-handwritten font-bold text-center text-[#2b2b2b]">
            How I work
          </h3>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <motion.li
                key={p.title}
                whileHover={noteHover}
                transition={springTransition}
                style={{ rotate: i % 2 === 0 ? 2 : -2 }}
                className={`relative ${p.color} p-5 shadow-md`}
              >
                <span
                  className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-red-500 shadow"
                  aria-hidden="true"
                />
                <p className="font-marker5 text-xl font-bold text-[#2b2b2b]">{p.title}</p>
                <p className="mt-1 text-gray-800">{p.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Who I am */}
        <motion.div {...fadeUp} className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <div className="anim-photo-wobble relative mx-auto bg-white p-3 pb-10 shadow-xl">
            <Image
              src="/Me2.webp"
              alt="Rachita Pant"
              width={240}
              height={180}
              sizes="240px"
              className="object-cover"
            />
            <p className="absolute bottom-2 left-0 right-0 text-center font-handwritten text-2xl text-[#2b2b2b]">
              that&apos;s me!
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-handwritten font-bold text-[#2b2b2b]">
              In five lines
            </h3>
            <ul
              className="mt-4 space-y-3 rounded-lg bg-white/80 p-6 shadow-md"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 34px, rgba(0,0,0,0.06) 35px)",
              }}
            >
              {WHO_AM_I.map((trait) => (
                <li key={trait} className="flex items-start gap-3 text-lg text-[#2b2b2b]">
                  <span className="text-pink-500" aria-hidden="true">✦</span>
                  {trait}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-md bg-[#2b2b2b] px-6 py-3 font-semibold text-white hover:bg-black"
            >
              Let&apos;s work together →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
