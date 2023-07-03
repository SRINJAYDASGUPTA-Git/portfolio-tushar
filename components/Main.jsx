import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className=" max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-gray-600">
            Let's Create Virtual Realities with VFX and 3D Magic
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Tushar</span>
          </h1>
          <h1 className="py-2 text-gray-700">A CG Generalist</h1>
          <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
            I'm a passionate beginner in VFX and 3D modeling, exploring the
            realms of digital art to bring imagination to life.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
