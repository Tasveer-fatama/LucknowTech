import React from "react";

const WeWorkWith = () => {
  const data = [
    "Financial Services",
    "Manufacturing",
    "Construction & Building Services",
    "Retail & E-commerce",
    "Fashion & Textiles",
    "Automotive",
    "Energy & Renewables",
    "Technology & IT",
    "Insurance",
    "Public Sector",
    "Hospitality & Tourism",
    "SaaS & Software",
    "Transportation",
    "Education & EdTech",
    "Legal Services",
    "Healthcare",
    "Real Estate",
    "Agriculture Tech",
    "Food & Beverage",
    "Media & Entertainment",
    "Logistics",
    "Startups & Incubators",
    "Government Initiatives",
    "Smart City Solutions"
  ];

  return (
    <div className="h-auto bg-[#f8f5f0] flex flex-col px-4 sm:px-8 lg:px-16 justify-center max-w-8xl mx-auto py-16">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#0a2e52]">
          Industries We Empower in Lucknow & Beyond
        </h2>
        <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At LucknowTech, we combine local expertise with global digital solutions to 
          drive growth across diverse sectors. From Awadhi heritage businesses to 
          cutting-edge IT startups, we tailor strategies for Uttar Pradesh's unique market.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#f5a623]"
          >
            <p className="text-gray-800 font-medium flex items-center">
              <span className="text-yellow-400 mr-2">▸</span> {item}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center bg-white p-6 rounded-lg max-w-3xl mx-auto border border-gray-100 shadow-sm">
        <p className="text-gray-700">
          Specializing in Uttar Pradesh's growing sectors including heritage tourism tech, 
          handicraft e-commerce, and regional SaaS solutions.{" "}
          <span className="text-[#0a2e52] font-semibold">
            Contact us to discuss your industry-specific needs.
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeWorkWith;