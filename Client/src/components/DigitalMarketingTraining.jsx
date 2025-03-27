import React from "react";
import {
  FaCertificate,
  FaLaptopCode,
  FaHandshake,
  FaUserTie,
  FaComments,
  FaCalendarAlt,
} from "react-icons/fa";

const DigitalMarketingTraining = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-12">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Digital Marketing Training
            </h1>
            <p className="text-gray-600">
              Join NADM - National Academy of Digital Marketing to avail a
              plethora of benefits. Learn from the fastest growing Digital
              Marketing Agency in India.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <FaHandshake className="text-blue-500 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  100% Job Assistance
                </h2>
                <p className="text-gray-600">
                  We guarantee full assistance in job placement.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <FaCertificate className="text-yellow-500 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Certification from the Company
                </h2>
                <p className="text-gray-600">
                  We provide the certificates for your greater impact.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <FaUserTie className="text-green-500 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Personality Development
                </h2>
                <p className="text-gray-600">
                  We ensure the development of your personality with us.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 items-start">
              <FaComments className="text-purple-500 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Communication Skills
                </h2>
                <p className="text-gray-600">
                  We work to improvise your communication skills.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4 items-start">
              <FaCalendarAlt className="text-red-500 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Latest Curriculum 2024
                </h2>
                <p className="text-gray-600">
                  Learn what's the latest and be an expert in Digital Marketing.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-4 items-start">
              <FaLaptopCode className="text-indigo-500 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Earning through Freelancing
                </h2>
                <p className="text-gray-600">
                  Once you're digitally skilled, online earning gets easier.
                </p>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingTraining;
