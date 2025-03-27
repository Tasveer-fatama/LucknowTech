import React from "react";

const Logos = () => {
  return (
    <section className="bg-[#EB9126]  mx-6 rounded-3xl overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Partner Logos Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <p className="text-gray-600 text-lg">Trusted by Leading Brands</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Add placeholder logos or images */}
            {["Logo1", "Logo2", "Logo3", "Logo4", "Logo5"].map(
              (logo, index) => (
                <div
                  key={index}
                  className="bg-orange-100 rounded-md h-16 flex items-center justify-center"
                >
                  <span className="text-orange-500 font-bold">{logo}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-[#f7a645] rounded-t-[10000px]">
        
      </div>
    </section>
  );
};

export default Logos;
