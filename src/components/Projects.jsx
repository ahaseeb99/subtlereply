import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";  
import ProjectDashboard from "./ProjectDashboard";
import {  useNavigate } from "react-router-dom";


const Projects = () => {


  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center pt-12">
      <div className="w-full px-4 lg:w-4/5">
      <ProfileHeader />
      <ProjectDashboard/>

        <h2 className="text-xl font-bold text-white my-4">Your Projects</h2>
        <div className="bg-custom border-2 border-purple-400 rounded-lg p-4 mb-8">
          <p className="text-white">This is where project details will be displayed.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
