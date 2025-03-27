import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
// Sample data from JSON
const services = [
  {
    title: "WhatsApp Chatbot",
    description:
      "Businesses may use Digital Jugglers WhatsApp chatbot services to improve customer experiences.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Digital Marketing",
    description:
      "Provides businesses collaboration friendly environment to attract new possible prospects.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2020/11/Outdoor-Slide.png",
  },
  {
    title: "Outdoor Marketing",
    description:
      "Take advantage of OOH Media to take spread message quickly to specific audience on the move.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Social Media Management",
    description:
      "Relevant tools facilitate authenticity, encourage audience engagement, generate media coverage.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Majority internet users’ click on the first five links on Google, be one of them.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Lead Generation",
    description:
      "Generating lead on digital media is a fast and effective tool with high conversion rates which brings new customers.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Image Branding",
    description:
      "A strong brand image equals to more customers recognizing your brand.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Graphic Designing",
    description: "With graphic designing create impressive marketing material.",
    image: "https://digitaljugglers.com/wp-content/uploads/2020/03/PPC-CPC.jpg",
  },
 
];

const Services = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
      <Link to="/services">
        <button className="  items-center justify-center  bg-yellow-400 inline-block">
          Explore All Services
        </button>
      </Link>
    </div>
  );
};

export default Services;
