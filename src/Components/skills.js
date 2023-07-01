import React from "react";
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiGit, DiReact, DiNpm, DiNodejs } from "react-icons/di";
import { BiChip } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="flex flex-wrap py-10" id="skills">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <BiChip className="w-10 inline-block mb-4 text-6xl" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa delectus eum quo voluptas
            aspernatur accusantium distinctio possimus est.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-8">
            <DiHtml5
              className="text-6xl hover:text-orange-500 hover:cursor-pointer"
              onClick={() => window.open("https://html.com/html5/", "_blank")}
            />
            <DiCss3
              className="text-6xl hover:text-blue-600 hover:cursor-pointer"
              onClick={() => window.open("https://www.w3schools.com/css/", "_blank")}
            />
            <DiJavascript
              className="text-6xl hover:text-yellow-500 hover:cursor-pointer"
              onClick={() => window.open("https://www.javascript.com/", "_blank")}
            />
            <DiBootstrap
              className="text-6xl hover:text-purple-500 hover:cursor-pointer"
              onClick={() => window.open("https://getbootstrap.com/", "_blank")}
            />
            <DiGit
              className="text-6xl hover:text-orange-600 hover:cursor-pointer"
              onClick={() => window.open("https://git-scm.com/", "_blank")}
            />
            <DiReact
              className="text-6xl hover:text-blue-200 hover:cursor-pointer"
              onClick={() => window.open("https://react.dev/", "_blank")}
            />
            <DiNpm
              className="text-6xl hover:text-red-500 hover:cursor-pointer"
              onClick={() => window.open("https://www.npmjs.com/", "_blank")}
            />
            <DiNodejs
              className="text-6xl hover:text-green-500 hover:cursor-pointer"
              onClick={() => window.open("https://nodejs.org/en", "_blank")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
