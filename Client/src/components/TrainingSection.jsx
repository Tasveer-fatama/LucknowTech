import React from "react";

const TrainingSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h5 className="text-3xl font-bold mb-6">Digital Marketing Training</h5>
      <ul className="space-y-4 text-gray-600">
        <li>Job Assistance</li>
        <li>Google Certifications</li>
        <li>Personalized Development</li>
      </ul>
      <button className="bg-orange-500 text-white px-6 py-3 mt-6 rounded hover:bg-orange-600">
        Learn More
      </button>
    </section>
  );
};

export default TrainingSection;
