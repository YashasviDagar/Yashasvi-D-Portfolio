import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* SECTION TITLE */}
      {/* NOTE: ye section portfolio ka "proof of skill" area hai — keep it clean & readable */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>

        {/* underline bar -> teal accent theme consistency */}
        <div className="w-24 h-1 bg-[#14B8A6] mx-auto mt-2"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* SKILLS CATEGORIES */}
      {/* NOTE: flex-wrap use kiya hai so responsive break automatically ho jaye */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          
          // Each category card (frontend, backend, etc.)
          // NOTE: ye reusable UI block hai — data driven design (SkillsInfo array)
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-4 sm:px-8 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(20,184,166,0.2)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Tilt wrapper */}
            {/* IMPORTANT: tilt whole grid not individual items -> better performance */}
            <Tilt
              key={category.title}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              {/* SKILL GRID */}
              {/* auto-fill -> responsive grid without manual breakpoints */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: "0.75rem",
                  width: "100%",
                }}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-start gap-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3"
                    style={{ minWidth: 0, overflow: "hidden" }}
                  >
                    {/* skill icon */}
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
                    />

                    {/* skill name */}
                    {/* NOTE: text overflow handling important for long skill names */}
                    <span
                      className="text-xs sm:text-sm text-gray-300 leading-tight"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        minWidth: 0,
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;