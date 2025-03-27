import React from "react";

const InfiniteMarquee = () => {
  return (
    <div className="bg-black text-white overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-2xl font-bold border border-white px-4 py-2 mx-2">
          Services
        </span>
        <span className="text-2xl font-bold border border-white px-4 py-2 mx-2">
          Services
        </span>
        <span className="text-2xl font-bold border border-white px-4 py-2 mx-2">
          Services
        </span>
        <span className="text-2xl font-bold border border-white px-4 py-2 mx-2">
          Services
        </span>
      </div>
      <div className="absolute top-0 left-0 flex whitespace-nowrap animate-marquee2">
        <span className="text-2xl font-bold border border-white px-4 py-2 mx-2">
          Services
        </span>
        <span className="text-2xl font-bold border border-white px-4 py-2 mx-2">
          Services
        </span>
        <span className="text-2xl font-bold border border-white px-4 py-2 mx-2">
          Services
        </span>
        <span className="text-2xl font-bold border border-white px-4 py-2 mx-2">
          Services
        </span>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
