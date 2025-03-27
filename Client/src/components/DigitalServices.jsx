import React from "react";
import { FaSearch, FaComments, FaGlobe, FaLaptopCode, FaMobileAlt, FaChartLine, FaShoppingCart, FaHashtag } from "react-icons/fa";
import { MdLocalOffer, MdEmail } from "react-icons/md";

const DigitalServices = () => {
  return (
    <div className="py-16 px-6 sm:px-12 lg:px-16 bg-zinc-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#f5a623]"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div>
          <div className="mb-2">
            <span className="text-[#f5a623] font-medium">Digital Transformation</span>
            <div className="w-16 h-1 bg-[#f5a623] mt-2"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Empowering Lucknow Businesses with <br />
            <span className="text-[#f5a623]">Digital Excellence</span>
          </h1>

          <p className="text-lg text-gray-300 mb-10">
            Custom digital solutions designed for Lucknow's unique market, blending 
            global technology with local Awadhi business wisdom.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceCard
              title="Local SEO"
              description="Dominate Lucknow searches with location-specific optimization for Chowk, Hazratganj & Gomti Nagar businesses."
              icon={<FaSearch className="text-xl" />}
            />
            <ServiceCard
              title="Social Media Marketing"
              description="Showcase your Awadhi products on Instagram & Facebook with culturally-relevant campaigns."
              icon={<FaComments className="text-xl" />}
            />
            <ServiceCard
              title="WhatsApp Business Solutions"
              description="Automate customer service for Lucknow's preferred communication channel."
              icon={<FaGlobe className="text-xl" />}
            />
            <ServiceCard
              title="E-Commerce Development"
              description="Sell Chikankari, Kebabs or handicrafts worldwide with customized online stores."
              icon={<FaShoppingCart className="text-xl" />}
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#f5a623] to-[#0a2e52] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative h-full bg-white rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://i.pinimg.com/originals/4e/d0/ce/4ed0ced35bb59c608dd31d8b2860a986.gif"
              alt="Lucknow Digital Transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e52] to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">Lucknow's Digital Revolution</h3>
              <p className="text-sm">From Chowk to Gomti Nagar, we're transforming businesses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="max-w-screen-xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">More Services for Lucknow Businesses</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <MiniServiceCard 
            icon={<FaMobileAlt className="text-2xl" />} 
            title="App Development" 
          />
          <MiniServiceCard 
            icon={<FaChartLine className="text-2xl" />} 
            title="Local Analytics" 
          />
          <MiniServiceCard 
            icon={<MdLocalOffer className="text-2xl" />} 
            title="Promotions" 
          />
          <MiniServiceCard 
            icon={<MdEmail className="text-2xl" />} 
            title="Email Marketing" 
          />
          <MiniServiceCard 
            icon={<FaHashtag className="text-2xl" />} 
            title="Hashtag Campaigns" 
          />
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col bg-[#1a1a1a] border border-[#2a3a4a] rounded-xl p-6 hover:border-[#f5a623] transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <div className="bg-[#0a2e52] group-hover:bg-[#f5a623] text-white p-3 rounded-lg mr-4 transition-colors duration-300">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

// Mini Service Card Component
const MiniServiceCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center bg-[#1a1a1a] border border-[#2a3a4a] rounded-lg p-6 hover:border-[#f5a623] transition-all duration-300">
      <div className="text-[#f5a623] mb-3">{icon}</div>
      <h3 className="text-white font-medium text-center">{title}</h3>
    </div>
  );
};

export default DigitalServices;