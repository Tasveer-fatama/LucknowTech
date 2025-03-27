import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const LetsTalk = () => {
  return (
    <div className="text-white bg-zinc-950 py-16 sm:py-20 max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
      {/* Left Section - Lucknow Focus */}
      <div className="md:w-2/3 flex flex-col gap-6">
        <p className="text-start text-[#f5a623] text-lg font-medium">Let's build something great for Lucknow</p>
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
          Ready to digitize your <span className="text-[#f5a623]">Awadhi business?</span>
        </h2>
        <p className="text-lg">
          At LucknowTech, we combine local market understanding with cutting-edge 
          digital solutions to help UP businesses thrive. Whether you're in 
          Hazratganj or Gomti Nagar, we've got solutions tailored for you.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#f5a623]" />
            <span>+91 522 4079XXX</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#f5a623]" />
            <span>Tech Park, Gomti Nagar</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#f5a623]" />
            <span>hello@lucknowtech.com</span>
          </div>
        </div>
      </div>

      {/* Right Section - CTA */}
      <div className="md:w-1/3 flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-[#0a2e52]">Start Your Digital Journey</h3>
        <p className="text-gray-700">
          Special packages available for Lucknow-based startups and MSMEs. 
          Get your free consultation within 24 hours.
        </p>
        
        <Link 
          to="/contact" 
          className="bg-[#f5a623] hover:bg-[#e6951a] text-black font-bold py-3 px-6 rounded-md text-center transition-colors duration-300"
        >
          Book Meeting
        </Link>
        
        <p className="text-sm text-gray-500">
          P.S. Ask about our <strong>Lucknow Startup Discount</strong>
        </p>
      </div>
    </div>
  );
};

export default LetsTalk;