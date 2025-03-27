import React, { useState, useEffect } from "react";
import ModelFormPopup from "./ModelFormPopup";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const StartAProject = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();

  const handleMouseMove = (e) => {
    setCirclePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowCircle(true);
    controls.start({ scale: 1.1, transition: { duration: 0.3 } });
  };

  const handleMouseLeave = () => {
    setShowCircle(false);
    controls.start({ scale: 1, transition: { duration: 0.3 } });
  };

  useEffect(() => {
    // Preload any assets if needed
  }, []);

  return (
    <div
      className="text-white px-4 md:px-16 h-[32rem] md:h-[40rem] flex flex-col justify-center relative overflow-hidden bg-zinc-950"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#f5a623] opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Follow circle */}
      {showCircle && (
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-[#f5a623] flex items-center justify-center text-white font-bold text-sm cursor-pointer pointer-events-none z-10"
          style={{
            left: circlePosition.x - 40,
            top: circlePosition.y - 40,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Start
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="text-4xl md:text-6xl lg:text-7xl font-bold pb-4 max-w-full leading-tight mb-6 hover:text-[#f5a623] transition-colors duration-300 group"
            animate={controls}
          >
            <span className="relative inline-block">
              Start A Project
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#f5a623] group-hover:w-full transition-all duration-500"></span>
            </span>
            <FaArrowRight className="inline ml-4 group-hover:translate-x-2 transition-transform" />
          </motion.button>

          <p className="max-w-full md:max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
            Ready to transform your digital presence? Whether you're a heritage business in Chowk or a tech startup in Gomti Nagar, we craft tailored solutions for Lucknow's unique market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#f5a623] hover:bg-[#e6951a] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
            <Link to="/services" className="border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-2xl relative max-w-2xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-black transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
            <ModelFormPopup />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default StartAProject;