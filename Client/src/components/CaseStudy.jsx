import React from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import work from "../assets/work.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work4 from "../assets/work4.png";
import work6 from "../assets/work6.png";
import work7 from "../assets/work7.png";
import work8 from "../assets/work8.png";
import work9 from "../assets/work9.png";
import work10 from "../assets/work10.png";
import work11 from "../assets/work11.png";

const CaseStudy = () => {
  const projects = [
    {
      img: work,
      heading: "Project Alpha",
      para: "A revolutionary project focused on delivering outstanding performance.",
      tags: ["Technology", "Innovation"]
    },
    {
      img: work1,
      heading: "Innovative Design",
      para: "Crafting sleek and modern solutions tailored to our clients' needs.",
      tags: ["Design", "UI/UX"]
    },
    {
      img: work2,
      heading: "Sustainable Growth",
      para: "Ensuring sustainable growth strategies for long-term success.",
      tags: ["Strategy", "Consulting"]
    },
    {
      img: work4,
      heading: "Cutting-Edge Technology",
      para: "Leveraging the latest technology to drive results.",
      tags: ["Development", "Tech"]
    },
    {
      img: work6,
      heading: "Customer Excellence",
      para: "Delivering exceptional results by focusing on customer satisfaction.",
      tags: ["Service", "Support"]
    },
    {
      img: work7,
      heading: "Operational Efficiency",
      para: "Streamlining processes for maximum productivity.",
      tags: ["Operations", "Management"]
    },
    {
      img: work8,
      heading: "Building Dreams",
      para: "Trusted Construction & Infrastructure Solutions for a Better Tomorrow",
      tags: ["Construction", "Real Estate"]
    },
    {
      img: work9,
      heading: "Empowering Education",
      para: "A Premier Institution for Academic Excellence and Holistic Growth",
      tags: ["Education", "Learning"]
    },
    {
      img: work10,
      heading: "Urban Development",
      para: "Excellence in Construction, Innovation in Design.",
      tags: ["Architecture", "Development"]
    },
    {
      img: work11,
      heading: "Healthcare Evolution",
      para: "Excellence in Paramedical Education for a Healthier Tomorrow",
      tags: ["Healthcare", "Education"]
    }
  ];

  return (
    <div className="bg-[#f8f5f0] px-4 md:px-8 lg:px-16 py-12 md:py-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <p className="text-[#f5a623] uppercase tracking-wider font-medium mb-2">
          Our Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a2e52] leading-tight mb-4">
          Case Studies <span className="text-[#f5a623]">That Inspire</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          We always put our clients first to deliver our best time after time.
          Below is some of our proudest work.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img
                src={project.img}
                alt={project.heading}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-[#f5a623] text-white text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#0a2e52] mb-2 group-hover:text-[#f5a623] transition-colors">
                {project.heading}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                {project.para}
              </p>
             </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <Link 
          to="/projects" 
          className="inline-flex items-center bg-[#0a2e52] hover:bg-[#1a3a62] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          View All Projects
          <FiArrowRight className="ml-2" />
        </Link>
      </div>

      {/* Scroll Indicator (for mobile) */}
      <div className="flex lg:hidden justify-center mt-8 text-sm text-gray-500 items-center">
        <FiChevronDown className="animate-bounce mr-2" />
        <span>Scroll to see more</span>
      </div>
    </div>
  );
};

export default CaseStudy;