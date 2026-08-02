import MotionProvider from "./Components/MotionProvider";
import Hero from "./Components/Hero";
import Introduction from "./Components/Introduction";
import Education from "./Components/Education";
import Project from "./Components/Project";
import TechStack from "./Components/TechStack";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

// Server component. Only the sections that actually animate opt into the
// client bundle via their own "use client" boundary.
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e9d4] font-serif text-gray-800 flex flex-col items-center">
      <MotionProvider>
        <main className="w-full flex flex-col items-center">
          <Hero />
          <Introduction />
          <Education />
          <Experience />
          <Project />
          <TechStack />
          <AboutMe />
        </main>
      </MotionProvider>
      <Footer />
    </div>
  );
}
