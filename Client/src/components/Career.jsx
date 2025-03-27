import React, { useState, useEffect } from "react";
import { FaBriefcase, FaEnvelope, FaPhoneAlt, FaFileAlt } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdWork } from "react-icons/md";

const CareerPage = () => {

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    position: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    console.log(formData);
  };

  return (
    <div className=" bg-zinc-950  ">
      {/* Hero Section */}
      <div className="flex items-center justify-center flex-col text-white py-20 px-6 h-96">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg">
            Be part of a dynamic and innovative team at the forefront of digital
            marketing.
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="container mx-auto py-16 px-6 bg-white rounded-xl">
  <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-zinc-950">
    Why Join Lucknow Tech?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-zinc-950 border  rounded-xl p-8 transform hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="flex items-center justify-center bg-yellow-600 rounded-full w-16 h-16 mb-6 mx-auto">
        <IoMdPeople className="text-3xl text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-center text-white">Tech Innovation Hub</h3>
      <p className="text-gray-300 text-center">
        Work with cutting-edge technologies in AI, IoT, and cloud computing at Uttar Pradesh's fastest growing tech hub.
      </p>
    </div>
    
    <div className="bg-black  rounded-xl p-8 transform hover:scale-105 transition duration-300  ">
      <div className="flex items-center justify-center bg-yellow-600 rounded-full w-16 h-16 mb-6 mx-auto">
        <MdWork className="text-3xl text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-center text-white">Startup Ecosystem</h3>
      <p className="text-gray-300 text-center">
        Be part of Lucknow's thriving startup culture with opportunities to work with incubators and investors.
      </p>
    </div>
    
    <div className="bg-black  rounded-xl p-8 transform hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-teal-500/20">
      <div className="flex items-center justify-center bg-yellow-600 rounded-full w-16 h-16 mb-6 mx-auto">
        <FaBriefcase className="text-3xl text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-center text-white">Skill Development</h3>
      <p className="text-gray-300 text-center">
        Regular hackathons, workshops, and training programs to keep you at the forefront of technology.
      </p>
    </div>
  </div>
  
  <div className="mt-12 text-center">
    <button className="px-8 py-3 bg-black text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700">
      Explore Current Openings
    </button>
  </div>
</div>

      {/* Job Openings */}
      <div className="bg-white py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Current Job Openings
          </h2>
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Digital Marketing Specialist
              </h3>
              <p className="text-gray-600">Location: Remote</p>
              <p className="mt-4">
                Looking for a talented individual with expertise in SEO, social
                media management, and PPC campaigns.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded ">
                Apply Now
              </button>
            </div>
            {/* Job 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Graphic Designer</h3>
              <p className="text-gray-600">Location: In-office, Lucknow</p>
              <p className="mt-4">
                Seeking a creative professional with skills in Adobe Suite and
                branding design.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded ">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Benefits of Working with Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaEnvelope className="text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold">Health Insurance</h3>
            <p>Comprehensive health coverage for you and your family.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaPhoneAlt className="text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold">Flexible Hours</h3>
            <p>
              Maintain a healthy work-life balance with our flexible working
              hours.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaFileAlt className="text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold">Learning Opportunities</h3>
            <p>
              Access to workshops, courses, and training to enhance your skills.
            </p>
          </div>
        </div>
      </div>

      {/* Application Form */}
      {/* <div className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Apply Now</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                <FaBriefcase className="inline-block mr-2" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                <FaEnvelope className="inline-block mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                <FaPhoneAlt className="inline-block mr-2" />
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Your Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                <MdWork className="inline-block mr-2" />
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="Position Applying For"
                value={formData.position}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                <FaFileAlt className="inline-block mr-2" />
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md shadow-sm hover:bg-blue-700"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default CareerPage;
