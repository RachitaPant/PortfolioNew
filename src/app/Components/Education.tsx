import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-16   mx-auto bg-[url('/paper-bg2.jpg')] bg-cover w-full torn-edge mt-[-130] z-20"
    >
      {/* Divider: Dashed Line */}
      <div className="section-divider-dashed w-full max-w-5xl" />
      <h2 className="text-4xl font-[cursive] font-bold text-center text-[#2b2b2b]">
        My Learning Chapters 📚
      </h2>

      <div className="mt-12 space-y-10">
        {/* College */}
        <motion.div
          whileHover={{ rotate: 0 }}
          initial={{ rotate: -2 }}
          className="bg-[#fffbea] p-6 rounded-lg shadow-lg max-w-3xl mx-auto relative"
        >
          {/* Tape */}
          <span className="absolute -top-4 left-6 w-16 h-6 bg-yellow-300 rotate-[-6deg] opacity-70"></span>

          <h3 className="text-2xl font-bold">
            G. B Pant Institute of Engineering and Technology
          </h3>
          <p className="text-gray-600">
            B.Tech - Computer Science and Engineering
          </p>
          <p className="text-sm text-gray-500">2023 – 2027</p>

          <ul className="list-disc list-inside mt-3 text-gray-700 leading-relaxed">
            <li>
              Dove headfirst into tech & development during my first year.
            </li>
            <li>
              Building{" "}
              <span className="font-semibold">production-grade websites</span>{" "}
              and <span className="font-semibold">mobile applications</span>.
            </li>
            <li>
              Currently exploring <span className="font-semibold">ML/DL</span>{" "}
              and <span className="font-semibold">Spring Boot</span> — because
              they feel less saturated and full of potential.
            </li>
          </ul>

          {/* Image */}
          <div className="mt-4">
            <Image
              src="/college.jpg"
              alt="GB Pant Institute"
              width={500}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
        </motion.div>

        {/* Doon Valley */}
        <motion.div
          whileHover={{ rotate: 0 }}
          initial={{ rotate: 2 }}
          className="bg-[#fdfdfd] p-6 rounded-lg shadow-lg max-w-3xl mx-auto relative"
        >
          {/* Tape */}
          <span className="absolute -top-4 right-6 w-16 h-6 bg-blue-200 rotate-[5deg] opacity-70"></span>

          <h3 className="text-2xl font-bold">
            Doon Valley International School, Dehradun
          </h3>
          <p className="text-gray-600">C.B.S.E - Science</p>
          <p className="text-sm text-gray-500">Percentage: 95.60%</p>

          <ul className="list-disc list-inside mt-3 text-gray-700 leading-relaxed">
            <li>
              Topped my 12th batch , first studied about mySQL and Python
              Programming .
            </li>
            <li>
              Developed strong fundamentals in science, setting the stage for my
              tech journey.
            </li>
          </ul>

          <div className="mt-4">
            <Image
              src="/school2.webp"
              alt="Doon Valley School"
              width={500}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
        </motion.div>

        {/* Montessori */}
        <motion.div
          whileHover={{ rotate: 0 }}
          initial={{ rotate: -2 }}
          className="bg-[#fffbea] p-6 rounded-lg shadow-lg max-w-3xl mx-auto relative"
        >
          {/* Tape */}
          <span className="absolute -top-4 left-6 w-16 h-6 bg-pink-200 rotate-[-6deg] opacity-70"></span>

          <h3 className="text-2xl font-bold">
            The Montessori School, Dehradun
          </h3>
          <p className="text-gray-600">I.C.S.E - Science</p>
          <p className="text-sm text-gray-500">Percentage: 95.40%</p>

          <ul className="list-disc list-inside mt-3 text-gray-700 leading-relaxed">
            <li>
              Awarded{" "}
              <span className="font-semibold">All Rounder of the Year</span>{" "}
              (Miss ICSE).
            </li>
            <li>
              One of my poems was published in{" "}
              <span className="italic">The Times of India</span>.
            </li>
            <li>
              Passionate about debates — never won one, but made sure the
              audience had fun listening.
            </li>
            <li>
              This is where I learned the basics of coding and programming using
              Java.
            </li>
          </ul>

          <div className="mt-4">
            <Image
              src="/montessori.avif"
              alt="Montessori School"
              width={500}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
