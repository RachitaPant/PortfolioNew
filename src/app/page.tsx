"use client";

import Hero from "./Components/Hero";
import Introduction from "./Components/Introduction";
import Education from "./Components/Education";
import Project from "./Components/Project";
import TechStack from "./Components/TechStack";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e9d4] font-serif text-gray-800 flex flex-col items-center">
      <Hero />
      <Introduction />
      <Education />
      <Experience />
      <Project />
      <TechStack />
      <AboutMe />
      <Footer />
    </div>
  );
}
