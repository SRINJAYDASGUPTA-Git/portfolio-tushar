import React from "react";
const About = () => {
  return (
    <div className="w-full md:h-screen fles items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hey, I'm Tushar Bhattacharya, a beginner VFX artist and 3D modeler.
            I recently completed my Higher Secondary education at ANMS and
            received specialized training in VFX and 3D modeling from the
            esteemed Moople Institute.
          </p>
          <p className="py-2 text-gray-600">
            Creativity, innovation, perseverance, and efficiency are my key
            strengths. I thrive on thinking outside the box and bringing unique
            ideas to life through visual effects and three-dimensional art. As a
            fresher in the field, I'm eager to learn and grow, constantly
            pushing the boundaries of my skills.
          </p>
          <p className="py-2 text-gray-600">
            I'm passionate about merging technology and art to create
            captivating visual experiences. With my dedication and enthusiasm,
            I'm ready to contribute to projects that tell compelling stories and
            captivate audiences. Let's embark on this exciting journey
            together!"
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1665757554122-c5dfbbf38369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            alt="/"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
