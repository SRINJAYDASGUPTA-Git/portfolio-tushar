import React from "react";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2>What I have Done</h2>
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
