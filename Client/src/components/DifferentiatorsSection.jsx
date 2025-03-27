import React from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation

const WhyChooseUsAndOurStory = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-12 px-6 bg-gray-100">
      {/* Left Side Content */}
      <div className="flex-1 space-y-4 md:mr-8">
        <h2 className="text-3xl font-bold text-gray-800">
          What Makes Us The Best Digital Marketing Company in Lucknow?
        </h2>
        <p className="text-lg text-gray-600">
          We understand how important it is to market the business online
          together with utmost innovation and uniqueness. Therefore, we strive
          to provide the best of both for all our clients.
        </p>

        {/* Buttons for navigation */}
        <div className="space-y-4 mt-6">
          <Link to="/why-choose-us">
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Why Choose Us
            </button>
          </Link>

          <Link to="/our-story">
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Our Story
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 mt-8 md:mt-0">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Digital Marketing"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyChooseUsAndOurStory;
