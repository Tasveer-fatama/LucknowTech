import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globe1 from "../assets/globe1.gif";
// Optional: Replace globe with a Lucknow-themed tech illustration (e.g., Rumi Darwaza + circuits)

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      color: "#000000",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="overflow-hidden py-16 gap-8 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-zinc-950 text-white">
      {/* Left Section: Text with LucknowTech theme */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2
          ref={textRef}
          className="text-3xl md:text-6xl font-semibold leading-tight transition-all duration-500 text-white"
        >
          Tech Solutions Rooted in{" "}
          <span className="bg-[#f5a623] font-semibold px-2 md:px-4 text-black">
            Lucknow’s Heritage
          </span>{" "}
          <br />
          Scaling for{" "}
          <span className="bg-[#f5a623] font-semibold px-2 md:px-4 text-black">
            Global Impact
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Empowering Lucknow’s startups & enterprises with cutting-edge digital
          strategies.
        </p>
      </div>

      {/* Right Section: Image (Consider using a Lucknow-tech hybrid illustration) */}
      <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <img
          src={globe1}
          alt="LucknowTech Globe"
          className="h-48 md:h-96 object-contain"
        />
      </div>
    </div>
  );
};

export default Marquee;