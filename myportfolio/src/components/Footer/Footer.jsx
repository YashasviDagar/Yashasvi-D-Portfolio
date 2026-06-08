import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  // Handles navigation button clicks and scrolls to section smoothly
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    // Get section from DOM using its id (about, skills, etc.)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Smooth scrolling improves UX instead of instant jump
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">

        {/* Branding / Name */}
        <h2 className="text-xl font-semibold text-teal-500">
          Yashasvi Dagar
        </h2>

        {/* Navigation Links */}
        {/* Buttons used for in-page navigation using scrollIntoView */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            // { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-teal-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        {/* External links open in new tab with security attributes */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/YashasviDagar" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yashasvidagar/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/iykykprints/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-teal-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Yashasvi Dagar. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;