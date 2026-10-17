import MotionProvider from "./Components/MotionProvider";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import WhyHire from "./Components/WhyHire";
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
      <Nav />
      <MotionProvider>
        <main className="w-full flex flex-col items-center">
          <Hero />
          <Project />
          <WhyHire />
          <Experience />
          <TechStack />
          <Education />
          <Introduction />
          <AboutMe />
        </main>
      </MotionProvider>
      <Footer />
    </div>
  );
}
