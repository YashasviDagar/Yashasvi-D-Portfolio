import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  // selectedProject = null means modal is closed
  const [selectedProject, setSelectedProject] = useState(null);

  // open modal with clicked project data
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  // close modal (reset state)
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* SECTION TITLE */}
      {/* NOTE: this section acts as "portfolio proof" → keep it clean + impactful */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>

        {/* underline accent (teal theme consistency) */}
        <div className="w-32 h-1 bg-teal-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of projects that showcase my passion for development, problem-solving, and building impactful solutions using modern technologies.
        </p>
      </div>

      {/* PROJECTS GRID */}
      {/* responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          
          // each project card
          // NOTE: click opens modal → interactive UI pattern
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-teal-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              {/* project image */}
              {/* NOTE: object-cover keeps image ratio clean */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              {/* line-clamp-3 = prevents overflow text in cards */}
              <p className="text-gray-400 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              {/* tags section */}
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-teal-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {/* IMPORTANT: conditional rendering → modal only exists when project selected */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          
          {/* fixed + inset-0 => full screen overlay */}
          {/* z-50 => ensures modal is above everything */}
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            
            {/* close button row */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-teal-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">

              {/* image section */}
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>

                {/* tags inside modal */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-teal-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* action buttons */}
                <div className="flex gap-4">

                  {/* GitHub button OR fallback */}
                  {selectedProject.github ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-teal-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Code
                    </a>
                  ) : (
                    <span className="w-1/2 bg-gray-800 text-gray-600 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center cursor-not-allowed">
                      Private Repo
                    </span>
                  )}

                  {/* Live app button OR fallback */}
                  {selectedProject.webapp ? (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-teal-600 hover:bg-teal-900 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  ) : (
                    <span className="w-1/2 bg-teal-900 text-teal-700 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;