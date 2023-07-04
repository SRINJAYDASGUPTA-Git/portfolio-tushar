import React from "react";
import asset from "../public/Asset.png";
import Image from "next/image";
import ProjectItem from "./ProjectItem";
import animation from "../public/anim.png";
import rigging from "../public/rigging.png";
import vfx from "../public/vfx.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2>What I have Done</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Asset Modelling"
            technology="Maya3D, Photoshop"
            backgroundImg={asset}
            projectURL="https://youtu.be/oI7umvFrmW0"
          />
          <ProjectItem
            title="Animation"
            technology="Maya3D, Photoshop"
            backgroundImg={animation}
            projectURL="https://youtu.be/oHwgWnEjh3g"
          />
          <ProjectItem
            title="Rigging Video"
            technology="Maya3D, Photoshop"
            backgroundImg={rigging}
            projectURL="https://youtu.be/mJbCJkJvt_c"
          />
          <ProjectItem
            title="VFX Showreel"
            technology="Maya3D, Photoshop"
            backgroundImg={vfx}
            projectURL="https://youtu.be/0QoG-jvnL7c"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
