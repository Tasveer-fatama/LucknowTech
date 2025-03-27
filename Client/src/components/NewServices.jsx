import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import {
  FaSearch,
  FaDesktop,
  FaUsers,
  FaChartLine,
  FaPaintBrush,
  FaShoppingCart,
  FaMobileAlt,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NewServices = () => {
  const data = [
    {
      heading: "SEO & Digital Marketing",
      link: "/seo",
      icon: <FaSearch className="text-yellow-400 text-5xl mb-2" />,
      para: [
        "Boost your online presence with advanced SEO strategies.",
        "Drive targeted traffic to your website.",
        "Enhance brand visibility and customer engagement.",
      ],
    },
    {
      heading: "Web Design & Development",
      link: "/web-design",
      icon: <FaDesktop className="text-blue-400 text-5xl mb-2" />,
      para: [
        "Craft stunning, responsive websites tailored to your brand.",
        "Deliver seamless user experiences across all devices.",
        "Incorporate modern design trends and functionalities.",
      ],
    },
    {
      heading: "Social Media Management",
      link: "/social-media-management",
      icon: <FaUsers className="text-purple-400 text-5xl mb-2" />,
      para: [
        "Manage and grow your social media presence effectively.",
        "Create engaging content to connect with your audience.",
        "Run targeted ad campaigns for maximum reach.",
      ],
    },
    {
      heading: "Graphic Design & Branding",
      link: "/graphic-designing",
      icon: <FaPaintBrush className="text-red-400 text-5xl mb-2" />,
      para: [
        "Design captivating visuals that reflect your brand identity.",
        "Create logos, banners, and marketing materials.",
        "Ensure consistent branding across all platforms.",
      ],
    },
    {
      heading: "E-commerce Solutions",
      link: "/ecommerce-solutions",
      icon: <FaShoppingCart className="text-orange-400 text-5xl mb-2" />,
      para: [
        "Build scalable and secure e-commerce platforms.",
        "Optimize product listings for better conversions.",
        "Integrate seamless payment gateways.",
      ],
    },
    {
      heading: "Mobile & Web App Development",
      link: "/application-development",
      icon: <FaMobileAlt className="text-teal-400 text-5xl mb-2" />,
      para: [
        "Develop custom mobile and web applications.",
        "Ensure high performance and user-friendly interfaces.",
        "Incorporate cutting-edge features and technologies.",
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".service-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 75,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);
    useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="text-white flex flex-col px-4 md:px-16 py-8">
      {/* Top Section */}
      <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <p className="text-start underline text-base py-4">
            TRANSFORMING BUSINESSES THROUGH
          </p>
          <p className="text-3xl md:text-4xl font-semibold leading-snug">
            Innovative Digital Solutions,{" "}
            <span className="text-[#FFD74B] font-semibold">
              tailored <br /> for your success
            </span>{" "}
            in the digital world.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.map((service, index) => (
          <div
            key={index}
            className="service-card rounded-[20px] md:py-6 lg:py-6 p-6 shadow-md hover:shadow-lg transition-all ease-in-out hover:shadow-[#3b362163] "
          >
            <div className="flex flex-col">
              <p className="text-xl">{service.icon}</p>
              <h3 className="text-2xl font-semibold mb-4">{service.heading}</h3>
            </div>
            <ul className="space-y-2">
              {service.para.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewServices;