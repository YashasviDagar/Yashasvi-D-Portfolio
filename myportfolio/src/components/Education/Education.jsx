import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* SECTION TITLE */}
      {/* NOTE: Education section = credibility proof → keep it structured & clean */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>

        {/* teal accent line matches full theme consistency */}
        <div className="w-32 h-1 bg-teal-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      {/* IMPORTANT: relative container so center vertical line can be positioned absolutely */}
      <div className="relative">

        {/* CENTER VERTICAL LINE */}
        {/* This is the timeline spine (purely decorative but important for structure) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white"></div>

        {education.map((edu, index) => {

          // alternate layout left-right for timeline effect
          // even index = left, odd index = right
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className="relative grid grid-cols-9 items-center mb-16"
            >

              {/* LEFT SIDE */}
              {/* NOTE: only render when isLeft = true */}
              <div className="col-span-4 flex justify-end">
                {isLeft && (
                  <div className="bg-gray-900 p-6 rounded-2xl border border-white shadow-xl max-w-md transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_0_35px_6px_rgba(20,184,166,0.45)]">
                    
                    {/* card inner layout */}
                    <div className="flex items-center space-x-6">

                      {/* school image */}
                      {/* NOTE: fixed size box keeps timeline consistent */}
                      <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* text details */}
                      <div>
                        <h3 className="text-white font-semibold">
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

                    <p className="mt-4 text-gray-400 font-bold">
                      Grade: {edu.grade}
                    </p>
                    <p className="mt-2 text-gray-400">{edu.desc}</p>
                  </div>
                )}
              </div>

              {/* CENTER NODE */}
              {/* IMPORTANT: this is timeline point (node) connecting left-right cards */}
              <div className="col-span-1 flex justify-center relative">

                {/* circular node with image */}
                <div className="w-12 h-12 rounded-full border-4 border-[#14B8A6] bg-gray-400 z-10 overflow-hidden">

                  {/* NOTE: z-10 ensures it stays above vertical line */}
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}
              {/* NOTE: only render when isLeft = false */}
              <div className="col-span-4 flex justify-start">
                {!isLeft && (
                  <div className="bg-gray-900 p-6 rounded-2xl border border-white shadow-xl max-w-md transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_0_35px_6px_rgba(20,184,166,0.45)]">

                    {/* card inner layout */}
                    <div className="flex items-center space-x-6">

                      <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-white font-semibold">
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

                    <p className="mt-4 text-gray-400 font-bold">
                      Grade: {edu.grade}
                    </p>
                    <p className="mt-2 text-gray-400">{edu.desc}</p>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;