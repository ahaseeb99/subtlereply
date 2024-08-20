import React from "react";
import ConfidenceMeter from "./ConfidenceMeter";

const ProjectSection = () => {
  const pricingPlans = [
    {
      name: "Engagement",
      icon: "E",
      features: [
        "1 Community",
        "5 Keywords",
        "50 Replies",
        // Add other features here
      ],
    },
    // Add other pricing plans here
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-start">
      {/* Removed max-w-md to allow the div to take the full width */}
      <div className="shadow-2xl w-full">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-custom p-8 rounded mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-12 w-12 flex items-center justify-center bg-purple-600 mr-4">
                <span className="text-white text-2xl font-bold">
                  {plan.icon}
                </span>
              </div>
              <span className="text-white text-lg">{plan.name}</span>
            </div>
            <ul className="text-white space-y-5">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-6 w-6 mr-2">
                    {/* Add appropriate icon here */}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <ConfidenceMeter />
        <div className="">
          <h2 className="text-2xl font-bold text-white mb-6">
            Username & Password
          </h2>
          <div className="bg-black bg-opacity-20 p-4 rounded space-y-4">
            <input
              type="text"
              placeholder="u/AnnaSmith15"
              className="w-full p-4 text-white bg-customgrad border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-md"
            />
            <div className="flex items-center">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-4 text-white bg-customgrad border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-1 px-3 rounded-full transition duration-300 ease-in-out">
                Go To Reddit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
