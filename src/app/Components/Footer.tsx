"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#fdf6e3] border-t border-gray-300 py-8  w-full">
      <div className="flex flex-col items-center space-y-4">
        {/* Heading */}
        <h2 className="relative text-2xl font-handwritten text-gray-800">
          Let’s Connect
          <span className="absolute left-0 -bottom-1 w-full h-3 bg-yellow-200 -z-10 rotate-[-2deg]"></span>
        </h2>

        {/* Links */}
        <div className="flex space-x-6 text-gray-700 text-xl">
          <a
            href="https://www.linkedin.com/in/rachita-pant/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RachitaPant"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:rachitap89@gmail.com?subject=Hello&body=Lets%20Connect%20"
            className="hover:text-red-500 transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://codolio.com/profile/rachita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <p className="font-handwritten">Codolio</p>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Rachita Pant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
