import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-white text-lg font-bold mt-2">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-sm font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2"></ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className={`relative w-full  mx-auto`}  style={{ height: '900px' }}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>HOW IT WORKS</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          It’s a Simple Process.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col items-center justify-center">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
