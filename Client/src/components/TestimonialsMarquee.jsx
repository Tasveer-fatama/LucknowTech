import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const TestimonialsMarquee = () => {
  const testimonials = [
    {
      name: "Rajesh Yadav",
      role: "CEO, Lucknow Handicrafts",
      location: "Chowk, Lucknow",
      stars: 5,
      message:
        "LucknowTech helped us digitize our 50-year-old Chikankari business. Our online sales grew by 300% in just 6 months!",
    },
    {
      name: "Priya Sharma",
      role: "Founder, Awadhi Flavors",
      location: "Hazratganj, Lucknow",
      stars: 5,
      message:
        "Their food delivery app solution transformed our traditional restaurant. Now we serve authentic Awadhi cuisine across UP!",
    },
    {
      name: "Arvind Singh",
      role: "Director, UP Tech Solutions",
      location: "Gomti Nagar, Lucknow",
      stars: 4,
      message:
        "Professional team with deep local market understanding. They helped us rebrand with a perfect mix of tech and Awadhi culture.",
    },
    {
      name: "Fatima Khan",
      role: "Owner, Nawabi Designs",
      location: "Aminabad, Lucknow",
      stars: 5,
      message:
        "From website to Instagram marketing, LucknowTech made our heritage products accessible to global customers. Exceptional service!",
    },
    {
      name: "Vikram Patel",
      role: "MD, UP Logistics",
      location: "Alambagh, Lucknow",
      stars: 4,
      message:
        "Their custom logistics software streamlined our operations across Uttar Pradesh. Highly recommended for local businesses!",
    },
    {
      name: "Neha Gupta",
      role: "Principal, City Montessori",
      location: "Indira Nagar, Lucknow",
      stars: 5,
      message:
        "The educational portal they developed helped us transition smoothly to hybrid learning during challenging times.",
    },
    {
      name: "Sameer Siddiqui",
      role: "Director, Rumi Tech Park",
      location: "Vibhuti Khand, Lucknow",
      stars: 5,
      message:
        "LucknowTech's digital marketing brought us 50+ new tech tenants in our business park. Truly understands local business needs.",
    },
    {
      name: "Ananya Tripathi",
      role: "Founder, Lucknow Walks",
      location: "Kaiserbagh, Lucknow",
      stars: 4,
      message:
        "Their tourism app made heritage walks in old Lucknow accessible to younger generations. Beautiful blend of tech and culture!",
    },
  ];

  return (
    <div className="bg-[#f8f5f0] py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#f5a623]"></div>
      
      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Heading with Lucknow motif */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2e52] mb-4">
            Lucknow Businesses Love Us
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from local entrepreneurs who've transformed their businesses with our 
            <span className="text-[#f5a623] font-medium"> digital solutions rooted in Lucknow's heritage</span>
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden py-4">
          <div className="flex animate-marquee space-x-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-80 sm:w-96 py-6 px-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 border border-gray-100"
              >
                <FaQuoteLeft className="text-2xl text-[#f5a623] mb-4 opacity-70" />
                
                {/* Testimonial Message */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {testimonial.message}
                </p>
                
                {/* Client Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0a2e52]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="flex text-[#f5a623]">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <MdLocationOn className="mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Trusted by <span className="font-bold text-[#0a2e52]">200+</span> Lucknow businesses across 
            <span className="text-[#f5a623]"> Hazratganj, Gomti Nagar, Chowk, </span> 
            and beyond
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsMarquee;