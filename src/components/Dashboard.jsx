import React from "react";
import ProfileHeader from "./ProfileHeader";  

const Dashboard = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center pt-12">
      <div className="w-full px-4 lg:w-4/5">
        <ProfileHeader />

        <h2 className="text-xl font-bold text-white my-4">Dashboard</h2>
        <div className="bg-custom border-2 border-purple-400 rounded-lg p-4 mb-8">
          <p className="text-white">This is where dashboard metrics and graphs will be displayed.</p>
          {/* You can add more components related to the dashboard here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
