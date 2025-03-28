import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import herovideo from "../assets/bgimage.mp4";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRefs = useRef([]);
  const videoOverlayRef = useRef(null);
  const statsRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Floating elements animation (disable on mobile)
    if (window.innerWidth > 768) {
      gsap.to(floatingElementsRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }

    // Video overlay fade out
    tl.to(videoOverlayRef.current, {
      opacity: 0.8,
      duration: 2,
    });

    // Text animations
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=1.5"
    );
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.6"
    );
    tl.fromTo(
      buttonRefs.current,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "back.out(1.5)",
      },
      "-=0.4"
    );
    tl.fromTo(
      statsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );

    return () => tl.kill();
  }, []);

  const FloatingElement = ({ style, className }) => (
    <div 
      ref={el => floatingElementsRef.current.push(el)}
      className={`hidden md:block absolute rounded-full ${className}`}
      style={style}
    />
  );

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Video Overlay */}
      <div
        ref={videoOverlayRef}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/90 via-black/70 to-black/90 opacity-80"
      />

      {/* Floating decorative elements (hidden on mobile) */}
      <FloatingElement 
        className="bg-[#FFD74B] w-4 h-4 md:w-6 md:h-6 top-[15%] left-[15%] md:top-1/4 md:left-1/4 opacity-20" 
        style={{ filter: "blur(8px)" }}
      />
      <FloatingElement 
        className="bg-white w-6 h-6 md:w-10 md:h-10 bottom-[25%] right-[15%] md:bottom-1/3 md:right-1/4 opacity-10" 
        style={{ filter: "blur(6px)" }}
      />
      <FloatingElement 
        className="bg-[#FFD74B] w-8 h-8 md:w-16 md:h-16 top-[30%] right-[30%] md:top-1/3 md:right-1/3 opacity-15" 
        style={{ filter: "blur(10px)" }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10 flex flex-col items-center justify-center h-full pt-16 pb-24 md:pt-20 md:pb-32">
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 max-w-4xl md:max-w-5xl lg:max-w-6xl leading-tight px-2"
        >
          <span className="text-white">Elevating </span>
          <span className="text-[#FFD74B]">Lucknow Businesses</span>
          <span className="text-white"> in the Digital World</span>
        </h1>

        {/* Subheading */}
        <p
          ref={paragraphRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl text-gray-200 leading-relaxed px-4"
        >
          Your trusted partner for digital transformation in Uttar Pradesh. We blend <span className="text-[#FFD74B]">local expertise</span> with global technology solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto px-4 sm:px-0">
          {/* Empty button container - you can add primary buttons here if needed */}
        </div>

      

        {/* Contact Us and Learn More Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-20 relative">
          <Link
            to="/contact"
            ref={el => buttonRefs.current.push(el)}
            className="px-6 py-3 bg-[#FFD74B] hover:bg-[#FFC000] text-black font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            Contact Us <FaArrowRight className="text-sm" />
          </Link>
          <Link
            to="/about"
            ref={el => buttonRefs.current.push(el)}
            className="px-6 py-3 bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            Learn More <FaPlay className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;