import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-t from-zinc-800/70">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-white max-w-3xl mx-auto">
        More Than Learning — It’s Becoming.
 <span className="text-cyan-400"> Step by Step, Skill by Skill.
        {" "}</span> 
          <img
            src={assets.sketch}
            alt="sketch"
            className="md:block hidden absolute -bottom-7 right-0"
          />
      </h1>

      <p className="md:block hidden text-gray-300 max-w-2xl mx-auto">
      Discover your power through guided learning crafted to elevate your skills and future. Grow on your terms, from any place — with lasting access and real-world impact.
      </p>

      <p className="md:hidden text-gray-300 max-w-sm mx-auto">
        Expert-led courses to boost your skills and career. Study anytime,
        anywhere — at your pace.
      </p>

      <SearchBar/>
    </div>
  );
};

export default Hero;
