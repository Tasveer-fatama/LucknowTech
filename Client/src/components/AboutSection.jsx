import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-white text-gray-800 py-10 px-4 md:px-8 lg:px-16">
      {/* Container */}
      <div className="container mx-auto">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Marketing Team"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Main Content */}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-500 mb-4">
              We Are the Best Digital Marketing Company in Lucknow
            </h1>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Looking for the best digital marketing company in Lucknow? Your
              search ends here! We specialize in delivering comprehensive
              digital solutions tailored to your business needs. From search
              engine optimization (SEO) to social media marketing, pay-per-click
              (PPC) advertising, and content creation, we ensure your brand gets
              the visibility and recognition it deserves.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experienced professionals understands the local market
              dynamics and combines innovative strategies with proven techniques
              to drive measurable results. Whether you’re a startup or an
              established business, we are committed to helping you grow and
              stay ahead of the competition.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/400x300"
              alt="SEO Team"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
