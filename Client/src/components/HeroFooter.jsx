import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa"; // Using React Icons for the icon

const JoinUsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Be a part of{" "}
            <span className="text-yellow-400">Digital Jugglers</span> - The Best
            Digital Marketing Company in Lucknow
          </h1>
          <p className="text-lg md:text-xl">
            Build your career in the field of Digital Marketing with a
            fast-growing agency. Join us to get hands-on experience and learn
            from the best in the industry.
          </p>
          <button
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
            onClick={() => navigate("/apply-now")}
          >
            Start your career now
          </button>
        </div>

        {/* Right Content - Icon */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <FaBullhorn className="text-8xl text-yellow-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
