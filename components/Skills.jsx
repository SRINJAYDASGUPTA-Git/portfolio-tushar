import Image from "next/image";
import React from "react";
import ps from "../public/PS3_96.png";
import maya from "../public/Maya1.png";
import pp from "../public/PP2.png";
import ae from "../public/AE3_96.png";
import nuke from "../public/N2.png";
import sp from "../public/adobe-substance-3d-painter-icon.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ps} width="64" height="64"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Adobe Photoshop</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={maya} width="64" height="64"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Autodesk Maya 3D</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={pp} width="64" height="64"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Adobe Premiere Pro</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ae} width="64" height="64"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Adobe After Effects</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nuke} width="64" height="64"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nuke</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sp} width="64" height="64"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Adobe Substance 3D Painter</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
