import React, { useState } from "react";
import { projects } from "../project-data";
import { CodeIcon } from "@heroicons/react/solid";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects I have worked on.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <a
              href={project.githubpages}
              key={project.image}
              className="p-4 w-full md:w-1/2 lg:w-1/3"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img
                    alt="project"
                    className="object-cover object-center h-64"
                    src={project.image}
                  />
                  {hoveredProject === index && (
                    <div className="absolute inset-0 bg-ihsan-blue bg-opacity-90 transition duration-300">
                      <div className="flex flex-col h-full justify-center items-center">
                        <h2 className="text-lg font-medium text-white mb-2">
                          {project.projectName}
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex justify-center">
                          <a
                            href={project.githubrepo}
                            className="text-green-400 hover:text-green-500 mr-4"
                          >
                            GitHub
                          </a>
                          {project.githubpages && (
                            <a
                              href={project.githubpages}
                              className="text-green-400 hover:text-green-500"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
