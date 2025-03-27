import React from "react";

const AfterHeroSection = () => {
  return (
    <section className="">
      <div className="container mx-auto ">
        {/* Tailored Digital Strategies Section */}
        <div className=" p-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl f text-gray-900">
              Your Trusted Partner in Digital Marketing <br /> Driving Business Success
            </h2>
            <p className="text-gray-600 mt-2">
              with Tailored Digital Strategies
            </p>
          </div>

          {/* Strategies Grid */}
          <div className="">
            {[
              {
                title: "Targeted Campaigns",
                description:
                  "Precision marketing to reach your ideal audience.",
              },
              {
                title: "Multi-Platform Expertise",
                description:
                  "Expand your presence across all digital channels.",
              },
              {
                title: "Optimized ROI",
                description: "Maximize returns on your marketing investments.",
              },
              {
                title: "Data-Driven Strategies",
                description: "Leverage insights for smarter decision-making.",
              },
            ].map((strategy, index) => (
              <div
                key={index}
                className="flex flex-col items-center  rounded-lg shadow-sm p-6"
              >
                <div className="bg-orange-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  {/* Placeholder Icon */}
                  <span className="text-orange-500 font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {strategy.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterHeroSection;
