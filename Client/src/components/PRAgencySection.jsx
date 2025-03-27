import React from "react";

// Importing images
import at from "../assets/at.png";
import cnbc from "../assets/cnbc.png";
import db from "../assets/db.png";
import e from "../assets/e.png";
import fi from "../assets/fi.png";
import forb from "../assets/forb.png";
import n18 from "../assets/n18.png";
import news24 from "../assets/news24.png";
import si from "../assets/si.png";
import ys from "../assets/ys.png";
import zn from "../assets/zn.png";

const PRAgencySection = () => {
  // Array of logo objects
  const logos = [
      { src: at, alt: "Aaj Tak" },
      { src: e, alt: "Entrepreneur" },
      { src: ys, alt: "YourStory" },
    { src: zn, alt: "Zee News" },
    { src: db, alt: "Dainik Bhaskar" },
    { src: si, alt: "Silicon India" },
    { src: fi, alt: "Fortune India" },
    { src: cnbc, alt: "CNBC" },
      { src: forb, alt: "Forbes" },
    { src: n18, alt: "News18" },
    { src: news24, alt: "News24" },
  ];

  return (
    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Make Your Image Bold and Story Unforgettable with{" "}
            <span className="text-white">Top-notch PR Agency in Lucknow</span>
          </h1>
          <p className="text-sm md:text-base">
            Get your customised Public Relation Package with the Best PR agency
            in Lucknow. Crisis management, Corporate PR, Personal PR, Offline or
            Digital PR – we got it covered for you. Increase your visibility in
            the media with a 360° solution. Build a Strong Profile, Get
            Published, and lead a successful Public Image.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

        {/* Right Content (Logos) */}
        <div className="grid grid-cols-3 bg-white p-4 gap-4 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-full h-auto object-contain max-h-16" // Ensuring same height and maintaining aspect ratio
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PRAgencySection;
