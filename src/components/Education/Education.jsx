import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-5 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* SECTION HEADER */}
      {/* Intro section explaining educational background */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          EDUCATION
        </h2>

        <div className="w-32 h-1 bg-teal-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          My academic background reflects my commitment to continuous
          learning, software development, entrepreneurship, and
          problem-solving.
        </p>
      </div>

      {/* DESKTOP TIMELINE */}
      {/* Alternate cards left/right of center timeline for larger screens */}
      <div className="hidden md:block relative">

        {/* Center timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white"></div>

        {education.map((edu, index) => {
          // Even index -> left side, Odd index -> right side
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className="relative grid grid-cols-9 items-center mb-16"
            >
              {/* LEFT CARD */}
              <div className="col-span-4 flex justify-end">
                {isLeft && (
                  <EducationCard edu={edu} />
                )}
              </div>

              {/* TIMELINE NODE */}
              {/* Circular logo positioned on timeline */}
              <div className="col-span-1 flex justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-[#14B8A6] bg-gray-400 overflow-hidden z-10">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="col-span-4 flex justify-start">
                {!isLeft && (
                  <EducationCard edu={edu} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE TIMELINE */}
      {/* Simpler single-column layout because alternating cards don't fit well on phones */}
      <div className="block md:hidden relative">

        {/* Left-side timeline line */}
        <div className="absolute left-5 top-0 w-1 h-full bg-white"></div>

        {education.map((edu) => (
          <div
            key={edu.id}
            className="relative flex items-start mb-10"
          >
            {/* Timeline Node */}
            <div className="absolute left-5 transform -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full border-4 border-[#14B8A6] bg-gray-400 overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card */}
            <div className="ml-14 w-full">
              <EducationCard edu={edu} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* REUSABLE EDUCATION CARD */
/* Separate component keeps desktop and mobile timeline code cleaner */
const EducationCard = ({ edu }) => {
  return (
    <div
      className="
        bg-gray-900
        p-5 md:p-6
        rounded-2xl
        border
        border-white
        shadow-xl
        w-full
        max-w-md

        transition-all
        duration-500
        ease-out

        hover:scale-[1.03]
        hover:-translate-y-2
        hover:shadow-[0_0_35px_6px_rgba(20,184,166,0.45)]
      "
    >
      {/* Header */}
      {/* School logo + degree information */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-20 h-14 sm:w-24 sm:h-16 bg-white rounded-md overflow-hidden shrink-0">
          <img
            src={edu.img}
            alt={edu.school}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-white font-semibold text-base md:text-lg leading-snug">
            {edu.degree}
          </h3>

          <h4 className="text-gray-300 text-sm">
            {edu.school}
          </h4>

          <p className="text-gray-500 text-xs mt-1">
            {edu.date}
          </p>
        </div>
      </div>

      {/* Academic performance */}
      <p className="mt-4 text-gray-400 font-bold">
        Grade: {edu.grade}
      </p>

      {/* Brief summary of studies / achievements */}
      <p className="mt-2 text-gray-400 text-sm leading-relaxed">
        {edu.desc}
      </p>
    </div>
  );
};

export default Education;