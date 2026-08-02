import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/*
 * Rendered on the server: page.tsx is no longer a client component, and this
 * file has no "use client" of its own, so none of it (nor its three react-icons
 * glyphs) ships as client JavaScript. The year is resolved when the page is
 * built rather than on every visit, which also removes the year-rollover
 * hydration mismatch `new Date()` causes in a client component.
 *
 * The icon links previously had no accessible name at all — a screen reader
 * announced them as "link" and nothing more.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#fdf6e3] border-t border-gray-300 py-8  w-full">
      <div className="flex flex-col items-center space-y-4">
        {/* Heading */}
        <h2 className="relative text-2xl font-handwritten text-gray-800">
          Let’s Connect
          <span
            className="absolute left-0 -bottom-1 w-full h-3 bg-yellow-200 -z-10 rotate-[-2deg]"
            aria-hidden="true"
          />
        </h2>

        {/* Links */}
        <nav
          aria-label="Social links"
          className="flex space-x-6 text-gray-700 text-xl"
        >
          <a
            href="https://www.linkedin.com/in/rachita-pant/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="https://github.com/RachitaPant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="hover:text-gray-900 transition-colors"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="mailto:rachitap89@gmail.com?subject=Hello&body=Lets%20Connect%20"
            aria-label="Send an email to Rachita"
            className="hover:text-red-500 transition-colors"
          >
            <MdEmail aria-hidden="true" />
          </a>
          <a
            href="https://codolio.com/profile/rachita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors"
          >
            <span className="font-handwritten">Codolio</span>
          </a>
        </nav>

        <p className="text-sm text-gray-500 mt-4">
          © {year} Rachita Pant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
