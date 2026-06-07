import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaInfo, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  // state for mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);
  // track which menu item is currently active/highlighted
  const [activeSection, setActiveSection] = useState("");
  // track whether user has scrolled or not
  const [isScrolled, setIsScrolled] = useState(false);


  // Checking the scrolled state and then changing the bg from transparent to something else
  useEffect(() => {
    const handleScroll = () => {
      // agar scroll 50px se zyada h toh navbar styled bg show karega
      setIsScrolled(window.scrollY > 50);
    };

    // agr window scrolled h toh add the event listener else remove
    window.addEventListener("scroll", handleScroll);

    // cleanup function -> memory leak avoid krta h when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // [] => sirf ek baar run on initial render

  // Transition to item function
  const handleMenuItemClick = (sectionId) => {
    // active item ko save krna taaki highlight ho sake
    setActiveSection(sectionId);

    // whenever I click on a icon the navbar goes away example in mobile view
    setIsOpen(false);

    // scroll to the section smoothly
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // navbar menu items future me easy edit/add/remove ke liye array me
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#0B0F14]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(20,184,166,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* fixed + top-0 => navbar always top pe rahega
          z-50 => content ke neeche nahi jayega
          transition => smooth bg/shadow animation */}
      <div className="text-white py-5 flex justify-between items-center">
        
        {/* LOGO */}
        <div>
          <span className="text-[#14B8A6]">&lt;</span>
          <span className="text-white">Yashasvi</span>
          <span className="text-[#14B8A6]">/</span>
          <span className="text-white">Dagar</span>
          <span className="text-[#14B8A6]">&gt;</span>
        </div>

        {/* MENU */}
        {/* hidden md:flex => mobile pe hide, md and above pe visible */}
        <ul className="hidden md:flex space-x-8 text-[#94A3B8]">
          {menuItems.map((item) => (
            <li
              key={item.id} // React ko uniquely track krne ke liye key needed
              className={`cursor-pointer transition duration-300 hover:text-[#14B8A6] ${
                activeSection === item.id ? "text-[#14B8A6]" : ""
              }`}
            >
              {/* button used instead of plain text taaki click accessible ho */}
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* SOCIAL MEDIA ICONS */}
        {/* hidden md:flex => desktop only */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/YashasviDagar"
            target="_blank"
            rel="noopener noreferrer"
            // target blank => new tab
            // rel noopener => security + performance
            className="text-[#94A3B8] hover:text-[#14B8A6] transition duration-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/yashasvidagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#14B8A6] transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* MOBILE MENU ICONS */}
        {/* md:hidden => desktop pe hide */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#14B8A6] cursor-pointer"
              // close icon click -> menu close
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#14B8A6] cursor-pointer"
              // hamburger click -> menu open
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU ITEMS */}

      {/* isOpen && => conditional rendering
          true hua toh menu show hoga else DOM me render hi nahi hoga */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#121821]/90 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-[0_0_25px_rgba(20,184,166,0.12)] border border-[#14B8A6]/20 md:hidden">
          
          {/* left-1/2 + -translate-x-1/2 => perfectly center mobile menu */}
          {/* backdrop blur => glassmorphism effect */}
          <ul className="flex flex-col items-center space-y-4 py-4 text-[#94A3B8]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#14B8A6] ${
                  activeSection === item.id ? "text-[#14B8A6]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* mobile social icons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#14B8A6]"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#14B8A6]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;