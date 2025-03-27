import React from "react";
import adImage from "../assets/ad.png"; // Replace with your image path

const AdvertisingSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content (Image) */}
        <div className="flex justify-center items-center">
          <img
            src={adImage}
            alt="Advertising"
            className="w-full h-auto object-contain max-h-80" // Ensuring proper size and aspect ratio
          />
        </div>

        {/* Right Content (Text) */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Biggest, Brightest, Finest Advertising.
          </h1>
          <p className="text-sm md:text-base">
            Outdoor Marketing works exceptionally well when accomplished at its
            best geographical locations and where the audience comes almost
            daily, like a busy office route, well-known shopping places,
            recreational places – like parks, multiplexes, etc. Make sure that
            the ad itself provides details about your brand.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingSection;
