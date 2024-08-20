import React from "react";
import TrainBotSection from "./TrainBotSection";
import PlanSection from "./PlanSection";

const ProjectDashboard = () => {
  return (
    <div className="flex flex-wrap -mx-4 pt-5">
      <div className="lg:w-2/3 ">
        <TrainBotSection />
      </div>

      <div className="lg:w-1/3 ">

      <PlanSection />
      </div>
    </div>
  );
};

export default ProjectDashboard;
