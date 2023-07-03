import React from "react";
import asset from "../public/Asset.png";
import Image from "next/image";
import Link from "next/link";
const ProjectItem = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          className="rounded-xl group-hover:opacity-20"
          src={asset}
          alt=""
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            Asset Modelling
          </h3>
          <p className="pb-4 pt-2 text-white text-center">Maya3D, Photoshop</p>
          <Link target="_blank" href="https://youtu.be/oI7umvFrmW0">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
