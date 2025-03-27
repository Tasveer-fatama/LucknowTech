import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg= border-[1.2px] bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
