import React from "react";
import "./Marquee.css"; // Ensure you have your custom CSS file

const marqueeItems = [
  "● SEO",
  "● Web Design",
  "● Social Media Management",
  "● Graphic Designing",
  "● Lead Generation",
  "● Mobile Applications",
  "● E-commerce Solutions",
  "● SEO",
  "● Web Design",
  "● Social Media Management",
  "● Graphic Designing",
  "● Lead Generation",
  "● Mobile Applications",
  "● E-commerce Solutions",
  "● SEO",
  "● Web Design",
  "● Social Media Management",
  "● Graphic Designing",
  "● Lead Generation",
  "● Mobile Applications",
  "● E-commerce Solutions",
  "● SEO",
  "● Web Design",
  "● Social Media Management",
  "● Graphic Designing",
  "● Lead Generation",
  "● Mobile Applications",
  "● E-commerce Solutions",

];

const Marquee = () => {
  return (
    <div className="marquee-container mt-8 bg-white">
      <div className="marquee-content ">
        {marqueeItems.map((item, index) => (
          <div className="marquee-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
