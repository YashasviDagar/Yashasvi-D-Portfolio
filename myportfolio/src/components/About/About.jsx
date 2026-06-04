import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* Left Side - Text Content Section */}
        {/* NOTE: flex-col-reverse => mobile pe image neeche aur text upar aata hai */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Yashasvi Dagar
          </h2>

          {/* Skills Heading with Typing Effect */}
          {/* TypeAnimation => dynamic typing effect, delay sequence important hota hai */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#14B8A6] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Problem Solver",
                2000,
                "Startup Founder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
              className="text-[#14B8A6]"
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a student, developer, and aspiring entrepreneur who loves
            turning ideas into reality. Alongside my studies at VIT, I'm
            building iykykprints.com and exploring the intersection of
            technology, entrepreneurship, problem solving and business. I'm always learning,
            experimenting, and looking for opportunities to create impactful
            products.
          </p>

          {/* Resume Button (currently commented) */}
          {/* <a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #14B8A6, #a855f7)',
              boxShadow: '0 0 2px #14B8A6, 0 0 2px #14B8A6, 0 0 40px #14B8A6',
            }}
          >
            DOWNLOAD CV
          </a>
          */}
        </div>

        {/* Right Side - Profile Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          
          {/* Tilt effect wrapper */}
          {/* NOTE: react-parallax-tilt gives 3D hover effect -> performance sensitive on low devices */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
            className="rounded-full"
          >
            {/* Profile Image Container */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-112.5 md:h-112.5 rounded-full border-4 border-teal-500 overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.4)]">
              
              <img
                src={profileImage}
                alt="Yashasvi Dagar"
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;