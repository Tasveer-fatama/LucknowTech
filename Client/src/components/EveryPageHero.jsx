import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const EveryPageHero = ({ text, para }) => {
  return (
    <div className="w-full bg-black flex items-center h-72 sm:h-80 lg:h-96">
      <div className="px-6 sm:px-12 lg:pl-16 w-full text-center lg:text-left">
        {/* Breadcrumb Link */}
        <Link
          to="/"
          className="text-white flex items-center gap-1 justify-center lg:justify-start text-sm sm:text-base"
        >
          <AiOutlineHome /> Home
        </Link>

        {/* Title */}
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
          {text}
        </h2>

        {/* Description */}
        <p className="max-w-xl sm:max-w-2xl my-4 text-white text-sm sm:text-base">
          {para}
        </p>

        {/* Call-to-Action */}
        <p className="text-white text-lg sm:text-2xl">
          Wanna get in touch?{" "}
          <Link
            to="/contact"
            className="underline text-[#FFD74B] hover:scale-105 transition-transform"
          >
            Let’s talk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EveryPageHero;
