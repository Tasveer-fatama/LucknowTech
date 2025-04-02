import React, {useEffect} from 'react'
import EveryPageHero from "./EveryPageHero";
import {  FaClipboardCheck, FaCogs, FaLeaf ,FaLinkedin,FaTwitter,FaInstagram,FaGithub,FaAward,FaQuoteLeft, FaLightbulb, FaRocket, FaServer, FaMobileAlt, FaChartLine} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Atishay Singh Bisht",
      role: "Graphic Designer",
      image: "/Atishaye.jpg",
    },
    {
      name: "Ashank Trivedi",
      role: "Digital Marketer, Video Editor",
      image: "/ashank.jpeg",
    },
    {
      name: "Shivani Trivedi",
      role: "HR Manager",
      image:"/shivanimam.jpg",
    },
    {
      name: "Tasveer fatama",
      role: "Full Stack Developer",
      image: "/tasveer.jpeg",
    },
    {
      name: "Harsh Rao",
      role: "Senior Full Stack Developer",
      image: "/Harsh.jpg",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <EveryPageHero
        text="About Our Team"
        para="Our priority is to deliver an exceptional service and our main focus is on your ROI and subsequently our success is based upon your success."
      />

      {/* Empowering Businesses Section */}
      <div className="px-4 sm:px-8 lg:px-16 bg-white py-12 md:py-16">
        <p className="text-3xl sm:text-4xl leading-tight">
          Empowering Businesses <br /> with{" "}
          <span className="font-semibold">Cutting-Edge Technology!</span>
        </p>
        <p className="text-gray-600 mt-2">Your Trusted Partner in Web Development & IT Solutions</p>
        <br />
        <p className="text-gray-700 max-w-3xl">
          At Lucknow Tech, we specialize in creating innovative and scalable digital 
          solutions. From full-stack web development to custom software and IT consulting, 
          our team is dedicated to delivering high-quality technology services. With expertise 
          in the MERN stack, cloud computing, and modern frameworks, we help businesses 
          transform their digital presence and achieve long-term success.
        </p>
      </div>

      {/* Our Ethos Section */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 text-white bg-zinc-950 py-12 md:py-16">
        {/* Header */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h4 className="text-sm uppercase mb-2 text-yellow-400">Our Ethos</h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-500">unique</span> operating philosophy
          </h1>
          <p className="text-gray-300 my-6">
            As an extremely principled company, we stand by the following core
            principles.
          </p>
        </div>

        {/* Principles Sections */}
        <div className="lg:w-1/2 space-y-6">
          {/* ROI Focused */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0">ROI Focused</h2>
              <FaChartLine className="text-yellow-500 text-4xl sm:text-5xl" />
            </div>
            <p className="text-gray-300">We succeed if you succeed—ROI is our top priority.</p>
          </div>

          {/* Best Practices */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0">Best Practices</h2>
              <FaClipboardCheck className="text-yellow-500 text-4xl sm:text-5xl" />
            </div>
            <p className="text-gray-300">
              We standardize best practices, ensuring consistent, high-quality service.
            </p>
          </div>

          {/* Efficient */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0">Efficient</h2>
              <FaCogs className="text-yellow-500 text-4xl sm:text-5xl" />
            </div>
            <p className="text-gray-300">
              Our tested formulas deliver more value without compromising quality.
            </p>
          </div>

          {/* Conscious */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0">Conscious</h2>
              <FaLeaf className="text-yellow-500 text-4xl sm:text-5xl" />
            </div>
            <p className="text-gray-300">
              We use green infrastructure and constantly review processes to minimize impact.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-b from-[#f8f5f0] to-white py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2e52] mb-3">
              The Vision Behind <span className="text-[#f5a623]">LucknowTech</span>
            </h2>
            <div className="w-20 h-1 bg-[#f5a623] mx-auto"></div>
          </div>

          {/* Founder/CEO Profile */}
          <div id="about" className="relative bg-white overflow-hidden rounded-xl shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12">
                <h2 className="my-4 text-xl sm:text-2xl md:text-3xl tracking-tight font-extrabold text-gray-900">
                  Dr. Abid Khan – Visionary Founder & CEO of Lucknow Tech
                </h2>
                <p className="text-gray-700 mb-4">
                  Dr. Abid Khan is a distinguished technology entrepreneur, innovator, and digital transformation expert, best known as the Founder & CEO of Lucknow Tech.
                </p>
                <p className="text-gray-700">
                  Founded with a mission to bridge the gap between technology and business, Lucknow Tech is a leading web development and IT solutions company that delivers cutting-edge digital solutions to businesses across India and globally.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover"
                  src="/Founderimage.jpg"
                  alt="Dr. Abid Khan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="bg-black py-12 md:py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-yellow-400 uppercase rounded-full bg-yellow-400 bg-opacity-10 mb-4">
        Our Creative Minds
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        The <span className="text-yellow-400">Lucknow Tech</span> Team
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
        A powerhouse of talent driving innovation in Uttar Pradesh's tech ecosystem. Each member brings unique expertise to craft exceptional digital experiences.
      </p>
    </div>

    {/* Team Grid - Fixed Image Display */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {teamMembers.map((member, index) => (
        <div 
          key={index} 
          className="group relative transition-all duration-300 hover:-translate-y-2"
        >
          {/* Team Card */}
          <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
            {/* Image container with fixed display */}
            <div className="absolute inset-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain sm:object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>
            
            {/* Info that appears on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-yellow-300 text-sm">{member.role.split(',').join(' • ')}</p>
              </div>
            </div>
            
            {/* Always visible name/role */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="font-bold text-white text-lg">{member.name}</h3>
              <p className="text-yellow-300 text-sm">{member.role.split(',')[0]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-12 md:mt-16 text-center">
      <button className="relative inline-flex items-center px-6 py-2 sm:px-8 sm:py-3 overflow-hidden text-base sm:text-lg font-medium text-yellow-400 border-2 border-yellow-400 rounded-full group hover:text-gray-900">
        <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-300 ease"></span>
        <Link  to="/career" className="relative flex items-center">
          Join Our Team
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link> 
      </button>
    </div>
  </div>
</section>

    </div>
  );
}

export default AboutUs;